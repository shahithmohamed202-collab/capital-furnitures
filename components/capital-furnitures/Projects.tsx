import Image from "next/image";
import { projects } from "./data";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-shell">
        <Reveal className="section-intro">
          <div>
            <p className="eyebrow eyebrow--dark">A few places we call ours</p>
            <h2 className="section-heading">
              Made for living.
              <br />
              <span>Made to belong.</span>
            </h2>
          </div>
          <span className="section-count">SELECTED PROJECTS · FOUR INTERIORS</span>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className={`project-card ${project.className}`}
              delay={index % 2 === 1 ? 100 : 0}
              key={project.title}
            >
              <a href="#contact" className="project-link">
                <div className="project-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={
                      project.className
                        ? "(max-width: 760px) 100vw, 68vw"
                        : "(max-width: 760px) 100vw, 48vw"
                    }
                    className="cover-image"
                  />
                  <span className="project-open" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="project-caption">
                  <div>
                    <p className="eyebrow eyebrow--dark">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>
                  <span className="project-number">
                    0{index + 1} <span>/ 04</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
