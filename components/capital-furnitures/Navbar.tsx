"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { navigationLinks } from "./data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const shouldRestoreFocus = !menuOpen && wasMenuOpenRef.current;

    const focusTimer = window.setTimeout(() => {
      if (menuOpen) {
        navigationRef.current
          ?.querySelector<HTMLAnchorElement>("a")
          ?.focus({ preventScroll: true });
      } else if (shouldRestoreFocus) {
        menuToggleRef.current?.focus({ preventScroll: true });
      }
    });
    wasMenuOpenRef.current = menuOpen;

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape" && menuOpen) setMenuOpen(false);
  };

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      return;
    }

    if (event.key !== "Tab") return;

    const links = navigationRef.current?.querySelectorAll<HTMLAnchorElement>(
      ".site-nav-links a, .nav-cta",
    );
    if (!links?.length) return;

    const first = links[0];
    const last = links[links.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}${menuOpen ? " site-header--open" : ""}`}
    >
      <a
        href="#home"
        className="wordmark"
        aria-label="Capital Furnitures home"
        onClick={() => setMenuOpen(false)}
      >
        Capital Furnitures
      </a>

      <button
        className="menu-toggle"
        type="button"
        ref={menuToggleRef}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        onKeyDown={handleToggleKeyDown}
      >
        <span />
        <span />
      </button>

      <nav
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        ref={navigationRef}
        id="primary-navigation"
        aria-label="Primary navigation"
        onKeyDown={handleNavigationKeyDown}
      >
        <div className="site-nav-links">
          {navigationLinks.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              style={{ "--menu-index": index } as CSSProperties}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
