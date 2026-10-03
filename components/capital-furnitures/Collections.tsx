import Image from "next/image";
import { collections } from "./data";
import { Reveal } from "./Reveal";

export function Collections() {
  return (
    <section className="collections section-pad" id="collections">
      <div className="section-shell">
        <Reveal className="section-intro">
          <div>
            <p className="eyebrow eyebrow--dark">Find your feeling</p>
            <h2 className="section-heading">
              Spaces for the
              <br />
              <span>way you live.</span>
            </h2>
          </div>
          <p className="section-intro-note">
            A considered collection of furniture, made around the moments that
            make a house feel like yours.
          </p>
        </Reveal>

        <div className="collection-grid">
          {collections.map((item, index) => (
            <Reveal
              className={`collection-card collection-card--${index + 1}`}
              delay={index % 3 === 1 ? 100 : 0}
              key={item.title}
            >
              <a
                href="#contact"
                className="collection-image-link"
                aria-label={`Discuss a custom ${item.title.toLowerCase()} design`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="cover-image"
                />
                <span className="collection-number">{item.number}</span>
                <span className="collection-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="collection-meta">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="collection-index">{item.number}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
