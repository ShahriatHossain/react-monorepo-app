import * as Uh from "react/jsx-runtime";
import { jsxs as ze, Fragment as Gh, jsx as L } from "react/jsx-runtime";
import * as b from "react";
import ht, { isValidElement as Kh, useCallback as Xh, createContext as nu, useContext as iu, Fragment as Yh, useState as et, forwardRef as la, memo as ca, Component as au, PureComponent as su, useEffect as Mn } from "react";
import * as Jh from "react-dom";
import Mo, { unstable_batchedUpdates as Zh } from "react-dom";
function Qh(e) {
  if (!Array.isArray(e))
    return [e];
  if (process.env.NODE_ENV !== "production" && e.length > 2)
    throw new Error("CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues");
  return e;
}
const xi = typeof window > "u" ? global : window, Si = "@griffel/";
function lu(e, t) {
  return xi[Symbol.for(Si + e)] || (xi[Symbol.for(Si + e)] = t), xi[Symbol.for(Si + e)];
}
const Za = /* @__PURE__ */ lu("DEBUG_RESET_CLASSES", {}), io = /* @__PURE__ */ lu("DEFINITION_LOOKUP_TABLE", {}), on = "data-make-styles-bucket", ua = "f", ao = "r", ro = 7, St = "___", cu = "_", uu = process.env.NODE_ENV === "production" ? St.length + ro : St.length + ro + cu.length + ro, ev = 0, Ys = 1, tv = {
  all: 1,
  animation: 1,
  animationRange: 1,
  background: 1,
  backgroundPosition: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockStart: 1,
  borderBottom: 1,
  borderColor: 1,
  borderImage: 1,
  borderInline: 1,
  borderInlineEnd: 1,
  borderInlineStart: 1,
  borderLeft: 1,
  borderRadius: 1,
  borderRight: 1,
  borderStyle: 1,
  borderTop: 1,
  borderWidth: 1,
  caret: 1,
  columns: 1,
  columnRule: 1,
  containIntrinsicSize: 1,
  container: 1,
  flex: 1,
  flexFlow: 1,
  font: 1,
  gap: 1,
  grid: 1,
  gridArea: 1,
  gridColumn: 1,
  gridRow: 1,
  gridTemplate: 1,
  inset: 1,
  insetBlock: 1,
  insetInline: 1,
  lineClamp: 1,
  listStyle: 1,
  margin: 1,
  marginBlock: 1,
  marginInline: 1,
  mask: 1,
  maskBorder: 1,
  motion: 1,
  offset: 1,
  outline: 1,
  overflow: 1,
  overscrollBehavior: 1,
  padding: 1,
  paddingBlock: 1,
  paddingInline: 1,
  placeItems: 1,
  placeContent: 1,
  placeSelf: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginInline: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingInline: 1,
  scrollSnapMargin: 1,
  scrollTimeline: 1,
  textDecoration: 1,
  textEmphasis: 1,
  transition: 1,
  viewTimeline: 1
};
function rv(e, t, r) {
  const o = [];
  if (r[on] = t, e)
    for (const i in r)
      e.setAttribute(i, r[i]);
  function n(i) {
    return e != null && e.sheet ? e.sheet.insertRule(i, e.sheet.cssRules.length) : o.push(i);
  }
  return {
    elementAttributes: r,
    insertRule: n,
    element: e,
    bucketName: t,
    cssRules() {
      return e != null && e.sheet ? Array.from(e.sheet.cssRules).map((i) => i.cssText) : o;
    }
  };
}
const ov = [
  // reset styles
  "r",
  // catch-all
  "d",
  // link
  "l",
  // visited
  "v",
  // focus-within
  "w",
  // focus
  "f",
  // focus-visible
  "i",
  // hover
  "h",
  // active
  "a",
  // at rules for reset styles
  "s",
  // keyframes
  "k",
  // at-rules
  "t",
  // @media rules
  "m",
  // @container rules
  "c"
], Js = /* @__PURE__ */ ov.reduce((e, t, r) => (e[t] = r, e), {});
function nv(e, t, r, o, n = {}) {
  const i = e === "m", a = i ? e + n.m : e;
  if (!o.stylesheets[a]) {
    const s = t && t.createElement("style"), l = rv(s, e, Object.assign({}, o.styleElementAttributes, i && {
      media: n.m
    }));
    o.stylesheets[a] = l, t && s && t.head.insertBefore(s, iv(t, r, e, o, n));
  }
  return o.stylesheets[a];
}
function iv(e, t, r, o, n) {
  const i = Js[r];
  let a = (u) => i - Js[u.getAttribute(on)], s = e.head.querySelectorAll(`[${on}]`);
  if (r === "m" && n) {
    const u = e.head.querySelectorAll(`[${on}="${r}"]`);
    u.length && (s = u, a = (d) => o.compareMediaQueries(n.m, d.media));
  }
  const l = s.length;
  let c = l - 1;
  for (; c >= 0; ) {
    const u = s.item(c);
    if (a(u) > 0)
      return u.nextSibling;
    c--;
  }
  return l > 0 ? s.item(0) : t ? t.nextSibling : null;
}
const av = /* @__PURE__ */ ["-moz-placeholder", "-moz-focus-inner", "-moz-focusring", "-ms-input-placeholder", "-moz-read-write", "-moz-read-only"].join("|"), sv = /* @__PURE__ */ new RegExp(`:(${av})`);
function Zs(e, t) {
  try {
    e.insertRule(t);
  } catch (r) {
    process.env.NODE_ENV !== "production" && !sv.test(t) && console.error(`There was a problem inserting the following rule: "${t}"`, r);
  }
}
const Tr = /* @__PURE__ */ (() => {
  try {
    var e;
    return !!(typeof window < "u" && ((e = window.sessionStorage) != null && e.getItem("__GRIFFEL_DEVTOOLS__")));
  } catch {
    return !1;
  }
})();
function pt(e) {
  for (var t = 0, r, o = 0, n = e.length; n >= 4; ++o, n -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ei(e) {
  const t = e.length;
  if (t === ro)
    return e;
  for (let r = t; r < ro; r++)
    e += "0";
  return e;
}
function du(e, t, r = []) {
  return process.env.NODE_ENV === "production" ? St + Ei(pt(e + t)) : St + Ei(pt(e + t)) + cu + Ei(pt(r.join("")));
}
function fu(e, t) {
  let r = "";
  for (const o in e) {
    const n = e[o];
    if (n) {
      const i = Array.isArray(n);
      t === "rtl" ? r += (i ? n[1] : n) + " " : r += (i ? n[0] : n) + " ";
    }
  }
  return r.slice(0, -1);
}
function wn(e, t) {
  const r = {};
  for (const o in e) {
    const n = fu(e[o], t);
    if (n === "") {
      r[o] = "";
      continue;
    }
    const i = du(n, t), a = i + " " + n;
    io[i] = [e[o], t], r[o] = a;
  }
  return r;
}
const kn = {};
function H() {
  let e = null, t = "", r = "";
  const o = new Array(arguments.length);
  let n = "";
  for (let u = 0; u < arguments.length; u++) {
    const d = arguments[u];
    if (typeof d == "string" && d !== "") {
      const f = d.indexOf(St);
      if (f === -1)
        process.env.NODE_ENV !== "production" && d.split(" ").forEach((v) => {
          v.startsWith(ao) && Za[v] && (n ? console.error(`mergeClasses(): a passed string contains multiple classes produced by makeResetStyles (${d} & ${t}, this will lead to non-deterministic behavior. Learn more:https://griffel.js.org/react/api/make-reset-styles#limitations
Source string: ${d}`) : n = v);
        }), t += d + " ";
      else {
        const v = d.substr(f, uu);
        f > 0 && (t += d.slice(0, f)), r += v, o[u] = v;
      }
      process.env.NODE_ENV !== "production" && d.indexOf(St, f + 1) !== -1 && console.error(`mergeClasses(): a passed string contains multiple identifiers of atomic classes (classes that start with "${St}"), it's possible that passed classes were concatenated in a wrong way. Source string: ${d}`);
    }
  }
  if (r === "")
    return t.slice(0, -1);
  const i = kn[r];
  if (i !== void 0)
    return t + i;
  const a = [];
  for (let u = 0; u < arguments.length; u++) {
    const d = o[u];
    if (d) {
      const f = io[d];
      f ? (a.push(f[ev]), process.env.NODE_ENV !== "production" && e !== null && e !== f[Ys] && console.error(`mergeClasses(): a passed string contains an identifier (${d}) that has different direction (dir="${f[1] ? "rtl" : "ltr"}") setting than other classes. This is not supported. Source string: ${arguments[u]}`), e = f[Ys]) : process.env.NODE_ENV !== "production" && console.error(`mergeClasses(): a passed string contains an identifier (${d}) that does not match any entry in cache. Source string: ${arguments[u]}`);
    }
  }
  const s = Object.assign.apply(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(a)
  );
  let l = fu(s, e);
  const c = du(l, e, o);
  return l = c + " " + l, kn[r] = l, io[c] = [s, e], t + l;
}
const Qs = {}, el = /* @__PURE__ */ new Set(), Nr = {
  getChildrenSequences: (e) => {
    const t = Object.keys(kn).find((r) => kn[r].startsWith(e));
    return t ? t.split(St).filter((r) => r.length).map((r) => St + r) : [];
  },
  addCSSRule: (e) => {
    el.add(e);
  },
  addSequenceDetails: (e, t) => {
    Object.entries(e).forEach(([r, o]) => {
      Qs[o.substring(0, uu)] = {
        slotName: r,
        sourceURL: t
      };
    });
  },
  getCSSRules: () => Array.from(el),
  getSequenceDetails: (e) => Qs[e]
};
function tl(e, t) {
  return Array.isArray(e) ? t === "rtl" ? e[1] : e[0] : e;
}
function lv(e, t, r, o) {
  const n = e[0], i = e[1];
  return Object.entries(n).map(([a, s]) => {
    const l = tl(s, i);
    let c;
    if (r && t) {
      const u = r.find(({
        className: d
      }) => d === l);
      !u && t[0][a] ? c = tl(t[0][a], t[1]) : u && t[0][a] ? c = (o ? o.filter(({
        debugClassNames: f
      }) => f.filter(({
        className: v
      }) => v === l).length > 0).length > 0 : !1) ? u.className : u.overriddenBy : (!u && !t[0][a] || u && !t[0][a]) && (c = void 0);
    }
    return {
      className: l,
      overriddenBy: c
    };
  });
}
function hu(e, t) {
  const r = io[e];
  if (r === void 0)
    return;
  const o = t ? io[t.sequenceHash] : void 0, n = lv(r, o, t == null ? void 0 : t.debugClassNames, t == null ? void 0 : t.children), i = {
    sequenceHash: e,
    direction: r[1],
    children: [],
    debugClassNames: n
  };
  return Nr.getChildrenSequences(i.sequenceHash).reverse().forEach((s) => {
    const l = hu(s, i);
    l && i.children.push(l);
  }), i.children.length || (i.rules = {}, i.debugClassNames.forEach(({
    className: s
  }) => {
    const l = Nr.getSequenceDetails(e);
    l && (i.slot = l.slotName, i.sourceURL = l.sourceURL);
    const c = Nr.getCSSRules().find((u) => u.includes(s));
    i.rules[s] = c;
  })), i;
}
function cv(e) {
  const t = e.defaultView;
  if (!t || t.__GRIFFEL_DEVTOOLS__)
    return;
  const r = {
    getInfo: (o) => {
      const n = Array.from(o.classList).find((i) => i.startsWith(St));
      if (n !== void 0)
        return hu(n);
    }
  };
  Object.defineProperty(t, "__GRIFFEL_DEVTOOLS__", {
    configurable: !1,
    enumerable: !1,
    get() {
      return r;
    }
  });
}
let uv = 0;
const dv = (e, t) => e < t ? -1 : e > t ? 1 : 0;
function fv(e = typeof document > "u" ? void 0 : document, t = {}) {
  const {
    unstable_filterCSSRule: r,
    insertionPoint: o,
    styleElementAttributes: n,
    compareMediaQueries: i = dv
  } = t, a = {
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(n),
    compareMediaQueries: i,
    id: `d${uv++}`,
    insertCSSRules(s) {
      for (const l in s) {
        const c = s[l];
        for (let u = 0, d = c.length; u < d; u++) {
          const [f, v] = Qh(c[u]), h = nv(l, e, o || null, a, v);
          a.insertionCache[f] || (a.insertionCache[f] = l, process.env.NODE_ENV !== "production" && Tr && Nr.addCSSRule(f), r ? r(f) && Zs(h, f) : Zs(h, f));
        }
      }
    }
  };
  return e && process.env.NODE_ENV !== "production" && Tr && cv(e), a;
}
const Ln = () => {
  const e = {};
  return function(r, o) {
    e[r.id] === void 0 && (r.insertCSSRules(o), e[r.id] = !0);
  };
};
function vu(e) {
  return e.reduce(function(t, r) {
    var o = r[0], n = r[1];
    return t[o] = n, t[n] = o, t;
  }, {});
}
function hv(e) {
  return typeof e == "boolean";
}
function vv(e) {
  return typeof e == "function";
}
function Zr(e) {
  return typeof e == "number";
}
function pv(e) {
  return e === null || typeof e > "u";
}
function gv(e) {
  return e && typeof e == "object";
}
function mv(e) {
  return typeof e == "string";
}
function nn(e, t) {
  return e.indexOf(t) !== -1;
}
function bv(e) {
  return parseFloat(e) === 0 ? e : e[0] === "-" ? e.slice(1) : "-" + e;
}
function Lo(e, t, r, o) {
  return t + bv(r) + o;
}
function yv(e) {
  var t = e.indexOf(".");
  if (t === -1)
    e = 100 - parseFloat(e) + "%";
  else {
    var r = e.length - t - 2;
    e = 100 - parseFloat(e), e = e.toFixed(r) + "%";
  }
  return e;
}
function pu(e) {
  return e.replace(/ +/g, " ").split(" ").map(function(t) {
    return t.trim();
  }).filter(Boolean).reduce(function(t, r) {
    var o = t.list, n = t.state, i = (r.match(/\(/g) || []).length, a = (r.match(/\)/g) || []).length;
    return n.parensDepth > 0 ? o[o.length - 1] = o[o.length - 1] + " " + r : o.push(r), n.parensDepth += i - a, {
      list: o,
      state: n
    };
  }, {
    list: [],
    state: {
      parensDepth: 0
    }
  }).list;
}
function rl(e) {
  var t = pu(e);
  if (t.length <= 3 || t.length > 4)
    return e;
  var r = t[0], o = t[1], n = t[2], i = t[3];
  return [r, i, n, o].join(" ");
}
function _v(e) {
  return !hv(e) && !pv(e);
}
function wv(e) {
  for (var t = [], r = 0, o = 0, n = !1; o < e.length; )
    !n && e[o] === "," ? (t.push(e.substring(r, o).trim()), o++, r = o) : e[o] === "(" ? (n = !0, o++) : (e[o] === ")" && (n = !1), o++);
  return r != o && t.push(e.substring(r, o + 1)), t;
}
var T = {
  padding: function(t) {
    var r = t.value;
    return Zr(r) ? r : rl(r);
  },
  textShadow: function(t) {
    var r = t.value, o = wv(r).map(function(n) {
      return n.replace(/(^|\s)(-*)([.|\d]+)/, function(i, a, s, l) {
        if (l === "0")
          return i;
        var c = s === "" ? "-" : "";
        return "" + a + c + l;
      });
    });
    return o.join(",");
  },
  borderColor: function(t) {
    var r = t.value;
    return rl(r);
  },
  borderRadius: function(t) {
    var r = t.value;
    if (Zr(r))
      return r;
    if (nn(r, "/")) {
      var o = r.split("/"), n = o[0], i = o[1], a = T.borderRadius({
        value: n.trim()
      }), s = T.borderRadius({
        value: i.trim()
      });
      return a + " / " + s;
    }
    var l = pu(r);
    switch (l.length) {
      case 2:
        return l.reverse().join(" ");
      case 4: {
        var c = l[0], u = l[1], d = l[2], f = l[3];
        return [u, c, f, d].join(" ");
      }
      default:
        return r;
    }
  },
  background: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgImgDirectionRegex, a = t.bgPosDirectionRegex;
    if (Zr(r))
      return r;
    var s = r.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, "").trim();
    return r = r.replace(s, T.backgroundPosition({
      value: s,
      valuesToConvert: o,
      isRtl: n,
      bgPosDirectionRegex: a
    })), T.backgroundImage({
      value: r,
      valuesToConvert: o,
      bgImgDirectionRegex: i
    });
  },
  backgroundImage: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.bgImgDirectionRegex;
    return !nn(r, "url(") && !nn(r, "linear-gradient(") ? r : r.replace(n, function(i, a, s) {
      return i.replace(s, o[s]);
    });
  },
  backgroundPosition: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgPosDirectionRegex;
    return r.replace(n ? /^((-|\d|\.)+%)/ : null, function(a, s) {
      return yv(s);
    }).replace(i, function(a) {
      return o[a];
    });
  },
  backgroundPositionX: function(t) {
    var r = t.value, o = t.valuesToConvert, n = t.isRtl, i = t.bgPosDirectionRegex;
    return Zr(r) ? r : T.backgroundPosition({
      value: r,
      valuesToConvert: o,
      isRtl: n,
      bgPosDirectionRegex: i
    });
  },
  transition: function(t) {
    var r = t.value, o = t.propertiesToConvert;
    return r.split(/,\s*/g).map(function(n) {
      var i = n.split(" ");
      return i[0] = o[i[0]] || i[0], i.join(" ");
    }).join(", ");
  },
  transitionProperty: function(t) {
    var r = t.value, o = t.propertiesToConvert;
    return r.split(/,\s*/g).map(function(n) {
      return o[n] || n;
    }).join(", ");
  },
  transform: function(t) {
    var r = t.value, o = "[^\\u0020-\\u007e]", n = "(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])", i = "((?:-?" + ("(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + o + "|" + n + ")") + ("(?:[_a-z0-9-]|" + o + "|" + n + ")") + "*") + ")?") + ")|(?:inherit|auto))", a = new RegExp("(translateX\\s*\\(\\s*)" + i + "(\\s*\\))", "gi"), s = new RegExp("(translate\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,1}\\s*\\))", "gi"), l = new RegExp("(translate3d\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,2}\\s*\\))", "gi"), c = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + i + "(\\s*\\))", "gi");
    return r.replace(a, Lo).replace(s, Lo).replace(l, Lo).replace(c, Lo);
  }
};
T.objectPosition = T.backgroundPosition;
T.margin = T.padding;
T.borderWidth = T.padding;
T.boxShadow = T.textShadow;
T.webkitBoxShadow = T.boxShadow;
T.mozBoxShadow = T.boxShadow;
T.WebkitBoxShadow = T.boxShadow;
T.MozBoxShadow = T.boxShadow;
T.borderStyle = T.borderColor;
T.webkitTransform = T.transform;
T.mozTransform = T.transform;
T.WebkitTransform = T.transform;
T.MozTransform = T.transform;
T.transformOrigin = T.backgroundPosition;
T.webkitTransformOrigin = T.transformOrigin;
T.mozTransformOrigin = T.transformOrigin;
T.WebkitTransformOrigin = T.transformOrigin;
T.MozTransformOrigin = T.transformOrigin;
T.webkitTransition = T.transition;
T.mozTransition = T.transition;
T.WebkitTransition = T.transition;
T.MozTransition = T.transition;
T.webkitTransitionProperty = T.transitionProperty;
T.mozTransitionProperty = T.transitionProperty;
T.WebkitTransitionProperty = T.transitionProperty;
T.MozTransitionProperty = T.transitionProperty;
T["text-shadow"] = T.textShadow;
T["border-color"] = T.borderColor;
T["border-radius"] = T.borderRadius;
T["background-image"] = T.backgroundImage;
T["background-position"] = T.backgroundPosition;
T["background-position-x"] = T.backgroundPositionX;
T["object-position"] = T.objectPosition;
T["border-width"] = T.padding;
T["box-shadow"] = T.textShadow;
T["-webkit-box-shadow"] = T.textShadow;
T["-moz-box-shadow"] = T.textShadow;
T["border-style"] = T.borderColor;
T["-webkit-transform"] = T.transform;
T["-moz-transform"] = T.transform;
T["transform-origin"] = T.transformOrigin;
T["-webkit-transform-origin"] = T.transformOrigin;
T["-moz-transform-origin"] = T.transformOrigin;
T["-webkit-transition"] = T.transition;
T["-moz-transition"] = T.transition;
T["transition-property"] = T.transitionProperty;
T["-webkit-transition-property"] = T.transitionProperty;
T["-moz-transition-property"] = T.transitionProperty;
var gu = vu([
  ["paddingLeft", "paddingRight"],
  ["marginLeft", "marginRight"],
  ["left", "right"],
  ["borderLeft", "borderRight"],
  ["borderLeftColor", "borderRightColor"],
  ["borderLeftStyle", "borderRightStyle"],
  ["borderLeftWidth", "borderRightWidth"],
  ["borderTopLeftRadius", "borderTopRightRadius"],
  ["borderBottomLeftRadius", "borderBottomRightRadius"],
  // kebab-case versions
  ["padding-left", "padding-right"],
  ["margin-left", "margin-right"],
  ["border-left", "border-right"],
  ["border-left-color", "border-right-color"],
  ["border-left-style", "border-right-style"],
  ["border-left-width", "border-right-width"],
  ["border-top-left-radius", "border-top-right-radius"],
  ["border-bottom-left-radius", "border-bottom-right-radius"]
]), kv = ["content"], ol = vu([["ltr", "rtl"], ["left", "right"], ["w-resize", "e-resize"], ["sw-resize", "se-resize"], ["nw-resize", "ne-resize"]]), xv = new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)", "g"), Sv = new RegExp("(left)|(right)");
function Qa(e) {
  return Object.keys(e).reduce(function(t, r) {
    var o = e[r];
    if (mv(o) && (o = o.trim()), nn(kv, r))
      return t[r] = o, t;
    var n = so(r, o), i = n.key, a = n.value;
    return t[i] = a, t;
  }, Array.isArray(e) ? [] : {});
}
function so(e, t) {
  var r = /\/\*\s?@noflip\s?\*\//.test(t), o = r ? e : Ev(e), n = r ? t : Bv(o, t);
  return {
    key: o,
    value: n
  };
}
function Ev(e) {
  return gu[e] || e;
}
function Bv(e, t) {
  if (!_v(t))
    return t;
  if (gv(t))
    return Qa(t);
  var r = Zr(t), o = vv(t), n = r || o ? t : t.replace(/ !important.*?$/, ""), i = !r && n.length !== t.length, a = T[e], s;
  return a ? s = a({
    value: n,
    valuesToConvert: ol,
    propertiesToConvert: gu,
    isRtl: !0,
    bgImgDirectionRegex: xv,
    bgPosDirectionRegex: Sv
  }) : s = ol[n] || n, i ? s + " !important" : s;
}
const Nv = /[A-Z]/g, Tv = /^ms-/, Bi = {};
function Cv(e) {
  return "-" + e.toLowerCase();
}
function Dt(e) {
  if (Object.prototype.hasOwnProperty.call(Bi, e))
    return Bi[e];
  if (e.substr(0, 2) === "--")
    return e;
  const t = e.replace(Nv, Cv);
  return Bi[e] = Tv.test(t) ? "-" + t : t;
}
function mu(e) {
  return e.charAt(0) === "&" ? e.slice(1) : e;
}
var oo = "-moz-", dt = "-webkit-", bu = "comm", Vn = "rule", es = "decl", Pv = "@media", Ov = "@import", zv = "@supports", Rv = "@keyframes", yu = "@layer", _u = Math.abs, Hn = String.fromCharCode, Dv = Object.assign;
function Av(e, t) {
  return Me(e, 0) ^ 45 ? (((t << 2 ^ Me(e, 0)) << 2 ^ Me(e, 1)) << 2 ^ Me(e, 2)) << 2 ^ Me(e, 3) : 0;
}
function wu(e) {
  return e.trim();
}
function ku(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function We(e, t, r) {
  return e.replace(t, r);
}
function xu(e, t, r) {
  return e.indexOf(t, r);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function lo(e, t, r) {
  return e.slice(t, r);
}
function wt(e) {
  return e.length;
}
function Su(e) {
  return e.length;
}
function nr(e, t) {
  return t.push(e), e;
}
function jv(e, t) {
  return e.map(t).join("");
}
var $n = 1, Cr = 1, Eu = 0, Je = 0, ke = 0, Fr = "";
function Wn(e, t, r, o, n, i, a, s) {
  return { value: e, root: t, parent: r, type: o, props: n, children: i, line: $n, column: Cr, length: a, return: "", siblings: s };
}
function Ni(e, t) {
  return Dv(Wn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Fv() {
  return ke;
}
function Iv() {
  return ke = Je > 0 ? Me(Fr, --Je) : 0, Cr--, ke === 10 && (Cr = 1, $n--), ke;
}
function at() {
  return ke = Je < Eu ? Me(Fr, Je++) : 0, Cr++, ke === 10 && (Cr = 1, $n++), ke;
}
function ir() {
  return Me(Fr, Je);
}
function an() {
  return Je;
}
function Un(e, t) {
  return lo(Fr, e, t);
}
function xn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Bu(e) {
  return $n = Cr = 1, Eu = wt(Fr = e), Je = 0, [];
}
function Nu(e) {
  return Fr = "", e;
}
function sn(e) {
  return wu(Un(Je - 1, da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qv(e) {
  return Nu(Lv(Bu(e)));
}
function Mv(e) {
  for (; (ke = ir()) && ke < 33; )
    at();
  return xn(e) > 2 || xn(ke) > 3 ? "" : " ";
}
function Lv(e) {
  for (; at(); )
    switch (xn(ke)) {
      case 0:
        nr(Tu(Je - 1), e);
        break;
      case 2:
        nr(sn(ke), e);
        break;
      default:
        nr(Hn(ke), e);
    }
  return e;
}
function Vv(e, t) {
  for (; --t && at() && !(ke < 48 || ke > 102 || ke > 57 && ke < 65 || ke > 70 && ke < 97); )
    ;
  return Un(e, an() + (t < 6 && ir() == 32 && at() == 32));
}
function da(e) {
  for (; at(); )
    switch (ke) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && da(ke);
        break;
      case 40:
        e === 41 && da(e);
        break;
      case 92:
        at();
        break;
    }
  return Je;
}
function Hv(e, t) {
  for (; at() && e + ke !== 57; )
    if (e + ke === 84 && ir() === 47)
      break;
  return "/*" + Un(t, Je - 1) + "*" + Hn(e === 47 ? e : at());
}
function Tu(e) {
  for (; !xn(ir()); )
    at();
  return Un(e, Je);
}
function ts(e) {
  return Nu(ln("", null, null, null, [""], e = Bu(e), 0, [0], e));
}
function ln(e, t, r, o, n, i, a, s, l) {
  for (var c = 0, u = 0, d = a, f = 0, v = 0, h = 0, p = 1, y = 1, g = 1, _ = 0, m = "", k = n, w = i, x = o, E = m; y; )
    switch (h = _, _ = at()) {
      case 40:
        if (h != 108 && Me(E, d - 1) == 58) {
          xu(E += We(sn(_), "&", "&\f"), "&\f", _u(c ? s[c - 1] : 0)) != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += sn(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Mv(h);
        break;
      case 92:
        E += Vv(an() - 1, 7);
        continue;
      case 47:
        switch (ir()) {
          case 42:
          case 47:
            nr($v(Hv(at(), an()), t, r, l), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * p:
        s[c++] = wt(E) * g;
      case 125 * p:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            g == -1 && (E = We(E, /\f/g, "")), v > 0 && wt(E) - d && nr(v > 32 ? il(E + ";", o, r, d - 1, l) : il(We(E, " ", "") + ";", o, r, d - 2, l), l);
            break;
          case 59:
            E += ";";
          default:
            if (nr(x = nl(E, t, r, c, u, n, s, m, k = [], w = [], d, i), i), _ === 123)
              if (u === 0)
                ln(E, t, x, x, k, i, d, s, w);
              else
                switch (f === 99 && Me(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ln(e, x, x, o && nr(nl(e, x, x, 0, 0, n, s, m, n, k = [], d, w), w), n, w, d, s, o ? k : w);
                    break;
                  default:
                    ln(E, x, x, x, [""], w, 0, s, w);
                }
        }
        c = u = v = 0, p = g = 1, m = E = "", d = a;
        break;
      case 58:
        d = 1 + wt(E), v = h;
      default:
        if (p < 1) {
          if (_ == 123)
            --p;
          else if (_ == 125 && p++ == 0 && Iv() == 125)
            continue;
        }
        switch (E += Hn(_), _ * p) {
          case 38:
            g = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[c++] = (wt(E) - 1) * g, g = 1;
            break;
          case 64:
            ir() === 45 && (E += sn(at())), f = ir(), u = d = wt(m = E += Tu(an())), _++;
            break;
          case 45:
            h === 45 && wt(E) == 2 && (p = 0);
        }
    }
  return i;
}
function nl(e, t, r, o, n, i, a, s, l, c, u, d) {
  for (var f = n - 1, v = n === 0 ? i : [""], h = Su(v), p = 0, y = 0, g = 0; p < o; ++p)
    for (var _ = 0, m = lo(e, f + 1, f = _u(y = a[p])), k = e; _ < h; ++_)
      (k = wu(y > 0 ? v[_] + " " + m : We(m, /&\f/g, v[_]))) && (l[g++] = k);
  return Wn(e, t, r, n === 0 ? Vn : s, l, c, u, d);
}
function $v(e, t, r, o) {
  return Wn(e, t, r, bu, Hn(Fv()), lo(e, 2, -2), 0, o);
}
function il(e, t, r, o, n) {
  return Wn(e, t, r, es, lo(e, 0, o), lo(e, o + 1, -1), o, n);
}
function lr(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function rs(e, t, r, o) {
  switch (e.type) {
    case yu:
      if (e.children.length)
        break;
    case Ov:
    case es:
      return e.return = e.return || e.value;
    case bu:
      return "";
    case Rv:
      return e.return = e.value + "{" + lr(e.children, o) + "}";
    case Vn:
      if (!wt(e.value = e.props.join(",")))
        return "";
  }
  return wt(r = lr(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function os(e) {
  var t = Su(e);
  return function(r, o, n, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, o, n, i) || "";
    return a;
  };
}
function Cu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
const Pu = (e) => {
  switch (e.type) {
    case Vn:
      if (typeof e.props == "string") {
        if (process.env.NODE_ENV !== "production")
          throw new Error(`"element.props" has type "string" (${JSON.stringify(e.props, null, 2)}), it's not expected. Please report a bug if it happens.`);
        return;
      }
      e.props = e.props.map((t) => t.indexOf(":global(") === -1 ? t : qv(t).reduce((r, o, n, i) => {
        if (o === "")
          return r;
        if (o === ":" && i[n + 1] === "global") {
          const a = (
            // An inner part of ":global()"
            i[n + 2].slice(1, -1) + // A separator between selectors i.e. "body .class"
            " "
          );
          return r.unshift(a), i[n + 1] = "", i[n + 2] = "", r;
        }
        return r.push(o), r;
      }, []).join(""));
  }
};
function Ou(e, t, r) {
  switch (Av(e, t)) {
    case 5103:
      return dt + "print-" + e + e;
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
      return dt + e + e;
    case 4215:
      if (Me(e, 9) === 102 || Me(e, t + 1) === 116)
        return dt + e + e;
      break;
    case 4789:
      return oo + e + e;
    case 5349:
    case 4246:
    case 6968:
      return dt + e + oo + e + e;
    case 6187:
      if (!ku(e, /grab/))
        return We(We(We(e, /(zoom-|grab)/, dt + "$1"), /(image-set)/, dt + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return We(e, /(image-set\([^]*)/, dt + "$1$`$1");
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return We(e, /(.+)-inline(.+)/, dt + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (wt(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 102:
            if (Me(e, t + 3) === 108)
              return We(
                e,
                /(.+:)(.+)-([^]+)/,
                // eslint-disable-next-line no-useless-concat, eqeqeq
                "$1" + dt + "$2-$3$1" + oo + (Me(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e;
          case 115:
            return ~xu(e, "stretch") ? Ou(We(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
  }
  return e;
}
function ns(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case es:
        e.return = Ou(e.value, e.length);
        return;
      case Vn:
        if (e.length)
          return jv(e.props, function(n) {
            switch (ku(n, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return lr(
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  [Ni(e, {
                    props: [We(n, /:(read-\w+)/, ":" + oo + "$1")]
                  })],
                  o
                );
              case "::placeholder":
                return lr([
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  Ni(e, {
                    props: [We(n, /:(plac\w+)/, ":" + dt + "input-$1")]
                  }),
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  Ni(e, {
                    props: [We(n, /:(plac\w+)/, ":" + oo + "$1")]
                  })
                ], o);
            }
            return "";
          });
    }
}
function zu(e) {
  switch (e.type) {
    case "@container":
    case Pv:
    case zv:
    case yu:
      return !0;
  }
  return !1;
}
const Wv = (e) => {
  zu(e) && Array.isArray(e.children) && e.children.sort((t, r) => t.props[0] > r.props[0] ? 1 : -1);
};
function Uv() {
}
function Gv(e, t) {
  const r = [];
  return lr(ts(e), os([
    Pu,
    t ? Wv : Uv,
    ns,
    rs,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    Cu((o) => r.push(o))
  ])), r;
}
const Kv = /,( *[^ &])/g;
function Ru(e) {
  return "&" + mu(
    // Regex there replaces a comma, spaces and an ampersand if it's present with comma and an ampersand.
    // This allows to normalize input, see examples in JSDoc.
    e.replace(Kv, ",&$1")
  );
}
function al(e, t, r) {
  let o = t;
  return r.length > 0 && (o = r.reduceRight((n, i) => `${Ru(i)} { ${n} }`, t)), `${e}{${o}}`;
}
function sl(e) {
  const {
    className: t,
    media: r,
    layer: o,
    selectors: n,
    support: i,
    property: a,
    rtlClassName: s,
    rtlProperty: l,
    rtlValue: c,
    value: u,
    container: d
  } = e, f = `.${t}`, v = Array.isArray(u) ? `${u.map((p) => `${Dt(a)}: ${p}`).join(";")};` : `${Dt(a)}: ${u};`;
  let h = al(f, v, n);
  if (l && s) {
    const p = `.${s}`, y = Array.isArray(c) ? `${c.map((g) => `${Dt(l)}: ${g}`).join(";")};` : `${Dt(l)}: ${c};`;
    h += al(p, y, n);
  }
  return r && (h = `@media ${r} { ${h} }`), o && (h = `@layer ${o} { ${h} }`), i && (h = `@supports ${i} { ${h} }`), d && (h = `@container ${d} { ${h} }`), Gv(h, !0);
}
function Xv(e) {
  let t = "";
  for (const r in e) {
    const o = e[r];
    typeof o != "string" && typeof o != "number" || (t += Dt(r) + ":" + o + ";");
  }
  return t;
}
function Sn(e) {
  let t = "";
  for (const r in e)
    t += `${r}{${Xv(e[r])}}`;
  return t;
}
function En(e, t) {
  const r = `@keyframes ${e} {${t}}`, o = [];
  return lr(ts(r), os([
    rs,
    ns,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    Cu((n) => o.push(n))
  ])), o;
}
function ll(e, t) {
  return e.length === 0 ? t : `${e} and ${t}`;
}
function Du(e) {
  return e.substr(0, 6) === "@media";
}
function Au(e) {
  return e.substr(0, 6) === "@layer";
}
const Yv = /^(:|\[|>|&)/;
function ju(e) {
  return Yv.test(e);
}
function Fu(e) {
  return e.substr(0, 9) === "@supports";
}
function Iu(e) {
  return e.substring(0, 10) === "@container";
}
function qu(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
const cl = {
  // :focus-within
  "us-w": "w",
  // :focus-visible
  "us-v": "i",
  // :link
  nk: "l",
  // :visited
  si: "v",
  // :focus
  cu: "f",
  // :hover
  ve: "h",
  // :active
  ti: "a"
};
function ul(e, t, r, o, n) {
  if (r)
    return "m";
  if (t || o)
    return "t";
  if (n)
    return "c";
  if (e.length > 0) {
    const i = e[0].trim();
    if (i.charCodeAt(0) === 58)
      return cl[i.slice(4, 8)] || cl[i.slice(3, 5)] || "d";
  }
  return "d";
}
function Vo({
  container: e,
  media: t,
  layer: r,
  property: o,
  selector: n,
  support: i,
  value: a
}) {
  const s = pt(n + e + t + r + i + o + // Trimming of value is required to generate consistent hashes
  a.trim());
  return ua + s;
}
function dl(e, t, r, o, n) {
  const i = e + t + r + o + n, a = pt(i), s = a.charCodeAt(0);
  return s >= 48 && s <= 57 ? String.fromCharCode(s + 17) + a.slice(1) : a;
}
function fl(e) {
  return e.replace(/>\s+/g, ">");
}
function Mu(...e) {
  process.env.NODE_ENV !== "production" && typeof document < "u" && console.error(...e);
}
function Lu(e, t) {
  const r = JSON.stringify(t, null, 2), o = ["@griffel/react: A rule was not resolved to CSS properly. Please check your `makeStyles` or `makeResetStyles` calls for following:", " ".repeat(2) + "makeStyles({", " ".repeat(4) + "[slot]: {", " ".repeat(6) + `"${e}": ${r.split(`
`).map((n, i) => " ".repeat(i === 0 ? 0 : 6) + n).join(`
`)}`, " ".repeat(4) + "}", " ".repeat(2) + "})", ""];
  e.indexOf("&") === -1 ? (o.push("It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected."), o.push(`Try to update a property to include it i.e "${e}" => "&${e}".`)) : (o.push(""), o.push("If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues")), Mu(o.join(`
`));
}
function Jv(e, t) {
  Mu([`@griffel/react: You are using unsupported shorthand CSS property "${e}". Please check your "makeStyles" calls, there *should not* be following:`, " ".repeat(2) + "makeStyles({", " ".repeat(4) + `[slot]: { ${e}: "${t}" }`, " ".repeat(2) + "})", "", "Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands"].join(`
`));
}
function hl(e, t, r, o) {
  e[t] = o ? [r, o] : r;
}
function vl(e, t) {
  return t ? [e, t] : e;
}
function Ti(e, t, r, o, n) {
  var i;
  let a;
  t === "m" && n && (a = {
    m: n
  }), (i = e[t]) != null || (e[t] = []), r && e[t].push(vl(r, a)), o && e[t].push(vl(o, a));
}
function Qt(e, t = [], r = "", o = "", n = "", i = "", a = {}, s = {}, l) {
  for (const c in e) {
    if (tv.hasOwnProperty(c)) {
      Jv(c, e[c]);
      continue;
    }
    const u = e[c];
    if (u != null) {
      if (typeof u == "string" || typeof u == "number") {
        const d = fl(t.join("")), f = dl(d, i, r, n, c), v = Vo({
          container: i,
          media: r,
          layer: o,
          value: u.toString(),
          support: n,
          selector: d,
          property: c
        }), h = l && {
          key: c,
          value: l
        } || so(c, u), p = h.key !== c || h.value !== u, y = p ? Vo({
          container: i,
          value: h.value.toString(),
          property: h.key,
          selector: d,
          media: r,
          layer: o,
          support: n
        }) : void 0, g = p ? {
          rtlClassName: y,
          rtlProperty: h.key,
          rtlValue: h.value
        } : void 0, _ = ul(t, o, r, n, i), [m, k] = sl(Object.assign({
          className: v,
          media: r,
          layer: o,
          selectors: t,
          property: c,
          support: n,
          container: i,
          value: u
        }, g));
        hl(a, f, v, y), Ti(s, _, m, k, r);
      } else if (c === "animationName") {
        const d = Array.isArray(u) ? u : [u], f = [], v = [];
        for (const h of d) {
          const p = Sn(h), y = Sn(Qa(h)), g = ua + pt(p);
          let _;
          const m = En(g, p);
          let k = [];
          p === y ? _ = g : (_ = ua + pt(y), k = En(_, y));
          for (let w = 0; w < m.length; w++)
            Ti(
              s,
              // keyframes styles should be inserted into own bucket
              "k",
              m[w],
              k[w],
              r
            );
          f.push(g), v.push(_);
        }
        Qt({
          animationName: f.join(", ")
        }, t, r, o, n, i, a, s, v.join(", "));
      } else if (Array.isArray(u)) {
        if (u.length === 0) {
          process.env.NODE_ENV !== "production" && console.warn(`makeStyles(): An empty array was passed as input to "${c}", the property will be omitted in the styles.`);
          continue;
        }
        const d = fl(t.join("")), f = dl(d, i, r, n, c), v = Vo({
          container: i,
          media: r,
          layer: o,
          value: u.map((x) => (x ?? "").toString()).join(";"),
          support: n,
          selector: d,
          property: c
        }), h = u.map((x) => so(c, x));
        if (!!h.some((x) => x.key !== h[0].key)) {
          process.env.NODE_ENV !== "production" && console.error("makeStyles(): mixing CSS fallback values which result in multiple CSS properties in RTL is not supported.");
          continue;
        }
        const y = h[0].key !== c || h.some((x, E) => x.value !== u[E]), g = y ? Vo({
          container: i,
          value: h.map((x) => {
            var E;
            return ((E = x == null ? void 0 : x.value) != null ? E : "").toString();
          }).join(";"),
          property: h[0].key,
          selector: d,
          layer: o,
          media: r,
          support: n
        }) : void 0, _ = y ? {
          rtlClassName: g,
          rtlProperty: h[0].key,
          rtlValue: h.map((x) => x.value)
        } : void 0, m = ul(t, o, r, n, i), [k, w] = sl(Object.assign({
          className: v,
          media: r,
          layer: o,
          selectors: t,
          property: c,
          support: n,
          container: i,
          value: u
        }, _));
        hl(a, f, v, g), Ti(s, m, k, w, r);
      } else if (qu(u))
        if (ju(c))
          Qt(u, t.concat(mu(c)), r, o, n, i, a, s);
        else if (Du(c)) {
          const d = ll(r, c.slice(6).trim());
          Qt(u, t, d, o, n, i, a, s);
        } else if (Au(c)) {
          const d = (o ? `${o}.` : "") + c.slice(6).trim();
          Qt(u, t, r, d, n, i, a, s);
        } else if (Fu(c)) {
          const d = ll(n, c.slice(9).trim());
          Qt(u, t, r, o, d, i, a, s);
        } else if (Iu(c)) {
          const d = c.slice(10).trim();
          Qt(u, t, r, o, n, d, a, s);
        } else
          Lu(c, u);
    }
  }
  return [a, s];
}
function Zv(e) {
  const t = {}, r = {};
  for (const o in e) {
    const n = e[o], [i, a] = Qt(n);
    t[o] = i, Object.keys(a).forEach((s) => {
      r[s] = (r[s] || []).concat(a[s]);
    });
  }
  return [t, r];
}
const is = "<unknown>";
function Qv(e) {
  return op(e) || ap(e) || lp(e);
}
const ep = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i, tp = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i, rp = /\((\S*)\)/;
function op(e) {
  const t = ep.exec(e) || tp.exec(e);
  if (!t)
    return null;
  let r = t[2];
  const o = r && r.indexOf("native") === 0, n = r && r.indexOf("eval") === 0, i = rp.exec(r);
  return n && i != null && (r = i[1]), {
    loc: o ? null : t[2],
    name: t[1] || is
  };
}
const np = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i, ip = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function ap(e) {
  const t = np.exec(e);
  if (!t)
    return null;
  let r = t[3];
  const o = r && r.indexOf(" > eval") > -1, n = ip.exec(r);
  return o && n != null && (r = n[1]), {
    loc: t[3],
    name: t[1] || is
  };
}
const sp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
function lp(e) {
  const t = sp.exec(e);
  return t ? {
    loc: t[3],
    name: t[1] || is
  } : null;
}
function Vu() {
  const e = String(new Error().stack).split(`
`), t = cp(e);
  if (t === void 0)
    return;
  const r = Qv(t);
  return r == null ? void 0 : r.loc;
}
function cp(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].includes("at getSourceURLfromError"))
      return e[t + 3];
}
function up(e, t = Ln) {
  const r = t();
  let o = null, n = null, i = null, a = null, s;
  process.env.NODE_ENV !== "production" && Tr && (s = Vu());
  function l(c) {
    const {
      dir: u,
      renderer: d
    } = c;
    o === null && ([o, n] = Zv(e));
    const f = u === "ltr";
    f ? i === null && (i = wn(o, u)) : a === null && (a = wn(o, u)), r(d, n);
    const v = f ? i : a;
    return process.env.NODE_ENV !== "production" && Tr && Nr.addSequenceDetails(v, s), v;
  }
  return l;
}
function dp(e) {
  return function(t) {
    t.root || t.return && e(t, t.return);
  };
}
function pl(e) {
  const t = [], r = [];
  return lr(ts(e), os([
    Pu,
    ns,
    rs,
    // 💡 we are using `.insertRule()` API for DOM operations, which does not support
    // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
    // individual rules to be used with this API
    dp((o, n) => {
      if (zu(o)) {
        r.push(n);
        return;
      }
      t.push(n);
    })
  ])), [t, r];
}
function fa(e) {
  let t = "", r = "";
  for (const o in e) {
    const n = e[o];
    if (n != null) {
      if (typeof n == "string" || typeof n == "number") {
        const {
          key: i,
          value: a
        } = so(o, n);
        t += `${Dt(o)}:${n};`, r += `${Dt(i)}:${a};`;
        continue;
      }
      if (o === "animationName" && typeof n == "object") {
        const i = Array.isArray(n) ? n : [n], a = [], s = [];
        for (const l of i) {
          const c = Sn(l), u = Sn(Qa(l)), d = ao + pt(c), f = ao + pt(u);
          a.push(d), s.push(f), t += En(d, c).join(""), d !== f && (r += En(f, u).join(""));
        }
        t += `animation-name:${a.join(",")};`, r += `animation-name:${s.join(",")};`;
        continue;
      }
      if (Array.isArray(n)) {
        if (n.length === 0) {
          process.env.NODE_ENV !== "production" && console.warn(`makeResetStyles(): An empty array was passed as input to "${o}", the property will be omitted in the styles.`);
          continue;
        }
        const i = n.map((l) => so(o, l));
        if (!!i.some((l) => l.key !== i[0].key)) {
          process.env.NODE_ENV !== "production" && console.error("makeStyles(): mixing CSS fallback values which result in multiple CSS properties in RTL is not supported.");
          continue;
        }
        const s = i[0].key;
        t += n.map((l) => `${Dt(o)}:${l};`).join(""), r += i.map((l) => `${Dt(s)}:${l.value};`).join("");
        continue;
      }
      if (qu(n)) {
        if (ju(o)) {
          const i = Ru(o), [a, s] = fa(n);
          t += `${i}{${a}}`, r += `${i}{${s}}`;
          continue;
        }
        if (Du(o) || Au(o) || Fu(o) || Iu(o)) {
          const [i, a] = fa(n);
          t += `${o}{${i}}`, r += `${o}{${a}}`;
          continue;
        }
      }
      Lu(o, n);
    }
  }
  return [t, r];
}
function fp(e) {
  const [t, r] = fa(e), o = ao + pt(t), [n, i] = pl(`.${o}{${t}}`), a = i.length > 0;
  if (t === r)
    return [o, null, a ? {
      r: n,
      s: i
    } : n];
  const s = ao + pt(r), [l, c] = pl(`.${s}{${r}}`);
  return [o, s, a ? {
    r: n.concat(l),
    s: i.concat(c)
  } : n.concat(l)];
}
function hp(e, t = Ln) {
  const r = t();
  let o = null, n = null, i = null;
  function a(s) {
    const {
      dir: l,
      renderer: c
    } = s;
    o === null && ([o, n, i] = fp(e)), r(c, Array.isArray(i) ? {
      r: i
    } : i);
    const u = l === "ltr" ? o : n || o;
    return process.env.NODE_ENV !== "production" && (Za[u] = 1), u;
  }
  return a;
}
function vp(e, t, r = Ln) {
  const o = r();
  let n = null, i = null, a;
  process.env.NODE_ENV !== "production" && Tr && (a = Vu());
  function s(l) {
    const {
      dir: c,
      renderer: u
    } = l, d = c === "ltr";
    d ? n === null && (n = wn(e, c)) : i === null && (i = wn(e, c)), o(u, t);
    const f = d ? n : i;
    return process.env.NODE_ENV !== "production" && Tr && Nr.addSequenceDetails(f, a), f;
  }
  return s;
}
function pp(e, t, r, o = Ln) {
  const n = o();
  function i(a) {
    const {
      dir: s,
      renderer: l
    } = a, c = s === "ltr" ? e : t || e;
    return n(l, Array.isArray(r) ? {
      r
    } : r), process.env.NODE_ENV !== "production" && (Za[c] = 1), c;
  }
  return i;
}
const gp = ["Top", "Right", "Bottom", "Left"];
function _o(e, t, ...r) {
  const [o, n = o, i = o, a = n] = r, s = [o, n, i, a], l = {};
  for (let c = 0; c < s.length; c += 1)
    if (s[c] || s[c] === 0) {
      const u = e + gp[c] + t;
      l[u] = s[c];
    }
  return l;
}
function ha(...e) {
  return _o("border", "Width", ...e);
}
function va(...e) {
  return _o("border", "Style", ...e);
}
function pa(...e) {
  return _o("border", "Color", ...e);
}
const mp = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
function wo(e) {
  return mp.includes(e);
}
function bp(...e) {
  return wo(e[0]) ? Object.assign({}, va(e[0]), e[1] && ha(e[1]), e[2] && pa(e[2])) : Object.assign({}, ha(e[0]), e[1] && va(e[1]), e[2] && pa(e[2]));
}
function yp(...e) {
  return wo(e[0]) ? Object.assign({
    borderLeftStyle: e[0]
  }, e[1] && {
    borderLeftWidth: e[1]
  }, e[2] && {
    borderLeftColor: e[2]
  }) : Object.assign({
    borderLeftWidth: e[0]
  }, e[1] && {
    borderLeftStyle: e[1]
  }, e[2] && {
    borderLeftColor: e[2]
  });
}
function _p(...e) {
  return wo(e[0]) ? Object.assign({
    borderBottomStyle: e[0]
  }, e[1] && {
    borderBottomWidth: e[1]
  }, e[2] && {
    borderBottomColor: e[2]
  }) : Object.assign({
    borderBottomWidth: e[0]
  }, e[1] && {
    borderBottomStyle: e[1]
  }, e[2] && {
    borderBottomColor: e[2]
  });
}
function wp(...e) {
  return wo(e[0]) ? Object.assign({
    borderRightStyle: e[0]
  }, e[1] && {
    borderRightWidth: e[1]
  }, e[2] && {
    borderRightColor: e[2]
  }) : Object.assign({
    borderRightWidth: e[0]
  }, e[1] && {
    borderRightStyle: e[1]
  }, e[2] && {
    borderRightColor: e[2]
  });
}
function kp(...e) {
  return wo(e[0]) ? Object.assign({
    borderTopStyle: e[0]
  }, e[1] && {
    borderTopWidth: e[1]
  }, e[2] && {
    borderTopColor: e[2]
  }) : Object.assign({
    borderTopWidth: e[0]
  }, e[1] && {
    borderTopStyle: e[1]
  }, e[2] && {
    borderTopColor: e[2]
  });
}
function xp(e, t = e, r = e, o = t) {
  return {
    borderBottomRightRadius: r,
    borderBottomLeftRadius: o,
    borderTopRightRadius: t,
    borderTopLeftRadius: e
  };
}
const Sp = (e) => typeof e == "string" && /(\d+(\w+|%))/.test(e), Ho = (e) => typeof e == "number" && !Number.isNaN(e), Ep = (e) => e === "initial", gl = (e) => e === "auto", Bp = (e) => e === "none", Np = ["content", "fit-content", "max-content", "min-content"], Ci = (e) => Np.some((t) => e === t) || Sp(e);
function Tp(...e) {
  const t = e.length === 1, r = e.length === 2, o = e.length === 3;
  if (t) {
    const [n] = e;
    if (Ep(n))
      return {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto"
      };
    if (gl(n))
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto"
      };
    if (Bp(n))
      return {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto"
      };
    if (Ho(n))
      return {
        flexGrow: n,
        flexShrink: 1,
        flexBasis: 0
      };
    if (Ci(n))
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: n
      };
  }
  if (r) {
    const [n, i] = e;
    if (Ho(i))
      return {
        flexGrow: n,
        flexShrink: i,
        flexBasis: 0
      };
    if (Ci(i))
      return {
        flexGrow: n,
        flexShrink: 1,
        flexBasis: i
      };
  }
  if (o) {
    const [n, i, a] = e;
    if (Ho(n) && Ho(i) && (gl(a) || Ci(a)))
      return {
        flexGrow: n,
        flexShrink: i,
        flexBasis: a
      };
  }
  return process.env.NODE_ENV !== "production" && console.error("The value passed to shorthands.flex did not match any flex property specs. The CSS styles were not generated. Please, check the flex documentation."), {};
}
function Cp(e, t = e) {
  return {
    columnGap: e,
    rowGap: t
  };
}
const Pp = /var\(.*\)/gi;
function Op(e) {
  return e === void 0 || typeof e == "number" || typeof e == "string" && !Pp.test(e);
}
const zp = /^[a-zA-Z0-9\-_\\#;]+$/, Rp = /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|^\d.*/;
function Pi(e) {
  return e !== void 0 && typeof e == "string" && zp.test(e) && !Rp.test(e);
}
function Dp(...e) {
  if (e.some((i) => !Op(i)))
    return process.env.NODE_ENV !== "production" && console.error("The value passed to shorthands.gridArea() did not match any gridArea property specs. The CSS styles were not generated. Please, check the gridArea documentation.", ["The value passed to shorthands.gridArea() did not match any gridArea property specs. ", `The CSS styles were not generated.
`, "Please, check the `grid-area` documentation:\n", "- https://developer.mozilla.org/docs/Web/CSS/grid-area", "- https://griffel.js.org/react/api/shorthands#shorthandsgridarea"].join("")), {};
  const t = e[0] !== void 0 ? e[0] : "auto", r = e[1] !== void 0 ? e[1] : Pi(t) ? t : "auto", o = e[2] !== void 0 ? e[2] : Pi(t) ? t : "auto", n = e[3] !== void 0 ? e[3] : Pi(r) ? r : "auto";
  return {
    gridRowStart: t,
    gridColumnStart: r,
    gridRowEnd: o,
    gridColumnEnd: n
  };
}
function Ap(...e) {
  return _o("margin", "", ...e);
}
function jp(e, t = e) {
  return {
    marginBlockStart: e,
    marginBlockEnd: t
  };
}
function Fp(e, t = e) {
  return {
    marginInlineStart: e,
    marginInlineEnd: t
  };
}
function Ip(...e) {
  return _o("padding", "", ...e);
}
function qp(e, t = e) {
  return {
    paddingBlockStart: e,
    paddingBlockEnd: t
  };
}
function Mp(e, t = e) {
  return {
    paddingInlineStart: e,
    paddingInlineEnd: t
  };
}
function Lp(e, t = e) {
  return {
    overflowX: e,
    overflowY: t
  };
}
function Vp(...e) {
  const [t, r = t, o = t, n = r] = e;
  return {
    top: t,
    right: r,
    bottom: o,
    left: n
  };
}
function Hp(e, t, r) {
  return Object.assign({
    outlineWidth: e
  }, t && {
    outlineStyle: t
  }, r && {
    outlineColor: r
  });
}
function $p(...e) {
  return Up(e) ? {
    transitionDelay: e[0],
    transitionDuration: e[0],
    transitionProperty: e[0],
    transitionTimingFunction: e[0]
  } : Gp(e).reduce((r, [o, n = "0s", i = "0s", a = "ease"], s) => (s === 0 ? (r.transitionProperty = o, r.transitionDuration = n, r.transitionDelay = i, r.transitionTimingFunction = a) : (r.transitionProperty += `, ${o}`, r.transitionDuration += `, ${n}`, r.transitionDelay += `, ${i}`, r.transitionTimingFunction += `, ${a}`), r), {});
}
const Wp = ["-moz-initial", "inherit", "initial", "revert", "unset"];
function Up(e) {
  return e.length === 1 && Wp.includes(e[0]);
}
function Gp(e) {
  return e.length === 1 && Array.isArray(e[0]) ? e[0] : [e];
}
function Kp(e, ...t) {
  if (t.length === 0)
    return Yp(e) ? {
      textDecorationStyle: e
    } : {
      textDecorationLine: e
    };
  const [r, o, n] = t;
  return Object.assign({
    textDecorationLine: e
  }, r && {
    textDecorationStyle: r
  }, o && {
    textDecorationColor: o
  }, n && {
    textDecorationThickness: n
  });
}
const Xp = ["dashed", "dotted", "double", "solid", "wavy"];
function Yp(e) {
  return Xp.includes(e);
}
const Jp = {
  border: bp,
  borderLeft: yp,
  borderBottom: _p,
  borderRight: wp,
  borderTop: kp,
  borderColor: pa,
  borderStyle: va,
  borderRadius: xp,
  borderWidth: ha,
  flex: Tp,
  gap: Cp,
  gridArea: Dp,
  margin: Ap,
  marginBlock: jp,
  marginInline: Fp,
  padding: Ip,
  paddingBlock: qp,
  paddingInline: Mp,
  overflow: Lp,
  inset: Vp,
  outline: Hp,
  transition: $p,
  textDecoration: Kp
};
function Zp() {
  return typeof window < "u" && !!(window.document && window.document.createElement);
}
const ml = (
  // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
  // eslint-disable-next-line no-useless-concat
  b.useInsertionEffect ? b.useInsertionEffect : void 0
), Gn = () => {
  const e = {};
  return function(r, o) {
    if (ml && Zp()) {
      ml(() => {
        r.insertCSSRules(o);
      }, [r, o]);
      return;
    }
    e[r.id] === void 0 && (r.insertCSSRules(o), e[r.id] = !0);
  };
}, Qp = /* @__PURE__ */ b.createContext(/* @__PURE__ */ fv());
function Kn() {
  return b.useContext(Qp);
}
const eg = /* @__PURE__ */ b.createContext("ltr");
function Xn() {
  return b.useContext(eg);
}
function Hu() {
  try {
    const e = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
    return e == null ? !1 : (e.useContext({}), !0);
  } catch {
    return !1;
  }
}
function $u(e) {
  const t = up(e, Gn);
  if (process.env.NODE_ENV !== "production" && Hu())
    throw new Error(["makeStyles(): this function cannot be called in component's scope.", "All makeStyles() calls should be top level i.e. in a root scope of a file."].join(" "));
  return function() {
    const o = Xn(), n = Kn();
    return t({
      dir: o,
      renderer: n
    });
  };
}
function tg(e) {
  const t = hp(e, Gn);
  if (process.env.NODE_ENV !== "production" && Hu())
    throw new Error(["makeResetStyles(): this function cannot be called in component's scope.", "All makeResetStyles() calls should be top level i.e. in a root scope of a file."].join(" "));
  return function() {
    const o = Xn(), n = Kn();
    return t({
      dir: o,
      renderer: n
    });
  };
}
function W(e, t) {
  const r = vp(e, t, Gn);
  return function() {
    const n = Xn(), i = Kn();
    return r({
      dir: n,
      renderer: i
    });
  };
}
function _e(e, t, r) {
  const o = pp(e, t, r, Gn);
  return function() {
    const i = Xn(), a = Kn();
    return o({
      dir: i,
      renderer: a
    });
  };
}
const Wu = Symbol.for("fui.slotRenderFunction"), Pr = Symbol.for("fui.slotElementType");
function le(e, t) {
  const { defaultProps: r, elementType: o } = t, n = Uu(e), i = {
    ...r,
    ...n,
    [Pr]: o
  };
  return n && typeof n.children == "function" && (i[Wu] = n.children, i.children = r == null ? void 0 : r.children), i;
}
function xe(e, t) {
  if (!(e === null || e === void 0 && !t.renderByDefault))
    return le(e, t);
}
function Uu(e) {
  return typeof e == "string" || typeof e == "number" || Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  b.isValidElement(e) ? {
    children: e
  } : (e && typeof e != "object" && process.env.NODE_ENV !== "production" && console.error(`@fluentui/react-utilities [slot.${Uu.name}]:
A slot got an invalid value "${e}" (${typeof e}).
A valid value for a slot is a slot shorthand or slot properties object.
Slot shorthands can be strings, numbers, arrays or JSX elements`), e);
}
function rg(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && !Kh(e);
}
function ga(e) {
  return !!(e != null && e.hasOwnProperty(Pr));
}
function ge(e) {
  if (process.env.NODE_ENV !== "production") {
    const t = e;
    for (const r of Object.keys(t.components)) {
      const o = t[r];
      if (o !== void 0)
        if (!ga(o))
          t[r] = le(o, {
            elementType: t.components[r]
          }), console.warn(`@fluentui/react-utilities [${ge.name}]:
"state.${r}" is not a slot!
Be sure to create slots properly by using "slot.always" or "slot.optional".`);
        else {
          const { [Pr]: n } = o;
          n !== t.components[r] && (o[Pr] = t.components[r], console.warn(`@fluentui/react-utilities [${ge.name}]:
"state.${r}" element type differs from "state.components.${r}",
${n} !== ${t.components[r]}.
Be sure to create slots properly by using "slot.always" or "slot.optional" with the correct elementType.`));
        }
    }
  }
}
const me = (...e) => {
  const t = {};
  for (const r of e) {
    const o = Array.isArray(r) ? r : Object.keys(r);
    for (const n of o)
      t[n] = 1;
  }
  return t;
}, og = me([
  "onAuxClick",
  "onAnimationEnd",
  "onAnimationStart",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onInput",
  "onSubmit",
  "onLoad",
  "onError",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyUp",
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onScroll",
  "onWheel",
  "onPointerCancel",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerMove",
  "onPointerOut",
  "onPointerOver",
  "onPointerUp",
  "onGotPointerCapture",
  "onLostPointerCapture"
]), ng = me([
  "accessKey",
  "children",
  "className",
  "contentEditable",
  "dir",
  "draggable",
  "hidden",
  "htmlFor",
  "id",
  "lang",
  "ref",
  "role",
  "style",
  "tabIndex",
  "title",
  "translate",
  "spellCheck",
  "name"
]), ig = me([
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType"
]), Pe = me(ng, og, ig), ag = me(Pe, [
  "form"
]), Gu = me(Pe, [
  "height",
  "loop",
  "muted",
  "preload",
  "src",
  "width"
]), sg = me(Gu, [
  "poster"
]), lg = me(Pe, [
  "start"
]), cg = me(Pe, [
  "value"
]), ug = me(Pe, [
  "download",
  "href",
  "hrefLang",
  "media",
  "rel",
  "target",
  "type"
]), dg = me(Pe, [
  "dateTime"
]), Yn = me(Pe, [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "type",
  "value"
]), fg = me(Yn, [
  "accept",
  "alt",
  "autoCapitalize",
  "autoComplete",
  "checked",
  "dirname",
  "form",
  "height",
  "inputMode",
  "list",
  "max",
  "maxLength",
  "min",
  "multiple",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "src",
  "step",
  "size",
  "type",
  "value",
  "width"
]), hg = me(Yn, [
  "autoCapitalize",
  "cols",
  "dirname",
  "form",
  "maxLength",
  "placeholder",
  "readOnly",
  "required",
  "rows",
  "wrap"
]), vg = me(Yn, [
  "form",
  "multiple",
  "required"
]), pg = me(Pe, [
  "selected",
  "value"
]), gg = me(Pe, [
  "cellPadding",
  "cellSpacing"
]), mg = Pe, bg = me(Pe, [
  "colSpan",
  "rowSpan",
  "scope"
]), yg = me(Pe, [
  "colSpan",
  "headers",
  "rowSpan",
  "scope"
]), _g = me(Pe, [
  "span"
]), wg = me(Pe, [
  "span"
]), kg = me(Pe, [
  "disabled",
  "form"
]), xg = me(Pe, [
  "acceptCharset",
  "action",
  "encType",
  "encType",
  "method",
  "noValidate",
  "target"
]), Sg = me(Pe, [
  "allow",
  "allowFullScreen",
  "allowPaymentRequest",
  "allowTransparency",
  "csp",
  "height",
  "importance",
  "referrerPolicy",
  "sandbox",
  "src",
  "srcDoc",
  "width"
]), Eg = me(Pe, [
  "alt",
  "crossOrigin",
  "height",
  "src",
  "srcSet",
  "useMap",
  "width"
]), Bg = me(Pe, [
  "open",
  "onCancel",
  "onClose"
]);
function Ng(e, t, r) {
  const o = Array.isArray(t), n = {}, i = Object.keys(e);
  for (const a of i)
    (!o && t[a] || o && t.indexOf(a) >= 0 || a.indexOf("data-") === 0 || a.indexOf("aria-") === 0) && (!r || (r == null ? void 0 : r.indexOf(a)) === -1) && (n[a] = e[a]);
  return n;
}
const Tg = {
  label: ag,
  audio: Gu,
  video: sg,
  ol: lg,
  li: cg,
  a: ug,
  button: Yn,
  input: fg,
  textarea: hg,
  select: vg,
  option: pg,
  table: gg,
  tr: mg,
  th: bg,
  td: yg,
  colGroup: _g,
  col: wg,
  fieldset: kg,
  form: xg,
  iframe: Sg,
  img: Eg,
  time: dg,
  dialog: Bg
};
function Ku(e, t, r) {
  const o = e && Tg[e] || Pe;
  return o.as = 1, Ng(t, o, r);
}
const as = ({ primarySlotTagName: e, props: t, excludedPropNames: r }) => ({
  root: {
    style: t.style,
    className: t.className
  },
  // eslint-disable-next-line deprecation/deprecation
  primary: Ku(e, t, [
    ...r || [],
    "style",
    "className"
  ])
}), Ce = (e, t, r) => {
  var o;
  return Ku((o = t.as) !== null && o !== void 0 ? o : e, t, r);
};
function Cg() {
  return (
    // eslint-disable-next-line deprecation/deprecation, no-restricted-globals
    typeof window < "u" && !!(window.document && window.document.createElement)
  );
}
function Pg(e, t) {
  const r = b.useRef(void 0), o = b.useCallback((i, a) => (r.current !== void 0 && t(r.current), r.current = e(i, a), r.current), [
    t,
    e
  ]), n = b.useCallback(() => {
    r.current !== void 0 && (t(r.current), r.current = void 0);
  }, [
    t
  ]);
  return b.useEffect(() => n, [
    n
  ]), [
    o,
    n
  ];
}
function Og(e) {
  return typeof e == "function";
}
const Ir = (e) => {
  const [t, r] = b.useState(() => e.defaultState === void 0 ? e.initialState : zg(e.defaultState) ? e.defaultState() : e.defaultState), o = b.useRef(e.state);
  b.useEffect(() => {
    o.current = e.state;
  }, [
    e.state
  ]);
  const n = b.useCallback((i) => {
    Og(i) && i(o.current);
  }, []);
  return Rg(e.state) ? [
    e.state,
    n
  ] : [
    t,
    r
  ];
};
function zg(e) {
  return typeof e == "function";
}
const Rg = (e) => {
  const [t] = b.useState(() => e !== void 0);
  return process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (t !== (e !== void 0)) {
      const r = new Error(), o = t ? "a controlled value to be uncontrolled" : "an uncontrolled value to be controlled", n = t ? "defined to an undefined" : "undefined to a defined";
      console.error(`@fluentui/react-utilities [${Ir.name}]:
A component is changing ${o}. This is likely caused by the value changing from ${n} value, which should not happen.
Decide between using a controlled or uncontrolled input element for the lifetime of the component.
More info: https://reactjs.org/link/controlled-components
${r.stack}`);
    }
  }, [
    t,
    e
  ]), t;
}, Dg = {
  current: 0
}, Ag = /* @__PURE__ */ b.createContext(void 0);
function jg() {
  var e;
  return (e = b.useContext(Ag)) !== null && e !== void 0 ? e : Dg;
}
const qr = Cg() ? b.useLayoutEffect : b.useEffect, Et = (e) => {
  const t = b.useRef(() => {
    throw new Error("Cannot call an event handler while rendering");
  });
  return qr(() => {
    t.current = e;
  }, [
    e
  ]), b.useCallback((...r) => {
    const o = t.current;
    return o(...r);
  }, [
    t
  ]);
}, Xu = b.createContext(void 0);
Xu.Provider;
function Fg() {
  return b.useContext(Xu) || "";
}
function ko(e = "fui-", t) {
  const r = jg(), o = Fg(), n = b.useId;
  if (n) {
    const i = n(), a = b.useMemo(() => i.replace(/:/g, ""), [
      i
    ]);
    return t || `${o}${e}${a}`;
  }
  return b.useMemo(() => t || `${o}${e}${++r.current}`, [
    o,
    e,
    t,
    r
  ]);
}
function xo(...e) {
  const t = b.useCallback(
    (r) => {
      t.current = r;
      for (const o of e)
        typeof o == "function" ? o(r) : o && (o.current = r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
      ...e
    ]
  );
  return t;
}
const Yu = b.createContext(void 0), Ig = "";
Yu.Provider;
function qg() {
  var e;
  return (e = b.useContext(Yu)) !== null && e !== void 0 ? e : Ig;
}
const Ju = b.createContext(void 0), Mg = {
  // eslint-disable-next-line no-restricted-globals
  targetDocument: typeof document == "object" ? document : void 0,
  dir: "ltr"
};
Ju.Provider;
function qt() {
  var e;
  return (e = b.useContext(Ju)) !== null && e !== void 0 ? e : Mg;
}
const Zu = b.createContext(void 0);
Zu.Provider;
function Qu() {
  var e;
  return (e = b.useContext(Zu)) !== null && e !== void 0 ? e : {};
}
const ed = b.createContext(void 0), Lg = () => {
};
ed.Provider;
const Ne = (e) => {
  var t, r;
  return (r = (t = b.useContext(ed)) === null || t === void 0 ? void 0 : t[e]) !== null && r !== void 0 ? r : Lg;
}, td = b.createContext(void 0);
td.Provider;
function Vg() {
  return b.useContext(td);
}
function Hg() {
  return Pg(setTimeout, clearTimeout);
}
function bl(e, t) {
  return (...r) => {
    e == null || e(...r), t == null || t(...r);
  };
}
function ma(e, t) {
  var r;
  const o = e;
  var n;
  return !!(!(o == null || (r = o.ownerDocument) === null || r === void 0) && r.defaultView && o instanceof o.ownerDocument.defaultView[(n = t == null ? void 0 : t.constructorName) !== null && n !== void 0 ? n : "HTMLElement"]);
}
function rd(e) {
  return !!e.type.isFluentTriggerComponent;
}
function $g(e, t) {
  return typeof e == "function" ? e(t) : e ? od(e, t) : e || null;
}
function od(e, t) {
  if (!b.isValidElement(e) || e.type === b.Fragment)
    throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");
  if (rd(e)) {
    const r = od(e.props.children, t);
    return b.cloneElement(e, void 0, r);
  } else
    return b.cloneElement(e, t);
}
function nd(e) {
  return b.isValidElement(e) ? rd(e) ? nd(
    // FIXME: This casting should be unnecessary as isFluentTrigger is a guard type method,
    // but for some reason it's failing on build
    e.props.children
  ) : e : null;
}
function Wg(e) {
  return e && !!e._virtual;
}
function Ug(e) {
  return Wg(e) && e._virtual.parent || null;
}
function Gg(e, t = {}) {
  if (!e)
    return null;
  if (!t.skipVirtual) {
    const o = Ug(e);
    if (o)
      return o;
  }
  const r = e.parentNode;
  return r && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? r.host : r;
}
function yl(e, t) {
  if (!e)
    return;
  const r = e;
  r._virtual || (r._virtual = {}), r._virtual.parent = t;
}
function Kg(e, t) {
  return {
    ...t,
    [Pr]: e
  };
}
function Xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ba = { exports: {} }, fe = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function Yg() {
  if (_l)
    return fe;
  _l = 1;
  var e = 60103, t = 60106, r = 60107, o = 60108, n = 60114, i = 60109, a = 60110, s = 60112, l = 60113, c = 60120, u = 60115, d = 60116, f = 60121, v = 60122, h = 60117, p = 60129, y = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var g = Symbol.for;
    e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), o = g("react.strict_mode"), n = g("react.profiler"), i = g("react.provider"), a = g("react.context"), s = g("react.forward_ref"), l = g("react.suspense"), c = g("react.suspense_list"), u = g("react.memo"), d = g("react.lazy"), f = g("react.block"), v = g("react.server.block"), h = g("react.fundamental"), p = g("react.debug_trace_mode"), y = g("react.legacy_hidden");
  }
  function _(z) {
    if (typeof z == "object" && z !== null) {
      var te = z.$$typeof;
      switch (te) {
        case e:
          switch (z = z.type, z) {
            case r:
            case n:
            case o:
            case l:
            case c:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case a:
                case s:
                case d:
                case u:
                case i:
                  return z;
                default:
                  return te;
              }
          }
        case t:
          return te;
      }
    }
  }
  var m = i, k = e, w = s, x = r, E = d, O = u, j = t, F = n, Z = o, Oe = l;
  return fe.ContextConsumer = a, fe.ContextProvider = m, fe.Element = k, fe.ForwardRef = w, fe.Fragment = x, fe.Lazy = E, fe.Memo = O, fe.Portal = j, fe.Profiler = F, fe.StrictMode = Z, fe.Suspense = Oe, fe.isAsyncMode = function() {
    return !1;
  }, fe.isConcurrentMode = function() {
    return !1;
  }, fe.isContextConsumer = function(z) {
    return _(z) === a;
  }, fe.isContextProvider = function(z) {
    return _(z) === i;
  }, fe.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === e;
  }, fe.isForwardRef = function(z) {
    return _(z) === s;
  }, fe.isFragment = function(z) {
    return _(z) === r;
  }, fe.isLazy = function(z) {
    return _(z) === d;
  }, fe.isMemo = function(z) {
    return _(z) === u;
  }, fe.isPortal = function(z) {
    return _(z) === t;
  }, fe.isProfiler = function(z) {
    return _(z) === n;
  }, fe.isStrictMode = function(z) {
    return _(z) === o;
  }, fe.isSuspense = function(z) {
    return _(z) === l;
  }, fe.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === r || z === n || z === p || z === o || z === l || z === c || z === y || typeof z == "object" && z !== null && (z.$$typeof === d || z.$$typeof === u || z.$$typeof === i || z.$$typeof === a || z.$$typeof === s || z.$$typeof === h || z.$$typeof === f || z[0] === v);
  }, fe.typeOf = _, fe;
}
var he = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl;
function Jg() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, o = 60108, n = 60114, i = 60109, a = 60110, s = 60112, l = 60113, c = 60120, u = 60115, d = 60116, f = 60121, v = 60122, h = 60117, p = 60129, y = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var g = Symbol.for;
      e = g("react.element"), t = g("react.portal"), r = g("react.fragment"), o = g("react.strict_mode"), n = g("react.profiler"), i = g("react.provider"), a = g("react.context"), s = g("react.forward_ref"), l = g("react.suspense"), c = g("react.suspense_list"), u = g("react.memo"), d = g("react.lazy"), f = g("react.block"), v = g("react.server.block"), h = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), p = g("react.debug_trace_mode"), g("react.offscreen"), y = g("react.legacy_hidden");
    }
    var _ = !1;
    function m(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === n || I === p || I === o || I === l || I === c || I === y || _ || typeof I == "object" && I !== null && (I.$$typeof === d || I.$$typeof === u || I.$$typeof === i || I.$$typeof === a || I.$$typeof === s || I.$$typeof === h || I.$$typeof === f || I[0] === v));
    }
    function k(I) {
      if (typeof I == "object" && I !== null) {
        var D = I.$$typeof;
        switch (D) {
          case e:
            var Ie = I.type;
            switch (Ie) {
              case r:
              case n:
              case o:
              case l:
              case c:
                return Ie;
              default:
                var Qe = Ie && Ie.$$typeof;
                switch (Qe) {
                  case a:
                  case s:
                  case d:
                  case u:
                  case i:
                    return Qe;
                  default:
                    return D;
                }
            }
          case t:
            return D;
        }
      }
    }
    var w = a, x = i, E = e, O = s, j = r, F = d, Z = u, Oe = t, z = n, te = o, Fe = l, de = !1, ye = !1;
    function R(I) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(I) {
      return ye || (ye = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(I) {
      return k(I) === a;
    }
    function P(I) {
      return k(I) === i;
    }
    function M(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function G(I) {
      return k(I) === s;
    }
    function V(I) {
      return k(I) === r;
    }
    function Q(I) {
      return k(I) === d;
    }
    function K(I) {
      return k(I) === u;
    }
    function J(I) {
      return k(I) === t;
    }
    function re(I) {
      return k(I) === n;
    }
    function ae(I) {
      return k(I) === o;
    }
    function oe(I) {
      return k(I) === l;
    }
    he.ContextConsumer = w, he.ContextProvider = x, he.Element = E, he.ForwardRef = O, he.Fragment = j, he.Lazy = F, he.Memo = Z, he.Portal = Oe, he.Profiler = z, he.StrictMode = te, he.Suspense = Fe, he.isAsyncMode = R, he.isConcurrentMode = U, he.isContextConsumer = S, he.isContextProvider = P, he.isElement = M, he.isForwardRef = G, he.isFragment = V, he.isLazy = Q, he.isMemo = K, he.isPortal = J, he.isProfiler = re, he.isStrictMode = ae, he.isSuspense = oe, he.isValidElementType = m, he.typeOf = k;
  }()), he;
}
process.env.NODE_ENV === "production" ? ba.exports = Yg() : ba.exports = Jg();
var Zg = ba.exports;
function Qg(e) {
  process.env.NODE_ENV === "development" && typeof e == "object" && !Zg.isValidElementType(e) && console.error(`@fluentui/react-jsx-runtime:
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${e}.

If this happened in a slot of Fluent UI component, you might be facing package resolution issues.
Please make sure you don't have multiple versions of "@fluentui/react-utilities" installed in your dependencies or sub-dependencies.
You can check this by searching up for matching entries in a lockfile produced by your package manager (yarn.lock, pnpm-lock.yaml or package-lock.json).`);
}
function id(e, t) {
  return function(o, n, i, a, s) {
    return ga(n) ? t(Kg(o, n), null, i, a, s) : ga(o) ? t(o, n, i, a, s) : (Qg(o), e(o, n, i, a, s));
  };
}
function ad(e) {
  const { as: t, [Pr]: r, [Wu]: o, ...n } = e, i = n, a = typeof r == "string" ? t ?? r : r;
  return typeof a != "string" && t && (i.as = t), {
    elementType: a,
    props: i,
    renderFunction: o
  };
}
const ar = Uh, em = (e, t, r) => {
  const { elementType: o, renderFunction: n, props: i } = ad(e), a = {
    ...i,
    ...t
  };
  return n ? ar.jsx(b.Fragment, {
    children: n(o, a)
  }, r) : ar.jsx(o, a, r);
}, tm = (e, t, r) => {
  const { elementType: o, renderFunction: n, props: i } = ad(e), a = {
    ...i,
    ...t
  };
  return n ? ar.jsx(b.Fragment, {
    children: n(o, {
      ...a,
      children: ar.jsxs(b.Fragment, {
        children: a.children
      }, void 0)
    })
  }, r) : ar.jsxs(o, a, r);
}, $ = id(ar.jsx, em), Ve = id(ar.jsxs, tm), ya = b.createContext(void 0), rm = {};
ya.Provider;
const om = () => b.useContext(ya) ? b.useContext(ya) : rm, nm = W({
  root: {
    mc9l5x: "f1w7gpdv",
    Bg96gwp: "fez10in",
    ycbfsm: "fg4l7m0"
  },
  rtl: {
    Bz10aip: "f13rod7r"
  }
}, {
  d: [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],
  t: ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
}), im = (e, t) => {
  const {
    title: r,
    primaryFill: o = "currentColor",
    ...n
  } = e, i = {
    ...n,
    title: void 0,
    fill: o
  }, a = nm(), s = om();
  return i.className = H(a.root, (t == null ? void 0 : t.flipInRtl) && (s == null ? void 0 : s.textDirection) === "rtl" && a.rtl, i.className), r && (i["aria-label"] = r), !i["aria-label"] && !i["aria-labelledby"] ? i["aria-hidden"] = !0 : i.role = "img", i;
}, De = (e, t, r, o) => {
  const n = t === "1em" ? "20" : t, i = b.forwardRef((a, s) => {
    const l = {
      ...im(a, {
        flipInRtl: o == null ? void 0 : o.flipInRtl
      }),
      ref: s,
      width: t,
      height: t,
      viewBox: `0 0 ${n} ${n}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    return b.createElement("svg", l, ...r.map((c) => b.createElement("path", {
      d: c,
      fill: l.fill
    })));
  });
  return i.displayName = e, i;
}, am = /* @__PURE__ */ De("ArrowDownRegular", "1em", ["M16.87 10.84a.5.5 0 1 0-.74-.68l-5.63 6.17V2.5a.5.5 0 0 0-1 0v13.83l-5.63-6.17a.5.5 0 0 0-.74.68l6.31 6.91a.75.75 0 0 0 1.11 0l6.32-6.91Z"]), sm = /* @__PURE__ */ De("ArrowUpRegular", "1em", ["M3.13 9.16a.5.5 0 1 0 .74.68L9.5 3.67V17.5a.5.5 0 1 0 1 0V3.67l5.63 6.17a.5.5 0 0 0 .74-.68l-6.32-6.92a.75.75 0 0 0-1.1 0L3.13 9.16Z"]), lm = /* @__PURE__ */ De("CaretLeftRegular", "1em", ["M11.37 14.98A1 1 0 0 0 13 14.2V5.8a1 1 0 0 0-1.63-.78L6.65 8.83a1.5 1.5 0 0 0 0 2.34l4.72 3.81ZM12 5.8v8.4L7.28 10.4a.5.5 0 0 1 0-.78L12 5.8Z"]), cm = /* @__PURE__ */ De("CaretRightRegular", "1em", ["M8.63 14.98A1 1 0 0 1 7 14.2V5.8a1 1 0 0 1 1.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81ZM8 5.8v8.4l4.72-3.81a.5.5 0 0 0 0-.78L8 5.8Z"]), um = /* @__PURE__ */ De("CheckmarkRegular", "1em", ["M3.37 10.17a.5.5 0 0 0-.74.66l4 4.5c.19.22.52.23.72.02l10.5-10.5a.5.5 0 0 0-.7-.7L7.02 14.27l-3.65-4.1Z"]), dm = /* @__PURE__ */ De("ChevronLeftRegular", "1em", ["M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z"]), fm = /* @__PURE__ */ De("ChevronRightRegular", "1em", ["M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"]), hm = /* @__PURE__ */ De("CircleFilled", "1em", ["M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"]), vm = /* @__PURE__ */ De("ContentViewGalleryRegular", "1em", ["M6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6Zm0 1h3v2H6V7Zm-1 4.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm8 10V4H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5Zm3 0a2 2 0 0 0 2-2v-1h-4v3h2Zm2-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 5V8h-4v4h4Z"]), pm = /* @__PURE__ */ De("DeleteRegular", "1em", ["M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.05l-1.2 10.34A3 3 0 0 1 12.27 18H7.73a3 3 0 0 1-2.98-2.66L3.55 5H2.5a.5.5 0 0 1 0-1h5ZM5.74 15.23A2 2 0 0 0 7.73 17h4.54a2 2 0 0 0 1.99-1.77L15.44 5H4.56l1.18 10.23ZM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Z"]), gm = /* @__PURE__ */ De("EditRegular", "1em", ["M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.93-.87c.46-.1.9-.34 1.23-.68l9.36-9.36a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 1 1 2.8 2.8l-.68.66-2.8-2.79.68-.67Zm-1.38 1.38 2.8 2.8-7.99 7.97c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l8-8Z"]), mm = /* @__PURE__ */ De("Checkmark12Filled", "12", ["M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z"]), bm = /* @__PURE__ */ De("Checkmark16Filled", "16", ["M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 0 1 4.9 12L2.22 9.28a.75.75 0 1 1 1.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 0 1 1.06.04Z"]), ym = /* @__PURE__ */ De("CheckmarkCircle12Filled", "12", ["M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm7.35-.9a.5.5 0 1 0-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5Z"]), _m = /* @__PURE__ */ De("Dismiss20Regular", "20", ["m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]), wm = /* @__PURE__ */ De("ErrorCircle12Filled", "12", ["M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Zm-.75-2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.26-4.84a.5.5 0 0 1 .98 0l.01.09v2.59a.5.5 0 0 1-1 0V3.41Z"]), km = /* @__PURE__ */ De("Square12Filled", "12", ["M2 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z"]), xm = /* @__PURE__ */ De("Square16Filled", "16", ["M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7Z"]), Sm = /* @__PURE__ */ De("Warning12Filled", "12", ["M5.21 1.46a.9.9 0 0 1 1.58 0l4.09 7.17a.92.92 0 0 1-.79 1.37H1.91a.92.92 0 0 1-.79-1.37l4.1-7.17ZM5.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM6 6.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"]);
var Em = typeof WeakRef < "u", kl = class {
  constructor(e) {
    Em && typeof e == "object" ? this._weakRef = new WeakRef(e) : this._instance = e;
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */
  deref() {
    var e, t;
    let r;
    return this._weakRef ? (r = (e = this._weakRef) == null ? void 0 : e.deref(), r || delete this._weakRef) : (r = this._instance, (t = r == null ? void 0 : r.isDisposed) != null && t.call(r) && delete this._instance), r;
  }
}, bt = "keyborg:focusin", co = "keyborg:focusout";
function Bm(e) {
  const t = e.HTMLElement, r = t.prototype.focus;
  let o = !1;
  return t.prototype.focus = function() {
    o = !0;
  }, e.document.createElement("button").focus(), t.prototype.focus = r, o;
}
var Oi = !1;
function Ct(e) {
  const t = e.focus;
  t.__keyborgNativeFocus ? t.__keyborgNativeFocus.call(e) : e.focus();
}
function Nm(e) {
  const t = e;
  Oi || (Oi = Bm(t));
  const r = t.HTMLElement.prototype.focus;
  if (r.__keyborgNativeFocus)
    return;
  t.HTMLElement.prototype.focus = l;
  const o = /* @__PURE__ */ new Set(), n = (u) => {
    const d = u.target;
    if (!d)
      return;
    const f = new CustomEvent(co, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: {
        originalEvent: u
      }
    });
    d.dispatchEvent(f);
  }, i = (u) => {
    const d = u.target;
    if (!d)
      return;
    let f = u.composedPath()[0];
    const v = /* @__PURE__ */ new Set();
    for (; f; )
      f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (v.add(f), f = f.host) : f = f.parentNode;
    for (const h of o) {
      const p = h.deref();
      (!p || !v.has(p)) && (o.delete(h), p && (p.removeEventListener("focusin", i, !0), p.removeEventListener("focusout", n, !0)));
    }
    a(d, u.relatedTarget || void 0);
  }, a = (u, d, f) => {
    var v;
    const h = u.shadowRoot;
    if (h) {
      for (const g of o)
        if (g.deref() === h)
          return;
      h.addEventListener("focusin", i, !0), h.addEventListener("focusout", n, !0), o.add(new kl(h));
      return;
    }
    const p = {
      relatedTarget: d,
      originalEvent: f
    }, y = new CustomEvent(bt, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: p
    });
    y.details = p, (Oi || s.lastFocusedProgrammatically) && (p.isFocusedProgrammatically = u === ((v = s.lastFocusedProgrammatically) == null ? void 0 : v.deref()), s.lastFocusedProgrammatically = void 0), u.dispatchEvent(y);
  }, s = t.__keyborgData = {
    focusInHandler: i,
    focusOutHandler: n,
    shadowTargets: o
  };
  t.document.addEventListener(
    "focusin",
    t.__keyborgData.focusInHandler,
    !0
  ), t.document.addEventListener(
    "focusout",
    t.__keyborgData.focusOutHandler,
    !0
  );
  function l() {
    const u = t.__keyborgData;
    return u && (u.lastFocusedProgrammatically = new kl(
      this
    )), r.apply(this, arguments);
  }
  let c = t.document.activeElement;
  for (; c && c.shadowRoot; )
    a(c), c = c.shadowRoot.activeElement;
  l.__keyborgNativeFocus = r;
}
function Tm(e) {
  const t = e, r = t.HTMLElement.prototype, o = r.focus.__keyborgNativeFocus, n = t.__keyborgData;
  if (n) {
    t.document.removeEventListener(
      "focusin",
      n.focusInHandler,
      !0
    ), t.document.removeEventListener(
      "focusout",
      n.focusOutHandler,
      !0
    );
    for (const i of n.shadowTargets) {
      const a = i.deref();
      a && (a.removeEventListener(
        "focusin",
        n.focusInHandler,
        !0
      ), a.removeEventListener(
        "focusout",
        n.focusOutHandler,
        !0
      ));
    }
    n.shadowTargets.clear(), delete t.__keyborgData;
  }
  o && (r.focus = o);
}
var Cm = 500, sd = 0, Pm = class {
  constructor(e, t) {
    this._isNavigatingWithKeyboard_DO_NOT_USE = !1, this._onFocusIn = (o) => {
      if (this._isMouseUsedTimer || this.isNavigatingWithKeyboard)
        return;
      const n = o.detail;
      n.relatedTarget && (n.isFocusedProgrammatically || n.isFocusedProgrammatically === void 0 || (this.isNavigatingWithKeyboard = !0));
    }, this._onMouseDown = (o) => {
      if (o.buttons === 0 || o.clientX === 0 && o.clientY === 0 && o.screenX === 0 && o.screenY === 0)
        return;
      const n = this._win;
      n && (this._isMouseUsedTimer && n.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = n.setTimeout(() => {
        delete this._isMouseUsedTimer;
      }, 1e3)), this.isNavigatingWithKeyboard = !1;
    }, this._onKeyDown = (o) => {
      this.isNavigatingWithKeyboard ? this._shouldDismissKeyboardNavigation(o) && this._scheduleDismiss() : this._shouldTriggerKeyboardNavigation(o) && (this.isNavigatingWithKeyboard = !0);
    }, this.id = "c" + ++sd, this._win = e;
    const r = e.document;
    if (t) {
      const o = t.triggerKeys, n = t.dismissKeys;
      o != null && o.length && (this._triggerKeys = new Set(o)), n != null && n.length && (this._dismissKeys = new Set(n));
    }
    r.addEventListener(bt, this._onFocusIn, !0), r.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("keydown", this._onKeyDown, !0), Nm(e);
  }
  get isNavigatingWithKeyboard() {
    return this._isNavigatingWithKeyboard_DO_NOT_USE;
  }
  set isNavigatingWithKeyboard(e) {
    this._isNavigatingWithKeyboard_DO_NOT_USE !== e && (this._isNavigatingWithKeyboard_DO_NOT_USE = e, this.update());
  }
  dispose() {
    const e = this._win;
    if (e) {
      this._isMouseUsedTimer && (e.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = void 0), this._dismissTimer && (e.clearTimeout(this._dismissTimer), this._dismissTimer = void 0), Tm(e);
      const t = e.document;
      t.removeEventListener(bt, this._onFocusIn, !0), t.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("keydown", this._onKeyDown, !0), delete this._win;
    }
  }
  isDisposed() {
    return !!this._win;
  }
  /**
   * Updates all keyborg instances with the keyboard navigation state
   */
  update() {
    var e, t;
    const r = (t = (e = this._win) == null ? void 0 : e.__keyborg) == null ? void 0 : t.refs;
    if (r)
      for (const o of Object.keys(r))
        ss.update(r[o], this.isNavigatingWithKeyboard);
  }
  /**
   * @returns whether the keyboard event should trigger keyboard navigation mode
   */
  _shouldTriggerKeyboardNavigation(e) {
    var t;
    if (e.key === "Tab")
      return !0;
    const r = (t = this._win) == null ? void 0 : t.document.activeElement, o = !this._triggerKeys || this._triggerKeys.has(e.keyCode), n = r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable);
    return o && !n;
  }
  /**
   * @returns whether the keyboard event should dismiss keyboard navigation mode
   */
  _shouldDismissKeyboardNavigation(e) {
    var t;
    return (t = this._dismissKeys) == null ? void 0 : t.has(e.keyCode);
  }
  _scheduleDismiss() {
    const e = this._win;
    if (e) {
      this._dismissTimer && (e.clearTimeout(this._dismissTimer), this._dismissTimer = void 0);
      const t = e.document.activeElement;
      this._dismissTimer = e.setTimeout(() => {
        this._dismissTimer = void 0;
        const r = e.document.activeElement;
        t && r && t === r && (this.isNavigatingWithKeyboard = !1);
      }, Cm);
    }
  }
}, ss = class ld {
  constructor(t, r) {
    this._cb = [], this._id = "k" + ++sd, this._win = t;
    const o = t.__keyborg;
    o ? (this._core = o.core, o.refs[this._id] = this) : (this._core = new Pm(t, r), t.__keyborg = {
      core: this._core,
      refs: { [this._id]: this }
    });
  }
  static create(t, r) {
    return new ld(t, r);
  }
  static dispose(t) {
    t.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */
  static update(t, r) {
    t._cb.forEach((o) => o(r));
  }
  dispose() {
    var t;
    const r = (t = this._win) == null ? void 0 : t.__keyborg;
    r != null && r.refs[this._id] ? (delete r.refs[this._id], Object.keys(r.refs).length === 0 && (r.core.dispose(), delete this._win.__keyborg)) : process.env.NODE_ENV !== "production" && console.error(
      `Keyborg instance ${this._id} is being disposed incorrectly.`
    ), this._cb = [], delete this._core, delete this._win;
  }
  /**
   * @returns Whether the user is navigating with keyboard
   */
  isNavigatingWithKeyboard() {
    var t;
    return !!((t = this._core) != null && t.isNavigatingWithKeyboard);
  }
  /**
   * @param callback - Called when the keyboard navigation state changes
   */
  subscribe(t) {
    this._cb.push(t);
  }
  /**
   * @param callback - Registered with subscribe
   */
  unsubscribe(t) {
    const r = this._cb.indexOf(t);
    r >= 0 && this._cb.splice(r, 1);
  }
  /**
   * Manually set the keyboard navigtion state
   */
  setVal(t) {
    this._core && (this._core.isNavigatingWithKeyboard = t);
  }
};
function ls(e, t) {
  return ss.create(e, t);
}
function cs(e) {
  ss.dispose(e);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const At = "data-tabster", us = "data-tabster-dummy", ds = /* @__PURE__ */ ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]", "*[contenteditable]", "details > summary", "audio[controls]", "video[controls]"].join(", "), Bt = {
  EscapeGroupper: 1,
  Restorer: 2,
  Deloser: 3
}, Om = {
  Any: 0,
  Accessible: 1,
  Focusable: 2
}, zm = {
  History: 0,
  DeloserDefault: 1,
  RootDefault: 2,
  DeloserFirst: 3,
  RootFirst: 4
}, Rm = {
  /**
   * If the focus is lost, the focus will be restored automatically using all available focus history.
   * This is the default strategy.
   */
  Auto: 0,
  /**
   * If the focus is lost from this Deloser instance, the focus will not be restored automatically.
   * The application might listen to the event and restore the focus manually.
   * But if it is lost from another Deloser instance, the history of this Deloser could be used finding
   * the element to focus.
   */
  Manual: 1
}, Ot = {
  Invisible: 0,
  PartiallyVisible: 1,
  Visible: 2
}, uo = {
  Source: 0,
  Target: 1
}, er = {
  Both: 0,
  Vertical: 1,
  Horizontal: 2,
  Grid: 3,
  GridLinear: 4
}, Se = {
  ArrowUp: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
  ArrowRight: 4,
  PageUp: 5,
  PageDown: 6,
  Home: 7,
  End: 8
}, cd = {
  Unlimited: 0,
  Limited: 1,
  LimitedTrapFocus: 2
  // The focus is limited as above, plus trapped when inside.
}, _a = {
  Enter: 1,
  Escape: 2
}, ud = {
  Auto: 0,
  Inside: 1,
  Outside: 2
  // Tabster will always place dummy inputs outside of the container.
};
var ft = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TabsterAttributeName: At,
  TabsterDummyInputAttributeName: us,
  FocusableSelector: ds,
  AsyncFocusSources: Bt,
  ObservedElementAccesibilities: Om,
  RestoreFocusOrders: zm,
  DeloserStrategies: Rm,
  Visibilities: Ot,
  RestorerTypes: uo,
  MoverDirections: er,
  MoverKeys: Se,
  GroupperTabbabilities: cd,
  GroupperMoveFocusActions: _a,
  SysDummyInputsPositions: ud
});
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Le(e, t) {
  var r;
  return (r = e.storageEntry(t)) === null || r === void 0 ? void 0 : r.tabster;
}
function dd(e, t, r) {
  var o, n;
  const i = r || e._noop ? void 0 : t.getAttribute(At);
  let a = e.storageEntry(t), s;
  if (i)
    if (i !== ((o = a == null ? void 0 : a.attr) === null || o === void 0 ? void 0 : o.string))
      try {
        const d = JSON.parse(i);
        if (typeof d != "object")
          throw new Error(`Value is not a JSON object, got '${i}'.`);
        s = {
          string: i,
          object: d
        };
      } catch (d) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${d}`, t);
      }
    else
      return;
  else if (!a)
    return;
  a || (a = e.storageEntry(t, !0)), a.tabster || (a.tabster = {});
  const l = a.tabster || {}, c = ((n = a.attr) === null || n === void 0 ? void 0 : n.object) || {}, u = (s == null ? void 0 : s.object) || {};
  for (const d of Object.keys(c))
    if (!u[d]) {
      if (d === "root") {
        const f = l[d];
        f && e.root.onRoot(f, !0);
      }
      switch (d) {
        case "deloser":
        case "root":
        case "groupper":
        case "modalizer":
        case "restorer":
        case "mover":
          const f = l[d];
          f && (f.dispose(), delete l[d]);
          break;
        case "observed":
          delete l[d], e.observedElement && e.observedElement.onObservedElementUpdate(t);
          break;
        case "focusable":
        case "outline":
        case "uncontrolled":
        case "sys":
          delete l[d];
          break;
      }
    }
  for (const d of Object.keys(u)) {
    const f = u.sys;
    switch (d) {
      case "deloser":
        l.deloser ? l.deloser.setProps(u.deloser) : e.deloser ? l.deloser = e.deloser.createDeloser(t, u.deloser) : process.env.NODE_ENV === "development" && console.error("Deloser API used before initialization, please call `getDeloser()`");
        break;
      case "root":
        l.root ? l.root.setProps(u.root) : l.root = e.root.createRoot(t, u.root, f), e.root.onRoot(l.root);
        break;
      case "modalizer":
        l.modalizer ? l.modalizer.setProps(u.modalizer) : e.modalizer ? l.modalizer = e.modalizer.createModalizer(t, u.modalizer, f) : process.env.NODE_ENV === "development" && console.error("Modalizer API used before initialization, please call `getModalizer()`");
        break;
      case "restorer":
        l.restorer ? l.restorer.setProps(u.restorer) : e.restorer ? u.restorer && (l.restorer = e.restorer.createRestorer(t, u.restorer)) : process.env.NODE_ENV === "development" && console.error("Restorer API used before initialization, please call `getRestorer()`");
        break;
      case "focusable":
        l.focusable = u.focusable;
        break;
      case "groupper":
        l.groupper ? l.groupper.setProps(u.groupper) : e.groupper ? l.groupper = e.groupper.createGroupper(t, u.groupper, f) : process.env.NODE_ENV === "development" && console.error("Groupper API used before initialization, please call `getGroupper()`");
        break;
      case "mover":
        l.mover ? l.mover.setProps(u.mover) : e.mover ? l.mover = e.mover.createMover(t, u.mover, f) : process.env.NODE_ENV === "development" && console.error("Mover API used before initialization, please call `getMover()`");
        break;
      case "observed":
        e.observedElement ? (l.observed = u.observed, e.observedElement.onObservedElementUpdate(t)) : process.env.NODE_ENV === "development" && console.error("ObservedElement API used before initialization, please call `getObservedElement()`");
        break;
      case "uncontrolled":
        l.uncontrolled = u.uncontrolled;
        break;
      case "outline":
        e.outline ? l.outline = u.outline : process.env.NODE_ENV === "development" && console.error("Outline API used before initialization, please call `getOutline()`");
        break;
      case "sys":
        l.sys = u.sys;
        break;
      default:
        console.error(`Unknown key '${d}' in data-tabster attribute value.`);
    }
  }
  s ? a.attr = s : (Object.keys(l).length === 0 && (delete a.tabster, delete a.attr), e.storageEntry(t, !1));
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Dm = "tabster:focusin", Am = "tabster:focusout", jm = "tabster:movefocus", Fm = "tabster:modalizer:active", Im = "tabster:modalizer:inactive", qm = "tabster:mover:state", xl = "tabster:mover:movefocus", Sl = "tabster:mover:memorized-element", El = "tabster:groupper:movefocus", wa = "tabster:restorer:restore-focus", Mm = "tabster:root:focus", Lm = "tabster:root:blur", Vm = typeof CustomEvent < "u" ? CustomEvent : function() {
};
class Mt extends Vm {
  constructor(t, r) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: r
    }), this.details = r;
  }
}
class Hm extends Mt {
  constructor(t) {
    super(Dm, t);
  }
}
class $m extends Mt {
  constructor(t) {
    super(Am, t);
  }
}
class Kt extends Mt {
  constructor(t) {
    super(jm, t);
  }
}
class Bl extends Mt {
  constructor(t) {
    super(qm, t);
  }
}
class Wm extends Mt {
  constructor(t) {
    super(Fm, t);
  }
}
class Um extends Mt {
  constructor(t) {
    super(Im, t);
  }
}
class Nl extends Mt {
  constructor() {
    super(wa);
  }
}
class Gm extends Mt {
  constructor(t) {
    super(Mm, t);
  }
}
class Km extends Mt {
  constructor(t) {
    super(Lm, t);
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Xm = (e) => new MutationObserver(e), Ym = (e, t, r, o) => e.createTreeWalker(t, r, o), Jm = (e) => e ? e.parentNode : null, Zm = (e) => e ? e.parentElement : null, Qm = (e, t) => !!(t && (e != null && e.contains(t))), eb = (e) => e.activeElement, tb = (e, t) => e.querySelector(t), rb = (e, t) => Array.prototype.slice.call(e.querySelectorAll(t), 0), ob = (e, t) => e.getElementById(t), nb = (e) => (e == null ? void 0 : e.firstChild) || null, ib = (e) => (e == null ? void 0 : e.lastChild) || null, ab = (e) => (e == null ? void 0 : e.nextSibling) || null, sb = (e) => (e == null ? void 0 : e.previousSibling) || null, lb = (e) => (e == null ? void 0 : e.firstElementChild) || null, cb = (e) => (e == null ? void 0 : e.lastElementChild) || null, ub = (e) => (e == null ? void 0 : e.nextElementSibling) || null, db = (e) => (e == null ? void 0 : e.previousElementSibling) || null, fb = (e, t) => e.appendChild(t), hb = (e, t, r) => e.insertBefore(t, r), vb = (e) => {
  var t;
  return ((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.getSelection()) || null;
}, N = {
  createMutationObserver: Xm,
  createTreeWalker: Ym,
  getParentNode: Jm,
  getParentElement: Zm,
  nodeContains: Qm,
  getActiveElement: eb,
  querySelector: tb,
  querySelectorAll: rb,
  getElementById: ob,
  getFirstChild: nb,
  getLastChild: ib,
  getNextSibling: ab,
  getPreviousSibling: sb,
  getFirstElementChild: lb,
  getLastElementChild: cb,
  getNextElementSibling: ub,
  getPreviousElementSibling: db,
  appendChild: fb,
  insertBefore: hb,
  getSelection: vb
};
function pb(e) {
  for (const t of Object.keys(e))
    N[t] = e[t];
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let ka;
const Tl = typeof DOMRect < "u" ? DOMRect : class {
  constructor(e, t, r, o) {
    this.left = e || 0, this.top = t || 0, this.right = (e || 0) + (r || 0), this.bottom = (t || 0) + (o || 0);
  }
};
let gb = 0;
try {
  document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT), ka = !1;
} catch {
  ka = !0;
}
const zi = 100;
function Lt(e) {
  const t = e();
  let r = t.__tabsterInstanceContext;
  return r || (r = {
    elementByUId: {},
    basics: {
      Promise: t.Promise || void 0,
      WeakRef: t.WeakRef || void 0
    },
    containerBoundingRectCache: {},
    lastContainerBoundingRectCacheId: 0,
    fakeWeakRefs: [],
    fakeWeakRefsStarted: !1
  }, t.__tabsterInstanceContext = r), r;
}
function mb(e) {
  const t = e.__tabsterInstanceContext;
  t && (t.elementByUId = {}, delete t.WeakRef, t.containerBoundingRectCache = {}, t.containerBoundingRectCacheTimer && e.clearTimeout(t.containerBoundingRectCacheTimer), t.fakeWeakRefsTimer && e.clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefs = [], delete e.__tabsterInstanceContext);
}
function bb(e) {
  const t = e.__tabsterInstanceContext;
  return new ((t == null ? void 0 : t.basics.WeakMap) || WeakMap)();
}
function yb(e) {
  return !!e.querySelector(ds);
}
class fd {
  constructor(t) {
    this._target = t;
  }
  deref() {
    return this._target;
  }
  static cleanup(t, r) {
    return t._target ? r || !hs(t._target.ownerDocument, t._target) ? (delete t._target, !0) : !1 : !0;
  }
}
class Ge {
  constructor(t, r, o) {
    const n = Lt(t);
    let i;
    n.WeakRef ? i = new n.WeakRef(r) : (i = new fd(r), n.fakeWeakRefs.push(i)), this._ref = i, this._data = o;
  }
  get() {
    const t = this._ref;
    let r;
    return t && (r = t.deref(), r || delete this._ref), r;
  }
  getData() {
    return this._data;
  }
}
function hd(e, t) {
  const r = Lt(e);
  r.fakeWeakRefs = r.fakeWeakRefs.filter((o) => !fd.cleanup(o, t));
}
function vd(e) {
  const t = Lt(e);
  t.fakeWeakRefsStarted || (t.fakeWeakRefsStarted = !0, t.WeakRef = Eb(t)), t.fakeWeakRefsTimer || (t.fakeWeakRefsTimer = e().setTimeout(() => {
    t.fakeWeakRefsTimer = void 0, hd(e), vd(e);
  }, 2 * 60 * 1e3));
}
function _b(e) {
  const t = Lt(e);
  t.fakeWeakRefsStarted = !1, t.fakeWeakRefsTimer && (e().clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefsTimer = void 0, t.fakeWeakRefs = []);
}
function fs(e, t, r) {
  if (t.nodeType !== Node.ELEMENT_NODE)
    return;
  const o = ka ? r : {
    acceptNode: r
  };
  return N.createTreeWalker(
    e,
    t,
    NodeFilter.SHOW_ELEMENT,
    o,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: We still don't want to completely break IE11, so, entityReferenceExpansion argument is not optional.
    !1
    /* Last argument is not optional for IE11! */
  );
}
function pd(e, t) {
  let r = t.__tabsterCacheId;
  const o = Lt(e), n = r ? o.containerBoundingRectCache[r] : void 0;
  if (n)
    return n.rect;
  const i = t.ownerDocument && t.ownerDocument.documentElement;
  if (!i)
    return new Tl();
  let a = 0, s = 0, l = i.clientWidth, c = i.clientHeight;
  if (t !== i) {
    const d = t.getBoundingClientRect();
    a = Math.max(a, d.left), s = Math.max(s, d.top), l = Math.min(l, d.right), c = Math.min(c, d.bottom);
  }
  const u = new Tl(a < l ? a : -1, s < c ? s : -1, a < l ? l - a : 0, s < c ? c - s : 0);
  return r || (r = "r-" + ++o.lastContainerBoundingRectCacheId, t.__tabsterCacheId = r), o.containerBoundingRectCache[r] = {
    rect: u,
    element: t
  }, o.containerBoundingRectCacheTimer || (o.containerBoundingRectCacheTimer = window.setTimeout(() => {
    o.containerBoundingRectCacheTimer = void 0;
    for (const d of Object.keys(o.containerBoundingRectCache))
      delete o.containerBoundingRectCache[d].element.__tabsterCacheId;
    o.containerBoundingRectCache = {};
  }, 50)), u;
}
function Cl(e, t, r) {
  const o = gd(t);
  if (!o)
    return !1;
  const n = pd(e, o), i = t.getBoundingClientRect(), a = i.height * (1 - r), s = Math.max(0, n.top - i.top), l = Math.max(0, i.bottom - n.bottom), c = s + l;
  return c === 0 || c <= a;
}
function wb(e, t, r) {
  const o = gd(t);
  if (o) {
    const n = pd(e, o), i = t.getBoundingClientRect();
    r ? o.scrollTop += i.top - n.top : o.scrollTop += i.bottom - n.bottom;
  }
}
function gd(e) {
  const t = e.ownerDocument;
  if (t) {
    for (let r = N.getParentElement(e); r; r = N.getParentElement(r))
      if (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight)
        return r;
    return t.documentElement;
  }
  return null;
}
function kb(e) {
  e.__shouldIgnoreFocus = !0;
}
function md(e) {
  return !!e.__shouldIgnoreFocus;
}
function xb(e) {
  const t = new Uint32Array(4);
  if (e.crypto && e.crypto.getRandomValues)
    e.crypto.getRandomValues(t);
  else if (e.msCrypto && e.msCrypto.getRandomValues)
    e.msCrypto.getRandomValues(t);
  else
    for (let o = 0; o < t.length; o++)
      t[o] = 4294967295 * Math.random();
  const r = [];
  for (let o = 0; o < t.length; o++)
    r.push(t[o].toString(36));
  return r.push("|"), r.push((++gb).toString(36)), r.push("|"), r.push(Date.now().toString(36)), r.join("");
}
function cn(e, t) {
  const r = Lt(e);
  let o = t.__tabsterElementUID;
  return o || (o = t.__tabsterElementUID = xb(e())), !r.elementByUId[o] && hs(t.ownerDocument, t) && (r.elementByUId[o] = new Ge(e, t)), o;
}
function Pl(e, t) {
  const r = Lt(e);
  for (const o of Object.keys(r.elementByUId)) {
    const n = r.elementByUId[o], i = n && n.get();
    i && t && !N.nodeContains(t, i) || delete r.elementByUId[o];
  }
}
function hs(e, t) {
  return N.nodeContains(e == null ? void 0 : e.body, t);
}
function bd(e, t) {
  const r = e.matches || e.matchesSelector || e.msMatchesSelector || e.webkitMatchesSelector;
  return r && r.call(e, t);
}
function Sb(e) {
  const t = Lt(e);
  if (t.basics.Promise)
    return t.basics.Promise;
  throw new Error("No Promise defined.");
}
function Eb(e) {
  return e.basics.WeakRef;
}
let Bb = 0;
class So {
  constructor(t, r, o) {
    const n = t.getWindow;
    this._tabster = t, this._element = new Ge(n, r), this._props = {
      ...o
    }, this.id = "i" + ++Bb;
  }
  getElement() {
    return this._element.get();
  }
  getProps() {
    return this._props;
  }
  setProps(t) {
    this._props = {
      ...t
    };
  }
}
class Bn {
  constructor(t, r, o, n, i) {
    var a;
    this._focusIn = (u) => {
      if (this._fixedTarget) {
        const f = this._fixedTarget.get();
        f && Ct(f);
        return;
      }
      const d = this.input;
      if (this.onFocusIn && d) {
        const f = u.relatedTarget;
        this.onFocusIn(this, this._isBackward(!0, d, f), f);
      }
    }, this._focusOut = (u) => {
      if (this._fixedTarget)
        return;
      this.useDefaultAction = !1;
      const d = this.input;
      if (this.onFocusOut && d) {
        const f = u.relatedTarget;
        this.onFocusOut(this, this._isBackward(!1, d, f), f);
      }
    };
    const s = t(), l = s.document.createElement("i");
    l.tabIndex = 0, l.setAttribute("role", "none"), l.setAttribute(us, ""), l.setAttribute("aria-hidden", "true");
    const c = l.style;
    c.position = "fixed", c.width = c.height = "1px", c.opacity = "0.001", c.zIndex = "-1", c.setProperty("content-visibility", "hidden"), kb(l), this.input = l, this.isFirst = o.isFirst, this.isOutside = r, this._isPhantom = (a = o.isPhantom) !== null && a !== void 0 ? a : !1, this._fixedTarget = i, l.addEventListener("focusin", this._focusIn), l.addEventListener("focusout", this._focusOut), l.__tabsterDummyContainer = n, this._isPhantom && (this._disposeTimer = s.setTimeout(() => {
      delete this._disposeTimer, this.dispose();
    }, 0), this._clearDisposeTimeout = () => {
      this._disposeTimer && (s.clearTimeout(this._disposeTimer), delete this._disposeTimer), delete this._clearDisposeTimeout;
    });
  }
  dispose() {
    var t;
    this._clearDisposeTimeout && this._clearDisposeTimeout();
    const r = this.input;
    r && (delete this._fixedTarget, delete this.onFocusIn, delete this.onFocusOut, delete this.input, r.removeEventListener("focusin", this._focusIn), r.removeEventListener("focusout", this._focusOut), delete r.__tabsterDummyContainer, (t = N.getParentNode(r)) === null || t === void 0 || t.removeChild(r));
  }
  setTopLeft(t, r) {
    var o;
    const n = (o = this.input) === null || o === void 0 ? void 0 : o.style;
    n && (n.top = `${t}px`, n.left = `${r}px`);
  }
  _isBackward(t, r, o) {
    return t && !o ? !this.isFirst : !!(o && r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING);
  }
}
const Jn = {
  Root: 1,
  Modalizer: 2,
  Mover: 3,
  Groupper: 4
};
class Or {
  constructor(t, r, o, n, i, a) {
    this._element = r, this._instance = new Tb(t, r, this, o, n, i, a);
  }
  _setHandlers(t, r) {
    this._onFocusIn = t, this._onFocusOut = r;
  }
  moveOut(t) {
    var r;
    (r = this._instance) === null || r === void 0 || r.moveOut(t);
  }
  moveOutWithDefaultAction(t, r) {
    var o;
    (o = this._instance) === null || o === void 0 || o.moveOutWithDefaultAction(t, r);
  }
  getHandler(t) {
    return t ? this._onFocusIn : this._onFocusOut;
  }
  setTabbable(t) {
    var r;
    (r = this._instance) === null || r === void 0 || r.setTabbable(this, t);
  }
  dispose() {
    this._instance && (this._instance.dispose(this), delete this._instance), delete this._onFocusIn, delete this._onFocusOut;
  }
  static moveWithPhantomDummy(t, r, o, n, i) {
    var a;
    const l = new Bn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }).input;
    if (l) {
      let c, u;
      if (r.tagName === "BODY")
        c = r, u = o && n || !o && !n ? N.getFirstElementChild(r) : null;
      else {
        o && (!n || n && !t.focusable.isFocusable(r, !1, !0, !0)) ? (c = r, u = n ? r.firstElementChild : null) : (c = N.getParentElement(r), u = o && n || !o && !n ? r : N.getNextElementSibling(r));
        let d, f;
        do
          d = o && n || !o && !n ? N.getPreviousElementSibling(u) : u, f = (a = d == null ? void 0 : d.__tabsterDummyContainer) === null || a === void 0 ? void 0 : a.get(), f === r ? u = o && n || !o && !n ? d : N.getNextElementSibling(d) : f = void 0;
        while (f);
      }
      c != null && c.dispatchEvent(new Kt({
        by: "root",
        owner: c,
        next: null,
        relatedEvent: i
      })) && (N.insertBefore(c, l, u), Ct(l));
    }
  }
  static addPhantomDummyWithTarget(t, r, o, n) {
    const a = new Bn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }, void 0, new Ge(t.getWindow, n)).input;
    if (a) {
      let s, l;
      yb(r) && !o ? (s = r, l = N.getFirstElementChild(r)) : (s = N.getParentElement(r), l = o ? r : N.getNextElementSibling(r)), s && N.insertBefore(s, a, l);
    }
  }
}
function Wt(e, t) {
  var r;
  const o = {
    1: "Root",
    2: "Modalizer",
    3: "Mover",
    4: "Groupper"
  };
  (r = e.input) === null || r === void 0 || r.setAttribute(us, [`isFirst=${e.isFirst}`, `isOutside=${e.isOutside}`, ...t.map((n) => `(${o[n.priority]}, tabbable=${n.tabbable})`)].join(", "));
}
class Nb {
  constructor(t) {
    this._updateQueue = /* @__PURE__ */ new Set(), this._lastUpdateQueueTime = 0, this._changedParents = /* @__PURE__ */ new WeakSet(), this._dummyElements = [], this._dummyCallbacks = /* @__PURE__ */ new WeakMap(), this._domChanged = (r) => {
      var o;
      this._changedParents.has(r) || (this._changedParents.add(r), !this._updateDummyInputsTimer && (this._updateDummyInputsTimer = (o = this._win) === null || o === void 0 ? void 0 : o.call(this).setTimeout(() => {
        delete this._updateDummyInputsTimer;
        for (const n of this._dummyElements) {
          const i = n.get();
          if (i) {
            const a = this._dummyCallbacks.get(i);
            if (a) {
              const s = N.getParentNode(i);
              (!s || this._changedParents.has(s)) && a();
            }
          }
        }
        this._changedParents = /* @__PURE__ */ new WeakSet();
      }, zi)));
    }, this._win = t;
  }
  add(t, r) {
    !this._dummyCallbacks.has(t) && this._win && (this._dummyElements.push(new Ge(this._win, t)), this._dummyCallbacks.set(t, r), this.domChanged = this._domChanged);
  }
  remove(t) {
    this._dummyElements = this._dummyElements.filter((r) => {
      const o = r.get();
      return o && o !== t;
    }), this._dummyCallbacks.delete(t), this._dummyElements.length === 0 && delete this.domChanged;
  }
  dispose() {
    var t;
    const r = (t = this._win) === null || t === void 0 ? void 0 : t.call(this);
    this._updateTimer && (r == null || r.clearTimeout(this._updateTimer), delete this._updateTimer), this._updateDummyInputsTimer && (r == null || r.clearTimeout(this._updateDummyInputsTimer), delete this._updateDummyInputsTimer), this._changedParents = /* @__PURE__ */ new WeakSet(), this._dummyCallbacks = /* @__PURE__ */ new WeakMap(), this._dummyElements = [], this._updateQueue.clear(), delete this.domChanged, delete this._win;
  }
  updatePositions(t) {
    this._win && (this._updateQueue.add(t), this._lastUpdateQueueTime = Date.now(), this._scheduledUpdatePositions());
  }
  _scheduledUpdatePositions() {
    var t;
    this._updateTimer || (this._updateTimer = (t = this._win) === null || t === void 0 ? void 0 : t.call(this).setTimeout(() => {
      if (delete this._updateTimer, this._lastUpdateQueueTime + zi <= Date.now()) {
        const r = /* @__PURE__ */ new Map(), o = [];
        for (const n of this._updateQueue)
          o.push(n(r));
        this._updateQueue.clear();
        for (const n of o)
          n();
        r.clear();
      } else
        this._scheduledUpdatePositions();
    }, zi));
  }
}
class Tb {
  constructor(t, r, o, n, i, a, s) {
    this._wrappers = [], this._isOutside = !1, this._transformElements = /* @__PURE__ */ new Set(), this._onFocusIn = (v, h, p) => {
      this._onFocus(!0, v, h, p);
    }, this._onFocusOut = (v, h, p) => {
      this._onFocus(!1, v, h, p);
    }, this.moveOut = (v) => {
      var h;
      const p = this._firstDummy, y = this._lastDummy;
      if (p && y) {
        this._ensurePosition();
        const g = p.input, _ = y.input, m = (h = this._element) === null || h === void 0 ? void 0 : h.get();
        if (g && _ && m) {
          let k;
          v ? (g.tabIndex = 0, k = g) : (_.tabIndex = 0, k = _), k && Ct(k);
        }
      }
    }, this.moveOutWithDefaultAction = (v, h) => {
      var p;
      const y = this._firstDummy, g = this._lastDummy;
      if (y && g) {
        this._ensurePosition();
        const _ = y.input, m = g.input, k = (p = this._element) === null || p === void 0 ? void 0 : p.get();
        if (_ && m && k) {
          let w;
          v ? !y.isOutside && this._tabster.focusable.isFocusable(k, !0, !0, !0) ? w = k : (y.useDefaultAction = !0, _.tabIndex = 0, w = _) : (g.useDefaultAction = !0, m.tabIndex = 0, w = m), w && k.dispatchEvent(new Kt({
            by: "root",
            owner: k,
            next: null,
            relatedEvent: h
          })) && Ct(w);
        }
      }
    }, this.setTabbable = (v, h) => {
      var p, y;
      for (const _ of this._wrappers)
        if (_.manager === v) {
          _.tabbable = h;
          break;
        }
      const g = this._getCurrent();
      if (g) {
        const _ = g.tabbable ? 0 : -1;
        let m = (p = this._firstDummy) === null || p === void 0 ? void 0 : p.input;
        m && (m.tabIndex = _), m = (y = this._lastDummy) === null || y === void 0 ? void 0 : y.input, m && (m.tabIndex = _);
      }
      process.env.NODE_ENV === "development" && (this._firstDummy && Wt(this._firstDummy, this._wrappers), this._lastDummy && Wt(this._lastDummy, this._wrappers));
    }, this._addDummyInputs = () => {
      this._addTimer || (this._addTimer = this._getWindow().setTimeout(() => {
        delete this._addTimer, this._ensurePosition(), process.env.NODE_ENV === "development" && (this._firstDummy && Wt(this._firstDummy, this._wrappers), this._lastDummy && Wt(this._lastDummy, this._wrappers)), this._addTransformOffsets();
      }, 0));
    }, this._addTransformOffsets = () => {
      this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets);
    }, this._computeTransformOffsets = (v) => {
      var h, p;
      const y = ((h = this._firstDummy) === null || h === void 0 ? void 0 : h.input) || ((p = this._lastDummy) === null || p === void 0 ? void 0 : p.input), g = this._transformElements, _ = /* @__PURE__ */ new Set();
      let m = 0, k = 0;
      const w = this._getWindow();
      for (let x = y; x && x.nodeType === Node.ELEMENT_NODE; x = N.getParentElement(x)) {
        let E = v.get(x);
        if (E === void 0) {
          const O = w.getComputedStyle(x).transform;
          O && O !== "none" && (E = {
            scrollTop: x.scrollTop,
            scrollLeft: x.scrollLeft
          }), v.set(x, E || null);
        }
        E && (_.add(x), g.has(x) || x.addEventListener("scroll", this._addTransformOffsets), m += E.scrollTop, k += E.scrollLeft);
      }
      for (const x of g)
        _.has(x) || x.removeEventListener("scroll", this._addTransformOffsets);
      return this._transformElements = _, () => {
        var x, E;
        (x = this._firstDummy) === null || x === void 0 || x.setTopLeft(m, k), (E = this._lastDummy) === null || E === void 0 || E.setTopLeft(m, k);
      };
    };
    const l = r.get();
    if (!l)
      throw new Error("No element");
    this._tabster = t, this._getWindow = t.getWindow, this._callForDefaultAction = s;
    const c = l.__tabsterDummy;
    if ((c || this)._wrappers.push({
      manager: o,
      priority: n,
      tabbable: !0
    }), c)
      return process.env.NODE_ENV === "development" && (this._firstDummy && Wt(this._firstDummy, c._wrappers), this._lastDummy && Wt(this._lastDummy, c._wrappers)), c;
    l.__tabsterDummy = this;
    const u = i == null ? void 0 : i.dummyInputsPosition, d = l.tagName;
    this._isOutside = u ? u === ud.Outside : (a || d === "UL" || d === "OL" || d === "TABLE") && !(d === "LI" || d === "TD" || d === "TH"), this._firstDummy = new Bn(this._getWindow, this._isOutside, {
      isFirst: !0
    }, r), this._lastDummy = new Bn(this._getWindow, this._isOutside, {
      isFirst: !1
    }, r);
    const f = this._firstDummy.input;
    f && t._dummyObserver.add(f, this._addDummyInputs), this._firstDummy.onFocusIn = this._onFocusIn, this._firstDummy.onFocusOut = this._onFocusOut, this._lastDummy.onFocusIn = this._onFocusIn, this._lastDummy.onFocusOut = this._onFocusOut, this._element = r, this._addDummyInputs();
  }
  dispose(t, r) {
    var o, n, i, a;
    const s = this._wrappers = this._wrappers.filter((l) => l.manager !== t && !r);
    if (process.env.NODE_ENV === "development" && (this._firstDummy && Wt(this._firstDummy, s), this._lastDummy && Wt(this._lastDummy, s)), s.length === 0) {
      delete ((o = this._element) === null || o === void 0 ? void 0 : o.get()).__tabsterDummy;
      for (const u of this._transformElements)
        u.removeEventListener("scroll", this._addTransformOffsets);
      this._transformElements.clear();
      const l = this._getWindow();
      this._addTimer && (l.clearTimeout(this._addTimer), delete this._addTimer);
      const c = (n = this._firstDummy) === null || n === void 0 ? void 0 : n.input;
      c && this._tabster._dummyObserver.remove(c), (i = this._firstDummy) === null || i === void 0 || i.dispose(), (a = this._lastDummy) === null || a === void 0 || a.dispose();
    }
  }
  _onFocus(t, r, o, n) {
    var i;
    const a = this._getCurrent();
    a && (!r.useDefaultAction || this._callForDefaultAction) && ((i = a.manager.getHandler(t)) === null || i === void 0 || i(r, o, n));
  }
  _getCurrent() {
    return this._wrappers.sort((t, r) => t.tabbable !== r.tabbable ? t.tabbable ? -1 : 1 : t.priority - r.priority), this._wrappers[0];
  }
  _ensurePosition() {
    var t, r, o;
    const n = (t = this._element) === null || t === void 0 ? void 0 : t.get(), i = (r = this._firstDummy) === null || r === void 0 ? void 0 : r.input, a = (o = this._lastDummy) === null || o === void 0 ? void 0 : o.input;
    if (!(!n || !i || !a))
      if (this._isOutside) {
        const s = N.getParentNode(n);
        if (s) {
          const l = N.getNextSibling(n);
          l !== a && N.insertBefore(s, a, l), N.getPreviousElementSibling(n) !== i && N.insertBefore(s, i, n);
        }
      } else {
        N.getLastElementChild(n) !== a && N.appendChild(n, a);
        const s = N.getFirstElementChild(n);
        s && s !== i && s.parentNode && N.insertBefore(s.parentNode, i, s);
      }
  }
}
function yd(e) {
  let t = null;
  for (let r = N.getLastElementChild(e); r; r = N.getLastElementChild(r))
    t = r;
  return t || void 0;
}
function Cb(e, t) {
  let r = e, o = null;
  for (; r && !o; )
    o = t ? N.getPreviousElementSibling(r) : N.getNextElementSibling(r), r = N.getParentElement(r);
  return o || void 0;
}
function Ri(e, t, r, o) {
  const n = e.storageEntry(t, !0);
  let i = !1;
  if (!n.aug) {
    if (o === void 0)
      return i;
    n.aug = {};
  }
  if (o === void 0) {
    if (r in n.aug) {
      const a = n.aug[r];
      delete n.aug[r], a === null ? t.removeAttribute(r) : t.setAttribute(r, a), i = !0;
    }
  } else {
    let a;
    r in n.aug || (a = t.getAttribute(r)), a !== void 0 && a !== o && (n.aug[r] = a, o === null ? t.removeAttribute(r) : t.setAttribute(r, o), i = !0);
  }
  return o === void 0 && Object.keys(n.aug).length === 0 && (delete n.aug, e.storageEntry(t, !1)), i;
}
function Pb(e) {
  var t, r;
  const o = e.ownerDocument, n = (t = o.defaultView) === null || t === void 0 ? void 0 : t.getComputedStyle(e);
  return e.offsetParent === null && o.body !== e && (n == null ? void 0 : n.position) !== "fixed" || (n == null ? void 0 : n.visibility) === "hidden" || (n == null ? void 0 : n.position) === "fixed" && (n.display === "none" || ((r = e.parentElement) === null || r === void 0 ? void 0 : r.offsetParent) === null && o.body !== e.parentElement);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function _d(e, t) {
  const r = JSON.stringify(e);
  return t === !0 ? r : {
    [At]: r
  };
}
function Ob(e, t) {
  for (const r of Object.keys(t)) {
    const o = t[r];
    o ? e[r] = o : delete e[r];
  }
}
function zb(e, t, r) {
  let o;
  if (r) {
    const n = e.getAttribute(At);
    if (n)
      try {
        o = JSON.parse(n);
      } catch (i) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${i}`, e);
      }
  }
  o || (o = {}), Ob(o, t), Object.keys(o).length > 0 ? e.setAttribute(At, _d(o, !0)) : e.removeAttribute(At);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Ol(e, t, r) {
  if (process.env.NODE_ENV === "development") {
    const o = e.get();
    o && (t ? o.style.removeProperty("--tabster-root") : o.style.setProperty("--tabster-root", r + ","));
  }
}
class zl extends Or {
  constructor(t, r, o, n) {
    super(t, r, Jn.Root, n, void 0, !0), this._onDummyInputFocus = (i) => {
      var a;
      if (i.useDefaultAction)
        this._setFocused(!1);
      else {
        this._tabster.keyboardNavigation.setNavigatingWithKeyboard(!0);
        const s = this._element.get();
        if (s) {
          this._setFocused(!0);
          const l = this._tabster.focusedElement.getFirstOrLastTabbable(i.isFirst, {
            container: s,
            ignoreAccessibility: !0
          });
          if (l) {
            Ct(l);
            return;
          }
        }
        (a = i.input) === null || a === void 0 || a.blur();
      }
    }, this._setHandlers(this._onDummyInputFocus), this._tabster = t, this._setFocused = o;
  }
}
class Rb extends So {
  constructor(t, r, o, n, i) {
    super(t, r, n), this._isFocused = !1, this._setFocused = (c) => {
      var u;
      if (this._setFocusedTimer && (this._tabster.getWindow().clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), this._isFocused === c)
        return;
      const d = this._element.get();
      d && (c ? (this._isFocused = !0, (u = this._dummyManager) === null || u === void 0 || u.setTabbable(!1), d.dispatchEvent(new Gm({
        element: d
      }))) : this._setFocusedTimer = this._tabster.getWindow().setTimeout(() => {
        var f;
        delete this._setFocusedTimer, this._isFocused = !1, (f = this._dummyManager) === null || f === void 0 || f.setTabbable(!0), d.dispatchEvent(new Km({
          element: d
        }));
      }, 0));
    }, this._onFocusIn = (c) => {
      const u = this._tabster.getParent, d = this._element.get();
      let f = c.composedPath()[0];
      do {
        if (f === d) {
          this._setFocused(!0);
          return;
        }
        f = f && u(f);
      } while (f);
    }, this._onFocusOut = () => {
      this._setFocused(!1);
    }, this._onDispose = o;
    const a = t.getWindow;
    this.uid = cn(a, r), this._sys = i, (t.controlTab || t.rootDummyInputs) && this.addDummyInputs();
    const l = a().document;
    l.addEventListener(bt, this._onFocusIn), l.addEventListener(co, this._onFocusOut), this._add();
  }
  addDummyInputs() {
    this._dummyManager || (this._dummyManager = new zl(this._tabster, this._element, this._setFocused, this._sys));
  }
  dispose() {
    var t;
    this._onDispose(this);
    const r = this._tabster.getWindow(), o = r.document;
    o.removeEventListener(bt, this._onFocusIn), o.removeEventListener(co, this._onFocusOut), this._setFocusedTimer && (r.clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), (t = this._dummyManager) === null || t === void 0 || t.dispose(), this._remove();
  }
  moveOutWithDefaultAction(t, r) {
    const o = this._dummyManager;
    if (o)
      o.moveOutWithDefaultAction(t, r);
    else {
      const n = this.getElement();
      n && zl.moveWithPhantomDummy(this._tabster, n, !0, t, r);
    }
  }
  _add() {
    process.env.NODE_ENV === "development" && Ol(this._element, !1, this.uid);
  }
  _remove() {
    process.env.NODE_ENV === "development" && Ol(this._element, !0);
  }
}
class ve {
  constructor(t, r) {
    this._autoRootWaiting = !1, this._roots = {}, this._forceDummy = !1, this.rootById = {}, this._autoRootCreate = () => {
      var o;
      const n = this._win().document, i = n.body;
      if (i) {
        this._autoRootUnwait(n);
        const a = this._autoRoot;
        if (a)
          return zb(i, {
            root: a
          }, !0), dd(this._tabster, i), (o = Le(this._tabster, i)) === null || o === void 0 ? void 0 : o.root;
      } else
        this._autoRootWaiting || (this._autoRootWaiting = !0, n.addEventListener("readystatechange", this._autoRootCreate));
    }, this._onRootDispose = (o) => {
      delete this._roots[o.id];
    }, this._tabster = t, this._win = t.getWindow, this._autoRoot = r, t.queueInit(() => {
      this._autoRoot && this._autoRootCreate();
    });
  }
  _autoRootUnwait(t) {
    t.removeEventListener("readystatechange", this._autoRootCreate), this._autoRootWaiting = !1;
  }
  dispose() {
    const t = this._win();
    this._autoRootUnwait(t.document), delete this._autoRoot, Object.keys(this._roots).forEach((r) => {
      this._roots[r] && (this._roots[r].dispose(), delete this._roots[r]);
    }), this.rootById = {};
  }
  createRoot(t, r, o) {
    process.env.NODE_ENV;
    const n = new Rb(this._tabster, t, this._onRootDispose, r, o);
    return this._roots[n.id] = n, this._forceDummy && n.addDummyInputs(), n;
  }
  addDummyInputs() {
    this._forceDummy = !0;
    const t = this._roots;
    for (const r of Object.keys(t))
      t[r].addDummyInputs();
  }
  static getRootByUId(t, r) {
    const o = t().__tabsterInstance;
    return o && o.root.rootById[r];
  }
  /**
   * Fetches the tabster context for an element walking up its ancestors
   *
   * @param tabster Tabster instance
   * @param element The element the tabster context should represent
   * @param options Additional options
   * @returns undefined if the element is not a child of a tabster root, otherwise all applicable tabster behaviours and configurations
   */
  static getTabsterContext(t, r, o) {
    o === void 0 && (o = {});
    var n, i, a, s;
    if (!r.ownerDocument)
      return;
    const {
      checkRtl: l,
      referenceElement: c
    } = o, u = t.getParent;
    t.drainInitQueue();
    let d, f, v, h, p = !1, y, g, _, m, k = c || r;
    const w = {};
    for (; k && (!d || l); ) {
      const E = Le(t, k);
      if (l && _ === void 0) {
        const Oe = k.dir;
        Oe && (_ = Oe.toLowerCase() === "rtl");
      }
      if (!E) {
        k = u(k);
        continue;
      }
      const O = k.tagName;
      (E.uncontrolled || O === "IFRAME" || O === "WEBVIEW") && (m = k), !h && (!((n = E.focusable) === null || n === void 0) && n.excludeFromMover) && !v && (p = !0);
      const j = E.modalizer, F = E.groupper, Z = E.mover;
      !f && j && (f = j), !v && F && (!f || j) && (f ? (!F.isActive() && F.getProps().tabbability && f.userId !== ((i = t.modalizer) === null || i === void 0 ? void 0 : i.activeId) && (f = void 0, v = F), g = F) : v = F), !h && Z && (!f || j) && (!F || k !== r) && (h = Z, y = !!v && v !== F), E.root && (d = E.root), !((a = E.focusable) === null || a === void 0) && a.ignoreKeydown && Object.assign(w, E.focusable.ignoreKeydown), k = u(k);
    }
    if (!d) {
      const E = t.root;
      E._autoRoot && !((s = r.ownerDocument) === null || s === void 0) && s.body && (d = E._autoRootCreate());
    }
    return v && !h && (y = !0), process.env.NODE_ENV === "development" && !d && (f || v || h) && console.error("Tabster Root is required for Mover, Groupper and Modalizer to work."), d ? {
      root: d,
      modalizer: f,
      groupper: v,
      mover: h,
      groupperBeforeMover: y,
      modalizerInGroupper: g,
      rtl: l ? !!_ : void 0,
      uncontrolled: m,
      excludedFromMover: p,
      ignoreKeydown: (E) => !!w[E.key]
    } : void 0;
  }
  static getRoot(t, r) {
    var o;
    const n = t.getParent;
    for (let i = r; i; i = n(i)) {
      const a = (o = Le(t, i)) === null || o === void 0 ? void 0 : o.root;
      if (a)
        return a;
    }
  }
  onRoot(t, r) {
    r ? delete this.rootById[t.uid] : this.rootById[t.uid] = t;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class wd {
  constructor() {
    this._callbacks = [];
  }
  dispose() {
    this._callbacks = [], delete this._val;
  }
  subscribe(t) {
    const r = this._callbacks;
    r.indexOf(t) < 0 && r.push(t);
  }
  subscribeFirst(t) {
    const r = this._callbacks, o = r.indexOf(t);
    o >= 0 && r.splice(o, 1), r.unshift(t);
  }
  unsubscribe(t) {
    const r = this._callbacks.indexOf(t);
    r >= 0 && this._callbacks.splice(r, 1);
  }
  setVal(t, r) {
    this._val !== t && (this._val = t, this._callCallbacks(t, r));
  }
  getVal() {
    return this._val;
  }
  trigger(t, r) {
    this._callCallbacks(t, r);
  }
  _callCallbacks(t, r) {
    this._callbacks.forEach((o) => o(t, r));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Db {
  constructor(t) {
    this._tabster = t;
  }
  dispose() {
  }
  getProps(t) {
    const r = Le(this._tabster, t);
    return r && r.focusable || {};
  }
  isFocusable(t, r, o, n) {
    return bd(t, ds) && (r || t.tabIndex !== -1) ? (o || this.isVisible(t)) && (n || this.isAccessible(t)) : !1;
  }
  isVisible(t) {
    if (!t.ownerDocument || t.nodeType !== Node.ELEMENT_NODE || Pb(t))
      return !1;
    const r = t.ownerDocument.body.getBoundingClientRect();
    return !(r.width === 0 && r.height === 0);
  }
  isAccessible(t) {
    var r;
    for (let o = t; o; o = N.getParentElement(o)) {
      const n = Le(this._tabster, o);
      if (this._isHidden(o) || !((r = n == null ? void 0 : n.focusable) === null || r === void 0 ? void 0 : r.ignoreAriaDisabled) && this._isDisabled(o))
        return !1;
    }
    return !0;
  }
  _isDisabled(t) {
    return t.hasAttribute("disabled");
  }
  _isHidden(t) {
    var r;
    const o = t.getAttribute("aria-hidden");
    return !!(o && o.toLowerCase() === "true" && !(!((r = this._tabster.modalizer) === null || r === void 0) && r.isAugmented(t)));
  }
  findFirst(t, r) {
    return this.findElement({
      ...t
    }, r);
  }
  findLast(t, r) {
    return this.findElement({
      isBackward: !0,
      ...t
    }, r);
  }
  findNext(t, r) {
    return this.findElement({
      ...t
    }, r);
  }
  findPrev(t, r) {
    return this.findElement({
      ...t,
      isBackward: !0
    }, r);
  }
  findDefault(t, r) {
    return this.findElement({
      ...t,
      acceptCondition: (o) => this.isFocusable(o, t.includeProgrammaticallyFocusable) && !!this.getProps(o).isDefault
    }, r) || null;
  }
  findAll(t) {
    return this._findElements(!0, t) || [];
  }
  findElement(t, r) {
    const o = this._findElements(!1, t, r);
    return o && o[0];
  }
  _findElements(t, r, o) {
    var n, i, a;
    const {
      container: s,
      currentElement: l = null,
      includeProgrammaticallyFocusable: c,
      useActiveModalizer: u,
      ignoreAccessibility: d,
      modalizerId: f,
      isBackward: v,
      onElement: h
    } = r;
    o || (o = {});
    const p = [];
    let {
      acceptCondition: y
    } = r;
    const g = !!y;
    if (!s)
      return null;
    y || (y = (w) => this.isFocusable(w, c, !1, d));
    const _ = {
      container: s,
      modalizerUserId: f === void 0 && u ? (n = this._tabster.modalizer) === null || n === void 0 ? void 0 : n.activeId : f || ((a = (i = ve.getTabsterContext(this._tabster, s)) === null || i === void 0 ? void 0 : i.modalizer) === null || a === void 0 ? void 0 : a.userId),
      from: l || s,
      isBackward: v,
      acceptCondition: y,
      hasCustomCondition: g,
      includeProgrammaticallyFocusable: c,
      ignoreAccessibility: d,
      cachedGrouppers: {}
    }, m = fs(s.ownerDocument, s, (w) => this._acceptElement(w, _));
    if (!m)
      return null;
    const k = (w) => {
      var x, E;
      const O = (x = _.foundElement) !== null && x !== void 0 ? x : _.foundBackward;
      return O && p.push(O), t ? O && (_.found = !1, delete _.foundElement, delete _.foundBackward, delete _.fromCtx, _.from = O, h && !h(O)) ? !1 : !!(O || w) : (O && o && (o.uncontrolled = (E = ve.getTabsterContext(this._tabster, O)) === null || E === void 0 ? void 0 : E.uncontrolled), !!(w && !O));
    };
    if (l || (o.outOfDOMOrder = !0), l && N.nodeContains(s, l))
      m.currentNode = l;
    else if (v) {
      const w = yd(s);
      if (!w)
        return null;
      if (this._acceptElement(w, _) === NodeFilter.FILTER_ACCEPT && !k(!0))
        return _.skippedFocusable && (o.outOfDOMOrder = !0), p;
      m.currentNode = w;
    }
    do
      v ? m.previousNode() : m.nextNode();
    while (k());
    return _.skippedFocusable && (o.outOfDOMOrder = !0), p.length ? p : null;
  }
  _acceptElement(t, r) {
    var o, n, i;
    if (r.found)
      return NodeFilter.FILTER_ACCEPT;
    const a = r.foundBackward;
    if (a && (t === a || !N.nodeContains(a, t)))
      return r.found = !0, r.foundElement = a, NodeFilter.FILTER_ACCEPT;
    const s = r.container;
    if (t === s)
      return NodeFilter.FILTER_SKIP;
    if (!N.nodeContains(s, t) || t.__tabsterDummyContainer || N.nodeContains(r.rejectElementsFrom, t))
      return NodeFilter.FILTER_REJECT;
    const l = r.currentCtx = ve.getTabsterContext(this._tabster, t);
    if (!l)
      return NodeFilter.FILTER_SKIP;
    if (md(t))
      return this.isFocusable(t, void 0, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_SKIP;
    if (!r.hasCustomCondition && (t.tagName === "IFRAME" || t.tagName === "WEBVIEW"))
      return ((o = l.modalizer) === null || o === void 0 ? void 0 : o.userId) === ((n = this._tabster.modalizer) === null || n === void 0 ? void 0 : n.activeId) ? (r.found = !0, r.rejectElementsFrom = r.foundElement = t, NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
    if (!r.ignoreAccessibility && !this.isAccessible(t))
      return this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_REJECT;
    let c, u = r.fromCtx;
    u || (u = r.fromCtx = ve.getTabsterContext(this._tabster, r.from));
    const d = u == null ? void 0 : u.mover;
    let f = l.groupper, v = l.mover;
    if (c = (i = this._tabster.modalizer) === null || i === void 0 ? void 0 : i.acceptElement(t, r), c !== void 0 && (r.skippedFocusable = !0), c === void 0 && (f || v || d)) {
      const h = f == null ? void 0 : f.getElement(), p = d == null ? void 0 : d.getElement();
      let y = v == null ? void 0 : v.getElement();
      y && N.nodeContains(p, y) && N.nodeContains(s, p) && (!h || !v || N.nodeContains(p, h)) && (v = d, y = p), h && (h === s || !N.nodeContains(s, h)) && (f = void 0), y && !N.nodeContains(s, y) && (v = void 0), f && v && (y && h && !N.nodeContains(h, y) ? v = void 0 : f = void 0), f && (c = f.acceptElement(t, r)), v && (c = v.acceptElement(t, r));
    }
    return c === void 0 && (c = r.acceptCondition(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, c === NodeFilter.FILTER_SKIP && this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0)), c === NodeFilter.FILTER_ACCEPT && !r.found && (r.isBackward ? (r.foundBackward = t, c = NodeFilter.FILTER_SKIP) : (r.found = !0, r.foundElement = t)), c;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Ee = {
  Tab: "Tab",
  Enter: "Enter",
  Escape: "Escape",
  Space: " ",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown"
};
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Ab(e, t) {
  var r;
  const o = e.getParent;
  let n = t;
  do {
    const i = (r = Le(e, n)) === null || r === void 0 ? void 0 : r.uncontrolled;
    if (i && e.uncontrolled.isUncontrolledCompletely(n, !!i.completely))
      return n;
    n = o(n);
  } while (n);
}
const Rl = {
  [Bt.Restorer]: 0,
  [Bt.Deloser]: 1,
  [Bt.EscapeGroupper]: 2
};
class Be extends wd {
  constructor(t, r) {
    super(), this._init = () => {
      const o = this._win(), n = o.document;
      n.addEventListener(bt, this._onFocusIn, !0), n.addEventListener(co, this._onFocusOut, !0), o.addEventListener("keydown", this._onKeyDown, !0);
      const i = N.getActiveElement(n);
      i && i !== n.body && this._setFocusedElement(i), this.subscribe(this._onChanged);
    }, this._onFocusIn = (o) => {
      const n = o.composedPath()[0];
      n && this._setFocusedElement(n, o.detail.relatedTarget, o.detail.isFocusedProgrammatically);
    }, this._onFocusOut = (o) => {
      var n;
      this._setFocusedElement(void 0, (n = o.detail) === null || n === void 0 ? void 0 : n.originalEvent.relatedTarget);
    }, this._validateFocusedElement = (o) => {
    }, this._onKeyDown = (o) => {
      if (o.key !== Ee.Tab || o.ctrlKey)
        return;
      const n = this.getVal();
      if (!n || !n.ownerDocument || n.contentEditable === "true")
        return;
      const i = this._tabster, a = i.controlTab, s = ve.getTabsterContext(i, n);
      if (!s || s.ignoreKeydown(o))
        return;
      const l = o.shiftKey, c = Be.findNextTabbable(i, s, void 0, n, void 0, l, !0), u = s.root.getElement();
      if (!u)
        return;
      const d = c == null ? void 0 : c.element, f = Ab(i, n);
      if (d) {
        const v = c.uncontrolled;
        if (s.uncontrolled || N.nodeContains(v, n)) {
          if (!c.outOfDOMOrder && v === s.uncontrolled || f && !N.nodeContains(f, d))
            return;
          Or.addPhantomDummyWithTarget(i, n, l, d);
          return;
        }
        if (v || d.tagName === "IFRAME") {
          u.dispatchEvent(new Kt({
            by: "root",
            owner: u,
            next: d,
            relatedEvent: o
          })) && Or.moveWithPhantomDummy(this._tabster, v ?? d, !1, l, o);
          return;
        }
        (a || c != null && c.outOfDOMOrder) && u.dispatchEvent(new Kt({
          by: "root",
          owner: u,
          next: d,
          relatedEvent: o
        })) && (o.preventDefault(), o.stopImmediatePropagation(), Ct(d));
      } else
        !f && u.dispatchEvent(new Kt({
          by: "root",
          owner: u,
          next: null,
          relatedEvent: o
        })) && s.root.moveOutWithDefaultAction(l, o);
    }, this._onChanged = (o, n) => {
      var i, a;
      if (o)
        o.dispatchEvent(new Hm(n));
      else {
        const s = (i = this._lastVal) === null || i === void 0 ? void 0 : i.get();
        if (s) {
          const l = {
            ...n
          }, c = ve.getTabsterContext(this._tabster, s), u = (a = c == null ? void 0 : c.modalizer) === null || a === void 0 ? void 0 : a.userId;
          u && (l.modalizerId = u), s.dispatchEvent(new $m(l));
        }
      }
    }, this._tabster = t, this._win = r, t.queueInit(this._init);
  }
  dispose() {
    super.dispose();
    const t = this._win(), r = t.document;
    r.removeEventListener(bt, this._onFocusIn, !0), r.removeEventListener(co, this._onFocusOut, !0), t.removeEventListener("keydown", this._onKeyDown, !0), this.unsubscribe(this._onChanged);
    const o = this._asyncFocus;
    o && (t.clearTimeout(o.timeout), delete this._asyncFocus), delete Be._lastResetElement, delete this._nextVal, delete this._lastVal;
  }
  static forgetMemorized(t, r) {
    var o, n;
    let i = Be._lastResetElement, a = i && i.get();
    a && N.nodeContains(r, a) && delete Be._lastResetElement, a = (n = (o = t._nextVal) === null || o === void 0 ? void 0 : o.element) === null || n === void 0 ? void 0 : n.get(), a && N.nodeContains(r, a) && delete t._nextVal, i = t._lastVal, a = i && i.get(), a && N.nodeContains(r, a) && delete t._lastVal;
  }
  getFocusedElement() {
    return this.getVal();
  }
  getLastFocusedElement() {
    var t;
    let r = (t = this._lastVal) === null || t === void 0 ? void 0 : t.get();
    return (!r || r && !hs(r.ownerDocument, r)) && (this._lastVal = r = void 0), r;
  }
  focus(t, r, o) {
    return this._tabster.focusable.isFocusable(t, r, !1, o) ? (t.focus(), !0) : !1;
  }
  focusDefault(t) {
    const r = this._tabster.focusable.findDefault({
      container: t
    });
    return r ? (this._tabster.focusedElement.focus(r), !0) : !1;
  }
  getFirstOrLastTabbable(t, r) {
    var o;
    const {
      container: n,
      ignoreAccessibility: i
    } = r;
    let a;
    if (n) {
      const s = ve.getTabsterContext(this._tabster, n);
      s && (a = (o = Be.findNextTabbable(this._tabster, s, n, void 0, void 0, !t, i)) === null || o === void 0 ? void 0 : o.element);
    }
    return a && !N.nodeContains(n, a) && (a = void 0), a || void 0;
  }
  _focusFirstOrLast(t, r) {
    const o = this.getFirstOrLastTabbable(t, r);
    return o ? (this.focus(o, !1, !0), !0) : !1;
  }
  focusFirst(t) {
    return this._focusFirstOrLast(!0, t);
  }
  focusLast(t) {
    return this._focusFirstOrLast(!1, t);
  }
  resetFocus(t) {
    if (!this._tabster.focusable.isVisible(t))
      return !1;
    if (this._tabster.focusable.isFocusable(t, !0, !0, !0))
      this.focus(t);
    else {
      const r = t.getAttribute("tabindex"), o = t.getAttribute("aria-hidden");
      t.tabIndex = -1, t.setAttribute("aria-hidden", "true"), Be._lastResetElement = new Ge(this._win, t), this.focus(t, !0, !0), this._setOrRemoveAttribute(t, "tabindex", r), this._setOrRemoveAttribute(t, "aria-hidden", o);
    }
    return !0;
  }
  requestAsyncFocus(t, r, o) {
    const n = this._tabster.getWindow(), i = this._asyncFocus;
    if (i) {
      if (Rl[t] > Rl[i.source])
        return;
      n.clearTimeout(i.timeout);
    }
    this._asyncFocus = {
      source: t,
      callback: r,
      timeout: n.setTimeout(() => {
        this._asyncFocus = void 0, r();
      }, o)
    };
  }
  cancelAsyncFocus(t) {
    const r = this._asyncFocus;
    (r == null ? void 0 : r.source) === t && (this._tabster.getWindow().clearTimeout(r.timeout), this._asyncFocus = void 0);
  }
  _setOrRemoveAttribute(t, r, o) {
    o === null ? t.removeAttribute(r) : t.setAttribute(r, o);
  }
  _setFocusedElement(t, r, o) {
    var n, i;
    if (this._tabster._noop)
      return;
    const a = {
      relatedTarget: r
    };
    if (t) {
      const l = (n = Be._lastResetElement) === null || n === void 0 ? void 0 : n.get();
      if (Be._lastResetElement = void 0, l === t || md(t))
        return;
      a.isFocusedProgrammatically = o;
      const c = ve.getTabsterContext(this._tabster, t), u = (i = c == null ? void 0 : c.modalizer) === null || i === void 0 ? void 0 : i.userId;
      u && (a.modalizerId = u);
    }
    const s = this._nextVal = {
      element: t ? new Ge(this._win, t) : void 0,
      detail: a
    };
    t && t !== this._val && this._validateFocusedElement(t), this._nextVal === s && this.setVal(t, a), this._nextVal = void 0;
  }
  setVal(t, r) {
    super.setVal(t, r), t && (this._lastVal = new Ge(this._win, t));
  }
  static findNextTabbable(t, r, o, n, i, a, s) {
    const l = o || r.root.getElement();
    if (!l)
      return null;
    let c = null;
    const u = Be._isTabbingTimer, d = t.getWindow();
    u && d.clearTimeout(u), Be.isTabbing = !0, Be._isTabbingTimer = d.setTimeout(() => {
      delete Be._isTabbingTimer, Be.isTabbing = !1;
    }, 0);
    const f = r.modalizer, v = r.groupper, h = r.mover, p = (y) => {
      if (c = y.findNextTabbable(n, i, a, s), n && !(c != null && c.element)) {
        const g = y !== f && N.getParentElement(y.getElement());
        if (g) {
          const _ = ve.getTabsterContext(t, n, {
            referenceElement: g
          });
          if (_) {
            const m = y.getElement(), k = a ? m : m && yd(m) || m;
            k && (c = Be.findNextTabbable(t, _, o, k, g, a, s), c && (c.outOfDOMOrder = !0));
          }
        }
      }
    };
    if (v && h)
      p(r.groupperBeforeMover ? v : h);
    else if (v)
      p(v);
    else if (h)
      p(h);
    else if (f)
      p(f);
    else {
      const y = {
        container: l,
        currentElement: n,
        referenceElement: i,
        ignoreAccessibility: s,
        useActiveModalizer: !0
      }, g = {};
      c = {
        element: t.focusable[a ? "findPrev" : "findNext"](y, g),
        outOfDOMOrder: g.outOfDOMOrder,
        uncontrolled: g.uncontrolled
      };
    }
    return c;
  }
}
Be.isTabbing = !1;
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class jb extends Or {
  constructor(t, r, o, n) {
    super(o, t, Jn.Groupper, n, !0), this._setHandlers((i, a, s) => {
      var l, c;
      const u = t.get(), d = i.input;
      if (u && d) {
        const f = ve.getTabsterContext(o, d);
        if (f) {
          let v;
          v = (l = r.findNextTabbable(s || void 0, void 0, a, !0)) === null || l === void 0 ? void 0 : l.element, v || (v = (c = Be.findNextTabbable(o, f, void 0, i.isOutside ? d : Cb(u, !a), void 0, a, !0)) === null || c === void 0 ? void 0 : c.element), v && Ct(v);
        }
      }
    });
  }
}
class Fb extends So {
  constructor(t, r, o, n, i) {
    super(t, r, n), this._shouldTabInside = !1, this.makeTabbable(!1), this._onDispose = o, t.controlTab || (this.dummyManager = new jb(this._element, this, t, i));
  }
  dispose() {
    var t;
    this._onDispose(this);
    const r = this._element.get();
    (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager, r && process.env.NODE_ENV === "development" && Dl(this._element, !0), delete this._first;
  }
  findNextTabbable(t, r, o, n) {
    var i;
    const a = this.getElement();
    if (!a)
      return null;
    const s = ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
    if (!this._shouldTabInside && t && N.nodeContains(a, t) && !s)
      return {
        element: void 0,
        outOfDOMOrder: !0
      };
    const l = this.getFirst(!0);
    if (!t || !N.nodeContains(a, t) || s)
      return {
        element: l,
        outOfDOMOrder: !0
      };
    const c = this._tabster;
    let u = null, d = !1, f;
    if (this._shouldTabInside && l) {
      const v = {
        container: a,
        currentElement: t,
        referenceElement: r,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, h = {};
      u = c.focusable[o ? "findPrev" : "findNext"](v, h), d = !!h.outOfDOMOrder, !u && this._props.tabbability === cd.LimitedTrapFocus && (u = c.focusable[o ? "findLast" : "findFirst"]({
        container: a,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, h), d = !0), f = h.uncontrolled;
    }
    return {
      element: u,
      uncontrolled: f,
      outOfDOMOrder: d
    };
  }
  makeTabbable(t) {
    this._shouldTabInside = t || !this._props.tabbability, process.env.NODE_ENV === "development" && Dl(this._element, !this._shouldTabInside);
  }
  isActive(t) {
    var r;
    const o = this.getElement() || null;
    let n = !0;
    for (let a = N.getParentElement(o); a; a = N.getParentElement(a)) {
      const s = (r = Le(this._tabster, a)) === null || r === void 0 ? void 0 : r.groupper;
      s && (s._shouldTabInside || (n = !1));
    }
    let i = n ? this._props.tabbability ? this._shouldTabInside : !1 : void 0;
    if (i && t) {
      const a = this._tabster.focusedElement.getFocusedElement();
      a && (i = a !== this.getFirst(!0));
    }
    return i;
  }
  getFirst(t) {
    var r;
    const o = this.getElement();
    let n;
    if (o) {
      if (t && this._tabster.focusable.isFocusable(o))
        return o;
      n = (r = this._first) === null || r === void 0 ? void 0 : r.get(), n || (n = this._tabster.focusable.findFirst({
        container: o,
        useActiveModalizer: !0
      }) || void 0, n && this.setFirst(n));
    }
    return n;
  }
  setFirst(t) {
    t ? this._first = new Ge(this._tabster.getWindow, t) : delete this._first;
  }
  acceptElement(t, r) {
    const o = r.cachedGrouppers, n = N.getParentElement(this.getElement()), i = n && ve.getTabsterContext(this._tabster, n), a = i == null ? void 0 : i.groupper, s = i != null && i.groupperBeforeMover ? a : void 0;
    let l;
    const c = (f) => {
      let v = o[f.id], h;
      return v ? h = v.isActive : (h = this.isActive(!0), v = o[f.id] = {
        isActive: h
      }), h;
    };
    if (s && (l = s.getElement(), !c(s) && l && r.container !== l && N.nodeContains(r.container, l)))
      return r.skippedFocusable = !0, NodeFilter.FILTER_REJECT;
    const u = c(this), d = this.getElement();
    if (d && u !== !0) {
      if (d === t && a && (l || (l = a.getElement()), l && !c(a) && N.nodeContains(r.container, l) && l !== r.container) || d !== t && N.nodeContains(d, t))
        return r.skippedFocusable = !0, NodeFilter.FILTER_REJECT;
      const f = o[this.id];
      let v;
      if ("first" in f ? v = f.first : v = f.first = this.getFirst(!0), v && r.acceptCondition(v))
        return r.rejectElementsFrom = d, r.skippedFocusable = !0, v !== r.from ? (r.found = !0, r.foundElement = v, NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
    }
  }
}
class Ib {
  constructor(t, r) {
    this._current = {}, this._grouppers = {}, this._init = () => {
      const o = this._win();
      this._tabster.focusedElement.subscribeFirst(this._onFocus);
      const n = o.document, i = N.getActiveElement(n);
      i && this._onFocus(i), n.addEventListener("mousedown", this._onMouseDown, !0), o.addEventListener("keydown", this._onKeyDown, !0), o.addEventListener(El, this._onMoveFocus);
    }, this._onGroupperDispose = (o) => {
      delete this._grouppers[o.id];
    }, this._onFocus = (o) => {
      o && this._updateCurrent(o, !0, !0);
    }, this._onMouseDown = (o) => {
      o.target && this._updateCurrent(o.target, !0);
    }, this._onKeyDown = (o) => {
      if (o.key !== Ee.Enter && o.key !== Ee.Escape || o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
        return;
      const n = this._tabster.focusedElement.getFocusedElement();
      n && this.handleKeyPress(n, o);
    }, this._onMoveFocus = (o) => {
      var n;
      const i = o.composedPath()[0], a = (n = o.detail) === null || n === void 0 ? void 0 : n.action;
      i && a !== void 0 && !o.defaultPrevented && (a === _a.Enter ? this._enterGroupper(i) : this._escapeGroupper(i), o.stopImmediatePropagation());
    }, this._tabster = t, this._win = r, t.queueInit(this._init);
  }
  dispose() {
    const t = this._win();
    this._tabster.focusedElement.cancelAsyncFocus(Bt.EscapeGroupper), this._current = {}, this._updateTimer && (t.clearTimeout(this._updateTimer), delete this._updateTimer), this._tabster.focusedElement.unsubscribe(this._onFocus), t.document.removeEventListener("mousedown", this._onMouseDown, !0), t.removeEventListener("keydown", this._onKeyDown, !0), t.removeEventListener(El, this._onMoveFocus), Object.keys(this._grouppers).forEach((r) => {
      this._grouppers[r] && (this._grouppers[r].dispose(), delete this._grouppers[r]);
    });
  }
  createGroupper(t, r, o) {
    process.env.NODE_ENV;
    const n = new Fb(this._tabster, t, this._onGroupperDispose, r, o);
    this._grouppers[n.id] = n;
    const i = this._tabster.focusedElement.getFocusedElement();
    return i && N.nodeContains(t, i) && !this._updateTimer && (this._updateTimer = this._win().setTimeout(() => {
      delete this._updateTimer, i === this._tabster.focusedElement.getFocusedElement() && this._updateCurrent(i, !0, !0);
    }, 0)), n;
  }
  forgetCurrentGrouppers() {
    this._current = {};
  }
  _updateCurrent(t, r, o) {
    var n;
    this._updateTimer && (this._win().clearTimeout(this._updateTimer), delete this._updateTimer);
    const i = {};
    let a = !0;
    for (let s = t; s; s = N.getParentElement(s)) {
      const l = (n = Le(this._tabster, s)) === null || n === void 0 ? void 0 : n.groupper;
      if (l) {
        if (i[l.id] = !0, a && o && s !== t && (a = !1), r || !a) {
          this._current[l.id] = l;
          const c = l.isActive() || t !== s && (!l.getProps().delegated || l.getFirst(!1) !== t);
          l.makeTabbable(c);
        }
        a = !1;
      }
    }
    for (const s of Object.keys(this._current)) {
      const l = this._current[s];
      l.id in i || (l.makeTabbable(!1), l.setFirst(void 0), delete this._current[s]);
    }
  }
  _enterGroupper(t, r) {
    const o = this._tabster, n = ve.getTabsterContext(o, t), i = (n == null ? void 0 : n.groupper) || (n == null ? void 0 : n.modalizerInGroupper), a = i == null ? void 0 : i.getElement();
    if (i && a && (t === a || i.getProps().delegated && t === i.getFirst(!1))) {
      const s = o.focusable.findNext({
        container: a,
        currentElement: t,
        useActiveModalizer: !0
      });
      if (s && (!r || r && a.dispatchEvent(new Kt({
        by: "groupper",
        owner: a,
        next: s,
        relatedEvent: r
      }))))
        return r && (r.preventDefault(), r.stopImmediatePropagation()), s.focus(), s;
    }
    return null;
  }
  _escapeGroupper(t, r, o) {
    var n;
    const i = this._tabster, a = ve.getTabsterContext(i, t), s = a == null ? void 0 : a.modalizerInGroupper;
    let l = (a == null ? void 0 : a.groupper) || s;
    const c = l == null ? void 0 : l.getElement();
    if (l && c && N.nodeContains(c, t)) {
      let u;
      if (t !== c || o)
        u = l.getFirst(!0);
      else {
        const d = N.getParentElement(c), f = d ? ve.getTabsterContext(i, d) : void 0;
        l = f == null ? void 0 : f.groupper, u = l == null ? void 0 : l.getFirst(!0);
      }
      if (u && (!r || r && c.dispatchEvent(new Kt({
        by: "groupper",
        owner: c,
        next: u,
        relatedEvent: r
      }))))
        return l && (l.makeTabbable(!1), s && ((n = i.modalizer) === null || n === void 0 || n.setActive(void 0))), u.focus(), u;
    }
    return null;
  }
  moveFocus(t, r) {
    return r === _a.Enter ? this._enterGroupper(t) : this._escapeGroupper(t);
  }
  handleKeyPress(t, r, o) {
    const n = this._tabster, i = ve.getTabsterContext(n, t);
    if (i && (i != null && i.groupper || i != null && i.modalizerInGroupper)) {
      if (n.focusedElement.cancelAsyncFocus(Bt.EscapeGroupper), i.ignoreKeydown(r))
        return;
      if (r.key === Ee.Enter)
        this._enterGroupper(t, r);
      else if (r.key === Ee.Escape) {
        const a = n.focusedElement.getFocusedElement();
        n.focusedElement.requestAsyncFocus(Bt.EscapeGroupper, () => {
          a !== n.focusedElement.getFocusedElement() && // A part of Modalizer that has called this handler to escape the active groupper
          // might have been removed from DOM, if the focus is on body, we still want to handle Esc.
          (o && !a || !o) || this._escapeGroupper(t, r, o);
        }, 0);
      }
    }
  }
}
function Dl(e, t) {
  if (process.env.NODE_ENV === "development") {
    const r = e.get();
    r && (t ? r.style.removeProperty("--tabster-groupper") : r.style.setProperty("--tabster-groupper", "unlimited"));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class qb extends wd {
  constructor(t) {
    super(), this._onChange = (r) => {
      this.setVal(r, void 0);
    }, this._keyborg = ls(t()), this._keyborg.subscribe(this._onChange);
  }
  dispose() {
    super.dispose(), this._keyborg && (this._keyborg.unsubscribe(this._onChange), cs(this._keyborg), delete this._keyborg);
  }
  setNavigatingWithKeyboard(t) {
    var r;
    (r = this._keyborg) === null || r === void 0 || r.setVal(t);
  }
  isNavigatingWithKeyboard() {
    var t;
    return !!(!((t = this._keyborg) === null || t === void 0) && t.isNavigatingWithKeyboard());
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let Mb = 0;
const Di = "aria-hidden";
function Ai(e, t, r, o, n, i) {
  if (process.env.NODE_ENV === "development") {
    const a = e.get();
    a && (t ? a.style.removeProperty("--tabster-modalizer") : a.style.setProperty("--tabster-modalizer", r + "," + o + "," + (n ? "active" : "inactive") + ",," + (i ? `focused(${i})` : "not-focused")));
  }
}
class Lb extends Or {
  constructor(t, r, o) {
    super(r, t, Jn.Modalizer, o), this._setHandlers((n, i) => {
      var a, s, l;
      const c = t.get(), u = c && ((a = ve.getRoot(r, c)) === null || a === void 0 ? void 0 : a.getElement()), d = n.input;
      let f;
      if (u && d) {
        const v = (s = d.__tabsterDummyContainer) === null || s === void 0 ? void 0 : s.get(), h = ve.getTabsterContext(r, v || d);
        h && (f = (l = Be.findNextTabbable(r, h, u, d, void 0, i, !0)) === null || l === void 0 ? void 0 : l.element), f && Ct(f);
      }
    });
  }
}
class Vb extends So {
  constructor(t, r, o, n, i, a) {
    super(t, r, n), this._wasFocused = 0, this.userId = n.id, this._onDispose = o, this._activeElements = a, t.controlTab || (this.dummyManager = new Lb(this._element, t, i)), process.env.NODE_ENV === "development" && Ai(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused);
  }
  makeActive(t) {
    if (this._isActive !== t) {
      this._isActive = t;
      const r = this.getElement();
      if (r) {
        const o = this._activeElements, n = o.map((i) => i.get()).indexOf(r);
        t ? n < 0 && o.push(new Ge(this._tabster.getWindow, r)) : n >= 0 && o.splice(n, 1);
      }
      process.env.NODE_ENV === "development" && Ai(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused), this._dispatchEvent(t);
    }
  }
  focused(t) {
    return t || (this._wasFocused = ++Mb), this._wasFocused;
  }
  setProps(t) {
    t.id && (this.userId = t.id), this._props = {
      ...t
    };
  }
  dispose() {
    var t;
    this.makeActive(!1), this._onDispose(this), (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager, this._activeElements = [], this._remove();
  }
  isActive() {
    return !!this._isActive;
  }
  contains(t) {
    return N.nodeContains(this.getElement(), t);
  }
  findNextTabbable(t, r, o, n) {
    var i, a;
    if (!this.getElement())
      return null;
    const l = this._tabster;
    let c = null, u = !1, d;
    const f = t && ((i = ve.getRoot(l, t)) === null || i === void 0 ? void 0 : i.getElement());
    if (f) {
      const v = {
        container: f,
        currentElement: t,
        referenceElement: r,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, h = {};
      c = l.focusable[o ? "findPrev" : "findNext"](v, h), !c && this._props.isTrapped && (!((a = l.modalizer) === null || a === void 0) && a.activeId) ? (c = l.focusable[o ? "findLast" : "findFirst"]({
        container: f,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, h), u = !0) : u = !!h.outOfDOMOrder, d = h.uncontrolled;
    }
    return {
      element: c,
      uncontrolled: d,
      outOfDOMOrder: u
    };
  }
  _dispatchEvent(t, r) {
    const o = this.getElement();
    let n = !1;
    if (o) {
      const i = r ? this._activeElements.map((a) => a.get()) : [o];
      for (const a of i)
        if (a) {
          const s = {
            id: this.userId,
            element: o
          }, l = t ? new Wm(s) : new Um(s);
          a.dispatchEvent(l), l.defaultPrevented && (n = !0);
        }
    }
    return n;
  }
  _remove() {
    process.env.NODE_ENV === "development" && Ai(this._element, !0);
  }
}
class Hb {
  constructor(t, r, o) {
    this._onModalizerDispose = (i) => {
      const a = i.id, s = i.userId, l = this._parts[s];
      delete this._modalizers[a], l && (delete l[a], Object.keys(l).length === 0 && (delete this._parts[s], this.activeId === s && this.setActive(void 0)));
    }, this._onKeyDown = (i) => {
      var a;
      if (i.key !== Ee.Escape)
        return;
      const s = this._tabster, l = s.focusedElement.getFocusedElement();
      if (l) {
        const c = ve.getTabsterContext(s, l), u = c == null ? void 0 : c.modalizer;
        if (c && !c.groupper && (u != null && u.isActive()) && !c.ignoreKeydown(i)) {
          const d = u.userId;
          if (d) {
            const f = this._parts[d];
            if (f) {
              const v = Object.keys(f).map((h) => {
                var p;
                const y = f[h], g = y.getElement();
                let _;
                return g && (_ = (p = Le(this._tabster, g)) === null || p === void 0 ? void 0 : p.groupper), y && g && _ ? {
                  el: g,
                  focusedSince: y.focused(!0)
                } : {
                  focusedSince: 0
                };
              }).filter((h) => h.focusedSince > 0).sort((h, p) => h.focusedSince > p.focusedSince ? -1 : h.focusedSince < p.focusedSince ? 1 : 0);
              if (v.length) {
                const h = v[0].el;
                h && ((a = s.groupper) === null || a === void 0 || a.handleKeyPress(h, i, !0));
              }
            }
          }
        }
      }
    }, this._onFocus = (i, a) => {
      var s, l;
      const c = i && ve.getTabsterContext(this._tabster, i);
      if (!c || !i)
        return;
      const u = this._augMap;
      for (let f = i; f; f = N.getParentElement(f))
        u.has(f) && (u.delete(f), Ri(this._tabster, f, Di));
      const d = c.modalizer;
      if ((l = d || ((s = Le(this._tabster, i)) === null || s === void 0 ? void 0 : s.modalizer)) === null || l === void 0 || l.focused(), (d == null ? void 0 : d.userId) === this.activeId) {
        this.currentIsOthersAccessible = d == null ? void 0 : d.getProps().isOthersAccessible;
        return;
      }
      if (a.isFocusedProgrammatically || this.currentIsOthersAccessible || d != null && d.getProps().isAlwaysAccessible)
        this.setActive(d);
      else {
        const f = this._win();
        f.clearTimeout(this._restoreModalizerFocusTimer), this._restoreModalizerFocusTimer = f.setTimeout(() => this._restoreModalizerFocus(i), 100);
      }
    }, this._tabster = t, this._win = t.getWindow, this._modalizers = {}, this._parts = {}, this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._alwaysAccessibleSelector = r, this._accessibleCheck = o, this.activeElements = [], t.controlTab || t.root.addDummyInputs(), this._win().addEventListener("keydown", this._onKeyDown, !0), t.queueInit(() => {
      this._tabster.focusedElement.subscribe(this._onFocus);
    });
  }
  dispose() {
    const t = this._win();
    t.removeEventListener("keydown", this._onKeyDown, !0), Object.keys(this._modalizers).forEach((r) => {
      this._modalizers[r] && (this._modalizers[r].dispose(), delete this._modalizers[r]);
    }), t.clearTimeout(this._restoreModalizerFocusTimer), t.clearTimeout(this._hiddenUpdateTimer), this._parts = {}, delete this.activeId, this.activeElements = [], this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._tabster.focusedElement.unsubscribe(this._onFocus);
  }
  createModalizer(t, r, o) {
    var n;
    process.env.NODE_ENV;
    const i = new Vb(this._tabster, t, this._onModalizerDispose, r, o, this.activeElements), a = i.id, s = r.id;
    this._modalizers[a] = i;
    let l = this._parts[s];
    return l || (l = this._parts[s] = {}), l[a] = i, N.nodeContains(t, (n = this._tabster.focusedElement.getFocusedElement()) !== null && n !== void 0 ? n : null) && (s !== this.activeId ? this.setActive(i) : i.makeActive(!0)), i;
  }
  isAugmented(t) {
    return this._augMap.has(t);
  }
  hiddenUpdate() {
    this._hiddenUpdateTimer || (this._hiddenUpdateTimer = this._win().setTimeout(() => {
      delete this._hiddenUpdateTimer, this._hiddenUpdate();
    }, 250));
  }
  setActive(t) {
    const r = t == null ? void 0 : t.userId, o = this.activeId;
    if (o !== r) {
      if (this.activeId = r, o) {
        const n = this._parts[o];
        if (n)
          for (const i of Object.keys(n))
            n[i].makeActive(!1);
      }
      if (r) {
        const n = this._parts[r];
        if (n)
          for (const i of Object.keys(n))
            n[i].makeActive(!0);
      }
      this.currentIsOthersAccessible = t == null ? void 0 : t.getProps().isOthersAccessible, this.hiddenUpdate();
    }
  }
  focus(t, r, o) {
    const n = ve.getTabsterContext(this._tabster, t), i = n == null ? void 0 : n.modalizer;
    if (i) {
      this.setActive(i);
      const a = i.getProps(), s = i.getElement();
      if (s) {
        if (r === void 0 && (r = a.isNoFocusFirst), !r && this._tabster.keyboardNavigation.isNavigatingWithKeyboard() && this._tabster.focusedElement.focusFirst({
          container: s
        }) || (o === void 0 && (o = a.isNoFocusDefault), !o && this._tabster.focusedElement.focusDefault(s)))
          return !0;
        this._tabster.focusedElement.resetFocus(s);
      }
    } else
      process.env.NODE_ENV === "development" && console.error("Element is not in Modalizer.", t);
    return !1;
  }
  acceptElement(t, r) {
    var o;
    const n = r.modalizerUserId, i = (o = r.currentCtx) === null || o === void 0 ? void 0 : o.modalizer;
    if (n)
      for (const s of this.activeElements) {
        const l = s.get();
        if (l && (N.nodeContains(t, l) || l === t))
          return NodeFilter.FILTER_SKIP;
      }
    const a = n === (i == null ? void 0 : i.userId) || !n && (i != null && i.getProps().isAlwaysAccessible) ? void 0 : NodeFilter.FILTER_SKIP;
    return a !== void 0 && (r.skippedFocusable = !0), a;
  }
  _hiddenUpdate() {
    var t;
    const r = this._tabster, o = r.getWindow().document.body, n = this.activeId, i = this._parts, a = [], s = [], l = this._alwaysAccessibleSelector, c = l ? Array.from(N.querySelectorAll(o, l)) : [], u = [];
    for (const g of Object.keys(i)) {
      const _ = i[g];
      for (const m of Object.keys(_)) {
        const k = _[m], w = k.getElement(), E = k.getProps().isAlwaysAccessible;
        w && (g === n ? (u.push(w), this.currentIsOthersAccessible || a.push(w)) : E ? c.push(w) : s.push(w));
      }
    }
    const d = this._augMap, f = a.length > 0 ? [...a, ...c] : void 0, v = [], h = /* @__PURE__ */ new WeakMap(), p = (g, _) => {
      var m;
      const k = g.tagName;
      if (k === "SCRIPT" || k === "STYLE")
        return;
      let w = !1;
      d.has(g) ? _ ? w = !0 : (d.delete(g), Ri(r, g, Di)) : _ && !(!((m = this._accessibleCheck) === null || m === void 0) && m.call(this, g, u)) && Ri(r, g, Di, "true") && (d.set(g, !0), w = !0), w && (v.push(new Ge(r.getWindow, g)), h.set(g, !0));
    }, y = (g) => {
      for (let _ = N.getFirstElementChild(g); _; _ = N.getNextElementSibling(_)) {
        let m = !1, k = !1, w = !1;
        if (f) {
          const x = r.getParent(_);
          for (const E of f) {
            if (_ === E) {
              m = !0;
              break;
            }
            if (N.nodeContains(_, E)) {
              k = !0;
              break;
            } else
              N.nodeContains(E, x) && (w = !0);
          }
          k ? y(_) : !m && !w && p(_, !0);
        } else
          p(_, !1);
      }
    };
    f || c.forEach((g) => p(g, !1)), s.forEach((g) => p(g, !0)), o && y(o), (t = this._aug) === null || t === void 0 || t.map((g) => g.get()).forEach((g) => {
      g && !h.get(g) && p(g, !1);
    }), this._aug = v, this._augMap = h;
  }
  /**
   * Called when an element is focused outside of an active modalizer.
   * Attempts to pull focus back into the active modalizer
   * @param outsideElement - An element being focused outside of the modalizer
   */
  _restoreModalizerFocus(t) {
    const r = t == null ? void 0 : t.ownerDocument;
    if (!t || !r)
      return;
    const o = ve.getTabsterContext(this._tabster, t), n = o == null ? void 0 : o.modalizer, i = this.activeId;
    if (!n && !i || n && i === n.userId)
      return;
    const a = o == null ? void 0 : o.root.getElement();
    if (a) {
      let s = this._tabster.focusable.findFirst({
        container: a,
        useActiveModalizer: !0
      });
      if (s) {
        if (t.compareDocumentPosition(s) & document.DOCUMENT_POSITION_PRECEDING && (s = this._tabster.focusable.findLast({
          container: a,
          useActiveModalizer: !0
        }), !s))
          throw new Error("Something went wrong.");
        this._tabster.focusedElement.focus(s);
        return;
      }
    }
    t.blur();
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const $b = /* @__PURE__ */ ["input", "textarea", "*[contenteditable]"].join(", ");
class Wb extends Or {
  constructor(t, r, o, n) {
    super(r, t, Jn.Mover, n), this._onFocusDummyInput = (i) => {
      var a, s;
      const l = this._element.get(), c = i.input;
      if (l && c) {
        const u = ve.getTabsterContext(this._tabster, l);
        let d;
        u && (d = (a = Be.findNextTabbable(this._tabster, u, void 0, c, void 0, !i.isFirst, !0)) === null || a === void 0 ? void 0 : a.element);
        const f = (s = this._getMemorized()) === null || s === void 0 ? void 0 : s.get();
        f && (d = f), d && Ct(d);
      }
    }, this._tabster = r, this._getMemorized = o, this._setHandlers(this._onFocusDummyInput);
  }
}
const ji = 1, Al = 2, jl = 3;
class Ub extends So {
  constructor(t, r, o, n, i) {
    var a;
    super(t, r, n), this._visible = {}, this._onIntersection = (l) => {
      for (const c of l) {
        const u = c.target, d = cn(this._win, u);
        let f, v = this._fullyVisible;
        if (c.intersectionRatio >= 0.25 ? (f = c.intersectionRatio >= 0.75 ? Ot.Visible : Ot.PartiallyVisible, f === Ot.Visible && (v = d)) : f = Ot.Invisible, this._visible[d] !== f) {
          f === void 0 ? (delete this._visible[d], v === d && delete this._fullyVisible) : (this._visible[d] = f, this._fullyVisible = v);
          const h = this.getState(u);
          h && u.dispatchEvent(new Bl(h));
        }
      }
    }, this._win = t.getWindow, this.visibilityTolerance = (a = n.visibilityTolerance) !== null && a !== void 0 ? a : 0.8, (this._props.trackState || this._props.visibilityAware) && (this._intersectionObserver = new IntersectionObserver(this._onIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }), this._observeState()), this._onDispose = o;
    const s = () => n.memorizeCurrent ? this._current : void 0;
    t.controlTab || (this.dummyManager = new Wb(this._element, t, s, i));
  }
  dispose() {
    var t;
    this._onDispose(this), this._intersectionObserver && (this._intersectionObserver.disconnect(), delete this._intersectionObserver), delete this._current, delete this._fullyVisible, delete this._allElements, delete this._updateQueue, this._unobserve && (this._unobserve(), delete this._unobserve);
    const r = this._win();
    this._setCurrentTimer && (r.clearTimeout(this._setCurrentTimer), delete this._setCurrentTimer), this._updateTimer && (r.clearTimeout(this._updateTimer), delete this._updateTimer), (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager;
  }
  setCurrent(t) {
    t ? this._current = new Ge(this._win, t) : this._current = void 0, (this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer && (this._setCurrentTimer = this._win().setTimeout(() => {
      var r;
      delete this._setCurrentTimer;
      const o = [];
      this._current !== this._prevCurrent && (o.push(this._current), o.push(this._prevCurrent), this._prevCurrent = this._current);
      for (const n of o) {
        const i = n == null ? void 0 : n.get();
        if (i && ((r = this._allElements) === null || r === void 0 ? void 0 : r.get(i)) === this) {
          const a = this._props;
          if (i && (a.visibilityAware !== void 0 || a.trackState)) {
            const s = this.getState(i);
            s && i.dispatchEvent(new Bl(s));
          }
        }
      }
    }));
  }
  getCurrent() {
    var t;
    return ((t = this._current) === null || t === void 0 ? void 0 : t.get()) || null;
  }
  findNextTabbable(t, r, o, n) {
    var i;
    const a = this.getElement(), s = a && ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
    if (!a)
      return null;
    let l = null, c = !1, u;
    if (this._props.tabbable || s || t && !N.nodeContains(a, t)) {
      const d = {
        currentElement: t,
        referenceElement: r,
        container: a,
        ignoreAccessibility: n,
        useActiveModalizer: !0
      }, f = {};
      l = this._tabster.focusable[o ? "findPrev" : "findNext"](d, f), c = !!f.outOfDOMOrder, u = f.uncontrolled;
    }
    return {
      element: l,
      uncontrolled: u,
      outOfDOMOrder: c
    };
  }
  acceptElement(t, r) {
    var o, n, i;
    if (!Be.isTabbing)
      return !((o = r.currentCtx) === null || o === void 0) && o.excludedFromMover ? NodeFilter.FILTER_REJECT : void 0;
    const {
      memorizeCurrent: a,
      visibilityAware: s,
      hasDefault: l = !0
    } = this._props, c = this.getElement();
    if (c && (a || s || l) && (!N.nodeContains(c, r.from) || ((n = r.from.__tabsterDummyContainer) === null || n === void 0 ? void 0 : n.get()) === c)) {
      let u;
      if (a) {
        const d = (i = this._current) === null || i === void 0 ? void 0 : i.get();
        d && r.acceptCondition(d) && (u = d);
      }
      if (!u && l && (u = this._tabster.focusable.findDefault({
        container: c,
        useActiveModalizer: !0
      })), !u && s && (u = this._tabster.focusable.findElement({
        container: c,
        useActiveModalizer: !0,
        isBackward: r.isBackward,
        acceptCondition: (d) => {
          var f;
          const v = cn(this._win, d), h = this._visible[v];
          return c !== d && !!(!((f = this._allElements) === null || f === void 0) && f.get(d)) && r.acceptCondition(d) && (h === Ot.Visible || h === Ot.PartiallyVisible && (s === Ot.PartiallyVisible || !this._fullyVisible));
        }
      })), u)
        return r.found = !0, r.foundElement = u, r.rejectElementsFrom = c, r.skippedFocusable = !0, NodeFilter.FILTER_ACCEPT;
    }
  }
  _observeState() {
    const t = this.getElement();
    if (this._unobserve || !t || typeof MutationObserver > "u")
      return;
    const r = this._win(), o = this._allElements = /* @__PURE__ */ new WeakMap(), n = this._tabster.focusable;
    let i = this._updateQueue = [];
    const a = N.createMutationObserver((v) => {
      for (const h of v) {
        const p = h.target, y = h.removedNodes, g = h.addedNodes;
        if (h.type === "attributes")
          h.attributeName === "tabindex" && i.push({
            element: p,
            type: Al
          });
        else {
          for (let _ = 0; _ < y.length; _++)
            i.push({
              element: y[_],
              type: jl
            });
          for (let _ = 0; _ < g.length; _++)
            i.push({
              element: g[_],
              type: ji
            });
        }
      }
      d();
    }), s = (v, h) => {
      var p, y;
      const g = o.get(v);
      g && h && ((p = this._intersectionObserver) === null || p === void 0 || p.unobserve(v), o.delete(v)), !g && !h && (o.set(v, this), (y = this._intersectionObserver) === null || y === void 0 || y.observe(v));
    }, l = (v) => {
      const h = n.isFocusable(v);
      o.get(v) ? h || s(v, !0) : h && s(v);
    }, c = (v) => {
      const {
        mover: h
      } = f(v);
      if (h && h !== this)
        if (h.getElement() === v && n.isFocusable(v))
          s(v);
        else
          return;
      const p = fs(r.document, v, (y) => {
        const {
          mover: g,
          groupper: _
        } = f(y);
        if (g && g !== this)
          return NodeFilter.FILTER_REJECT;
        const m = _ == null ? void 0 : _.getFirst(!0);
        return _ && _.getElement() !== y && m && m !== y ? NodeFilter.FILTER_REJECT : (n.isFocusable(y) && s(y), NodeFilter.FILTER_SKIP);
      });
      if (p)
        for (p.currentNode = v; p.nextNode(); )
          ;
    }, u = (v) => {
      o.get(v) && s(v, !0);
      for (let p = N.getFirstElementChild(v); p; p = N.getNextElementSibling(p))
        u(p);
    }, d = () => {
      !this._updateTimer && i.length && (this._updateTimer = r.setTimeout(() => {
        delete this._updateTimer;
        for (const {
          element: v,
          type: h
        } of i)
          switch (h) {
            case Al:
              l(v);
              break;
            case ji:
              c(v);
              break;
            case jl:
              u(v);
              break;
          }
        i = this._updateQueue = [];
      }, 0));
    }, f = (v) => {
      const h = {};
      for (let p = v; p; p = N.getParentElement(p)) {
        const y = Le(this._tabster, p);
        if (y && (y.groupper && !h.groupper && (h.groupper = y.groupper), y.mover)) {
          h.mover = y.mover;
          break;
        }
      }
      return h;
    };
    i.push({
      element: t,
      type: ji
    }), d(), a.observe(t, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["tabindex"]
    }), this._unobserve = () => {
      a.disconnect();
    };
  }
  getState(t) {
    const r = cn(this._win, t);
    if (r in this._visible) {
      const o = this._visible[r] || Ot.Invisible;
      return {
        isCurrent: this._current ? this._current.get() === t : void 0,
        visibility: o
      };
    }
  }
}
function Gb(e, t, r, o, n, i, a, s) {
  const l = r < n ? n - r : a < e ? e - a : 0, c = o < i ? i - o : s < t ? t - s : 0;
  return l === 0 ? c : c === 0 ? l : Math.sqrt(l * l + c * c);
}
class Kb {
  constructor(t, r) {
    this._init = () => {
      const o = this._win();
      o.addEventListener("keydown", this._onKeyDown, !0), o.addEventListener(xl, this._onMoveFocus), o.addEventListener(Sl, this._onMemorizedElement), this._tabster.focusedElement.subscribe(this._onFocus);
    }, this._onMoverDispose = (o) => {
      delete this._movers[o.id];
    }, this._onFocus = (o) => {
      var n;
      let i = o, a = o;
      for (let s = N.getParentElement(o); s; s = N.getParentElement(s)) {
        const l = (n = Le(this._tabster, s)) === null || n === void 0 ? void 0 : n.mover;
        l && (l.setCurrent(a), i = void 0), !i && this._tabster.focusable.isFocusable(s) && (i = a = s);
      }
    }, this._onKeyDown = async (o) => {
      var n;
      if (this._ignoredInputTimer && (this._win().clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), (n = this._ignoredInputResolve) === null || n === void 0 || n.call(this, !1), o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
        return;
      const i = o.key;
      let a;
      if (i === Ee.ArrowDown ? a = Se.ArrowDown : i === Ee.ArrowRight ? a = Se.ArrowRight : i === Ee.ArrowUp ? a = Se.ArrowUp : i === Ee.ArrowLeft ? a = Se.ArrowLeft : i === Ee.PageDown ? a = Se.PageDown : i === Ee.PageUp ? a = Se.PageUp : i === Ee.Home ? a = Se.Home : i === Ee.End && (a = Se.End), !a)
        return;
      const s = this._tabster.focusedElement.getFocusedElement();
      !s || await this._isIgnoredInput(s, i) || this._moveFocus(s, a, o);
    }, this._onMoveFocus = (o) => {
      var n;
      const i = o.composedPath()[0], a = (n = o.detail) === null || n === void 0 ? void 0 : n.key;
      i && a !== void 0 && !o.defaultPrevented && (this._moveFocus(i, a), o.stopImmediatePropagation());
    }, this._onMemorizedElement = (o) => {
      var n;
      const i = o.composedPath()[0];
      let a = (n = o.detail) === null || n === void 0 ? void 0 : n.memorizedElement;
      if (i) {
        const s = ve.getTabsterContext(this._tabster, i), l = s == null ? void 0 : s.mover;
        l && (a && !N.nodeContains(l.getElement(), a) && (a = void 0), l.setCurrent(a), o.stopImmediatePropagation());
      }
    }, this._tabster = t, this._win = r, this._movers = {}, t.queueInit(this._init);
  }
  dispose() {
    var t;
    const r = this._win();
    this._tabster.focusedElement.unsubscribe(this._onFocus), (t = this._ignoredInputResolve) === null || t === void 0 || t.call(this, !1), this._ignoredInputTimer && (r.clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), r.removeEventListener("keydown", this._onKeyDown, !0), r.removeEventListener(xl, this._onMoveFocus), r.removeEventListener(Sl, this._onMemorizedElement), Object.keys(this._movers).forEach((o) => {
      this._movers[o] && (this._movers[o].dispose(), delete this._movers[o]);
    });
  }
  createMover(t, r, o) {
    process.env.NODE_ENV;
    const n = new Ub(this._tabster, t, this._onMoverDispose, r, o);
    return this._movers[n.id] = n, n;
  }
  moveFocus(t, r) {
    return this._moveFocus(t, r);
  }
  _moveFocus(t, r, o) {
    var n, i;
    const a = this._tabster, s = ve.getTabsterContext(a, t, {
      checkRtl: !0
    });
    if (!s || !s.mover || s.excludedFromMover || o && s.ignoreKeydown(o))
      return null;
    const l = s.mover, c = l.getElement();
    if (s.groupperBeforeMover) {
      const O = s.groupper;
      if (O && !O.isActive(!0)) {
        for (let j = N.getParentElement(O.getElement()); j && j !== c; j = N.getParentElement(j))
          if (!((i = (n = Le(a, j)) === null || n === void 0 ? void 0 : n.groupper) === null || i === void 0) && i.isActive(!0))
            return null;
      } else
        return null;
    }
    if (!c)
      return null;
    const u = a.focusable, d = l.getProps(), f = d.direction || er.Both, v = f === er.Both, h = v || f === er.Vertical, p = v || f === er.Horizontal, y = f === er.GridLinear, g = y || f === er.Grid, _ = d.cyclic;
    let m, k, w, x = 0, E = 0;
    if (g && (w = t.getBoundingClientRect(), x = Math.ceil(w.left), E = Math.floor(w.right)), s.rtl && (r === Se.ArrowRight ? r = Se.ArrowLeft : r === Se.ArrowLeft && (r = Se.ArrowRight)), r === Se.ArrowDown && h || r === Se.ArrowRight && (p || g))
      if (m = u.findNext({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), m && g) {
        const O = Math.ceil(m.getBoundingClientRect().left);
        !y && E > O && (m = void 0);
      } else
        !m && _ && (m = u.findFirst({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === Se.ArrowUp && h || r === Se.ArrowLeft && (p || g))
      if (m = u.findPrev({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), m && g) {
        const O = Math.floor(m.getBoundingClientRect().right);
        !y && O > x && (m = void 0);
      } else
        !m && _ && (m = u.findLast({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === Se.Home)
      g ? u.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (O) => {
          var j;
          if (!u.isFocusable(O))
            return !1;
          const F = Math.ceil((j = O.getBoundingClientRect().left) !== null && j !== void 0 ? j : 0);
          return O !== t && x <= F ? !0 : (m = O, !1);
        }
      }) : m = u.findFirst({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === Se.End)
      g ? u.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        acceptCondition: (O) => {
          var j;
          if (!u.isFocusable(O))
            return !1;
          const F = Math.ceil((j = O.getBoundingClientRect().left) !== null && j !== void 0 ? j : 0);
          return O !== t && x >= F ? !0 : (m = O, !1);
        }
      }) : m = u.findLast({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === Se.PageUp) {
      if (u.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (O) => u.isFocusable(O) ? Cl(this._win, O, l.visibilityTolerance) ? (m = O, !1) : !0 : !1
      }), g && m) {
        const O = Math.ceil(m.getBoundingClientRect().left);
        u.findElement({
          currentElement: m,
          container: c,
          useActiveModalizer: !0,
          acceptCondition: (j) => {
            if (!u.isFocusable(j))
              return !1;
            const F = Math.ceil(j.getBoundingClientRect().left);
            return x < F || O >= F ? !0 : (m = j, !1);
          }
        });
      }
      k = !1;
    } else if (r === Se.PageDown) {
      if (u.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        acceptCondition: (O) => u.isFocusable(O) ? Cl(this._win, O, l.visibilityTolerance) ? (m = O, !1) : !0 : !1
      }), g && m) {
        const O = Math.ceil(m.getBoundingClientRect().left);
        u.findElement({
          currentElement: m,
          container: c,
          useActiveModalizer: !0,
          isBackward: !0,
          acceptCondition: (j) => {
            if (!u.isFocusable(j))
              return !1;
            const F = Math.ceil(j.getBoundingClientRect().left);
            return x > F || O <= F ? !0 : (m = j, !1);
          }
        });
      }
      k = !0;
    } else if (g) {
      const O = r === Se.ArrowUp, j = x, F = Math.ceil(w.top), Z = E, Oe = Math.floor(w.bottom);
      let z, te, Fe = 0;
      u.findAll({
        container: c,
        currentElement: t,
        isBackward: O,
        onElement: (de) => {
          const ye = de.getBoundingClientRect(), R = Math.ceil(ye.left), U = Math.ceil(ye.top), S = Math.floor(ye.right), P = Math.floor(ye.bottom);
          if (O && F < P || !O && Oe > U)
            return !0;
          const M = Math.ceil(Math.min(Z, S)) - Math.floor(Math.max(j, R)), G = Math.ceil(Math.min(Z - j, S - R));
          if (M > 0 && G >= M) {
            const V = M / G;
            V > Fe && (z = de, Fe = V);
          } else if (Fe === 0) {
            const V = Gb(j, F, Z, Oe, R, U, S, P);
            (te === void 0 || V < te) && (te = V, z = de);
          } else if (Fe > 0)
            return !1;
          return !0;
        }
      }), m = z;
    }
    return m && (!o || o && c.dispatchEvent(new Kt({
      by: "mover",
      owner: c,
      next: m,
      relatedEvent: o
    }))) ? (k !== void 0 && wb(this._win, m, k), o && (o.preventDefault(), o.stopImmediatePropagation()), Ct(m), m) : null;
  }
  async _isIgnoredInput(t, r) {
    if (t.getAttribute("aria-expanded") === "true" && t.hasAttribute("aria-activedescendant"))
      return !0;
    if (bd(t, $b)) {
      let o = 0, n = 0, i = 0, a;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
        const s = t.type;
        if (i = (t.value || "").length, s === "email" || s === "number") {
          if (i) {
            const c = N.getSelection(t);
            if (c) {
              const u = c.toString().length, d = r === Ee.ArrowLeft || r === Ee.ArrowUp;
              if (c.modify("extend", d ? "backward" : "forward", "character"), u !== c.toString().length)
                return c.modify("extend", d ? "forward" : "backward", "character"), !0;
              i = 0;
            }
          }
        } else {
          const c = t.selectionStart;
          if (c === null)
            return s === "hidden";
          o = c || 0, n = t.selectionEnd || 0;
        }
      } else
        t.contentEditable === "true" && (a = new (Sb(this._win))((s) => {
          this._ignoredInputResolve = (v) => {
            delete this._ignoredInputResolve, s(v);
          };
          const l = this._win();
          this._ignoredInputTimer && l.clearTimeout(this._ignoredInputTimer);
          const {
            anchorNode: c,
            focusNode: u,
            anchorOffset: d,
            focusOffset: f
          } = N.getSelection(t) || {};
          this._ignoredInputTimer = l.setTimeout(() => {
            var v, h, p;
            delete this._ignoredInputTimer;
            const {
              anchorNode: y,
              focusNode: g,
              anchorOffset: _,
              focusOffset: m
            } = N.getSelection(t) || {};
            if (y !== c || g !== u || _ !== d || m !== f) {
              (v = this._ignoredInputResolve) === null || v === void 0 || v.call(this, !1);
              return;
            }
            if (o = _ || 0, n = m || 0, i = ((h = t.textContent) === null || h === void 0 ? void 0 : h.length) || 0, y && g && N.nodeContains(t, y) && N.nodeContains(t, g) && y !== t) {
              let k = !1;
              const w = (x) => {
                if (x === y)
                  k = !0;
                else if (x === g)
                  return !0;
                const E = x.textContent;
                if (E && !N.getFirstChild(x)) {
                  const j = E.length;
                  k ? g !== y && (n += j) : (o += j, n += j);
                }
                let O = !1;
                for (let j = N.getFirstChild(x); j && !O; j = j.nextSibling)
                  O = w(j);
                return O;
              };
              w(t);
            }
            (p = this._ignoredInputResolve) === null || p === void 0 || p.call(this, !0);
          }, 0);
        }));
      if (a && !await a || o !== n || o > 0 && (r === Ee.ArrowLeft || r === Ee.ArrowUp || r === Ee.Home) || o < i && (r === Ee.ArrowRight || r === Ee.ArrowDown || r === Ee.End))
        return !0;
    }
    return !1;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Xb(e, t, r, o) {
  if (typeof MutationObserver > "u")
    return () => {
    };
  const n = t.getWindow;
  let i;
  const a = (u) => {
    var d, f, v, h, p;
    const y = /* @__PURE__ */ new Set();
    for (const g of u) {
      const _ = g.target, m = g.removedNodes, k = g.addedNodes;
      if (g.type === "attributes")
        g.attributeName === At && (y.has(_) || r(t, _));
      else {
        for (let w = 0; w < m.length; w++) {
          const x = m[w];
          y.add(x), s(x, !0), (f = (d = t._dummyObserver).domChanged) === null || f === void 0 || f.call(d, _);
        }
        for (let w = 0; w < k.length; w++)
          s(k[w]), (h = (v = t._dummyObserver).domChanged) === null || h === void 0 || h.call(v, _);
      }
    }
    y.clear(), (p = t.modalizer) === null || p === void 0 || p.hiddenUpdate();
  };
  function s(u, d) {
    i || (i = Lt(n).elementByUId), l(u, d);
    const f = fs(e, u, (v) => l(v, d));
    if (f)
      for (; f.nextNode(); )
        ;
  }
  function l(u, d) {
    var f;
    if (!u.getAttribute)
      return NodeFilter.FILTER_SKIP;
    const v = u.__tabsterElementUID;
    return v && i && (d ? delete i[v] : (f = i[v]) !== null && f !== void 0 || (i[v] = new Ge(n, u))), (Le(t, u) || u.hasAttribute(At)) && r(t, u, d), NodeFilter.FILTER_SKIP;
  }
  const c = N.createMutationObserver(a);
  return o && s(n().document.body), c.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [At]
  }), () => {
    c.disconnect();
  };
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Yb {
  constructor(t) {
    this._isUncontrolledCompletely = t;
  }
  isUncontrolledCompletely(t, r) {
    var o;
    const n = (o = this._isUncontrolledCompletely) === null || o === void 0 ? void 0 : o.call(this, t, r);
    return n === void 0 ? r : n;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Jb = 10;
class Zb extends So {
  constructor(t, r, o) {
    var n;
    if (super(t, r, o), this._hasFocus = !1, this._onFocusOut = (i) => {
      var a;
      const s = (a = this._element) === null || a === void 0 ? void 0 : a.get();
      s && i.relatedTarget === null && s.dispatchEvent(new Nl()), s && !N.nodeContains(s, i.relatedTarget) && (this._hasFocus = !1);
    }, this._onFocusIn = () => {
      this._hasFocus = !0;
    }, this._props.type === uo.Source) {
      const i = (n = this._element) === null || n === void 0 ? void 0 : n.get();
      i == null || i.addEventListener("focusout", this._onFocusOut), i == null || i.addEventListener("focusin", this._onFocusIn), this._hasFocus = N.nodeContains(i, i && N.getActiveElement(i.ownerDocument));
    }
  }
  dispose() {
    var t;
    if (this._props.type === uo.Source) {
      const r = (t = this._element) === null || t === void 0 ? void 0 : t.get();
      r == null || r.removeEventListener("focusout", this._onFocusOut), r == null || r.removeEventListener("focusin", this._onFocusIn), this._hasFocus && this._tabster.getWindow().document.body.dispatchEvent(new Nl());
    }
  }
}
class Qb {
  constructor(t) {
    this._history = [], this._onRestoreFocus = (r) => {
      this._focusedElementState.cancelAsyncFocus(Bt.Restorer);
      const o = r.composedPath()[0];
      o && this._focusedElementState.requestAsyncFocus(Bt.Restorer, () => this._restoreFocus(o), 0);
    }, this._onFocusIn = (r) => {
      var o;
      if (!r)
        return;
      const n = Le(this._tabster, r);
      ((o = n == null ? void 0 : n.restorer) === null || o === void 0 ? void 0 : o.getProps().type) === uo.Target && this._addToHistory(r);
    }, this._restoreFocus = (r) => {
      var o;
      const n = this._getWindow().document;
      if (N.getActiveElement(n) !== n.body || // clicking on any empty space focuses body - this is can be a false positive
      !this._keyboardNavState.isNavigatingWithKeyboard() && // Source no longer exists on DOM - always restore focus
      N.nodeContains(n.body, r))
        return;
      let i = this._history.pop();
      for (; i && !N.nodeContains(n.body, N.getParentElement(i.get())); )
        i = this._history.pop();
      (o = i == null ? void 0 : i.get()) === null || o === void 0 || o.focus();
    }, this._tabster = t, this._getWindow = t.getWindow, this._getWindow().addEventListener(wa, this._onRestoreFocus), this._keyboardNavState = t.keyboardNavigation, this._focusedElementState = t.focusedElement, this._focusedElementState.subscribe(this._onFocusIn);
  }
  dispose() {
    const t = this._getWindow();
    this._focusedElementState.unsubscribe(this._onFocusIn), this._focusedElementState.cancelAsyncFocus(Bt.Restorer), t.removeEventListener(wa, this._onRestoreFocus);
  }
  _addToHistory(t) {
    var r;
    ((r = this._history[this._history.length - 1]) === null || r === void 0 ? void 0 : r.get()) !== t && (this._history.length > Jb && this._history.shift(), this._history.push(new Ge(this._getWindow, t)));
  }
  createRestorer(t, r) {
    const o = new Zb(this._tabster, t, r);
    return r.type === uo.Target && N.getActiveElement(t.ownerDocument) === t && this._addToHistory(t), o;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class ey {
  constructor(t) {
    this.keyboardNavigation = t.keyboardNavigation, this.focusedElement = t.focusedElement, this.focusable = t.focusable, this.root = t.root, this.uncontrolled = t.uncontrolled, this.core = t;
  }
}
class ty {
  constructor(t, r) {
    var o, n;
    this._forgetMemorizedElements = [], this._wrappers = /* @__PURE__ */ new Set(), this._initQueue = [], this._version = "7.1.0", this._noop = !1, this.getWindow = () => {
      if (!this._win)
        throw new Error("Using disposed Tabster.");
      return this._win;
    }, this._storage = bb(t), this._win = t;
    const i = this.getWindow;
    r != null && r.DOMAPI && pb({
      ...r.DOMAPI
    }), this.keyboardNavigation = new qb(i), this.focusedElement = new Be(this, i), this.focusable = new Db(this), this.root = new ve(this, r == null ? void 0 : r.autoRoot), this.uncontrolled = new Yb(
      // TODO: Remove checkUncontrolledTrappingFocus in the next major version.
      (r == null ? void 0 : r.checkUncontrolledCompletely) || (r == null ? void 0 : r.checkUncontrolledTrappingFocus)
    ), this.controlTab = (o = r == null ? void 0 : r.controlTab) !== null && o !== void 0 ? o : !0, this.rootDummyInputs = !!(r != null && r.rootDummyInputs), this._dummyObserver = new Nb(i), this.getParent = (n = r == null ? void 0 : r.getParent) !== null && n !== void 0 ? n : N.getParentNode, this.internal = {
      stopObserver: () => {
        this._unobserve && (this._unobserve(), delete this._unobserve);
      },
      resumeObserver: (a) => {
        if (!this._unobserve) {
          const s = i().document;
          this._unobserve = Xb(s, this, dd, a);
        }
      }
    }, vd(i), this.queueInit(() => {
      this.internal.resumeObserver(!0);
    });
  }
  /**
   * Merges external props with the current props. Not all
   * props can/should be mergeable, so let's add more as we move on.
   * @param props Tabster props
   */
  _mergeProps(t) {
    var r;
    t && (this.getParent = (r = t.getParent) !== null && r !== void 0 ? r : this.getParent);
  }
  createTabster(t, r) {
    const o = new ey(this);
    return t || this._wrappers.add(o), this._mergeProps(r), o;
  }
  disposeTabster(t, r) {
    r ? this._wrappers.clear() : this._wrappers.delete(t), this._wrappers.size === 0 && this.dispose();
  }
  dispose() {
    var t, r, o, n, i, a, s, l;
    this.internal.stopObserver();
    const c = this._win;
    c == null || c.clearTimeout(this._initTimer), delete this._initTimer, this._initQueue = [], this._forgetMemorizedElements = [], c && this._forgetMemorizedTimer && (c.clearTimeout(this._forgetMemorizedTimer), delete this._forgetMemorizedTimer), (t = this.outline) === null || t === void 0 || t.dispose(), (r = this.crossOrigin) === null || r === void 0 || r.dispose(), (o = this.deloser) === null || o === void 0 || o.dispose(), (n = this.groupper) === null || n === void 0 || n.dispose(), (i = this.mover) === null || i === void 0 || i.dispose(), (a = this.modalizer) === null || a === void 0 || a.dispose(), (s = this.observedElement) === null || s === void 0 || s.dispose(), (l = this.restorer) === null || l === void 0 || l.dispose(), this.keyboardNavigation.dispose(), this.focusable.dispose(), this.focusedElement.dispose(), this.root.dispose(), this._dummyObserver.dispose(), _b(this.getWindow), Pl(this.getWindow), this._storage = /* @__PURE__ */ new WeakMap(), this._wrappers.clear(), c && (mb(c), delete c.__tabsterInstance, delete this._win);
  }
  storageEntry(t, r) {
    const o = this._storage;
    let n = o.get(t);
    return n ? r === !1 && Object.keys(n).length === 0 && o.delete(t) : r === !0 && (n = {}, o.set(t, n)), n;
  }
  forceCleanup() {
    this._win && (this._forgetMemorizedElements.push(this._win.document.body), !this._forgetMemorizedTimer && (this._forgetMemorizedTimer = this._win.setTimeout(() => {
      delete this._forgetMemorizedTimer;
      for (let t = this._forgetMemorizedElements.shift(); t; t = this._forgetMemorizedElements.shift())
        Pl(this.getWindow, t), Be.forgetMemorized(this.focusedElement, t);
    }, 0), hd(this.getWindow, !0)));
  }
  queueInit(t) {
    var r;
    this._win && (this._initQueue.push(t), this._initTimer || (this._initTimer = (r = this._win) === null || r === void 0 ? void 0 : r.setTimeout(() => {
      delete this._initTimer, this.drainInitQueue();
    }, 0)));
  }
  drainInitQueue() {
    if (!this._win)
      return;
    const t = this._initQueue;
    this._initQueue = [], t.forEach((r) => r());
  }
}
function ry(e, t) {
  let r = ly(e);
  return r ? r.createTabster(!1, t) : (r = new ty(e, t), e.__tabsterInstance = r, r.createTabster());
}
function oy(e) {
  const t = e.core;
  return t.groupper || (t.groupper = new Ib(t, t.getWindow)), t.groupper;
}
function ny(e) {
  const t = e.core;
  return t.mover || (t.mover = new Kb(t, t.getWindow)), t.mover;
}
function iy(e, t, r) {
  const o = e.core;
  return o.modalizer || (o.modalizer = new Hb(o, t, r)), o.modalizer;
}
function ay(e) {
  const t = e.core;
  return t.restorer || (t.restorer = new Qb(t)), t.restorer;
}
function sy(e, t) {
  e.core.disposeTabster(e, t);
}
function ly(e) {
  return e.__tabsterInstance;
}
const Eo = () => {
  const { targetDocument: e } = qt(), t = (e == null ? void 0 : e.defaultView) || void 0, r = t == null ? void 0 : t.__tabsterShadowDOMAPI, o = b.useMemo(() => t ? ry(t, {
    autoRoot: {},
    controlTab: !1,
    getParent: Gg,
    checkUncontrolledTrappingFocus: (n) => {
      var i;
      return !!(!((i = n.firstElementChild) === null || i === void 0) && i.hasAttribute("data-is-focus-trap-zone-bumper"));
    },
    DOMAPI: r
  }) : null, [
    t,
    r
  ]);
  return qr(() => () => {
    o && sy(o);
  }, [
    o
  ]), o;
}, Nn = (e) => {
  Eo();
  const t = _d(e, !0);
  return b.useMemo(() => ({
    [ft.TabsterAttributeName]: t
  }), [
    t
  ]);
}, kd = (e = {}) => {
  const {
    circular: t,
    axis: r,
    memorizeCurrent: o = !0,
    tabbable: n,
    ignoreDefaultKeydown: i,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_hasDefault: a
  } = e, s = Eo();
  return s && ny(s), Nn({
    mover: {
      cyclic: !!t,
      direction: cy(r ?? "vertical"),
      memorizeCurrent: o,
      tabbable: n,
      hasDefault: a
    },
    ...i && {
      focusable: {
        ignoreKeydown: i
      }
    }
  });
};
function cy(e) {
  switch (e) {
    case "horizontal":
      return ft.MoverDirections.Horizontal;
    case "grid":
      return ft.MoverDirections.Grid;
    case "grid-linear":
      return ft.MoverDirections.GridLinear;
    case "both":
      return ft.MoverDirections.Both;
    case "vertical":
    default:
      return ft.MoverDirections.Vertical;
  }
}
const uy = (e) => {
  const t = Eo();
  return t && oy(t), Nn({
    groupper: {
      tabbability: dy(e == null ? void 0 : e.tabBehavior)
    },
    focusable: {
      ignoreKeydown: e == null ? void 0 : e.ignoreDefaultKeydown
    }
  });
}, dy = (e) => {
  switch (e) {
    case "unlimited":
      return ft.GroupperTabbabilities.Unlimited;
    case "limited":
      return ft.GroupperTabbabilities.Limited;
    case "limited-trap-focus":
      return ft.GroupperTabbabilities.LimitedTrapFocus;
    default:
      return;
  }
}, xd = () => {
  const e = Eo(), { targetDocument: t } = qt(), r = b.useCallback((s, l) => (e == null ? void 0 : e.focusable.findAll({
    container: s,
    acceptCondition: l
  })) || [], [
    e
  ]), o = b.useCallback((s) => e == null ? void 0 : e.focusable.findFirst({
    container: s
  }), [
    e
  ]), n = b.useCallback((s) => e == null ? void 0 : e.focusable.findLast({
    container: s
  }), [
    e
  ]), i = b.useCallback((s, l = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = l;
    return e.focusable.findNext({
      currentElement: s,
      container: c
    });
  }, [
    e,
    t
  ]), a = b.useCallback((s, l = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = l;
    return e.focusable.findPrev({
      currentElement: s,
      container: c
    });
  }, [
    e,
    t
  ]);
  return {
    findAllFocusable: r,
    findFirstFocusable: o,
    findLastFocusable: n,
    findNextFocusable: i,
    findPrevFocusable: a
  };
}, Fl = "data-fui-focus-visible", Sd = "data-fui-focus-within";
function fy(e, t) {
  if (Ed(e))
    return () => {
    };
  const r = {
    current: void 0
  }, o = ls(t);
  function n(l) {
    o.isNavigatingWithKeyboard() && ma(l) && (r.current = l, l.setAttribute(Fl, ""));
  }
  function i() {
    r.current && (r.current.removeAttribute(Fl), r.current = void 0);
  }
  o.subscribe((l) => {
    l || i();
  });
  const a = (l) => {
    i();
    const c = l.composedPath()[0];
    n(c);
  }, s = (l) => {
    (!l.relatedTarget || ma(l.relatedTarget) && !e.contains(l.relatedTarget)) && i();
  };
  return e.addEventListener(bt, a), e.addEventListener("focusout", s), e.focusVisible = !0, e.contains(t.document.activeElement) && n(t.document.activeElement), () => {
    i(), e.removeEventListener(bt, a), e.removeEventListener("focusout", s), delete e.focusVisible, cs(o);
  };
}
function Ed(e) {
  return e ? e.focusVisible ? !0 : Ed(e == null ? void 0 : e.parentElement) : !1;
}
function Bd(e = {}) {
  const t = qt(), r = b.useRef(null);
  var o;
  const n = (o = e.targetDocument) !== null && o !== void 0 ? o : t.targetDocument;
  return b.useEffect(() => {
    if (n != null && n.defaultView && r.current)
      return fy(r.current, n.defaultView);
  }, [
    r,
    n
  ]), r;
}
function hy(e, t) {
  const r = ls(t);
  r.subscribe((i) => {
    i || Il(e);
  });
  const o = (i) => {
    r.isNavigatingWithKeyboard() && ql(i.target) && vy(e);
  }, n = (i) => {
    (!i.relatedTarget || ql(i.relatedTarget) && !e.contains(i.relatedTarget)) && Il(e);
  };
  return e.addEventListener(bt, o), e.addEventListener("focusout", n), () => {
    e.removeEventListener(bt, o), e.removeEventListener("focusout", n), cs(r);
  };
}
function vy(e) {
  e.setAttribute(Sd, "");
}
function Il(e) {
  e.removeAttribute(Sd);
}
function ql(e) {
  return e ? !!(e && typeof e == "object" && "classList" in e && "contains" in e) : !1;
}
function Zn() {
  const { targetDocument: e } = qt(), t = b.useRef(null);
  return b.useEffect(() => {
    if (e != null && e.defaultView && t.current)
      return hy(t.current, e.defaultView);
  }, [
    t,
    e
  ]), t;
}
const Nd = (e = {}) => {
  const { trapFocus: t, alwaysFocusable: r, legacyTrapFocus: o } = e, n = Eo();
  n && (iy(n), ay(n));
  const i = ko("modal-", e.id), a = Nn({
    restorer: {
      type: ft.RestorerTypes.Source
    },
    ...t && {
      modalizer: {
        id: i,
        isOthersAccessible: !t,
        isAlwaysAccessible: r,
        isTrapped: o && t
      }
    }
  }), s = Nn({
    restorer: {
      type: ft.RestorerTypes.Target
    }
  });
  return {
    modalAttributes: a,
    triggerAttributes: s
  };
}, py = {
  // Color tokens
  colorNeutralForeground1: "var(--colorNeutralForeground1)",
  colorNeutralForeground1Hover: "var(--colorNeutralForeground1Hover)",
  colorNeutralForeground1Pressed: "var(--colorNeutralForeground1Pressed)",
  colorNeutralForeground1Selected: "var(--colorNeutralForeground1Selected)",
  colorNeutralForeground2: "var(--colorNeutralForeground2)",
  colorNeutralForeground2Hover: "var(--colorNeutralForeground2Hover)",
  colorNeutralForeground2Pressed: "var(--colorNeutralForeground2Pressed)",
  colorNeutralForeground2Selected: "var(--colorNeutralForeground2Selected)",
  colorNeutralForeground2BrandHover: "var(--colorNeutralForeground2BrandHover)",
  colorNeutralForeground2BrandPressed: "var(--colorNeutralForeground2BrandPressed)",
  colorNeutralForeground2BrandSelected: "var(--colorNeutralForeground2BrandSelected)",
  colorNeutralForeground3: "var(--colorNeutralForeground3)",
  colorNeutralForeground3Hover: "var(--colorNeutralForeground3Hover)",
  colorNeutralForeground3Pressed: "var(--colorNeutralForeground3Pressed)",
  colorNeutralForeground3Selected: "var(--colorNeutralForeground3Selected)",
  colorNeutralForeground3BrandHover: "var(--colorNeutralForeground3BrandHover)",
  colorNeutralForeground3BrandPressed: "var(--colorNeutralForeground3BrandPressed)",
  colorNeutralForeground3BrandSelected: "var(--colorNeutralForeground3BrandSelected)",
  colorNeutralForeground4: "var(--colorNeutralForeground4)",
  colorNeutralForegroundDisabled: "var(--colorNeutralForegroundDisabled)",
  colorBrandForegroundLink: "var(--colorBrandForegroundLink)",
  colorBrandForegroundLinkHover: "var(--colorBrandForegroundLinkHover)",
  colorBrandForegroundLinkPressed: "var(--colorBrandForegroundLinkPressed)",
  colorBrandForegroundLinkSelected: "var(--colorBrandForegroundLinkSelected)",
  colorNeutralForeground2Link: "var(--colorNeutralForeground2Link)",
  colorNeutralForeground2LinkHover: "var(--colorNeutralForeground2LinkHover)",
  colorNeutralForeground2LinkPressed: "var(--colorNeutralForeground2LinkPressed)",
  colorNeutralForeground2LinkSelected: "var(--colorNeutralForeground2LinkSelected)",
  colorCompoundBrandForeground1: "var(--colorCompoundBrandForeground1)",
  colorCompoundBrandForeground1Hover: "var(--colorCompoundBrandForeground1Hover)",
  colorCompoundBrandForeground1Pressed: "var(--colorCompoundBrandForeground1Pressed)",
  colorNeutralForegroundOnBrand: "var(--colorNeutralForegroundOnBrand)",
  colorNeutralForegroundInverted: "var(--colorNeutralForegroundInverted)",
  colorNeutralForegroundInvertedHover: "var(--colorNeutralForegroundInvertedHover)",
  colorNeutralForegroundInvertedPressed: "var(--colorNeutralForegroundInvertedPressed)",
  colorNeutralForegroundInvertedSelected: "var(--colorNeutralForegroundInvertedSelected)",
  colorNeutralForegroundInverted2: "var(--colorNeutralForegroundInverted2)",
  colorNeutralForegroundStaticInverted: "var(--colorNeutralForegroundStaticInverted)",
  colorNeutralForegroundInvertedLink: "var(--colorNeutralForegroundInvertedLink)",
  colorNeutralForegroundInvertedLinkHover: "var(--colorNeutralForegroundInvertedLinkHover)",
  colorNeutralForegroundInvertedLinkPressed: "var(--colorNeutralForegroundInvertedLinkPressed)",
  colorNeutralForegroundInvertedLinkSelected: "var(--colorNeutralForegroundInvertedLinkSelected)",
  colorNeutralForegroundInvertedDisabled: "var(--colorNeutralForegroundInvertedDisabled)",
  colorBrandForeground1: "var(--colorBrandForeground1)",
  colorBrandForeground2: "var(--colorBrandForeground2)",
  colorBrandForeground2Hover: "var(--colorBrandForeground2Hover)",
  colorBrandForeground2Pressed: "var(--colorBrandForeground2Pressed)",
  colorNeutralForeground1Static: "var(--colorNeutralForeground1Static)",
  colorBrandForegroundInverted: "var(--colorBrandForegroundInverted)",
  colorBrandForegroundInvertedHover: "var(--colorBrandForegroundInvertedHover)",
  colorBrandForegroundInvertedPressed: "var(--colorBrandForegroundInvertedPressed)",
  colorBrandForegroundOnLight: "var(--colorBrandForegroundOnLight)",
  colorBrandForegroundOnLightHover: "var(--colorBrandForegroundOnLightHover)",
  colorBrandForegroundOnLightPressed: "var(--colorBrandForegroundOnLightPressed)",
  colorBrandForegroundOnLightSelected: "var(--colorBrandForegroundOnLightSelected)",
  colorNeutralBackground1: "var(--colorNeutralBackground1)",
  colorNeutralBackground1Hover: "var(--colorNeutralBackground1Hover)",
  colorNeutralBackground1Pressed: "var(--colorNeutralBackground1Pressed)",
  colorNeutralBackground1Selected: "var(--colorNeutralBackground1Selected)",
  colorNeutralBackground2: "var(--colorNeutralBackground2)",
  colorNeutralBackground2Hover: "var(--colorNeutralBackground2Hover)",
  colorNeutralBackground2Pressed: "var(--colorNeutralBackground2Pressed)",
  colorNeutralBackground2Selected: "var(--colorNeutralBackground2Selected)",
  colorNeutralBackground3: "var(--colorNeutralBackground3)",
  colorNeutralBackground3Hover: "var(--colorNeutralBackground3Hover)",
  colorNeutralBackground3Pressed: "var(--colorNeutralBackground3Pressed)",
  colorNeutralBackground3Selected: "var(--colorNeutralBackground3Selected)",
  colorNeutralBackground4: "var(--colorNeutralBackground4)",
  colorNeutralBackground4Hover: "var(--colorNeutralBackground4Hover)",
  colorNeutralBackground4Pressed: "var(--colorNeutralBackground4Pressed)",
  colorNeutralBackground4Selected: "var(--colorNeutralBackground4Selected)",
  colorNeutralBackground5: "var(--colorNeutralBackground5)",
  colorNeutralBackground5Hover: "var(--colorNeutralBackground5Hover)",
  colorNeutralBackground5Pressed: "var(--colorNeutralBackground5Pressed)",
  colorNeutralBackground5Selected: "var(--colorNeutralBackground5Selected)",
  colorNeutralBackground6: "var(--colorNeutralBackground6)",
  colorNeutralBackgroundInverted: "var(--colorNeutralBackgroundInverted)",
  colorNeutralBackgroundStatic: "var(--colorNeutralBackgroundStatic)",
  colorNeutralBackgroundAlpha: "var(--colorNeutralBackgroundAlpha)",
  colorNeutralBackgroundAlpha2: "var(--colorNeutralBackgroundAlpha2)",
  colorSubtleBackground: "var(--colorSubtleBackground)",
  colorSubtleBackgroundHover: "var(--colorSubtleBackgroundHover)",
  colorSubtleBackgroundPressed: "var(--colorSubtleBackgroundPressed)",
  colorSubtleBackgroundSelected: "var(--colorSubtleBackgroundSelected)",
  colorSubtleBackgroundLightAlphaHover: "var(--colorSubtleBackgroundLightAlphaHover)",
  colorSubtleBackgroundLightAlphaPressed: "var(--colorSubtleBackgroundLightAlphaPressed)",
  colorSubtleBackgroundLightAlphaSelected: "var(--colorSubtleBackgroundLightAlphaSelected)",
  colorSubtleBackgroundInverted: "var(--colorSubtleBackgroundInverted)",
  colorSubtleBackgroundInvertedHover: "var(--colorSubtleBackgroundInvertedHover)",
  colorSubtleBackgroundInvertedPressed: "var(--colorSubtleBackgroundInvertedPressed)",
  colorSubtleBackgroundInvertedSelected: "var(--colorSubtleBackgroundInvertedSelected)",
  colorTransparentBackground: "var(--colorTransparentBackground)",
  colorTransparentBackgroundHover: "var(--colorTransparentBackgroundHover)",
  colorTransparentBackgroundPressed: "var(--colorTransparentBackgroundPressed)",
  colorTransparentBackgroundSelected: "var(--colorTransparentBackgroundSelected)",
  colorNeutralBackgroundDisabled: "var(--colorNeutralBackgroundDisabled)",
  colorNeutralBackgroundInvertedDisabled: "var(--colorNeutralBackgroundInvertedDisabled)",
  colorNeutralStencil1: "var(--colorNeutralStencil1)",
  colorNeutralStencil2: "var(--colorNeutralStencil2)",
  colorNeutralStencil1Alpha: "var(--colorNeutralStencil1Alpha)",
  colorNeutralStencil2Alpha: "var(--colorNeutralStencil2Alpha)",
  colorBackgroundOverlay: "var(--colorBackgroundOverlay)",
  colorScrollbarOverlay: "var(--colorScrollbarOverlay)",
  colorBrandBackground: "var(--colorBrandBackground)",
  colorBrandBackgroundHover: "var(--colorBrandBackgroundHover)",
  colorBrandBackgroundPressed: "var(--colorBrandBackgroundPressed)",
  colorBrandBackgroundSelected: "var(--colorBrandBackgroundSelected)",
  colorCompoundBrandBackground: "var(--colorCompoundBrandBackground)",
  colorCompoundBrandBackgroundHover: "var(--colorCompoundBrandBackgroundHover)",
  colorCompoundBrandBackgroundPressed: "var(--colorCompoundBrandBackgroundPressed)",
  colorBrandBackgroundStatic: "var(--colorBrandBackgroundStatic)",
  colorBrandBackground2: "var(--colorBrandBackground2)",
  colorBrandBackground2Hover: "var(--colorBrandBackground2Hover)",
  colorBrandBackground2Pressed: "var(--colorBrandBackground2Pressed)",
  colorBrandBackground3Static: "var(--colorBrandBackground3Static)",
  colorBrandBackground4Static: "var(--colorBrandBackground4Static)",
  colorBrandBackgroundInverted: "var(--colorBrandBackgroundInverted)",
  colorBrandBackgroundInvertedHover: "var(--colorBrandBackgroundInvertedHover)",
  colorBrandBackgroundInvertedPressed: "var(--colorBrandBackgroundInvertedPressed)",
  colorBrandBackgroundInvertedSelected: "var(--colorBrandBackgroundInvertedSelected)",
  colorNeutralCardBackground: "var(--colorNeutralCardBackground)",
  colorNeutralCardBackgroundHover: "var(--colorNeutralCardBackgroundHover)",
  colorNeutralCardBackgroundPressed: "var(--colorNeutralCardBackgroundPressed)",
  colorNeutralCardBackgroundSelected: "var(--colorNeutralCardBackgroundSelected)",
  colorNeutralCardBackgroundDisabled: "var(--colorNeutralCardBackgroundDisabled)",
  colorNeutralStrokeAccessible: "var(--colorNeutralStrokeAccessible)",
  colorNeutralStrokeAccessibleHover: "var(--colorNeutralStrokeAccessibleHover)",
  colorNeutralStrokeAccessiblePressed: "var(--colorNeutralStrokeAccessiblePressed)",
  colorNeutralStrokeAccessibleSelected: "var(--colorNeutralStrokeAccessibleSelected)",
  colorNeutralStroke1: "var(--colorNeutralStroke1)",
  colorNeutralStroke1Hover: "var(--colorNeutralStroke1Hover)",
  colorNeutralStroke1Pressed: "var(--colorNeutralStroke1Pressed)",
  colorNeutralStroke1Selected: "var(--colorNeutralStroke1Selected)",
  colorNeutralStroke2: "var(--colorNeutralStroke2)",
  colorNeutralStroke3: "var(--colorNeutralStroke3)",
  colorNeutralStrokeSubtle: "var(--colorNeutralStrokeSubtle)",
  colorNeutralStrokeOnBrand: "var(--colorNeutralStrokeOnBrand)",
  colorNeutralStrokeOnBrand2: "var(--colorNeutralStrokeOnBrand2)",
  colorNeutralStrokeOnBrand2Hover: "var(--colorNeutralStrokeOnBrand2Hover)",
  colorNeutralStrokeOnBrand2Pressed: "var(--colorNeutralStrokeOnBrand2Pressed)",
  colorNeutralStrokeOnBrand2Selected: "var(--colorNeutralStrokeOnBrand2Selected)",
  colorBrandStroke1: "var(--colorBrandStroke1)",
  colorBrandStroke2: "var(--colorBrandStroke2)",
  colorBrandStroke2Hover: "var(--colorBrandStroke2Hover)",
  colorBrandStroke2Pressed: "var(--colorBrandStroke2Pressed)",
  colorBrandStroke2Contrast: "var(--colorBrandStroke2Contrast)",
  colorCompoundBrandStroke: "var(--colorCompoundBrandStroke)",
  colorCompoundBrandStrokeHover: "var(--colorCompoundBrandStrokeHover)",
  colorCompoundBrandStrokePressed: "var(--colorCompoundBrandStrokePressed)",
  colorNeutralStrokeDisabled: "var(--colorNeutralStrokeDisabled)",
  colorNeutralStrokeInvertedDisabled: "var(--colorNeutralStrokeInvertedDisabled)",
  colorTransparentStroke: "var(--colorTransparentStroke)",
  colorTransparentStrokeInteractive: "var(--colorTransparentStrokeInteractive)",
  colorTransparentStrokeDisabled: "var(--colorTransparentStrokeDisabled)",
  colorNeutralStrokeAlpha: "var(--colorNeutralStrokeAlpha)",
  colorNeutralStrokeAlpha2: "var(--colorNeutralStrokeAlpha2)",
  colorStrokeFocus1: "var(--colorStrokeFocus1)",
  colorStrokeFocus2: "var(--colorStrokeFocus2)",
  colorNeutralShadowAmbient: "var(--colorNeutralShadowAmbient)",
  colorNeutralShadowKey: "var(--colorNeutralShadowKey)",
  colorNeutralShadowAmbientLighter: "var(--colorNeutralShadowAmbientLighter)",
  colorNeutralShadowKeyLighter: "var(--colorNeutralShadowKeyLighter)",
  colorNeutralShadowAmbientDarker: "var(--colorNeutralShadowAmbientDarker)",
  colorNeutralShadowKeyDarker: "var(--colorNeutralShadowKeyDarker)",
  colorBrandShadowAmbient: "var(--colorBrandShadowAmbient)",
  colorBrandShadowKey: "var(--colorBrandShadowKey)",
  // Color palette tokens
  // Color palette red tokens
  colorPaletteRedBackground1: "var(--colorPaletteRedBackground1)",
  colorPaletteRedBackground2: "var(--colorPaletteRedBackground2)",
  colorPaletteRedBackground3: "var(--colorPaletteRedBackground3)",
  colorPaletteRedBorderActive: "var(--colorPaletteRedBorderActive)",
  colorPaletteRedBorder1: "var(--colorPaletteRedBorder1)",
  colorPaletteRedBorder2: "var(--colorPaletteRedBorder2)",
  colorPaletteRedForeground1: "var(--colorPaletteRedForeground1)",
  colorPaletteRedForeground2: "var(--colorPaletteRedForeground2)",
  colorPaletteRedForeground3: "var(--colorPaletteRedForeground3)",
  colorPaletteRedForegroundInverted: "var(--colorPaletteRedForegroundInverted)",
  // Color palette green tokens
  colorPaletteGreenBackground1: "var(--colorPaletteGreenBackground1)",
  colorPaletteGreenBackground2: "var(--colorPaletteGreenBackground2)",
  colorPaletteGreenBackground3: "var(--colorPaletteGreenBackground3)",
  colorPaletteGreenBorderActive: "var(--colorPaletteGreenBorderActive)",
  colorPaletteGreenBorder1: "var(--colorPaletteGreenBorder1)",
  colorPaletteGreenBorder2: "var(--colorPaletteGreenBorder2)",
  colorPaletteGreenForeground1: "var(--colorPaletteGreenForeground1)",
  colorPaletteGreenForeground2: "var(--colorPaletteGreenForeground2)",
  colorPaletteGreenForeground3: "var(--colorPaletteGreenForeground3)",
  colorPaletteGreenForegroundInverted: "var(--colorPaletteGreenForegroundInverted)",
  // Color palette dark orange tokens
  colorPaletteDarkOrangeBackground1: "var(--colorPaletteDarkOrangeBackground1)",
  colorPaletteDarkOrangeBackground2: "var(--colorPaletteDarkOrangeBackground2)",
  colorPaletteDarkOrangeBackground3: "var(--colorPaletteDarkOrangeBackground3)",
  colorPaletteDarkOrangeBorderActive: "var(--colorPaletteDarkOrangeBorderActive)",
  colorPaletteDarkOrangeBorder1: "var(--colorPaletteDarkOrangeBorder1)",
  colorPaletteDarkOrangeBorder2: "var(--colorPaletteDarkOrangeBorder2)",
  colorPaletteDarkOrangeForeground1: "var(--colorPaletteDarkOrangeForeground1)",
  colorPaletteDarkOrangeForeground2: "var(--colorPaletteDarkOrangeForeground2)",
  colorPaletteDarkOrangeForeground3: "var(--colorPaletteDarkOrangeForeground3)",
  // Color palette yellow tokens
  colorPaletteYellowBackground1: "var(--colorPaletteYellowBackground1)",
  colorPaletteYellowBackground2: "var(--colorPaletteYellowBackground2)",
  colorPaletteYellowBackground3: "var(--colorPaletteYellowBackground3)",
  colorPaletteYellowBorderActive: "var(--colorPaletteYellowBorderActive)",
  colorPaletteYellowBorder1: "var(--colorPaletteYellowBorder1)",
  colorPaletteYellowBorder2: "var(--colorPaletteYellowBorder2)",
  colorPaletteYellowForeground1: "var(--colorPaletteYellowForeground1)",
  colorPaletteYellowForeground2: "var(--colorPaletteYellowForeground2)",
  colorPaletteYellowForeground3: "var(--colorPaletteYellowForeground3)",
  colorPaletteYellowForegroundInverted: "var(--colorPaletteYellowForegroundInverted)",
  // Color palette berry tokens
  colorPaletteBerryBackground1: "var(--colorPaletteBerryBackground1)",
  colorPaletteBerryBackground2: "var(--colorPaletteBerryBackground2)",
  colorPaletteBerryBackground3: "var(--colorPaletteBerryBackground3)",
  colorPaletteBerryBorderActive: "var(--colorPaletteBerryBorderActive)",
  colorPaletteBerryBorder1: "var(--colorPaletteBerryBorder1)",
  colorPaletteBerryBorder2: "var(--colorPaletteBerryBorder2)",
  colorPaletteBerryForeground1: "var(--colorPaletteBerryForeground1)",
  colorPaletteBerryForeground2: "var(--colorPaletteBerryForeground2)",
  colorPaletteBerryForeground3: "var(--colorPaletteBerryForeground3)",
  // Color palette marigold tokens
  colorPaletteMarigoldBackground1: "var(--colorPaletteMarigoldBackground1)",
  colorPaletteMarigoldBackground2: "var(--colorPaletteMarigoldBackground2)",
  colorPaletteMarigoldBackground3: "var(--colorPaletteMarigoldBackground3)",
  colorPaletteMarigoldBorderActive: "var(--colorPaletteMarigoldBorderActive)",
  colorPaletteMarigoldBorder1: "var(--colorPaletteMarigoldBorder1)",
  colorPaletteMarigoldBorder2: "var(--colorPaletteMarigoldBorder2)",
  colorPaletteMarigoldForeground1: "var(--colorPaletteMarigoldForeground1)",
  colorPaletteMarigoldForeground2: "var(--colorPaletteMarigoldForeground2)",
  colorPaletteMarigoldForeground3: "var(--colorPaletteMarigoldForeground3)",
  // Color palette light green tokens
  colorPaletteLightGreenBackground1: "var(--colorPaletteLightGreenBackground1)",
  colorPaletteLightGreenBackground2: "var(--colorPaletteLightGreenBackground2)",
  colorPaletteLightGreenBackground3: "var(--colorPaletteLightGreenBackground3)",
  colorPaletteLightGreenBorderActive: "var(--colorPaletteLightGreenBorderActive)",
  colorPaletteLightGreenBorder1: "var(--colorPaletteLightGreenBorder1)",
  colorPaletteLightGreenBorder2: "var(--colorPaletteLightGreenBorder2)",
  colorPaletteLightGreenForeground1: "var(--colorPaletteLightGreenForeground1)",
  colorPaletteLightGreenForeground2: "var(--colorPaletteLightGreenForeground2)",
  colorPaletteLightGreenForeground3: "var(--colorPaletteLightGreenForeground3)",
  // Color palette anchor tokens
  colorPaletteAnchorBackground2: "var(--colorPaletteAnchorBackground2)",
  colorPaletteAnchorBorderActive: "var(--colorPaletteAnchorBorderActive)",
  colorPaletteAnchorForeground2: "var(--colorPaletteAnchorForeground2)",
  // Color palette beige tokens
  colorPaletteBeigeBackground2: "var(--colorPaletteBeigeBackground2)",
  colorPaletteBeigeBorderActive: "var(--colorPaletteBeigeBorderActive)",
  colorPaletteBeigeForeground2: "var(--colorPaletteBeigeForeground2)",
  // Color palette blue tokens
  colorPaletteBlueBackground2: "var(--colorPaletteBlueBackground2)",
  colorPaletteBlueBorderActive: "var(--colorPaletteBlueBorderActive)",
  colorPaletteBlueForeground2: "var(--colorPaletteBlueForeground2)",
  // Color palette brass tokens
  colorPaletteBrassBackground2: "var(--colorPaletteBrassBackground2)",
  colorPaletteBrassBorderActive: "var(--colorPaletteBrassBorderActive)",
  colorPaletteBrassForeground2: "var(--colorPaletteBrassForeground2)",
  // Color palette brown tokens
  colorPaletteBrownBackground2: "var(--colorPaletteBrownBackground2)",
  colorPaletteBrownBorderActive: "var(--colorPaletteBrownBorderActive)",
  colorPaletteBrownForeground2: "var(--colorPaletteBrownForeground2)",
  // Color palette cornflower tokens
  colorPaletteCornflowerBackground2: "var(--colorPaletteCornflowerBackground2)",
  colorPaletteCornflowerBorderActive: "var(--colorPaletteCornflowerBorderActive)",
  colorPaletteCornflowerForeground2: "var(--colorPaletteCornflowerForeground2)",
  // Color palette cranberry tokens
  colorPaletteCranberryBackground2: "var(--colorPaletteCranberryBackground2)",
  colorPaletteCranberryBorderActive: "var(--colorPaletteCranberryBorderActive)",
  colorPaletteCranberryForeground2: "var(--colorPaletteCranberryForeground2)",
  // Color palette dark green tokens
  colorPaletteDarkGreenBackground2: "var(--colorPaletteDarkGreenBackground2)",
  colorPaletteDarkGreenBorderActive: "var(--colorPaletteDarkGreenBorderActive)",
  colorPaletteDarkGreenForeground2: "var(--colorPaletteDarkGreenForeground2)",
  // Color palette dark red tokens
  colorPaletteDarkRedBackground2: "var(--colorPaletteDarkRedBackground2)",
  colorPaletteDarkRedBorderActive: "var(--colorPaletteDarkRedBorderActive)",
  colorPaletteDarkRedForeground2: "var(--colorPaletteDarkRedForeground2)",
  // Color palette forest tokens
  colorPaletteForestBackground2: "var(--colorPaletteForestBackground2)",
  colorPaletteForestBorderActive: "var(--colorPaletteForestBorderActive)",
  colorPaletteForestForeground2: "var(--colorPaletteForestForeground2)",
  // Color palette gold tokens
  colorPaletteGoldBackground2: "var(--colorPaletteGoldBackground2)",
  colorPaletteGoldBorderActive: "var(--colorPaletteGoldBorderActive)",
  colorPaletteGoldForeground2: "var(--colorPaletteGoldForeground2)",
  // Color palette grape tokens
  colorPaletteGrapeBackground2: "var(--colorPaletteGrapeBackground2)",
  colorPaletteGrapeBorderActive: "var(--colorPaletteGrapeBorderActive)",
  colorPaletteGrapeForeground2: "var(--colorPaletteGrapeForeground2)",
  // Color palette lavender tokens
  colorPaletteLavenderBackground2: "var(--colorPaletteLavenderBackground2)",
  colorPaletteLavenderBorderActive: "var(--colorPaletteLavenderBorderActive)",
  colorPaletteLavenderForeground2: "var(--colorPaletteLavenderForeground2)",
  // Color palette light teal tokens
  colorPaletteLightTealBackground2: "var(--colorPaletteLightTealBackground2)",
  colorPaletteLightTealBorderActive: "var(--colorPaletteLightTealBorderActive)",
  colorPaletteLightTealForeground2: "var(--colorPaletteLightTealForeground2)",
  // Color palette lilac tokens
  colorPaletteLilacBackground2: "var(--colorPaletteLilacBackground2)",
  colorPaletteLilacBorderActive: "var(--colorPaletteLilacBorderActive)",
  colorPaletteLilacForeground2: "var(--colorPaletteLilacForeground2)",
  // Color palette magenta tokens
  colorPaletteMagentaBackground2: "var(--colorPaletteMagentaBackground2)",
  colorPaletteMagentaBorderActive: "var(--colorPaletteMagentaBorderActive)",
  colorPaletteMagentaForeground2: "var(--colorPaletteMagentaForeground2)",
  // Color palette mink tokens
  colorPaletteMinkBackground2: "var(--colorPaletteMinkBackground2)",
  colorPaletteMinkBorderActive: "var(--colorPaletteMinkBorderActive)",
  colorPaletteMinkForeground2: "var(--colorPaletteMinkForeground2)",
  // Color palette navy tokens
  colorPaletteNavyBackground2: "var(--colorPaletteNavyBackground2)",
  colorPaletteNavyBorderActive: "var(--colorPaletteNavyBorderActive)",
  colorPaletteNavyForeground2: "var(--colorPaletteNavyForeground2)",
  // Color palette peach tokens
  colorPalettePeachBackground2: "var(--colorPalettePeachBackground2)",
  colorPalettePeachBorderActive: "var(--colorPalettePeachBorderActive)",
  colorPalettePeachForeground2: "var(--colorPalettePeachForeground2)",
  // Color palette pink tokens
  colorPalettePinkBackground2: "var(--colorPalettePinkBackground2)",
  colorPalettePinkBorderActive: "var(--colorPalettePinkBorderActive)",
  colorPalettePinkForeground2: "var(--colorPalettePinkForeground2)",
  // Color palette platinum tokens
  colorPalettePlatinumBackground2: "var(--colorPalettePlatinumBackground2)",
  colorPalettePlatinumBorderActive: "var(--colorPalettePlatinumBorderActive)",
  colorPalettePlatinumForeground2: "var(--colorPalettePlatinumForeground2)",
  // Color palette plum tokens
  colorPalettePlumBackground2: "var(--colorPalettePlumBackground2)",
  colorPalettePlumBorderActive: "var(--colorPalettePlumBorderActive)",
  colorPalettePlumForeground2: "var(--colorPalettePlumForeground2)",
  // Color palette pumpkin tokens
  colorPalettePumpkinBackground2: "var(--colorPalettePumpkinBackground2)",
  colorPalettePumpkinBorderActive: "var(--colorPalettePumpkinBorderActive)",
  colorPalettePumpkinForeground2: "var(--colorPalettePumpkinForeground2)",
  // Color palette purple tokens
  colorPalettePurpleBackground2: "var(--colorPalettePurpleBackground2)",
  colorPalettePurpleBorderActive: "var(--colorPalettePurpleBorderActive)",
  colorPalettePurpleForeground2: "var(--colorPalettePurpleForeground2)",
  // Color palette royal blue tokens
  colorPaletteRoyalBlueBackground2: "var(--colorPaletteRoyalBlueBackground2)",
  colorPaletteRoyalBlueBorderActive: "var(--colorPaletteRoyalBlueBorderActive)",
  colorPaletteRoyalBlueForeground2: "var(--colorPaletteRoyalBlueForeground2)",
  // Color palette seafoam tokens
  colorPaletteSeafoamBackground2: "var(--colorPaletteSeafoamBackground2)",
  colorPaletteSeafoamBorderActive: "var(--colorPaletteSeafoamBorderActive)",
  colorPaletteSeafoamForeground2: "var(--colorPaletteSeafoamForeground2)",
  // Color palette steel tokens
  colorPaletteSteelBackground2: "var(--colorPaletteSteelBackground2)",
  colorPaletteSteelBorderActive: "var(--colorPaletteSteelBorderActive)",
  colorPaletteSteelForeground2: "var(--colorPaletteSteelForeground2)",
  // Color palette teal tokens
  colorPaletteTealBackground2: "var(--colorPaletteTealBackground2)",
  colorPaletteTealBorderActive: "var(--colorPaletteTealBorderActive)",
  colorPaletteTealForeground2: "var(--colorPaletteTealForeground2)",
  // Color status success tokens
  colorStatusSuccessBackground1: "var(--colorStatusSuccessBackground1)",
  colorStatusSuccessBackground2: "var(--colorStatusSuccessBackground2)",
  colorStatusSuccessBackground3: "var(--colorStatusSuccessBackground3)",
  colorStatusSuccessForeground1: "var(--colorStatusSuccessForeground1)",
  colorStatusSuccessForeground2: "var(--colorStatusSuccessForeground2)",
  colorStatusSuccessForeground3: "var(--colorStatusSuccessForeground3)",
  colorStatusSuccessForegroundInverted: "var(--colorStatusSuccessForegroundInverted)",
  colorStatusSuccessBorderActive: "var(--colorStatusSuccessBorderActive)",
  colorStatusSuccessBorder1: "var(--colorStatusSuccessBorder1)",
  colorStatusSuccessBorder2: "var(--colorStatusSuccessBorder2)",
  // Color status warning tokens
  colorStatusWarningBackground1: "var(--colorStatusWarningBackground1)",
  colorStatusWarningBackground2: "var(--colorStatusWarningBackground2)",
  colorStatusWarningBackground3: "var(--colorStatusWarningBackground3)",
  colorStatusWarningForeground1: "var(--colorStatusWarningForeground1)",
  colorStatusWarningForeground2: "var(--colorStatusWarningForeground2)",
  colorStatusWarningForeground3: "var(--colorStatusWarningForeground3)",
  colorStatusWarningForegroundInverted: "var(--colorStatusWarningForegroundInverted)",
  colorStatusWarningBorderActive: "var(--colorStatusWarningBorderActive)",
  colorStatusWarningBorder1: "var(--colorStatusWarningBorder1)",
  colorStatusWarningBorder2: "var(--colorStatusWarningBorder2)",
  // Color status danger tokens
  colorStatusDangerBackground1: "var(--colorStatusDangerBackground1)",
  colorStatusDangerBackground2: "var(--colorStatusDangerBackground2)",
  colorStatusDangerBackground3: "var(--colorStatusDangerBackground3)",
  colorStatusDangerBackground3Hover: "var(--colorStatusDangerBackground3Hover)",
  colorStatusDangerBackground3Pressed: "var(--colorStatusDangerBackground3Pressed)",
  colorStatusDangerForeground1: "var(--colorStatusDangerForeground1)",
  colorStatusDangerForeground2: "var(--colorStatusDangerForeground2)",
  colorStatusDangerForeground3: "var(--colorStatusDangerForeground3)",
  colorStatusDangerForegroundInverted: "var(--colorStatusDangerForegroundInverted)",
  colorStatusDangerBorderActive: "var(--colorStatusDangerBorderActive)",
  colorStatusDangerBorder1: "var(--colorStatusDangerBorder1)",
  colorStatusDangerBorder2: "var(--colorStatusDangerBorder2)",
  // Border radius tokens
  borderRadiusNone: "var(--borderRadiusNone)",
  borderRadiusSmall: "var(--borderRadiusSmall)",
  borderRadiusMedium: "var(--borderRadiusMedium)",
  borderRadiusLarge: "var(--borderRadiusLarge)",
  borderRadiusXLarge: "var(--borderRadiusXLarge)",
  borderRadiusCircular: "var(--borderRadiusCircular)",
  // Font family tokens
  fontFamilyBase: "var(--fontFamilyBase)",
  fontFamilyMonospace: "var(--fontFamilyMonospace)",
  fontFamilyNumeric: "var(--fontFamilyNumeric)",
  // Font size tokens
  fontSizeBase100: "var(--fontSizeBase100)",
  fontSizeBase200: "var(--fontSizeBase200)",
  fontSizeBase300: "var(--fontSizeBase300)",
  fontSizeBase400: "var(--fontSizeBase400)",
  fontSizeBase500: "var(--fontSizeBase500)",
  fontSizeBase600: "var(--fontSizeBase600)",
  fontSizeHero700: "var(--fontSizeHero700)",
  fontSizeHero800: "var(--fontSizeHero800)",
  fontSizeHero900: "var(--fontSizeHero900)",
  fontSizeHero1000: "var(--fontSizeHero1000)",
  // Font weight tokens
  fontWeightRegular: "var(--fontWeightRegular)",
  fontWeightMedium: "var(--fontWeightMedium)",
  fontWeightSemibold: "var(--fontWeightSemibold)",
  fontWeightBold: "var(--fontWeightBold)",
  // Line height tokens
  lineHeightBase100: "var(--lineHeightBase100)",
  lineHeightBase200: "var(--lineHeightBase200)",
  lineHeightBase300: "var(--lineHeightBase300)",
  lineHeightBase400: "var(--lineHeightBase400)",
  lineHeightBase500: "var(--lineHeightBase500)",
  lineHeightBase600: "var(--lineHeightBase600)",
  lineHeightHero700: "var(--lineHeightHero700)",
  lineHeightHero800: "var(--lineHeightHero800)",
  lineHeightHero900: "var(--lineHeightHero900)",
  lineHeightHero1000: "var(--lineHeightHero1000)",
  // Shadow tokens
  shadow2: "var(--shadow2)",
  shadow4: "var(--shadow4)",
  shadow8: "var(--shadow8)",
  shadow16: "var(--shadow16)",
  shadow28: "var(--shadow28)",
  shadow64: "var(--shadow64)",
  // Shadow brand tokens
  shadow2Brand: "var(--shadow2Brand)",
  shadow4Brand: "var(--shadow4Brand)",
  shadow8Brand: "var(--shadow8Brand)",
  shadow16Brand: "var(--shadow16Brand)",
  shadow28Brand: "var(--shadow28Brand)",
  shadow64Brand: "var(--shadow64Brand)",
  // Stroke width tokens
  strokeWidthThin: "var(--strokeWidthThin)",
  strokeWidthThick: "var(--strokeWidthThick)",
  strokeWidthThicker: "var(--strokeWidthThicker)",
  strokeWidthThickest: "var(--strokeWidthThickest)",
  // Spacings
  spacingHorizontalNone: "var(--spacingHorizontalNone)",
  spacingHorizontalXXS: "var(--spacingHorizontalXXS)",
  spacingHorizontalXS: "var(--spacingHorizontalXS)",
  spacingHorizontalSNudge: "var(--spacingHorizontalSNudge)",
  spacingHorizontalS: "var(--spacingHorizontalS)",
  spacingHorizontalMNudge: "var(--spacingHorizontalMNudge)",
  spacingHorizontalM: "var(--spacingHorizontalM)",
  spacingHorizontalL: "var(--spacingHorizontalL)",
  spacingHorizontalXL: "var(--spacingHorizontalXL)",
  spacingHorizontalXXL: "var(--spacingHorizontalXXL)",
  spacingHorizontalXXXL: "var(--spacingHorizontalXXXL)",
  spacingVerticalNone: "var(--spacingVerticalNone)",
  spacingVerticalXXS: "var(--spacingVerticalXXS)",
  spacingVerticalXS: "var(--spacingVerticalXS)",
  spacingVerticalSNudge: "var(--spacingVerticalSNudge)",
  spacingVerticalS: "var(--spacingVerticalS)",
  spacingVerticalMNudge: "var(--spacingVerticalMNudge)",
  spacingVerticalM: "var(--spacingVerticalM)",
  spacingVerticalL: "var(--spacingVerticalL)",
  spacingVerticalXL: "var(--spacingVerticalXL)",
  spacingVerticalXXL: "var(--spacingVerticalXXL)",
  spacingVerticalXXXL: "var(--spacingVerticalXXXL)",
  // Durations
  durationUltraFast: "var(--durationUltraFast)",
  durationFaster: "var(--durationFaster)",
  durationFast: "var(--durationFast)",
  durationNormal: "var(--durationNormal)",
  durationGentle: "var(--durationGentle)",
  durationSlow: "var(--durationSlow)",
  durationSlower: "var(--durationSlower)",
  durationUltraSlow: "var(--durationUltraSlow)",
  // Curves
  curveAccelerateMax: "var(--curveAccelerateMax)",
  curveAccelerateMid: "var(--curveAccelerateMid)",
  curveAccelerateMin: "var(--curveAccelerateMin)",
  curveDecelerateMax: "var(--curveDecelerateMax)",
  curveDecelerateMid: "var(--curveDecelerateMid)",
  curveDecelerateMin: "var(--curveDecelerateMin)",
  curveEasyEaseMax: "var(--curveEasyEaseMax)",
  curveEasyEase: "var(--curveEasyEase)",
  curveLinear: "var(--curveLinear)"
};
var xa = { exports: {} }, Fi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml;
function gy() {
  return Ml || (Ml = 1, function(e) {
    function t(R, U) {
      var S = R.length;
      R.push(U);
      e:
        for (; 0 < S; ) {
          var P = S - 1 >>> 1, M = R[P];
          if (0 < n(M, U))
            R[P] = U, R[S] = M, S = P;
          else
            break e;
        }
    }
    function r(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0)
        return null;
      var U = R[0], S = R.pop();
      if (S !== U) {
        R[0] = S;
        e:
          for (var P = 0, M = R.length, G = M >>> 1; P < G; ) {
            var V = 2 * (P + 1) - 1, Q = R[V], K = V + 1, J = R[K];
            if (0 > n(Q, S))
              K < M && 0 > n(J, Q) ? (R[P] = J, R[K] = S, P = K) : (R[P] = Q, R[V] = S, P = V);
            else if (K < M && 0 > n(J, S))
              R[P] = J, R[K] = S, P = K;
            else
              break e;
          }
      }
      return U;
    }
    function n(R, U) {
      var S = R.sortIndex - U.sortIndex;
      return S !== 0 ? S : R.id - U.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var a = Date, s = a.now();
      e.unstable_now = function() {
        return a.now() - s;
      };
    }
    var l = [], c = [], u = 1, d = null, f = 3, v = !1, h = !1, p = !1, y = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(R) {
      for (var U = r(c); U !== null; ) {
        if (U.callback === null)
          o(c);
        else if (U.startTime <= R)
          o(c), U.sortIndex = U.expirationTime, t(l, U);
        else
          break;
        U = r(c);
      }
    }
    function k(R) {
      if (p = !1, m(R), !h)
        if (r(l) !== null)
          h = !0, de(w);
        else {
          var U = r(c);
          U !== null && ye(k, U.startTime - R);
        }
    }
    function w(R, U) {
      h = !1, p && (p = !1, g(O), O = -1), v = !0;
      var S = f;
      try {
        for (m(U), d = r(l); d !== null && (!(d.expirationTime > U) || R && !Z()); ) {
          var P = d.callback;
          if (typeof P == "function") {
            d.callback = null, f = d.priorityLevel;
            var M = P(d.expirationTime <= U);
            U = e.unstable_now(), typeof M == "function" ? d.callback = M : d === r(l) && o(l), m(U);
          } else
            o(l);
          d = r(l);
        }
        if (d !== null)
          var G = !0;
        else {
          var V = r(c);
          V !== null && ye(k, V.startTime - U), G = !1;
        }
        return G;
      } finally {
        d = null, f = S, v = !1;
      }
    }
    var x = !1, E = null, O = -1, j = 5, F = -1;
    function Z() {
      return !(e.unstable_now() - F < j);
    }
    function Oe() {
      if (E !== null) {
        var R = e.unstable_now();
        F = R;
        var U = !0;
        try {
          U = E(!0, R);
        } finally {
          U ? z() : (x = !1, E = null);
        }
      } else
        x = !1;
    }
    var z;
    if (typeof _ == "function")
      z = function() {
        _(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var te = new MessageChannel(), Fe = te.port2;
      te.port1.onmessage = Oe, z = function() {
        Fe.postMessage(null);
      };
    } else
      z = function() {
        y(Oe, 0);
      };
    function de(R) {
      E = R, x || (x = !0, z());
    }
    function ye(R, U) {
      O = y(function() {
        R(e.unstable_now());
      }, U);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, e.unstable_continueExecution = function() {
      h || v || (h = !0, de(w));
    }, e.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < R ? Math.floor(1e3 / R) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(l);
    }, e.unstable_next = function(R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = f;
      }
      var S = f;
      f = U;
      try {
        return R();
      } finally {
        f = S;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(R, U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var S = f;
      f = R;
      try {
        return U();
      } finally {
        f = S;
      }
    }, e.unstable_scheduleCallback = function(R, U, S) {
      var P = e.unstable_now();
      switch (typeof S == "object" && S !== null ? (S = S.delay, S = typeof S == "number" && 0 < S ? P + S : P) : S = P, R) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = S + M, R = { id: u++, callback: U, priorityLevel: R, startTime: S, expirationTime: M, sortIndex: -1 }, S > P ? (R.sortIndex = S, t(c, R), r(l) === null && R === r(c) && (p ? (g(O), O = -1) : p = !0, ye(k, S - P))) : (R.sortIndex = M, t(l, R), h || v || (h = !0, de(w))), R;
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(R) {
      var U = f;
      return function() {
        var S = f;
        f = U;
        try {
          return R.apply(this, arguments);
        } finally {
          f = S;
        }
      };
    };
  }(Fi)), Fi;
}
var Ii = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll;
function my() {
  return Ll || (Ll = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, r = !1, o = 5;
      function n(q, Y) {
        var ne = q.length;
        q.push(Y), s(q, Y, ne);
      }
      function i(q) {
        return q.length === 0 ? null : q[0];
      }
      function a(q) {
        if (q.length === 0)
          return null;
        var Y = q[0], ne = q.pop();
        return ne !== Y && (q[0] = ne, l(q, ne, 0)), Y;
      }
      function s(q, Y, ne) {
        for (var we = ne; we > 0; ) {
          var Ae = we - 1 >>> 1, ut = q[Ae];
          if (c(ut, Y) > 0)
            q[Ae] = Y, q[we] = ut, we = Ae;
          else
            return;
        }
      }
      function l(q, Y, ne) {
        for (var we = ne, Ae = q.length, ut = Ae >>> 1; we < ut; ) {
          var He = (we + 1) * 2 - 1, _r = q[He], $e = He + 1, qo = q[$e];
          if (c(_r, Y) < 0)
            $e < Ae && c(qo, _r) < 0 ? (q[we] = qo, q[$e] = Y, we = $e) : (q[we] = _r, q[He] = Y, we = He);
          else if ($e < Ae && c(qo, Y) < 0)
            q[we] = qo, q[$e] = Y, we = $e;
          else
            return;
        }
      }
      function c(q, Y) {
        var ne = q.sortIndex - Y.sortIndex;
        return ne !== 0 ? ne : q.id - Y.id;
      }
      var u = 1, d = 2, f = 3, v = 4, h = 5;
      function p(q, Y) {
      }
      var y = typeof performance == "object" && typeof performance.now == "function";
      if (y) {
        var g = performance;
        e.unstable_now = function() {
          return g.now();
        };
      } else {
        var _ = Date, m = _.now();
        e.unstable_now = function() {
          return _.now() - m;
        };
      }
      var k = 1073741823, w = -1, x = 250, E = 5e3, O = 1e4, j = k, F = [], Z = [], Oe = 1, z = null, te = f, Fe = !1, de = !1, ye = !1, R = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function P(q) {
        for (var Y = i(Z); Y !== null; ) {
          if (Y.callback === null)
            a(Z);
          else if (Y.startTime <= q)
            a(Z), Y.sortIndex = Y.expirationTime, n(F, Y);
          else
            return;
          Y = i(Z);
        }
      }
      function M(q) {
        if (ye = !1, P(q), !de)
          if (i(F) !== null)
            de = !0, wi(G);
          else {
            var Y = i(Z);
            Y !== null && ki(M, Y.startTime - q);
          }
      }
      function G(q, Y) {
        de = !1, ye && (ye = !1, Xs()), Fe = !0;
        var ne = te;
        try {
          var we;
          if (!r)
            return V(q, Y);
        } finally {
          z = null, te = ne, Fe = !1;
        }
      }
      function V(q, Y) {
        var ne = Y;
        for (P(ne), z = i(F); z !== null && !t && !(z.expirationTime > ne && (!q || Gs())); ) {
          var we = z.callback;
          if (typeof we == "function") {
            z.callback = null, te = z.priorityLevel;
            var Ae = z.expirationTime <= ne, ut = we(Ae);
            ne = e.unstable_now(), typeof ut == "function" ? z.callback = ut : z === i(F) && a(F), P(ne);
          } else
            a(F);
          z = i(F);
        }
        if (z !== null)
          return !0;
        var He = i(Z);
        return He !== null && ki(M, He.startTime - ne), !1;
      }
      function Q(q, Y) {
        switch (q) {
          case u:
          case d:
          case f:
          case v:
          case h:
            break;
          default:
            q = f;
        }
        var ne = te;
        te = q;
        try {
          return Y();
        } finally {
          te = ne;
        }
      }
      function K(q) {
        var Y;
        switch (te) {
          case u:
          case d:
          case f:
            Y = f;
            break;
          default:
            Y = te;
            break;
        }
        var ne = te;
        te = Y;
        try {
          return q();
        } finally {
          te = ne;
        }
      }
      function J(q) {
        var Y = te;
        return function() {
          var ne = te;
          te = Y;
          try {
            return q.apply(this, arguments);
          } finally {
            te = ne;
          }
        };
      }
      function re(q, Y, ne) {
        var we = e.unstable_now(), Ae;
        if (typeof ne == "object" && ne !== null) {
          var ut = ne.delay;
          typeof ut == "number" && ut > 0 ? Ae = we + ut : Ae = we;
        } else
          Ae = we;
        var He;
        switch (q) {
          case u:
            He = w;
            break;
          case d:
            He = x;
            break;
          case h:
            He = j;
            break;
          case v:
            He = O;
            break;
          case f:
          default:
            He = E;
            break;
        }
        var _r = Ae + He, $e = {
          id: Oe++,
          callback: Y,
          priorityLevel: q,
          startTime: Ae,
          expirationTime: _r,
          sortIndex: -1
        };
        return Ae > we ? ($e.sortIndex = Ae, n(Z, $e), i(F) === null && $e === i(Z) && (ye ? Xs() : ye = !0, ki(M, Ae - we))) : ($e.sortIndex = _r, n(F, $e), !de && !Fe && (de = !0, wi(G))), $e;
      }
      function ae() {
      }
      function oe() {
        !de && !Fe && (de = !0, wi(G));
      }
      function I() {
        return i(F);
      }
      function D(q) {
        q.callback = null;
      }
      function Ie() {
        return te;
      }
      var Qe = !1, Jt = null, bi = -1, yi = o, Us = -1;
      function Gs() {
        var q = e.unstable_now() - Us;
        return !(q < yi);
      }
      function Lh() {
      }
      function Vh(q) {
        if (q < 0 || q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        q > 0 ? yi = Math.floor(1e3 / q) : yi = o;
      }
      var _i = function() {
        if (Jt !== null) {
          var q = e.unstable_now();
          Us = q;
          var Y = !0, ne = !0;
          try {
            ne = Jt(Y, q);
          } finally {
            ne ? Ur() : (Qe = !1, Jt = null);
          }
        } else
          Qe = !1;
      }, Ur;
      if (typeof S == "function")
        Ur = function() {
          S(_i);
        };
      else if (typeof MessageChannel < "u") {
        var Ks = new MessageChannel(), Hh = Ks.port2;
        Ks.port1.onmessage = _i, Ur = function() {
          Hh.postMessage(null);
        };
      } else
        Ur = function() {
          R(_i, 0);
        };
      function wi(q) {
        Jt = q, Qe || (Qe = !0, Ur());
      }
      function ki(q, Y) {
        bi = R(function() {
          q(e.unstable_now());
        }, Y);
      }
      function Xs() {
        U(bi), bi = -1;
      }
      var $h = Lh, Wh = null;
      e.unstable_IdlePriority = h, e.unstable_ImmediatePriority = u, e.unstable_LowPriority = v, e.unstable_NormalPriority = f, e.unstable_Profiling = Wh, e.unstable_UserBlockingPriority = d, e.unstable_cancelCallback = D, e.unstable_continueExecution = oe, e.unstable_forceFrameRate = Vh, e.unstable_getCurrentPriorityLevel = Ie, e.unstable_getFirstCallbackNode = I, e.unstable_next = K, e.unstable_pauseExecution = ae, e.unstable_requestPaint = $h, e.unstable_runWithPriority = Q, e.unstable_scheduleCallback = re, e.unstable_shouldYield = Gs, e.unstable_wrapCallback = J, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ii)), Ii;
}
process.env.NODE_ENV === "production" ? xa.exports = gy() : xa.exports = my();
var Vl = xa.exports;
const by = (e) => {
  const t = (r) => {
    const o = b.useRef(r.value), n = b.useRef(0), i = b.useRef();
    return i.current || (i.current = {
      value: o,
      version: n,
      listeners: []
    }), qr(() => {
      o.current = r.value, n.current += 1, Vl.unstable_runWithPriority(Vl.unstable_NormalPriority, () => {
        i.current.listeners.forEach((a) => {
          a([
            n.current,
            r.value
          ]);
        });
      });
    }, [
      r.value
    ]), b.createElement(e, {
      value: i.current
    }, r.children);
  };
  return process.env.NODE_ENV !== "production" && (t.displayName = "ContextSelector.Provider"), t;
}, yy = (e) => {
  const t = b.createContext({
    value: {
      current: e
    },
    version: {
      current: -1
    },
    listeners: []
  });
  return t.Provider = by(t.Provider), delete t.Consumer, t;
}, _y = (e, t) => {
  const r = b.useContext(e), { value: { current: o }, version: { current: n }, listeners: i } = r, a = t(o), [s, l] = b.useReducer((c, u) => {
    if (!u)
      return [
        o,
        a
      ];
    if (u[0] <= n)
      return $o(c[1], a) ? c : [
        o,
        a
      ];
    try {
      if ($o(c[0], u[1]))
        return c;
      const d = t(u[1]);
      return $o(c[1], d) ? c : [
        u[1],
        d
      ];
    } catch {
    }
    return [
      c[0],
      c[1]
    ];
  }, [
    o,
    a
  ]);
  return $o(s[1], a) || l(void 0), qr(() => (i.push(l), () => {
    const c = i.indexOf(l);
    i.splice(c, 1);
  }), [
    i
  ]), s[1];
};
function wy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const $o = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore fallback to native if it exists (not in IE11)
  typeof Object.is == "function" ? Object.is : wy
);
function ky(e) {
  const t = b.useContext(e);
  return t.version ? t.version.current !== -1 : !1;
}
const un = "Enter", Wo = " ", xy = "Escape";
function vs(e, t) {
  const { disabled: r, disabledFocusable: o = !1, ["aria-disabled"]: n, onClick: i, onKeyDown: a, onKeyUp: s, ...l } = t ?? {}, c = typeof n == "string" ? n === "true" : n, u = r || o || c, d = Et((h) => {
    u ? (h.preventDefault(), h.stopPropagation()) : i == null || i(h);
  }), f = Et((h) => {
    if (a == null || a(h), h.isDefaultPrevented())
      return;
    const p = h.key;
    if (u && (p === un || p === Wo)) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    if (p === Wo) {
      h.preventDefault();
      return;
    } else
      p === un && (h.preventDefault(), h.currentTarget.click());
  }), v = Et((h) => {
    if (s == null || s(h), h.isDefaultPrevented())
      return;
    const p = h.key;
    if (u && (p === un || p === Wo)) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    p === Wo && (h.preventDefault(), h.currentTarget.click());
  });
  if (e === "button" || e === void 0)
    return {
      ...l,
      disabled: r && !o,
      "aria-disabled": o ? !0 : c,
      // onclick should still use internal handler to ensure prevention if disabled
      // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
      onClick: o ? void 0 : d,
      onKeyUp: o ? void 0 : s,
      onKeyDown: o ? void 0 : a
    };
  {
    const h = {
      role: "button",
      tabIndex: r && !o ? void 0 : 0,
      ...l,
      // If it's not a <button> than listeners are required even with disabledFocusable
      // Since you cannot assure the default behavior of the element
      // E.g: <a> will redirect on click
      onClick: d,
      onKeyUp: v,
      onKeyDown: f,
      "aria-disabled": r || o || c
    };
    return e === "a" && u && (h.href = void 0), h;
  }
}
const Sy = b.createContext(void 0), Ey = Sy.Provider;
function By(e) {
  return ma(e) ? {
    element: e
  } : typeof e == "object" ? e === null ? {
    element: null
  } : e : {};
}
var ps = () => b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current, Hl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ny = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = b.useRef(void 0), t = b.useMemo(() => Number(b.version.split(".")[0]), [b.version]);
  if (isNaN(t) || t < 18)
    return !1;
  if (e.current === void 0) {
    let r = ps();
    for (; r && r.return; )
      r = r.return, (r.type === Hl || r.elementType === Hl) && (e.current = !0);
  }
  return !!e.current;
}, $l = /* @__PURE__ */ new WeakSet();
function Ty(e, t) {
  const r = ps();
  b.useEffect(() => {
    if (!$l.has(r)) {
      $l.add(r), e();
      return;
    }
    return e();
  }, t);
}
var Wl = /* @__PURE__ */ new WeakSet();
function Cy(e, t) {
  return b.useMemo(() => {
    const r = ps();
    return Wl.has(r) ? e() : (Wl.add(r), null);
  }, t);
}
function Py(e, t) {
  var r;
  const o = Ny() && process.env.NODE_ENV !== "production", n = o ? Cy : b.useMemo, i = o ? Ty : b.useEffect, [a, s] = (r = n(() => e(), t)) != null ? r : [
    null,
    () => null
  ];
  return i(() => s, t), a;
}
const Oy = /* @__PURE__ */ W({
  root: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "f15twtuk",
    oyh7mz: ["f1vgc2s3", "f1e31b4d"],
    j35jbq: ["f1e31b4d", "f1vgc2s3"],
    Bj3rh1h: "f494woh"
  }
}, {
  d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
}), Ul = b.useInsertionEffect, zy = (e) => {
  const { targetDocument: t, dir: r } = qt(), o = Vg(), n = Bd(), i = Oy(), a = qg(), s = H(a, i.root, e.className), l = o ?? (t == null ? void 0 : t.body), c = Py(() => {
    if (l === void 0 || e.disabled)
      return [
        null,
        () => null
      ];
    const u = l.ownerDocument.createElement("div");
    return l.appendChild(u), [
      u,
      () => u.remove()
    ];
  }, [
    l
  ]);
  return Ul ? Ul(() => {
    if (!c)
      return;
    const u = s.split(" ").filter(Boolean);
    return c.classList.add(...u), c.setAttribute("dir", r), c.setAttribute("data-portal-node", "true"), n.current = c, () => {
      c.classList.remove(...u), c.removeAttribute("dir");
    };
  }, [
    s,
    r,
    c,
    n
  ]) : b.useMemo(() => {
    c && (c.className = s, c.setAttribute("dir", r), c.setAttribute("data-portal-node", "true"), n.current = c);
  }, [
    s,
    r,
    c,
    n
  ]), c;
}, Ry = (e) => {
  const { element: t, className: r } = By(e.mountNode), o = b.useRef(null), n = zy({
    disabled: !!t,
    className: r
  }), i = t ?? n, a = {
    children: e.children,
    mountNode: i,
    virtualParentRootRef: o
  };
  return b.useEffect(() => {
    if (!i)
      return;
    const s = o.current, l = i.contains(s);
    if (s && !l)
      return yl(i, s), () => {
        yl(i, void 0);
      };
  }, [
    o,
    i
  ]), a;
}, Dy = (e) => /* @__PURE__ */ b.createElement("span", {
  hidden: !0,
  ref: e.virtualParentRootRef
}, e.mountNode && /* @__PURE__ */ Jh.createPortal(e.children, e.mountNode)), Td = (e) => {
  const t = Ry(e);
  return Dy(t);
};
Td.displayName = "Portal";
const Cd = (e) => {
  ge(e);
  const { iconOnly: t, iconPosition: r } = e;
  return /* @__PURE__ */ Ve(e.root, {
    children: [
      r !== "after" && e.icon && /* @__PURE__ */ $(e.icon, {}),
      !t && e.root.children,
      r === "after" && e.icon && /* @__PURE__ */ $(e.icon, {})
    ]
  });
}, Pd = b.createContext(void 0), Ay = {};
Pd.Provider;
const jy = () => {
  var e;
  return (e = b.useContext(Pd)) !== null && e !== void 0 ? e : Ay;
}, Od = (e, t) => {
  const { size: r } = jy(), { appearance: o = "secondary", as: n = "button", disabled: i = !1, disabledFocusable: a = !1, icon: s, iconPosition: l = "before", shape: c = "rounded", size: u = r ?? "medium" } = e, d = xe(s, {
    elementType: "span"
  });
  return {
    // Props passed at the top-level
    appearance: o,
    disabled: i,
    disabledFocusable: a,
    iconPosition: l,
    shape: c,
    size: u,
    iconOnly: !!(d != null && d.children && !e.children),
    components: {
      root: "button",
      icon: "span"
    },
    root: le(Ce(n, vs(e.as, e)), {
      elementType: "button",
      defaultProps: {
        ref: t,
        type: "button"
      }
    }),
    icon: d
  };
}, Gl = {
  root: "fui-Button",
  icon: "fui-Button__icon"
}, Fy = /* @__PURE__ */ _e("r1alrhcs", null, {
  r: [".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
}), Iy = /* @__PURE__ */ _e("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]), qy = /* @__PURE__ */ W({
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "fjxutwb",
    iro3zm: "fwiml72"
  },
  primary: {
    De3pzq: "ffp7eso",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "f1phragk",
    Jwef8y: "f15wkkf3",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f1rq72xc",
    iro3zm: "fnp9lpt",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1d6v5y2",
    Bsw6fvg: "f1rirnrt",
    Bjwas2f: "f1uu00uk",
    Bn1d65q: ["fkvaka8", "f9a0qzu"],
    Bxeuatn: "f1ux7til",
    n51gp8: ["f9a0qzu", "fkvaka8"],
    Bbusuzp: "f1lkg8j3",
    ycbfsm: "fkc42ay",
    Bqrx1nm: "fq7113v",
    pgvf35: "ff1wgvm",
    Bh7lczh: ["fiob0tu", "f1x4h75k"],
    dpv3f4: "f1j6scgf",
    Bpnjhaq: ["f1x4h75k", "fiob0tu"],
    ze5xyy: "f4xjyn1",
    g2kj27: "fbgcvur",
    Bf756sw: "f1ks1yx8",
    Bow2dr7: ["f1o6qegi", "fmxjhhp"],
    Bvhedfk: "fcnxywj",
    Gye4lf: ["fmxjhhp", "f1o6qegi"],
    pc6evw: "f9ddjv3"
  },
  secondary: {},
  subtle: {
    De3pzq: "fhovq9v",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "f1t94bn6",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "fnwyq0v",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    Bbdnnc7: "fy5bs14",
    iro3zm: "fsv2rcd",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1omzyqd",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    x3br3k: "fj8yq94",
    ze5xyy: "f4xjyn1",
    Bx3q9su: "f1et0tmh",
    pc6evw: "f9ddjv3",
    xd2cci: "f1wi8ngl"
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "fjxutwb",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f139oj5f",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    iro3zm: "fwiml72",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1fg1p5m",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    Bqrx1nm: "f1tme0vf",
    ze5xyy: "f4xjyn1",
    g2kj27: "f18onu3q",
    pc6evw: "f9ddjv3"
  },
  circular: {
    Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
    Beyfa6y: ["f1nfllo7", "f8fbkgy"],
    B7oj6ja: ["f1djnp8u", "f1s8kh49"],
    Btl43ni: ["f1s8kh49", "f1djnp8u"]
  },
  rounded: {},
  square: {
    Bbmb7ep: ["fzi6hpg", "fyowgf4"],
    Beyfa6y: ["fyowgf4", "fzi6hpg"],
    B7oj6ja: ["f3fg2lr", "f13av6d4"],
    Btl43ni: ["f13av6d4", "f3fg2lr"]
  },
  small: {
    Bf4jedk: "fh7ncta",
    z8tnut: "f1khb0e9",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1jnq6q7",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  smallWithIcon: {
    Byoj8tv: "f1brlhvm",
    z8tnut: "f1sl3k7w"
  },
  medium: {},
  large: {
    Bf4jedk: "f14es27b",
    z8tnut: "fp9bwmr",
    z189sj: ["fjodcmx", "fhx4nu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["fhx4nu", "fjodcmx"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  largeWithIcon: {
    Byoj8tv: "fy7v416",
    z8tnut: "f1a1bwwz"
  }
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}", ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}", ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}", ".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}", ".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}", ".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}", ".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}", ".fh7ncta{min-width:64px;}", ".f1khb0e9{padding-top:3px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1jnq6q7{padding-bottom:3px;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", ".fp9bwmr{padding-top:8px;}", ".fjodcmx{padding-right:var(--spacingHorizontalL);}", ".fhx4nu{padding-left:var(--spacingHorizontalL);}", ".f150uoa4{padding-bottom:8px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
  h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}", ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".ft1hn21:hover .fui-Icon-filled{display:inline;}", ".fuxngvv:hover .fui-Icon-regular{display:none;}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}", ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}", ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}", ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],
  m: [["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }]]
}), My = /* @__PURE__ */ W({
  base: {
    De3pzq: "f1bg9a2p",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    Bfinmwp: "f15x8b5r",
    Jwef8y: "f1falr9n",
    Bgoe8wy: "f12mpcsy",
    Bwzppfd: ["f1gwvigk", "f18rmfxp"],
    oetu4i: "f1jnshp0",
    gg5e9n: ["f18rmfxp", "f1gwvigk"],
    Bi91k9c: "fvgxktp",
    eoavqd: "fphbwmw",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    Bbdnnc7: "f1al02dq",
    iro3zm: "f1t6o4dc",
    b661bw: "f10ztigi",
    Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
    B9zn80p: "f12zbtn2",
    Bpld233: ["f1gzf82w", "f1ft5sdu"],
    B2d53fq: "fcvwxyo",
    c3iz72: "f8w4c43",
    em6i61: "f1ol4fw6",
    vm6p8p: "f1q1lw4e",
    x3br3k: "f1dwjv2g"
  },
  highContrast: {
    Bsw6fvg: "f4lkoma",
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"],
    Bbusuzp: "f1dcs8yz",
    G867l3: "fjwq6ea",
    gdbnj: ["f1lr3nhc", "f1mbxvi6"],
    mxns5l: "fn5gmvv",
    o3nasb: ["f1mbxvi6", "f1lr3nhc"],
    Bqrx1nm: "f1vmkb5g",
    pgvf35: "f53ppgq",
    Bh7lczh: ["f1663y11", "f80fkiy"],
    dpv3f4: "f18v5270",
    Bpnjhaq: ["f80fkiy", "f1663y11"],
    ze5xyy: "f1kc2mi9",
    g2kj27: "f1y0svfh",
    Bf756sw: "fihuait",
    Bow2dr7: ["fnxhupq", "fyd6l6x"],
    Bvhedfk: "fx507ft",
    Gye4lf: ["fyd6l6x", "fnxhupq"],
    pc6evw: "fb3rf2x"
  },
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "f9ql6rf",
    iro3zm: "f3h1zc4"
  },
  primary: {
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  secondary: {},
  subtle: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  }
}, {
  d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
  h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f8w4c43:hover:active{cursor:not-allowed;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}", ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}"],
  m: [["@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
}), Ly = /* @__PURE__ */ W({
  circular: {
    kdpuga: ["fanj13w", "f1gou5sz"],
    Bw81rd7: ["f1gou5sz", "fanj13w"],
    B6xbmo0: ["fulf6x3", "foeb2x"],
    dm238s: ["foeb2x", "fulf6x3"]
  },
  rounded: {},
  square: {
    kdpuga: ["f1ndz5i7", "f1co4qro"],
    Bw81rd7: ["f1co4qro", "f1ndz5i7"],
    B6xbmo0: ["f146y5a9", "f1k2ftg"],
    dm238s: ["f1k2ftg", "f146y5a9"]
  },
  primary: {
    B8q5s1w: "f17t0x8g",
    Bci5o5g: ["f194v5ow", "fk7jm04"],
    n8qw10: "f1qgg65p",
    Bdrgwmp: ["fk7jm04", "f194v5ow"],
    j6ew2k: ["fhgccpy", "fjo7pq6"],
    he4mth: "f32wu9k",
    Byr4aka: "fu5nqqq",
    lks7q5: ["f13prjl2", "f1nl83rv"],
    Bnan3qt: "f1czftr5",
    k1dn9: ["f1nl83rv", "f13prjl2"],
    Boium3a: ["f12k37oa", "fdnykm2"],
    tm8e47: "fr96u23"
  },
  small: {
    kdpuga: ["fg3gtdo", "fwii5mg"],
    Bw81rd7: ["fwii5mg", "fg3gtdo"],
    B6xbmo0: ["f1palphq", "f12nxie7"],
    dm238s: ["f12nxie7", "f1palphq"]
  },
  medium: {},
  large: {
    kdpuga: ["ft3lys4", "f1la4x2g"],
    Bw81rd7: ["f1la4x2g", "ft3lys4"],
    B6xbmo0: ["f156y0zm", "fakimq4"],
    dm238s: ["fakimq4", "f156y0zm"]
  }
}, {
  d: [".fanj13w[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1gou5sz[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusCircular);}", ".fulf6x3[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusCircular);}", ".foeb2x[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusCircular);}", ".f1ndz5i7[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusNone);}", ".f1co4qro[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusNone);}", ".f146y5a9[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusNone);}", ".f1k2ftg[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusNone);}", ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}", ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}", ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}", ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}", ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}", ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}", ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}", ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}", ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}", ".fg3gtdo[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusSmall);}", ".fwii5mg[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1palphq[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusSmall);}", ".f12nxie7[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusSmall);}", ".ft3lys4[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusLarge);}", ".f1la4x2g[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusLarge);}", ".f156y0zm[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusLarge);}", ".fakimq4[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusLarge);}"],
  t: ["@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}", "@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
}), Vy = /* @__PURE__ */ W({
  small: {
    z8tnut: "f1sl3k7w",
    z189sj: ["f136y8j8", "f10xn8zz"],
    Byoj8tv: "f1brlhvm",
    uwmqm3: ["f10xn8zz", "f136y8j8"],
    Bf4jedk: "f17fgpbq",
    B2u0y6b: "f1jt17bm"
  },
  medium: {
    z8tnut: "f1sbtcvk",
    z189sj: ["fwiuce9", "f15vdbe4"],
    Byoj8tv: "fdghr9",
    uwmqm3: ["f15vdbe4", "fwiuce9"],
    Bf4jedk: "fwbmr0d",
    B2u0y6b: "f44c6la"
  },
  large: {
    z8tnut: "f1a1bwwz",
    z189sj: ["f18k1jr3", "f1rtp3s9"],
    Byoj8tv: "fy7v416",
    uwmqm3: ["f1rtp3s9", "f18k1jr3"],
    Bf4jedk: "f12clzc2",
    B2u0y6b: "fjy1crr"
  }
}, {
  d: [".f1sl3k7w{padding-top:1px;}", ".f136y8j8{padding-right:1px;}", ".f10xn8zz{padding-left:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", ".f1sbtcvk{padding-top:5px;}", ".fwiuce9{padding-right:5px;}", ".f15vdbe4{padding-left:5px;}", ".fdghr9{padding-bottom:5px;}", ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", ".f1a1bwwz{padding-top:7px;}", ".f18k1jr3{padding-right:7px;}", ".f1rtp3s9{padding-left:7px;}", ".fy7v416{padding-bottom:7px;}", ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
}), Hy = /* @__PURE__ */ W({
  small: {
    Be2twd7: "fe5j1ua",
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    Bqrlyyl: "fbaiahx"
  },
  medium: {},
  large: {
    Be2twd7: "f1rt2boy",
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    Bqrlyyl: "f1exjqw5"
  },
  before: {
    t21cq0: ["f1nizpg2", "f1a695kz"]
  },
  after: {
    Frg6f3: ["f1a695kz", "f1nizpg2"]
  }
}, {
  d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
}), zd = (e) => {
  const t = Fy(), r = Iy(), o = qy(), n = My(), i = Ly(), a = Vy(), s = Hy(), {
    appearance: l,
    disabled: c,
    disabledFocusable: u,
    icon: d,
    iconOnly: f,
    iconPosition: v,
    shape: h,
    size: p
  } = e;
  return e.root.className = H(
    Gl.root,
    t,
    l && o[l],
    o[p],
    d && p === "small" && o.smallWithIcon,
    d && p === "large" && o.largeWithIcon,
    o[h],
    // Disabled styles
    (c || u) && n.base,
    (c || u) && n.highContrast,
    l && (c || u) && n[l],
    // Focus styles
    l === "primary" && i.primary,
    i[p],
    i[h],
    // Icon-only styles
    f && a[p],
    // User provided class name
    e.root.className
  ), e.icon && (e.icon.className = H(Gl.icon, r, !!e.root.children && s[v], s[p], e.icon.className)), e;
}, tt = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Od(e, t);
  return zd(r), Ne("useButtonStyles_unstable")(r), Cd(r);
});
tt.displayName = "Button";
const Rd = b.createContext(void 0), $y = Rd.Provider, Wy = () => b.useContext(Rd), Uy = (e) => {
  var t, r, o, n;
  const { generatedControlId: i, orientation: a, required: s, size: l, validationState: c } = e, u = (t = e.label) === null || t === void 0 ? void 0 : t.htmlFor, d = (r = e.label) === null || r === void 0 ? void 0 : r.id, f = (o = e.validationMessage) === null || o === void 0 ? void 0 : o.id, v = (n = e.hint) === null || n === void 0 ? void 0 : n.id;
  return {
    field: b.useMemo(() => ({
      generatedControlId: i,
      hintId: v,
      labelFor: u,
      labelId: d,
      orientation: a,
      required: s,
      size: l,
      validationMessageId: f,
      validationState: c
    }), [
      i,
      v,
      u,
      d,
      a,
      s,
      l,
      f,
      c
    ])
  };
};
function gs(e, t) {
  return Dd(Wy(), e, t);
}
function Dd(e, t, r) {
  if (!e)
    return t;
  t = {
    ...t
  };
  const { generatedControlId: o, hintId: n, labelFor: i, labelId: a, required: s, validationMessageId: l, validationState: c } = e;
  if (o) {
    var u, d;
    (d = (u = t).id) !== null && d !== void 0 || (u.id = o);
  }
  if (a && (!(r != null && r.supportsLabelFor) || i !== t.id)) {
    var f, v, h;
    (h = (f = t)[v = "aria-labelledby"]) !== null && h !== void 0 || (f[v] = a);
  }
  if ((l || n) && (t["aria-describedby"] = [
    l,
    n,
    t == null ? void 0 : t["aria-describedby"]
  ].filter(Boolean).join(" ")), c === "error") {
    var p, y, g;
    (g = (p = t)[y = "aria-invalid"]) !== null && g !== void 0 || (p[y] = !0);
  }
  if (s)
    if (r != null && r.supportsRequired) {
      var _, m;
      (m = (_ = t).required) !== null && m !== void 0 || (_.required = !0);
    } else {
      var k, w, x;
      (x = (k = t)[w = "aria-required"]) !== null && x !== void 0 || (k[w] = !0);
    }
  if (r != null && r.supportsSize) {
    var E, O;
    (O = (E = t).size) !== null && O !== void 0 || (E.size = e.size);
  }
  return t;
}
const Gy = (e, t) => {
  ge(e);
  let { children: r } = e;
  return typeof r == "function" && (r = r(Dd(t.field) || {})), /* @__PURE__ */ $($y, {
    value: t == null ? void 0 : t.field,
    children: /* @__PURE__ */ Ve(e.root, {
      children: [
        e.label && /* @__PURE__ */ $(e.label, {}),
        r,
        e.validationMessage && /* @__PURE__ */ Ve(e.validationMessage, {
          children: [
            e.validationMessageIcon && /* @__PURE__ */ $(e.validationMessageIcon, {}),
            e.validationMessage.children
          ]
        }),
        e.hint && /* @__PURE__ */ $(e.hint, {})
      ]
    })
  });
}, Ky = (e, t) => {
  const { disabled: r = !1, required: o = !1, weight: n = "regular", size: i = "medium" } = e;
  return {
    disabled: r,
    required: xe(o === !0 ? "*" : o || void 0, {
      defaultProps: {
        "aria-hidden": "true"
      },
      elementType: "span"
    }),
    weight: n,
    size: i,
    components: {
      root: "label",
      required: "span"
    },
    root: le(Ce("label", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLLabelElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "label"
    })
  };
}, Xy = (e) => (ge(e), /* @__PURE__ */ Ve(e.root, {
  children: [
    e.root.children,
    e.required && /* @__PURE__ */ $(e.required, {})
  ]
})), Kl = {
  root: "fui-Label",
  required: "fui-Label__required"
}, Yy = /* @__PURE__ */ W({
  root: {
    Bahqtrf: "fk6fouc",
    sj55zd: "f19n0e5"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bbusuzp: "f1dcs8yz"
  },
  required: {
    sj55zd: "f1whyuy6",
    uwmqm3: ["fruq291", "f7x41pl"]
  },
  small: {
    Be2twd7: "fy9rknc",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    Be2twd7: "fkhj508",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    Be2twd7: "fod5ikn",
    Bg96gwp: "faaz57k",
    Bhrd7zp: "fl43uef"
  },
  semibold: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".fruq291{padding-left:var(--spacingHorizontalXS);}", ".f7x41pl{padding-right:var(--spacingHorizontalXS);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"],
  m: [["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
}), Jy = (e) => {
  const t = Yy();
  return e.root.className = H(Kl.root, t.root, e.disabled && t.disabled, t[e.size], e.weight === "semibold" && t.semibold, e.root.className), e.required && (e.required.className = H(Kl.required, t.required, e.disabled && t.disabled, e.required.className)), e;
}, cr = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Ky(e, t);
  return Jy(r), Ne("useLabelStyles_unstable")(r), Xy(r);
});
cr.displayName = "Label";
const Zy = {
  error: /* @__PURE__ */ b.createElement(wm, null),
  warning: /* @__PURE__ */ b.createElement(Sm, null),
  success: /* @__PURE__ */ b.createElement(ym, null),
  none: void 0
}, Qy = (e, t) => {
  const { children: r, orientation: o = "vertical", required: n = !1, validationState: i = e.validationMessage ? "error" : "none", size: a = "medium" } = e, s = ko("field-"), l = s + "__control", c = le(Ce(
    "div",
    {
      ...e,
      ref: t
    },
    /*excludedPropNames:*/
    [
      "children"
    ]
  ), {
    elementType: "div"
  }), u = xe(e.label, {
    defaultProps: {
      htmlFor: l,
      id: s + "__label",
      required: n,
      size: a
    },
    elementType: cr
  }), d = xe(e.validationMessage, {
    defaultProps: {
      id: s + "__validationMessage",
      role: i === "error" ? "alert" : void 0
    },
    elementType: "div"
  }), f = xe(e.hint, {
    defaultProps: {
      id: s + "__hint"
    },
    elementType: "div"
  }), v = Zy[i], h = xe(e.validationMessageIcon, {
    renderByDefault: !!v,
    defaultProps: {
      children: v
    },
    elementType: "span"
  });
  return {
    children: r,
    generatedControlId: l,
    orientation: o,
    required: n,
    size: a,
    validationState: i,
    components: {
      root: "div",
      label: cr,
      validationMessage: "div",
      validationMessageIcon: "span",
      hint: "div"
    },
    root: c,
    label: u,
    validationMessageIcon: h,
    validationMessage: d,
    hint: f
  };
}, Gr = {
  root: "fui-Field",
  label: "fui-Field__label",
  validationMessage: "fui-Field__validationMessage",
  validationMessageIcon: "fui-Field__validationMessageIcon",
  hint: "fui-Field__hint"
}, e1 = /* @__PURE__ */ W({
  base: {
    mc9l5x: "f13qh94s"
  },
  horizontal: {
    Budl1dq: "f2wwaib",
    wkccdc: "f1645dqt"
  },
  horizontalNoLabel: {
    uwmqm3: ["f15jqgz8", "fggqkej"],
    Budl1dq: "f1c2z91y"
  }
}, {
  d: [".f13qh94s{display:grid;}", ".f2wwaib{grid-template-columns:33% 1fr;}", ".f1645dqt{grid-template-rows:auto auto auto 1fr;}", ".f15jqgz8{padding-left:33%;}", ".fggqkej{padding-right:33%;}", ".f1c2z91y{grid-template-columns:1fr;}"]
}), t1 = /* @__PURE__ */ W({
  vertical: {
    z8tnut: "fclwglc",
    Byoj8tv: "fywfov9",
    jrapky: "fyacil5"
  },
  verticalLarge: {
    z8tnut: "f1sl3k7w",
    Byoj8tv: "f1brlhvm",
    jrapky: "f8l5zjj"
  },
  horizontal: {
    z8tnut: "fp2oml8",
    Byoj8tv: "f1tdddsa",
    t21cq0: ["fkujibs", "f199hnxi"],
    Ijaq50: "f16hsg94",
    nk6f5a: "f1nzqi2z"
  },
  horizontalSmall: {
    z8tnut: "f1ywm7hm",
    Byoj8tv: "f14wxoun"
  },
  horizontalLarge: {
    z8tnut: "f1hqyr95",
    Byoj8tv: "fm4hlj0"
  }
}, {
  d: [".fclwglc{padding-top:var(--spacingVerticalXXS);}", ".fywfov9{padding-bottom:var(--spacingVerticalXXS);}", ".fyacil5{margin-bottom:var(--spacingVerticalXXS);}", ".f1sl3k7w{padding-top:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}", ".fp2oml8{padding-top:var(--spacingVerticalSNudge);}", ".f1tdddsa{padding-bottom:var(--spacingVerticalSNudge);}", ".fkujibs{margin-right:var(--spacingHorizontalM);}", ".f199hnxi{margin-left:var(--spacingHorizontalM);}", ".f16hsg94{grid-row-start:1;}", ".f1nzqi2z{grid-row-end:-1;}", ".f1ywm7hm{padding-top:var(--spacingVerticalXS);}", ".f14wxoun{padding-bottom:var(--spacingVerticalXS);}", ".f1hqyr95{padding-top:9px;}", ".fm4hlj0{padding-bottom:9px;}"]
}), r1 = /* @__PURE__ */ _e("r5c4z9l", null, [".r5c4z9l{margin-top:var(--spacingVerticalXXS);color:var(--colorNeutralForeground3);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase200);}"]), o1 = /* @__PURE__ */ W({
  error: {
    sj55zd: "f1hcrxcs"
  },
  withIcon: {
    uwmqm3: ["frawy03", "fg4c52"]
  }
}, {
  d: [".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".frawy03{padding-left:calc(12px + var(--spacingHorizontalXS));}", ".fg4c52{padding-right:calc(12px + var(--spacingHorizontalXS));}"]
}), n1 = /* @__PURE__ */ _e("ra7h1uk", "r1rh6bd7", [".ra7h1uk{display:inline-block;font-size:12px;margin-left:calc(-12px - var(--spacingHorizontalXS));margin-right:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}", ".r1rh6bd7{display:inline-block;font-size:12px;margin-right:calc(-12px - var(--spacingHorizontalXS));margin-left:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}"]), i1 = /* @__PURE__ */ W({
  error: {
    sj55zd: "f1hcrxcs"
  },
  warning: {
    sj55zd: "f1k5f75o"
  },
  success: {
    sj55zd: "ffmvakt"
  }
}, {
  d: [".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".f1k5f75o{color:var(--colorPaletteDarkOrangeForeground1);}", ".ffmvakt{color:var(--colorPaletteGreenForeground1);}"]
}), a1 = (e) => {
  const {
    validationState: t,
    size: r
  } = e, o = e.orientation === "horizontal", n = e1();
  e.root.className = H(Gr.root, n.base, o && n.horizontal, o && !e.label && n.horizontalNoLabel, e.root.className);
  const i = t1();
  e.label && (e.label.className = H(Gr.label, o && i.horizontal, o && r === "small" && i.horizontalSmall, o && r === "large" && i.horizontalLarge, !o && i.vertical, !o && r === "large" && i.verticalLarge, e.label.className));
  const a = n1(), s = i1();
  e.validationMessageIcon && (e.validationMessageIcon.className = H(Gr.validationMessageIcon, a, t !== "none" && s[t], e.validationMessageIcon.className));
  const l = r1(), c = o1();
  return e.validationMessage && (e.validationMessage.className = H(Gr.validationMessage, l, t === "error" && c.error, !!e.validationMessageIcon && c.withIcon, e.validationMessage.className)), e.hint && (e.hint.className = H(Gr.hint, l, e.hint.className)), e;
}, Sa = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Qy(e, t);
  a1(r);
  const o = Uy(r);
  return Gy(r, o);
});
Sa.displayName = "Field";
const s1 = (e, t) => {
  e = gs(e, {
    supportsLabelFor: !0,
    supportsRequired: !0
  });
  const { disabled: r = !1, required: o, shape: n = "square", size: i = "medium", labelPosition: a = "after", onChange: s } = e, [l, c] = Ir({
    defaultState: e.defaultChecked,
    state: e.checked,
    initialState: !1
  }), u = as({
    props: e,
    primarySlotTagName: "input",
    excludedPropNames: [
      "checked",
      "defaultChecked",
      "size",
      "onChange"
    ]
  }), d = l === "mixed", f = ko("checkbox-", u.primary.id);
  let v;
  d ? n === "circular" ? v = /* @__PURE__ */ b.createElement(hm, null) : v = i === "large" ? /* @__PURE__ */ b.createElement(xm, null) : /* @__PURE__ */ b.createElement(km, null) : l && (v = i === "large" ? /* @__PURE__ */ b.createElement(bm, null) : /* @__PURE__ */ b.createElement(mm, null));
  const h = {
    shape: n,
    checked: l,
    disabled: r,
    size: i,
    labelPosition: a,
    components: {
      root: "span",
      input: "input",
      indicator: "div",
      label: cr
    },
    root: le(e.root, {
      defaultProps: {
        ref: Zn(),
        ...u.root
      },
      elementType: "span"
    }),
    input: le(e.input, {
      defaultProps: {
        type: "checkbox",
        id: f,
        ref: t,
        checked: l === !0,
        ...u.primary
      },
      elementType: "input"
    }),
    label: xe(e.label, {
      defaultProps: {
        htmlFor: f,
        disabled: r,
        required: o,
        size: "medium"
      },
      elementType: cr
    }),
    indicator: xe(e.indicator, {
      renderByDefault: !0,
      defaultProps: {
        "aria-hidden": !0,
        children: v
      },
      elementType: "div"
    })
  };
  h.input.onChange = Et((y) => {
    const g = y.currentTarget.indeterminate ? "mixed" : y.currentTarget.checked;
    s == null || s(y, {
      checked: g
    }), c(g);
  });
  const p = xo(h.input.ref);
  return h.input.ref = p, qr(() => {
    p.current && (p.current.indeterminate = d);
  }, [
    p,
    d
  ]), h;
}, l1 = (e) => (ge(e), /* @__PURE__ */ Ve(e.root, {
  children: [
    /* @__PURE__ */ $(e.input, {}),
    e.labelPosition === "before" && e.label && /* @__PURE__ */ $(e.label, {}),
    /* @__PURE__ */ $(e.indicator, {}),
    e.labelPosition === "after" && e.label && /* @__PURE__ */ $(e.label, {})
  ]
})), Uo = {
  root: "fui-Checkbox",
  label: "fui-Checkbox__label",
  input: "fui-Checkbox__input",
  indicator: "fui-Checkbox__indicator"
}, c1 = /* @__PURE__ */ _e("r10zo65y", "rpa3v06", {
  r: [".r10zo65y{position:relative;display:inline-flex;cursor:pointer;vertical-align:middle;color:var(--colorNeutralForeground3);}", ".r10zo65y:focus{outline-style:none;}", ".r10zo65y:focus-visible{outline-style:none;}", ".r10zo65y[data-fui-focus-within]:focus-within{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r10zo65y[data-fui-focus-within]:focus-within::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".rpa3v06{position:relative;display:inline-flex;cursor:pointer;vertical-align:middle;color:var(--colorNeutralForeground3);}", ".rpa3v06:focus{outline-style:none;}", ".rpa3v06:focus-visible{outline-style:none;}", ".rpa3v06[data-fui-focus-within]:focus-within{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.rpa3v06[data-fui-focus-within]:focus-within::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r10zo65y[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.rpa3v06[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
}), u1 = /* @__PURE__ */ W({
  unchecked: {
    Bi91k9c: "f3p8bqa",
    pv5h1i: "fium13f",
    lj723h: "f1r2dosr",
    Hnthvo: "f1729es6"
  },
  checked: {
    sj55zd: "f19n0e5",
    wkncrt: "f35ds98",
    zxk7z7: "f12mnkne",
    Hmsnfy: "fei9a8h",
    e6czan: "fix56y3",
    pv5h1i: "f1bcv2js",
    qbydtz: "f7dr4go",
    Hnthvo: "f1r5cpua"
  },
  mixed: {
    sj55zd: "f19n0e5",
    Hmsnfy: "f1l27tf0",
    zxk7z7: "fcilktj",
    pv5h1i: "f1lphd54",
    Bunfa6h: "f1obkvq7",
    Hnthvo: "f2gmbuh",
    B15ykmv: "f1oy4fa1"
  },
  disabled: {
    Bceei9c: "f158kwzp",
    sj55zd: "f1s2aq7o",
    Hmsnfy: "f1w7mfl5",
    zxk7z7: "fcoafq6",
    Bbusuzp: "f1dcs8yz",
    mrqfp9: "fxb3eh3"
  }
}, {
  h: [".f3p8bqa:hover{color:var(--colorNeutralForeground2);}", ".fium13f:hover{--fui-Checkbox__indicator--borderColor:var(--colorNeutralStrokeAccessibleHover);}", ".fix56y3:hover{--fui-Checkbox__indicator--backgroundColor:var(--colorCompoundBrandBackgroundHover);}", ".f1bcv2js:hover{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandBackgroundHover);}", ".f1lphd54:hover{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandStrokeHover);}", ".f1obkvq7:hover{--fui-Checkbox__indicator--color:var(--colorCompoundBrandForeground1Hover);}"],
  a: [".f1r2dosr:active{color:var(--colorNeutralForeground1);}", ".f1729es6:active{--fui-Checkbox__indicator--borderColor:var(--colorNeutralStrokeAccessiblePressed);}", ".f7dr4go:active{--fui-Checkbox__indicator--backgroundColor:var(--colorCompoundBrandBackgroundPressed);}", ".f1r5cpua:active{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandBackgroundPressed);}", ".f2gmbuh:active{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandStrokePressed);}", ".f1oy4fa1:active{--fui-Checkbox__indicator--color:var(--colorCompoundBrandForeground1Pressed);}"],
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".f35ds98{--fui-Checkbox__indicator--backgroundColor:var(--colorCompoundBrandBackground);}", ".f12mnkne{--fui-Checkbox__indicator--color:var(--colorNeutralForegroundInverted);}", ".fei9a8h{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandBackground);}", ".f1l27tf0{--fui-Checkbox__indicator--borderColor:var(--colorCompoundBrandStroke);}", ".fcilktj{--fui-Checkbox__indicator--color:var(--colorCompoundBrandForeground1);}", ".f158kwzp{cursor:default;}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1w7mfl5{--fui-Checkbox__indicator--borderColor:var(--colorNeutralStrokeDisabled);}", ".fcoafq6{--fui-Checkbox__indicator--color:var(--colorNeutralForegroundDisabled);}"],
  m: [["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fxb3eh3{--fui-Checkbox__indicator--color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
}), d1 = /* @__PURE__ */ _e("ruo9svu", null, [".ruo9svu{box-sizing:border-box;cursor:inherit;height:100%;margin:0;opacity:0;position:absolute;top:0;width:calc(16px + 2 * var(--spacingHorizontalS));}"]), f1 = /* @__PURE__ */ W({
  before: {
    j35jbq: ["f1e31b4d", "f1vgc2s3"]
  },
  after: {
    oyh7mz: ["f1vgc2s3", "f1e31b4d"]
  },
  large: {
    a9b677: "f1mq5jt6"
  }
}, {
  d: [".f1e31b4d{right:0;}", ".f1vgc2s3{left:0;}", ".f1mq5jt6{width:calc(20px + 2 * var(--spacingHorizontalS));}"]
}), h1 = /* @__PURE__ */ _e("rl7ci6d", null, [".rl7ci6d{align-self:flex-start;box-sizing:border-box;flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--fui-Checkbox__indicator--color);background-color:var(--fui-Checkbox__indicator--backgroundColor);border-color:var(--fui-Checkbox__indicator--borderColor, var(--colorNeutralStrokeAccessible));border-style:solid;border-width:var(--strokeWidthThin);border-radius:var(--borderRadiusSmall);margin:var(--spacingVerticalS) var(--spacingHorizontalS);fill:currentColor;pointer-events:none;font-size:12px;height:16px;width:16px;}"]), v1 = /* @__PURE__ */ W({
  large: {
    Be2twd7: "f4ybsrx",
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3"
  },
  circular: {
    Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
    Beyfa6y: ["f1nfllo7", "f8fbkgy"],
    B7oj6ja: ["f1djnp8u", "f1s8kh49"],
    Btl43ni: ["f1s8kh49", "f1djnp8u"]
  }
}, {
  d: [".f4ybsrx{font-size:16px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}", ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}", ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}"]
}), p1 = /* @__PURE__ */ W({
  base: {
    qb2dma: "f7nlbp4",
    sj55zd: "f1ym3bx4",
    Bceei9c: "fpo1scq",
    z8tnut: "f1kwiid1",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f5b47ha",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"]
  },
  before: {
    z189sj: ["f7x41pl", "fruq291"]
  },
  after: {
    uwmqm3: ["fruq291", "f7x41pl"]
  },
  medium: {
    B6of3ja: "fjzwpt6",
    jrapky: "fh6j2fo"
  },
  large: {
    B6of3ja: "f1xlvstr",
    jrapky: "f49ad5g"
  }
}, {
  d: [".f7nlbp4{align-self:center;}", ".f1ym3bx4{color:inherit;}", ".fpo1scq{cursor:inherit;}", ".f1kwiid1{padding-top:var(--spacingVerticalS);}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f5b47ha{padding-bottom:var(--spacingVerticalS);}", ".f7x41pl{padding-right:var(--spacingHorizontalXS);}", ".fruq291{padding-left:var(--spacingHorizontalXS);}", ".fjzwpt6{margin-top:calc((16px - var(--lineHeightBase300)) / 2);}", ".fh6j2fo{margin-bottom:calc((16px - var(--lineHeightBase300)) / 2);}", ".f1xlvstr{margin-top:calc((20px - var(--lineHeightBase300)) / 2);}", ".f49ad5g{margin-bottom:calc((20px - var(--lineHeightBase300)) / 2);}"]
}), g1 = (e) => {
  const {
    checked: t,
    disabled: r,
    labelPosition: o,
    shape: n,
    size: i
  } = e, a = c1(), s = u1();
  e.root.className = H(Uo.root, a, r ? s.disabled : t === "mixed" ? s.mixed : t ? s.checked : s.unchecked, e.root.className);
  const l = d1(), c = f1();
  e.input.className = H(Uo.input, l, i === "large" && c.large, c[o], e.input.className);
  const u = h1(), d = v1();
  e.indicator && (e.indicator.className = H(Uo.indicator, u, i === "large" && d.large, n === "circular" && d.circular, e.indicator.className));
  const f = p1();
  return e.label && (e.label.className = H(Uo.label, f.base, f[i], f[o], e.label.className)), e;
}, Ad = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = s1(e, t);
  return g1(r), Ne("useCheckboxStyles_unstable")(r), l1(r);
});
Ad.displayName = "Checkbox";
const m1 = (e, t) => {
  e = gs(e, {
    supportsLabelFor: !0,
    supportsRequired: !0,
    supportsSize: !0
  });
  const r = Qu();
  var o;
  const { size: n = "medium", appearance: i = (o = r.inputDefaultAppearance) !== null && o !== void 0 ? o : "outline", onChange: a } = e;
  process.env.NODE_ENV !== "production" && (i === "filled-darker-shadow" || i === "filled-lighter-shadow") && console.error("The 'filled-darker-shadow' and 'filled-lighter-shadow' appearances are deprecated and will be removed in the future.");
  const [s, l] = Ir({
    state: e.value,
    defaultState: e.defaultValue,
    initialState: ""
  }), c = as({
    props: e,
    primarySlotTagName: "input",
    excludedPropNames: [
      "size",
      "onChange",
      "value",
      "defaultValue"
    ]
  }), u = {
    size: n,
    appearance: i,
    components: {
      root: "span",
      input: "input",
      contentBefore: "span",
      contentAfter: "span"
    },
    input: le(e.input, {
      defaultProps: {
        type: "text",
        ref: t,
        ...c.primary
      },
      elementType: "input"
    }),
    contentAfter: xe(e.contentAfter, {
      elementType: "span"
    }),
    contentBefore: xe(e.contentBefore, {
      elementType: "span"
    }),
    root: le(e.root, {
      defaultProps: c.root,
      elementType: "span"
    })
  };
  return u.input.value = s, u.input.onChange = Et((d) => {
    const f = d.target.value;
    a == null || a(d, {
      value: f
    }), l(f);
  }), u;
}, b1 = (e) => (ge(e), /* @__PURE__ */ Ve(e.root, {
  children: [
    e.contentBefore && /* @__PURE__ */ $(e.contentBefore, {}),
    /* @__PURE__ */ $(e.input, {}),
    e.contentAfter && /* @__PURE__ */ $(e.contentAfter, {})
  ]
})), Go = {
  root: "fui-Input",
  input: "fui-Input__input",
  contentBefore: "fui-Input__contentBefore",
  contentAfter: "fui-Input__contentAfter"
}, y1 = /* @__PURE__ */ _e("r1qp7m7v", "r1e50w0p", {
  r: [".r1qp7m7v{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r1qp7m7v::after{box-sizing:border-box;content:"";position:absolute;left:-1px;bottom:-1px;right:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r1qp7m7v:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r1qp7m7v:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r1qp7m7v:focus-within{outline:2px solid transparent;}", ".r1e50w0p{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r1e50w0p::after{box-sizing:border-box;content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r1e50w0p:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r1e50w0p:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r1e50w0p:focus-within{outline:2px solid transparent;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1qp7m7v::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1qp7m7v:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1e50w0p::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1e50w0p:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}"]
}), _1 = /* @__PURE__ */ W({
  small: {
    sshi5w: "f1pha7fy",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {},
  large: {
    sshi5w: "f1w5jphr",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k",
    i8kkvl: "f1rjii52",
    Belr9w4: "f1r7g2jn"
  },
  outline: {},
  outlineInteractive: {
    Bgoe8wy: "fvcxoqz",
    Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
    oetu4i: "f1l4zc64",
    gg5e9n: ["f1m52nbi", "f1ub3y4t"],
    Drbcw7: "f8vnjqi",
    udz0bu: ["fz1etlk", "f1hc16gm"],
    Be8ivqh: "f1klwx88",
    ofdepl: ["f1hc16gm", "fz1etlk"]
  },
  underline: {
    De3pzq: "f1c21dwh",
    Bbmb7ep: ["f1krrbdw", "f1deotkl"],
    Beyfa6y: ["f1deotkl", "f1krrbdw"],
    B7oj6ja: ["f10ostut", "f1ozlkrg"],
    Btl43ni: ["f1ozlkrg", "f10ostut"],
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    wvpqe5: ["f1deefiw", "f1n71otn"],
    Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
    B1piin3: ["f15yvnhg", "f1n6gb5g"]
  },
  underlineInteractive: {
    oetu4i: "f1l4zc64",
    Be8ivqh: "f1klwx88",
    B3778ie: ["f1nf3wye", "feulmo5"],
    d9w3h3: ["feulmo5", "f1nf3wye"],
    Bl18szs: ["f18vqdqu", "f53nyzz"],
    B4j8arr: ["f53nyzz", "f18vqdqu"]
  },
  filled: {
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"]
  },
  filledInteractive: {
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    E5pizo: "fyed02w"
  },
  disabled: {
    Bceei9c: "fdrzuqr",
    De3pzq: "f1c21dwh",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"],
    Bsft5z2: "fhr9occ",
    Bduesf4: "f99w1ws"
  },
  smallWithContentBefore: {
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  smallWithContentAfter: {
    z189sj: ["fdw0yi8", "fk8j09s"]
  },
  mediumWithContentBefore: {
    uwmqm3: ["f1ng84yb", "f11gcy0p"]
  },
  mediumWithContentAfter: {
    z189sj: ["f11gcy0p", "f1ng84yb"]
  },
  largeWithContentBefore: {
    uwmqm3: ["f1uw59to", "fw5db7e"]
  },
  largeWithContentAfter: {
    z189sj: ["fw5db7e", "f1uw59to"]
  }
}, {
  d: [".f1pha7fy{min-height:24px;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1w5jphr{min-height:40px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1rjii52{column-gap:var(--spacingHorizontalSNudge);}", ".f1r7g2jn{row-gap:var(--spacingHorizontalSNudge);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1krrbdw{border-bottom-right-radius:0;}", ".f1deotkl{border-bottom-left-radius:0;}", ".f10ostut{border-top-right-radius:0;}", ".f1ozlkrg{border-top-left-radius:0;}", ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".f1nf3wye::after{border-bottom-right-radius:0;}", ".feulmo5::after{border-bottom-left-radius:0;}", ".f18vqdqu::after{border-top-right-radius:0;}", ".f53nyzz::after{border-top-left-radius:0;}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fdrzuqr{cursor:not-allowed;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fhr9occ::after{content:unset;}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1ng84yb{padding-left:var(--spacingHorizontalMNudge);}", ".f11gcy0p{padding-right:var(--spacingHorizontalMNudge);}", ".f1uw59to{padding-left:var(--spacingHorizontalM);}", ".fw5db7e{padding-right:var(--spacingHorizontalM);}"],
  h: [".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}", ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}"],
  a: [".f8vnjqi:active,.f8vnjqi:focus-within{border-top-color:var(--colorNeutralStroke1Pressed);}", ".fz1etlk:active,.fz1etlk:focus-within{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1hc16gm:active,.f1hc16gm:focus-within{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1klwx88:active,.f1klwx88:focus-within{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"],
  m: [["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]],
  w: [".f99w1ws:focus-within{outline-style:none;}"]
}), w1 = /* @__PURE__ */ _e("r12stul0", null, [".r12stul0{align-self:stretch;box-sizing:border-box;flex-grow:1;min-width:0;border-style:none;padding:0 var(--spacingHorizontalM);color:var(--colorNeutralForeground1);background-color:transparent;outline-style:none;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;}", ".r12stul0::-webkit-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".r12stul0::-moz-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".r12stul0:-ms-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".r12stul0::placeholder{color:var(--colorNeutralForeground4);opacity:1;}"]), k1 = /* @__PURE__ */ W({
  small: {
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    z189sj: ["f1vdfbxk", "f1f5gg8d"]
  },
  medium: {},
  large: {
    uwmqm3: ["fnphzt9", "flt1dlf"],
    z189sj: ["flt1dlf", "fnphzt9"]
  },
  smallWithContentBefore: {
    uwmqm3: ["fgiv446", "ffczdla"]
  },
  smallWithContentAfter: {
    z189sj: ["ffczdla", "fgiv446"]
  },
  mediumWithContentBefore: {
    uwmqm3: ["fgiv446", "ffczdla"]
  },
  mediumWithContentAfter: {
    z189sj: ["ffczdla", "fgiv446"]
  },
  largeWithContentBefore: {
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  largeWithContentAfter: {
    z189sj: ["fdw0yi8", "fk8j09s"]
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    De3pzq: "f1c21dwh",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  }
}, {
  d: [".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".fnphzt9{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}", ".flt1dlf{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}", ".fgiv446{padding-left:var(--spacingHorizontalXXS);}", ".ffczdla{padding-right:var(--spacingHorizontalXXS);}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}"]
}), x1 = /* @__PURE__ */ _e("r1572tok", null, [".r1572tok{box-sizing:border-box;color:var(--colorNeutralForeground3);display:flex;}", ".r1572tok>svg{font-size:20px;}"]), S1 = /* @__PURE__ */ W({
  disabled: {
    sj55zd: "f1s2aq7o"
  },
  small: {
    kwki1k: "f3u2cy0"
  },
  medium: {},
  large: {
    kwki1k: "fa420co"
  }
}, {
  d: [".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f3u2cy0>svg{font-size:16px;}", ".fa420co>svg{font-size:24px;}"]
}), E1 = (e) => {
  const {
    size: t,
    appearance: r
  } = e, o = e.input.disabled, n = `${e.input["aria-invalid"]}` == "true", i = r.startsWith("filled"), a = _1(), s = k1(), l = S1();
  e.root.className = H(Go.root, y1(), a[t], e.contentBefore && a[`${t}WithContentBefore`], e.contentAfter && a[`${t}WithContentAfter`], a[r], !o && r === "outline" && a.outlineInteractive, !o && r === "underline" && a.underlineInteractive, !o && i && a.filledInteractive, i && a.filled, !o && n && a.invalid, o && a.disabled, e.root.className), e.input.className = H(Go.input, w1(), s[t], e.contentBefore && s[`${t}WithContentBefore`], e.contentAfter && s[`${t}WithContentAfter`], o && s.disabled, e.input.className);
  const c = [x1(), o && l.disabled, l[t]];
  return e.contentBefore && (e.contentBefore.className = H(Go.contentBefore, ...c, e.contentBefore.className)), e.contentAfter && (e.contentAfter.className = H(Go.contentAfter, ...c, e.contentAfter.className)), e;
}, jd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = m1(e, t);
  return E1(r), Ne("useInputStyles_unstable")(r), b1(r);
});
jd.displayName = "Input";
const Fd = b.createContext(void 0), B1 = {};
Fd.Provider;
const N1 = () => {
  var e;
  return (e = b.useContext(Fd)) !== null && e !== void 0 ? e : B1;
}, T1 = (e, t) => {
  const { size: r } = N1(), { appearance: o = "primary", labelPosition: n = "after", size: i = r ?? "medium", delay: a = 0 } = e, s = ko("spinner"), { role: l = "progressbar", ...c } = e, u = le(Ce("div", {
    // FIXME:
    // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
    // but since it would be a breaking change to fix it, we are casting ref to it's proper type
    ref: t,
    role: l,
    ...c
  }, [
    "size"
  ]), {
    elementType: "div"
  }), [d, f] = b.useState(!1), [v, h] = Hg();
  b.useEffect(() => {
    if (!(a <= 0))
      return v(() => {
        f(!0);
      }, a), () => {
        h();
      };
  }, [
    v,
    h,
    a
  ]);
  const p = xe(e.label, {
    defaultProps: {
      id: s
    },
    renderByDefault: !1,
    elementType: cr
  }), y = xe(e.spinner, {
    renderByDefault: !0,
    elementType: "span"
  });
  return p && u && !u["aria-labelledby"] && (u["aria-labelledby"] = p.id), {
    appearance: o,
    delay: a,
    labelPosition: n,
    size: i,
    shouldRenderSpinner: !a || d,
    components: {
      root: "div",
      spinner: "span",
      spinnerTail: "span",
      label: cr
    },
    root: u,
    spinner: y,
    spinnerTail: le(e.spinnerTail, {
      elementType: "span"
    }),
    label: p
  };
}, C1 = (e) => {
  ge(e);
  const { labelPosition: t, shouldRenderSpinner: r } = e;
  return /* @__PURE__ */ Ve(e.root, {
    children: [
      e.label && r && (t === "above" || t === "before") && /* @__PURE__ */ $(e.label, {}),
      e.spinner && r && /* @__PURE__ */ $(e.spinner, {
        children: e.spinnerTail && /* @__PURE__ */ $(e.spinnerTail, {})
      }),
      e.label && r && (t === "below" || t === "after") && /* @__PURE__ */ $(e.label, {})
    ]
  });
}, Ko = {
  root: "fui-Spinner",
  spinner: "fui-Spinner__spinner",
  spinnerTail: "fui-Spinner__spinnerTail",
  label: "fui-Spinner__label"
}, P1 = /* @__PURE__ */ _e("r82apo5", null, [".r82apo5{display:flex;align-items:center;justify-content:center;line-height:0;gap:8px;overflow:hidden;}"]), O1 = /* @__PURE__ */ W({
  vertical: {
    Beiy3e4: "f1vx9l62"
  }
}, {
  d: [".f1vx9l62{flex-direction:column;}"]
}), z1 = /* @__PURE__ */ _e("rvgcg50", "r15nd2jo", {
  r: [".rvgcg50{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:rb7n1on;}", "@keyframes rb7n1on{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}", ".r15nd2jo{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:r1gx3jof;}", "@keyframes r1gx3jof{0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}}"],
  s: ["@media screen and (forced-colors: active){.rvgcg50{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.rvgcg50{animation-duration:1.8s;}}", "@media screen and (forced-colors: active){.r15nd2jo{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.r15nd2jo{animation-duration:1.8s;}}"]
}), R1 = /* @__PURE__ */ _e("r1lregi5", "rxq293c", {
  r: [".r1lregi5{position:absolute;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r15mim6k;}", '.r1lregi5::before,.r1lregi5::after{content:"";position:absolute;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r15mim6k{0%{transform:rotate(-135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(225deg);}}", ".r1lregi5::before{animation-name:r18vhmn8;}", "@keyframes r18vhmn8{0%{transform:rotate(0deg);}50%{transform:rotate(105deg);}100%{transform:rotate(0deg);}}", ".r1lregi5::after{animation-name:rkgrvoi;}", "@keyframes rkgrvoi{0%{transform:rotate(0deg);}50%{transform:rotate(225deg);}100%{transform:rotate(0deg);}}", ".rxq293c{position:absolute;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r109gmi5;}", '.rxq293c::before,.rxq293c::after{content:"";position:absolute;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r109gmi5{0%{transform:rotate(135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(-225deg);}}", ".rxq293c::before{animation-name:r17whflh;}", "@keyframes r17whflh{0%{transform:rotate(0deg);}50%{transform:rotate(-105deg);}100%{transform:rotate(0deg);}}", ".rxq293c::after{animation-name:re4odhl;}", "@keyframes re4odhl{0%{transform:rotate(0deg);}50%{transform:rotate(-225deg);}100%{transform:rotate(0deg);}}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1lregi5{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.r1lregi5::before,.r1lregi5::after{content:none;}}", "@media screen and (prefers-reduced-motion: reduce){.rxq293c{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.rxq293c::before,.rxq293c::after{content:none;}}"]
}), D1 = /* @__PURE__ */ W({
  inverted: {
    De3pzq: "fr407j0",
    sj55zd: "f1f7voed"
  },
  rtlTail: {
    btxmck: "f179dep3",
    gb5jj2: "fbz9ihp",
    Br2kee7: "f1wkkxo7"
  },
  "extra-tiny": {
    Bqenvij: "fd461yt",
    a9b677: "fjw5fx7",
    qmp6fs: "f1v3ph3m"
  },
  tiny: {
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    qmp6fs: "f1v3ph3m"
  },
  "extra-small": {
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    qmp6fs: "f1v3ph3m"
  },
  small: {
    Bqenvij: "fxldao9",
    a9b677: "f1w9dchk",
    qmp6fs: "f1v3ph3m"
  },
  medium: {
    Bqenvij: "f1d2rq10",
    a9b677: "f1szoe96",
    qmp6fs: "fb52u90"
  },
  large: {
    Bqenvij: "f8ljn23",
    a9b677: "fpdz1er",
    qmp6fs: "fb52u90"
  },
  "extra-large": {
    Bqenvij: "fbhnoac",
    a9b677: "feqmc2u",
    qmp6fs: "fb52u90"
  },
  huge: {
    Bqenvij: "f1ft4266",
    a9b677: "fksc0bp",
    qmp6fs: "fa3u9ii"
  }
}, {
  d: [".fr407j0{background-color:var(--colorNeutralStrokeAlpha2);}", ".f1f7voed{color:var(--colorNeutralStrokeOnBrand2);}", ".f179dep3{-webkit-mask-image:conic-gradient(white 255deg, transparent 255deg);mask-image:conic-gradient(white 255deg, transparent 255deg);}", ".fbz9ihp::before,.fbz9ihp::after{background-image:conic-gradient(transparent 225deg, currentcolor 225deg);}", ".fd461yt{height:16px;}", ".fjw5fx7{width:16px;}", ".f1v3ph3m{--fui-Spinner--strokeWidth:var(--strokeWidthThick);}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".fxldao9{height:28px;}", ".f1w9dchk{width:28px;}", ".f1d2rq10{height:32px;}", ".f1szoe96{width:32px;}", ".fb52u90{--fui-Spinner--strokeWidth:var(--strokeWidthThicker);}", ".f8ljn23{height:36px;}", ".fpdz1er{width:36px;}", ".fbhnoac{height:40px;}", ".feqmc2u{width:40px;}", ".f1ft4266{height:44px;}", ".fksc0bp{width:44px;}", ".fa3u9ii{--fui-Spinner--strokeWidth:var(--strokeWidthThickest);}"],
  m: [["@media screen and (prefers-reduced-motion: reduce){.f1wkkxo7{background-image:conic-gradient(currentcolor 0deg, transparent 240deg);}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]]
}), A1 = /* @__PURE__ */ W({
  inverted: {
    sj55zd: "fonrgv7"
  },
  "extra-tiny": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  tiny: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  "extra-small": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  small: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  medium: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  large: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  "extra-large": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  huge: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f1pp30po",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "f106mvju"
  }
}, {
  d: [".fonrgv7{color:var(--colorNeutralForegroundStaticInverted);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".f106mvju{line-height:var(--lineHeightBase500);}"]
}), j1 = (e) => {
  const {
    labelPosition: t,
    size: r,
    appearance: o
  } = e, {
    dir: n
  } = qt(), i = P1(), a = O1(), s = z1(), l = D1(), c = R1(), u = A1();
  return e.root.className = H(Ko.root, i, (t === "above" || t === "below") && a.vertical, e.root.className), e.spinner && (e.spinner.className = H(Ko.spinner, s, l[r], o === "inverted" && l.inverted, e.spinner.className)), e.spinnerTail && (e.spinnerTail.className = H(Ko.spinnerTail, c, n === "rtl" && l.rtlTail, e.spinnerTail.className)), e.label && (e.label.className = H(Ko.label, u[r], o === "inverted" && u.inverted, e.label.className)), e;
}, Id = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = T1(e, t);
  return j1(r), Ne("useSpinnerStyles_unstable")(r), C1(r);
});
Id.displayName = "Spinner";
const F1 = (e, t) => {
  const { wrap: r, truncate: o, block: n, italic: i, underline: a, strikethrough: s, size: l, font: c, weight: u, align: d } = e;
  return {
    align: d ?? "start",
    block: n ?? !1,
    font: c ?? "base",
    italic: i ?? !1,
    size: l ?? 300,
    strikethrough: s ?? !1,
    truncate: o ?? !1,
    underline: a ?? !1,
    weight: u ?? "regular",
    wrap: r ?? !0,
    components: {
      root: "span"
    },
    root: le(Ce("span", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLHeadingElement & HTMLPreElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "span"
    })
  };
}, I1 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), q1 = {
  root: "fui-Text"
}, M1 = /* @__PURE__ */ W({
  root: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bg96gwp: "f1i3iumi",
    Bhrd7zp: "figsok6",
    fsow6f: "fpgzoln",
    mc9l5x: "f1w7gpdv",
    Huce71: "f6juhto",
    B68tc82: "f1mtd64y",
    Bmxbyg5: "f1y7q3j9",
    ygn44y: "f2jf649"
  },
  nowrap: {
    Huce71: "fz5stix",
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw"
  },
  truncate: {
    ygn44y: "f1cmbuwj"
  },
  block: {
    mc9l5x: "ftgm304"
  },
  italic: {
    B80ckks: "f1j4dglz"
  },
  underline: {
    w71qe1: "f13mvf36"
  },
  strikethrough: {
    w71qe1: "fv5q2k7"
  },
  strikethroughUnderline: {
    w71qe1: "f1drk4o6"
  },
  base100: {
    Be2twd7: "f13mqy1h",
    Bg96gwp: "fcpl73t"
  },
  base200: {
    Be2twd7: "fy9rknc",
    Bg96gwp: "fwrc4pm"
  },
  base400: {
    Be2twd7: "fod5ikn",
    Bg96gwp: "faaz57k"
  },
  base500: {
    Be2twd7: "f1pp30po",
    Bg96gwp: "f106mvju"
  },
  base600: {
    Be2twd7: "f1x0m3f5",
    Bg96gwp: "fb86gi6"
  },
  hero700: {
    Be2twd7: "fojgt09",
    Bg96gwp: "fcen8rp"
  },
  hero800: {
    Be2twd7: "fccw675",
    Bg96gwp: "f1ebx5kk"
  },
  hero900: {
    Be2twd7: "f15afnhw",
    Bg96gwp: "fr3w3wp"
  },
  hero1000: {
    Be2twd7: "fpyltcb",
    Bg96gwp: "f1ivgwrt"
  },
  monospace: {
    Bahqtrf: "f1fedwem"
  },
  numeric: {
    Bahqtrf: "f1uq0ln5"
  },
  weightMedium: {
    Bhrd7zp: "fdj6btp"
  },
  weightSemibold: {
    Bhrd7zp: "fl43uef"
  },
  weightBold: {
    Bhrd7zp: "flh3ekv"
  },
  alignCenter: {
    fsow6f: "f17mccla"
  },
  alignEnd: {
    fsow6f: "f12ymhq5"
  },
  alignJustify: {
    fsow6f: "f1j59e10"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fpgzoln{text-align:start;}", ".f1w7gpdv{display:inline;}", ".f6juhto{white-space:normal;}", ".f1mtd64y{overflow-x:visible;}", ".f1y7q3j9{overflow-y:visible;}", ".f2jf649{text-overflow:clip;}", ".fz5stix{white-space:nowrap;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".f1cmbuwj{text-overflow:ellipsis;}", ".ftgm304{display:block;}", ".f1j4dglz{font-style:italic;}", ".f13mvf36{text-decoration-line:underline;}", ".fv5q2k7{text-decoration-line:line-through;}", ".f1drk4o6{text-decoration-line:line-through underline;}", ".f13mqy1h{font-size:var(--fontSizeBase100);}", ".fcpl73t{line-height:var(--lineHeightBase100);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".f106mvju{line-height:var(--lineHeightBase500);}", ".f1x0m3f5{font-size:var(--fontSizeBase600);}", ".fb86gi6{line-height:var(--lineHeightBase600);}", ".fojgt09{font-size:var(--fontSizeHero700);}", ".fcen8rp{line-height:var(--lineHeightHero700);}", ".fccw675{font-size:var(--fontSizeHero800);}", ".f1ebx5kk{line-height:var(--lineHeightHero800);}", ".f15afnhw{font-size:var(--fontSizeHero900);}", ".fr3w3wp{line-height:var(--lineHeightHero900);}", ".fpyltcb{font-size:var(--fontSizeHero1000);}", ".f1ivgwrt{line-height:var(--lineHeightHero1000);}", ".f1fedwem{font-family:var(--fontFamilyMonospace);}", ".f1uq0ln5{font-family:var(--fontFamilyNumeric);}", ".fdj6btp{font-weight:var(--fontWeightMedium);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".flh3ekv{font-weight:var(--fontWeightBold);}", ".f17mccla{text-align:center;}", ".f12ymhq5{text-align:end;}", ".f1j59e10{text-align:justify;}"]
}), L1 = (e) => {
  const t = M1();
  return e.root.className = H(q1.root, t.root, e.wrap === !1 && t.nowrap, e.truncate && t.truncate, e.block && t.block, e.italic && t.italic, e.underline && t.underline, e.strikethrough && t.strikethrough, e.underline && e.strikethrough && t.strikethroughUnderline, e.size === 100 && t.base100, e.size === 200 && t.base200, e.size === 400 && t.base400, e.size === 500 && t.base500, e.size === 600 && t.base600, e.size === 700 && t.hero700, e.size === 800 && t.hero800, e.size === 900 && t.hero900, e.size === 1e3 && t.hero1000, e.font === "monospace" && t.monospace, e.font === "numeric" && t.numeric, e.weight === "medium" && t.weightMedium, e.weight === "semibold" && t.weightSemibold, e.weight === "bold" && t.weightBold, e.align === "center" && t.alignCenter, e.align === "end" && t.alignEnd, e.align === "justify" && t.alignJustify, e.root.className), e;
};
function ms(e) {
  const { useStyles: t, className: r, displayName: o } = e, n = b.forwardRef((i, a) => {
    const s = t(), l = F1(i, a);
    return L1(l), l.root.className = H(r, l.root.className, s.root, i.className), I1(l);
  });
  return n.displayName = o, n;
}
const V1 = {
  root: "fui-Body1"
}, H1 = /* @__PURE__ */ W({
  root: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
}), Xl = ms({
  useStyles: H1,
  className: V1.root,
  displayName: "Body1"
}), $1 = {
  root: "fui-Subtitle2"
}, W1 = /* @__PURE__ */ W({
  root: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
}), U1 = ms({
  useStyles: W1,
  className: $1.root,
  displayName: "Subtitle2"
}), G1 = {
  root: "fui-Title3"
}, K1 = /* @__PURE__ */ W({
  root: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f1x0m3f5",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "fb86gi6"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f1x0m3f5{font-size:var(--fontSizeBase600);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fb86gi6{line-height:var(--lineHeightBase600);}"]
}), X1 = ms({
  useStyles: K1,
  className: G1.root,
  displayName: "Title3"
}), Y1 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {
  children: /* @__PURE__ */ $(e.textarea, {})
})), J1 = (e, t) => {
  e = gs(e, {
    supportsLabelFor: !0,
    supportsRequired: !0,
    supportsSize: !0
  });
  const r = Qu();
  var o;
  const { size: n = "medium", appearance: i = (o = r.inputDefaultAppearance) !== null && o !== void 0 ? o : "outline", resize: a = "none", onChange: s } = e;
  process.env.NODE_ENV !== "production" && (i === "filled-darker-shadow" || i === "filled-lighter-shadow") && console.error("The 'filled-darker-shadow' and 'filled-lighter-shadow' appearances are deprecated and will be removed in the future.");
  const [l, c] = Ir({
    state: e.value,
    defaultState: e.defaultValue,
    initialState: void 0
  }), u = as({
    props: e,
    primarySlotTagName: "textarea",
    excludedPropNames: [
      "onChange",
      "value",
      "defaultValue"
    ]
  }), d = {
    size: n,
    appearance: i,
    resize: a,
    components: {
      root: "span",
      textarea: "textarea"
    },
    textarea: le(e.textarea, {
      defaultProps: {
        ref: t,
        ...u.primary
      },
      elementType: "textarea"
    }),
    root: le(e.root, {
      defaultProps: u.root,
      elementType: "span"
    })
  };
  return d.textarea.value = l, d.textarea.onChange = Et((f) => {
    const v = f.target.value;
    s == null || s(f, {
      value: v
    }), c(v);
  }), d;
}, Yl = {
  root: "fui-Textarea",
  textarea: "fui-Textarea__textarea"
}, Z1 = /* @__PURE__ */ W({
  base: {
    mc9l5x: "ftuwxu6",
    B7ck84d: "f1ewtqcl",
    qhf8xq: "f10pi13n",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1ean75l",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"]
  },
  disabled: {
    De3pzq: "f1c21dwh",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"]
  },
  interactive: {
    li1rpt: "f1gw3sf2",
    Bsft5z2: "f13zj6fq",
    E3zdtr: "f1mdlcz9",
    Eqx8gd: ["f1a7op3", "f1cjjd47"],
    By385i5: "f1gboi2j",
    B1piin3: ["f1cjjd47", "f1a7op3"],
    Dlnsje: "ffyw7fx",
    d9w3h3: ["f1kp91vd", "f1ibwz09"],
    B3778ie: ["f1ibwz09", "f1kp91vd"],
    Bcgy8vk: "f14pi962",
    Bw17bha: "f1lh990p",
    B1q35kw: "f1jc6hxc",
    Gjdm7m: "fj2g8qd",
    b1kco5: "f1yk9hq",
    Ba2ppi3: "fhwpy7i",
    F2fol1: "f14ee0xe",
    lck23g: "f1xhbsuh",
    df92cz: "fv8e3ye",
    I188md: "ftb5wc6",
    umuwi5: "fjw5xc1",
    Blcqepd: "f1xdyd5c",
    nplu4u: "fatpbeo",
    Bioka5o: "fb7uyps",
    H713fs: "f1cmft4k",
    B9ooomg: "f1x58t8o",
    Bercvud: "f1ibeo51",
    Bbr2w1p: "f1vnc8sk",
    Bduesf4: "f3e99gv",
    Bpq79vn: "fhljsf7"
  },
  filled: {
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"],
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    E5pizo: "fyed02w"
  },
  outline: {
    De3pzq: "fxugw4r",
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fj3muxo",
    h3c5rm: ["f1akhkt", "f1lxtadh"],
    B9xav0g: "f1c1zstj",
    zhjwy3: ["f1lxtadh", "f1akhkt"]
  },
  outlineInteractive: {
    ckks6v: "f7ic3uo",
    B2zwrfe: ["f1omjgsz", "f1snvl17"],
    xv9156: "fn6xmsl",
    dt87k2: ["f1snvl17", "f1omjgsz"],
    Bf40cpq: "f1sn8sm0",
    Bop6t4b: ["f1wovo5e", "f716mnf"],
    gvrnp0: "fm0h710",
    Beu9t3s: ["f716mnf", "f1wovo5e"],
    Bgoe8wy: "fvcxoqz",
    Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
    oetu4i: "f1l4zc64",
    gg5e9n: ["f1m52nbi", "f1ub3y4t"],
    uqwnxt: "fk7lb2a",
    Bvecx4l: ["f1knhbbd", "f17itt0b"],
    Bs0cc2w: "f15pjvi3",
    e1hlit: ["f17itt0b", "f1knhbbd"],
    e2sjt0: "f6ginmj",
    Bbcopvn: ["f1grcyuh", "fgzu20w"],
    Bj33j0h: "fk1xjsr",
    f7epvg: ["fgzu20w", "f1grcyuh"],
    B6oc9vd: "fvs00aa",
    ak43y8: ["f1assf6x", "f4ruux4"],
    wmxk5l: "f1z0osm6",
    B50zh58: ["f4ruux4", "f1assf6x"],
    Bbs6y8j: "fu7v4fk",
    rexu52: ["f1fnaxjy", "fwory1w"],
    B7pmvfx: "f7hodha",
    Belqbek: ["fwory1w", "f1fnaxjy"],
    Bawrxx6: "f8jkv7v",
    r7b1zc: ["f1f3jaeo", "fh8au0q"],
    Bt3ojkv: "f19usxel",
    t1ykpo: ["fh8au0q", "f1f3jaeo"],
    Bvq3b66: "f12oevn0",
    Brahy3i: ["fvdgz8d", "f1cq0lt5"],
    zoxjo1: "f1so894s",
    an54nd: ["f1cq0lt5", "fvdgz8d"]
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  }
}, {
  d: [".ftuwxu6{display:inline-flex;}", ".f1ewtqcl{box-sizing:border-box;}", ".f10pi13n{position:relative;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1ean75l{padding-bottom:var(--strokeWidthThick);}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1gw3sf2::after{box-sizing:border-box;}", '.f13zj6fq::after{content:"";}', ".f1mdlcz9::after{position:absolute;}", ".f1a7op3::after{left:-1px;}", ".f1cjjd47::after{right:-1px;}", ".f1gboi2j::after{bottom:-1px;}", ".ffyw7fx::after{height:max(var(--strokeWidthThick), var(--borderRadiusMedium));}", ".f1kp91vd::after{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1ibwz09::after{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f14pi962::after{border-bottom-width:var(--strokeWidthThick);}", ".f1lh990p::after{border-bottom-style:solid;}", ".f1jc6hxc::after{border-bottom-color:var(--colorCompoundBrandStroke);}", ".fj2g8qd::after{clip-path:inset(calc(100% - var(--strokeWidthThick)) 0 0 0);}", ".f1yk9hq::after{transform:scaleX(0);}", ".fhwpy7i::after{transition-property:transform;}", ".f14ee0xe::after{transition-duration:var(--durationUltraFast);}", ".f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1bh3yvw{border-top-color:var(--colorTransparentStrokeInteractive);}", ".fmi79ni{border-right-color:var(--colorTransparentStrokeInteractive);}", ".f11fozsx{border-left-color:var(--colorTransparentStrokeInteractive);}", ".fnzw4c6{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}"],
  m: [["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fv8e3ye::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.ftb5wc6::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1cmft4k:focus-within::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1x58t8o:focus-within::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]],
  w: [".fjw5xc1:focus-within::after{transform:scaleX(1);}", ".f1xdyd5c:focus-within::after{transition-property:transform;}", ".fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}", ".fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}", ".f1ibeo51:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".f1vnc8sk:focus-within{outline-width:var(--strokeWidthThick);}", ".f3e99gv:focus-within{outline-style:solid;}", ".fhljsf7:focus-within{outline-color:transparent;}", ".fu7v4fk:focus-within{border-top-width:var(--strokeWidthThin);}", ".f1fnaxjy:focus-within{border-right-width:var(--strokeWidthThin);}", ".fwory1w:focus-within{border-left-width:var(--strokeWidthThin);}", ".f7hodha:focus-within{border-bottom-width:var(--strokeWidthThin);}", ".f8jkv7v:focus-within{border-top-style:solid;}", ".f1f3jaeo:focus-within{border-right-style:solid;}", ".fh8au0q:focus-within{border-left-style:solid;}", ".f19usxel:focus-within{border-bottom-style:solid;}", ".f12oevn0:focus-within{border-top-color:var(--colorNeutralStroke1);}", ".fvdgz8d:focus-within{border-right-color:var(--colorNeutralStroke1);}", ".f1cq0lt5:focus-within{border-left-color:var(--colorNeutralStroke1);}", ".f1so894s:focus-within{border-bottom-color:var(--colorCompoundBrandStroke);}"],
  h: [".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".f7ic3uo:hover{border-top-width:var(--strokeWidthThin);}", ".f1omjgsz:hover{border-right-width:var(--strokeWidthThin);}", ".f1snvl17:hover{border-left-width:var(--strokeWidthThin);}", ".fn6xmsl:hover{border-bottom-width:var(--strokeWidthThin);}", ".f1sn8sm0:hover{border-top-style:solid;}", ".f1wovo5e:hover{border-right-style:solid;}", ".f716mnf:hover{border-left-style:solid;}", ".fm0h710:hover{border-bottom-style:solid;}", ".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}"],
  a: [".fk7lb2a:active{border-top-width:var(--strokeWidthThin);}", ".f1knhbbd:active{border-right-width:var(--strokeWidthThin);}", ".f17itt0b:active{border-left-width:var(--strokeWidthThin);}", ".f15pjvi3:active{border-bottom-width:var(--strokeWidthThin);}", ".f6ginmj:active{border-top-style:solid;}", ".f1grcyuh:active{border-right-style:solid;}", ".fgzu20w:active{border-left-style:solid;}", ".fk1xjsr:active{border-bottom-style:solid;}", ".fvs00aa:active{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1assf6x:active{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f4ruux4:active{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1z0osm6:active{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"]
}), Q1 = /* @__PURE__ */ W({
  base: {
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    oivjwe: "f1h8hb77",
    wvpqe5: ["f1deefiw", "f1n71otn"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    De3pzq: "f3rmtva",
    B7ck84d: "f1ewtqcl",
    sj55zd: "f19n0e5",
    Bh6795r: "fqerorx",
    Bahqtrf: "fk6fouc",
    Bqenvij: "f1l02sjl",
    yvdlaj: "fwyc1cq",
    B3o7kgh: "f13ta7ih",
    B4brmom: "f1vw9udw",
    Brrnbx2: "fbb3kq8",
    oeaueh: "f1s6fcnf"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  },
  small: {
    sshi5w: "f1w5jphr",
    z8tnut: "f1ywm7hm",
    z189sj: ["fqznh8f", "f1xile11"],
    Byoj8tv: "f14wxoun",
    uwmqm3: ["f1xile11", "fqznh8f"],
    Bxyxcbc: "f192z54u",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    sshi5w: "fvmd9f",
    z8tnut: "fp2oml8",
    z189sj: ["f135dnwl", "f1e60jzv"],
    Byoj8tv: "f1tdddsa",
    uwmqm3: ["f1e60jzv", "f135dnwl"],
    Bxyxcbc: "f1if7ixc",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    sshi5w: "f1kfson",
    z8tnut: "f1kwiid1",
    z189sj: ["fcgl2c4", "f1anj20m"],
    Byoj8tv: "f5b47ha",
    uwmqm3: ["f1anj20m", "fcgl2c4"],
    Bxyxcbc: "f3kip1f",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k"
  }
}, {
  d: [".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1h8hb77{border-bottom-style:none;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f3rmtva{background-color:transparent;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".fqerorx{flex-grow:1;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".f1l02sjl{height:100%;}", ".fwyc1cq::-webkit-input-placeholder{color:var(--colorNeutralForeground4);}", ".fwyc1cq::-moz-placeholder{color:var(--colorNeutralForeground4);}", ".f13ta7ih::-webkit-input-placeholder{opacity:1;}", ".f13ta7ih::-moz-placeholder{opacity:1;}", ".f1vw9udw::selection{color:var(--colorNeutralForegroundInverted);}", ".fbb3kq8::selection{background-color:var(--colorNeutralBackgroundInverted);}", ".f1s6fcnf{outline-style:none;}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".f1w5jphr{min-height:40px;}", ".f1ywm7hm{padding-top:var(--spacingVerticalXS);}", ".fqznh8f{padding-right:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", ".f1xile11{padding-left:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", ".f14wxoun{padding-bottom:var(--spacingVerticalXS);}", ".f192z54u{max-height:200px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fvmd9f{min-height:52px;}", ".fp2oml8{padding-top:var(--spacingVerticalSNudge);}", ".f135dnwl{padding-right:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}", ".f1e60jzv{padding-left:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}", ".f1tdddsa{padding-bottom:var(--spacingVerticalSNudge);}", ".f1if7ixc{max-height:260px;}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f1kfson{min-height:64px;}", ".f1kwiid1{padding-top:var(--spacingVerticalS);}", ".fcgl2c4{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}", ".f1anj20m{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}", ".f5b47ha{padding-bottom:var(--spacingVerticalS);}", ".f3kip1f{max-height:320px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
}), e_ = /* @__PURE__ */ W({
  none: {
    B3rzk8w: "f1o1s39h"
  },
  both: {
    B3rzk8w: "f1pxm0xe"
  },
  horizontal: {
    B3rzk8w: "fq6nmtn"
  },
  vertical: {
    B3rzk8w: "f1f5ktr4"
  }
}, {
  d: [".f1o1s39h{resize:none;}", ".f1pxm0xe{resize:both;}", ".fq6nmtn{resize:horizontal;}", ".f1f5ktr4{resize:vertical;}"]
}), t_ = (e) => {
  const {
    size: t,
    appearance: r,
    resize: o
  } = e, n = e.textarea.disabled, i = `${e.textarea["aria-invalid"]}` == "true", a = r.startsWith("filled"), s = Z1();
  e.root.className = H(Yl.root, s.base, n && s.disabled, !n && a && s.filled, !n && s[r], !n && s.interactive, !n && r === "outline" && s.outlineInteractive, !n && i && s.invalid, e.root.className);
  const l = Q1(), c = e_();
  return e.textarea.className = H(Yl.textarea, l.base, l[t], c[o], n && l.disabled, e.textarea.className), e;
}, qd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = J1(e, t);
  return t_(r), Ne("useTextareaStyles_unstable")(r), Y1(r);
});
qd.displayName = "Textarea";
const tr = "__fluentDisableScrollElement";
function r_() {
  const { targetDocument: e } = qt();
  return Xh(() => {
    if (e)
      return o_(e.body);
  }, [
    e
  ]);
}
function o_(e) {
  var t;
  const { clientWidth: r } = e.ownerDocument.documentElement;
  var o;
  const n = (o = (t = e.ownerDocument.defaultView) === null || t === void 0 ? void 0 : t.innerWidth) !== null && o !== void 0 ? o : 0;
  return n_(e), e[tr].count === 0 && (e.style.overflow = "hidden", e.style.paddingRight = `${n - r}px`), e[tr].count++, () => {
    e[tr].count--, e[tr].count === 0 && (e.style.overflow = e[tr].previousOverflowStyle, e.style.paddingRight = e[tr].previousPaddingRightStyle);
  };
}
function n_(e) {
  var t, r, o;
  (o = (t = e)[r = tr]) !== null && o !== void 0 || (t[r] = {
    count: 0,
    previousOverflowStyle: e.style.overflow,
    previousPaddingRightStyle: e.style.paddingRight
  });
}
function i_(e, t) {
  const { findFirstFocusable: r } = xd(), { targetDocument: o } = qt(), n = b.useRef(null);
  return b.useEffect(() => {
    if (!e)
      return;
    const i = n.current && r(n.current);
    if (i)
      i.focus();
    else {
      var a;
      (a = n.current) === null || a === void 0 || a.focus(), process.env.NODE_ENV === "development" && console.warn("@fluentui/react-dialog [useFocusFirstElement]:\nA Dialog should have at least one focusable element inside DialogSurface.\nPlease add at least a close button either on `DialogTitle` action slot or inside `DialogActions`");
    }
  }, [
    r,
    e,
    t,
    o
  ]), n;
}
const a_ = {
  open: !1,
  inertTrapFocus: !1,
  modalType: "modal",
  isNestedDialog: !1,
  dialogRef: {
    current: null
  },
  requestOpenChange() {
  }
}, bs = yy(void 0), s_ = bs.Provider, zt = (e) => _y(bs, (t = a_) => e(t)), l_ = !1, Md = nu(void 0), Ld = Md.Provider, c_ = () => {
  var e;
  return (e = iu(Md)) !== null && e !== void 0 ? e : l_;
}, u_ = (e) => {
  const { children: t, modalType: r = "modal", onOpenChange: o, inertTrapFocus: n = !1 } = e, [i, a] = d_(t), [s, l] = Ir({
    state: e.open,
    defaultState: e.defaultOpen,
    initialState: !1
  }), c = Et((p) => {
    o == null || o(p.event, p), p.event.isDefaultPrevented() || l(p.open);
  }), u = i_(s, r), d = r_(), f = !!(s && r !== "non-modal");
  qr(() => {
    if (f)
      return d();
  }, [
    d,
    f
  ]);
  const { modalAttributes: v, triggerAttributes: h } = Nd({
    trapFocus: r !== "non-modal",
    legacyTrapFocus: !n
  });
  return {
    components: {
      backdrop: "div"
    },
    inertTrapFocus: n,
    open: s,
    modalType: r,
    content: a,
    trigger: i,
    requestOpenChange: c,
    dialogTitleId: ko("dialog-title-"),
    isNestedDialog: ky(bs),
    dialogRef: u,
    modalAttributes: r !== "non-modal" ? v : void 0,
    triggerAttributes: h
  };
};
function d_(e) {
  const t = b.Children.toArray(e);
  switch (process.env.NODE_ENV !== "production" && t.length !== 1 && t.length !== 2 && console.warn(`@fluentui/react-dialog [useDialog]:
Dialog must contain at least one child <DialogSurface/>,
and at most two children <DialogTrigger/> <DialogSurface/> (in this order).`), t.length) {
    case 2:
      return t;
    case 1:
      return [
        void 0,
        t[0]
      ];
    default:
      return [
        void 0,
        void 0
      ];
  }
}
function f_(e, t) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), n, i;
  for (i = 0; i < o.length; i++)
    n = o[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
    return o.__proto__ = n, o;
  }, Ea(e, t);
}
function h_(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ea(e, t);
}
var Ba = { exports: {} }, Xo = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function v_() {
  if (Jl)
    return ce;
  Jl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function m(w) {
    if (typeof w == "object" && w !== null) {
      var x = w.$$typeof;
      switch (x) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case o:
            case i:
            case n:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case h:
                case v:
                case a:
                  return w;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function k(w) {
    return m(w) === c;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = c, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = u, ce.Fragment = o, ce.Lazy = h, ce.Memo = v, ce.Portal = r, ce.Profiler = i, ce.StrictMode = n, ce.Suspense = d, ce.isAsyncMode = function(w) {
    return k(w) || m(w) === l;
  }, ce.isConcurrentMode = k, ce.isContextConsumer = function(w) {
    return m(w) === s;
  }, ce.isContextProvider = function(w) {
    return m(w) === a;
  }, ce.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, ce.isForwardRef = function(w) {
    return m(w) === u;
  }, ce.isFragment = function(w) {
    return m(w) === o;
  }, ce.isLazy = function(w) {
    return m(w) === h;
  }, ce.isMemo = function(w) {
    return m(w) === v;
  }, ce.isPortal = function(w) {
    return m(w) === r;
  }, ce.isProfiler = function(w) {
    return m(w) === i;
  }, ce.isStrictMode = function(w) {
    return m(w) === n;
  }, ce.isSuspense = function(w) {
    return m(w) === d;
  }, ce.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === o || w === c || w === i || w === n || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === v || w.$$typeof === a || w.$$typeof === s || w.$$typeof === u || w.$$typeof === y || w.$$typeof === g || w.$$typeof === _ || w.$$typeof === p);
  }, ce.typeOf = m, ce;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zl;
function p_() {
  return Zl || (Zl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function m(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === o || D === c || D === i || D === n || D === d || D === f || typeof D == "object" && D !== null && (D.$$typeof === h || D.$$typeof === v || D.$$typeof === a || D.$$typeof === s || D.$$typeof === u || D.$$typeof === y || D.$$typeof === g || D.$$typeof === _ || D.$$typeof === p);
    }
    function k(D) {
      if (typeof D == "object" && D !== null) {
        var Ie = D.$$typeof;
        switch (Ie) {
          case t:
            var Qe = D.type;
            switch (Qe) {
              case l:
              case c:
              case o:
              case i:
              case n:
              case d:
                return Qe;
              default:
                var Jt = Qe && Qe.$$typeof;
                switch (Jt) {
                  case s:
                  case u:
                  case h:
                  case v:
                  case a:
                    return Jt;
                  default:
                    return Ie;
                }
            }
          case r:
            return Ie;
        }
      }
    }
    var w = l, x = c, E = s, O = a, j = t, F = u, Z = o, Oe = h, z = v, te = r, Fe = i, de = n, ye = d, R = !1;
    function U(D) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(D) || k(D) === l;
    }
    function S(D) {
      return k(D) === c;
    }
    function P(D) {
      return k(D) === s;
    }
    function M(D) {
      return k(D) === a;
    }
    function G(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function V(D) {
      return k(D) === u;
    }
    function Q(D) {
      return k(D) === o;
    }
    function K(D) {
      return k(D) === h;
    }
    function J(D) {
      return k(D) === v;
    }
    function re(D) {
      return k(D) === r;
    }
    function ae(D) {
      return k(D) === i;
    }
    function oe(D) {
      return k(D) === n;
    }
    function I(D) {
      return k(D) === d;
    }
    ue.AsyncMode = w, ue.ConcurrentMode = x, ue.ContextConsumer = E, ue.ContextProvider = O, ue.Element = j, ue.ForwardRef = F, ue.Fragment = Z, ue.Lazy = Oe, ue.Memo = z, ue.Portal = te, ue.Profiler = Fe, ue.StrictMode = de, ue.Suspense = ye, ue.isAsyncMode = U, ue.isConcurrentMode = S, ue.isContextConsumer = P, ue.isContextProvider = M, ue.isElement = G, ue.isForwardRef = V, ue.isFragment = Q, ue.isLazy = K, ue.isMemo = J, ue.isPortal = re, ue.isProfiler = ae, ue.isStrictMode = oe, ue.isSuspense = I, ue.isValidElementType = m, ue.typeOf = k;
  }()), ue;
}
var Ql;
function Vd() {
  return Ql || (Ql = 1, process.env.NODE_ENV === "production" ? Xo.exports = v_() : Xo.exports = p_()), Xo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qi, ec;
function g_() {
  if (ec)
    return qi;
  ec = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function o(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qi = n() ? Object.assign : function(i, a) {
    for (var s, l = o(i), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          r.call(s, c[f]) && (l[c[f]] = s[c[f]]);
      }
    }
    return l;
  }, qi;
}
var Mi, tc;
function ys() {
  if (tc)
    return Mi;
  tc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mi = e, Mi;
}
var Li, rc;
function Hd() {
  return rc || (rc = 1, Li = Function.call.bind(Object.prototype.hasOwnProperty)), Li;
}
var Vi, oc;
function m_() {
  if (oc)
    return Vi;
  oc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ys(), r = {}, o = Hd();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function n(i, a, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (o(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = i[u](a, u, l, s, null, t);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var v = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Vi = n, Vi;
}
var Hi, nc;
function b_() {
  if (nc)
    return Hi;
  nc = 1;
  var e = Vd(), t = g_(), r = ys(), o = Hd(), n = m_(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Hi = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(S) {
      var P = S && (c && S[c] || S[u]);
      if (typeof P == "function")
        return P;
    }
    var f = "<<anonymous>>", v = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: _(),
      arrayOf: m,
      element: k(),
      elementType: w(),
      instanceOf: x,
      node: F(),
      objectOf: O,
      oneOf: E,
      oneOfType: j,
      shape: Oe,
      exact: z
    };
    function h(S, P) {
      return S === P ? S !== 0 || 1 / S === 1 / P : S !== S && P !== P;
    }
    function p(S, P) {
      this.message = S, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function y(S) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, M = 0;
      function G(Q, K, J, re, ae, oe, I) {
        if (re = re || f, oe = oe || J, I !== r) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ie = re + ":" + J;
            !P[Ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + oe + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Ie] = !0, M++);
          }
        }
        return K[J] == null ? Q ? K[J] === null ? new p("The " + ae + " `" + oe + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new p("The " + ae + " `" + oe + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : S(K, J, re, ae, oe);
      }
      var V = G.bind(null, !1);
      return V.isRequired = G.bind(null, !0), V;
    }
    function g(S) {
      function P(M, G, V, Q, K, J) {
        var re = M[G], ae = de(re);
        if (ae !== S) {
          var oe = ye(re);
          return new p(
            "Invalid " + Q + " `" + K + "` of type " + ("`" + oe + "` supplied to `" + V + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return y(P);
    }
    function _() {
      return y(a);
    }
    function m(S) {
      function P(M, G, V, Q, K) {
        if (typeof S != "function")
          return new p("Property `" + K + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var J = M[G];
        if (!Array.isArray(J)) {
          var re = de(J);
          return new p("Invalid " + Q + " `" + K + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an array."));
        }
        for (var ae = 0; ae < J.length; ae++) {
          var oe = S(J, ae, V, Q, K + "[" + ae + "]", r);
          if (oe instanceof Error)
            return oe;
        }
        return null;
      }
      return y(P);
    }
    function k() {
      function S(P, M, G, V, Q) {
        var K = P[M];
        if (!s(K)) {
          var J = de(K);
          return new p("Invalid " + V + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(S);
    }
    function w() {
      function S(P, M, G, V, Q) {
        var K = P[M];
        if (!e.isValidElementType(K)) {
          var J = de(K);
          return new p("Invalid " + V + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(S);
    }
    function x(S) {
      function P(M, G, V, Q, K) {
        if (!(M[G] instanceof S)) {
          var J = S.name || f, re = U(M[G]);
          return new p("Invalid " + Q + " `" + K + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return y(P);
    }
    function E(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(M, G, V, Q, K) {
        for (var J = M[G], re = 0; re < S.length; re++)
          if (h(J, S[re]))
            return null;
        var ae = JSON.stringify(S, function(I, D) {
          var Ie = ye(D);
          return Ie === "symbol" ? String(D) : D;
        });
        return new p("Invalid " + Q + " `" + K + "` of value `" + String(J) + "` " + ("supplied to `" + V + "`, expected one of " + ae + "."));
      }
      return y(P);
    }
    function O(S) {
      function P(M, G, V, Q, K) {
        if (typeof S != "function")
          return new p("Property `" + K + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var J = M[G], re = de(J);
        if (re !== "object")
          return new p("Invalid " + Q + " `" + K + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an object."));
        for (var ae in J)
          if (o(J, ae)) {
            var oe = S(J, ae, V, Q, K + "." + ae, r);
            if (oe instanceof Error)
              return oe;
          }
        return null;
      }
      return y(P);
    }
    function j(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < S.length; P++) {
        var M = S[P];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(M) + " at index " + P + "."
          ), a;
      }
      function G(V, Q, K, J, re) {
        for (var ae = [], oe = 0; oe < S.length; oe++) {
          var I = S[oe], D = I(V, Q, K, J, re, r);
          if (D == null)
            return null;
          D.data && o(D.data, "expectedType") && ae.push(D.data.expectedType);
        }
        var Ie = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new p("Invalid " + J + " `" + re + "` supplied to " + ("`" + K + "`" + Ie + "."));
      }
      return y(G);
    }
    function F() {
      function S(P, M, G, V, Q) {
        return te(P[M]) ? null : new p("Invalid " + V + " `" + Q + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return y(S);
    }
    function Z(S, P, M, G, V) {
      return new p(
        (S || "React class") + ": " + P + " type `" + M + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function Oe(S) {
      function P(M, G, V, Q, K) {
        var J = M[G], re = de(J);
        if (re !== "object")
          return new p("Invalid " + Q + " `" + K + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var ae in S) {
          var oe = S[ae];
          if (typeof oe != "function")
            return Z(V, Q, K, ae, ye(oe));
          var I = oe(J, ae, V, Q, K + "." + ae, r);
          if (I)
            return I;
        }
        return null;
      }
      return y(P);
    }
    function z(S) {
      function P(M, G, V, Q, K) {
        var J = M[G], re = de(J);
        if (re !== "object")
          return new p("Invalid " + Q + " `" + K + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        var ae = t({}, M[G], S);
        for (var oe in ae) {
          var I = S[oe];
          if (o(S, oe) && typeof I != "function")
            return Z(V, Q, K, oe, ye(I));
          if (!I)
            return new p(
              "Invalid " + Q + " `" + K + "` key `" + oe + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(M[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var D = I(J, oe, V, Q, K + "." + oe, r);
          if (D)
            return D;
        }
        return null;
      }
      return y(P);
    }
    function te(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(te);
          if (S === null || s(S))
            return !0;
          var P = d(S);
          if (P) {
            var M = P.call(S), G;
            if (P !== S.entries) {
              for (; !(G = M.next()).done; )
                if (!te(G.value))
                  return !1;
            } else
              for (; !(G = M.next()).done; ) {
                var V = G.value;
                if (V && !te(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Fe(S, P) {
      return S === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function de(S) {
      var P = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : Fe(P, S) ? "symbol" : P;
    }
    function ye(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var P = de(S);
      if (P === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function R(S) {
      var P = ye(S);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function U(S) {
      return !S.constructor || !S.constructor.name ? f : S.constructor.name;
    }
    return v.checkPropTypes = n, v.resetWarningCache = n.resetWarningCache, v.PropTypes = v, v;
  }, Hi;
}
var $i, ic;
function y_() {
  if (ic)
    return $i;
  ic = 1;
  var e = ys();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, $i = function() {
    function o(a, s, l, c, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    o.isRequired = o;
    function n() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: n,
      element: o,
      elementType: o,
      instanceOf: n,
      node: o,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, $i;
}
if (process.env.NODE_ENV !== "production") {
  var __ = Vd(), w_ = !0;
  Ba.exports = b_()(__.isElement, w_);
} else
  Ba.exports = y_()();
var k_ = Ba.exports;
const ee = /* @__PURE__ */ Xg(k_), ac = {
  disabled: !1
};
var x_ = process.env.NODE_ENV !== "production" ? ee.oneOfType([ee.number, ee.shape({
  enter: ee.number,
  exit: ee.number,
  appear: ee.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && ee.oneOfType([ee.string, ee.shape({
  enter: ee.string,
  exit: ee.string,
  active: ee.string
}), ee.shape({
  enter: ee.string,
  enterDone: ee.string,
  enterActive: ee.string,
  exit: ee.string,
  exitDone: ee.string,
  exitActive: ee.string
})]);
const $d = ht.createContext(null);
var S_ = function(t) {
  return t.scrollTop;
}, Qr = "unmounted", rr = "exited", or = "entering", kr = "entered", Na = "exiting", Vt = /* @__PURE__ */ function(e) {
  h_(t, e);
  function t(o, n) {
    var i;
    i = e.call(this, o, n) || this;
    var a = n, s = a && !a.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? s ? (l = rr, i.appearStatus = or) : l = kr : o.unmountOnExit || o.mountOnEnter ? l = Qr : l = rr, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(n, i) {
    var a = n.in;
    return a && i.status === Qr ? {
      status: rr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(n) {
    var i = null;
    if (n !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== or && a !== kr && (i = or) : (a === or || a === kr) && (i = Na);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var n = this.props.timeout, i, a, s;
    return i = a = s = n, n != null && typeof n != "number" && (i = n.exit, a = n.enter, s = n.appear !== void 0 ? n.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, r.updateStatus = function(n, i) {
    if (n === void 0 && (n = !1), i !== null)
      if (this.cancelNextCallback(), i === or) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Mo.findDOMNode(this);
          a && S_(a);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === rr && this.setState({
        status: Qr
      });
  }, r.performEnter = function(n) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [s] : [Mo.findDOMNode(this), s], c = l[0], u = l[1], d = this.getTimeouts(), f = s ? d.appear : d.enter;
    if (!n && !a || ac.disabled) {
      this.safeSetState({
        status: kr
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: or
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: kr
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, r.performExit = function() {
    var n = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Mo.findDOMNode(this);
    if (!i || ac.disabled) {
      this.safeSetState({
        status: rr
      }, function() {
        n.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Na
    }, function() {
      n.props.onExiting(s), n.onTransitionEnd(a.exit, function() {
        n.safeSetState({
          status: rr
        }, function() {
          n.props.onExited(s);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(n, i) {
    i = this.setNextCallback(i), this.setState(n, i);
  }, r.setNextCallback = function(n) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, n(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(n, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Mo.findDOMNode(this), s = n == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, r.render = function() {
    var n = this.state.status;
    if (n === Qr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = f_(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ht.createElement($d.Provider, {
        value: null
      }, typeof a == "function" ? a(n, s) : ht.cloneElement(ht.Children.only(a), s))
    );
  }, t;
}(ht.Component);
Vt.contextType = $d;
Vt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: ee.shape({
    current: typeof Element > "u" ? ee.any : function(e, t, r, o, n, i) {
      var a = e[t];
      return ee.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, o, n, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: ee.oneOfType([ee.func.isRequired, ee.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: ee.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: ee.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: ee.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: ee.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: ee.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: ee.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = x_;
    t.addEndListener || (r = r.isRequired);
    for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      n[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(n));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: ee.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: ee.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: ee.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: ee.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: ee.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: ee.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: ee.func
} : {};
function wr() {
}
Vt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wr,
  onEntering: wr,
  onEntered: wr,
  onExit: wr,
  onExiting: wr,
  onExited: wr
};
Vt.UNMOUNTED = Qr;
Vt.EXITED = rr;
Vt.ENTERING = or;
Vt.ENTERED = kr;
Vt.EXITING = Na;
const E_ = Vt, B_ = void 0, Wd = b.createContext(void 0), sc = Wd.Provider, N_ = () => {
  var e;
  return (e = b.useContext(Wd)) !== null && e !== void 0 ? e : B_;
}, T_ = (e, t) => {
  const { content: r, trigger: o } = e;
  return /* @__PURE__ */ $(s_, {
    value: t.dialog,
    children: /* @__PURE__ */ Ve(Ld, {
      value: t.dialogSurface,
      children: [
        o,
        process.env.NODE_ENV === "test" ? e.open && /* @__PURE__ */ $(sc, {
          value: void 0,
          children: r
        }) : /* @__PURE__ */ $(E_, {
          mountOnEnter: !0,
          unmountOnExit: !0,
          in: e.open,
          nodeRef: e.dialogRef,
          appear: !0,
          // FIXME: this should not be hardcoded tokens.durationGentle
          timeout: 250,
          children: (n) => /* @__PURE__ */ $(sc, {
            value: n,
            children: r
          })
        })
      ]
    })
  });
};
function C_(e) {
  const { modalType: t, open: r, dialogRef: o, dialogTitleId: n, isNestedDialog: i, inertTrapFocus: a, requestOpenChange: s, modalAttributes: l, triggerAttributes: c } = e;
  return {
    dialog: {
      open: r,
      modalType: t,
      dialogRef: o,
      dialogTitleId: n,
      isNestedDialog: i,
      inertTrapFocus: a,
      modalAttributes: l,
      triggerAttributes: c,
      requestOpenChange: s
    },
    dialogSurface: !1
  };
}
const Ud = /* @__PURE__ */ b.memo((e) => {
  const t = u_(e), r = C_(t);
  return T_(t, r);
});
Ud.displayName = "Dialog";
const P_ = (e) => {
  const t = c_(), { children: r, disableButtonEnhancement: o = !1, action: n = t ? "close" : "open" } = e, i = nd(r), a = zt((d) => d.requestOpenChange), { triggerAttributes: s } = Nd(), l = Et((d) => {
    var f, v;
    i == null || (f = (v = i.props).onClick) === null || f === void 0 || f.call(v, d), d.isDefaultPrevented() || a({
      event: d,
      type: "triggerClick",
      open: n === "open"
    });
  }), c = {
    ...i == null ? void 0 : i.props,
    ref: i == null ? void 0 : i.ref,
    onClick: l,
    ...s
  }, u = vs((i == null ? void 0 : i.type) === "button" || (i == null ? void 0 : i.type) === "a" ? i.type : "div", {
    ...c,
    type: "button"
  });
  return {
    children: $g(r, o ? c : u)
  };
}, O_ = (e) => e.children, Qn = (e) => {
  const t = P_(e);
  return O_(t);
};
Qn.displayName = "DialogTrigger";
Qn.isFluentTriggerComponent = !0;
const z_ = (e, t) => {
  const { position: r = "end", fluid: o = !1 } = e;
  return {
    components: {
      root: "div"
    },
    root: le(Ce("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    }),
    position: r,
    fluid: o
  };
}, R_ = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), D_ = {
  root: "fui-DialogActions"
}, A_ = /* @__PURE__ */ _e("rhfpeu0", null, {
  r: [".rhfpeu0{gap:8px;height:fit-content;box-sizing:border-box;display:flex;grid-row-start:3;grid-row-end:3;}"],
  s: ["@media screen and (max-width: 480px){.rhfpeu0{flex-direction:column;justify-self:stretch;}}"]
}), j_ = /* @__PURE__ */ W({
  gridPositionEnd: {
    Bdqf98w: "f1a7i8kp",
    Br312pm: "fd46tj4",
    Bw0ie65: "fsyjsko",
    B6n781s: "f1f41i0t",
    Bv5d0be: "f1jaqex3",
    v4ugfu: "f2ao6jk"
  },
  gridPositionStart: {
    Bdqf98w: "fsxvdwy",
    Br312pm: "fwpfdsa",
    Bw0ie65: "f1e2fz10",
    Bojbm9c: "f11ihkml",
    Bv5d0be: "fce5bvx",
    v4ugfu: "f2ao6jk"
  },
  fluidStart: {
    Bw0ie65: "fsyjsko"
  },
  fluidEnd: {
    Br312pm: "fwpfdsa"
  }
}, {
  d: [".f1a7i8kp{justify-self:end;}", ".fd46tj4{grid-column-start:2;}", ".fsyjsko{grid-column-end:4;}", ".fsxvdwy{justify-self:start;}", ".fwpfdsa{grid-column-start:1;}", ".f1e2fz10{grid-column-end:2;}"],
  m: [["@media screen and (max-width: 480px){.f1f41i0t{grid-column-start:1;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f1jaqex3{grid-row-start:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f2ao6jk{grid-row-end:auto;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f11ihkml{grid-column-end:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.fce5bvx{grid-row-start:3;}}", {
    m: "screen and (max-width: 480px)"
  }]]
}), F_ = (e) => {
  const t = A_(), r = j_();
  return e.root.className = H(D_.root, t, e.position === "start" && r.gridPositionStart, e.position === "end" && r.gridPositionEnd, e.fluid && e.position === "start" && r.fluidStart, e.fluid && e.position === "end" && r.fluidEnd, e.root.className), e;
}, Gd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = z_(e, t);
  return F_(r), Ne("useDialogActionsStyles_unstable")(r), R_(r);
});
Gd.displayName = "DialogActions";
const I_ = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: le(Ce((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, q_ = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), M_ = {
  root: "fui-DialogBody"
}, L_ = /* @__PURE__ */ _e("r1h3qql9", null, {
  r: [".r1h3qql9{overflow:unset;gap:8px;display:grid;max-height:calc(100vh - 2 * 24px);box-sizing:border-box;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr auto;}"],
  s: ["@media screen and (max-width: 480px){.r1h3qql9{max-width:100vw;grid-template-rows:auto 1fr auto;}}", "@media screen and (max-height: 359px){.r1h3qql9{max-height:unset;}}"]
}), V_ = (e) => {
  const t = L_();
  return e.root.className = H(M_.root, t, e.root.className), e;
}, Kd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = I_(e, t);
  return V_(r), Ne("useDialogBodyStyles_unstable")(r), q_(r);
});
Kd.displayName = "DialogBody";
const lc = {
  root: "fui-DialogTitle",
  action: "fui-DialogTitle__action"
}, H_ = /* @__PURE__ */ _e("rxjm636", null, [".rxjm636{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}"]), $_ = /* @__PURE__ */ W({
  rootWithoutAction: {
    Bw0ie65: "fsyjsko"
  }
}, {
  d: [".fsyjsko{grid-column-end:4;}"]
}), W_ = /* @__PURE__ */ _e("r13kcrze", null, [".r13kcrze{grid-row-start:1;grid-row-end:1;grid-column-start:3;justify-self:end;align-self:start;}"]), U_ = /* @__PURE__ */ _e("r8i4vpr", "r15ezg2h", {
  r: [".r8i4vpr{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r8i4vpr:focus{outline-style:none;}", ".r8i4vpr:focus-visible{outline-style:none;}", ".r8i4vpr[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r8i4vpr[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r15ezg2h{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r15ezg2h:focus{outline-style:none;}", ".r15ezg2h:focus-visible{outline-style:none;}", ".r15ezg2h[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r15ezg2h[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r8i4vpr[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.r15ezg2h[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
}), G_ = (e) => {
  const t = H_(), r = W_(), o = $_();
  return e.root.className = H(lc.root, t, !e.action && o.rootWithoutAction, e.root.className), e.action && (e.action.className = H(lc.action, r, e.action.className)), e;
}, K_ = (e, t) => {
  const { action: r } = e, o = zt((i) => i.modalType), n = U_();
  return {
    components: {
      root: "h2",
      action: "div"
    },
    root: le(Ce("h2", {
      ref: t,
      id: zt((i) => i.dialogTitleId),
      ...e
    }), {
      elementType: "h2"
    }),
    action: xe(r, {
      renderByDefault: o === "non-modal",
      defaultProps: {
        children: /* @__PURE__ */ b.createElement(Qn, {
          disableButtonEnhancement: !0,
          action: "close"
        }, /* @__PURE__ */ b.createElement("button", {
          type: "button",
          className: n,
          // TODO: find a better way to add internal labels
          "aria-label": "close"
        }, /* @__PURE__ */ b.createElement(_m, null)))
      },
      elementType: "div"
    })
  };
}, X_ = (e) => (ge(e), /* @__PURE__ */ Ve(Yh, {
  children: [
    /* @__PURE__ */ $(e.root, {
      children: e.root.children
    }),
    e.action && /* @__PURE__ */ $(e.action, {})
  ]
})), Xd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = K_(e, t);
  return G_(r), Ne("useDialogTitleStyles_unstable")(r), X_(r);
});
Xd.displayName = "DialogTitle";
const Y_ = (e, t) => {
  const r = zt((f) => f.modalType), o = zt((f) => f.isNestedDialog), n = N_(), i = zt((f) => f.modalAttributes), a = zt((f) => f.dialogRef), s = zt((f) => f.requestOpenChange), l = zt((f) => f.dialogTitleId), c = Et((f) => {
    if (rg(e.backdrop)) {
      var v, h;
      (v = (h = e.backdrop).onClick) === null || v === void 0 || v.call(h, f);
    }
    r === "modal" && !f.isDefaultPrevented() && s({
      event: f,
      open: !1,
      type: "backdropClick"
    });
  }), u = Et((f) => {
    var v;
    (v = e.onKeyDown) === null || v === void 0 || v.call(e, f), f.key === xy && !f.isDefaultPrevented() && (s({
      event: f,
      open: !1,
      type: "escapeKeyDown"
    }), f.preventDefault());
  }), d = xe(e.backdrop, {
    renderByDefault: r !== "non-modal",
    defaultProps: {
      "aria-hidden": "true"
    },
    elementType: "div"
  });
  return d && (d.onClick = c), {
    components: {
      backdrop: "div",
      root: "div"
    },
    backdrop: d,
    isNestedDialog: o,
    transitionStatus: n,
    mountNode: e.mountNode,
    root: le(Ce("div", {
      tabIndex: -1,
      "aria-modal": r !== "non-modal",
      role: r === "alert" ? "alertdialog" : "dialog",
      "aria-labelledby": e["aria-label"] ? void 0 : l,
      ...e,
      ...i,
      onKeyDown: u,
      // FIXME:
      // `DialogSurfaceElement` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: xo(t, a)
    }), {
      elementType: "div"
    })
  };
}, J_ = (e, t) => (ge(e), /* @__PURE__ */ Ve(Td, {
  mountNode: e.mountNode,
  children: [
    e.backdrop && /* @__PURE__ */ $(e.backdrop, {}),
    /* @__PURE__ */ $(Ld, {
      value: t.dialogSurface,
      children: /* @__PURE__ */ $(e.root, {})
    })
  ]
})), cc = {
  root: "fui-DialogSurface",
  backdrop: "fui-DialogSurface__backdrop"
}, Z_ = /* @__PURE__ */ _e("rhzkxut", "r1dhpx9", {
  r: [".rhzkxut{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".rhzkxut:focus{outline-style:none;}", ".rhzkxut:focus-visible{outline-style:none;}", ".rhzkxut[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.rhzkxut[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r1dhpx9{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".r1dhpx9:focus{outline-style:none;}", ".r1dhpx9:focus-visible{outline-style:none;}", ".r1dhpx9[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r1dhpx9[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.rhzkxut[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media screen and (max-width: 480px){.rhzkxut{max-width:100vw;}}", "@media screen and (max-height: 359px){.rhzkxut{overflow-y:auto;padding-right:calc(24px - 4px);border-right-width:4px;border-top-width:4px;border-bottom-width:4px;}}", "@media (forced-colors: active){.r1dhpx9[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}", "@media screen and (max-width: 480px){.r1dhpx9{max-width:100vw;}}", "@media screen and (max-height: 359px){.r1dhpx9{overflow-y:auto;padding-left:calc(24px - 4px);border-left-width:4px;border-top-width:4px;border-bottom-width:4px;}}"]
}), Q_ = /* @__PURE__ */ W({
  animated: {
    abs64n: "fk73vx1",
    E5pizo: "f1yzz98r",
    Bz10aip: "f15ofi6c"
  },
  static: {
    E5pizo: "f10nrhrw"
  },
  unmounted: {},
  entering: {
    B3o57yi: "fc397y7",
    Bmy1vo4: "f1b86uth",
    Bkqvd7p: "f18ad807",
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  entered: {
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  idle: {
    E5pizo: "f10nrhrw",
    Bz10aip: "f186d0ee",
    abs64n: "f5p0z4x"
  },
  exiting: {
    B3o57yi: "fc397y7",
    Bmy1vo4: "f1b86uth",
    Bkqvd7p: "f1mfizis"
  },
  exited: {}
}, {
  d: [".fk73vx1{opacity:0;}", ".f1yzz98r{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.1);}", ".f15ofi6c{transform:scale(0.85) translateZ(0);}", ".f10nrhrw{box-shadow:var(--shadow64);}", ".fc397y7{transition-duration:var(--durationGentle);}", ".f1b86uth{transition-property:opacity,transform,box-shadow;}", ".f18ad807{transition-timing-function:var(--curveDecelerateMid);}", ".f186d0ee{transform:scale(1) translateZ(0);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
}), e0 = /* @__PURE__ */ _e("r19ug08i", null, [".r19ug08i{inset:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}"]), t0 = /* @__PURE__ */ W({
  nestedDialogBackdrop: {
    De3pzq: "f1c21dwh"
  },
  unmounted: {},
  entering: {
    abs64n: "f5p0z4x"
  },
  entered: {
    abs64n: "f5p0z4x"
  },
  idle: {
    abs64n: "f5p0z4x"
  },
  exiting: {
    Bkqvd7p: "f1mfizis"
  },
  exited: {}
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
}), r0 = (e) => {
  const {
    isNestedDialog: t,
    root: r,
    backdrop: o,
    transitionStatus: n
  } = e, i = Z_(), a = Q_(), s = e0(), l = t0();
  return r.className = H(cc.root, i, n ? a.animated : a.static, n && a[n], r.className), o && (o.className = H(cc.backdrop, s, t && l.nestedDialogBackdrop, n && l[n], o.className)), e;
};
function o0(e) {
  return {
    dialogSurface: !0
  };
}
const Yd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Y_(e, t), o = o0();
  return r0(r), Ne("useDialogSurfaceStyles_unstable")(r), J_(r, o);
});
Yd.displayName = "DialogSurface";
const n0 = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: le(Ce((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, i0 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), a0 = {
  root: "fui-DialogContent"
}, s0 = /* @__PURE__ */ _e("r1v5zwsm", null, {
  r: [".r1v5zwsm{padding:var(--strokeWidthThick);margin:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}"],
  s: ["@media screen and (max-height: 359px){.r1v5zwsm{overflow-y:unset;}}"]
}), l0 = (e) => {
  const t = s0();
  return e.root.className = H(a0.root, t, e.root.className), e;
}, Jd = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = n0(e, t);
  return l0(r), Ne("useDialogContentStyles_unstable")(r), i0(r);
});
Jd.displayName = "DialogContent";
const Zd = b.createContext(void 0), c0 = {
  size: "medium",
  noNativeElements: !1,
  sortable: !1
}, u0 = Zd.Provider, Mr = () => {
  var e;
  return (e = b.useContext(Zd)) !== null && e !== void 0 ? e : c0;
}, d0 = (e, t) => {
  const { noNativeElements: r, size: o } = Mr();
  var n;
  const i = ((n = e.as) !== null && n !== void 0 ? n : r) ? "div" : "td";
  return {
    components: {
      root: i
    },
    root: le(Ce(i, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: i === "div" ? "cell" : void 0,
      ...e
    }), {
      elementType: i
    }),
    noNativeElements: r,
    size: o
  };
}, f0 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), h0 = "fui-TableCell", v0 = {
  root: h0
}, p0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f15pt5es",
    ha4doy: "fmrv4ls"
  },
  medium: {
    Bqenvij: "f1ft4266"
  },
  small: {
    Bqenvij: "fbsu25e"
  },
  "extra-small": {
    Bqenvij: "frvgh55"
  }
}, {
  d: [".f15pt5es{display:table-cell;}", ".fmrv4ls{vertical-align:middle;}", ".f1ft4266{height:44px;}", ".fbsu25e{height:34px;}", ".frvgh55{height:24px;}"]
}), g0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f22iagw",
    Bf4jedk: "f10tiqix",
    Bt984gj: "f122n59",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh"
  },
  medium: {
    sshi5w: "f5pgtk9"
  },
  small: {
    sshi5w: "fcep9tg"
  },
  "extra-small": {
    sshi5w: "f1pha7fy"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f10tiqix{min-width:0px;}", ".f122n59{align-items:center;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f5pgtk9{min-height:44px;}", ".fcep9tg{min-height:34px;}", ".f1pha7fy{min-height:24px;}"]
}), m0 = /* @__PURE__ */ W({
  root: {
    qhf8xq: "f10pi13n",
    z8tnut: "f1nbblvp",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1ov4xf1",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    Bn4voq9: "fz36nt7",
    g9k6zt: "f9znhxp",
    Bfpq7zp: "fqrak0z",
    kdpuga: ["f1o2ludy", "f1kjnpwc"],
    Bw81rd7: ["f1kjnpwc", "f1o2ludy"],
    B6xbmo0: ["fxmnebo", "f1witrsb"],
    dm238s: ["f1witrsb", "fxmnebo"]
  }
}, {
  d: [".f10pi13n{position:relative;}", ".f1nbblvp{padding-top:0px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1ov4xf1{padding-bottom:0px;}", ".fz36nt7[data-fui-focus-visible]{outline-width:2px;}", ".f9znhxp[data-fui-focus-visible]{outline-style:solid;}", ".fqrak0z[data-fui-focus-visible]{outline-color:var(--colorStrokeFocus2);}", ".f1o2ludy[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f1kjnpwc[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusMedium);}", ".fxmnebo[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusMedium);}", ".f1witrsb[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusMedium);}"]
}), b0 = (e) => {
  const t = m0(), r = {
    table: p0(),
    flex: g0()
  };
  return e.root.className = H(v0.root, t.root, e.noNativeElements ? r.flex.root : r.table.root, e.noNativeElements ? r.flex[e.size] : r.table[e.size], e.root.className), e;
}, eo = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = d0(e, t);
  return b0(r), Ne("useTableCellStyles_unstable")(r), f0(r);
});
eo.displayName = "TableCell";
const Qd = b.createContext(void 0), y0 = "", _0 = Qd.Provider, w0 = () => b.useContext(Qd) === y0, k0 = (e, t) => {
  const { noNativeElements: r, size: o } = Mr();
  var n;
  const i = ((n = e.as) !== null && n !== void 0 ? n : r) ? "div" : "tr", a = Bd(), s = Zn(), l = w0();
  var c;
  return {
    components: {
      root: i
    },
    root: le(Ce(i, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: xo(t, a, s),
      role: i === "div" ? "row" : void 0,
      ...e
    }), {
      elementType: i
    }),
    size: o,
    noNativeElements: r,
    appearance: (c = e.appearance) !== null && c !== void 0 ? c : "none",
    isHeaderRow: l
  };
}, x0 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), S0 = "fui-TableRow", E0 = {
  root: S0
}, B0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f1u0rzck"
  }
}, {
  d: [".f1u0rzck{display:table-row;}"]
}), N0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}"]
}), T0 = /* @__PURE__ */ W({
  root: {
    sj55zd: "f19n0e5",
    B7ck84d: "f1ewtqcl",
    Bconypa: "f1jazu75",
    B6guboy: "f1xeqee6",
    Bn4voq9: "fz36nt7",
    g9k6zt: "f9znhxp",
    Bfpq7zp: "fqrak0z",
    kdpuga: ["f1o2ludy", "f1kjnpwc"],
    Bw81rd7: ["f1kjnpwc", "f1o2ludy"],
    B6xbmo0: ["fxmnebo", "f1witrsb"],
    dm238s: ["f1witrsb", "fxmnebo"]
  },
  rootInteractive: {
    ecr2s2: "f1wfn5kd",
    lj723h: "f1g4hkjv",
    B43xm9u: "f15ngxrw",
    i921ia: "fjbbrdp",
    Jwef8y: "f1t94bn6",
    Bi91k9c: "feu1g3u",
    Bpt6rm4: "f1uorfem",
    ff6mpl: "fw60kww",
    ze5xyy: "f4xjyn1",
    pgvf35: "ff1wgvm",
    Bh7lczh: ["fiob0tu", "f1x4h75k"],
    dpv3f4: "f1j6scgf",
    Bpnjhaq: ["f1x4h75k", "fiob0tu"]
  },
  medium: {
    Bn0qgzm: "f1vxd6vx",
    oivjwe: "fg706s2",
    B9xav0g: "frpde29"
  },
  small: {
    Bn0qgzm: "f1vxd6vx",
    oivjwe: "fg706s2",
    B9xav0g: "frpde29"
  },
  "extra-small": {
    Be2twd7: "fy9rknc"
  },
  brand: {
    De3pzq: "f16xkysk",
    g2u3we: "f1bh3yvw",
    h3c5rm: ["fmi79ni", "f11fozsx"],
    B9xav0g: "fnzw4c6",
    zhjwy3: ["f11fozsx", "fmi79ni"],
    ecr2s2: "f7tkmfy",
    lj723h: "f1r2dosr",
    gwxt9v: "fqlf3fd",
    v3aym: ["f9dpb3h", "fw2muls"],
    Bc736ss: "f1yat0gj",
    Bk6ri7n: ["fw2muls", "f9dpb3h"],
    Bk5ld8o: "f7nae3y",
    c4eypz: ["fkbere7", "fa97sf3"],
    felo30: "fmtyzcc",
    Eshu5l: ["fa97sf3", "fkbere7"],
    Bjwas2f: "fb6zhgp",
    Bn1d65q: ["fyowp6c", "fz08sq8"],
    Bxeuatn: "f9dii88",
    n51gp8: ["fz08sq8", "fyowp6c"],
    Beo2b4z: ["f1afxoft", "flqq2yx"],
    h6lo6r: ["flqq2yx", "f1afxoft"],
    Btyw6ap: ["f1b5xrmd", "f1831rx6"],
    w1pwid: ["f1831rx6", "f1b5xrmd"],
    Brwvgy3: "fd94n53",
    yadkgm: "f1e0wld5"
  },
  neutral: {
    gwxt9v: "fqlf3fd",
    v3aym: ["f9dpb3h", "fw2muls"],
    Bc736ss: "f1yat0gj",
    Bk6ri7n: ["fw2muls", "f9dpb3h"],
    Bk5ld8o: "f7nae3y",
    c4eypz: ["fkbere7", "fa97sf3"],
    felo30: "fmtyzcc",
    Eshu5l: ["fa97sf3", "fkbere7"],
    Bjwas2f: "fb6zhgp",
    Bn1d65q: ["fyowp6c", "fz08sq8"],
    Bxeuatn: "f9dii88",
    n51gp8: ["fz08sq8", "fyowp6c"],
    Beo2b4z: ["f1afxoft", "flqq2yx"],
    h6lo6r: ["flqq2yx", "f1afxoft"],
    Btyw6ap: ["f1b5xrmd", "f1831rx6"],
    w1pwid: ["f1831rx6", "f1b5xrmd"],
    Brwvgy3: "fd94n53",
    yadkgm: "f1e0wld5",
    De3pzq: "fq5gl1p",
    sj55zd: "f1cgsbmv",
    Jwef8y: "f1uqaxdt",
    ecr2s2: "fa9o754",
    g2u3we: "frmsihh",
    h3c5rm: ["frttxa5", "f11o2r7f"],
    B9xav0g: "fem5et0",
    zhjwy3: ["f11o2r7f", "frttxa5"]
  },
  none: {}
}, {
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1ewtqcl{box-sizing:border-box;}", ".f1jazu75[data-fui-focus-within]:focus-within .fui-TableSelectionCell{opacity:1;}", ".f1xeqee6[data-fui-focus-within]:focus-within .fui-TableCellActions{opacity:1;}", ".fz36nt7[data-fui-focus-visible]{outline-width:2px;}", ".f9znhxp[data-fui-focus-visible]{outline-style:solid;}", ".fqrak0z[data-fui-focus-visible]{outline-color:var(--colorStrokeFocus2);}", ".f1o2ludy[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f1kjnpwc[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusMedium);}", ".fxmnebo[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusMedium);}", ".f1witrsb[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusMedium);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fg706s2{border-bottom-style:solid;}", ".frpde29{border-bottom-color:var(--colorNeutralStroke2);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".f16xkysk{background-color:var(--colorBrandBackground2);}", ".f1bh3yvw{border-top-color:var(--colorTransparentStrokeInteractive);}", ".fmi79ni{border-right-color:var(--colorTransparentStrokeInteractive);}", ".f11fozsx{border-left-color:var(--colorTransparentStrokeInteractive);}", ".fnzw4c6{border-bottom-color:var(--colorTransparentStrokeInteractive);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1cgsbmv{color:var(--colorNeutralForeground1Hover);}", ".frmsihh{border-top-color:var(--colorNeutralStrokeOnBrand);}", ".frttxa5{border-right-color:var(--colorNeutralStrokeOnBrand);}", ".f11o2r7f{border-left-color:var(--colorNeutralStrokeOnBrand);}", ".fem5et0{border-bottom-color:var(--colorNeutralStrokeOnBrand);}"],
  a: [".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1g4hkjv:active{color:var(--colorNeutralForeground1Pressed);}", ".f15ngxrw:active .fui-TableCellActions{opacity:1;}", ".fjbbrdp:active .fui-TableSelectionCell{opacity:1;}", ".f7tkmfy:active{background-color:var(--colorBrandBackground2);}", ".f1r2dosr:active{color:var(--colorNeutralForeground1);}", ".fa9o754:active{background-color:var(--colorSubtleBackgroundSelected);}"],
  h: [".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".feu1g3u:hover{color:var(--colorNeutralForeground1Hover);}", ".f1uorfem:hover .fui-TableCellActions{opacity:1;}", ".fw60kww:hover .fui-TableSelectionCell{opacity:1;}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}"],
  m: [["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fqlf3fd{border-top-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9dpb3h{border-right-width:2px;}.fw2muls{border-left-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1yat0gj{border-bottom-width:2px;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f7nae3y{border-top-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fa97sf3{border-left-style:solid;}.fkbere7{border-right-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fmtyzcc{border-bottom-style:solid;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fb6zhgp{border-top-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fyowp6c{border-right-color:transparent;}.fz08sq8{border-left-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9dii88{border-bottom-color:transparent;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1afxoft{border-bottom-right-radius:var(--borderRadiusMedium);}.flqq2yx{border-bottom-left-radius:var(--borderRadiusMedium);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1831rx6{border-top-left-radius:var(--borderRadiusMedium);}.f1b5xrmd{border-top-right-radius:var(--borderRadiusMedium);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fd94n53{box-sizing:border-box;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1e0wld5:focus-visible{outline-offset:-4px;}}", {
    m: "(forced-colors: active)"
  }]]
}), C0 = (e) => {
  const t = T0(), r = {
    table: B0(),
    flex: N0()
  };
  return e.root.className = H(E0.root, t.root, !e.isHeaderRow && t.rootInteractive, t[e.size], e.noNativeElements ? r.flex.root : r.table.root, t[e.appearance], e.root.className), e;
}, Ta = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = k0(e, t);
  return C0(r), Ne("useTableRowStyles_unstable")(r), x0(r);
});
Ta.displayName = "TableRow";
const P0 = (e, t) => {
  const { noNativeElements: r } = Mr();
  var o;
  const n = ((o = e.as) !== null && o !== void 0 ? o : r) ? "div" : "tbody";
  return {
    components: {
      root: n
    },
    root: le(Ce(n, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: n === "div" ? "rowgroup" : void 0,
      ...e
    }), {
      elementType: n
    }),
    noNativeElements: r
  };
}, O0 = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), z0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f1tp1avn"
  }
}, {
  d: [".f1tp1avn{display:table-row-group;}"]
}), R0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), D0 = "fui-TableBody", A0 = (e) => {
  const t = {
    table: z0(),
    flex: R0()
  };
  return e.root.className = H(D0, e.noNativeElements ? t.flex.root : t.table.root, e.root.className), e;
}, ef = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = P0(e, t);
  return A0(r), Ne("useTableBodyStyles_unstable")(r), O0(r);
});
ef.displayName = "TableBody";
const j0 = (e, t) => {
  var r;
  const o = ((r = e.as) !== null && r !== void 0 ? r : e.noNativeElements) ? "div" : "table";
  var n, i, a;
  return {
    components: {
      root: o
    },
    root: le(Ce(o, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: o === "div" ? "table" : void 0,
      ...e
    }), {
      elementType: o
    }),
    size: (n = e.size) !== null && n !== void 0 ? n : "medium",
    noNativeElements: (i = e.noNativeElements) !== null && i !== void 0 ? i : !1,
    sortable: (a = e.sortable) !== null && a !== void 0 ? a : !1
  };
}, F0 = (e, t) => (ge(e), /* @__PURE__ */ $(u0, {
  value: t.table,
  children: /* @__PURE__ */ $(e.root, {})
})), I0 = "fui-Table", q0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f1w4nmp0",
    ha4doy: "fmrv4ls",
    a9b677: "fly5x3f",
    B73mfa3: "f14m3nip"
  }
}, {
  d: [".f1w4nmp0{display:table;}", ".fmrv4ls{vertical-align:middle;}", ".fly5x3f{width:100%;}", ".f14m3nip{table-layout:fixed;}"]
}), M0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), L0 = /* @__PURE__ */ W({
  root: {
    po53p8: "fgkb47j",
    De3pzq: "fhovq9v"
  }
}, {
  d: [".fgkb47j{border-collapse:collapse;}", ".fhovq9v{background-color:var(--colorSubtleBackground);}"]
}), V0 = (e) => {
  const t = L0(), r = {
    table: q0(),
    flex: M0()
  };
  return e.root.className = H(I0, t.root, e.noNativeElements ? r.flex.root : r.table.root, e.root.className), e;
};
function H0(e) {
  const { size: t, noNativeElements: r, sortable: o } = e;
  return {
    table: b.useMemo(() => ({
      noNativeElements: r,
      size: t,
      sortable: o
    }), [
      r,
      t,
      o
    ])
  };
}
const tf = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = j0(e, t);
  return V0(r), Ne("useTableStyles_unstable")(r), F0(r, H0(r));
});
tf.displayName = "Table";
const $0 = (e, t) => {
  const { noNativeElements: r } = Mr();
  var o;
  const n = ((o = e.as) !== null && o !== void 0 ? o : r) ? "div" : "thead";
  return {
    components: {
      root: n
    },
    root: le(Ce(n, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      role: n === "div" ? "rowgroup" : void 0,
      ...e
    }), {
      elementType: n
    }),
    noNativeElements: r
  };
}, W0 = (e) => (ge(e), /* @__PURE__ */ $(_0, {
  value: "",
  children: /* @__PURE__ */ $(e.root, {})
})), U0 = "fui-TableHeader", G0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "ftgm304"
  }
}, {
  d: [".ftgm304{display:block;}"]
}), K0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f1tp1avn"
  }
}, {
  d: [".f1tp1avn{display:table-row-group;}"]
}), X0 = (e) => {
  const t = {
    table: K0(),
    flex: G0()
  };
  return e.root.className = H(U0, e.noNativeElements ? t.flex.root : t.table.root, e.root.className), e;
}, rf = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = $0(e, t);
  return X0(r), Ne("useTableHeaderStyles_unstable")(r), W0(r);
});
rf.displayName = "TableHeader";
const Y0 = {
  ascending: /* @__PURE__ */ b.createElement(sm, {
    fontSize: 12
  }),
  descending: /* @__PURE__ */ b.createElement(am, {
    fontSize: 12
  })
}, J0 = (e, t) => {
  const { noNativeElements: r, sortable: o } = Mr(), { sortable: n = o } = e;
  var i;
  const a = ((i = e.as) !== null && i !== void 0 ? i : r) ? "div" : "th", s = le(e.button, {
    elementType: "div",
    defaultProps: {
      as: "div",
      ...!n && {
        role: "presentation",
        tabIndex: void 0
      }
    }
  });
  var l;
  return {
    components: {
      root: a,
      button: "div",
      sortIcon: "span",
      aside: "span"
    },
    root: le(Ce(a, {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: xo(t, Zn()),
      role: a === "div" ? "columnheader" : void 0,
      "aria-sort": n ? (l = e.sortDirection) !== null && l !== void 0 ? l : "none" : void 0,
      ...e
    }), {
      elementType: a
    }),
    aside: xe(e.aside, {
      elementType: "span"
    }),
    sortIcon: xe(e.sortIcon, {
      renderByDefault: !!e.sortDirection,
      defaultProps: {
        children: e.sortDirection ? Y0[e.sortDirection] : void 0
      },
      elementType: "span"
    }),
    button: vs(s.as, s),
    sortable: n,
    noNativeElements: r
  };
}, Z0 = (e) => (ge(e), /* @__PURE__ */ Ve(e.root, {
  children: [
    /* @__PURE__ */ Ve(e.button, {
      children: [
        e.root.children,
        e.sortIcon && /* @__PURE__ */ $(e.sortIcon, {})
      ]
    }),
    e.aside && /* @__PURE__ */ $(e.aside, {})
  ]
})), Yo = {
  root: "fui-TableHeaderCell",
  button: "fui-TableHeaderCell__button",
  sortIcon: "fui-TableHeaderCell__sortIcon",
  aside: "fui-TableHeaderCell__aside"
}, Q0 = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f15pt5es",
    ha4doy: "fmrv4ls"
  }
}, {
  d: [".f15pt5es{display:table-cell;}", ".fmrv4ls{vertical-align:middle;}"]
}), ew = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh",
    Bf4jedk: "f10tiqix"
  }
}, {
  d: [".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f10tiqix{min-width:0px;}"]
}), tw = /* @__PURE__ */ W({
  root: {
    Bhrd7zp: "figsok6",
    z8tnut: "f1nbblvp",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1ov4xf1",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    B3nxjsc: "fhix6mv",
    Bmvh20x: "fha7anx",
    robkg1: "f1fmzww4",
    pehzd3: ["fs9qmxf", "f187m4uq"],
    B8osjzx: ["f187m4uq", "fs9qmxf"],
    u7xebq: ["f145mzao", "f1uha7eq"],
    Blsv9te: ["f1uha7eq", "f145mzao"],
    qhf8xq: "f10pi13n"
  },
  rootInteractive: {
    Jwef8y: "f1t94bn6",
    ecr2s2: "f1wfn5kd"
  },
  resetButton: {
    B3rzk8w: "fq6nmtn",
    B7ck84d: "f1e4lqlz",
    De3pzq: "f1u2r49w",
    sj55zd: "f1ym3bx4",
    Bahqtrf: "f1mo0ibp",
    Be2twd7: "fjoy568",
    Bg96gwp: "fytdu2e",
    B68tc82: "f1mtd64y",
    Bmxbyg5: "f1y7q3j9",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    oivjwe: "f1h8hb77",
    wvpqe5: ["f1deefiw", "f1n71otn"],
    fsow6f: "fgusgyc"
  },
  button: {
    qhf8xq: "f10pi13n",
    a9b677: "fly5x3f",
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bqenvij: "f1l02sjl",
    Bt984gj: "f122n59",
    i8kkvl: "f1ufnopg",
    Belr9w4: "f14sijuj",
    sshi5w: "f1nxs5xn",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh",
    oeaueh: "f1s6fcnf"
  },
  sortable: {
    Bceei9c: "f1k6fduh"
  },
  sortIcon: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59",
    z8tnut: "fclwglc"
  },
  resizeHandle: {}
}, {
  d: [".figsok6{font-weight:var(--fontWeightRegular);}", ".f1nbblvp{padding-top:0px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1ov4xf1{padding-bottom:0px;}", ".fhix6mv[data-fui-focus-within]:focus-within{outline-width:2px;}", ".fha7anx[data-fui-focus-within]:focus-within{outline-style:solid;}", ".f1fmzww4[data-fui-focus-within]:focus-within{outline-color:var(--colorStrokeFocus2);}", ".fs9qmxf[data-fui-focus-within]:focus-within{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f187m4uq[data-fui-focus-within]:focus-within{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f145mzao[data-fui-focus-within]:focus-within{border-top-right-radius:var(--borderRadiusMedium);}", ".f1uha7eq[data-fui-focus-within]:focus-within{border-top-left-radius:var(--borderRadiusMedium);}", ".f10pi13n{position:relative;}", ".fq6nmtn{resize:horizontal;}", ".f1e4lqlz{box-sizing:content-box;}", ".f1u2r49w{background-color:inherit;}", ".f1ym3bx4{color:inherit;}", ".f1mo0ibp{font-family:inherit;}", ".fjoy568{font-size:inherit;}", ".fytdu2e{line-height:normal;}", ".f1mtd64y{overflow-x:visible;}", ".f1y7q3j9{overflow-y:visible;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1h8hb77{border-bottom-style:none;}", ".fgusgyc{text-align:unset;}", ".fly5x3f{width:100%;}", ".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}", ".f1l02sjl{height:100%;}", ".f122n59{align-items:center;}", ".f1ufnopg{column-gap:var(--spacingHorizontalXS);}", ".f14sijuj{row-gap:var(--spacingHorizontalXS);}", ".f1nxs5xn{min-height:32px;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f1s6fcnf{outline-style:none;}", ".f1k6fduh{cursor:pointer;}", ".fclwglc{padding-top:var(--spacingVerticalXXS);}"],
  h: [".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}"],
  a: [".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
}), rw = (e) => {
  const t = tw(), r = {
    table: Q0(),
    flex: ew()
  };
  return e.root.className = H(Yo.root, t.root, e.sortable && t.rootInteractive, e.noNativeElements ? r.flex.root : r.table.root, e.root.className), e.button.className = H(Yo.button, t.resetButton, t.button, e.sortable && t.sortable, e.button.className), e.sortIcon && (e.sortIcon.className = H(Yo.sortIcon, t.sortIcon, e.sortIcon.className)), e.aside && (e.aside.className = H(Yo.aside, t.resizeHandle, e.aside.className)), e;
}, Ca = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = J0(e, t);
  return rw(r), Ne("useTableHeaderCellStyles_unstable")(r), Z0(r);
});
Ca.displayName = "TableHeaderCell";
const ow = {
  medium: 32,
  small: 24,
  "extra-small": 20
}, nw = (e, t) => {
  const { size: r } = Mr();
  return {
    components: {
      root: "div",
      main: "span",
      description: "span",
      content: "div",
      media: "span"
    },
    root: le(Ce("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    }),
    appearance: e.appearance,
    truncate: e.truncate,
    main: xe(e.main, {
      renderByDefault: !0,
      elementType: "span"
    }),
    media: xe(e.media, {
      elementType: "span"
    }),
    description: xe(e.description, {
      elementType: "span"
    }),
    content: xe(e.content, {
      renderByDefault: !!e.description || !!e.children,
      elementType: "div"
    }),
    avatarSize: ow[r],
    size: r
  };
}, iw = (e, t) => (ge(e), /* @__PURE__ */ Ve(e.root, {
  children: [
    e.media && /* @__PURE__ */ $(Ey, {
      value: t.avatar,
      children: /* @__PURE__ */ $(e.media, {})
    }),
    e.content && /* @__PURE__ */ Ve(e.content, {
      children: [
        e.main && /* @__PURE__ */ $(e.main, {
          children: e.root.children
        }),
        e.description && /* @__PURE__ */ $(e.description, {})
      ]
    })
  ]
})), Kr = {
  root: "fui-TableCellLayout",
  media: "fui-TableCellLayout__media",
  main: "fui-TableCellLayout__main",
  description: "fui-TableCellLayout__description",
  content: "fui-TableCellLayout__content"
}, aw = /* @__PURE__ */ W({
  root: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59",
    i8kkvl: "fsnqrgy",
    Belr9w4: "fylz90v",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "fkjuxzh"
  },
  rootTruncate: {
    B68tc82: "f1p9o1ba"
  },
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  contentTruncate: {
    B68tc82: "f1p9o1ba"
  },
  media: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59"
  },
  mediaExtraSmall: {
    Be2twd7: "f4ybsrx"
  },
  mediaSmallAndMedium: {
    Be2twd7: "fe5j1ua"
  },
  mediaPrimary: {
    Be2twd7: "f1rt2boy"
  },
  mainPrimary: {
    Bhrd7zp: "fl43uef"
  },
  mainTruncate: {
    B68tc82: "f1p9o1ba",
    Huce71: "fz5stix",
    ygn44y: "f1cmbuwj"
  },
  description: {
    sj55zd: "fkfq4zb",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}", ".fsnqrgy{column-gap:var(--spacingHorizontalS);}", ".fylz90v{row-gap:var(--spacingHorizontalS);}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".fkjuxzh{flex-basis:0px;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1vx9l62{flex-direction:column;}", ".f4ybsrx{font-size:16px;}", ".fe5j1ua{font-size:20px;}", ".f1rt2boy{font-size:24px;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fz5stix{white-space:nowrap;}", ".f1cmbuwj{text-overflow:ellipsis;}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}"]
}), sw = (e) => {
  const t = aw(), {
    truncate: r
  } = e;
  e.root.className = H(Kr.root, t.root, r && t.rootTruncate, e.root.className);
  const o = e.appearance === "primary";
  if (e.media) {
    const n = {
      small: t.mediaSmallAndMedium,
      medium: t.mediaSmallAndMedium,
      "extra-small": t.mediaExtraSmall
    };
    e.media.className = H(Kr.media, t.media, n[e.size], o && t.mediaPrimary, e.media.className);
  }
  return e.main && (e.main.className = H(Kr.main, r && t.mainTruncate, o && t.mainPrimary, e.main.className)), e.description && (e.description.className = H(Kr.description, t.description, e.description.className)), e.content && (e.content.className = H(Kr.content, t.content, r && t.contentTruncate, e.content.className)), e;
};
function lw(e) {
  const { avatarSize: t } = e;
  return {
    avatar: b.useMemo(() => ({
      size: t
    }), [
      t
    ])
  };
}
const to = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = nw(e, t);
  return sw(r), Ne("useTableCellLayoutStyles_unstable")(r), iw(r, lw(r));
});
to.displayName = "TableCellLayout";
const cw = (e, { referenceLabel: t, referenceId: r }, o) => {
  const { checkbox: n = {}, onSelectionChange: i, floatingAction: a, onClick: s, onKeyDown: l } = e, { findAllFocusable: c } = xd(), u = b.useRef(null), [d, f] = Ir({
    state: e.selected,
    defaultState: e.defaultSelected,
    initialState: !1
  }), v = [
    e.selected,
    e.defaultSelected,
    i
  ].some((x) => typeof x < "u"), [h, p] = b.useState(!1), y = b.useCallback((x) => {
    if (!o.current)
      return !1;
    const E = c(o.current), O = x.target, j = E.some((Z) => Z.contains(O)), F = (u == null ? void 0 : u.current) === O;
    return j && !F;
  }, [
    o,
    c
  ]), g = b.useCallback((x) => {
    if (y(x))
      return;
    const E = !d;
    f(E), i && i(x, {
      selected: E
    });
  }, [
    i,
    d,
    f,
    y
  ]), _ = b.useCallback((x) => {
    [
      un
    ].includes(x.key) && (x.preventDefault(), g(x));
  }, [
    g
  ]), m = b.useMemo(() => {
    if (!v || a)
      return;
    const x = {};
    return r ? x["aria-labelledby"] = r : t && (x["aria-label"] = t), xe(n, {
      defaultProps: {
        ref: u,
        type: "checkbox",
        checked: d,
        onChange: (E) => g(E),
        onFocus: () => p(!0),
        onBlur: () => p(!1),
        ...x
      },
      elementType: "input"
    });
  }, [
    n,
    a,
    d,
    v,
    g,
    r,
    t
  ]), k = b.useMemo(() => {
    if (a)
      return xe(a, {
        defaultProps: {
          ref: u
        },
        elementType: "div"
      });
  }, [
    a
  ]), w = b.useMemo(() => v ? {
    onClick: bl(s, g),
    onKeyDown: bl(l, _)
  } : null, [
    v,
    g,
    s,
    l,
    _
  ]);
  return {
    selected: d,
    selectable: v,
    selectFocused: h,
    selectableCardProps: w,
    checkboxSlot: m,
    floatingActionSlot: k
  };
}, uw = b.createContext(void 0), uc = {
  selectableA11yProps: {
    referenceId: void 0,
    setReferenceId() {
    },
    referenceLabel: void 0,
    setReferenceLabel() {
    }
  }
}, dw = uw.Provider, fw = {
  off: void 0,
  "no-tab": "limited-trap-focus",
  "tab-exit": "limited",
  "tab-only": "unlimited"
}, hw = ({ focusMode: e = "off", ...t }) => {
  const r = [
    "onClick",
    "onDoubleClick",
    "onMouseUp",
    "onMouseDown",
    "onPointerUp",
    "onPointerDown",
    "onTouchStart",
    "onTouchEnd",
    "onDragStart",
    "onDragEnd"
  ].some((i) => t[i]), n = {
    ...uy({
      tabBehavior: fw[r ? "no-tab" : e]
    }),
    tabIndex: 0
  };
  return {
    interactive: r,
    focusAttributes: !r && e === "off" ? null : n
  };
}, vw = (e, t) => {
  const { appearance: r = "filled", orientation: o = "vertical", size: n = "medium" } = e, [i, a] = b.useState(uc.selectableA11yProps.referenceId), [s, l] = b.useState(uc.selectableA11yProps.referenceId), c = Zn(), { selectable: u, selected: d, selectableCardProps: f, selectFocused: v, checkboxSlot: h, floatingActionSlot: p } = cw(e, {
    referenceId: i,
    referenceLabel: s
  }, c), y = xo(c, t), { interactive: g, focusAttributes: _ } = hw(e);
  return {
    appearance: r,
    orientation: o,
    size: n,
    interactive: g,
    selectable: u,
    selectFocused: v,
    selected: d,
    selectableA11yProps: {
      setReferenceId: a,
      referenceId: i,
      referenceLabel: s,
      setReferenceLabel: l
    },
    components: {
      root: "div",
      floatingAction: "div",
      checkbox: "input"
    },
    root: le(Ce("div", {
      ref: y,
      role: "group",
      ...u ? null : _,
      ...e,
      ...f
    }), {
      elementType: "div"
    }),
    floatingAction: p,
    checkbox: h
  };
}, pw = (e, t) => (ge(e), /* @__PURE__ */ $(e.root, {
  children: /* @__PURE__ */ Ve(dw, {
    value: t,
    children: [
      e.checkbox ? /* @__PURE__ */ $(e.checkbox, {}) : null,
      e.floatingAction ? /* @__PURE__ */ $(e.floatingAction, {}) : null,
      e.root.children
    ]
  })
})), Wi = {
  root: "fui-Card",
  floatingAction: "fui-Card__floatingAction",
  checkbox: "fui-Card__checkbox"
}, gw = /* @__PURE__ */ W({
  root: {
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw",
    Bbmb7ep: ["fifeqxg", "f899z7z"],
    Beyfa6y: ["f899z7z", "fifeqxg"],
    B7oj6ja: ["f4h3tyx", "f18ur2pz"],
    Btl43ni: ["f18ur2pz", "f4h3tyx"],
    z8tnut: "f1lplnzb",
    z189sj: ["f10m5gbb", "f1k04kkk"],
    Byoj8tv: "fhftqfp",
    uwmqm3: ["f1k04kkk", "f10m5gbb"],
    i8kkvl: "fxsr4vj",
    Belr9w4: "fcvsdzp",
    mc9l5x: "f22iagw",
    qhf8xq: "f10pi13n",
    B7ck84d: "f1ewtqcl",
    sj55zd: "f19n0e5",
    E3zdtr: "f1mdlcz9",
    bn5sak: "frwkxtg",
    Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
    B1piin3: ["f15yvnhg", "f1n6gb5g"],
    By385i5: "fo72kxq",
    Bsft5z2: "f13zj6fq",
    B80jsxd: "f1nwj1ja",
    Bm2nyyq: "f8rth92",
    Barhvk9: ["flthirb", "ftkbnf5"],
    Bw17bha: "f1lh990p",
    vfts7: ["ftkbnf5", "flthirb"],
    xrcqlc: "f6czdpx",
    Ihftqj: ["f13hvwk3", "f1en4csx"],
    Bcgy8vk: "f1i1u9k0",
    Bhxzhr1: ["f1en4csx", "f13hvwk3"],
    B3778ie: ["f1qnomq5", "f2fl922"],
    d9w3h3: ["f2fl922", "f1qnomq5"],
    Bl18szs: ["f1anhtl", "f1n2zcl3"],
    B4j8arr: ["f1n2zcl3", "f1anhtl"],
    B2jhnfs: "f16v3d5c"
  },
  focused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    B8q5s1w: "f8hki3x",
    Bci5o5g: ["f1d2448m", "ffh67wi"],
    n8qw10: "f1bjia2o",
    Bdrgwmp: ["ffh67wi", "f1d2448m"],
    Bb7d1vk: "f226i61",
    zhwhgb: ["f13kzufm", "fsx75g8"],
    dhy2o1: "flujwa2",
    Gfyso: ["fsx75g8", "f13kzufm"],
    Bm4h7ae: "f15bsgw9",
    B7ys5i9: "f14e48fq",
    Busjfv9: "f18yb2kv",
    Bhk32uz: "fd6o370",
    Bf4ptjt: "fh1cnn4",
    kclons: ["fy7oxxb", "f184ne2d"],
    Bhdgwq3: "fpukqih",
    Blkhhs4: ["f184ne2d", "fy7oxxb"],
    Bqtpl0w: "f99gebs",
    clg4pj: ["f13b0oaq", "f8t2bz6"],
    hgwjuy: "f1jvq617",
    Bonggc9: ["f8t2bz6", "f13b0oaq"],
    B1tsrr9: ["f11unbnk", "fbd201q"],
    Dah5zi: ["fbd201q", "f11unbnk"],
    Bkh64rk: ["f12nqxso", "f1uguk4w"],
    qqdqy8: ["f1uguk4w", "f12nqxso"],
    B6dhp37: "f1dvezut",
    i03rao: ["fd0oaoj", "f1cwg4i8"],
    Boxcth7: "fjvm52t",
    Bsom6fd: ["f1cwg4i8", "fd0oaoj"],
    J0r882: "f15fr7a0",
    Bule8hv: ["fwsq40z", "fy0y4wt"],
    Bjwuhne: "f34ld9f",
    Ghsupd: ["fy0y4wt", "fwsq40z"]
  },
  selectableFocused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    Bssx7fj: "f1b1k54r",
    uh7if5: ["f4ne723", "fqqcjud"],
    clntm0: "fh7aioi",
    Dlk2r6: ["fqqcjud", "f4ne723"],
    Bm3wd5j: "f1k55ka9",
    Bbrhkcr: ["fgclinu", "f16pcs8n"],
    f1oku: "fycbxed",
    aywvf2: ["f16pcs8n", "fgclinu"],
    B2j2mmj: "ffht0p2",
    wigs8: "f1p0ul1q",
    pbfy6t: "f1c901ms",
    B0v4ure: "f1alokd7",
    ghq09: "f78i1la",
    B24cy0v: ["f1kvsw7t", "f1bw8brt"],
    Bwckmig: "f8k7e5g",
    Bvwlmkc: ["f1bw8brt", "f1kvsw7t"],
    Bbgo44z: "f125hn41",
    Bil7v7r: ["fgxkx34", "f1v56tyl"],
    skfxo0: "fdxas6f",
    jo1ztg: ["f1v56tyl", "fgxkx34"],
    Ba3ybja: ["fxwickw", "f1ia5cve"],
    az1dzo: ["f1ia5cve", "fxwickw"],
    vppk2z: ["f194aguw", "fqicc6c"],
    B6352mv: ["fqicc6c", "f194aguw"],
    nr063g: "fq4eyks",
    Blmvk6g: ["f1ya6x16", "ftuszwa"],
    Bsiemmq: "f1e2iu44",
    B98u21t: ["ftuszwa", "f1ya6x16"],
    B2pnrqr: "f1amxum7",
    B29w5g4: ["f1cec8w7", "f554mv0"],
    Bhhzhcn: "f1sj6kbr",
    Bec0n69: ["f554mv0", "f1cec8w7"]
  },
  orientationHorizontal: {
    Beiy3e4: "f1063pyq",
    Bt984gj: "f122n59",
    Bnoktp0: "fpfyeui",
    Idhjb2: "fwi74qw",
    ihgzqh: ["ffcmwrh", "f6ppoih"],
    Bgp6ld0: ["f1dc9p14", "fd933vt"],
    Bbucpmy: "f18esqgw"
  },
  orientationVertical: {
    Beiy3e4: "f1vx9l62",
    Bt4kzjz: ["fobhde4", "fx5r7kn"],
    B1ou843: ["fx5r7kn", "fobhde4"],
    y1433z: "f19chtn8",
    B7egwnw: "fuvs6re",
    B49b4xf: "fy4glsf"
  },
  sizeSmall: {
    B7balbw: "f1pi9uxy",
    B1h88n7: "f1h1zgly"
  },
  sizeMedium: {
    B7balbw: "frsmuga",
    B1h88n7: "fuldkky"
  },
  sizeLarge: {
    B7balbw: "f1qua4xo",
    B1h88n7: "fimkt6v"
  },
  filled: {
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1knas48",
    Bvxd0ez: "f1m145df",
    ecr2s2: "fb40n2d"
  },
  filledInteractiveSelected: {
    De3pzq: "f1nfm20t",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "f1kz6goq"
  },
  filledAlternative: {
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledAlternativeInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1uvynv3",
    Bvxd0ez: "f1m145df",
    ecr2s2: "f1yhgkbh"
  },
  filledAlternativeInteractiveSelected: {
    De3pzq: "fjxa0vh",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "fehi0vp"
  },
  outline: {
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"]
  },
  outlineInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"],
    Jwef8y: "fjxutwb",
    Be0v6ae: "f1llr77y",
    B5kxglz: ["fzk0khw", "fjj8tog"],
    B3pwyw6: "fb1u8ub",
    Bymgtzf: ["fjj8tog", "fzk0khw"],
    ecr2s2: "fophhak",
    dmfk: "f1uohb70",
    B4ofi8: ["f1jm7v1n", "f1bus3rq"],
    jgq6uv: "f1fbu7rr",
    Baxewws: ["f1bus3rq", "f1jm7v1n"]
  },
  outlineInteractiveSelected: {
    De3pzq: "f1q9pm1r",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "fg59vm4"
  },
  subtle: {
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  subtleInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Jwef8y: "f1t94bn6",
    ecr2s2: "f1wfn5kd"
  },
  subtleInteractiveSelected: {
    De3pzq: "fq5gl1p",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Jwef8y: "f1uqaxdt"
  },
  highContrastSelected: {
    ycbfsm: "fkc42ay",
    Bsw6fvg: "f1rirnrt",
    Bbusuzp: "f1lkg8j3",
    xgfqdd: "f1nkj0oa",
    Bmmdzwq: "fey3rwa",
    zkpvhj: ["f5jhx11", "fff9uym"],
    B20bydw: "fm7n0jy",
    Bwwwggl: ["fff9uym", "f5jhx11"]
  },
  highContrastInteractive: {
    h1vhog: "fpfvv3l",
    kslmdy: "f1oamsm6",
    Baaf6ca: "f1il21bs",
    x9zz3d: "fnn5dk0",
    Bmmdzwq: "fey3rwa",
    zkpvhj: ["f5jhx11", "fff9uym"],
    B20bydw: "fm7n0jy",
    Bwwwggl: ["fff9uym", "f5jhx11"]
  },
  select: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "fqclxi7",
    j35jbq: ["fiv86kb", "f36uhnt"],
    Bj3rh1h: "f19g0ac"
  },
  hiddenCheckbox: {
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw",
    a9b677: "frkrog8",
    Bqenvij: "f1mpe4l3",
    qhf8xq: "f1euv43f",
    Bh84pgu: "fmf1zke",
    Bgl5zvf: "f1wch0ki",
    Huce71: "fz5stix"
  }
}, {
  d: [".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".fifeqxg{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f899z7z{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f4h3tyx{border-top-right-radius:var(--fui-Card--border-radius);}", ".f18ur2pz{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1lplnzb{padding-top:var(--fui-Card--size);}", ".f10m5gbb{padding-right:var(--fui-Card--size);}", ".f1k04kkk{padding-left:var(--fui-Card--size);}", ".fhftqfp{padding-bottom:var(--fui-Card--size);}", ".fxsr4vj{column-gap:var(--fui-Card--size);}", ".fcvsdzp{row-gap:var(--fui-Card--size);}", ".f22iagw{display:flex;}", ".f10pi13n{position:relative;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1mdlcz9::after{position:absolute;}", ".frwkxtg::after{top:0;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".fo72kxq::after{bottom:0;}", '.f13zj6fq::after{content:"";}', ".f1nwj1ja::after{pointer-events:none;}", ".f8rth92::after{border-top-style:solid;}", ".flthirb::after{border-right-style:solid;}", ".ftkbnf5::after{border-left-style:solid;}", ".f1lh990p::after{border-bottom-style:solid;}", ".f6czdpx::after{border-top-width:var(--strokeWidthThin);}", ".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}", ".f1en4csx::after{border-left-width:var(--strokeWidthThin);}", ".f1i1u9k0::after{border-bottom-width:var(--strokeWidthThin);}", ".f1qnomq5::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f2fl922::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f1anhtl::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1n2zcl3::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f16v3d5c>.fui-CardHeader,.f16v3d5c>.fui-CardFooter{flex-shrink:0;}", ".f8hki3x[data-fui-focus-visible]{border-top-color:transparent;}", ".f1d2448m[data-fui-focus-visible]{border-right-color:transparent;}", ".ffh67wi[data-fui-focus-visible]{border-left-color:transparent;}", ".f1bjia2o[data-fui-focus-visible]{border-bottom-color:transparent;}", '.f15bsgw9[data-fui-focus-visible]::after{content:"";}', ".f14e48fq[data-fui-focus-visible]::after{position:absolute;}", ".f18yb2kv[data-fui-focus-visible]::after{pointer-events:none;}", ".fd6o370[data-fui-focus-visible]::after{z-index:1;}", ".fh1cnn4[data-fui-focus-visible]::after{border-top-style:solid;}", ".fy7oxxb[data-fui-focus-visible]::after{border-right-style:solid;}", ".f184ne2d[data-fui-focus-visible]::after{border-left-style:solid;}", ".fpukqih[data-fui-focus-visible]::after{border-bottom-style:solid;}", ".f99gebs[data-fui-focus-visible]::after{border-top-width:var(--strokeWidthThick);}", ".f13b0oaq[data-fui-focus-visible]::after{border-right-width:var(--strokeWidthThick);}", ".f8t2bz6[data-fui-focus-visible]::after{border-left-width:var(--strokeWidthThick);}", ".f1jvq617[data-fui-focus-visible]::after{border-bottom-width:var(--strokeWidthThick);}", ".f11unbnk[data-fui-focus-visible]::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".fbd201q[data-fui-focus-visible]::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f12nqxso[data-fui-focus-visible]::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1uguk4w[data-fui-focus-visible]::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1dvezut[data-fui-focus-visible]::after{border-top-color:var(--colorStrokeFocus2);}", ".fd0oaoj[data-fui-focus-visible]::after{border-right-color:var(--colorStrokeFocus2);}", ".f1cwg4i8[data-fui-focus-visible]::after{border-left-color:var(--colorStrokeFocus2);}", ".fjvm52t[data-fui-focus-visible]::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f15fr7a0[data-fui-focus-visible]::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".fwsq40z[data-fui-focus-visible]::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".fy0y4wt[data-fui-focus-visible]::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f34ld9f[data-fui-focus-visible]::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1b1k54r[data-fui-focus-within]:focus-within{border-top-color:transparent;}", ".f4ne723[data-fui-focus-within]:focus-within{border-right-color:transparent;}", ".fqqcjud[data-fui-focus-within]:focus-within{border-left-color:transparent;}", ".fh7aioi[data-fui-focus-within]:focus-within{border-bottom-color:transparent;}", '.ffht0p2[data-fui-focus-within]:focus-within::after{content:"";}', ".f1p0ul1q[data-fui-focus-within]:focus-within::after{position:absolute;}", ".f1c901ms[data-fui-focus-within]:focus-within::after{pointer-events:none;}", ".f1alokd7[data-fui-focus-within]:focus-within::after{z-index:1;}", ".f78i1la[data-fui-focus-within]:focus-within::after{border-top-style:solid;}", ".f1kvsw7t[data-fui-focus-within]:focus-within::after{border-right-style:solid;}", ".f1bw8brt[data-fui-focus-within]:focus-within::after{border-left-style:solid;}", ".f8k7e5g[data-fui-focus-within]:focus-within::after{border-bottom-style:solid;}", ".f125hn41[data-fui-focus-within]:focus-within::after{border-top-width:var(--strokeWidthThick);}", ".fgxkx34[data-fui-focus-within]:focus-within::after{border-right-width:var(--strokeWidthThick);}", ".f1v56tyl[data-fui-focus-within]:focus-within::after{border-left-width:var(--strokeWidthThick);}", ".fdxas6f[data-fui-focus-within]:focus-within::after{border-bottom-width:var(--strokeWidthThick);}", ".fxwickw[data-fui-focus-within]:focus-within::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f1ia5cve[data-fui-focus-within]:focus-within::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f194aguw[data-fui-focus-within]:focus-within::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".fqicc6c[data-fui-focus-within]:focus-within::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".fq4eyks[data-fui-focus-within]:focus-within::after{border-top-color:var(--colorStrokeFocus2);}", ".f1ya6x16[data-fui-focus-within]:focus-within::after{border-right-color:var(--colorStrokeFocus2);}", ".ftuszwa[data-fui-focus-within]:focus-within::after{border-left-color:var(--colorStrokeFocus2);}", ".f1e2iu44[data-fui-focus-within]:focus-within::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f1amxum7[data-fui-focus-within]:focus-within::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1cec8w7[data-fui-focus-within]:focus-within::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".f554mv0[data-fui-focus-within]:focus-within::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1sj6kbr[data-fui-focus-within]:focus-within::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".fpfyeui>.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", ".fwi74qw>.fui-CardPreview{margin-bottom:calc(var(--fui-Card--size) * -1);}", '.ffcmwrh>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', '.f6ppoih>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.f1dc9p14>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.fd933vt>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', ".f18esqgw>.fui-CardHeader:last-of-type,.f18esqgw>.fui-CardFooter:last-of-type{flex-grow:1;}", ".f1vx9l62{flex-direction:column;}", ".fobhde4>.fui-CardPreview{margin-left:calc(var(--fui-Card--size) * -1);}", ".fx5r7kn>.fui-CardPreview{margin-right:calc(var(--fui-Card--size) * -1);}", '.f19chtn8>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-top:calc(var(--fui-Card--size) * -1);}', ".fuvs6re>.fui-Card__floatingAction+.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", '.fy4glsf>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-bottom:calc(var(--fui-Card--size) * -1);}', ".f1pi9uxy{--fui-Card--size:8px;}", ".f1h1zgly{--fui-Card--border-radius:var(--borderRadiusSmall);}", ".frsmuga{--fui-Card--size:12px;}", ".fuldkky{--fui-Card--border-radius:var(--borderRadiusMedium);}", ".f1qua4xo{--fui-Card--size:16px;}", ".fimkt6v{--fui-Card--border-radius:var(--borderRadiusLarge);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f16gxe2i::after{border-top-color:var(--colorTransparentStroke);}", ".fpgykix::after{border-right-color:var(--colorTransparentStroke);}", ".fzybk4o::after{border-left-color:var(--colorTransparentStroke);}", ".f1osi826::after{border-bottom-color:var(--colorTransparentStroke);}", ".f1k6fduh{cursor:pointer;}", ".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}", ".f16eln5f::after{border-top-color:var(--colorNeutralStroke1Selected);}", ".fa2okxs::after{border-right-color:var(--colorNeutralStroke1Selected);}", ".fg4zq3l::after{border-left-color:var(--colorNeutralStroke1Selected);}", ".ff6932p::after{border-bottom-color:var(--colorNeutralStroke1Selected);}", ".f1dmdbja{background-color:var(--colorNeutralBackground2);}", ".fjxa0vh{background-color:var(--colorNeutralBackground2Selected);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1couhl3{box-shadow:none;}", ".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}", ".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}", ".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}", ".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}", ".f1q9pm1r{background-color:var(--colorTransparentBackgroundSelected);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1euv43f{position:absolute;}", ".fqclxi7{top:4px;}", ".fiv86kb{right:4px;}", ".f36uhnt{left:4px;}", ".f19g0ac{z-index:1;}", ".frkrog8{width:1px;}", ".f1mpe4l3{height:1px;}", ".fmf1zke{clip:rect(0 0 0 0);}", ".f1wch0ki{clip-path:inset(50%);}", ".fz5stix{white-space:nowrap;}"],
  f: [".ftqa4ok:focus{outline-style:none;}"],
  i: [".f2hkw1w:focus-visible{outline-style:none;}"],
  m: [["@media (forced-colors: active){.f226i61[data-fui-focus-visible]::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f13kzufm[data-fui-focus-visible]::after{border-right-color:Highlight;}.fsx75g8[data-fui-focus-visible]::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.flujwa2[data-fui-focus-visible]::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1k55ka9[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f16pcs8n[data-fui-focus-within]:focus-within::after{border-left-color:Highlight;}.fgclinu[data-fui-focus-within]:focus-within::after{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fycbxed[data-fui-focus-within]:focus-within::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1nkj0oa .fui-CardPreview,.f1nkj0oa .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fey3rwa::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f5jhx11::after{border-right-color:Highlight;}.fff9uym::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fm7n0jy::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fpfvv3l:hover,.fpfvv3l :active{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1oamsm6:hover,.f1oamsm6 :active{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1il21bs:hover,.f1il21bs :active{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fnn5dk0:hover .fui-CardPreview,.fnn5dk0 :active .fui-CardPreview,.fnn5dk0:hover .fui-CardFooter,.fnn5dk0 :active .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }]],
  h: [".f1knas48:hover{background-color:var(--colorNeutralBackground1Hover);}", ".f1m145df:hover{box-shadow:var(--shadow8);}", ".f1kz6goq:hover{background-color:var(--colorNeutralBackground1Selected);}", ".f1uvynv3:hover{background-color:var(--colorNeutralBackground2Hover);}", ".fehi0vp:hover{background-color:var(--colorNeutralBackground2Selected);}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".f1llr77y:hover::after{border-top-color:var(--colorNeutralStroke1Hover);}", ".fzk0khw:hover::after{border-right-color:var(--colorNeutralStroke1Hover);}", ".fjj8tog:hover::after{border-left-color:var(--colorNeutralStroke1Hover);}", ".fb1u8ub:hover::after{border-bottom-color:var(--colorNeutralStroke1Hover);}", ".fg59vm4:hover{background-color:var(--colorTransparentBackgroundSelected);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}"],
  a: [".fb40n2d:active{background-color:var(--colorNeutralBackground1Pressed);}", ".f1yhgkbh:active{background-color:var(--colorNeutralBackground2Pressed);}", ".fophhak:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f1uohb70:active::after{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1jm7v1n:active::after{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1bus3rq:active::after{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1fbu7rr:active::after{border-bottom-color:var(--colorNeutralStroke1Pressed);}", ".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
}), mw = (e) => {
  const t = gw(), r = {
    horizontal: t.orientationHorizontal,
    vertical: t.orientationVertical
  }, o = {
    small: t.sizeSmall,
    medium: t.sizeMedium,
    large: t.sizeLarge
  }, n = {
    filled: t.filled,
    "filled-alternative": t.filledAlternative,
    outline: t.outline,
    subtle: t.subtle
  }, i = {
    filled: t.filledInteractiveSelected,
    "filled-alternative": t.filledAlternativeInteractiveSelected,
    outline: t.outlineInteractiveSelected,
    subtle: t.subtleInteractiveSelected
  }, a = {
    filled: t.filledInteractive,
    "filled-alternative": t.filledAlternativeInteractive,
    outline: t.outlineInteractive,
    subtle: t.subtleInteractive
  }, s = e.interactive || e.selectable, l = b.useMemo(() => e.selectable ? e.selectFocused ? t.selectableFocused : "" : t.focused, [e.selectFocused, e.selectable, t.focused, t.selectableFocused]);
  return e.root.className = H(
    Wi.root,
    t.root,
    r[e.orientation],
    o[e.size],
    n[e.appearance],
    s && a[e.appearance],
    e.selected && i[e.appearance],
    // Focus overrides
    l,
    // High contrast overrides
    s && t.highContrastInteractive,
    e.selected && t.highContrastSelected,
    e.root.className
  ), e.floatingAction && (e.floatingAction.className = H(Wi.floatingAction, t.select, e.floatingAction.className)), e.checkbox && (e.checkbox.className = H(Wi.checkbox, t.hiddenCheckbox, e.checkbox.className)), e;
};
function bw({ selectableA11yProps: e }) {
  return {
    selectableA11yProps: e
  };
}
const _s = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = vw(e, t), o = bw(r);
  return mw(r), pw(r, o);
});
_s.displayName = "Card";
const yw = (e, t) => {
  const { focusMode: r = "tab", size: o = "medium", list: n, ...i } = e, a = kd({
    circular: !0,
    axis: "horizontal",
    memorizeCurrent: !0
  });
  var s;
  return {
    components: {
      root: "nav",
      list: "ol"
    },
    root: le(Ce("nav", {
      ref: t,
      "aria-label": (s = e["aria-label"]) !== null && s !== void 0 ? s : "breadcrumb",
      ...r === "arrow" ? a : {},
      ...i
    }), {
      elementType: "nav"
    }),
    list: xe(n, {
      renderByDefault: !0,
      defaultProps: {
        role: "list"
      },
      elementType: "ol"
    }),
    size: o
  };
}, of = b.createContext(void 0), _w = {
  size: "medium"
}, ww = of.Provider, ws = () => {
  var e;
  return (e = b.useContext(of)) !== null && e !== void 0 ? e : _w;
}, kw = (e, t) => (ge(e), /* @__PURE__ */ $(e.root, {
  children: /* @__PURE__ */ $(ww, {
    value: t,
    children: e.list && /* @__PURE__ */ $(e.list, {
      children: e.root.children
    })
  })
})), dc = {
  root: "fui-Breadcrumb",
  list: "fui-Breadcrumb__list"
}, xw = /* @__PURE__ */ _e("rc5rb6b", null, [".rc5rb6b{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}"]), Sw = (e) => {
  const t = xw();
  return e.root.className = H(dc.root, e.root.className), e.list && (e.list.className = H(t, dc.list, e.list.className)), e;
};
function Ew(e) {
  const { size: t } = e;
  return b.useMemo(() => ({
    size: t
  }), [
    t
  ]);
}
const nf = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = yw(e, t), o = Ew(r);
  return Sw(r), Ne("useBreadcrumbStyles_unstable")(r), kw(r, o);
});
nf.displayName = "Breadcrumb";
const Bw = (e, t) => {
  const { size: r } = ws(), { dir: o } = qt(), n = Nw(o);
  return {
    components: {
      root: "li"
    },
    root: le(Ce("li", {
      ref: t,
      "aria-hidden": !0,
      children: n,
      ...e
    }), {
      elementType: "li"
    }),
    size: r
  };
};
function Nw(e) {
  return e === "rtl" ? /* @__PURE__ */ b.createElement(dm, null) : /* @__PURE__ */ b.createElement(fm, null);
}
const Tw = (e) => (ge(e), /* @__PURE__ */ $(e.root, {})), Cw = {
  root: "fui-BreadcrumbDivider"
}, Pw = /* @__PURE__ */ _e("rk008qs", null, [".rk008qs{display:flex;}"]), Ow = /* @__PURE__ */ W({
  small: {
    Be2twd7: "f1ugzwwg"
  },
  medium: {
    Be2twd7: "f4ybsrx"
  },
  large: {
    Be2twd7: "fe5j1ua"
  }
}, {
  d: [".f1ugzwwg{font-size:12px;}", ".f4ybsrx{font-size:16px;}", ".fe5j1ua{font-size:20px;}"]
}), zw = (e) => {
  const t = Pw(), r = Ow(), {
    size: o = "medium"
  } = e;
  return e.root.className = H(Cw.root, t, r[o], e.root.className), e;
}, af = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Bw(e, t);
  return zw(r), Ne("useBreadcrumbDividerStyles_unstable")(r), Tw(r);
});
af.displayName = "BreadcrumbDivider";
const Rw = (e, t) => {
  const { size: r } = ws();
  return {
    components: {
      root: "li"
    },
    root: le(Ce("li", {
      ref: t,
      ...e
    }), {
      elementType: "li"
    }),
    size: r
  };
}, Dw = (e) => (ge(e), /* @__PURE__ */ $(e.root, {
  children: e.root.children
})), Aw = {
  root: "fui-BreadcrumbItem"
}, jw = /* @__PURE__ */ _e("r1tl60rs", null, [".r1tl60rs{display:flex;align-items:center;color:var(--colorNeutralForeground2);box-sizing:border-box;text-wrap:nowrap;}"]), Fw = (e) => {
  const t = jw();
  return e.root.className = H(Aw.root, t, e.root.className), e;
}, Pa = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Rw(e, t);
  return Fw(r), Ne("useBreadcrumbItemStyles_unstable")(r), Dw(r);
});
Pa.displayName = "BreadcrumbItem";
const Iw = (e, t) => {
  const { size: r } = ws(), { current: o = !1, as: n, ...i } = e, a = n ?? e.href ? "a" : "button";
  var s, l;
  return {
    ...Od({
      appearance: "subtle",
      role: void 0,
      type: void 0,
      as: a,
      iconPosition: "before",
      "aria-current": o ? (s = e["aria-current"]) !== null && s !== void 0 ? s : "page" : void 0,
      "aria-disabled": o ? (l = e["aria-disabled"]) !== null && l !== void 0 ? l : !0 : void 0,
      ...i
    }, t),
    current: o,
    size: r
  };
}, qw = (e) => Cd(e), Mw = {
  root: "fui-BreadcrumbButton",
  icon: "fui-BreadcrumbButton__icon"
}, Lw = /* @__PURE__ */ W({
  base: {
    Be2twd7: "fsj74e5",
    Bqenvij: "f1qfv4wv",
    Bg96gwp: "f15xapk4",
    a9b677: "f17j33op",
    t21cq0: ["fm0x6gh", "fbyavb5"]
  },
  small: {
    u3h8gg: "f1qfi7kw",
    Biu6dll: "f1876atl"
  },
  medium: {
    u3h8gg: "f1h9446d",
    Biu6dll: "f10xfswh"
  },
  large: {
    u3h8gg: "f5hcofs",
    Biu6dll: "f1a6v6zl"
  }
}, {
  d: [".fsj74e5{font-size:var(--fui-Breadcrumb--icon-size);}", ".f1qfv4wv{height:var(--fui-Breadcrumb--icon-size);}", ".f15xapk4{line-height:var(--fui-Breadcrumb--icon-line-height);}", ".f17j33op{width:var(--fui-Breadcrumb--icon-size);}", ".fm0x6gh{margin-right:var(--spacingHorizontalXS);}", ".fbyavb5{margin-left:var(--spacingHorizontalXS);}", ".f1qfi7kw{--fui-Breadcrumb--icon-size:12px;}", ".f1876atl{--fui-Breadcrumb--icon-line-height:var(--lineHeightBase200);}", ".f1h9446d{--fui-Breadcrumb--icon-size:16px;}", ".f10xfswh{--fui-Breadcrumb--icon-line-height:var(--lineHeightBase400);}", ".f5hcofs{--fui-Breadcrumb--icon-size:20px;}", ".f1a6v6zl{--fui-Breadcrumb--icon-line-height:var(--lineHeightBase600);}"]
}), Vw = /* @__PURE__ */ W({
  root: {
    Bf4jedk: "f18p0k4z",
    j4b8c3: "fv6wr3j"
  },
  small: {
    Bqenvij: "frvgh55",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm",
    z8tnut: "f16k8034",
    z189sj: ["fdw0yi8", "fk8j09s"],
    Byoj8tv: "f1angvds",
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  medium: {
    Bqenvij: "f1d2rq10",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi",
    z8tnut: "f16k8034",
    z189sj: ["fdw0yi8", "fk8j09s"],
    Byoj8tv: "f1angvds",
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  large: {
    Bqenvij: "fbhnoac",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k",
    z8tnut: "f17mpqex",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "fdvome7",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"]
  },
  current: {
    Jwef8y: "f9ql6rf",
    Bi91k9c: "f3p8bqa",
    eoavqd: "f14w7a5u",
    Bbdnnc7: "f1irjp3o",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    iro3zm: "f3h1zc4",
    B2d53fq: "f1xkgyln",
    c3iz72: "f17wbbfx",
    x3br3k: "fofxw0a",
    em6i61: "f1ol4fw6",
    vm6p8p: "f1q1lw4e",
    Bszkowt: "ff24m",
    Dyrjrp: "ft5r8e9",
    ezr58z: "f1cbpfqp",
    nhk3du: "f1motppv",
    Bfrek18: "fi9vkhg",
    G209fr: "f1fg3nnv"
  },
  currentSmall: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "fwrc4pm"
  },
  currentMedium: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "f1i3iumi"
  },
  currentLarge: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  }
}, {
  d: [".f18p0k4z{min-width:unset;}", ".fv6wr3j{text-wrap:nowrap;}", ".frvgh55{height:24px;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f16k8034{padding-top:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".f1angvds{padding-bottom:var(--spacingHorizontalSNudge);}", ".f1d2rq10{height:32px;}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fbhnoac{height:40px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f17mpqex{padding-top:var(--spacingHorizontalS);}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".fdvome7{padding-bottom:var(--spacingHorizontalS);}", ".ff24m:disabled{background-color:var(--colorTransparentBackground);}", ".ft5r8e9:disabled{color:var(--colorNeutralForeground2);}", ".f1cbpfqp:disabled{cursor:auto;}", ".f1motppv:disabled .fui-Button__icon{color:unset;}", ".fi9vkhg:disabled .fui-Icon-filled{display:none;}", ".f1fg3nnv:disabled .fui-Icon-regular{display:inline;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"],
  h: [".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3p8bqa:hover{color:var(--colorNeutralForeground2);}", ".f14w7a5u:hover{cursor:auto;}", ".f1irjp3o:hover .fui-Button__icon{color:unset;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1xkgyln:hover:active{color:var(--colorNeutralForeground2);}", ".f17wbbfx:hover:active{cursor:auto;}", ".fofxw0a:hover:active .fui-Button__icon{color:unset;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}"]
}), Hw = (e) => {
  const t = Vw(), r = Lw(), o = {
    small: t.currentSmall,
    medium: t.currentMedium,
    large: t.currentLarge
  };
  return e.root.className = H(Mw.root, t[e.size], t.root, e.current && o[e.size], e.current && t.current, e.root.className), e.icon && (e.icon.className = H(r.base, r[e.size], e.icon.className)), zd(e), e;
}, Oa = /* @__PURE__ */ b.forwardRef((e, t) => {
  const r = Iw(e, t);
  return Hw(r), Ne("useBreadcrumbButtonStyles_unstable")(r), qw(r);
});
Oa.displayName = "BreadcrumbButton";
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, za.apply(this, arguments);
}
var fc;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(fc || (fc = {}));
function Te(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Bo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ra(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: o = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function sf(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
var hc;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(hc || (hc = {}));
function vc(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, o] = $w(e.path, e.caseSensitive, e.end), n = t.match(r);
  if (!n)
    return null;
  let i = n[0], a = i.replace(/(.)\/+$/, "$1"), s = n.slice(1);
  return {
    params: o.reduce((c, u, d) => {
      let {
        paramName: f,
        isOptional: v
      } = u;
      if (f === "*") {
        let p = s[d] || "";
        a = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const h = s[d];
      return v && !h ? c[f] = void 0 : c[f] = (h || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e
  };
}
function $w(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Bo(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (o.push({
    paramName: s,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push({
    paramName: "*"
  }), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), o];
}
function zr(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, o = e.charAt(r);
  return o && o !== "/" ? null : e.slice(r) || "/";
}
function Ww(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: o = "",
    hash: n = ""
  } = typeof e == "string" ? sf(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Uw(r, t) : t,
    search: Kw(o),
    hash: Xw(n)
  };
}
function Uw(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n) => {
    n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
  }), r.length > 1 ? r.join("/") : "/";
}
function Ui(e, t, r, o) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Gw(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function lf(e, t) {
  let r = Gw(e);
  return t ? r.map((o, n) => n === e.length - 1 ? o.pathname : o.pathnameBase) : r.map((o) => o.pathnameBase);
}
function cf(e, t, r, o) {
  o === void 0 && (o = !1);
  let n;
  typeof e == "string" ? n = sf(e) : (n = za({}, e), Te(!n.pathname || !n.pathname.includes("?"), Ui("?", "pathname", "search", n)), Te(!n.pathname || !n.pathname.includes("#"), Ui("#", "pathname", "hash", n)), Te(!n.search || !n.search.includes("#"), Ui("#", "search", "hash", n)));
  let i = e === "" || n.pathname === "", a = i ? "/" : n.pathname, s;
  if (a == null)
    s = r;
  else {
    let d = t.length - 1;
    if (!o && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; )
        f.shift(), d -= 1;
      n.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = Ww(n, s), c = a && a !== "/" && a.endsWith("/"), u = (i || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const ks = (e) => e.join("/").replace(/\/\/+/g, "/"), Kw = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Xw = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, uf = ["post", "put", "patch", "delete"];
new Set(uf);
const Yw = ["get", ...uf];
new Set(Yw);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Da.apply(this, arguments);
}
const ei = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (ei.displayName = "DataRouter");
const df = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (df.displayName = "DataRouterState");
const Jw = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Jw.displayName = "Await");
const Ht = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Ht.displayName = "Navigation");
const xs = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (xs.displayName = "Location");
const gr = /* @__PURE__ */ b.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (gr.displayName = "Route");
const Zw = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Zw.displayName = "RouteError");
function Qw(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Ss() || (process.env.NODE_ENV !== "production" ? Te(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Te(!1));
  let {
    basename: o,
    navigator: n
  } = b.useContext(Ht), {
    hash: i,
    pathname: a,
    search: s
  } = No(e, {
    relative: r
  }), l = a;
  return o !== "/" && (l = a === "/" ? o : ks([o, a])), n.createHref({
    pathname: l,
    search: s,
    hash: i
  });
}
function Ss() {
  return b.useContext(xs) != null;
}
function Lr() {
  return Ss() || (process.env.NODE_ENV !== "production" ? Te(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Te(!1)), b.useContext(xs).location;
}
const ff = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hf(e) {
  b.useContext(Ht).static || b.useLayoutEffect(e);
}
function ek() {
  let {
    isDataRoute: e
  } = b.useContext(gr);
  return e ? ak() : tk();
}
function tk() {
  Ss() || (process.env.NODE_ENV !== "production" ? Te(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Te(!1));
  let e = b.useContext(ei), {
    basename: t,
    future: r,
    navigator: o
  } = b.useContext(Ht), {
    matches: n
  } = b.useContext(gr), {
    pathname: i
  } = Lr(), a = JSON.stringify(lf(n, r.v7_relativeSplatPath)), s = b.useRef(!1);
  return hf(() => {
    s.current = !0;
  }), b.useCallback(function(c, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Bo(s.current, ff), !s.current)
      return;
    if (typeof c == "number") {
      o.go(c);
      return;
    }
    let d = cf(c, JSON.parse(a), i, u.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : ks([t, d.pathname])), (u.replace ? o.replace : o.push)(d, u.state, u);
  }, [t, o, a, i, e]);
}
function rk() {
  let {
    matches: e
  } = b.useContext(gr), t = e[e.length - 1];
  return t ? t.params : {};
}
function No(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: o
  } = b.useContext(Ht), {
    matches: n
  } = b.useContext(gr), {
    pathname: i
  } = Lr(), a = JSON.stringify(lf(n, o.v7_relativeSplatPath));
  return b.useMemo(() => cf(e, JSON.parse(a), i, r === "path"), [e, a, i, r]);
}
var vf = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(vf || {}), Es = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Es || {});
function pf(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ok(e) {
  let t = b.useContext(ei);
  return t || (process.env.NODE_ENV !== "production" ? Te(!1, pf(e)) : Te(!1)), t;
}
function nk(e) {
  let t = b.useContext(gr);
  return t || (process.env.NODE_ENV !== "production" ? Te(!1, pf(e)) : Te(!1)), t;
}
function gf(e) {
  let t = nk(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? Te(!1, e + ' can only be used on routes that contain a unique "id"') : Te(!1)), r.route.id;
}
function ik() {
  return gf(Es.UseRouteId);
}
function ak() {
  let {
    router: e
  } = ok(vf.UseNavigateStable), t = gf(Es.UseNavigateStable), r = b.useRef(!1);
  return hf(() => {
    r.current = !0;
  }), b.useCallback(function(n, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Bo(r.current, ff), r.current && (typeof n == "number" ? e.navigate(n) : e.navigate(n, Da({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
function Bs(e, t) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), n, i;
  for (i = 0; i < o.length; i++)
    n = o[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
const dn = "get", fn = "application/x-www-form-urlencoded";
function ti(e) {
  return e != null && typeof e.tagName == "string";
}
function sk(e) {
  return ti(e) && e.tagName.toLowerCase() === "button";
}
function lk(e) {
  return ti(e) && e.tagName.toLowerCase() === "form";
}
function ck(e) {
  return ti(e) && e.tagName.toLowerCase() === "input";
}
function uk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dk(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !uk(e);
}
let Jo = null;
function fk() {
  if (Jo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Jo = !1;
    } catch {
      Jo = !0;
    }
  return Jo;
}
const hk = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Gi(e) {
  return e != null && !hk.has(e) ? (process.env.NODE_ENV !== "production" && Bo(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + fn + '"')), null) : e;
}
function vk(e, t) {
  let r, o, n, i, a;
  if (lk(e)) {
    let s = e.getAttribute("action");
    o = s ? zr(s, t) : null, r = e.getAttribute("method") || dn, n = Gi(e.getAttribute("enctype")) || fn, i = new FormData(e);
  } else if (sk(e) || ck(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (o = l ? zr(l, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || dn, n = Gi(e.getAttribute("formenctype")) || Gi(s.getAttribute("enctype")) || fn, i = new FormData(s, e), !fk()) {
      let {
        name: c,
        type: u,
        value: d
      } = e;
      if (u === "image") {
        let f = c ? c + "." : "";
        i.append(f + "x", "0"), i.append(f + "y", "0");
      } else
        c && i.append(c, d);
    }
  } else {
    if (ti(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = dn, o = null, n = fn, a = e;
  }
  return i && n === "text/plain" && (a = i, i = void 0), {
    action: o,
    method: r.toLowerCase(),
    encType: n,
    formData: i,
    body: a
  };
}
const pk = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], gk = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], mk = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], bk = "6";
try {
  window.__reactRouterVersion = bk;
} catch {
}
const mf = /* @__PURE__ */ b.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (mf.displayName = "ViewTransition");
const yk = /* @__PURE__ */ b.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (yk.displayName = "Fetchers");
process.env.NODE_ENV;
const _k = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ri = /* @__PURE__ */ b.forwardRef(function(t, r) {
  let {
    onClick: o,
    relative: n,
    reloadDocument: i,
    replace: a,
    state: s,
    target: l,
    to: c,
    preventScrollReset: u,
    unstable_viewTransition: d
  } = t, f = Bs(t, pk), {
    basename: v
  } = b.useContext(Ht), h, p = !1;
  if (typeof c == "string" && wk.test(c) && (h = c, _k))
    try {
      let m = new URL(window.location.href), k = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c), w = zr(k.pathname, v);
      k.origin === m.origin && w != null ? c = w + k.search + k.hash : p = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Bo(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = Qw(c, {
    relative: n
  }), g = Ek(c, {
    replace: a,
    state: s,
    target: l,
    preventScrollReset: u,
    relative: n,
    unstable_viewTransition: d
  });
  function _(m) {
    o && o(m), m.defaultPrevented || g(m);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ b.createElement("a", Rr({}, f, {
      href: h || y,
      onClick: p || i ? o : _,
      ref: r,
      target: l
    }))
  );
});
process.env.NODE_ENV !== "production" && (ri.displayName = "Link");
const kk = /* @__PURE__ */ b.forwardRef(function(t, r) {
  let {
    "aria-current": o = "page",
    caseSensitive: n = !1,
    className: i = "",
    end: a = !1,
    style: s,
    to: l,
    unstable_viewTransition: c,
    children: u
  } = t, d = Bs(t, gk), f = No(l, {
    relative: d.relative
  }), v = Lr(), h = b.useContext(df), {
    navigator: p,
    basename: y
  } = b.useContext(Ht), g = h != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Ok(f) && c === !0, _ = p.encodeLocation ? p.encodeLocation(f).pathname : f.pathname, m = v.pathname, k = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  n || (m = m.toLowerCase(), k = k ? k.toLowerCase() : null, _ = _.toLowerCase()), k && y && (k = zr(k, y) || k);
  const w = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let x = m === _ || !a && m.startsWith(_) && m.charAt(w) === "/", E = k != null && (k === _ || !a && k.startsWith(_) && k.charAt(_.length) === "/"), O = {
    isActive: x,
    isPending: E,
    isTransitioning: g
  }, j = x ? o : void 0, F;
  typeof i == "function" ? F = i(O) : F = [i, x ? "active" : null, E ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
  let Z = typeof s == "function" ? s(O) : s;
  return /* @__PURE__ */ b.createElement(ri, Rr({}, d, {
    "aria-current": j,
    className: F,
    ref: r,
    style: Z,
    to: l,
    unstable_viewTransition: c
  }), typeof u == "function" ? u(O) : u);
});
process.env.NODE_ENV !== "production" && (kk.displayName = "NavLink");
const xk = /* @__PURE__ */ b.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: o,
    reloadDocument: n,
    replace: i,
    state: a,
    method: s = dn,
    action: l,
    onSubmit: c,
    relative: u,
    preventScrollReset: d,
    unstable_viewTransition: f
  } = e, v = Bs(e, mk), h = Ck(), p = Pk(l, {
    relative: u
  }), y = s.toLowerCase() === "get" ? "get" : "post", g = (_) => {
    if (c && c(_), _.defaultPrevented)
      return;
    _.preventDefault();
    let m = _.nativeEvent.submitter, k = (m == null ? void 0 : m.getAttribute("formmethod")) || s;
    h(m || _.currentTarget, {
      fetcherKey: r,
      method: k,
      navigate: o,
      replace: i,
      state: a,
      relative: u,
      preventScrollReset: d,
      unstable_viewTransition: f
    });
  };
  return /* @__PURE__ */ b.createElement("form", Rr({
    ref: t,
    method: y,
    action: p,
    onSubmit: n ? c : g
  }, v));
});
process.env.NODE_ENV !== "production" && (xk.displayName = "Form");
process.env.NODE_ENV;
var Tn;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Tn || (Tn = {}));
var pc;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(pc || (pc = {}));
function Sk(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function bf(e) {
  let t = b.useContext(ei);
  return t || (process.env.NODE_ENV !== "production" ? Te(!1, Sk(e)) : Te(!1)), t;
}
function Ek(e, t) {
  let {
    target: r,
    replace: o,
    state: n,
    preventScrollReset: i,
    relative: a,
    unstable_viewTransition: s
  } = t === void 0 ? {} : t, l = ek(), c = Lr(), u = No(e, {
    relative: a
  });
  return b.useCallback((d) => {
    if (dk(d, r)) {
      d.preventDefault();
      let f = o !== void 0 ? o : Ra(c) === Ra(u);
      l(e, {
        replace: f,
        state: n,
        preventScrollReset: i,
        relative: a,
        unstable_viewTransition: s
      });
    }
  }, [c, l, u, o, n, r, e, i, a, s]);
}
function Bk() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Nk = 0, Tk = () => "__" + String(++Nk) + "__";
function Ck() {
  let {
    router: e
  } = bf(Tn.UseSubmit), {
    basename: t
  } = b.useContext(Ht), r = ik();
  return b.useCallback(function(o, n) {
    n === void 0 && (n = {}), Bk();
    let {
      action: i,
      method: a,
      encType: s,
      formData: l,
      body: c
    } = vk(o, t);
    if (n.navigate === !1) {
      let u = n.fetcherKey || Tk();
      e.fetch(u, r, n.action || i, {
        preventScrollReset: n.preventScrollReset,
        formData: l,
        body: c,
        formMethod: n.method || a,
        formEncType: n.encType || s,
        unstable_flushSync: n.unstable_flushSync
      });
    } else
      e.navigate(n.action || i, {
        preventScrollReset: n.preventScrollReset,
        formData: l,
        body: c,
        formMethod: n.method || a,
        formEncType: n.encType || s,
        replace: n.replace,
        state: n.state,
        fromRouteId: r,
        unstable_flushSync: n.unstable_flushSync,
        unstable_viewTransition: n.unstable_viewTransition
      });
  }, [e, t, r]);
}
function Pk(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: o
  } = b.useContext(Ht), n = b.useContext(gr);
  n || (process.env.NODE_ENV !== "production" ? Te(!1, "useFormAction must be used inside a RouteContext") : Te(!1));
  let [i] = n.matches.slice(-1), a = Rr({}, No(e || ".", {
    relative: r
  })), s = Lr();
  if (e == null) {
    a.search = s.search;
    let l = new URLSearchParams(a.search);
    l.has("index") && l.get("index") === "" && (l.delete("index"), a.search = l.toString() ? "?" + l.toString() : "");
  }
  return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (a.pathname = a.pathname === "/" ? o : ks([o, a.pathname])), Ra(a);
}
function Ok(e, t) {
  t === void 0 && (t = {});
  let r = b.useContext(mf);
  r == null && (process.env.NODE_ENV !== "production" ? Te(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : Te(!1));
  let {
    basename: o
  } = bf(Tn.useViewTransitionState), n = No(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = zr(r.currentLocation.pathname, o) || r.currentLocation.pathname, a = zr(r.nextLocation.pathname, o) || r.nextLocation.pathname;
  return vc(n.pathname, a) != null || vc(n.pathname, i) != null;
}
function zk(e) {
  const t = EB();
  return /* @__PURE__ */ ze(nf, { children: [
    t && t.root && /* @__PURE__ */ ze(Gh, { children: [
      /* @__PURE__ */ L(Pa, { children: /* @__PURE__ */ L(ri, { to: t.root, children: /* @__PURE__ */ L(Oa, { children: t.rootBreadcrumb }) }) }),
      /* @__PURE__ */ L(af, {})
    ] }),
    t && /* @__PURE__ */ L(Pa, { children: /* @__PURE__ */ L(Oa, { current: !0, children: t.breadcrumb }) })
  ] });
}
var Rk = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, r) {
    return "Cannot apply '" + t + "' to '" + r.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, r) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + r;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, r) {
    return "the entry '" + t + "' does not exist in the observable map '" + r + "'";
  },
  26: "please specify a property",
  27: function(t, r) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + r + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, r) {
    return "Cycle detected in computation " + t + ": " + r;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, Dk = process.env.NODE_ENV !== "production" ? Rk : {};
function A(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  if (process.env.NODE_ENV !== "production") {
    var n = typeof e == "string" ? e : Dk[e];
    throw typeof n == "function" && (n = n.apply(null, r)), new Error("[MobX] " + n);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Ak = {};
function Ns() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Ak;
}
var yf = Object.assign, Cn = Object.getOwnPropertyDescriptor, Nt = Object.defineProperty, oi = Object.prototype, Pn = [];
Object.freeze(Pn);
var _f = {};
Object.freeze(_f);
var jk = typeof Proxy < "u", Fk = /* @__PURE__ */ Object.toString();
function wf() {
  jk || A(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Xr(e) {
  process.env.NODE_ENV !== "production" && C.verifyProxies && A("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function yt() {
  return ++C.mobxGuid;
}
function Ts(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var xr = function() {
};
function Re(e) {
  return typeof e == "function";
}
function ur(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ni(e) {
  return e !== null && typeof e == "object";
}
function Ke(e) {
  if (!ni(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Fk;
}
function kf(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function To(e, t, r) {
  Nt(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function xf(e, t, r) {
  Nt(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(o) {
    return ni(o) && o[r] === !0;
  };
}
function Vr(e) {
  return e instanceof Map;
}
function Co(e) {
  return e instanceof Set;
}
var Sf = typeof Object.getOwnPropertySymbols < "u";
function Ik(e) {
  var t = Object.keys(e);
  if (!Sf)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(o) {
    return oi.propertyIsEnumerable.call(e, o);
  })) : t;
}
var Dr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Sf ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Aa(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function Ef(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function st(e, t) {
  return oi.hasOwnProperty.call(e, t);
}
var qk = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Dr(t).forEach(function(o) {
    r[o] = Cn(t, o);
  }), r;
};
function gc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Vk(o.key), o);
  }
}
function Cs(e, t, r) {
  return t && gc(e.prototype, t), r && gc(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, It.apply(this, arguments);
}
function Bf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
    return o.__proto__ = n, o;
  }, ja(e, t);
}
function hn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mk(e, t) {
  if (e) {
    if (typeof e == "string")
      return mc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mc(e, t);
  }
}
function mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++)
    o[r] = e[r];
  return o;
}
function Sr(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Mk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var o = 0;
    return function() {
      return o >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[o++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lk(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vk(e) {
  var t = Lk(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ue = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Tt(e) {
  function t(r, o) {
    if (Po(o))
      return e.decorate_20223_(r, o);
    Hr(r, o, e);
  }
  return Object.assign(t, e);
}
function Hr(e, t, r) {
  if (st(e, Ue) || To(e, Ue, It({}, e[Ue])), process.env.NODE_ENV !== "production" && zn(r) && !st(e[Ue], t)) {
    var o = e.constructor.name + ".prototype." + t.toString();
    A("'" + o + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  Hk(e, r, t), zn(r) || (e[Ue][t] = r);
}
function Hk(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !zn(t) && st(e[Ue], r)) {
    var o = e.constructor.name + ".prototype." + r.toString(), n = e[Ue][r].annotationType_, i = t.annotationType_;
    A("Cannot apply '@" + i + "' to '" + o + "':" + (`
The field is already decorated with '@` + n + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function $k(e) {
  return st(e, Ue) || To(e, Ue, It({}, e[Ue])), e[Ue];
}
function Po(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function ii(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && A("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var X = /* @__PURE__ */ Symbol("mobx administration"), Oo = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + yt() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = se.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, t.reportObserved = function() {
    return Wf(this);
  }, t.reportChanged = function() {
    nt(), Uf(this), it();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), Ps = /* @__PURE__ */ mr("Atom", Oo);
function Nf(e, t, r) {
  t === void 0 && (t = xr), r === void 0 && (r = xr);
  var o = new Oo(e);
  return t !== xr && nS(o, t), r !== xr && Qf(o, r), o;
}
function Wk(e, t) {
  return e === t;
}
function Uk(e, t) {
  return Is(e, t);
}
function Gk(e, t) {
  return Is(e, t, 1);
}
function Kk(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var On = {
  identity: Wk,
  structural: Uk,
  default: Kk,
  shallow: Gk
};
function dr(e, t, r) {
  return po(e) ? e : Array.isArray(e) ? je.array(e, {
    name: r
  }) : Ke(e) ? je.object(e, void 0, {
    name: r
  }) : Vr(e) ? je.map(e, {
    name: r
  }) : Co(e) ? je.set(e, {
    name: r
  }) : typeof e == "function" && !Ro(e) && !vo(e) ? kf(e) ? Ar(e) : ho(r, e) : e;
}
function Xk(e, t, r) {
  if (e == null || pr(e) || jo(e) || $t(e) || $r(e))
    return e;
  if (Array.isArray(e))
    return je.array(e, {
      name: r,
      deep: !1
    });
  if (Ke(e))
    return je.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (Vr(e))
    return je.map(e, {
      name: r,
      deep: !1
    });
  if (Co(e))
    return je.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && A("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function ai(e) {
  return e;
}
function Yk(e, t) {
  return process.env.NODE_ENV !== "production" && po(e) && A("observable.struct should not be used with observable values"), Is(e, t) ? t : e;
}
var Jk = "override";
function zn(e) {
  return e.annotationType_ === Jk;
}
function zo(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Zk,
    extend_: Qk,
    decorate_20223_: ex
  };
}
function Zk(e, t, r, o) {
  var n;
  if ((n = this.options_) != null && n.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (o === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Ro(r.value))
    return 1;
  var i = Tf(e, this, t, r, !1);
  return Nt(o, t, i), 2;
}
function Qk(e, t, r, o) {
  var n = Tf(e, this, t, r);
  return e.defineProperty_(t, n, o);
}
function ex(e, t) {
  process.env.NODE_ENV !== "production" && ii(t, ["method", "field"]);
  var r = t.kind, o = t.name, n = t.addInitializer, i = this, a = function(c) {
    var u, d, f, v;
    return fr((u = (d = i.options_) == null ? void 0 : d.name) != null ? u : o.toString(), c, (f = (v = i.options_) == null ? void 0 : v.autoAction) != null ? f : !1);
  };
  if (r == "field") {
    n(function() {
      Hr(this, o, i);
    });
    return;
  }
  if (r == "method") {
    var s;
    return Ro(e) || (e = a(e)), (s = this.options_) != null && s.bound && n(function() {
      var l = this, c = l[o].bind(l);
      c.isMobxAction = !0, l[o] = c;
    }), e;
  }
  A("Cannot apply '" + i.annotationType_ + "' to '" + String(o) + "' (kind: " + r + "):" + (`
'` + i.annotationType_ + "' can only be used on properties with a function value."));
}
function tx(e, t, r, o) {
  var n = t.annotationType_, i = o.value;
  process.env.NODE_ENV !== "production" && !Re(i) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on properties with a function value."));
}
function Tf(e, t, r, o, n) {
  var i, a, s, l, c, u, d;
  n === void 0 && (n = C.safeDescriptors), tx(e, t, r, o);
  var f = o.value;
  if ((i = t.options_) != null && i.bound) {
    var v;
    f = f.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: fr(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : r.toString(),
      f,
      (l = (c = t.options_) == null ? void 0 : c.autoAction) != null ? l : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (u = t.options_) != null && u.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: n ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !n
  };
}
function Cf(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: rx,
    extend_: ox,
    decorate_20223_: nx
  };
}
function rx(e, t, r, o) {
  var n;
  if (o === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((n = this.options_) != null && n.bound && (!st(e.target_, t) || !vo(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (vo(r.value))
    return 1;
  var i = Pf(e, this, t, r, !1, !1);
  return Nt(o, t, i), 2;
}
function ox(e, t, r, o) {
  var n, i = Pf(e, this, t, r, (n = this.options_) == null ? void 0 : n.bound);
  return e.defineProperty_(t, i, o);
}
function nx(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && ii(t, ["method"]);
  var o = t.name, n = t.addInitializer;
  return vo(e) || (e = Ar(e)), (r = this.options_) != null && r.bound && n(function() {
    var i = this, a = i[o].bind(i);
    a.isMobXFlow = !0, i[o] = a;
  }), e;
}
function ix(e, t, r, o) {
  var n = t.annotationType_, i = o.value;
  process.env.NODE_ENV !== "production" && !Re(i) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on properties with a generator function value."));
}
function Pf(e, t, r, o, n, i) {
  i === void 0 && (i = C.safeDescriptors), ix(e, t, r, o);
  var a = o.value;
  if (vo(a) || (a = Ar(a)), n) {
    var s;
    a = a.bind((s = e.proxy_) != null ? s : e.target_), a.isMobXFlow = !0;
  }
  return {
    value: a,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function Os(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ax,
    extend_: sx,
    decorate_20223_: lx
  };
}
function ax(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function sx(e, t, r, o) {
  return cx(e, this, t, r), e.defineComputedProperty_(t, It({}, this.options_, {
    get: r.get,
    set: r.set
  }), o);
}
function lx(e, t) {
  process.env.NODE_ENV !== "production" && ii(t, ["getter"]);
  var r = this, o = t.name, n = t.addInitializer;
  return n(function() {
    var i = yr(this)[X], a = It({}, r.options_, {
      get: e,
      context: this
    });
    a.name || (a.name = process.env.NODE_ENV !== "production" ? i.name_ + "." + o.toString() : "ObservableObject." + o.toString()), i.values_.set(o, new hr(a));
  }), function() {
    return this[X].getObservablePropValue_(o);
  };
}
function cx(e, t, r, o) {
  var n = t.annotationType_, i = o.get;
  process.env.NODE_ENV !== "production" && !i && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' can only be used on getter(+setter) properties."));
}
function si(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ux,
    extend_: dx,
    decorate_20223_: fx
  };
}
function ux(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function dx(e, t, r, o) {
  var n, i;
  return hx(e, this, t, r), e.defineObservableProperty_(t, r.value, (n = (i = this.options_) == null ? void 0 : i.enhancer) != null ? n : dr, o);
}
function fx(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw A("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    ii(t, ["accessor"]);
  }
  var r = this, o = t.kind, n = t.name, i = /* @__PURE__ */ new WeakSet();
  function a(s, l) {
    var c, u, d = yr(s)[X], f = new sr(l, (c = (u = r.options_) == null ? void 0 : u.enhancer) != null ? c : dr, process.env.NODE_ENV !== "production" ? d.name_ + "." + n.toString() : "ObservableObject." + n.toString(), !1);
    d.values_.set(n, f), i.add(s);
  }
  if (o == "accessor")
    return {
      get: function() {
        return i.has(this) || a(this, e.get.call(this)), this[X].getObservablePropValue_(n);
      },
      set: function(l) {
        return i.has(this) || a(this, l), this[X].setObservablePropValue_(n, l);
      },
      init: function(l) {
        return i.has(this) || a(this, l), l;
      }
    };
}
function hx(e, t, r, o) {
  var n = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in o) && A("Cannot apply '" + n + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + n + "' cannot be used on getter/setter properties"));
}
var vx = "true", px = /* @__PURE__ */ Of();
function Of(e) {
  return {
    annotationType_: vx,
    options_: e,
    make_: gx,
    extend_: mx,
    decorate_20223_: bx
  };
}
function gx(e, t, r, o) {
  var n, i;
  if (r.get)
    return li.make_(e, t, r, o);
  if (r.set) {
    var a = fr(t.toString(), r.set);
    return o === e.target_ ? e.defineProperty_(t, {
      configurable: C.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Nt(o, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (o !== e.target_ && typeof r.value == "function") {
    var s;
    if (kf(r.value)) {
      var l, c = (l = this.options_) != null && l.autoBind ? Ar.bound : Ar;
      return c.make_(e, t, r, o);
    }
    var u = (s = this.options_) != null && s.autoBind ? ho.bound : ho;
    return u.make_(e, t, r, o);
  }
  var d = ((n = this.options_) == null ? void 0 : n.deep) === !1 ? je.ref : je;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, o);
}
function mx(e, t, r, o) {
  var n, i;
  if (r.get)
    return li.extend_(e, t, r, o);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: C.safeDescriptors ? e.isPlainObject_ : !0,
      set: fr(t.toString(), r.set)
    }, o);
  if (typeof r.value == "function" && (n = this.options_) != null && n.autoBind) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? je.ref : je;
  return s.extend_(e, t, r, o);
}
function bx(e, t) {
  A("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var yx = "observable", _x = "observable.ref", wx = "observable.shallow", kx = "observable.struct", zf = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(zf);
function Zo(e) {
  return e || zf;
}
var Fa = /* @__PURE__ */ si(yx), xx = /* @__PURE__ */ si(_x, {
  enhancer: ai
}), Sx = /* @__PURE__ */ si(wx, {
  enhancer: Xk
}), Ex = /* @__PURE__ */ si(kx, {
  enhancer: Yk
}), Rf = /* @__PURE__ */ Tt(Fa);
function Qo(e) {
  return e.deep === !0 ? dr : e.deep === !1 ? ai : Nx(e.defaultDecorator);
}
function Bx(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : Of(e) : void 0;
}
function Nx(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : dr;
}
function Df(e, t, r) {
  if (Po(t))
    return Fa.decorate_20223_(e, t);
  if (ur(t)) {
    Hr(e, t, Fa);
    return;
  }
  return po(e) ? e : Ke(e) ? je.object(e, t, r) : Array.isArray(e) ? je.array(e, t) : Vr(e) ? je.map(e, t) : Co(e) ? je.set(e, t) : typeof e == "object" && e !== null ? e : je.box(e, t);
}
yf(Df, Rf);
var Tx = {
  box: function(t, r) {
    var o = Zo(r);
    return new sr(t, Qo(o), o.name, !0, o.equals);
  },
  array: function(t, r) {
    var o = Zo(r);
    return (C.useProxies === !1 || o.proxy === !1 ? CS : yS)(t, Qo(o), o.name);
  },
  map: function(t, r) {
    var o = Zo(r);
    return new lh(t, Qo(o), o.name);
  },
  set: function(t, r) {
    var o = Zo(r);
    return new dh(t, Qo(o), o.name);
  },
  object: function(t, r, o) {
    return Yt(function() {
      return th(C.useProxies === !1 || (o == null ? void 0 : o.proxy) === !1 ? yr({}, o) : pS({}, o), t, r);
    });
  },
  ref: /* @__PURE__ */ Tt(xx),
  shallow: /* @__PURE__ */ Tt(Sx),
  deep: Rf,
  struct: /* @__PURE__ */ Tt(Ex)
}, je = /* @__PURE__ */ yf(Df, Tx), Af = "computed", Cx = "computed.struct", Ia = /* @__PURE__ */ Os(Af), Px = /* @__PURE__ */ Os(Cx, {
  equals: On.structural
}), li = function(t, r) {
  if (Po(r))
    return Ia.decorate_20223_(t, r);
  if (ur(r))
    return Hr(t, r, Ia);
  if (Ke(t))
    return Tt(Os(Af, t));
  process.env.NODE_ENV !== "production" && (Re(t) || A("First argument to `computed` should be an expression."), Re(r) && A("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var o = Ke(r) ? r : {};
  return o.get = t, o.name || (o.name = t.name || ""), new hr(o);
};
Object.assign(li, Ia);
li.struct = /* @__PURE__ */ Tt(Px);
var bc, yc, Rn = 0, Ox = 1, zx = (bc = (yc = /* @__PURE__ */ Cn(function() {
}, "name")) == null ? void 0 : yc.configurable) != null ? bc : !1, _c = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function fr(e, t, r, o) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (Re(t) || A("`action` can only be invoked on functions"), (typeof e != "string" || !e) && A("actions should have valid names, got: '" + e + "'"));
  function n() {
    return jf(e, r, t, o || this, arguments);
  }
  return n.isMobxAction = !0, n.toString = function() {
    return t.toString();
  }, zx && (_c.value = e, Nt(n, "name", _c)), n;
}
function jf(e, t, r, o, n) {
  var i = Rx(e, t, o, n);
  try {
    return r.apply(o, n);
  } catch (a) {
    throw i.error_ = a, a;
  } finally {
    Dx(i);
  }
}
function Rx(e, t, r, o) {
  var n = process.env.NODE_ENV !== "production" && qe() && !!e, i = 0;
  if (process.env.NODE_ENV !== "production" && n) {
    i = Date.now();
    var a = o ? Array.from(o) : Pn;
    Xe({
      type: Rs,
      name: e,
      object: r,
      arguments: a
    });
  }
  var s = C.trackingDerivation, l = !t || !s;
  nt();
  var c = C.allowStateChanges;
  l && (br(), c = ci(!0));
  var u = zs(!0), d = {
    runAsAction_: l,
    prevDerivation_: s,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: u,
    notifySpy_: n,
    startTime_: i,
    actionId_: Ox++,
    parentActionId_: Rn
  };
  return Rn = d.actionId_, d;
}
function Dx(e) {
  Rn !== e.actionId_ && A(30), Rn = e.parentActionId_, e.error_ !== void 0 && (C.suppressReactionErrors = !0), ui(e.prevAllowStateChanges_), no(e.prevAllowStateReads_), it(), e.runAsAction_ && jt(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && Ye({
    time: Date.now() - e.startTime_
  }), C.suppressReactionErrors = !1;
}
function Ax(e, t) {
  var r = ci(e);
  try {
    return t();
  } finally {
    ui(r);
  }
}
function ci(e) {
  var t = C.allowStateChanges;
  return C.allowStateChanges = e, t;
}
function ui(e) {
  C.allowStateChanges = e;
}
var Ff, jx = "create";
Ff = Symbol.toPrimitive;
var sr = /* @__PURE__ */ function(e) {
  Bf(t, e);
  function t(o, n, i, a, s) {
    var l;
    return i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableValue@" + yt() : "ObservableValue"), a === void 0 && (a = !0), s === void 0 && (s = On.default), l = e.call(this, i) || this, l.enhancer = void 0, l.name_ = void 0, l.equals = void 0, l.hasUnreportedChange_ = !1, l.interceptors_ = void 0, l.changeListeners_ = void 0, l.value_ = void 0, l.dehancer = void 0, l.enhancer = n, l.name_ = i, l.equals = s, l.value_ = n(o, void 0, i), process.env.NODE_ENV !== "production" && a && qe() && vr({
      type: jx,
      object: hn(l),
      observableKind: "value",
      debugObjectName: l.name_,
      newValue: "" + l.value_
    }), l;
  }
  var r = t.prototype;
  return r.dehanceValue = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, r.set = function(n) {
    var i = this.value_;
    if (n = this.prepareNewValue_(n), n !== C.UNCHANGED) {
      var a = qe();
      process.env.NODE_ENV !== "production" && a && Xe({
        type: vt,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: n,
        oldValue: i
      }), this.setNewValue_(n), process.env.NODE_ENV !== "production" && a && Ye();
    }
  }, r.prepareNewValue_ = function(n) {
    if (kt(this), rt(this)) {
      var i = ot(this, {
        object: this,
        type: vt,
        newValue: n
      });
      if (!i)
        return C.UNCHANGED;
      n = i.newValue;
    }
    return n = this.enhancer(n, this.value_, this.name_), this.equals(this.value_, n) ? C.UNCHANGED : n;
  }, r.setNewValue_ = function(n) {
    var i = this.value_;
    this.value_ = n, this.reportChanged(), gt(this) && mt(this, {
      type: vt,
      object: this,
      newValue: n,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(n) {
    return Do(this, n);
  }, r.observe_ = function(n, i) {
    return i && n({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: vt,
      newValue: this.value_,
      oldValue: void 0
    }), Ao(this, n);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return Ef(this.get());
  }, r[Ff] = function() {
    return this.valueOf();
  }, t;
}(Oo), If;
If = Symbol.toPrimitive;
var hr = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = se.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = se.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Dn(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = lt.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || A(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + yt() : "ComputedValue"), r.set && (this.setter_ = fr(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? On.structural : On.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    $x(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, t.get = function() {
    if (this.isComputing_ && A(32, this.name_, this.derivation), C.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      qa(this) && (this.warnAboutUntrackedRead_(), nt(), this.value_ = this.computeValue_(!1), it());
    else if (Wf(this), qa(this)) {
      var o = C.trackingContext;
      this.keepAlive_ && !o && (C.trackingContext = this), this.trackAndCompute() && Hx(this), C.trackingContext = o;
    }
    var n = this.value_;
    if (vn(n))
      throw n.cause;
    return n;
  }, t.set = function(o) {
    if (this.setter_) {
      this.isRunningSetter_ && A(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, o);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      A(34, this.name_);
  }, t.trackAndCompute = function() {
    var o = this.value_, n = (
      /* see #1208 */
      this.dependenciesState_ === se.NOT_TRACKING_
    ), i = this.computeValue_(!0), a = n || vn(o) || vn(i) || !this.equals_(o, i);
    return a && (this.value_ = i, process.env.NODE_ENV !== "production" && qe() && vr({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: o,
      newValue: i
    })), a;
  }, t.computeValue_ = function(o) {
    this.isComputing_ = !0;
    var n = ci(!1), i;
    if (o)
      i = qf(this, this.derivation, this.scope_);
    else if (C.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (a) {
        i = new Dn(a);
      }
    return ui(n), this.isComputing_ = !1, i;
  }, t.suspend_ = function() {
    this.keepAlive_ || (Ma(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== lt.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(o, n) {
    var i = this, a = !0, s = void 0;
    return Qx(function() {
      var l = i.get();
      if (!a || n) {
        var c = br();
        o({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: vt,
          object: i,
          newValue: l,
          oldValue: s
        }), jt(c);
      }
      a = !1, s = l;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== lt.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : C.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return Ef(this.get());
  }, t[If] = function() {
    return this.valueOf();
  }, e;
}(), di = /* @__PURE__ */ mr("ComputedValue", hr), se;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(se || (se = {}));
var lt;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(lt || (lt = {}));
var Dn = function(t) {
  this.cause = void 0, this.cause = t;
};
function vn(e) {
  return e instanceof Dn;
}
function qa(e) {
  switch (e.dependenciesState_) {
    case se.UP_TO_DATE_:
      return !1;
    case se.NOT_TRACKING_:
    case se.STALE_:
      return !0;
    case se.POSSIBLY_STALE_: {
      for (var t = zs(!0), r = br(), o = e.observing_, n = o.length, i = 0; i < n; i++) {
        var a = o[i];
        if (di(a)) {
          if (C.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return jt(r), no(t), !0;
            }
          if (e.dependenciesState_ === se.STALE_)
            return jt(r), no(t), !0;
        }
      }
      return Lf(e), jt(r), no(t), !1;
    }
  }
}
function kt(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !C.allowStateChanges && (t || C.enforceActions === "always") && console.warn("[MobX] " + (C.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function Fx(e) {
  process.env.NODE_ENV !== "production" && !C.allowStateReads && C.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function qf(e, t, r) {
  var o = zs(!0);
  Lf(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++C.runId;
  var n = C.trackingDerivation;
  C.trackingDerivation = e, C.inBatch++;
  var i;
  if (C.disableErrorBoundaries === !0)
    i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (a) {
      i = new Dn(a);
    }
  return C.inBatch--, C.trackingDerivation = n, qx(e), Ix(e), no(o), i;
}
function Ix(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : C.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function qx(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, o = se.UP_TO_DATE_, n = 0, i = e.unboundDepsCount_, a = 0; a < i; a++) {
    var s = r[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, n !== a && (r[n] = s), n++), s.dependenciesState_ > o && (o = s.dependenciesState_);
  }
  for (r.length = n, e.newObserving_ = null, i = t.length; i--; ) {
    var l = t[i];
    l.diffValue_ === 0 && Hf(l, e), l.diffValue_ = 0;
  }
  for (; n--; ) {
    var c = r[n];
    c.diffValue_ === 1 && (c.diffValue_ = 0, Vx(c, e));
  }
  o !== se.UP_TO_DATE_ && (e.dependenciesState_ = o, e.onBecomeStale_());
}
function Ma(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    Hf(t[r], e);
  e.dependenciesState_ = se.NOT_TRACKING_;
}
function Mf(e) {
  var t = br();
  try {
    return e();
  } finally {
    jt(t);
  }
}
function br() {
  var e = C.trackingDerivation;
  return C.trackingDerivation = null, e;
}
function jt(e) {
  C.trackingDerivation = e;
}
function zs(e) {
  var t = C.allowStateReads;
  return C.allowStateReads = e, t;
}
function no(e) {
  C.allowStateReads = e;
}
function Lf(e) {
  if (e.dependenciesState_ !== se.UP_TO_DATE_) {
    e.dependenciesState_ = se.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = se.UP_TO_DATE_;
  }
}
var pn = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, gn = !0, Vf = !1, C = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Ns();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (gn = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new pn().version && (gn = !1), gn ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new pn()) : (setTimeout(function() {
    Vf || A(35);
  }, 1), new pn());
}();
function Mx() {
  if ((C.pendingReactions.length || C.inBatch || C.isRunningReactions) && A(36), Vf = !0, gn) {
    var e = Ns();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), C = new pn();
  }
}
function Lx() {
  return C;
}
function Vx(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Hf(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && $f(e);
}
function $f(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, C.pendingUnobservations.push(e));
}
function nt() {
  C.inBatch++;
}
function it() {
  if (--C.inBatch === 0) {
    Xf();
    for (var e = C.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof hr && r.suspend_());
    }
    C.pendingUnobservations = [];
  }
}
function Wf(e) {
  Fx(e);
  var t = C.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && C.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && C.inBatch > 0 && $f(e), !1);
}
function Uf(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === se.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== lt.NONE && Gf(t, e), t.onBecomeStale_()), t.dependenciesState_ = se.STALE_;
  }));
}
function Hx(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === se.POSSIBLY_STALE_ ? (t.dependenciesState_ = se.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== lt.NONE && Gf(t, e)) : t.dependenciesState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.UP_TO_DATE_);
  }));
}
function $x(e) {
  e.lowestObserverState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === se.UP_TO_DATE_ && (t.dependenciesState_ = se.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Gf(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === lt.BREAK) {
    var r = [];
    Kf(rh(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof hr ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Kf(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(o) {
    return Kf(o, t, r + 1);
  });
}
var fo = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + yt() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = se.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = lt.NONE, this.name_ = r, this.onInvalidate_ = o, this.errorHandler_ = n, this.requiresObservable_ = i;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, C.pendingReactions.push(this), Xf());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      nt(), this.isScheduled_ = !1;
      var o = C.trackingContext;
      if (C.trackingContext = this, qa(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && qe() && vr({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (n) {
          this.reportExceptionInDerivation_(n);
        }
      }
      C.trackingContext = o, it();
    }
  }, t.track = function(o) {
    if (!this.isDisposed_) {
      nt();
      var n = qe(), i;
      process.env.NODE_ENV !== "production" && n && (i = Date.now(), Xe({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var a = C.trackingContext;
      C.trackingContext = this;
      var s = qf(this, o, void 0);
      C.trackingContext = a, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Ma(this), vn(s) && this.reportExceptionInDerivation_(s.cause), process.env.NODE_ENV !== "production" && n && Ye({
        time: Date.now() - i
      }), it();
    }
  }, t.reportExceptionInDerivation_ = function(o) {
    var n = this;
    if (this.errorHandler_) {
      this.errorHandler_(o, this);
      return;
    }
    if (C.disableErrorBoundaries)
      throw o;
    var i = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    C.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(i, o), process.env.NODE_ENV !== "production" && qe() && vr({
      type: "error",
      name: this.name_,
      message: i,
      error: "" + o
    }), C.globalReactionErrorHandlers.forEach(function(a) {
      return a(o, n);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (nt(), Ma(this), it()));
  }, t.getDisposer_ = function(o) {
    var n = this, i = function a() {
      n.dispose(), o == null || o.removeEventListener == null || o.removeEventListener("abort", a);
    };
    return o == null || o.addEventListener == null || o.addEventListener("abort", i), i[X] = this, i;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(o) {
    o === void 0 && (o = !1), fS(this, o);
  }, e;
}(), wc = 100, La = function(t) {
  return t();
};
function Xf() {
  C.inBatch > 0 || C.isRunningReactions || La(Wx);
}
function Wx() {
  C.isRunningReactions = !0;
  for (var e = C.pendingReactions, t = 0; e.length > 0; ) {
    ++t === wc && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + wc + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), o = 0, n = r.length; o < n; o++)
      r[o].runReaction_();
  }
  C.isRunningReactions = !1;
}
var An = /* @__PURE__ */ mr("Reaction", fo);
function Ux(e) {
  var t = La;
  La = function(o) {
    return e(function() {
      return t(o);
    });
  };
}
function qe() {
  return process.env.NODE_ENV !== "production" && !!C.spyListeners.length;
}
function vr(e) {
  if (process.env.NODE_ENV !== "production" && C.spyListeners.length)
    for (var t = C.spyListeners, r = 0, o = t.length; r < o; r++)
      t[r](e);
}
function Xe(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = It({}, e, {
      spyReportStart: !0
    });
    vr(t);
  }
}
var Gx = {
  type: "report-end",
  spyReportEnd: !0
};
function Ye(e) {
  process.env.NODE_ENV !== "production" && vr(e ? It({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : Gx);
}
function Kx(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (C.spyListeners.push(e), Ts(function() {
    C.spyListeners = C.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var Rs = "action", Xx = "action.bound", Yf = "autoAction", Yx = "autoAction.bound", Jf = "<unnamed action>", Va = /* @__PURE__ */ zo(Rs), Jx = /* @__PURE__ */ zo(Xx, {
  bound: !0
}), Ha = /* @__PURE__ */ zo(Yf, {
  autoAction: !0
}), Zx = /* @__PURE__ */ zo(Yx, {
  autoAction: !0,
  bound: !0
});
function Zf(e) {
  var t = function(o, n) {
    if (Re(o))
      return fr(o.name || Jf, o, e);
    if (Re(n))
      return fr(o, n, e);
    if (Po(n))
      return (e ? Ha : Va).decorate_20223_(o, n);
    if (ur(n))
      return Hr(o, n, e ? Ha : Va);
    if (ur(o))
      return Tt(zo(e ? Yf : Rs, {
        name: o,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && A("Invalid arguments for `action`");
  };
  return t;
}
var Er = /* @__PURE__ */ Zf(!1);
Object.assign(Er, Va);
var ho = /* @__PURE__ */ Zf(!0);
Object.assign(ho, Ha);
Er.bound = /* @__PURE__ */ Tt(Jx);
ho.bound = /* @__PURE__ */ Tt(Zx);
function en(e) {
  return jf(e.name || Jf, !1, e, this, void 0);
}
function Ro(e) {
  return Re(e) && e.isMobxAction === !0;
}
function Qx(e, t) {
  var r, o, n, i, a;
  t === void 0 && (t = _f), process.env.NODE_ENV !== "production" && (Re(e) || A("Autorun expects a function as first argument"), Ro(e) && A("Autorun does not accept actions since actions are untrackable"));
  var s = (r = (o = t) == null ? void 0 : o.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + yt() : "Autorun", l = !t.scheduler && !t.delay, c;
  if (l)
    c = new fo(s, function() {
      this.track(f);
    }, t.onError, t.requiresObservable);
  else {
    var u = tS(t), d = !1;
    c = new fo(s, function() {
      d || (d = !0, u(function() {
        d = !1, c.isDisposed_ || c.track(f);
      }));
    }, t.onError, t.requiresObservable);
  }
  function f() {
    e(c);
  }
  return (n = t) != null && (i = n.signal) != null && i.aborted || c.schedule_(), c.getDisposer_((a = t) == null ? void 0 : a.signal);
}
var eS = function(t) {
  return t();
};
function tS(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : eS;
}
var rS = "onBO", oS = "onBUO";
function nS(e, t, r) {
  return eh(rS, e, t, r);
}
function Qf(e, t, r) {
  return eh(oS, e, t, r);
}
function eh(e, t, r, o) {
  var n = typeof o == "function" ? Xt(t, r) : Xt(t), i = Re(o) ? o : r, a = e + "L";
  return n[a] ? n[a].add(i) : n[a] = /* @__PURE__ */ new Set([i]), function() {
    var s = n[a];
    s && (s.delete(i), s.size === 0 && delete n[a]);
  };
}
var iS = "never", tn = "always", aS = "observed";
function sS(e) {
  e.isolateGlobalState === !0 && Mx();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (C.useProxies = t === tn ? !0 : t === iS ? !1 : typeof Proxy < "u"), t === "ifavailable" && (C.verifyProxies = !0), r !== void 0) {
    var o = r === tn ? tn : r === aS;
    C.enforceActions = o, C.allowStateChanges = !(o === !0 || o === tn);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(n) {
    n in e && (C[n] = !!e[n]);
  }), C.allowStateReads = !C.observableRequiresReaction, process.env.NODE_ENV !== "production" && C.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && Ux(e.reactionScheduler);
}
function th(e, t, r, o) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && A("'extendObservable' expected 2-4 arguments"), typeof e != "object" && A("'extendObservable' expects an object as first argument"), $t(e) && A("'extendObservable' should not be used on maps, use map.merge instead"), Ke(t) || A("'extendObservable' only accepts plain objects as second argument"), (po(t) || po(r)) && A("Extending an object with another observable (object) is not supported"));
  var n = qk(t);
  return Yt(function() {
    var i = yr(e, o)[X];
    Dr(n).forEach(function(a) {
      i.extend_(
        a,
        n[a],
        // must pass "undefined" for { key: undefined }
        r && a in r ? r[a] : !0
      );
    });
  }), e;
}
function rh(e, t) {
  return oh(Xt(e, t));
}
function oh(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = lS(e.observing_).map(oh)), t;
}
function lS(e) {
  return Array.from(new Set(e));
}
var cS = 0;
function nh() {
  this.message = "FLOW_CANCELLED";
}
nh.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Ki = /* @__PURE__ */ Cf("flow"), uS = /* @__PURE__ */ Cf("flow.bound", {
  bound: !0
}), Ar = /* @__PURE__ */ Object.assign(function(t, r) {
  if (Po(r))
    return Ki.decorate_20223_(t, r);
  if (ur(r))
    return Hr(t, r, Ki);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && A("Flow expects single argument with generator function");
  var o = t, n = o.name || "<unnamed flow>", i = function() {
    var s = this, l = arguments, c = ++cS, u = Er(n + " - runid: " + c + " - init", o).apply(s, l), d, f = void 0, v = new Promise(function(h, p) {
      var y = 0;
      d = p;
      function g(k) {
        f = void 0;
        var w;
        try {
          w = Er(n + " - runid: " + c + " - yield " + y++, u.next).call(u, k);
        } catch (x) {
          return p(x);
        }
        m(w);
      }
      function _(k) {
        f = void 0;
        var w;
        try {
          w = Er(n + " - runid: " + c + " - yield " + y++, u.throw).call(u, k);
        } catch (x) {
          return p(x);
        }
        m(w);
      }
      function m(k) {
        if (Re(k == null ? void 0 : k.then)) {
          k.then(m, p);
          return;
        }
        return k.done ? h(k.value) : (f = Promise.resolve(k.value), f.then(g, _));
      }
      g(void 0);
    });
    return v.cancel = Er(n + " - runid: " + c + " - cancel", function() {
      try {
        f && kc(f);
        var h = u.return(void 0), p = Promise.resolve(h.value);
        p.then(xr, xr), kc(p), d(new nh());
      } catch (y) {
        d(y);
      }
    }), v;
  };
  return i.isMobXFlow = !0, i;
}, Ki);
Ar.bound = /* @__PURE__ */ Tt(uS);
function kc(e) {
  Re(e.cancel) && e.cancel();
}
function vo(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function dS(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && ($t(e) || jo(e)) ? A("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : pr(e) ? e[X].values_.has(t) : !1 : pr(e) || !!e[X] || Ps(e) || An(e) || di(e) : !1;
}
function po(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && A("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), dS(e);
}
function fS() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var n = hS(r);
    if (!n)
      return A("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    n.isTracing_ === lt.NONE && console.log("[mobx.trace] '" + n.name_ + "' tracing enabled"), n.isTracing_ = e ? lt.BREAK : lt.LOG;
  }
}
function hS(e) {
  switch (e.length) {
    case 0:
      return C.trackingDerivation;
    case 1:
      return Xt(e[0]);
    case 2:
      return Xt(e[0], e[1]);
  }
}
function Rt(e, t) {
  t === void 0 && (t = void 0), nt();
  try {
    return e.apply(t);
  } finally {
    it();
  }
}
function Zt(e) {
  return e[X];
}
var vS = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && C.trackingDerivation && Xr("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Zt(t).has_(r);
  },
  get: function(t, r) {
    return Zt(t).get_(r);
  },
  set: function(t, r, o) {
    var n;
    return ur(r) ? (process.env.NODE_ENV !== "production" && !Zt(t).values_.has(r) && Xr("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (n = Zt(t).set_(r, o, !0)) != null ? n : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var o;
    return process.env.NODE_ENV !== "production" && Xr("delete properties from an observable object. Use 'remove' from 'mobx' instead."), ur(r) ? (o = Zt(t).delete_(r, !0)) != null ? o : !0 : !1;
  },
  defineProperty: function(t, r, o) {
    var n;
    return process.env.NODE_ENV !== "production" && Xr("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (n = Zt(t).defineProperty_(r, o)) != null ? n : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && C.trackingDerivation && Xr("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Zt(t).ownKeys_();
  },
  preventExtensions: function(t) {
    A(13);
  }
};
function pS(e, t) {
  var r, o;
  return wf(), e = yr(e, t), (o = (r = e[X]).proxy_) != null ? o : r.proxy_ = new Proxy(e, vS);
}
function rt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Do(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), Ts(function() {
    var o = r.indexOf(t);
    o !== -1 && r.splice(o, 1);
  });
}
function ot(e, t) {
  var r = br();
  try {
    for (var o = [].concat(e.interceptors_ || []), n = 0, i = o.length; n < i && (t = o[n](t), t && !t.type && A(14), !!t); n++)
      ;
    return t;
  } finally {
    jt(r);
  }
}
function gt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ao(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), Ts(function() {
    var o = r.indexOf(t);
    o !== -1 && r.splice(o, 1);
  });
}
function mt(e, t) {
  var r = br(), o = e.changeListeners_;
  if (o) {
    o = o.slice();
    for (var n = 0, i = o.length; n < i; n++)
      o[n](t);
    jt(r);
  }
}
function gS(e, t, r) {
  return Yt(function() {
    var o, n = yr(e, r)[X];
    process.env.NODE_ENV !== "production" && t && e[Ue] && A("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (o = t) != null || (t = $k(e)), Dr(t).forEach(function(i) {
      return n.make_(i, t[i]);
    });
  }), e;
}
var Xi = /* @__PURE__ */ Symbol("mobx-keys");
function Ds(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!Ke(e) && !Ke(Object.getPrototypeOf(e)) && A("'makeAutoObservable' can only be used for classes that don't have a superclass"), pr(e) && A("makeAutoObservable can only be used on objects not already made observable")), Ke(e) ? th(e, e, t, r) : (Yt(function() {
    var o = yr(e, r)[X];
    if (!e[Xi]) {
      var n = Object.getPrototypeOf(e), i = new Set([].concat(Dr(e), Dr(n)));
      i.delete("constructor"), i.delete(X), To(n, Xi, i);
    }
    e[Xi].forEach(function(a) {
      return o.make_(
        a,
        // must pass "undefined" for { key: undefined }
        t && a in t ? t[a] : !0
      );
    });
  }), e);
}
var xc = "splice", vt = "update", mS = 1e4, bS = {
  get: function(t, r) {
    var o = t[X];
    return r === X ? o : r === "length" ? o.getArrayLength_() : typeof r == "string" && !isNaN(r) ? o.get_(parseInt(r)) : st(jn, r) ? jn[r] : t[r];
  },
  set: function(t, r, o) {
    var n = t[X];
    return r === "length" && n.setArrayLength_(o), typeof r == "symbol" || isNaN(r) ? t[r] = o : n.set_(parseInt(r), o), !0;
  },
  preventExtensions: function() {
    A(15);
  }
}, As = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + yt() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = n, this.legacyMode_ = i, this.atom_ = new Oo(r), this.enhancer_ = function(a, s) {
      return o(a, s, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.dehanceValues_ = function(o) {
    return this.dehancer !== void 0 && o.length > 0 ? o.map(this.dehancer) : o;
  }, t.intercept_ = function(o) {
    return Do(this, o);
  }, t.observe_ = function(o, n) {
    return n === void 0 && (n = !1), n && o({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Ao(this, o);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(o) {
    (typeof o != "number" || isNaN(o) || o < 0) && A("Out of range: " + o);
    var n = this.values_.length;
    if (o !== n)
      if (o > n) {
        for (var i = new Array(o - n), a = 0; a < o - n; a++)
          i[a] = void 0;
        this.spliceWithArray_(n, 0, i);
      } else
        this.spliceWithArray_(o, n - o);
  }, t.updateArrayLength_ = function(o, n) {
    o !== this.lastKnownLength_ && A(16), this.lastKnownLength_ += n, this.legacyMode_ && n > 0 && vh(o + n + 1);
  }, t.spliceWithArray_ = function(o, n, i) {
    var a = this;
    kt(this.atom_);
    var s = this.values_.length;
    if (o === void 0 ? o = 0 : o > s ? o = s : o < 0 && (o = Math.max(0, s + o)), arguments.length === 1 ? n = s - o : n == null ? n = 0 : n = Math.max(0, Math.min(n, s - o)), i === void 0 && (i = Pn), rt(this)) {
      var l = ot(this, {
        object: this.proxy_,
        type: xc,
        index: o,
        removedCount: n,
        added: i
      });
      if (!l)
        return Pn;
      n = l.removedCount, i = l.added;
    }
    if (i = i.length === 0 ? i : i.map(function(d) {
      return a.enhancer_(d, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = i.length - n;
      this.updateArrayLength_(s, c);
    }
    var u = this.spliceItemsIntoValues_(o, n, i);
    return (n !== 0 || i.length !== 0) && this.notifyArraySplice_(o, i, u), this.dehanceValues_(u);
  }, t.spliceItemsIntoValues_ = function(o, n, i) {
    if (i.length < mS) {
      var a;
      return (a = this.values_).splice.apply(a, [o, n].concat(i));
    } else {
      var s = this.values_.slice(o, o + n), l = this.values_.slice(o + n);
      this.values_.length += i.length - n;
      for (var c = 0; c < i.length; c++)
        this.values_[o + c] = i[c];
      for (var u = 0; u < l.length; u++)
        this.values_[o + i.length + u] = l[u];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(o, n, i) {
    var a = !this.owned_ && qe(), s = gt(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: vt,
      debugObjectName: this.atom_.name_,
      index: o,
      newValue: n,
      oldValue: i
    } : null;
    process.env.NODE_ENV !== "production" && a && Xe(l), this.atom_.reportChanged(), s && mt(this, l), process.env.NODE_ENV !== "production" && a && Ye();
  }, t.notifyArraySplice_ = function(o, n, i) {
    var a = !this.owned_ && qe(), s = gt(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: xc,
      index: o,
      removed: i,
      added: n,
      removedCount: i.length,
      addedCount: n.length
    } : null;
    process.env.NODE_ENV !== "production" && a && Xe(l), this.atom_.reportChanged(), s && mt(this, l), process.env.NODE_ENV !== "production" && a && Ye();
  }, t.get_ = function(o) {
    if (this.legacyMode_ && o >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + o + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + o);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[o]);
  }, t.set_ = function(o, n) {
    var i = this.values_;
    if (this.legacyMode_ && o > i.length && A(17, o, i.length), o < i.length) {
      kt(this.atom_);
      var a = i[o];
      if (rt(this)) {
        var s = ot(this, {
          type: vt,
          object: this.proxy_,
          index: o,
          newValue: n
        });
        if (!s)
          return;
        n = s.newValue;
      }
      n = this.enhancer_(n, a);
      var l = n !== a;
      l && (i[o] = n, this.notifyArrayChildUpdate_(o, n, a));
    } else {
      for (var c = new Array(o + 1 - i.length), u = 0; u < c.length - 1; u++)
        c[u] = void 0;
      c[c.length - 1] = n, this.spliceWithArray_(i.length, 0, c);
    }
  }, e;
}();
function yS(e, t, r, o) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + yt() : "ObservableArray"), o === void 0 && (o = !1), wf(), Yt(function() {
    var n = new As(r, t, o, !1);
    xf(n.values_, X, n);
    var i = new Proxy(n.values_, bS);
    return n.proxy_ = i, e && e.length && n.spliceWithArray_(0, 0, e), i;
  });
}
var jn = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[X];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, r) {
    for (var o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
      n[i - 2] = arguments[i];
    var a = this[X];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, r);
    }
    return a.spliceWithArray_(t, r, n);
  },
  spliceWithArray: function(t, r, o) {
    return this[X].spliceWithArray_(t, r, o);
  },
  push: function() {
    for (var t = this[X], r = arguments.length, o = new Array(r), n = 0; n < r; n++)
      o[n] = arguments[n];
    return t.spliceWithArray_(t.values_.length, 0, o), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[X].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[X], r = arguments.length, o = new Array(r), n = 0; n < r; n++)
      o[n] = arguments[n];
    return t.spliceWithArray_(0, 0, o), t.values_.length;
  },
  reverse: function() {
    return C.trackingDerivation && A(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    C.trackingDerivation && A(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[X], o = r.dehanceValues_(r.values_).indexOf(t);
    return o > -1 ? (this.splice(o, 1), !0) : !1;
  }
};
be("at", Ze);
be("concat", Ze);
be("flat", Ze);
be("includes", Ze);
be("indexOf", Ze);
be("join", Ze);
be("lastIndexOf", Ze);
be("slice", Ze);
be("toString", Ze);
be("toLocaleString", Ze);
be("toSorted", Ze);
be("toSpliced", Ze);
be("with", Ze);
be("every", _t);
be("filter", _t);
be("find", _t);
be("findIndex", _t);
be("findLast", _t);
be("findLastIndex", _t);
be("flatMap", _t);
be("forEach", _t);
be("map", _t);
be("some", _t);
be("toReversed", _t);
be("reduce", ih);
be("reduceRight", ih);
function be(e, t) {
  typeof Array.prototype[e] == "function" && (jn[e] = t(e));
}
function Ze(e) {
  return function() {
    var t = this[X];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function _t(e) {
  return function(t, r) {
    var o = this, n = this[X];
    n.atom_.reportObserved();
    var i = n.dehanceValues_(n.values_);
    return i[e](function(a, s) {
      return t.call(r, a, s, o);
    });
  };
}
function ih(e) {
  return function() {
    var t = this, r = this[X];
    r.atom_.reportObserved();
    var o = r.dehanceValues_(r.values_), n = arguments[0];
    return arguments[0] = function(i, a, s) {
      return n(i, a, s, t);
    }, o[e].apply(o, arguments);
  };
}
var _S = /* @__PURE__ */ mr("ObservableArrayAdministration", As);
function jo(e) {
  return ni(e) && _S(e[X]);
}
var ah, sh, wS = {}, Gt = "add", Fn = "delete";
ah = Symbol.iterator;
sh = Symbol.toStringTag;
var lh = /* @__PURE__ */ function() {
  function e(r, o, n) {
    var i = this;
    o === void 0 && (o = dr), n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableMap@" + yt() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[X] = wS, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = o, this.name_ = n, Re(Map) || A(18), Yt(function() {
      i.keysAtom_ = Nf(process.env.NODE_ENV !== "production" ? i.name_ + ".keys()" : "ObservableMap.keys()"), i.data_ = /* @__PURE__ */ new Map(), i.hasMap_ = /* @__PURE__ */ new Map(), r && i.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(o) {
    return this.data_.has(o);
  }, t.has = function(o) {
    var n = this;
    if (!C.trackingDerivation)
      return this.has_(o);
    var i = this.hasMap_.get(o);
    if (!i) {
      var a = i = new sr(this.has_(o), ai, process.env.NODE_ENV !== "production" ? this.name_ + "." + Aa(o) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(o, a), Qf(a, function() {
        return n.hasMap_.delete(o);
      });
    }
    return i.get();
  }, t.set = function(o, n) {
    var i = this.has_(o);
    if (rt(this)) {
      var a = ot(this, {
        type: i ? vt : Gt,
        object: this,
        newValue: n,
        name: o
      });
      if (!a)
        return this;
      n = a.newValue;
    }
    return i ? this.updateValue_(o, n) : this.addValue_(o, n), this;
  }, t.delete = function(o) {
    var n = this;
    if (kt(this.keysAtom_), rt(this)) {
      var i = ot(this, {
        type: Fn,
        object: this,
        name: o
      });
      if (!i)
        return !1;
    }
    if (this.has_(o)) {
      var a = qe(), s = gt(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        oldValue: this.data_.get(o).value_,
        name: o
      } : null;
      return process.env.NODE_ENV !== "production" && a && Xe(l), Rt(function() {
        var c;
        n.keysAtom_.reportChanged(), (c = n.hasMap_.get(o)) == null || c.setNewValue_(!1);
        var u = n.data_.get(o);
        u.setNewValue_(void 0), n.data_.delete(o);
      }), s && mt(this, l), process.env.NODE_ENV !== "production" && a && Ye(), !0;
    }
    return !1;
  }, t.updateValue_ = function(o, n) {
    var i = this.data_.get(o);
    if (n = i.prepareNewValue_(n), n !== C.UNCHANGED) {
      var a = qe(), s = gt(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: vt,
        object: this,
        oldValue: i.value_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && a && Xe(l), i.setNewValue_(n), s && mt(this, l), process.env.NODE_ENV !== "production" && a && Ye();
    }
  }, t.addValue_ = function(o, n) {
    var i = this;
    kt(this.keysAtom_), Rt(function() {
      var c, u = new sr(n, i.enhancer_, process.env.NODE_ENV !== "production" ? i.name_ + "." + Aa(o) : "ObservableMap.key", !1);
      i.data_.set(o, u), n = u.value_, (c = i.hasMap_.get(o)) == null || c.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var a = qe(), s = gt(this), l = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Gt,
      object: this,
      name: o,
      newValue: n
    } : null;
    process.env.NODE_ENV !== "production" && a && Xe(l), s && mt(this, l), process.env.NODE_ENV !== "production" && a && Ye();
  }, t.get = function(o) {
    return this.has(o) ? this.dehanceValue_(this.data_.get(o).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var o = this, n = this.keys();
    return go({
      next: function() {
        var a = n.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : o.get(l)
        };
      }
    });
  }, t.entries = function() {
    var o = this, n = this.keys();
    return go({
      next: function() {
        var a = n.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : [l, o.get(l)]
        };
      }
    });
  }, t[ah] = function() {
    return this.entries();
  }, t.forEach = function(o, n) {
    for (var i = Sr(this), a; !(a = i()).done; ) {
      var s = a.value, l = s[0], c = s[1];
      o.call(n, c, l, this);
    }
  }, t.merge = function(o) {
    var n = this;
    return $t(o) && (o = new Map(o)), Rt(function() {
      Ke(o) ? Ik(o).forEach(function(i) {
        return n.set(i, o[i]);
      }) : Array.isArray(o) ? o.forEach(function(i) {
        var a = i[0], s = i[1];
        return n.set(a, s);
      }) : Vr(o) ? (o.constructor !== Map && A(19, o), o.forEach(function(i, a) {
        return n.set(a, i);
      })) : o != null && A(20, o);
    }), this;
  }, t.clear = function() {
    var o = this;
    Rt(function() {
      Mf(function() {
        for (var n = Sr(o.keys()), i; !(i = n()).done; ) {
          var a = i.value;
          o.delete(a);
        }
      });
    });
  }, t.replace = function(o) {
    var n = this;
    return Rt(function() {
      for (var i = kS(o), a = /* @__PURE__ */ new Map(), s = !1, l = Sr(n.data_.keys()), c; !(c = l()).done; ) {
        var u = c.value;
        if (!i.has(u)) {
          var d = n.delete(u);
          if (d)
            s = !0;
          else {
            var f = n.data_.get(u);
            a.set(u, f);
          }
        }
      }
      for (var v = Sr(i.entries()), h; !(h = v()).done; ) {
        var p = h.value, y = p[0], g = p[1], _ = n.data_.has(y);
        if (n.set(y, g), n.data_.has(y)) {
          var m = n.data_.get(y);
          a.set(y, m), _ || (s = !0);
        }
      }
      if (!s)
        if (n.data_.size !== a.size)
          n.keysAtom_.reportChanged();
        else
          for (var k = n.data_.keys(), w = a.keys(), x = k.next(), E = w.next(); !x.done; ) {
            if (x.value !== E.value) {
              n.keysAtom_.reportChanged();
              break;
            }
            x = k.next(), E = w.next();
          }
      n.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support fireImmediately=true in combination with maps."), Ao(this, o);
  }, t.intercept_ = function(o) {
    return Do(this, o);
  }, Cs(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: sh,
    get: function() {
      return "Map";
    }
  }]), e;
}(), $t = /* @__PURE__ */ mr("ObservableMap", lh);
function kS(e) {
  if (Vr(e) || $t(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (Ke(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return A(21, e);
}
var ch, uh, xS = {};
ch = Symbol.iterator;
uh = Symbol.toStringTag;
var dh = /* @__PURE__ */ function() {
  function e(r, o, n) {
    var i = this;
    o === void 0 && (o = dr), n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableSet@" + yt() : "ObservableSet"), this.name_ = void 0, this[X] = xS, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = n, Re(Set) || A(22), this.enhancer_ = function(a, s) {
      return o(a, s, n);
    }, Yt(function() {
      i.atom_ = Nf(i.name_), r && i.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.clear = function() {
    var o = this;
    Rt(function() {
      Mf(function() {
        for (var n = Sr(o.data_.values()), i; !(i = n()).done; ) {
          var a = i.value;
          o.delete(a);
        }
      });
    });
  }, t.forEach = function(o, n) {
    for (var i = Sr(this), a; !(a = i()).done; ) {
      var s = a.value;
      o.call(n, s, s, this);
    }
  }, t.add = function(o) {
    var n = this;
    if (kt(this.atom_), rt(this)) {
      var i = ot(this, {
        type: Gt,
        object: this,
        newValue: o
      });
      if (!i)
        return this;
    }
    if (!this.has(o)) {
      Rt(function() {
        n.data_.add(n.enhancer_(o, void 0)), n.atom_.reportChanged();
      });
      var a = process.env.NODE_ENV !== "production" && qe(), s = gt(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Gt,
        object: this,
        newValue: o
      } : null;
      a && process.env.NODE_ENV !== "production" && Xe(l), s && mt(this, l), a && process.env.NODE_ENV !== "production" && Ye();
    }
    return this;
  }, t.delete = function(o) {
    var n = this;
    if (rt(this)) {
      var i = ot(this, {
        type: Fn,
        object: this,
        oldValue: o
      });
      if (!i)
        return !1;
    }
    if (this.has(o)) {
      var a = process.env.NODE_ENV !== "production" && qe(), s = gt(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        oldValue: o
      } : null;
      return a && process.env.NODE_ENV !== "production" && Xe(l), Rt(function() {
        n.atom_.reportChanged(), n.data_.delete(o);
      }), s && mt(this, l), a && process.env.NODE_ENV !== "production" && Ye(), !0;
    }
    return !1;
  }, t.has = function(o) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(o));
  }, t.entries = function() {
    var o = 0, n = Array.from(this.keys()), i = Array.from(this.values());
    return go({
      next: function() {
        var s = o;
        return o += 1, s < i.length ? {
          value: [n[s], i[s]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var o = this, n = 0, i = Array.from(this.data_.values());
    return go({
      next: function() {
        return n < i.length ? {
          value: o.dehanceValue_(i[n++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(o) {
    var n = this;
    return $r(o) && (o = new Set(o)), Rt(function() {
      Array.isArray(o) ? (n.clear(), o.forEach(function(i) {
        return n.add(i);
      })) : Co(o) ? (n.clear(), o.forEach(function(i) {
        return n.add(i);
      })) : o != null && A("Cannot initialize set from " + o);
    }), this;
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support fireImmediately=true in combination with sets."), Ao(this, o);
  }, t.intercept_ = function(o) {
    return Do(this, o);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[ch] = function() {
    return this.values();
  }, Cs(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: uh,
    get: function() {
      return "Set";
    }
  }]), e;
}(), $r = /* @__PURE__ */ mr("ObservableSet", dh), Sc = /* @__PURE__ */ Object.create(null), Ec = "remove", $a = /* @__PURE__ */ function() {
  function e(r, o, n, i) {
    o === void 0 && (o = /* @__PURE__ */ new Map()), i === void 0 && (i = px), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = o, this.name_ = n, this.defaultAnnotation_ = i, this.keysAtom_ = new Oo(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = Ke(this.target_), process.env.NODE_ENV !== "production" && !ph(this.defaultAnnotation_) && A("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(o) {
    return this.values_.get(o).get();
  }, t.setObservablePropValue_ = function(o, n) {
    var i = this.values_.get(o);
    if (i instanceof hr)
      return i.set(n), !0;
    if (rt(this)) {
      var a = ot(this, {
        type: vt,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: n
      });
      if (!a)
        return null;
      n = a.newValue;
    }
    if (n = i.prepareNewValue_(n), n !== C.UNCHANGED) {
      var s = gt(this), l = process.env.NODE_ENV !== "production" && qe(), c = s || l ? {
        type: vt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && l && Xe(c), i.setNewValue_(n), s && mt(this, c), process.env.NODE_ENV !== "production" && l && Ye();
    }
    return !0;
  }, t.get_ = function(o) {
    return C.trackingDerivation && !st(this.target_, o) && this.has_(o), this.target_[o];
  }, t.set_ = function(o, n, i) {
    return i === void 0 && (i = !1), st(this.target_, o) ? this.values_.has(o) ? this.setObservablePropValue_(o, n) : i ? Reflect.set(this.target_, o, n) : (this.target_[o] = n, !0) : this.extend_(o, {
      value: n,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, t.has_ = function(o) {
    if (!C.trackingDerivation)
      return o in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var n = this.pendingKeys_.get(o);
    return n || (n = new sr(o in this.target_, ai, process.env.NODE_ENV !== "production" ? this.name_ + "." + Aa(o) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(o, n)), n.get();
  }, t.make_ = function(o, n) {
    if (n === !0 && (n = this.defaultAnnotation_), n !== !1) {
      if (Tc(this, n, o), !(o in this.target_)) {
        var i;
        if ((i = this.target_[Ue]) != null && i[o])
          return;
        A(1, n.annotationType_, this.name_ + "." + o.toString());
      }
      for (var a = this.target_; a && a !== oi; ) {
        var s = Cn(a, o);
        if (s) {
          var l = n.make_(this, o, s, a);
          if (l === 0)
            return;
          if (l === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      Nc(this, n, o);
    }
  }, t.extend_ = function(o, n, i, a) {
    if (a === void 0 && (a = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(o, n, a);
    Tc(this, i, o);
    var s = i.extend_(this, o, n, a);
    return s && Nc(this, i, o), s;
  }, t.defineProperty_ = function(o, n, i) {
    i === void 0 && (i = !1), kt(this.keysAtom_);
    try {
      nt();
      var a = this.delete_(o);
      if (!a)
        return a;
      if (rt(this)) {
        var s = ot(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: Gt,
          newValue: n.value
        });
        if (!s)
          return null;
        var l = s.newValue;
        n.value !== l && (n = It({}, n, {
          value: l
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, n))
          return !1;
      } else
        Nt(this.target_, o, n);
      this.notifyPropertyAddition_(o, n.value);
    } finally {
      it();
    }
    return !0;
  }, t.defineObservableProperty_ = function(o, n, i, a) {
    a === void 0 && (a = !1), kt(this.keysAtom_);
    try {
      nt();
      var s = this.delete_(o);
      if (!s)
        return s;
      if (rt(this)) {
        var l = ot(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: Gt,
          newValue: n
        });
        if (!l)
          return null;
        n = l.newValue;
      }
      var c = Bc(o), u = {
        configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, o, u))
          return !1;
      } else
        Nt(this.target_, o, u);
      var d = new sr(n, i, process.env.NODE_ENV !== "production" ? this.name_ + "." + o.toString() : "ObservableObject.key", !1);
      this.values_.set(o, d), this.notifyPropertyAddition_(o, d.value_);
    } finally {
      it();
    }
    return !0;
  }, t.defineComputedProperty_ = function(o, n, i) {
    i === void 0 && (i = !1), kt(this.keysAtom_);
    try {
      nt();
      var a = this.delete_(o);
      if (!a)
        return a;
      if (rt(this)) {
        var s = ot(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: Gt,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      n.name || (n.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + o.toString() : "ObservableObject.key"), n.context = this.proxy_ || this.target_;
      var l = Bc(o), c = {
        configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: l.get,
        set: l.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, c))
          return !1;
      } else
        Nt(this.target_, o, c);
      this.values_.set(o, new hr(n)), this.notifyPropertyAddition_(o, void 0);
    } finally {
      it();
    }
    return !0;
  }, t.delete_ = function(o, n) {
    if (n === void 0 && (n = !1), kt(this.keysAtom_), !st(this.target_, o))
      return !0;
    if (rt(this)) {
      var i = ot(this, {
        object: this.proxy_ || this.target_,
        name: o,
        type: Ec
      });
      if (!i)
        return null;
    }
    try {
      var a, s;
      nt();
      var l = gt(this), c = process.env.NODE_ENV !== "production" && qe(), u = this.values_.get(o), d = void 0;
      if (!u && (l || c)) {
        var f;
        d = (f = Cn(this.target_, o)) == null ? void 0 : f.value;
      }
      if (n) {
        if (!Reflect.deleteProperty(this.target_, o))
          return !1;
      } else
        delete this.target_[o];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[o], u && (this.values_.delete(o), u instanceof sr && (d = u.value_), Uf(u)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(o)) == null || s.set(o in this.target_), l || c) {
        var v = {
          type: Ec,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: d,
          name: o
        };
        process.env.NODE_ENV !== "production" && c && Xe(v), l && mt(this, v), process.env.NODE_ENV !== "production" && c && Ye();
      }
    } finally {
      it();
    }
    return !0;
  }, t.observe_ = function(o, n) {
    return process.env.NODE_ENV !== "production" && n === !0 && A("`observe` doesn't support the fire immediately property for observable objects."), Ao(this, o);
  }, t.intercept_ = function(o) {
    return Do(this, o);
  }, t.notifyPropertyAddition_ = function(o, n) {
    var i, a, s = gt(this), l = process.env.NODE_ENV !== "production" && qe();
    if (s || l) {
      var c = s || l ? {
        type: Gt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: n
      } : null;
      process.env.NODE_ENV !== "production" && l && Xe(c), s && mt(this, c), process.env.NODE_ENV !== "production" && l && Ye();
    }
    (i = this.pendingKeys_) == null || (a = i.get(o)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Dr(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function yr(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && pr(e) && A("Options can't be provided for already observable objects."), st(e, X))
    return process.env.NODE_ENV !== "production" && !(Fs(e) instanceof $a) && A("Cannot convert '" + In(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && A("Cannot make the designated object observable; it is not extensible");
  var o = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (Ke(e) ? "ObservableObject" : e.constructor.name) + "@" + yt() : "ObservableObject", n = new $a(e, /* @__PURE__ */ new Map(), String(o), Bx(t));
  return To(e, X, n), e;
}
var SS = /* @__PURE__ */ mr("ObservableObjectAdministration", $a);
function Bc(e) {
  return Sc[e] || (Sc[e] = {
    get: function() {
      return this[X].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[X].setObservablePropValue_(e, r);
    }
  });
}
function pr(e) {
  return ni(e) ? SS(e[X]) : !1;
}
function Nc(e, t, r) {
  var o;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (o = e.target_[Ue]) == null || delete o[r];
}
function Tc(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !ph(t) && A("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !zn(t) && st(e.appliedAnnotations_, r)) {
    var o = e.name_ + "." + r.toString(), n = e.appliedAnnotations_[r].annotationType_, i = t.annotationType_;
    A("Cannot apply '" + i + "' to '" + o + "':" + (`
The field is already annotated with '` + n + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var ES = /* @__PURE__ */ hh(0), BS = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), Yi = 0, fh = function() {
};
function NS(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
NS(fh, Array.prototype);
var js = /* @__PURE__ */ function(e, t, r) {
  Bf(o, e);
  function o(i, a, s, l) {
    var c;
    return s === void 0 && (s = process.env.NODE_ENV !== "production" ? "ObservableArray@" + yt() : "ObservableArray"), l === void 0 && (l = !1), c = e.call(this) || this, Yt(function() {
      var u = new As(s, a, l, !0);
      u.proxy_ = hn(c), xf(hn(c), X, u), i && i.length && c.spliceWithArray(0, 0, i), BS && Object.defineProperty(hn(c), "0", ES);
    }), c;
  }
  var n = o.prototype;
  return n.concat = function() {
    this[X].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(c) {
        return jo(c) ? c.slice() : c;
      })
    );
  }, n[r] = function() {
    var i = this, a = 0;
    return go({
      next: function() {
        return a < i.length ? {
          value: i[a++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, Cs(o, [{
    key: "length",
    get: function() {
      return this[X].getArrayLength_();
    },
    set: function(a) {
      this[X].setArrayLength_(a);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), o;
}(fh, Symbol.toStringTag, Symbol.iterator);
Object.entries(jn).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && To(js.prototype, t, r);
});
function hh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[X].get_(e);
    },
    set: function(r) {
      this[X].set_(e, r);
    }
  };
}
function TS(e) {
  Nt(js.prototype, "" + e, hh(e));
}
function vh(e) {
  if (e > Yi) {
    for (var t = Yi; t < e + 100; t++)
      TS(t);
    Yi = e;
  }
}
vh(1e3);
function CS(e, t, r) {
  return new js(e, t, r);
}
function Xt(e, t) {
  if (typeof e == "object" && e !== null) {
    if (jo(e))
      return t !== void 0 && A(23), e[X].atom_;
    if ($r(e))
      return e.atom_;
    if ($t(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || A(25, t, In(e)), r;
    }
    if (pr(e)) {
      if (!t)
        return A(26);
      var o = e[X].values_.get(t);
      return o || A(27, t, In(e)), o;
    }
    if (Ps(e) || di(e) || An(e))
      return e;
  } else if (Re(e) && An(e[X]))
    return e[X];
  A(28);
}
function Fs(e, t) {
  if (e || A(29), t !== void 0)
    return Fs(Xt(e, t));
  if (Ps(e) || di(e) || An(e) || $t(e) || $r(e))
    return e;
  if (e[X])
    return e[X];
  A(24, e);
}
function In(e, t) {
  var r;
  if (t !== void 0)
    r = Xt(e, t);
  else {
    if (Ro(e))
      return e.name;
    pr(e) || $t(e) || $r(e) ? r = Fs(e) : r = Xt(e);
  }
  return r.name_;
}
function Yt(e) {
  var t = br(), r = ci(!0);
  nt();
  try {
    return e();
  } finally {
    it(), ui(r), jt(t);
  }
}
var Cc = oi.toString;
function Is(e, t, r) {
  return r === void 0 && (r = -1), Wa(e, t, r);
}
function Wa(e, t, r, o, n) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object")
    return !1;
  var a = Cc.call(e);
  if (a !== Cc.call(t))
    return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = Pc(e), t = Pc(t);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var l = e.constructor, c = t.constructor;
    if (l !== c && !(Re(l) && l instanceof l && Re(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), o = o || [], n = n || [];
  for (var u = o.length; u--; )
    if (o[u] === e)
      return n[u] === t;
  if (o.push(e), n.push(t), s) {
    if (u = e.length, u !== t.length)
      return !1;
    for (; u--; )
      if (!Wa(e[u], t[u], r - 1, o, n))
        return !1;
  } else {
    var d = Object.keys(e), f;
    if (u = d.length, Object.keys(t).length !== u)
      return !1;
    for (; u--; )
      if (f = d[u], !(st(t, f) && Wa(e[f], t[f], r - 1, o, n)))
        return !1;
  }
  return o.pop(), n.pop(), !0;
}
function Pc(e) {
  return jo(e) ? e.slice() : Vr(e) || $t(e) || Co(e) || $r(e) ? Array.from(e.entries()) : e;
}
function go(e) {
  return e[Symbol.iterator] = PS, e;
}
function PS() {
  return this;
}
function ph(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && Re(e.make_) && Re(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Ns();
  typeof t[e] > "u" && A("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Kx,
  extras: {
    getDebugName: In
  },
  $mobx: X
});
if (!et)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!gS)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function OS(e) {
  e();
}
function zS(e) {
  e || (e = OS, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), sS({ reactionScheduler: e });
}
function RS(e) {
  return rh(e);
}
var DS = 1e4, AS = 1e4, jS = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(o) {
          o === void 0 && (o = DS), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var n = Date.now();
          r.registrations.forEach(function(i, a) {
            n - i.registeredAt >= o && (r.finalize(i.value), r.registrations.delete(a));
          }), r.registrations.size > 0 && r.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          r.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t, r, o) {
        this.registrations.set(o, {
          value: r,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t) {
        this.registrations.delete(t);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, AS));
      }
    }), e;
  }()
), FS = typeof FinalizationRegistry < "u" ? FinalizationRegistry : jS, mo = new FS(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), Ua = { exports: {} }, Ji = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function IS() {
  if (Oc)
    return Ji;
  Oc = 1;
  var e = ht;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(d, f) {
    var v = f(), h = o({ inst: { value: v, getSnapshot: f } }), p = h[0].inst, y = h[1];
    return i(function() {
      p.value = v, p.getSnapshot = f, l(p) && y({ inst: p });
    }, [d, v, f]), n(function() {
      return l(p) && y({ inst: p }), d(function() {
        l(p) && y({ inst: p });
      });
    }, [d]), a(v), v;
  }
  function l(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var v = f();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function c(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Ji.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ji;
}
var Zi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc;
function qS() {
  return zc || (zc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ht, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(m) {
      {
        for (var k = arguments.length, w = new Array(k > 1 ? k - 1 : 0), x = 1; x < k; x++)
          w[x - 1] = arguments[x];
        o("error", m, w);
      }
    }
    function o(m, k, w) {
      {
        var x = t.ReactDebugCurrentFrame, E = x.getStackAddendum();
        E !== "" && (k += "%s", w = w.concat([E]));
        var O = w.map(function(j) {
          return String(j);
        });
        O.unshift("Warning: " + k), Function.prototype.apply.call(console[m], console, O);
      }
    }
    function n(m, k) {
      return m === k && (m !== 0 || 1 / m === 1 / k) || m !== m && k !== k;
    }
    var i = typeof Object.is == "function" ? Object.is : n, a = e.useState, s = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
    function f(m, k, w) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var x = k();
      if (!d) {
        var E = k();
        i(x, E) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var O = a({
        inst: {
          value: x,
          getSnapshot: k
        }
      }), j = O[0].inst, F = O[1];
      return l(function() {
        j.value = x, j.getSnapshot = k, v(j) && F({
          inst: j
        });
      }, [m, x, k]), s(function() {
        v(j) && F({
          inst: j
        });
        var Z = function() {
          v(j) && F({
            inst: j
          });
        };
        return m(Z);
      }, [m]), c(x), x;
    }
    function v(m) {
      var k = m.getSnapshot, w = m.value;
      try {
        var x = k();
        return !i(w, x);
      } catch {
        return !0;
      }
    }
    function h(m, k, w) {
      return k();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", y = !p, g = y ? h : f, _ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g;
    Zi.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zi;
}
process.env.NODE_ENV === "production" ? Ua.exports = IS() : Ua.exports = qS();
var MS = Ua.exports;
function Rc(e) {
  e.reaction = new fo("observer".concat(e.name), function() {
    var t;
    e.stateVersion = Symbol(), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function LS(e, t) {
  t === void 0 && (t = "observed");
  var r = ht.useRef(null);
  if (!r.current) {
    var o = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function(s) {
        return mo.unregister(o), o.onStoreChange = s, o.reaction || (Rc(o), o.stateVersion = Symbol()), function() {
          var l;
          o.onStoreChange = null, (l = o.reaction) === null || l === void 0 || l.dispose(), o.reaction = null;
        };
      },
      getSnapshot: function() {
        return o.stateVersion;
      }
    };
    r.current = o;
  }
  var n = r.current;
  n.reaction || (Rc(n), mo.register(r, n, n)), ht.useDebugValue(n.reaction, RS), MS.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    n.subscribe,
    n.getSnapshot,
    n.getSnapshot
  );
  var i, a;
  if (n.reaction.track(function() {
    try {
      i = e();
    } catch (s) {
      a = s;
    }
  }), a)
    throw a;
  return i;
}
var Qi, ea, Dc = !0, gh = typeof Symbol == "function" && Symbol.for, VS = (ea = (Qi = Object.getOwnPropertyDescriptor(function() {
}, "name")) === null || Qi === void 0 ? void 0 : Qi.configurable) !== null && ea !== void 0 ? ea : !1, Ac = gh ? Symbol.for("react.forward_ref") : typeof la == "function" && la(function(e) {
  return null;
}).$$typeof, jc = gh ? Symbol.for("react.memo") : typeof ca == "function" && ca(function(e) {
  return null;
}).$$typeof;
function HS(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && Dc && t && (Dc = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), jc && e.$$typeof === jc)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var o = (r = t == null ? void 0 : t.forwardRef) !== null && r !== void 0 ? r : !1, n = e, i = e.displayName || e.name;
  if (Ac && e.$$typeof === Ac && (o = !0, n = e.render, typeof n != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, l) {
    return LS(function() {
      return n(s, l);
    }, i);
  };
  return a.displayName = e.displayName, VS && Object.defineProperty(a, "name", {
    value: e.name,
    writable: !0,
    configurable: !0
  }), e.contextTypes && (a.contextTypes = e.contextTypes), o && (a = la(a)), a = ca(a), WS(e, a), process.env.NODE_ENV !== "production" && Object.defineProperty(a, "contextTypes", {
    set: function() {
      var s, l;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((s = this.type) === null || s === void 0 ? void 0 : s.displayName) || ((l = this.type) === null || l === void 0 ? void 0 : l.name) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), a;
}
var $S = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function WS(e, t) {
  Object.keys(e).forEach(function(r) {
    $S[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
process.env.NODE_ENV;
var ta;
zS(Zh);
ta = mo.finalizeAllImmediately;
function US(e, t) {
  if (Fc(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (var n = 0; n < r.length; n++)
    if (!Object.hasOwnProperty.call(t, r[n]) || !Fc(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
function Fc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ic = /* @__PURE__ */ Symbol("patchMixins"), mh = /* @__PURE__ */ Symbol("patchedDefinition");
function GS(e, t) {
  var r = e[Ic] = e[Ic] || {}, o = r[t] = r[t] || {};
  return o.locks = o.locks || 0, o.methods = o.methods || [], o;
}
function qc(e, t) {
  for (var r = this, o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
    n[i - 2] = arguments[i];
  t.locks++;
  try {
    var a;
    return e != null && (a = e.apply(this, n)), a;
  } finally {
    t.locks--, t.locks === 0 && t.methods.forEach(function(s) {
      s.apply(r, n);
    });
  }
}
function Mc(e, t) {
  var r = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    qc.call.apply(qc, [this, e, t].concat(i));
  };
  return r;
}
function KS(e, t, r) {
  var o = GS(e, t);
  o.methods.indexOf(r) < 0 && o.methods.push(r);
  var n = Object.getOwnPropertyDescriptor(e, t);
  if (!(n && n[mh])) {
    var i = e[t], a = bh(e, t, n ? n.enumerable : void 0, o, i);
    Object.defineProperty(e, t, a);
  }
}
function bh(e, t, r, o, n) {
  var i, a = Mc(n, o);
  return i = {}, i[mh] = !0, i.get = function() {
    return a;
  }, i.set = function(l) {
    if (this === e)
      a = Mc(l, o);
    else {
      var c = bh(this, t, r, o, l);
      Object.defineProperty(this, t, c);
    }
  }, i.configurable = !0, i.enumerable = r, i;
}
var Lc = /* @__PURE__ */ Symbol("ObserverAdministration"), Vc = /* @__PURE__ */ Symbol("isMobXReactObserver"), yh;
process.env.NODE_ENV !== "production" && (yh = {
  props: /* @__PURE__ */ ra("props"),
  state: /* @__PURE__ */ ra("state"),
  context: /* @__PURE__ */ ra("context")
});
function bo(e) {
  var t;
  return (t = e[Lc]) != null ? t : e[Lc] = {
    reaction: null,
    mounted: !1,
    reactionInvalidatedBeforeMount: !1,
    forceUpdate: null,
    name: mn(e.constructor),
    state: void 0,
    props: void 0,
    context: void 0
  };
}
function XS(e) {
  var t = e.prototype;
  if (e[Vc]) {
    var r = mn(e);
    throw new Error("The provided component class (" + r + ") has already been declared as an observer component.");
  } else
    e[Vc] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== su) {
    if (!t.shouldComponentUpdate)
      t.shouldComponentUpdate = Hc;
    else if (t.shouldComponentUpdate !== Hc)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  process.env.NODE_ENV !== "production" && Object.defineProperties(t, yh);
  var o = t.render;
  if (typeof o != "function") {
    var n = mn(e);
    throw new Error("[mobx-react] class component (" + n + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  t.render = function() {
    return Object.defineProperty(this, "render", {
      // There is no safe way to replace render, therefore it's forbidden.
      configurable: !1,
      writable: !1,
      value: YS.call(this, o)
    }), this.render();
  };
  var i = t.componentDidMount;
  return t.componentDidMount = function() {
    var a = this;
    if (process.env.NODE_ENV !== "production" && this.componentDidMount !== Object.getPrototypeOf(this).componentDidMount) {
      var s = mn(e);
      throw new Error("[mobx-react] `observer(" + s + ").componentDidMount` must be defined on prototype.\n`componentDidMount = () => {}` or `componentDidMount = function() {}` is not supported.");
    }
    var l = bo(this);
    return l.mounted = !0, mo.unregister(this), l.forceUpdate = function() {
      return a.forceUpdate();
    }, (!l.reaction || l.reactionInvalidatedBeforeMount) && l.forceUpdate(), i == null ? void 0 : i.apply(this, arguments);
  }, KS(t, "componentWillUnmount", function() {
    var a, s = bo(this);
    (a = s.reaction) == null || a.dispose(), s.reaction = null, s.forceUpdate = null, s.mounted = !1, s.reactionInvalidatedBeforeMount = !1;
  }), e;
}
function mn(e) {
  return e.displayName || e.name || "<component>";
}
function YS(e) {
  var t = e.bind(this), r = bo(this);
  function o() {
    r.reaction || (r.reaction = JS(r), r.mounted || mo.register(this, r, this));
    var n = void 0, i = void 0;
    if (r.reaction.track(function() {
      try {
        i = Ax(!1, t);
      } catch (a) {
        n = a;
      }
    }), n)
      throw n;
    return i;
  }
  return o;
}
function JS(e) {
  return new fo(e.name + ".render()", function() {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), e.reaction = null;
    }
  });
}
function Hc(e, t) {
  return this.state !== t ? !0 : !US(this.props, e);
}
function ra(e) {
  return {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var r = bo(this), o = Lx().trackingDerivation;
      if (o && o !== r.reaction)
        throw new Error('[mobx-react] Cannot read "' + r.name + "." + e + `" in a reactive context, as it isn't observable.
                    Please use component lifecycle method to copy the value into a local observable first.
                    See https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations`);
      return r[e];
    },
    set: function(r) {
      bo(this)[e] = r;
    }
  };
}
function qs(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(au, e) || Object.prototype.isPrototypeOf.call(su, e) ? XS(e) : HS(e);
}
ht.version.split(".")[0];
if (!au)
  throw new Error("mobx-react requires React to be available");
if (!je)
  throw new Error("mobx-react requires mobx to be available");
const ZS = {};
class QS {
  constructor() {
    this.dialogIsVisible = !1, this.setDialogIsVisible = (t) => {
      this.dialogIsVisible = t;
    }, Ds(this);
  }
}
const eE = 10;
class tE {
  constructor() {
    this.currentPage = 1, this.totalPages = 1, Ds(this);
  }
  setCurrentPage(t) {
    this.currentPage = t;
  }
  setTtotalPages(t) {
    const r = Math.max(1, Math.ceil(t / eE));
    this.totalPages = t > 0 ? r : 1, this.currentPage > r && (this.currentPage = r);
  }
}
function _h(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rE } = Object.prototype, { getPrototypeOf: Ms } = Object, fi = /* @__PURE__ */ ((e) => (t) => {
  const r = rE.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => fi(t) === e), hi = (e) => (t) => typeof t === e, { isArray: Wr } = Array, yo = hi("undefined");
function oE(e) {
  return e !== null && !yo(e) && e.constructor !== null && !yo(e.constructor) && ct(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wh = Pt("ArrayBuffer");
function nE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wh(e.buffer), t;
}
const iE = hi("string"), ct = hi("function"), kh = hi("number"), vi = (e) => e !== null && typeof e == "object", aE = (e) => e === !0 || e === !1, bn = (e) => {
  if (fi(e) !== "object")
    return !1;
  const t = Ms(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, sE = Pt("Date"), lE = Pt("File"), cE = Pt("Blob"), uE = Pt("FileList"), dE = (e) => vi(e) && ct(e.pipe), fE = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ct(e.append) && ((t = fi(e)) === "formdata" || // detect form-data instance
  t === "object" && ct(e.toString) && e.toString() === "[object FormData]"));
}, hE = Pt("URLSearchParams"), vE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fo(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), Wr(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (o = 0; o < a; o++)
      s = i[o], t.call(null, e[s], s, e);
  }
}
function xh(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const Sh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Eh = (e) => !yo(e) && e !== Sh;
function Ga() {
  const { caseless: e } = Eh(this) && this || {}, t = {}, r = (o, n) => {
    const i = e && xh(t, n) || n;
    bn(t[i]) && bn(o) ? t[i] = Ga(t[i], o) : bn(o) ? t[i] = Ga({}, o) : Wr(o) ? t[i] = o.slice() : t[i] = o;
  };
  for (let o = 0, n = arguments.length; o < n; o++)
    arguments[o] && Fo(arguments[o], r);
  return t;
}
const pE = (e, t, r, { allOwnKeys: o } = {}) => (Fo(t, (n, i) => {
  r && ct(n) ? e[i] = _h(n, r) : e[i] = n;
}, { allOwnKeys: o }), e), gE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), mE = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, bE = (e, t, r, o) => {
  let n, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      a = n[i], (!o || o(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Ms(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, yE = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, _E = (e) => {
  if (!e)
    return null;
  if (Wr(e))
    return e;
  let t = e.length;
  if (!kh(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, wE = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ms(Uint8Array)), kE = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const i = n.value;
    t.call(e, i[0], i[1]);
  }
}, xE = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, SE = Pt("HTMLFormElement"), EE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, n) {
    return o.toUpperCase() + n;
  }
), $c = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), BE = Pt("RegExp"), Bh = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  Fo(r, (n, i) => {
    let a;
    (a = t(n, i, e)) !== !1 && (o[i] = a || n);
  }), Object.defineProperties(e, o);
}, NE = (e) => {
  Bh(e, (t, r) => {
    if (ct(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (ct(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, TE = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((i) => {
      r[i] = !0;
    });
  };
  return Wr(e) ? o(e) : o(String(e).split(t)), r;
}, CE = () => {
}, PE = (e, t) => (e = +e, Number.isFinite(e) ? e : t), oa = "abcdefghijklmnopqrstuvwxyz", Wc = "0123456789", Nh = {
  DIGIT: Wc,
  ALPHA: oa,
  ALPHA_DIGIT: oa + oa.toUpperCase() + Wc
}, OE = (e = 16, t = Nh.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function zE(e) {
  return !!(e && ct(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const RE = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (vi(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[n] = o;
        const i = Wr(o) ? [] : {};
        return Fo(o, (a, s) => {
          const l = r(a, n + 1);
          !yo(l) && (i[s] = l);
        }), t[n] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, DE = Pt("AsyncFunction"), AE = (e) => e && (vi(e) || ct(e)) && ct(e.then) && ct(e.catch), B = {
  isArray: Wr,
  isArrayBuffer: wh,
  isBuffer: oE,
  isFormData: fE,
  isArrayBufferView: nE,
  isString: iE,
  isNumber: kh,
  isBoolean: aE,
  isObject: vi,
  isPlainObject: bn,
  isUndefined: yo,
  isDate: sE,
  isFile: lE,
  isBlob: cE,
  isRegExp: BE,
  isFunction: ct,
  isStream: dE,
  isURLSearchParams: hE,
  isTypedArray: wE,
  isFileList: uE,
  forEach: Fo,
  merge: Ga,
  extend: pE,
  trim: vE,
  stripBOM: gE,
  inherits: mE,
  toFlatObject: bE,
  kindOf: fi,
  kindOfTest: Pt,
  endsWith: yE,
  toArray: _E,
  forEachEntry: kE,
  matchAll: xE,
  isHTMLForm: SE,
  hasOwnProperty: $c,
  hasOwnProp: $c,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bh,
  freezeMethods: NE,
  toObjectSet: TE,
  toCamelCase: EE,
  noop: CE,
  toFiniteNumber: PE,
  findKey: xh,
  global: Sh,
  isContextDefined: Eh,
  ALPHABET: Nh,
  generateString: OE,
  isSpecCompliantForm: zE,
  toJSONObject: RE,
  isAsyncFn: DE,
  isThenable: AE
};
function ie(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n);
}
B.inherits(ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Th = ie.prototype, Ch = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ch[e] = { value: e };
});
Object.defineProperties(ie, Ch);
Object.defineProperty(Th, "isAxiosError", { value: !0 });
ie.from = (e, t, r, o, n, i) => {
  const a = Object.create(Th);
  return B.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ie.call(a, e.message, t, r, o, n), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const jE = null;
function Ka(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function Ph(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Uc(e, t, r) {
  return e ? e.concat(t).map(function(n, i) {
    return n = Ph(n), !r && i ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function FE(e) {
  return B.isArray(e) && !e.some(Ka);
}
const IE = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pi(e, t, r) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = B.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, y) {
    return !B.isUndefined(y[p]);
  });
  const o = r.metaTokens, n = r.visitor || u, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (B.isDate(h))
      return h.toISOString();
    if (!l && B.isBlob(h))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(h) || B.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, p, y) {
    let g = h;
    if (h && !y && typeof h == "object") {
      if (B.endsWith(p, "{}"))
        p = o ? p : p.slice(0, -2), h = JSON.stringify(h);
      else if (B.isArray(h) && FE(h) || (B.isFileList(h) || B.endsWith(p, "[]")) && (g = B.toArray(h)))
        return p = Ph(p), g.forEach(function(m, k) {
          !(B.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Uc([p], k, i) : a === null ? p : p + "[]",
            c(m)
          );
        }), !1;
    }
    return Ka(h) ? !0 : (t.append(Uc(y, p, i), c(h)), !1);
  }
  const d = [], f = Object.assign(IE, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ka
  });
  function v(h, p) {
    if (!B.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(h), B.forEach(h, function(g, _) {
        (!(B.isUndefined(g) || g === null) && n.call(
          t,
          g,
          B.isString(_) ? _.trim() : _,
          p,
          f
        )) === !0 && v(g, p ? p.concat(_) : [_]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Gc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function Ls(e, t) {
  this._pairs = [], e && pi(e, this, t);
}
const Oh = Ls.prototype;
Oh.append = function(t, r) {
  this._pairs.push([t, r]);
};
Oh.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, Gc);
  } : Gc;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function qE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function zh(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || qE, n = r && r.serialize;
  let i;
  if (n ? i = n(t, r) : i = B.isURLSearchParams(t) ? t.toString() : new Ls(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Kc {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    B.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const Rh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ME = typeof URLSearchParams < "u" ? URLSearchParams : Ls, LE = typeof FormData < "u" ? FormData : null, VE = typeof Blob < "u" ? Blob : null, HE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ME,
    FormData: LE,
    Blob: VE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Dh = typeof window < "u" && typeof document < "u", $E = ((e) => Dh && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), WE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", UE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Dh,
  hasStandardBrowserEnv: $E,
  hasStandardBrowserWebWorkerEnv: WE
}, Symbol.toStringTag, { value: "Module" })), xt = {
  ...UE,
  ...HE
};
function GE(e, t) {
  return pi(e, new xt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, n, i) {
      return xt.isNode && B.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function KE(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function XE(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let i;
  for (o = 0; o < n; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function Ah(e) {
  function t(r, o, n, i) {
    let a = r[i++];
    if (a === "__proto__")
      return !0;
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && B.isArray(n) ? n.length : a, l ? (B.hasOwnProp(n, a) ? n[a] = [n[a], o] : n[a] = o, !s) : ((!n[a] || !B.isObject(n[a])) && (n[a] = []), t(r, o, n[a], i) && B.isArray(n[a]) && (n[a] = XE(n[a])), !s);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return B.forEachEntry(e, (o, n) => {
      t(KE(o), n, r, 0);
    }), r;
  }
  return null;
}
function YE(e, t, r) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Vs = {
  transitional: Rh,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", n = o.indexOf("application/json") > -1, i = B.isObject(t);
    if (i && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return n ? JSON.stringify(Ah(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return GE(t, this.formSerializer).toString();
      if ((s = B.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return pi(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || n ? (r.setContentType("application/json", !1), YE(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Vs.transitional, o = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (t && B.isString(t) && (o && !this.responseType || n)) {
      const a = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ie.from(s, ie.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: xt.classes.FormData,
    Blob: xt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Vs.headers[e] = {};
});
const Hs = Vs, JE = B.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ZE = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), r = a.substring(0, n).trim().toLowerCase(), o = a.substring(n + 1).trim(), !(!r || t[r] && JE[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, Xc = Symbol("internals");
function Yr(e) {
  return e && String(e).trim().toLowerCase();
}
function yn(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(yn) : String(e);
}
function QE(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const eB = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function na(e, t, r, o, n) {
  if (B.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!B.isString(t)) {
    if (B.isString(o))
      return t.indexOf(o) !== -1;
    if (B.isRegExp(o))
      return o.test(t);
  }
}
function tB(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function rB(e, t) {
  const r = B.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(n, i, a) {
        return this[o].call(this, t, n, i, a);
      },
      configurable: !0
    });
  });
}
class gi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function i(s, l, c) {
      const u = Yr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(n, u);
      (!d || n[d] === void 0 || c === !0 || c === void 0 && n[d] !== !1) && (n[d || l] = yn(s));
    }
    const a = (s, l) => B.forEach(s, (c, u) => i(c, u, l));
    return B.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : B.isString(t) && (t = t.trim()) && !eB(t) ? a(ZE(t), r) : t != null && i(r, t, o), this;
  }
  get(t, r) {
    if (t = Yr(t), t) {
      const o = B.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return QE(n);
        if (B.isFunction(r))
          return r.call(this, n, o);
        if (B.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Yr(t), t) {
      const o = B.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || na(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function i(a) {
      if (a = Yr(a), a) {
        const s = B.findKey(o, a);
        s && (!r || na(o, o[s], s, r)) && (delete o[s], n = !0);
      }
    }
    return B.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || na(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return B.forEach(this, (n, i) => {
      const a = B.findKey(o, i);
      if (a) {
        r[a] = yn(n), delete r[i];
        return;
      }
      const s = t ? tB(i) : String(i).trim();
      s !== i && delete r[i], r[s] = yn(n), o[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (o, n) => {
      o != null && o !== !1 && (r[n] = t && B.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((n) => o.set(n)), o;
  }
  static accessor(t) {
    const o = (this[Xc] = this[Xc] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(a) {
      const s = Yr(a);
      o[s] || (rB(n, a), o[s] = !0);
    }
    return B.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
gi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(gi.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
B.freezeMethods(gi);
const Ft = gi;
function ia(e, t) {
  const r = this || Hs, o = t || r, n = Ft.from(o.headers);
  let i = o.data;
  return B.forEach(e, function(s) {
    i = s.call(r, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function jh(e) {
  return !!(e && e.__CANCEL__);
}
function Io(e, t, r) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, r), this.name = "CanceledError";
}
B.inherits(Io, ie, {
  __CANCEL__: !0
});
function oB(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new ie(
    "Request failed with status code " + r.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const nB = xt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, n, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      B.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), B.isString(o) && a.push("path=" + o), B.isString(n) && a.push("domain=" + n), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function iB(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function aB(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fh(e, t) {
  return e && !iB(t) ? aB(e, t) : t;
}
const sB = xt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function n(i) {
      let a = i;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = n(window.location.href), function(a) {
      const s = B.isString(a) ? n(a) : a;
      return s.protocol === o.protocol && s.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function lB(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function cB(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = o[i];
    a || (a = c), r[n] = l, o[n] = c;
    let d = i, f = 0;
    for (; d !== n; )
      f += r[d++], d = d % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), c - a < t)
      return;
    const v = u && c - u;
    return v ? Math.round(f * 1e3 / v) : void 0;
  };
}
function Yc(e, t) {
  let r = 0;
  const o = cB(50, 250);
  return (n) => {
    const i = n.loaded, a = n.lengthComputable ? n.total : void 0, s = i - r, l = o(s), c = i <= a;
    r = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: n
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const uB = typeof XMLHttpRequest < "u", dB = uB && function(e) {
  return new Promise(function(r, o) {
    let n = e.data;
    const i = Ft.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: s } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (B.isFormData(n)) {
      if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((u = i.getContentType()) !== !1) {
        const [p, ...y] = u ? u.split(";").map((g) => g.trim()).filter(Boolean) : [];
        i.setContentType([p || "multipart/form-data", ...y].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + y));
    }
    const f = Fh(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), zh(f, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function v() {
      if (!d)
        return;
      const p = Ft.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      oB(function(m) {
        r(m), c();
      }, function(m) {
        o(m), c();
      }, g), d = null;
    }
    if ("onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, d.onabort = function() {
      d && (o(new ie("Request aborted", ie.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      o(new ie("Network Error", ie.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let y = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Rh;
      e.timeoutErrorMessage && (y = e.timeoutErrorMessage), o(new ie(
        y,
        g.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        e,
        d
      )), d = null;
    }, xt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(e)), s || s !== !1 && sB(f))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && nB.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    n === void 0 && i.setContentType(null), "setRequestHeader" in d && B.forEach(i.toJSON(), function(y, g) {
      d.setRequestHeader(g, y);
    }), B.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Yc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Yc(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (p) => {
      d && (o(!p || p.type ? new Io(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const h = lB(f);
    if (h && xt.protocols.indexOf(h) === -1) {
      o(new ie("Unsupported protocol " + h + ":", ie.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(n || null);
  });
}, Xa = {
  http: jE,
  xhr: dB
};
B.forEach(Xa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jc = (e) => `- ${e}`, fB = (e) => B.isFunction(e) || e === null || e === !1, Ih = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const n = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let a;
      if (o = r, !fB(r) && (o = Xa[(a = String(r)).toLowerCase()], o === void 0))
        throw new ie(`Unknown adapter '${a}'`);
      if (o)
        break;
      n[a || "#" + i] = o;
    }
    if (!o) {
      const i = Object.entries(n).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(Jc).join(`
`) : " " + Jc(i[0]) : "as no adapter specified";
      throw new ie(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Xa
};
function aa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Io(null, e);
}
function Zc(e) {
  return aa(e), e.headers = Ft.from(e.headers), e.data = ia.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ih.getAdapter(e.adapter || Hs.adapter)(e).then(function(o) {
    return aa(e), o.data = ia.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Ft.from(o.headers), o;
  }, function(o) {
    return jh(o) || (aa(e), o && o.response && (o.response.data = ia.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Ft.from(o.response.headers))), Promise.reject(o);
  });
}
const Qc = (e) => e instanceof Ft ? { ...e } : e;
function jr(e, t) {
  t = t || {};
  const r = {};
  function o(c, u, d) {
    return B.isPlainObject(c) && B.isPlainObject(u) ? B.merge.call({ caseless: d }, c, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u;
  }
  function n(c, u, d) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(c))
        return o(void 0, c, d);
    } else
      return o(c, u, d);
  }
  function i(c, u) {
    if (!B.isUndefined(u))
      return o(void 0, u);
  }
  function a(c, u) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(c))
        return o(void 0, c);
    } else
      return o(void 0, u);
  }
  function s(c, u, d) {
    if (d in t)
      return o(c, u);
    if (d in e)
      return o(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, u) => n(Qc(c), Qc(u), !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || n, f = d(e[u], t[u], u);
    B.isUndefined(f) && d !== s || (r[u] = f);
  }), r;
}
const qh = "1.6.8", $s = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $s[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const eu = {};
$s.transitional = function(t, r, o) {
  function n(i, a) {
    return "[Axios v" + qh + "] Transitional option '" + i + "'" + a + (o ? ". " + o : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ie(
        n(a, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED
      );
    return r && !eu[a] && (eu[a] = !0, console.warn(
      n(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function hB(e, t, r) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const i = o[n], a = t[i];
    if (a) {
      const s = e[i], l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new ie("option " + i + " must be " + l, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ie("Unknown option " + i, ie.ERR_BAD_OPTION);
  }
}
const Ya = {
  assertOptions: hB,
  validators: $s
}, Ut = Ya.validators;
class qn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Kc(),
      response: new Kc()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (o) {
      if (o instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        o.stack ? i && !String(o.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + i) : o.stack = i;
      }
      throw o;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = jr(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: i } = r;
    o !== void 0 && Ya.assertOptions(o, {
      silentJSONParsing: Ut.transitional(Ut.boolean),
      forcedJSONParsing: Ut.transitional(Ut.boolean),
      clarifyTimeoutError: Ut.transitional(Ut.boolean)
    }, !1), n != null && (B.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : Ya.assertOptions(n, {
      encode: Ut.function,
      serialize: Ut.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && B.merge(
      i.common,
      i[r.method]
    );
    i && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), r.headers = Ft.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (l = l && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const h = [Zc.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, c), f = h.length, u = Promise.resolve(r); d < f; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    f = s.length;
    let v = r;
    for (d = 0; d < f; ) {
      const h = s[d++], p = s[d++];
      try {
        v = h(v);
      } catch (y) {
        p.call(this, y);
        break;
      }
    }
    try {
      u = Zc.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = jr(this.defaults, t);
    const r = Fh(t.baseURL, t.url);
    return zh(r, t.params, t.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(t) {
  qn.prototype[t] = function(r, o) {
    return this.request(jr(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(i, a, s) {
      return this.request(jr(s || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  qn.prototype[t] = r(), qn.prototype[t + "Form"] = r(!0);
});
const _n = qn;
class Ws {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners)
        return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const a = new Promise((s) => {
        o.subscribe(s), i = s;
      }).then(n);
      return a.cancel = function() {
        o.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      o.reason || (o.reason = new Io(i, a, s), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ws(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
}
const vB = Ws;
function pB(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function gB(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const Ja = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ja).forEach(([e, t]) => {
  Ja[t] = e;
});
const mB = Ja;
function Mh(e) {
  const t = new _n(e), r = _h(_n.prototype.request, t);
  return B.extend(r, _n.prototype, t, { allOwnKeys: !0 }), B.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return Mh(jr(e, n));
  }, r;
}
const pe = Mh(Hs);
pe.Axios = _n;
pe.CanceledError = Io;
pe.CancelToken = vB;
pe.isCancel = jh;
pe.VERSION = qh;
pe.toFormData = pi;
pe.AxiosError = ie;
pe.Cancel = pe.CanceledError;
pe.all = function(t) {
  return Promise.all(t);
};
pe.spread = pB;
pe.isAxiosError = gB;
pe.mergeConfig = jr;
pe.AxiosHeaders = Ft;
pe.formToJSON = (e) => Ah(B.isHTMLForm(e) ? new FormData(e) : e);
pe.getAdapter = Ih.getAdapter;
pe.HttpStatusCode = mB;
pe.default = pe;
pe.defaults.baseURL = "http://localhost:3000";
const Br = (e) => e.data, rn = {
  get: (e) => pe.get(e).then(Br),
  post: (e, t) => pe.post(e, t).then(Br),
  put: (e, t) => pe.put(e, t).then(Br),
  del: (e) => pe.delete(e).then(Br)
}, bB = {
  list: () => pe.get("/tasks").then(Br),
  listPaginated: (e, t) => pe.get(`/tasks?_page=${e}&_per_page=${t}`).then(Br),
  details: (e) => rn.get(`/tasks/${e}`),
  create: (e) => rn.post("/tasks", e),
  update: (e) => rn.put(`/tasks/${e.id}`, e),
  delete: (e) => rn.del(`/tasks/${e}`)
}, Jr = {
  Tasks: bB
}, tu = 10;
class yB {
  constructor() {
    this.tasks = [], this.loadingInitial = !1, this.totalTasks = 0, this.loadTask = async (t) => {
      let r = this.getTask(t);
      if (r)
        return r;
      try {
        return r = await Jr.Tasks.details(t), this.setTask(r), r;
      } catch (o) {
        console.log(o);
      }
    }, this.setTask = (t) => {
      this.tasks.push(t);
    }, this.getTask = (t) => this.tasks.find((r) => r.id === t), this.setTasks = (t) => {
      this.tasks = t;
    }, this.createTask = async (t) => {
      try {
        await Jr.Tasks.create(t), this.setTask(t);
      } catch (r) {
        console.log(r);
      }
    }, this.updateTask = async (t) => {
      try {
        await Jr.Tasks.update(t), en(() => {
          if (t.id) {
            const r = this.tasks.findIndex((o) => o.id === t.id);
            r !== -1 && (this.tasks[r] = { ...this.tasks[r], ...t });
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.deleteTask = async (t) => {
      try {
        await Jr.Tasks.delete(t), en(() => {
          if (this.tasks = this.tasks.filter((r) => r.id !== t), this.tasks.length === 0 && this.totalTasks > 0) {
            const r = Math.ceil(this.totalTasks / tu), o = Math.max(1, r - 1);
            this.loadPaginatedTasks(o);
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.loadPaginatedTasks = async (t) => {
      this.loadingInitial = !0;
      try {
        const r = await Jr.Tasks.listPaginated(t, tu);
        en(() => {
          this.setTasks(r.data), this.setTotalTasks(Number(r.items)), this.setLoadingInitial(!1);
        });
      } catch (r) {
        console.log(r), this.setLoadingInitial(!1);
      }
    }, Ds(this), this.loadPaginatedTasks(1);
  }
  setLoadingInitial(t) {
    this.loadingInitial = t;
  }
  setTotalTasks(t) {
    en(() => {
      this.totalTasks = t;
    });
  }
}
const _B = {
  taskStore: new yB(),
  dialogStore: new QS(),
  paginationStore: new tE()
}, wB = nu(_B);
function mi() {
  return iu(wB);
}
const kB = qs((e) => {
  const { paginationStore: t, taskStore: r } = mi(), o = () => {
    t.currentPage > 1 && (t.setCurrentPage(t.currentPage - 1), r.loadPaginatedTasks(t.currentPage));
  }, n = () => {
    t.currentPage < t.totalPages && (t.setCurrentPage(t.currentPage + 1), r.loadPaginatedTasks(t.currentPage));
  };
  return /* @__PURE__ */ ze("div", { className: ZS.paginationContainer, children: [
    /* @__PURE__ */ L(
      tt,
      {
        icon: /* @__PURE__ */ L(lm, {}),
        onClick: o,
        title: "Previous",
        disabled: t.currentPage === 1
      }
    ),
    /* @__PURE__ */ ze("span", { children: [
      " Page ",
      t.currentPage,
      " of ",
      t.totalPages,
      " "
    ] }),
    /* @__PURE__ */ L(
      tt,
      {
        icon: /* @__PURE__ */ L(cm, {}),
        onClick: n,
        title: "Next",
        disabled: t.currentPage === t.totalPages
      }
    )
  ] });
}), xB = {};
function ru(e) {
  const { open: t, onOpenChange: r, title: o, action: n, actionText: i, children: a, showActionButtons: s } = e, l = (c, u) => {
    r(c, u);
  };
  return /* @__PURE__ */ L("div", { className: xB.container, children: /* @__PURE__ */ L(
    Ud,
    {
      open: t,
      onOpenChange: l,
      children: /* @__PURE__ */ L(Yd, { children: /* @__PURE__ */ ze(Kd, { children: [
        /* @__PURE__ */ L(Xd, { children: o }),
        /* @__PURE__ */ L(Jd, { children: a }),
        s && /* @__PURE__ */ ze(Gd, { children: [
          /* @__PURE__ */ L(Qn, { disableButtonEnhancement: !0, children: /* @__PURE__ */ L(tt, { appearance: "secondary", children: "Close" }) }),
          /* @__PURE__ */ L(tt, { appearance: "primary", onClick: n, children: i })
        ] })
      ] }) })
    }
  ) });
}
function SB({ label: e, loading: t }) {
  return t ? /* @__PURE__ */ L(Id, { label: e }) : null;
}
const EB = (e) => {
  const [t, r] = et({}), o = Lr();
  return Mn(() => {
    const n = NB(o.pathname);
    r(n);
  }, [o]), t;
}, BB = () => Math.random().toString(36).substr(2, 9), NB = (e) => {
  for (const t of TB) {
    const o = t.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/:\w+/g, "([^/]+)");
    if (new RegExp(`^${o}$`).test(e))
      return t;
  }
};
const TB = [
  { path: "/", breadcrumb: "Home" },
  { path: "/tasks/:taskId", root: "/", rootBreadcrumb: "Home", breadcrumb: "Task Details" }
  // Add more breadcrumb data as needed
];
function FB(e) {
  return /* @__PURE__ */ L(_s, { "data-testid": "main-header-card", children: /* @__PURE__ */ L(zk, {}) });
}
class ou {
  constructor(t) {
    this.id = "", this.title = "", this.description = "", this.completed = !1, t && (this.id = t.id, this.title = t.title, this.description = t.description, this.completed = t.completed);
  }
}
class sa {
  constructor(t) {
    this.id = "", this.title = "", this.description = "", this.completed = !1, t && (this.id = t.id, this.title = t.title, this.description = t.description, this.completed = t.completed);
  }
}
const CB = $u({
  container: {
    ...Jp.gap("16px"),
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline"
  }
});
function IB(e) {
  const { taskId: t } = rk(), r = CB(), { taskStore: o } = mi(), { loadTask: n } = o, [i, a] = et(new ou());
  return Mn(() => {
    t && n(t).then((s) => {
      s && a(new ou(s));
    });
  }, [t, n]), /* @__PURE__ */ ze("div", { className: r.container, children: [
    /* @__PURE__ */ L("h2", { children: "Task Details" }),
    /* @__PURE__ */ ze(X1, { children: [
      "ID: ",
      i.id
    ] }),
    /* @__PURE__ */ ze(U1, { children: [
      "Title: ",
      i.title
    ] }),
    /* @__PURE__ */ ze(Xl, { children: [
      "Description: ",
      i.description
    ] }),
    /* @__PURE__ */ ze(Xl, { children: [
      "Completed: ",
      i.completed ? "Yes" : "No"
    ] })
  ] });
}
const PB = tg({
  display: "flex",
  flexDirection: "column",
  rowGap: py.spacingVerticalL
}), OB = $u({
  wrapper: {
    columnGap: "5px",
    display: "flex"
  }
}), zB = qs((e) => {
  const { id: t, onClearTaskId: r } = e, o = OB(), [n, i] = et(""), [a, s] = et(""), [l, c] = et(!0), [u, d] = et(!0), [f, v] = et(!1), [h, p] = et(new sa()), { taskStore: y, dialogStore: g, paginationStore: _ } = mi(), { loadTask: m, createTask: k, updateTask: w } = y;
  Mn(() => {
    t ? m(t).then((F) => {
      F && (p(new sa(F)), i(F.title), s(F.description), v(F.completed));
    }) : (p(new sa()), i(""), s(""), v(!1));
  }, [t, m]);
  function x() {
    if (!n.trim() || !a.trim()) {
      c(!!n.trim()), d(!!a.trim());
      return;
    }
    if (h.id) {
      let F = {
        id: h.id,
        title: n,
        description: a,
        completed: f
      };
      w(F).then(() => E());
    } else {
      let F = {
        id: BB(),
        title: n,
        description: a,
        completed: f
      };
      k(F).then(() => E());
    }
  }
  const E = () => {
    g.setDialogIsVisible(!1), r(), y.loadPaginatedTasks(_.currentPage);
  }, O = (F) => {
    const Z = F.target.value;
    i(Z), c(!!Z.trim());
  }, j = (F) => {
    const Z = F.target.value;
    s(Z), d(!!Z.trim());
  };
  return /* @__PURE__ */ ze("div", { className: PB(), children: [
    /* @__PURE__ */ L(Sa, { label: "Title", required: !0, validationState: l ? "none" : "error", validationMessage: l ? null : "Title is required", children: /* @__PURE__ */ L(jd, { type: "text", onChange: O, value: n }) }),
    /* @__PURE__ */ L(Sa, { label: "Description", required: !0, validationState: u ? "none" : "error", validationMessage: u ? null : "Description is required", children: /* @__PURE__ */ L(qd, { onChange: j, value: a }) }),
    /* @__PURE__ */ L(
      Ad,
      {
        checked: f,
        onChange: (F, Z) => v(!!(Z != null && Z.checked)),
        label: "Task Completed"
      }
    ),
    /* @__PURE__ */ ze("p", { className: o.wrapper, children: [
      /* @__PURE__ */ L(tt, { appearance: "secondary", onClick: E, children: "Close" }),
      /* @__PURE__ */ L(tt, { appearance: "primary", onClick: x, children: "Save" })
    ] })
  ] });
}), qB = qs((e) => {
  const t = kd({ axis: "grid" }), { taskStore: r, dialogStore: o, paginationStore: n } = mi(), [i, a] = et(""), [s, l] = et(!1), [c, u] = et("");
  Mn(() => {
    n.setTtotalPages(r.totalTasks);
  }, [n, r.totalTasks]);
  const d = () => {
    o.setDialogIsVisible(!0);
  }, f = (m) => {
    a(m), o.setDialogIsVisible(!0);
  }, v = () => {
    o.setDialogIsVisible(!1);
  }, h = () => {
    l(!1), u("");
  }, p = () => {
    a((m) => "");
  }, y = (m) => {
    let k = {
      id: m.id,
      title: m.title,
      description: m.description,
      completed: !m.completed
    };
    r.updateTask(k).then(() => r.loadPaginatedTasks(n.currentPage));
  }, g = (m) => {
    l(!0), u(m);
  }, _ = [
    { columnKey: "id", label: "ID" },
    { columnKey: "title", label: "Title" },
    { columnKey: "description", label: "Description" },
    { columnKey: "actions", label: "Actions" }
  ];
  return /* @__PURE__ */ ze(_s, { children: [
    /* @__PURE__ */ L("h2", { children: "Task List" }),
    /* @__PURE__ */ L("div", { children: /* @__PURE__ */ L(tt, { appearance: "primary", onClick: d, children: "Create" }) }),
    /* @__PURE__ */ L("div", { children: s && /* @__PURE__ */ L(
      ru,
      {
        open: s,
        onOpenChange: h,
        title: "Delete Confirmation",
        action: () => {
          r.deleteTask(c), h();
        },
        actionText: "Confirm Delete",
        showActionButtons: !0,
        children: "Are you sure, you want to delete this item?"
      }
    ) }),
    /* @__PURE__ */ L("div", { children: o.dialogIsVisible && /* @__PURE__ */ L(
      ru,
      {
        open: o.dialogIsVisible,
        onOpenChange: v,
        title: "Add Task",
        action: () => {
          console.log("Action clicked");
        },
        actionText: "Save",
        showActionButtons: !1,
        children: /* @__PURE__ */ L(zB, { id: i, onClearTaskId: p })
      }
    ) }),
    /* @__PURE__ */ L(SB, { label: "Loading task...", loading: r.loadingInitial }),
    r.tasks.length === 0 ? /* @__PURE__ */ L("div", { children: "No record found!" }) : /* @__PURE__ */ ze(ht.Fragment, { children: [
      /* @__PURE__ */ ze(
        tf,
        {
          ...t,
          role: "grid",
          "aria-label": "Table with grid keyboard navigation",
          children: [
            /* @__PURE__ */ L(rf, { children: /* @__PURE__ */ ze(Ta, { children: [
              _.map((m) => /* @__PURE__ */ L(Ca, { children: m.label }, m.columnKey)),
              /* @__PURE__ */ L(Ca, {})
            ] }) }),
            /* @__PURE__ */ L(ef, { children: r.tasks.map((m) => /* @__PURE__ */ ze(Ta, { children: [
              /* @__PURE__ */ L(eo, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ L(to, { children: m.id }) }),
              /* @__PURE__ */ L(eo, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ L(to, { children: m.title }) }),
              /* @__PURE__ */ L(eo, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ L(to, { children: m.description }) }),
              /* @__PURE__ */ L(eo, { tabIndex: 0, role: "gridcell", children: /* @__PURE__ */ ze(to, { children: [
                /* @__PURE__ */ L(tt, { icon: /* @__PURE__ */ L(gm, {}), title: "Edit", "aria-label": "Edit", onClick: () => f(m.id) }),
                /* @__PURE__ */ L(tt, { icon: /* @__PURE__ */ L(pm, {}), title: "Delete", "aria-label": "Delete", onClick: () => g(m.id) }),
                /* @__PURE__ */ L(ri, { to: `/tasks/${m.id}`, children: /* @__PURE__ */ L(tt, { icon: /* @__PURE__ */ L(vm, {}), title: "Details", "aria-label": "Details" }) }),
                /* @__PURE__ */ L(
                  tt,
                  {
                    icon: /* @__PURE__ */ L(um, {}),
                    style: m.completed ? { color: "green" } : {},
                    title: m.completed ? "Task completed" : "Please complete the task",
                    "aria-label": "Complete Task",
                    onClick: () => y(m)
                  }
                )
              ] }) })
            ] }, m.id)) })
          ]
        }
      ),
      /* @__PURE__ */ L(kB, {})
    ] })
  ] });
}), RB = {};
function MB(e) {
  return /* @__PURE__ */ L("div", { className: RB.container, children: /* @__PURE__ */ L("h1", { children: "Welcome to TaskManagerFeatures!" }) });
}
export {
  FB as MainHeader,
  IB as TaskDetails,
  qB as TaskList,
  MB as TaskManagerFeatures
};
