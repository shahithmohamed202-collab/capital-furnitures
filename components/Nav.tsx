import { CyanButton } from "./CyanButton";
import { LogoMark } from "./LogoMark";

const LINKS = ["Origin", "Learn how", "Core Vertex", "Prices", "Support"];

export function Nav() {
  return (
    <nav className="nav">
      <LogoMark />
      <div className="wm">
        <div className="kick">SHOPS</div>
        <div className="name" id="wmName">
          VERTEX
        </div>
      </div>
      <button
        type="button"
        className="burger"
        aria-label="Opens menu"
        aria-expanded="false"
        aria-controls="navmenu"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="navmenu" id="navmenu">
        <div className="links" id="links">
          {LINKS.map((label) => (
            <a key={label} href="#">
              {label}
            </a>
          ))}
        </div>
        <CyanButton labelId="ctaLabel" label="Build new shop" />
      </div>
    </nav>
  );
}
