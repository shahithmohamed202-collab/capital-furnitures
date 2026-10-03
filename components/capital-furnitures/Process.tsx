import type { CSSProperties } from "react";
import { processStages } from "./data";
import { Reveal } from "./Reveal";

type ProcessStageStyle = CSSProperties & {
  "--stage-delay": string;
};

export function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="section-shell">
        <Reveal className="process-heading">
          <div>
            <p className="eyebrow eyebrow--dark">From first hello to home</p>
            <h2 className="section-heading">
              Well made starts
              <br />
              <span>with a good process.</span>
            </h2>
          </div>
          <p className="section-intro-note">
            No guesswork. Just good people, clear steps, and a shared love of
            getting the details right.
          </p>
        </Reveal>

        <Reveal className="process-list-wrap">
          <ol className="process-list">
            {processStages.map((stage, index) => (
              <li
                className="process-stage"
                key={stage.number}
                style={
                  { "--stage-delay": `${index * 70}ms` } as ProcessStageStyle
                }
              >
                <span className="process-number">{stage.number}</span>
                <span className="process-marker" aria-hidden="true" />
                <div className="process-copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
