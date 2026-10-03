import Image from "next/image";
import { galleryItems } from "./data";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <div className="section-shell">
        <Reveal className="section-intro gallery-intro">
          <div>
            <p className="eyebrow eyebrow--dark">A closer look</p>
            <h2 className="section-heading">
              The little details.
              <br />
              <span>The feeling of home.</span>
            </h2>
          </div>
          <span className="section-count">A CAPITAL FURNITURES FIELD GUIDE</span>
        </Reveal>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <Reveal
              className={`gallery-item ${item.className}`}
              delay={(index % 3) * 80}
              key={item.title}
            >
              <a href="#contact" className="gallery-link">
                <div className="gallery-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="cover-image"
                  />
                  <span className="gallery-hover-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="gallery-caption">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
