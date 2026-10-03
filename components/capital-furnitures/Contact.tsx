import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

const phone = "+919495668751";
const whatsapp = "https://wa.me/919495668751";
const directions =
  "https://www.google.com/maps/search/?api=1&query=Capital+Furnitures%2C+Kuniyamuthur%2C+opposite+Nahdi+Mandi+Restaurant%2C+Coimbatore%2C+Tamil+Nadu%2C+India";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-image" aria-hidden="true">
        <Image
          src="/images/project-retreat.jpg"
          alt=""
          fill
          sizes="100vw"
          className="cover-image"
        />
      </div>
      <div className="contact-shade" />
      <div className="section-shell contact-content">
        <Reveal className="contact-main">
          <p className="eyebrow eyebrow--light">Capital Furnitures</p>
          <h2>
            Let&apos;s find
            <br />
            your <em>perfect fit.</em>
          </h2>
          <p>
            Get in touch with Nazeer to talk about furniture for your home or
            workplace.
          </p>
          <p className="contact-owner">
            <strong>Nazeer</strong> · Owner of Capital Furnitures
          </p>
          <div className="contact-actions">
            <a className="button button--light" href={`tel:${phone}`}>
              Call Now <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--outline-light"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <ArrowLink
              className="contact-directions"
              href={directions}
              light
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal className="contact-details" direction="right" delay={100}>
          <div>
            <span>VISIT CAPITAL FURNITURES</span>
            <p>
              Kuniyamuthur,
              <br />
              Opposite Nahdi Mandi Restaurant,
              <br />
              Coimbatore, Tamil Nadu, India
            </p>
          </div>
          <div>
            <span>GIVE US A CALL</span>
            <a href={`tel:${phone}`}>+91 9495668751</a>
          </div>
          <div>
            <span>WHATSAPP</span>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              +91 9495668751
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
