import { benefits } from "./data";
import { Reveal } from "./Reveal";

export function WhyCapitalFurnitures() {
  return (
    <section className="why section-pad">
      <div className="section-shell">
        <Reveal className="why-intro">
          <p className="eyebrow eyebrow--light">The difference is in the detail</p>
          <h2 className="section-heading section-heading--light">
            Good design is felt
            <br />
            <span>in every detail.</span>
          </h2>
          <p className="why-description">
            Beautifully made is only the beginning. We make sure every part of
            your experience feels considered, too.
          </p>
        </Reveal>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <Reveal
              className="benefit"
              delay={(index % 3) * 90}
              key={benefit.number}
            >
              <span className="benefit-number">{benefit.number}</span>
              <span className="benefit-mark" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M7 20h26M20 7v26" />
                  <circle cx="20" cy="20" r="13" />
                </svg>
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
