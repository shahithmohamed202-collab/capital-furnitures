import { creative } from "./creatives";
import { SHOTS } from "./shots";

export const CW = 1172;
export const CH = 657;
export const TAB_MAX = 1080;
export const TAB_MIN = 701;
export const DW_MIN = 920;
const R = 891; // ring radius; camera sits at ring centre
const N = 37;
const STEP = 360 / 37; // ~9.7297°
const CULL = 42;
const SPEED = 1.9; // deg/s

let k = 1;
let mobile = false;
let phase = -2;
let last = 0;
let raf = 0;
let cards: HTMLElement[] = [];
let measureCtx: CanvasRenderingContext2D | null = null;

function ctx2d(): CanvasRenderingContext2D {
  if (!measureCtx) {
    const c = document.createElement("canvas");
    measureCtx = c.getContext("2d")!;
  }
  return measureCtx;
}

function fontOf(el: HTMLElement) {
  const cs = getComputedStyle(el);
  return {
    css: `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`,
    size: parseFloat(cs.fontSize),
  };
}

function inkWidth(el: HTMLElement) {
  return el.getBoundingClientRect().width / (mobile ? 1 : k);
}

function capRatio(el: HTMLElement) {
  const cs = getComputedStyle(el);
  const c = ctx2d();
  c.font = `${cs.fontWeight} 100px ${cs.fontFamily}`;
  const m = c.measureText("H");
  return (m.actualBoundingBoxAscent || 70) / 100;
}

function fitBox(el: HTMLElement, tw: number, tc: number, pre = "") {
  el.style.transform = pre;
  el.style.fontSize = `${tc / capRatio(el)}px`;
  const w = inkWidth(el) || 1;
  el.style.transform = `${pre}${pre ? " " : ""}scaleX(${tw / w})`;
}

function baseline(el: HTMLElement, y: number) {
  const f = fontOf(el);
  const c = ctx2d();
  c.font = f.css;
  const m = c.measureText("Hg");
  const size = f.size;
  const A = m.fontBoundingBoxAscent || size * 0.8;
  const D = m.fontBoundingBoxDescent || size * 0.2;
  el.style.top = `${y - ((size - (A + D)) / 2 + A)}px`;
}

function centreLabel(btn: HTMLElement, el: HTMLElement, capPx: number) {
  const probe = document.createElement("i");
  probe.style.cssText =
    "position:absolute;left:0;width:0;height:0;overflow:hidden;display:inline-block;font:inherit;visibility:hidden";
  el.appendChild(probe);
  const kNow = mobile ? 1 : k;
  const base =
    (probe.getBoundingClientRect().top - btn.getBoundingClientRect().top) /
    kNow;
  probe.remove();
  const btnH = btn.offsetHeight;
  const BIAS = 1.1; // reference sits labels ~0.6px below true centre
  el.style.top = `${btnH / 2 - (base - capPx / 2) + BIAS}px`;
}

