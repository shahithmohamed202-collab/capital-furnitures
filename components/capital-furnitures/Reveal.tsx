"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (
      prefersReducedMotion.matches ||
      document.visibilityState === "hidden" ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("reveal-ready");
    const isTouchLayout = window.matchMedia(
      "(max-width: 760px), (pointer: coarse)",
    ).matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: isTouchLayout ? 0.04 : 0.12,
        rootMargin: isTouchLayout ? "0px 0px -12px 0px" : "0px 0px -36px 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`reveal reveal--${direction} ${className}`}
      ref={elementRef}
      style={{ "--reveal-delay": `${delay}ms` } as RevealStyle}
    >
      {children}
    </div>
  );
}
