"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const moveHero = (event: PointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    heroRef.current?.style.setProperty("--hero-x", `${x}px`);
    heroRef.current?.style.setProperty("--hero-y", `${y}px`);
  };

  const resetHero = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    heroRef.current?.style.setProperty("--hero-x", "0px");
    heroRef.current?.style.setProperty("--hero-y", "0px");
  };

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      onPointerMove={moveHero}
      onPointerLeave={resetHero}
    >
      <div className="hero-image-wrap" aria-hidden="true">
        <Image
          src="/images/hero-living.jpg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="hero-image"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-rule" />
          Capital Furnitures — Premium Furniture & Custom Furnishing
        </p>
        <h1>
          Furniture Crafted
          <br />
          <span>For the Way You Live.</span>
        </h1>
        <p className="hero-description">
          Premium furniture and custom furnishing designed to bring comfort,
          character and style to your space.
        </p>
        <div className="hero-actions">
          <a className="button button--light" href="#collections">
            Explore Collection <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link text-link--light" href="#contact">
            Contact Us <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-caption">
        <span>FURNITURE CRAFTED FOR LIVING</span>
        <span>01 / 05</span>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to About">
        <span />
      </a>
      <div className="hero-side-note">FURNITURE CRAFTED FOR LIVING</div>
    </section>
  );
}
