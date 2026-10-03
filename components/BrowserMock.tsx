import { STORE } from "@/lib/shots";

export function BrowserMock() {
  return (
    <div className="browser">
      <div className="bar">
        <div className="dots">
          <i style={{ background: "#ee5c62" }} />
          <i style={{ background: "#f6b719" }} />
          <i style={{ background: "#12c02f" }} />
        </div>
        <div className="omni">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.4" />
            <path d="M20 20l-3.8-3.8" stroke="#fff" strokeWidth="2.4" />
          </svg>
          <span>Shop Focused - Skin Care</span>
        </div>
        <div className="tools">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 16V4m0 0L8 8m4-4 4 4" />
            <path d="M4 15v5h16v-5" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 3 3 8l9 5 9-5-9-5Z" fill="#fff" fillOpacity="0.95" />
            <path d="M3 13l9 5 9-5" opacity="0.55" />
          </svg>
        </div>
      </div>
      <div className="page">
        <div className="ann">
          <u className="l">‹</u>
          <span>Moisturized daily at home</span>
          <u className="r">›</u>
        </div>
        <div className="shoplogo">
          <em>GLOW</em>
          <i>SKIN CARE</i>
        </div>
        <div className="shopicons">
          <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.8-3.8" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4.5 21c0-4.2 3.4-6.6 7.5-6.6s7.5 2.4 7.5 6.6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            <path d="M5.5 8h13l-1.2 12H6.7L5.5 8Z" />
            <path d="M9 8V6.2A3 3 0 0 1 15 6.2V8" />
          </svg>
        </div>
        <div className="pagebody">
          <div className="pghero">
            <img alt={STORE.hero.alt} src={STORE.hero.url} />
            <div className="scrim" />
            <div className="copy">
              <u>Just added</u>
              <em>
                Let your beauty
                <br />
                be sacred.
              </em>
              <i>EXPLORE TODAY</i>
            </div>
          </div>
          <div className="pgsec">
            <b>Best reviewed</b>
            <u>see more</u>
          </div>
          <div className="pggrid">
            {STORE.products.map((p) => (
              <div className="pgcard" key={p.name}>
                <div className="ph">
                  <img alt={p.alt} src={p.url} />
                  {p.tag ? <span className="tag">{p.tag}</span> : null}
                </div>
                <b>{p.name}</b>
                <i>{p.meta}</i>
                <s>
                  {p.price}
                  {p.was ? <span>{p.was}</span> : null}
                </s>
              </div>
            ))}
          </div>
          <div className="pgstrip">
            <span>Ships gratis north of $ 199</span>
            <span>Pay 12x nil rates</span>
            <span>Swaps in 30 days</span>
            <span>Hypoallergenically checked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