function clearFit(el: HTMLElement | null) {
  if (!el) return;
  el.style.fontSize = "";
  el.style.top = "";
  el.style.transform = "";
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function placeCards() {
  const n = cards.length;
  for (let i = 0; i < n; i++) {
    const el = cards[i];
    // signed angle in -180..180, then cull the back half at 42°
    const a = (((i * STEP + phase) % 360) + 540) % 360 - 180;
    if (Math.abs(a) > CULL) {
      el.style.visibility = "hidden";
      continue;
    }
    el.style.visibility = "visible";
    const r = (a * Math.PI) / 180;
    const c = Math.cos(r);
    el.style.transform = `translate3d(${R * Math.sin(r)}px,0,${R * (1 - c)}px) rotateY(${-a}deg)`;
    el.style.filter = `brightness(${0.84 + 0.5 * (1 / c - 1)})`;
  }
}

function layout() {
  const h1a = document.getElementById("h1a") as HTMLElement | null;
  const h1b = document.getElementById("h1b") as HTMLElement | null;
  const sub1 = document.getElementById("sub1") as HTMLElement | null;
  const sub2 = document.getElementById("sub2") as HTMLElement | null;
  const badgeTxt = document.getElementById("badgeTxt") as HTMLElement | null;
  const wmName = document.getElementById("wmName") as HTMLElement | null;
  const ctaLabel = document.getElementById("ctaLabel") as HTMLElement | null;
  const vpLabel = document.getElementById("vpLabel") as HTMLElement | null;
  const links = document.getElementById("links") as HTMLElement | null;

  if (mobile) {
    [h1a, h1b, sub1, sub2, badgeTxt, wmName, ctaLabel, vpLabel].forEach(clearFit);
    if (links) {
      links.style.fontSize = "";
      links.style.transform = "";
      Array.from(links.children).forEach((ch) => {
        (ch as HTMLElement).style.fontSize = "";
      });
    }
    placeCards();
    return;
  }

  const tablet =
    window.innerWidth <= TAB_MAX && window.innerWidth >= TAB_MIN;
  const vw = window.innerWidth;
  const ramp = tablet ? Math.min(1, (TAB_MAX - vw) / 120) : 0;
  const T = tablet ? 1 + 0.14 * ramp : 1;

  if (h1a) {
    fitBox(h1a, 563.5 * T, 37.2 * T, "translateX(-50%)");
    baseline(h1a, 204.5);
  }
  if (h1b) {
    fitBox(h1b, 197.5 * T, 37.2 * T, "translateX(-50%)");
    baseline(h1b, 258.5);
  }
  if (sub1) {
    fitBox(sub1, 389 * T, 8.4 * T, "translateX(-50%)");
    baseline(sub1, 300.5);
  }
  if (sub2) {
    fitBox(sub2, 311 * T, 8.4 * T, "translateX(-50%)");
    baseline(sub2, 316.5);
  }
  if (badgeTxt) fitBox(badgeTxt, 184 * T, 9.4 * T, "translate(2px,-1px)");
  if (wmName) {
    fitBox(wmName, 51 * T, 11.4 * T);
    baseline(wmName, 38.5);
  }
  if (ctaLabel) {
    const btn = ctaLabel.closest(".btn") as HTMLElement;
    fitBox(ctaLabel, 87 * T, 8.9 * T);
    if (btn) centreLabel(btn, ctaLabel, 8.9 * T);
  }
  if (vpLabel) {
    const btn = vpLabel.closest(".btn") as HTMLElement;
    fitBox(vpLabel, 76 * T, 9.5 * T);
    if (btn) centreLabel(btn, vpLabel, 9.5 * T);
  }
  if (links) {
    links.style.transform = "";
    const kids = Array.from(links.children) as HTMLElement[];
    if (tablet) {
      kids.forEach((ch) => {
        ch.style.fontSize = "";
      });
    } else if (kids[0]) {
      const fs = 7.9 / capRatio(kids[0]);
      kids.forEach((ch) => {
        ch.style.fontSize = `${fs}px`;
      });
      const rowWidth = kids.reduce((w, ch) => w + ch.getBoundingClientRect().width, 0) / k + 24 * 4;
      links.style.transform = `scaleX(${317 / rowWidth})`;
    }
  }
  placeCards();
}

export function resize() {
  const canvas = document.querySelector(".canvas") as HTMLElement | null;
  if (!canvas) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (vw <= 700) {
    mobile = true;
    k = 1;
    canvas.style.removeProperty("--k");
    canvas.style.removeProperty("--fill");
    canvas.style.removeProperty("--stshift");
    canvas.style.removeProperty("--sshift");
    canvas.style.removeProperty("--rs");
    layout();
    return;
  }

  mobile = false;
  if (vw <= TAB_MAX) {
    // design window narrows so type stops shrinking; k stays continuous at 1080
    let W = DW_MIN + ((vw - TAB_MIN) * (CW - DW_MIN)) / (TAB_MAX - TAB_MIN);
    if (vh > vw * 1.15) W = Math.min(W, 900); // portrait tablet: tighten, read larger
    k = Math.min(vw / W, vh / 560);
    const ramp = Math.min(1, (TAB_MAX - vw) / 120);
    let fill = Math.max(0, vh / k - CH);
    let ss = 0;
    let rs = 1;
    let st = 0;
    if (fill > 0) {
      // share surplus height three ways: wheel travel, closer camera, hero drop
      ss = Math.min(fill * 0.55, 420) * ramp;
      rs = 1 + Math.min(fill / 1100, 0.75) * ramp;
      const slack = 219.5 - 125 * rs + ss;
      st = Math.max(0, slack / 2 - 28) * ramp;
      fill -= ss; // mock keeps only what is left
    }
    canvas.style.setProperty("--k", String(k));
    canvas.style.setProperty("--fill", `${fill}px`);
    canvas.style.setProperty("--stshift", `${st}px`);
    canvas.style.setProperty("--sshift", `${ss}px`);
    canvas.style.setProperty("--rs", String(rs));
  } else {
    const W = CW;
    k = Math.min(vw / W, vh / 560); // k=min(vw/W,vh/560)
    const fill = Math.max(0, vh / k - CH);
    canvas.style.setProperty("--k", String(k));
    canvas.style.setProperty("--fill", `${fill}px`);
    canvas.style.removeProperty("--stshift");
    canvas.style.removeProperty("--sshift");
    canvas.style.removeProperty("--rs");
  }
  layout();
}

function tick(t: number) {
  if (!last) last = t;
  const dt = Math.min((t - last) / 1000, 0.1);
  last = t;
  if (!reducedMotion()) phase -= SPEED * dt;
  placeCards();
  raf = requestAnimationFrame(tick);
}

function seedStars() {
  const a = document.getElementById("stA");
  const b = document.getElementById("stB");
  if (!a || !b) return;
  const layer = (n: number, blur: number, amin: number, amax: number) => {
    const parts: string[] = [];
    for (let i = 0; i < n; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const al = amin + Math.random() * (amax - amin);
      parts.push(
        `${x}vw ${y}vh ${blur}px 0 rgba(255,255,255,${al.toFixed(3)})`,
      );
    }
    return parts.join(",");
  };
  a.style.boxShadow = layer(150, 0, 0.05, 0.3);
  b.style.boxShadow = layer(18, 1.2, 0.35, 0.7);
}

function play(
  el: Element,
  from: Keyframe,
  dur: number,
  delay: number,
  ease: string,
  nref: { n: number; last: Animation | null },
) {
  const to: Keyframe = { opacity: 1 };
  if (from.translate != null) to.translate = "0 0";
  if (from.scale != null) to.scale = "1";
  if (from.clipPath != null) to.clipPath = "inset(-30% 0 -30% 0)";
  const a = (el as HTMLElement).animate([from, to], {
    duration: dur,
    delay,
    easing: ease,
    fill: "both",
  });
  a.id = `intro:${nref.n++}`;
  nref.last = a;
  return a;
}

function settle() {
  document.getAnimations().forEach((a) => {
    if (a.id && a.id.startsWith("intro:")) a.cancel();
  });
  document.documentElement.classList.remove("intro");
}

function intro() {
  if (!document.documentElement.classList.contains("intro")) {
    settle();
    return;
  }
  if (reducedMotion() || typeof Element.prototype.animate !== "function") {
    settle();
    return;
  }
  const D = window.innerWidth <= 700 ? 0.66 : 1;
  const EXPO = "cubic-bezier(.16,1,.3,1)";
  const SOFT = "cubic-bezier(.22,.61,.36,1)";
  const Y = (px: number) => `0 ${px * D}px`;
  const nref = { n: 0, last: null as Animation | null };

  const nav = document.querySelector(".nav");
  const mark = document.querySelector(".mark");
  const wm = document.querySelector(".wm");
  const links = document.querySelectorAll(".links a");
  const burger = document.querySelector(".burger");
  const navBtn = document.querySelector(".nav .btn");
  const badge = document.querySelector(".badge");
  const h1a = document.getElementById("h1a");
  const h1b = document.getElementById("h1b");
  const sub1 = document.getElementById("sub1");
  const sub2 = document.getElementById("sub2");
  const cta2 = document.querySelector(".cta2");
  const ring = document.querySelector(".ring");
  const browser = document.querySelector(".browser");
  const wa = document.querySelector(".wa");

  if (nav) play(nav, { opacity: 0, translate: Y(-9) }, 620, 60, EXPO, nref);
  if (mark) play(mark, { opacity: 0, translate: Y(6) }, 520, 150, SOFT, nref);
  if (wm) play(wm, { opacity: 0, translate: Y(6) }, 520, 185, SOFT, nref);
  links.forEach((a, i) =>
    play(a, { opacity: 0, translate: Y(6) }, 460, 215 + i * 45, SOFT, nref),
  );
  if (burger) play(burger, { opacity: 0, translate: Y(6) }, 460, 300, SOFT, nref);
  if (navBtn) play(navBtn, { opacity: 0, translate: Y(6) }, 500, 400, SOFT, nref);
  if (badge)
    play(badge, { opacity: 0, translate: Y(11), scale: 0.985 }, 560, 270, EXPO, nref);
  if (h1a)
    play(
      h1a,
      { opacity: 0, translate: Y(15), clipPath: "inset(100% 0 -30% 0)" },
      900,
      380,
      EXPO,
      nref,
    );
  if (h1b)
    play(
      h1b,
      { opacity: 0, translate: Y(15), clipPath: "inset(100% 0 -30% 0)" },
      900,
      470,
      EXPO,
      nref,
    );
  if (sub1) play(sub1, { opacity: 0, translate: Y(10) }, 620, 690, EXPO, nref);
  if (sub2) play(sub2, { opacity: 0, translate: Y(10) }, 620, 745, EXPO, nref);
  if (cta2)
    play(cta2, { opacity: 0, translate: Y(13), scale: 0.985 }, 620, 830, EXPO, nref);
  if (ring)
    play(ring, { opacity: 0, translate: Y(18), scale: 0.99 }, 950, 700, EXPO, nref);
  if (browser) play(browser, { opacity: 0, translate: Y(26) }, 900, 900, EXPO, nref);
  if (wa) play(wa, { opacity: 0, scale: 0.88 }, 500, 1260, EXPO, nref);

  if (nref.last) {
    nref.last.finished.then(settle).catch(settle);
  } else {
    settle();
  }
}

function wireMenu() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger") as HTMLButtonElement | null;
  if (!nav || !burger) return;

  const setOpen = (open: boolean) => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  };

  const close = () => setOpen(false);

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!nav.classList.contains("open"));
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target as Node)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      close();
      burger.focus();
    }
  });

  nav.querySelectorAll(".navmenu a").forEach((a) => {
    a.addEventListener("click", close);
  });

  const band = window.matchMedia("(max-width: 1080px)");
  const onBand = () => {
    if (!band.matches) close();
  };
  band.addEventListener("change", onBand);
}

export function bootHero() {
  cards = Array.from(document.querySelectorAll(".card"));
  cards.forEach((card, i) => {
    const d = SHOTS[i % 10];
    card.innerHTML = creative(d) + '<div class="edge"></div>';
    card.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => card.classList.add("broken"));
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.visibility = "hidden";
    });
  });

  seedStars();
  wireMenu();
  resize();
  window.addEventListener("resize", resize);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", resize);
  }
  document.addEventListener("visibilitychange", () => {
    last = 0; // backgrounded tab must not jump
  });
  document.fonts.ready.then(layout);
  setTimeout(layout, 400);
  setTimeout(layout, 1400);
  intro();
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    if (window.visualViewport) {
      window.visualViewport.removeEventListener("resize", resize);
    }
  };
}
