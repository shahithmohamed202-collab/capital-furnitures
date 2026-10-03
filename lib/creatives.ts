import type { Shot } from "./shots";

export function creative(d: Shot): string {
  const im = `<img alt="" src="${d.url}">`;
  switch (d.v) {
    case "pay":
      return (
        `<div class="fill" style="background:#efedea"></div>` +
        `<div class="ph" style="top:112px;bottom:0">${im}</div>` +
        `<svg class="ph" style="top:118px;bottom:0" viewBox="0 0 130 182" preserveAspectRatio="none">` +
        `<g stroke="#e5202f" stroke-width="8" fill="none" opacity=".92" stroke-linecap="square">` +
        `<path d="M2 42h30M14 30v96M4 100l26-16"/>` +
        `<path d="M96 34v58M120 34v58M96 92q12 15 24 0"/>` +
        `<path d="M92 108l14 34M126 108l-12 34"/></g></svg>` +
        `<div class="cv" style="top:20px;text-align:center;font-size:3.4px;letter-spacing:.15em;color:#8d9298">METHOD OF CHECKOUTS</div>` +
        `<div class="cv t-big" style="top:32px;font-size:14px;color:#16171b">Checkouts</div>` +
        `<div class="cv t-big" style="top:47px;font-size:14px;color:#e5202f">Quick n simple</div>` +
        `<div class="cv" style="top:76px;font-size:5.2px;font-weight:700;color:#16171b;line-height:1.7">` +
        `<div><b class="dot"></b>SPEND VIA <b>ACH</b></div>` +
        `<div style="margin-top:8px"><b class="dot sq"></b>OR AT MAX <b>12X</b><br>` +
        `<span style="margin-left:11px">ON CREDIT</span></div></div>`
      );
    case "launch":
      return (
        `<div class="fill" style="background:linear-gradient(168deg,#f9d9e5,#f3bdd2 55%,#e8a3c0)"></div>` +
        `<div class="ph" style="top:100px;bottom:0">${im}<div class="fill" style="background:linear-gradient(180deg,rgba(249,217,229,.97),rgba(249,217,229,0) 30%)"></div></div>` +
        `<div class="cv t-serif" style="top:36px;font-size:17px;color:#b03a63">COLLECTION</div>` +
        `<div class="cv t-serif" style="top:55px;font-size:17px;color:#b03a63">EXCLUSIVE!</div>`
      );
    case "shop":
      return (
        `<div class="fill" style="background:#fff"></div>` +
        `<div class="ph" style="top:0;height:148px">${im}</div>` +
        `<div class="cv" style="top:158px;font-size:5.4px;font-weight:700;letter-spacing:.09em;color:#16171b">REGIME AT DAWNS</div>` +
        `<div class="cv" style="top:168px;font-size:4.2px;color:#7b8087">Cleanse · Serum · Moisturize</div>` +
        `<div style="position:absolute;left:10px;top:180px;padding:4px 11px;border-radius:20px;background:#16171b;font-size:4.6px;font-weight:600;color:#fff;letter-spacing:.05em">Acquire today</div>`
      );
    case "brand":
      return (
        `<div class="fill" style="background:linear-gradient(180deg,#0a2a4a,#0d3a63 50%,#08192b)"></div>` +
        `<div class="ph" style="top:92px;bottom:0">${im}<div class="fill" style="background:linear-gradient(180deg,rgba(10,42,74,.98),rgba(10,42,74,0) 36%)"></div></div>` +
        `<div class="cv" style="top:16px;font-size:4.2px;line-height:1.7;color:rgba(255,255,255,.82);width:74px">Formulas light, assessed hypoallergenically n designed with a new ritual — revealing since a starting moment.</div>` +
        `<div style="position:absolute;right:10px;top:16px;font-size:5.4px;font-weight:600;color:#fff;opacity:.92">✳ Vertex</div>`
      );
    case "frete":
      return (
        `<div class="fill" style="background:linear-gradient(158deg,#4a0c80 0%,#7a16a6 40%,#a81fc6 66%,#5c0e90 100%)"></div>` +
        `<div class="ph" style="top:140px;bottom:0;opacity:.45;mix-blend-mode:overlay">${im}</div>` +
        `<div class="fill" style="background:radial-gradient(44% 16% at 50% 62%, rgba(255,255,255,.92), rgba(255,255,255,0) 72%)"></div>` +
        `<div style="position:absolute;left:-6px;right:-6px;top:44px;height:13px;background:#ff2d8a;transform:rotate(-2.6deg);box-shadow:0 4px 12px rgba(255,45,138,.5)"></div>` +
        `<div style="position:absolute;left:0;right:0;top:45.5px;transform:rotate(-2.6deg);text-align:center;font-size:5.6px;font-weight:700;letter-spacing:.05em;color:#fff">OBTAIN AT HOME AND</div>` +
        `<div class="cv t-big" style="top:64px;font-size:24px;color:#fff;text-shadow:0 3px 0 rgba(84,9,124,.6)">Ships</div>` +
        `<div class="cv t-big" style="top:87px;font-size:24px;color:#fff;text-shadow:0 3px 0 rgba(84,9,124,.6)">Gratis</div>` +
        `<div class="cv t-big" style="top:113px;font-size:19px;color:#fff">+</div>`
      );
    case "power":
      return (
        `<div class="ph phf">${im}</div>` +
        `<div class="fill" style="background:linear-gradient(180deg,rgba(6,5,10,0) 34%,rgba(6,5,10,.55) 52%,rgba(6,5,10,.92) 72%)"></div>` +
        `<div class="cv t-serif" style="top:132px;font-size:16px;color:#fff">A POWER</div>` +
        `<div class="cv t-serif" style="top:150px;font-size:16px;color:#fff">FEMININE</div>` +
        `<div class="cv" style="top:171px;font-size:4.4px;letter-spacing:.07em;color:rgba(255,255,255,.85)">is echoing in all we acquire</div>`
      );
    case "off":
      return (
        `<div class="ph phf">${im}</div>` +
        `<div class="fill" style="background:linear-gradient(180deg,rgba(3,9,20,0) 30%,rgba(3,9,20,.6) 48%,rgba(3,9,20,.95) 70%)"></div>` +
        `<div class="cv t-big" style="top:126px;font-size:10px;color:#fff;opacity:.9">On sale · til</div>` +
        `<div class="cv t-big" style="top:139px;font-size:22px;color:#3fe3ff;text-shadow:0 0 16px rgba(63,227,255,.5)">50% off</div>`
      );
    default:
      return (
        `<div class="ph phf">${im}</div>` +
        `<div class="fill" style="background:linear-gradient(180deg,rgba(4,8,16,0) 38%,rgba(4,8,16,.85) 68%)"></div>` +
        `<div class="cv" style="top:150px;font-size:5.4px;font-weight:600;letter-spacing:.2em;color:#fff">${d.t ?? ""}</div>`
      );
  }
}
