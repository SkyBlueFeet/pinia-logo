import './style.css';
var F = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var k = (e, l, t) => l in e ? F(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, M = (e, l) => {
  for (var t in l || (l = {}))
    A.call(l, t) && k(e, t, l[t]);
  if (y)
    for (var t of y(l))
      I.call(l, t) && k(e, t, l[t]);
  return e;
};
import { defineComponent as T, toRefs as U, ref as v, watch as Z, onMounted as G, onUnmounted as N, openBlock as c, createElementBlock as r, normalizeClass as O, normalizeStyle as P, createElementVNode as a, Fragment as x, createStaticVNode as w, pushScopeId as R, popScopeId as H, createApp as V, h as z } from "vue";
const s = (e) => (R("data-v-94caf2f0"), e = e(), H(), e), D = ["width", "height"], j = /* @__PURE__ */ s(() => /* @__PURE__ */ a("g", { class: "leaves" }, [
  /* @__PURE__ */ a("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M178.604 253.684C210.877 222.936 201.029 184.907 171.8 138.825C142.571 92.7423 83.7343 76.3478 72.7579 86.8057C61.7814 97.2637 59.3484 172.034 88.577 218.116C117.806 264.198 146.331 284.432 178.604 253.684Z",
    fill: "url(#paint0_linear)"
  }),
  /* @__PURE__ */ a("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M206.508 257.94C230.384 295.582 262.303 281.819 301.811 244.176C341.32 206.534 357.702 134.428 349.582 121.625C341.462 108.822 279.752 109.464 240.243 147.107C200.734 184.749 182.633 220.298 206.508 257.94Z",
    fill: "url(#paint1_linear)"
  }),
  /* @__PURE__ */ a("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M193.454 237.231C233.099 242.099 248.689 205.474 255.958 146.272C263.227 87.0698 233.262 24.497 219.778 22.8414C206.295 21.1858 160.995 74.5172 153.726 133.719C146.457 192.922 153.81 232.364 193.454 237.231Z",
    fill: "url(#paint2_linear)"
  })
], -1)), q = { class: "body" }, J = /* @__PURE__ */ w('<path fill-rule="evenodd" clip-rule="evenodd" d="M192.63 519.038C275.748 519.038 343.156 494.893 343.156 385.393C343.156 275.893 275.748 186.038 192.63 186.038C109.511 186.038 42.156 275.893 42.156 385.393C42.156 494.893 109.511 519.038 192.63 519.038Z" fill="url(#paint3_linear)" data-v-94caf2f0></path><path fill-rule="evenodd" clip-rule="evenodd" d="M310.811 401.034C308.621 398.93 305.139 398.999 303.034 401.189L229.034 478.189C226.93 480.379 226.999 483.861 229.189 485.966C231.379 488.07 234.861 488.001 236.966 485.811L310.966 408.811C313.07 406.621 313.001 403.139 310.811 401.034Z" fill="#ECB732" data-v-94caf2f0></path><path fill-rule="evenodd" clip-rule="evenodd" d="M239.233 409.993C237.02 412.073 236.912 415.554 238.993 417.767L285.993 467.767C288.073 469.98 291.554 470.088 293.767 468.007C295.98 465.927 296.088 462.446 294.007 460.233L247.007 410.233C244.927 408.02 241.446 407.912 239.233 409.993Z" fill="#ECB732" data-v-94caf2f0></path><path fill-rule="evenodd" clip-rule="evenodd" d="M225.889 225.111C228.037 227.259 228.037 230.741 225.889 232.889L176.889 281.889C174.741 284.037 171.259 284.037 169.111 281.889C166.963 279.741 166.963 276.259 169.111 274.111L218.111 225.111C220.259 222.963 223.741 222.963 225.889 225.111Z" fill="#FFC73B" data-v-94caf2f0></path><path fill-rule="evenodd" clip-rule="evenodd" d="M215.889 281.889C218.037 279.741 218.037 276.259 215.889 274.111L166.889 225.111C164.741 222.963 161.259 222.963 159.111 225.111C156.963 227.259 156.963 230.741 159.111 232.889L208.111 281.889C210.259 284.037 213.741 284.037 215.889 281.889Z" fill="#FFC73B" data-v-94caf2f0></path>', 5), K = { class: "eye-left" }, Q = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  d: "M111.34 359.471C123.125 360.918 133.225 357.648 133.898 352.166C134.571 346.684 125.563 341.067 113.777 339.62C101.992 338.173 91.8918 341.444 91.2187 346.925C90.5456 352.407 99.5541 358.024 111.34 359.471Z",
  fill: "#EAADCC"
}, null, -1)), W = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  d: "M150.023 321.156C149.513 335.783 137.241 347.226 122.615 346.715C107.988 346.205 96.545 333.933 97.0557 319.307C97.5665 304.68 109.838 293.237 124.464 293.748C139.091 294.258 150.534 306.53 150.023 321.156Z",
  fill: "white"
}, null, -1)), X = /* @__PURE__ */ s(() => /* @__PURE__ */ a("g", { class: "eyeball" }, [
  /* @__PURE__ */ a("path", {
    d: "M141.046 320.343C140.719 329.726 132.847 337.067 123.463 336.739C114.08 336.411 106.739 328.539 107.067 319.156C107.395 309.773 115.267 302.432 124.65 302.76C134.033 303.087 141.374 310.959 141.046 320.343Z",
    fill: "black"
  }),
  /* @__PURE__ */ a("path", {
    d: "M125.161 316.786C125.026 320.65 121.784 323.672 117.921 323.537C114.057 323.403 111.034 320.161 111.169 316.297C111.304 312.434 114.546 309.411 118.409 309.546C122.273 309.681 125.296 312.922 125.161 316.786Z",
    fill: "white"
  })
], -1)), Y = {
  key: 1,
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M98.4768 310.811C97.1028 311.737 96.7396 313.602 97.6656 314.976C102.329 321.896 109.474 325.785 118.663 326.835C127.921 327.893 136.204 325.529 143.318 319.748C144.603 318.703 144.799 316.813 143.754 315.527C142.709 314.242 140.819 314.046 139.534 315.091C133.705 319.828 127.041 321.754 119.344 320.874C111.579 319.987 106.157 316.839 102.641 311.623C101.715 310.249 99.8508 309.885 98.4768 310.811Z",
  fill: "#755400"
}, $ = { class: "eye-right" }, e1 = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  d: "M263.558 365.546C275.433 365.546 285.058 361.069 285.058 355.546C285.058 350.023 275.433 345.546 263.558 345.546C251.684 345.546 242.058 350.023 242.058 355.546C242.058 361.069 251.684 365.546 263.558 365.546Z",
  fill: "#EAADCC"
}, null, -1)), t1 = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  d: "M279.944 325.693C279.433 340.32 267.162 351.763 252.536 351.252C237.909 350.742 226.466 338.47 226.977 323.844C227.487 309.217 239.759 297.774 254.385 298.285C269.012 298.795 280.455 311.067 279.944 325.693Z",
  fill: "white"
}, null, -1)), l1 = /* @__PURE__ */ s(() => /* @__PURE__ */ a("g", { class: "eyeball" }, [
  /* @__PURE__ */ a("path", {
    d: "M270.967 324.879C270.64 334.263 262.767 341.604 253.384 341.276C244.001 340.948 236.66 333.076 236.988 323.693C237.316 314.31 245.188 306.969 254.571 307.297C263.954 307.624 271.295 315.496 270.967 324.879Z",
    fill: "black"
  }),
  /* @__PURE__ */ a("path", {
    d: "M255.082 321.323C254.947 325.187 251.705 328.209 247.842 328.074C243.978 327.939 240.955 324.698 241.09 320.834C241.225 316.971 244.467 313.948 248.33 314.083C252.194 314.218 255.217 317.459 255.082 321.323Z",
    fill: "white"
  })
], -1)), a1 = {
  key: 1,
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M231.477 319.811C230.103 320.737 229.74 322.602 230.666 323.976C235.329 330.896 242.474 334.785 251.663 335.835C260.921 336.893 269.204 334.529 276.318 328.748C277.603 327.703 277.799 325.813 276.754 324.527C275.709 323.242 273.819 323.046 272.534 324.091C266.705 328.828 260.041 330.754 252.344 329.874C244.579 328.987 239.157 325.839 235.641 320.623C234.715 319.249 232.851 318.885 231.477 319.811Z",
  fill: "#755400"
}, o1 = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M70.1889 401.034C72.379 398.93 75.8608 398.999 77.9656 401.189L151.966 478.189C154.07 480.379 154.001 483.861 151.811 485.966C149.621 488.07 146.139 488.001 144.034 485.811L70.0344 408.811C67.9296 406.621 67.9988 403.139 70.1889 401.034Z",
  fill: "#ECB732"
}, null, -1)), n1 = /* @__PURE__ */ s(() => /* @__PURE__ */ a("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M141.767 409.993C143.98 412.073 144.088 415.554 142.007 417.767L95.0074 467.767C92.927 469.98 89.4462 470.088 87.233 468.007C85.0197 465.927 84.9121 462.446 86.9925 460.233L133.993 410.233C136.073 408.02 139.554 407.912 141.767 409.993Z",
  fill: "#ECB732"
}, null, -1)), i1 = {
  key: 0,
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M163.323 337.658C161.949 338.584 161.586 340.448 162.512 341.822C167.176 348.743 174.321 352.632 183.51 353.682C192.767 354.74 201.051 352.375 208.164 346.594C209.45 345.549 209.645 343.66 208.6 342.374C207.555 341.088 205.666 340.893 204.38 341.938C198.552 346.675 191.887 348.6 184.191 347.721C176.425 346.834 171.003 343.686 167.488 338.469C166.562 337.095 164.697 336.732 163.323 337.658Z",
  fill: "black"
}, d1 = {
  key: 1,
  d: "M205.5 350C205.5 355.761 203.379 359.178 200.18 361.288C196.798 363.518 191.88 364.5 186 364.5C180.12 364.5 175.202 363.518 171.82 361.288C168.621 359.178 166.5 355.761 166.5 350C166.5 347.536 168.262 344.446 171.9 341.84C175.456 339.292 180.447 337.5 186 337.5C191.553 337.5 196.544 339.292 200.1 341.84C203.738 344.446 205.5 347.536 205.5 350Z",
  fill: "#E77777"
}, s1 = /* @__PURE__ */ w('<defs data-v-94caf2f0><linearGradient id="paint0_linear" x1="68.5172" y1="90.0774" x2="85.0979" y2="170.543" gradientUnits="userSpaceOnUse" data-v-94caf2f0><stop stop-color="#52CE63" data-v-94caf2f0></stop><stop offset="1" stop-color="#51A256" data-v-94caf2f0></stop></linearGradient><linearGradient id="paint1_linear" x1="359.841" y1="134.702" x2="279.366" y2="151.265" gradientUnits="userSpaceOnUse" data-v-94caf2f0><stop stop-color="#52CE63" data-v-94caf2f0></stop><stop offset="1" stop-color="#51A256" data-v-94caf2f0></stop></linearGradient><linearGradient id="paint2_linear" x1="219.235" y1="22.7747" x2="203.754" y2="148.86" gradientUnits="userSpaceOnUse" data-v-94caf2f0><stop stop-color="#8AE99C" data-v-94caf2f0></stop><stop offset="1" stop-color="#52CE63" data-v-94caf2f0></stop></linearGradient><linearGradient id="paint3_linear" x1="196.803" y1="244.222" x2="171.815" y2="518.625" gradientUnits="userSpaceOnUse" data-v-94caf2f0><stop stop-color="#FFE56C" data-v-94caf2f0></stop><stop offset="1" stop-color="#FFC63A" data-v-94caf2f0></stop></linearGradient></defs>', 1), c1 = /* @__PURE__ */ T({
  __name: "PiniaLogo",
  props: {
    width: {
      type: [Number, String],
      default: 102
    },
    height: {
      type: [Number, String],
      default: 130
    },
    auto: {
      type: Boolean,
      default: !0
    },
    play: {
      type: String,
      default: "None"
    },
    penetrate: {
      type: Boolean,
      default: !1
    },
    customClass: String,
    autoFixed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = e, { auto: t, play: n } = U(l), i = v("open"), C = v("closed"), h = 100, _ = 120;
    let g = 0, m = 0;
    const f = v(!1);
    Z(f, (o, d) => {
      d === !1 && n.value === "Hover" && (p(), u());
    });
    function E() {
      n.value === "LeftClick" && (p(), u());
    }
    function S() {
      f.value = !0;
    }
    function b() {
      f.value = !1;
    }
    function p() {
      let o = 0;
      function d() {
        o++, o % 2 ? (i.value = "closed", setTimeout(d, h * 1.7)) : o < 4 ? (i.value = "open", setTimeout(d, h)) : i.value = "open";
      }
      setTimeout(d, 200);
    }
    function u() {
      let o = 0;
      function d() {
        o++, o % 2 ? (C.value = "closed", setTimeout(d, _)) : o < 10 ? (C.value = "open", setTimeout(d, _)) : C.value = "closed";
      }
      setTimeout(d, 200);
    }
    G(() => {
      Z(t, (o) => {
        o && (g = setInterval(() => {
          p();
        }, 8e3), m = setInterval(() => {
          u();
        }, 8e3));
      }, { immediate: !0 });
    });
    function B() {
      clearInterval(g), clearInterval(m);
    }
    return N(() => {
      B();
    }), (o, d) => (c(), r("svg", {
      class: O(["pinia-container", [e.autoFixed ? "pinia-position" : "", e.customClass || ""]]),
      width: e.width,
      height: e.height,
      style: P({ pointerEvents: e.penetrate ? "none" : "auto" }),
      viewBox: "0 0 408 520",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: E,
      onMouseenter: S,
      onMouseleave: b
    }, [
      j,
      a("g", q, [
        J,
        a("g", K, [
          Q,
          !i.value || i.value === "open" ? (c(), r(x, { key: 0 }, [
            W,
            X
          ], 64)) : (c(), r("path", Y))
        ]),
        a("g", $, [
          e1,
          !i.value || i.value === "open" ? (c(), r(x, { key: 0 }, [
            t1,
            l1
          ], 64)) : (c(), r("path", a1))
        ]),
        o1,
        n1,
        !C.value || C.value == "closed" ? (c(), r("path", i1)) : (c(), r("path", d1))
      ]),
      s1
    ], 46, D));
  }
});
const r1 = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of l)
    t[n] = i;
  return t;
}, L = /* @__PURE__ */ r1(c1, [["__scopeId", "data-v-94caf2f0"]]);
function C1() {
  let e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ], l = "";
  for (let t = 0; t < 16; t++) {
    let n = parseInt((Math.random() * 61).toString());
    l += e[n];
  }
  return l;
}
function f1(e, l, t) {
  const n = document.createElement("div", {});
  n.id = "pinia-" + C1(), document.body.appendChild(n), V({
    render() {
      return z(l, t);
    }
  }).mount(`#${n.id}`);
}
const v1 = {
  install(e, l = !0, t) {
    l ? f1(e, L, M({
      autoFixed: !0
    }, t)) : e.component("pinia-logo", L);
  }
};
export {
  L as PiniaLogo,
  v1 as default
};
