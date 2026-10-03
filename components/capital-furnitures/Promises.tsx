import { Reveal } from "./Reveal";

const promises = [
  {
    title: "Thoughtful design",
    description:
      "Furniture and furnishing selected to suit your space and everyday needs.",
  },
  {
    title: "Custom solutions",
    description:
      "Options shaped around the way you want your home or workplace to feel.",
  },
  {
    title: "A personal approach",
    description:
      "Talk with our team about your ideas, requirements, and next steps.",
  },
];

export function Promises() {
  return (
    <section
      className="promises section-pad"
      aria-labelledby="promises-heading"
    >
      <div className="section-shell">
        <Reveal className="promises-intro">
          <p className="eyebrow eyebrow--dark">Capital Furnitures</p>
          <h2 className="section-heading" id="promises-heading">
            Furniture for living.
            <br />
            <span>Thoughtfully chosen.</span>
          </h2>
        </Reveal>

        <div className="promise-grid">
          {promises.map((promise, index) => (
            <Reveal
              className="promise"
              delay={index * 90}
              key={promise.title}
            >
              <span className="promise-number">0{index + 1}</span>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
