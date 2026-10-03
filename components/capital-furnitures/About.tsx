import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-shell about-layout">
        <Reveal className="about-copy">
          <p className="eyebrow eyebrow--dark">A little about us</p>
          <h2 className="section-heading">
            Thoughtful by nature.
            <br />
            <span>Made to last.</span>
          </h2>
          <p className="body-copy">
            Capital Furnitures creates premium furniture and custom furnishing
            for homes and commercial spaces, with a focus on thoughtful design,
            quality, and practical solutions.
          </p>
          <p className="body-copy body-copy--muted">
            From furniture selection to custom furnishing, the team can help
            identify practical options for your space.
          </p>
          <p className="owner-credit">
            <strong>Meet Nazeer</strong>
            <span>Owner of Capital Furnitures</span>
          </p>
          <ArrowLink href="#contact">Get in touch</ArrowLink>
          <div className="about-signoff">
            <span>DESIGNED WITH PURPOSE</span>
            <span className="about-signoff-line" />
            <span>BUILT WITH CARE</span>
          </div>
        </Reveal>

        <Reveal className="about-visual" direction="right" delay={120}>
          <div className="about-image-frame">
            <Image
              src="/images/craftsmanship.jpg"
              alt="Natural materials and bespoke furniture in a carefully composed living space"
              fill
              sizes="(max-width: 800px) 90vw, 48vw"
              className="cover-image"
            />
          </div>
          <div className="about-note">
            <span className="about-note-mark">C.</span>
            <p>Every piece begins with a conversation.</p>
          </div>
          <span className="image-index">01 — CAPITAL FURNITURES</span>
        </Reveal>
      </div>
    </section>
  );
}
