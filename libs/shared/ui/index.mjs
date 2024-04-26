import * as rf from "react/jsx-runtime";
import { jsxs as sr, jsx as be, Fragment as nf } from "react/jsx-runtime";
import * as g from "react";
import ot, { useState as eu, forwardRef as Go, memo as Yo, Component as tu, PureComponent as ru, createContext as nu, useContext as ou, isValidElement as of, useCallback as sf, Fragment as af, useEffect as uf } from "react";
import * as cf from "react-dom";
import nn, { unstable_batchedUpdates as lf } from "react-dom";
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
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
var ms;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ms || (ms = {}));
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Vr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Jo(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function iu(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var bs;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(bs || (bs = {}));
function gs(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = ff(e.path, e.caseSensitive, e.end), o = t.match(r);
  if (!o)
    return null;
  let i = o[0], s = i.replace(/(.)\/+$/, "$1"), a = o.slice(1);
  return {
    params: n.reduce((c, l, f) => {
      let {
        paramName: d,
        isOptional: p
      } = l;
      if (d === "*") {
        let v = a[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[f];
      return p && !h ? c[d] = void 0 : c[d] = (h || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function ff(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Vr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, u) => (n.push({
    paramName: a,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n];
}
function ar(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function df(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? iu(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : hf(r, t) : t,
    search: vf(n),
    hash: mf(o)
  };
}
function hf(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function po(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function pf(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function su(e, t) {
  let r = pf(e);
  return t ? r.map((n, o) => o === e.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function au(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = iu(e) : (o = Xo({}, e), ge(!o.pathname || !o.pathname.includes("?"), po("?", "pathname", "search", o)), ge(!o.pathname || !o.pathname.includes("#"), po("#", "pathname", "hash", o)), ge(!o.search || !o.search.includes("#"), po("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
  if (s == null)
    a = r;
  else {
    let f = t.length - 1;
    if (!n && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = df(o, a), c = s && s !== "/" && s.endsWith("/"), l = (i || s === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (c || l) && (u.pathname += "/"), u;
}
const Ri = (e) => e.join("/").replace(/\/\/+/g, "/"), vf = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, mf = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, uu = ["post", "put", "patch", "delete"];
new Set(uu);
const bf = ["get", ...uu];
new Set(bf);
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
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
const qn = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (qn.displayName = "DataRouter");
const cu = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (cu.displayName = "DataRouterState");
const gf = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (gf.displayName = "Await");
const yt = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (yt.displayName = "Navigation");
const Di = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Di.displayName = "Location");
const hr = /* @__PURE__ */ g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (hr.displayName = "Route");
const _f = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (_f.displayName = "RouteError");
function yf(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Ai() || (process.env.NODE_ENV !== "production" ? ge(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : ge(!1));
  let {
    basename: n,
    navigator: o
  } = g.useContext(yt), {
    hash: i,
    pathname: s,
    search: a
  } = qr(e, {
    relative: r
  }), u = s;
  return n !== "/" && (u = s === "/" ? n : Ri([n, s])), o.createHref({
    pathname: u,
    search: a,
    hash: i
  });
}
function Ai() {
  return g.useContext(Di) != null;
}
function pr() {
  return Ai() || (process.env.NODE_ENV !== "production" ? ge(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : ge(!1)), g.useContext(Di).location;
}
const lu = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function fu(e) {
  g.useContext(yt).static || g.useLayoutEffect(e);
}
function Ef() {
  let {
    isDataRoute: e
  } = g.useContext(hr);
  return e ? Tf() : wf();
}
function wf() {
  Ai() || (process.env.NODE_ENV !== "production" ? ge(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : ge(!1));
  let e = g.useContext(qn), {
    basename: t,
    future: r,
    navigator: n
  } = g.useContext(yt), {
    matches: o
  } = g.useContext(hr), {
    pathname: i
  } = pr(), s = JSON.stringify(su(o, r.v7_relativeSplatPath)), a = g.useRef(!1);
  return fu(() => {
    a.current = !0;
  }), g.useCallback(function(c, l) {
    if (l === void 0 && (l = {}), process.env.NODE_ENV !== "production" && Vr(a.current, lu), !a.current)
      return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let f = au(c, JSON.parse(s), i, l.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ri([t, f.pathname])), (l.replace ? n.replace : n.push)(f, l.state, l);
  }, [t, n, s, i, e]);
}
function qr(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = g.useContext(yt), {
    matches: o
  } = g.useContext(hr), {
    pathname: i
  } = pr(), s = JSON.stringify(su(o, n.v7_relativeSplatPath));
  return g.useMemo(() => au(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
var du = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(du || {}), Pi = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Pi || {});
function hu(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function xf(e) {
  let t = g.useContext(qn);
  return t || (process.env.NODE_ENV !== "production" ? ge(!1, hu(e)) : ge(!1)), t;
}
function Of(e) {
  let t = g.useContext(hr);
  return t || (process.env.NODE_ENV !== "production" ? ge(!1, hu(e)) : ge(!1)), t;
}
function pu(e) {
  let t = Of(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? ge(!1, e + ' can only be used on routes that contain a unique "id"') : ge(!1)), r.route.id;
}
function Sf() {
  return pu(Pi.UseRouteId);
}
function Tf() {
  let {
    router: e
  } = xf(du.UseNavigateStable), t = pu(Pi.UseNavigateStable), r = g.useRef(!1);
  return fu(() => {
    r.current = !0;
  }), g.useCallback(function(o, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Vr(r.current, lu), r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Qo({
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
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function Bi(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const vn = "get", mn = "application/x-www-form-urlencoded";
function Un(e) {
  return e != null && typeof e.tagName == "string";
}
function Nf(e) {
  return Un(e) && e.tagName.toLowerCase() === "button";
}
function Cf(e) {
  return Un(e) && e.tagName.toLowerCase() === "form";
}
function kf(e) {
  return Un(e) && e.tagName.toLowerCase() === "input";
}
function Rf(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Df(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Rf(e);
}
let on = null;
function Af() {
  if (on === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), on = !1;
    } catch {
      on = !0;
    }
  return on;
}
const Pf = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function vo(e) {
  return e != null && !Pf.has(e) ? (process.env.NODE_ENV !== "production" && Vr(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + mn + '"')), null) : e;
}
function Bf(e, t) {
  let r, n, o, i, s;
  if (Cf(e)) {
    let a = e.getAttribute("action");
    n = a ? ar(a, t) : null, r = e.getAttribute("method") || vn, o = vo(e.getAttribute("enctype")) || mn, i = new FormData(e);
  } else if (Nf(e) || kf(e) && (e.type === "submit" || e.type === "image")) {
    let a = e.form;
    if (a == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (n = u ? ar(u, t) : null, r = e.getAttribute("formmethod") || a.getAttribute("method") || vn, o = vo(e.getAttribute("formenctype")) || vo(a.getAttribute("enctype")) || mn, i = new FormData(a, e), !Af()) {
      let {
        name: c,
        type: l,
        value: f
      } = e;
      if (l === "image") {
        let d = c ? c + "." : "";
        i.append(d + "x", "0"), i.append(d + "y", "0");
      } else
        c && i.append(c, f);
    }
  } else {
    if (Un(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = vn, n = null, o = mn, s = e;
  }
  return i && o === "text/plain" && (s = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: o,
    formData: i,
    body: s
  };
}
const If = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Ff = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], jf = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Mf = "6";
try {
  window.__reactRouterVersion = Mf;
} catch {
}
const vu = /* @__PURE__ */ g.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (vu.displayName = "ViewTransition");
const zf = /* @__PURE__ */ g.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (zf.displayName = "Fetchers");
process.env.NODE_ENV;
const Lf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ii = /* @__PURE__ */ g.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: o,
    reloadDocument: i,
    replace: s,
    state: a,
    target: u,
    to: c,
    preventScrollReset: l,
    unstable_viewTransition: f
  } = t, d = Bi(t, If), {
    basename: p
  } = g.useContext(yt), h, v = !1;
  if (typeof c == "string" && Vf.test(c) && (h = c, Lf))
    try {
      let b = new URL(window.location.href), E = c.startsWith("//") ? new URL(b.protocol + c) : new URL(c), y = ar(E.pathname, p);
      E.origin === b.origin && y != null ? c = y + E.search + E.hash : v = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Vr(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let _ = yf(c, {
    relative: o
  }), m = Wf(c, {
    replace: s,
    state: a,
    target: u,
    preventScrollReset: l,
    relative: o,
    unstable_viewTransition: f
  });
  function w(b) {
    n && n(b), b.defaultPrevented || m(b);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ g.createElement("a", ur({}, d, {
      href: h || _,
      onClick: v || i ? n : w,
      ref: r,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (Ii.displayName = "Link");
const qf = /* @__PURE__ */ g.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: s = !1,
    style: a,
    to: u,
    unstable_viewTransition: c,
    children: l
  } = t, f = Bi(t, Ff), d = qr(u, {
    relative: f.relative
  }), p = pr(), h = g.useContext(cu), {
    navigator: v,
    basename: _
  } = g.useContext(yt), m = h != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Jf(d) && c === !0, w = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, b = p.pathname, E = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  o || (b = b.toLowerCase(), E = E ? E.toLowerCase() : null, w = w.toLowerCase()), E && _ && (E = ar(E, _) || E);
  const y = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
  let N = b === w || !s && b.startsWith(w) && b.charAt(y) === "/", B = E != null && (E === w || !s && E.startsWith(w) && E.charAt(w.length) === "/"), R = {
    isActive: N,
    isPending: B,
    isTransitioning: m
  }, j = N ? n : void 0, V;
  typeof i == "function" ? V = i(R) : V = [i, N ? "active" : null, B ? "pending" : null, m ? "transitioning" : null].filter(Boolean).join(" ");
  let re = typeof a == "function" ? a(R) : a;
  return /* @__PURE__ */ g.createElement(Ii, ur({}, f, {
    "aria-current": j,
    className: V,
    ref: r,
    style: re,
    to: u,
    unstable_viewTransition: c
  }), typeof l == "function" ? l(R) : l);
});
process.env.NODE_ENV !== "production" && (qf.displayName = "NavLink");
const Uf = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: o,
    replace: i,
    state: s,
    method: a = vn,
    action: u,
    onSubmit: c,
    relative: l,
    preventScrollReset: f,
    unstable_viewTransition: d
  } = e, p = Bi(e, jf), h = Yf(), v = Xf(u, {
    relative: l
  }), _ = a.toLowerCase() === "get" ? "get" : "post", m = (w) => {
    if (c && c(w), w.defaultPrevented)
      return;
    w.preventDefault();
    let b = w.nativeEvent.submitter, E = (b == null ? void 0 : b.getAttribute("formmethod")) || a;
    h(b || w.currentTarget, {
      fetcherKey: r,
      method: E,
      navigate: n,
      replace: i,
      state: s,
      relative: l,
      preventScrollReset: f,
      unstable_viewTransition: d
    });
  };
  return /* @__PURE__ */ g.createElement("form", ur({
    ref: t,
    method: _,
    action: v,
    onSubmit: o ? c : m
  }, p));
});
process.env.NODE_ENV !== "production" && (Uf.displayName = "Form");
process.env.NODE_ENV;
var Nn;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Nn || (Nn = {}));
var _s;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(_s || (_s = {}));
function $f(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function mu(e) {
  let t = g.useContext(qn);
  return t || (process.env.NODE_ENV !== "production" ? ge(!1, $f(e)) : ge(!1)), t;
}
function Wf(e, t) {
  let {
    target: r,
    replace: n,
    state: o,
    preventScrollReset: i,
    relative: s,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, u = Ef(), c = pr(), l = qr(e, {
    relative: s
  });
  return g.useCallback((f) => {
    if (Df(f, r)) {
      f.preventDefault();
      let d = n !== void 0 ? n : Jo(c) === Jo(l);
      u(e, {
        replace: d,
        state: o,
        preventScrollReset: i,
        relative: s,
        unstable_viewTransition: a
      });
    }
  }, [c, u, l, n, o, r, e, i, s, a]);
}
function Hf() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Kf = 0, Gf = () => "__" + String(++Kf) + "__";
function Yf() {
  let {
    router: e
  } = mu(Nn.UseSubmit), {
    basename: t
  } = g.useContext(yt), r = Sf();
  return g.useCallback(function(n, o) {
    o === void 0 && (o = {}), Hf();
    let {
      action: i,
      method: s,
      encType: a,
      formData: u,
      body: c
    } = Bf(n, t);
    if (o.navigate === !1) {
      let l = o.fetcherKey || Gf();
      e.fetch(l, r, o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: u,
        body: c,
        formMethod: o.method || s,
        formEncType: o.encType || a,
        unstable_flushSync: o.unstable_flushSync
      });
    } else
      e.navigate(o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: u,
        body: c,
        formMethod: o.method || s,
        formEncType: o.encType || a,
        replace: o.replace,
        state: o.state,
        fromRouteId: r,
        unstable_flushSync: o.unstable_flushSync,
        unstable_viewTransition: o.unstable_viewTransition
      });
  }, [e, t, r]);
}
function Xf(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = g.useContext(yt), o = g.useContext(hr);
  o || (process.env.NODE_ENV !== "production" ? ge(!1, "useFormAction must be used inside a RouteContext") : ge(!1));
  let [i] = o.matches.slice(-1), s = ur({}, qr(e || ".", {
    relative: r
  })), a = pr();
  if (e == null) {
    s.search = a.search;
    let u = new URLSearchParams(s.search);
    u.has("index") && u.get("index") === "" && (u.delete("index"), s.search = u.toString() ? "?" + u.toString() : "");
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (s.pathname = s.pathname === "/" ? n : Ri([n, s.pathname])), Jo(s);
}
function Jf(e, t) {
  t === void 0 && (t = {});
  let r = g.useContext(vu);
  r == null && (process.env.NODE_ENV !== "production" ? ge(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : ge(!1));
  let {
    basename: n
  } = mu(Nn.useViewTransitionState), o = qr(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = ar(r.currentLocation.pathname, n) || r.currentLocation.pathname, s = ar(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return gs(o.pathname, s) != null || gs(o.pathname, i) != null;
}
var Qf = {
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
}, Zf = process.env.NODE_ENV !== "production" ? Qf : {};
function P(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var o = typeof e == "string" ? e : Zf[e];
    throw typeof o == "function" && (o = o.apply(null, r)), new Error("[MobX] " + o);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var ed = {};
function Fi() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : ed;
}
var bu = Object.assign, Cn = Object.getOwnPropertyDescriptor, at = Object.defineProperty, $n = Object.prototype, kn = [];
Object.freeze(kn);
var gu = {};
Object.freeze(gu);
var td = typeof Proxy < "u", rd = /* @__PURE__ */ Object.toString();
function _u() {
  td || P(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Er(e) {
  process.env.NODE_ENV !== "production" && S.verifyProxies && P("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function tt() {
  return ++S.mobxGuid;
}
function ji(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var tr = function() {
};
function we(e) {
  return typeof e == "function";
}
function qt(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Wn(e) {
  return e !== null && typeof e == "object";
}
function Ie(e) {
  if (!Wn(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === rd;
}
function yu(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ur(e, t, r) {
  at(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function Eu(e, t, r) {
  at(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function Yt(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return Wn(n) && n[r] === !0;
  };
}
function vr(e) {
  return e instanceof Map;
}
function $r(e) {
  return e instanceof Set;
}
var wu = typeof Object.getOwnPropertySymbols < "u";
function nd(e) {
  var t = Object.keys(e);
  if (!wu)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return $n.propertyIsEnumerable.call(e, n);
  })) : t;
}
var cr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : wu ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Zo(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function xu(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function He(e, t) {
  return $n.hasOwnProperty.call(e, t);
}
var od = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return cr(t).forEach(function(n) {
    r[n] = Cn(t, n);
  }), r;
};
function ys(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ad(n.key), n);
  }
}
function Mi(e, t, r) {
  return t && ys(e.prototype, t), r && ys(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bt.apply(this, arguments);
}
function Ou(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ei(e, t);
}
function ei(e, t) {
  return ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ei(e, t);
}
function bn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function id(e, t) {
  if (e) {
    if (typeof e == "string")
      return Es(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Es(e, t);
  }
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function rr(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = id(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sd(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ad(e) {
  var t = sd(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Pe = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function ut(e) {
  function t(r, n) {
    if (Wr(n))
      return e.decorate_20223_(r, n);
    mr(r, n, e);
  }
  return Object.assign(t, e);
}
function mr(e, t, r) {
  if (He(e, Pe) || Ur(e, Pe, bt({}, e[Pe])), process.env.NODE_ENV !== "production" && Dn(r) && !He(e[Pe], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    P("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  ud(e, r, t), Dn(r) || (e[Pe][t] = r);
}
function ud(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !Dn(t) && He(e[Pe], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), o = e[Pe][r].annotationType_, i = t.annotationType_;
    P("Cannot apply '@" + i + "' to '" + n + "':" + (`
The field is already decorated with '@` + o + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function cd(e) {
  return He(e, Pe) || Ur(e, Pe, bt({}, e[Pe])), e[Pe];
}
function Wr(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function Hn(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && P("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var $ = /* @__PURE__ */ Symbol("mobx administration"), Hr = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + tt() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = te.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return Uu(this);
  }, t.reportChanged = function() {
    $e(), $u(this), We();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), zi = /* @__PURE__ */ Yt("Atom", Hr);
function Su(e, t, r) {
  t === void 0 && (t = tr), r === void 0 && (r = tr);
  var n = new Hr(e);
  return t !== tr && xh(n, t), r !== tr && Ju(n, r), n;
}
function ld(e, t) {
  return e === t;
}
function fd(e, t) {
  return Ki(e, t);
}
function dd(e, t) {
  return Ki(e, t, 1);
}
function hd(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Rn = {
  identity: ld,
  structural: fd,
  default: hd,
  shallow: dd
};
function Ut(e, t, r) {
  return Dr(e) ? e : Array.isArray(e) ? Se.array(e, {
    name: r
  }) : Ie(e) ? Se.object(e, void 0, {
    name: r
  }) : vr(e) ? Se.map(e, {
    name: r
  }) : $r(e) ? Se.set(e, {
    name: r
  }) : typeof e == "function" && !Gr(e) && !Rr(e) ? yu(e) ? lr(e) : kr(r, e) : e;
}
function pd(e, t, r) {
  if (e == null || Kt(e) || Jr(e) || Et(e) || br(e))
    return e;
  if (Array.isArray(e))
    return Se.array(e, {
      name: r,
      deep: !1
    });
  if (Ie(e))
    return Se.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (vr(e))
    return Se.map(e, {
      name: r,
      deep: !1
    });
  if ($r(e))
    return Se.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && P("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function Kn(e) {
  return e;
}
function vd(e, t) {
  return process.env.NODE_ENV !== "production" && Dr(e) && P("observable.struct should not be used with observable values"), Ki(e, t) ? t : e;
}
var md = "override";
function Dn(e) {
  return e.annotationType_ === md;
}
function Kr(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: bd,
    extend_: gd,
    decorate_20223_: _d
  };
}
function bd(e, t, r, n) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Gr(r.value))
    return 1;
  var i = Tu(e, this, t, r, !1);
  return at(n, t, i), 2;
}
function gd(e, t, r, n) {
  var o = Tu(e, this, t, r);
  return e.defineProperty_(t, o, n);
}
function _d(e, t) {
  process.env.NODE_ENV !== "production" && Hn(t, ["method", "field"]);
  var r = t.kind, n = t.name, o = t.addInitializer, i = this, s = function(c) {
    var l, f, d, p;
    return $t((l = (f = i.options_) == null ? void 0 : f.name) != null ? l : n.toString(), c, (d = (p = i.options_) == null ? void 0 : p.autoAction) != null ? d : !1);
  };
  if (r == "field") {
    o(function() {
      mr(this, n, i);
    });
    return;
  }
  if (r == "method") {
    var a;
    return Gr(e) || (e = s(e)), (a = this.options_) != null && a.bound && o(function() {
      var u = this, c = u[n].bind(u);
      c.isMobxAction = !0, u[n] = c;
    }), e;
  }
  P("Cannot apply '" + i.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + i.annotationType_ + "' can only be used on properties with a function value."));
}
function yd(e, t, r, n) {
  var o = t.annotationType_, i = n.value;
  process.env.NODE_ENV !== "production" && !we(i) && P("Cannot apply '" + o + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + o + "' can only be used on properties with a function value."));
}
function Tu(e, t, r, n, o) {
  var i, s, a, u, c, l, f;
  o === void 0 && (o = S.safeDescriptors), yd(e, t, r, n);
  var d = n.value;
  if ((i = t.options_) != null && i.bound) {
    var p;
    d = d.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: $t(
      (s = (a = t.options_) == null ? void 0 : a.name) != null ? s : r.toString(),
      d,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (l = t.options_) != null && l.bound ? (f = e.proxy_) != null ? f : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: o ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !o
  };
}
function Nu(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Ed,
    extend_: wd,
    decorate_20223_: xd
  };
}
function Ed(e, t, r, n) {
  var o;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!He(e.target_, t) || !Rr(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Rr(r.value))
    return 1;
  var i = Cu(e, this, t, r, !1, !1);
  return at(n, t, i), 2;
}
function wd(e, t, r, n) {
  var o, i = Cu(e, this, t, r, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(t, i, n);
}
function xd(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && Hn(t, ["method"]);
  var n = t.name, o = t.addInitializer;
  return Rr(e) || (e = lr(e)), (r = this.options_) != null && r.bound && o(function() {
    var i = this, s = i[n].bind(i);
    s.isMobXFlow = !0, i[n] = s;
  }), e;
}
function Od(e, t, r, n) {
  var o = t.annotationType_, i = n.value;
  process.env.NODE_ENV !== "production" && !we(i) && P("Cannot apply '" + o + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + o + "' can only be used on properties with a generator function value."));
}
function Cu(e, t, r, n, o, i) {
  i === void 0 && (i = S.safeDescriptors), Od(e, t, r, n);
  var s = n.value;
  if (Rr(s) || (s = lr(s)), o) {
    var a;
    s = s.bind((a = e.proxy_) != null ? a : e.target_), s.isMobXFlow = !0;
  }
  return {
    value: s,
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
function Li(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Sd,
    extend_: Td,
    decorate_20223_: Nd
  };
}
function Sd(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Td(e, t, r, n) {
  return Cd(e, this, t, r), e.defineComputedProperty_(t, bt({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function Nd(e, t) {
  process.env.NODE_ENV !== "production" && Hn(t, ["getter"]);
  var r = this, n = t.name, o = t.addInitializer;
  return o(function() {
    var i = Jt(this)[$], s = bt({}, r.options_, {
      get: e,
      context: this
    });
    s.name || (s.name = process.env.NODE_ENV !== "production" ? i.name_ + "." + n.toString() : "ObservableObject." + n.toString()), i.values_.set(n, new Wt(s));
  }), function() {
    return this[$].getObservablePropValue_(n);
  };
}
function Cd(e, t, r, n) {
  var o = t.annotationType_, i = n.get;
  process.env.NODE_ENV !== "production" && !i && P("Cannot apply '" + o + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + o + "' can only be used on getter(+setter) properties."));
}
function Gn(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: kd,
    extend_: Rd,
    decorate_20223_: Dd
  };
}
function kd(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Rd(e, t, r, n) {
  var o, i;
  return Ad(e, this, t, r), e.defineObservableProperty_(t, r.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : Ut, n);
}
function Dd(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw P("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    Hn(t, ["accessor"]);
  }
  var r = this, n = t.kind, o = t.name, i = /* @__PURE__ */ new WeakSet();
  function s(a, u) {
    var c, l, f = Jt(a)[$], d = new Mt(u, (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : Ut, process.env.NODE_ENV !== "production" ? f.name_ + "." + o.toString() : "ObservableObject." + o.toString(), !1);
    f.values_.set(o, d), i.add(a);
  }
  if (n == "accessor")
    return {
      get: function() {
        return i.has(this) || s(this, e.get.call(this)), this[$].getObservablePropValue_(o);
      },
      set: function(u) {
        return i.has(this) || s(this, u), this[$].setObservablePropValue_(o, u);
      },
      init: function(u) {
        return i.has(this) || s(this, u), u;
      }
    };
}
function Ad(e, t, r, n) {
  var o = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && P("Cannot apply '" + o + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + o + "' cannot be used on getter/setter properties"));
}
var Pd = "true", Bd = /* @__PURE__ */ ku();
function ku(e) {
  return {
    annotationType_: Pd,
    options_: e,
    make_: Id,
    extend_: Fd,
    decorate_20223_: jd
  };
}
function Id(e, t, r, n) {
  var o, i;
  if (r.get)
    return Yn.make_(e, t, r, n);
  if (r.set) {
    var s = $t(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: S.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (at(n, t, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var a;
    if (yu(r.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? lr.bound : lr;
      return c.make_(e, t, r, n);
    }
    var l = (a = this.options_) != null && a.autoBind ? kr.bound : kr;
    return l.make_(e, t, r, n);
  }
  var f = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Se.ref : Se;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var d;
    r.value = r.value.bind((d = e.proxy_) != null ? d : e.target_);
  }
  return f.make_(e, t, r, n);
}
function Fd(e, t, r, n) {
  var o, i;
  if (r.get)
    return Yn.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: S.safeDescriptors ? e.isPlainObject_ : !0,
      set: $t(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    r.value = r.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Se.ref : Se;
  return a.extend_(e, t, r, n);
}
function jd(e, t) {
  P("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Md = "observable", zd = "observable.ref", Ld = "observable.shallow", Vd = "observable.struct", Ru = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Ru);
function sn(e) {
  return e || Ru;
}
var ti = /* @__PURE__ */ Gn(Md), qd = /* @__PURE__ */ Gn(zd, {
  enhancer: Kn
}), Ud = /* @__PURE__ */ Gn(Ld, {
  enhancer: pd
}), $d = /* @__PURE__ */ Gn(Vd, {
  enhancer: vd
}), Du = /* @__PURE__ */ ut(ti);
function an(e) {
  return e.deep === !0 ? Ut : e.deep === !1 ? Kn : Hd(e.defaultDecorator);
}
function Wd(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : ku(e) : void 0;
}
function Hd(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Ut;
}
function Au(e, t, r) {
  if (Wr(t))
    return ti.decorate_20223_(e, t);
  if (qt(t)) {
    mr(e, t, ti);
    return;
  }
  return Dr(e) ? e : Ie(e) ? Se.object(e, t, r) : Array.isArray(e) ? Se.array(e, t) : vr(e) ? Se.map(e, t) : $r(e) ? Se.set(e, t) : typeof e == "object" && e !== null ? e : Se.box(e, t);
}
bu(Au, Du);
var Kd = {
  box: function(t, r) {
    var n = sn(r);
    return new Mt(t, an(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = sn(r);
    return (S.useProxies === !1 || n.proxy === !1 ? Gh : Mh)(t, an(n), n.name);
  },
  map: function(t, r) {
    var n = sn(r);
    return new sc(t, an(n), n.name);
  },
  set: function(t, r) {
    var n = sn(r);
    return new cc(t, an(n), n.name);
  },
  object: function(t, r, n) {
    return Rt(function() {
      return Zu(S.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Jt({}, n) : Bh({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ ut(qd),
  shallow: /* @__PURE__ */ ut(Ud),
  deep: Du,
  struct: /* @__PURE__ */ ut($d)
}, Se = /* @__PURE__ */ bu(Au, Kd), Pu = "computed", Gd = "computed.struct", ri = /* @__PURE__ */ Li(Pu), Yd = /* @__PURE__ */ Li(Gd, {
  equals: Rn.structural
}), Yn = function(t, r) {
  if (Wr(r))
    return ri.decorate_20223_(t, r);
  if (qt(r))
    return mr(t, r, ri);
  if (Ie(t))
    return ut(Li(Pu, t));
  process.env.NODE_ENV !== "production" && (we(t) || P("First argument to `computed` should be an expression."), we(r) && P("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = Ie(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new Wt(n);
};
Object.assign(Yn, ri);
Yn.struct = /* @__PURE__ */ ut(Yd);
var ws, xs, An = 0, Xd = 1, Jd = (ws = (xs = /* @__PURE__ */ Cn(function() {
}, "name")) == null ? void 0 : xs.configurable) != null ? ws : !1, Os = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function $t(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (we(t) || P("`action` can only be invoked on functions"), (typeof e != "string" || !e) && P("actions should have valid names, got: '" + e + "'"));
  function o() {
    return Bu(e, r, t, n || this, arguments);
  }
  return o.isMobxAction = !0, o.toString = function() {
    return t.toString();
  }, Jd && (Os.value = e, at(o, "name", Os)), o;
}
function Bu(e, t, r, n, o) {
  var i = Qd(e, t, n, o);
  try {
    return r.apply(n, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    Zd(i);
  }
}
function Qd(e, t, r, n) {
  var o = process.env.NODE_ENV !== "production" && ke() && !!e, i = 0;
  if (process.env.NODE_ENV !== "production" && o) {
    i = Date.now();
    var s = n ? Array.from(n) : kn;
    Fe({
      type: qi,
      name: e,
      object: r,
      arguments: s
    });
  }
  var a = S.trackingDerivation, u = !t || !a;
  $e();
  var c = S.allowStateChanges;
  u && (Xt(), c = Xn(!0));
  var l = Vi(!0), f = {
    runAsAction_: u,
    prevDerivation_: a,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: l,
    notifySpy_: o,
    startTime_: i,
    actionId_: Xd++,
    parentActionId_: An
  };
  return An = f.actionId_, f;
}
function Zd(e) {
  An !== e.actionId_ && P(30), An = e.parentActionId_, e.error_ !== void 0 && (S.suppressReactionErrors = !0), Jn(e.prevAllowStateChanges_), Sr(e.prevAllowStateReads_), We(), e.runAsAction_ && pt(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && je({
    time: Date.now() - e.startTime_
  }), S.suppressReactionErrors = !1;
}
function eh(e, t) {
  var r = Xn(e);
  try {
    return t();
  } finally {
    Jn(r);
  }
}
function Xn(e) {
  var t = S.allowStateChanges;
  return S.allowStateChanges = e, t;
}
function Jn(e) {
  S.allowStateChanges = e;
}
var Iu, th = "create";
Iu = Symbol.toPrimitive;
var Mt = /* @__PURE__ */ function(e) {
  Ou(t, e);
  function t(n, o, i, s, a) {
    var u;
    return i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableValue@" + tt() : "ObservableValue"), s === void 0 && (s = !0), a === void 0 && (a = Rn.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = a, u.value_ = o(n, void 0, i), process.env.NODE_ENV !== "production" && s && ke() && Ht({
      type: th,
      object: bn(u),
      observableKind: "value",
      debugObjectName: u.name_,
      newValue: "" + u.value_
    }), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, r.set = function(o) {
    var i = this.value_;
    if (o = this.prepareNewValue_(o), o !== S.UNCHANGED) {
      var s = ke();
      process.env.NODE_ENV !== "production" && s && Fe({
        type: Qe,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: o,
        oldValue: i
      }), this.setNewValue_(o), process.env.NODE_ENV !== "production" && s && je();
    }
  }, r.prepareNewValue_ = function(o) {
    if (it(this), qe(this)) {
      var i = Ue(this, {
        object: this,
        type: Qe,
        newValue: o
      });
      if (!i)
        return S.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? S.UNCHANGED : o;
  }, r.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), Ze(this) && et(this, {
      type: Qe,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(o) {
    return Yr(this, o);
  }, r.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: Qe,
      newValue: this.value_,
      oldValue: void 0
    }), Xr(this, o);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return xu(this.get());
  }, r[Iu] = function() {
    return this.valueOf();
  }, t;
}(Hr), Fu;
Fu = Symbol.toPrimitive;
var Wt = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = te.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = te.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Pn(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ke.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || P(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + tt() : "ComputedValue"), r.set && (this.setter_ = $t(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Rn.structural : Rn.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    ch(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && P(32, this.name_, this.derivation), S.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      ni(this) && (this.warnAboutUntrackedRead_(), $e(), this.value_ = this.computeValue_(!1), We());
    else if (Uu(this), ni(this)) {
      var n = S.trackingContext;
      this.keepAlive_ && !n && (S.trackingContext = this), this.trackAndCompute() && uh(this), S.trackingContext = n;
    }
    var o = this.value_;
    if (gn(o))
      throw o.cause;
    return o;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && P(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      P(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, o = (
      /* see #1208 */
      this.dependenciesState_ === te.NOT_TRACKING_
    ), i = this.computeValue_(!0), s = o || gn(n) || gn(i) || !this.equals_(n, i);
    return s && (this.value_ = i, process.env.NODE_ENV !== "production" && ke() && Ht({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: i
    })), s;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var o = Xn(!1), i;
    if (n)
      i = ju(this, this.derivation, this.scope_);
    else if (S.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (s) {
        i = new Pn(s);
      }
    return Jn(o), this.isComputing_ = !1, i;
  }, t.suspend_ = function() {
    this.keepAlive_ || (oi(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== Ke.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, o) {
    var i = this, s = !0, a = void 0;
    return gh(function() {
      var u = i.get();
      if (!s || o) {
        var c = Xt();
        n({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: Qe,
          object: i,
          newValue: u,
          oldValue: a
        }), pt(c);
      }
      s = !1, a = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== Ke.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : S.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return xu(this.get());
  }, t[Fu] = function() {
    return this.valueOf();
  }, e;
}(), Qn = /* @__PURE__ */ Yt("ComputedValue", Wt), te;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(te || (te = {}));
var Ke;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Ke || (Ke = {}));
var Pn = function(t) {
  this.cause = void 0, this.cause = t;
};
function gn(e) {
  return e instanceof Pn;
}
function ni(e) {
  switch (e.dependenciesState_) {
    case te.UP_TO_DATE_:
      return !1;
    case te.NOT_TRACKING_:
    case te.STALE_:
      return !0;
    case te.POSSIBLY_STALE_: {
      for (var t = Vi(!0), r = Xt(), n = e.observing_, o = n.length, i = 0; i < o; i++) {
        var s = n[i];
        if (Qn(s)) {
          if (S.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return pt(r), Sr(t), !0;
            }
          if (e.dependenciesState_ === te.STALE_)
            return pt(r), Sr(t), !0;
        }
      }
      return zu(e), pt(r), Sr(t), !1;
    }
  }
}
function it(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !S.allowStateChanges && (t || S.enforceActions === "always") && console.warn("[MobX] " + (S.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function rh(e) {
  process.env.NODE_ENV !== "production" && !S.allowStateReads && S.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function ju(e, t, r) {
  var n = Vi(!0);
  zu(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++S.runId;
  var o = S.trackingDerivation;
  S.trackingDerivation = e, S.inBatch++;
  var i;
  if (S.disableErrorBoundaries === !0)
    i = t.call(r);
  else
    try {
      i = t.call(r);
    } catch (s) {
      i = new Pn(s);
    }
  return S.inBatch--, S.trackingDerivation = o, oh(e), nh(e), Sr(n), i;
}
function nh(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : S.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function oh(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = te.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = r[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (r[o] = a), o++), a.dependenciesState_ > n && (n = a.dependenciesState_);
  }
  for (r.length = o, e.newObserving_ = null, i = t.length; i--; ) {
    var u = t[i];
    u.diffValue_ === 0 && Vu(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var c = r[o];
    c.diffValue_ === 1 && (c.diffValue_ = 0, ah(c, e));
  }
  n !== te.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function oi(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    Vu(t[r], e);
  e.dependenciesState_ = te.NOT_TRACKING_;
}
function Mu(e) {
  var t = Xt();
  try {
    return e();
  } finally {
    pt(t);
  }
}
function Xt() {
  var e = S.trackingDerivation;
  return S.trackingDerivation = null, e;
}
function pt(e) {
  S.trackingDerivation = e;
}
function Vi(e) {
  var t = S.allowStateReads;
  return S.allowStateReads = e, t;
}
function Sr(e) {
  S.allowStateReads = e;
}
function zu(e) {
  if (e.dependenciesState_ !== te.UP_TO_DATE_) {
    e.dependenciesState_ = te.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = te.UP_TO_DATE_;
  }
}
var _n = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, yn = !0, Lu = !1, S = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Fi();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (yn = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new _n().version && (yn = !1), yn ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new _n()) : (setTimeout(function() {
    Lu || P(35);
  }, 1), new _n());
}();
function ih() {
  if ((S.pendingReactions.length || S.inBatch || S.isRunningReactions) && P(36), Lu = !0, yn) {
    var e = Fi();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), S = new _n();
  }
}
function sh() {
  return S;
}
function ah(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Vu(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && qu(e);
}
function qu(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, S.pendingUnobservations.push(e));
}
function $e() {
  S.inBatch++;
}
function We() {
  if (--S.inBatch === 0) {
    Ku();
    for (var e = S.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof Wt && r.suspend_());
    }
    S.pendingUnobservations = [];
  }
}
function Uu(e) {
  rh(e);
  var t = S.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && S.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && S.inBatch > 0 && qu(e), !1);
}
function $u(e) {
  e.lowestObserverState_ !== te.STALE_ && (e.lowestObserverState_ = te.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === te.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== Ke.NONE && Wu(t, e), t.onBecomeStale_()), t.dependenciesState_ = te.STALE_;
  }));
}
function uh(e) {
  e.lowestObserverState_ !== te.STALE_ && (e.lowestObserverState_ = te.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === te.POSSIBLY_STALE_ ? (t.dependenciesState_ = te.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== Ke.NONE && Wu(t, e)) : t.dependenciesState_ === te.UP_TO_DATE_ && (e.lowestObserverState_ = te.UP_TO_DATE_);
  }));
}
function ch(e) {
  e.lowestObserverState_ === te.UP_TO_DATE_ && (e.lowestObserverState_ = te.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === te.UP_TO_DATE_ && (t.dependenciesState_ = te.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Wu(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === Ke.BREAK) {
    var r = [];
    Hu(ec(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof Wt ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Hu(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return Hu(n, t, r + 1);
  });
}
var Cr = /* @__PURE__ */ function() {
  function e(r, n, o, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + tt() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = te.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = Ke.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, S.pendingReactions.push(this), Ku());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      $e(), this.isScheduled_ = !1;
      var n = S.trackingContext;
      if (S.trackingContext = this, ni(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && ke() && Ht({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      S.trackingContext = n, We();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      $e();
      var o = ke(), i;
      process.env.NODE_ENV !== "production" && o && (i = Date.now(), Fe({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var s = S.trackingContext;
      S.trackingContext = this;
      var a = ju(this, n, void 0);
      S.trackingContext = s, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && oi(this), gn(a) && this.reportExceptionInDerivation_(a.cause), process.env.NODE_ENV !== "production" && o && je({
        time: Date.now() - i
      }), We();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (S.disableErrorBoundaries)
      throw n;
    var i = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    S.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(i, n), process.env.NODE_ENV !== "production" && ke() && Ht({
      type: "error",
      name: this.name_,
      message: i,
      error: "" + n
    }), S.globalReactionErrorHandlers.forEach(function(s) {
      return s(n, o);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || ($e(), oi(this), We()));
  }, t.getDisposer_ = function(n) {
    var o = this, i = function s() {
      o.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", s);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", i), i[$] = this, i;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), Dh(this, n);
  }, e;
}(), Ss = 100, ii = function(t) {
  return t();
};
function Ku() {
  S.inBatch > 0 || S.isRunningReactions || ii(lh);
}
function lh() {
  S.isRunningReactions = !0;
  for (var e = S.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ss && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Ss + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, o = r.length; n < o; n++)
      r[n].runReaction_();
  }
  S.isRunningReactions = !1;
}
var Bn = /* @__PURE__ */ Yt("Reaction", Cr);
function fh(e) {
  var t = ii;
  ii = function(n) {
    return e(function() {
      return t(n);
    });
  };
}
function ke() {
  return process.env.NODE_ENV !== "production" && !!S.spyListeners.length;
}
function Ht(e) {
  if (process.env.NODE_ENV !== "production" && S.spyListeners.length)
    for (var t = S.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function Fe(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = bt({}, e, {
      spyReportStart: !0
    });
    Ht(t);
  }
}
var dh = {
  type: "report-end",
  spyReportEnd: !0
};
function je(e) {
  process.env.NODE_ENV !== "production" && Ht(e ? bt({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : dh);
}
function hh(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (S.spyListeners.push(e), ji(function() {
    S.spyListeners = S.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var qi = "action", ph = "action.bound", Gu = "autoAction", vh = "autoAction.bound", Yu = "<unnamed action>", si = /* @__PURE__ */ Kr(qi), mh = /* @__PURE__ */ Kr(ph, {
  bound: !0
}), ai = /* @__PURE__ */ Kr(Gu, {
  autoAction: !0
}), bh = /* @__PURE__ */ Kr(vh, {
  autoAction: !0,
  bound: !0
});
function Xu(e) {
  var t = function(n, o) {
    if (we(n))
      return $t(n.name || Yu, n, e);
    if (we(o))
      return $t(n, o, e);
    if (Wr(o))
      return (e ? ai : si).decorate_20223_(n, o);
    if (qt(o))
      return mr(n, o, e ? ai : si);
    if (qt(n))
      return ut(Kr(e ? Gu : qi, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && P("Invalid arguments for `action`");
  };
  return t;
}
var nr = /* @__PURE__ */ Xu(!1);
Object.assign(nr, si);
var kr = /* @__PURE__ */ Xu(!0);
Object.assign(kr, ai);
nr.bound = /* @__PURE__ */ ut(mh);
kr.bound = /* @__PURE__ */ ut(bh);
function un(e) {
  return Bu(e.name || Yu, !1, e, this, void 0);
}
function Gr(e) {
  return we(e) && e.isMobxAction === !0;
}
function gh(e, t) {
  var r, n, o, i, s;
  t === void 0 && (t = gu), process.env.NODE_ENV !== "production" && (we(e) || P("Autorun expects a function as first argument"), Gr(e) && P("Autorun does not accept actions since actions are untrackable"));
  var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + tt() : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Cr(a, function() {
      this.track(d);
    }, t.onError, t.requiresObservable);
  else {
    var l = yh(t), f = !1;
    c = new Cr(a, function() {
      f || (f = !0, l(function() {
        f = !1, c.isDisposed_ || c.track(d);
      }));
    }, t.onError, t.requiresObservable);
  }
  function d() {
    e(c);
  }
  return (o = t) != null && (i = o.signal) != null && i.aborted || c.schedule_(), c.getDisposer_((s = t) == null ? void 0 : s.signal);
}
var _h = function(t) {
  return t();
};
function yh(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : _h;
}
var Eh = "onBO", wh = "onBUO";
function xh(e, t, r) {
  return Qu(Eh, e, t, r);
}
function Ju(e, t, r) {
  return Qu(wh, e, t, r);
}
function Qu(e, t, r, n) {
  var o = typeof n == "function" ? kt(t, r) : kt(t), i = we(n) ? n : r, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var Oh = "never", cn = "always", Sh = "observed";
function Th(e) {
  e.isolateGlobalState === !0 && ih();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (S.useProxies = t === cn ? !0 : t === Oh ? !1 : typeof Proxy < "u"), t === "ifavailable" && (S.verifyProxies = !0), r !== void 0) {
    var n = r === cn ? cn : r === Sh;
    S.enforceActions = n, S.allowStateChanges = !(n === !0 || n === cn);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (S[o] = !!e[o]);
  }), S.allowStateReads = !S.observableRequiresReaction, process.env.NODE_ENV !== "production" && S.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && fh(e.reactionScheduler);
}
function Zu(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && P("'extendObservable' expected 2-4 arguments"), typeof e != "object" && P("'extendObservable' expects an object as first argument"), Et(e) && P("'extendObservable' should not be used on maps, use map.merge instead"), Ie(t) || P("'extendObservable' only accepts plain objects as second argument"), (Dr(t) || Dr(r)) && P("Extending an object with another observable (object) is not supported"));
  var o = od(t);
  return Rt(function() {
    var i = Jt(e, n)[$];
    cr(o).forEach(function(s) {
      i.extend_(
        s,
        o[s],
        // must pass "undefined" for { key: undefined }
        r && s in r ? r[s] : !0
      );
    });
  }), e;
}
function ec(e, t) {
  return tc(kt(e, t));
}
function tc(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Nh(e.observing_).map(tc)), t;
}
function Nh(e) {
  return Array.from(new Set(e));
}
var Ch = 0;
function rc() {
  this.message = "FLOW_CANCELLED";
}
rc.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var mo = /* @__PURE__ */ Nu("flow"), kh = /* @__PURE__ */ Nu("flow.bound", {
  bound: !0
}), lr = /* @__PURE__ */ Object.assign(function(t, r) {
  if (Wr(r))
    return mo.decorate_20223_(t, r);
  if (qt(r))
    return mr(t, r, mo);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && P("Flow expects single argument with generator function");
  var n = t, o = n.name || "<unnamed flow>", i = function() {
    var a = this, u = arguments, c = ++Ch, l = nr(o + " - runid: " + c + " - init", n).apply(a, u), f, d = void 0, p = new Promise(function(h, v) {
      var _ = 0;
      f = v;
      function m(E) {
        d = void 0;
        var y;
        try {
          y = nr(o + " - runid: " + c + " - yield " + _++, l.next).call(l, E);
        } catch (N) {
          return v(N);
        }
        b(y);
      }
      function w(E) {
        d = void 0;
        var y;
        try {
          y = nr(o + " - runid: " + c + " - yield " + _++, l.throw).call(l, E);
        } catch (N) {
          return v(N);
        }
        b(y);
      }
      function b(E) {
        if (we(E == null ? void 0 : E.then)) {
          E.then(b, v);
          return;
        }
        return E.done ? h(E.value) : (d = Promise.resolve(E.value), d.then(m, w));
      }
      m(void 0);
    });
    return p.cancel = nr(o + " - runid: " + c + " - cancel", function() {
      try {
        d && Ts(d);
        var h = l.return(void 0), v = Promise.resolve(h.value);
        v.then(tr, tr), Ts(v), f(new rc());
      } catch (_) {
        f(_);
      }
    }), p;
  };
  return i.isMobXFlow = !0, i;
}, mo);
lr.bound = /* @__PURE__ */ ut(kh);
function Ts(e) {
  we(e.cancel) && e.cancel();
}
function Rr(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function Rh(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (Et(e) || Jr(e)) ? P("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : Kt(e) ? e[$].values_.has(t) : !1 : Kt(e) || !!e[$] || zi(e) || Bn(e) || Qn(e) : !1;
}
function Dr(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && P("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), Rh(e);
}
function Dh() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var o = Ah(r);
    if (!o)
      return P("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    o.isTracing_ === Ke.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"), o.isTracing_ = e ? Ke.BREAK : Ke.LOG;
  }
}
function Ah(e) {
  switch (e.length) {
    case 0:
      return S.trackingDerivation;
    case 1:
      return kt(e[0]);
    case 2:
      return kt(e[0], e[1]);
  }
}
function ht(e, t) {
  t === void 0 && (t = void 0), $e();
  try {
    return e.apply(t);
  } finally {
    We();
  }
}
function Pt(e) {
  return e[$];
}
var Ph = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && S.trackingDerivation && Er("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Pt(t).has_(r);
  },
  get: function(t, r) {
    return Pt(t).get_(r);
  },
  set: function(t, r, n) {
    var o;
    return qt(r) ? (process.env.NODE_ENV !== "production" && !Pt(t).values_.has(r) && Er("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (o = Pt(t).set_(r, n, !0)) != null ? o : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && Er("delete properties from an observable object. Use 'remove' from 'mobx' instead."), qt(r) ? (n = Pt(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var o;
    return process.env.NODE_ENV !== "production" && Er("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (o = Pt(t).defineProperty_(r, n)) != null ? o : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && S.trackingDerivation && Er("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Pt(t).ownKeys_();
  },
  preventExtensions: function(t) {
    P(13);
  }
};
function Bh(e, t) {
  var r, n;
  return _u(), e = Jt(e, t), (n = (r = e[$]).proxy_) != null ? n : r.proxy_ = new Proxy(e, Ph);
}
function qe(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Yr(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), ji(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Ue(e, t) {
  var r = Xt();
  try {
    for (var n = [].concat(e.interceptors_ || []), o = 0, i = n.length; o < i && (t = n[o](t), t && !t.type && P(14), !!t); o++)
      ;
    return t;
  } finally {
    pt(r);
  }
}
function Ze(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Xr(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), ji(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function et(e, t) {
  var r = Xt(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var o = 0, i = n.length; o < i; o++)
      n[o](t);
    pt(r);
  }
}
function Ih(e, t, r) {
  return Rt(function() {
    var n, o = Jt(e, r)[$];
    process.env.NODE_ENV !== "production" && t && e[Pe] && P("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (n = t) != null || (t = cd(e)), cr(t).forEach(function(i) {
      return o.make_(i, t[i]);
    });
  }), e;
}
var bo = /* @__PURE__ */ Symbol("mobx-keys");
function Ui(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!Ie(e) && !Ie(Object.getPrototypeOf(e)) && P("'makeAutoObservable' can only be used for classes that don't have a superclass"), Kt(e) && P("makeAutoObservable can only be used on objects not already made observable")), Ie(e) ? Zu(e, e, t, r) : (Rt(function() {
    var n = Jt(e, r)[$];
    if (!e[bo]) {
      var o = Object.getPrototypeOf(e), i = new Set([].concat(cr(e), cr(o)));
      i.delete("constructor"), i.delete($), Ur(o, bo, i);
    }
    e[bo].forEach(function(s) {
      return n.make_(
        s,
        // must pass "undefined" for { key: undefined }
        t && s in t ? t[s] : !0
      );
    });
  }), e);
}
var Ns = "splice", Qe = "update", Fh = 1e4, jh = {
  get: function(t, r) {
    var n = t[$];
    return r === $ ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : He(In, r) ? In[r] : t[r];
  },
  set: function(t, r, n) {
    var o = t[$];
    return r === "length" && o.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : o.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    P(15);
  }
}, $i = /* @__PURE__ */ function() {
  function e(r, n, o, i) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + tt() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new Hr(r), this.enhancer_ = function(s, a) {
      return n(s, a, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return Yr(this, n);
  }, t.observe_ = function(n, o) {
    return o === void 0 && (o = !1), o && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Xr(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && P("Out of range: " + n);
    var o = this.values_.length;
    if (n !== o)
      if (n > o) {
        for (var i = new Array(n - o), s = 0; s < n - o; s++)
          i[s] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(n, o - n);
  }, t.updateArrayLength_ = function(n, o) {
    n !== this.lastKnownLength_ && P(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && dc(n + o + 1);
  }, t.spliceWithArray_ = function(n, o, i) {
    var s = this;
    it(this.atom_);
    var a = this.values_.length;
    if (n === void 0 ? n = 0 : n > a ? n = a : n < 0 && (n = Math.max(0, a + n)), arguments.length === 1 ? o = a - n : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - n)), i === void 0 && (i = kn), qe(this)) {
      var u = Ue(this, {
        object: this.proxy_,
        type: Ns,
        index: n,
        removedCount: o,
        added: i
      });
      if (!u)
        return kn;
      o = u.removedCount, i = u.added;
    }
    if (i = i.length === 0 ? i : i.map(function(f) {
      return s.enhancer_(f, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = i.length - o;
      this.updateArrayLength_(a, c);
    }
    var l = this.spliceItemsIntoValues_(n, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(n, i, l), this.dehanceValues_(l);
  }, t.spliceItemsIntoValues_ = function(n, o, i) {
    if (i.length < Fh) {
      var s;
      return (s = this.values_).splice.apply(s, [n, o].concat(i));
    } else {
      var a = this.values_.slice(n, n + o), u = this.values_.slice(n + o);
      this.values_.length += i.length - o;
      for (var c = 0; c < i.length; c++)
        this.values_[n + c] = i[c];
      for (var l = 0; l < u.length; l++)
        this.values_[n + i.length + l] = u[l];
      return a;
    }
  }, t.notifyArrayChildUpdate_ = function(n, o, i) {
    var s = !this.owned_ && ke(), a = Ze(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: Qe,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: o,
      oldValue: i
    } : null;
    process.env.NODE_ENV !== "production" && s && Fe(u), this.atom_.reportChanged(), a && et(this, u), process.env.NODE_ENV !== "production" && s && je();
  }, t.notifyArraySplice_ = function(n, o, i) {
    var s = !this.owned_ && ke(), a = Ze(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Ns,
      index: n,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    process.env.NODE_ENV !== "production" && s && Fe(u), this.atom_.reportChanged(), a && et(this, u), process.env.NODE_ENV !== "production" && s && je();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, o) {
    var i = this.values_;
    if (this.legacyMode_ && n > i.length && P(17, n, i.length), n < i.length) {
      it(this.atom_);
      var s = i[n];
      if (qe(this)) {
        var a = Ue(this, {
          type: Qe,
          object: this.proxy_,
          index: n,
          newValue: o
        });
        if (!a)
          return;
        o = a.newValue;
      }
      o = this.enhancer_(o, s);
      var u = o !== s;
      u && (i[n] = o, this.notifyArrayChildUpdate_(n, o, s));
    } else {
      for (var c = new Array(n + 1 - i.length), l = 0; l < c.length - 1; l++)
        c[l] = void 0;
      c[c.length - 1] = o, this.spliceWithArray_(i.length, 0, c);
    }
  }, e;
}();
function Mh(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + tt() : "ObservableArray"), n === void 0 && (n = !1), _u(), Rt(function() {
    var o = new $i(r, t, n, !1);
    Eu(o.values_, $, o);
    var i = new Proxy(o.values_, jh);
    return o.proxy_ = i, e && e.length && o.spliceWithArray_(0, 0, e), i;
  });
}
var In = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[$];
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
    for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
      o[i - 2] = arguments[i];
    var s = this[$];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(t);
      case 2:
        return s.spliceWithArray_(t, r);
    }
    return s.spliceWithArray_(t, r, o);
  },
  spliceWithArray: function(t, r, n) {
    return this[$].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[$], r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[$], r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return S.trackingDerivation && P(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    S.trackingDerivation && P(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[$], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
ce("at", Le);
ce("concat", Le);
ce("flat", Le);
ce("includes", Le);
ce("indexOf", Le);
ce("join", Le);
ce("lastIndexOf", Le);
ce("slice", Le);
ce("toString", Le);
ce("toLocaleString", Le);
ce("toSorted", Le);
ce("toSpliced", Le);
ce("with", Le);
ce("every", rt);
ce("filter", rt);
ce("find", rt);
ce("findIndex", rt);
ce("findLast", rt);
ce("findLastIndex", rt);
ce("flatMap", rt);
ce("forEach", rt);
ce("map", rt);
ce("some", rt);
ce("toReversed", rt);
ce("reduce", nc);
ce("reduceRight", nc);
function ce(e, t) {
  typeof Array.prototype[e] == "function" && (In[e] = t(e));
}
function Le(e) {
  return function() {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function rt(e) {
  return function(t, r) {
    var n = this, o = this[$];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(s, a) {
      return t.call(r, s, a, n);
    });
  };
}
function nc(e) {
  return function() {
    var t = this, r = this[$];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, t);
    }, n[e].apply(n, arguments);
  };
}
var zh = /* @__PURE__ */ Yt("ObservableArrayAdministration", $i);
function Jr(e) {
  return Wn(e) && zh(e[$]);
}
var oc, ic, Lh = {}, Ct = "add", Fn = "delete";
oc = Symbol.iterator;
ic = Symbol.toStringTag;
var sc = /* @__PURE__ */ function() {
  function e(r, n, o) {
    var i = this;
    n === void 0 && (n = Ut), o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableMap@" + tt() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[$] = Lh, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = o, we(Map) || P(18), Rt(function() {
      i.keysAtom_ = Su(process.env.NODE_ENV !== "production" ? i.name_ + ".keys()" : "ObservableMap.keys()"), i.data_ = /* @__PURE__ */ new Map(), i.hasMap_ = /* @__PURE__ */ new Map(), r && i.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var o = this;
    if (!S.trackingDerivation)
      return this.has_(n);
    var i = this.hasMap_.get(n);
    if (!i) {
      var s = i = new Mt(this.has_(n), Kn, process.env.NODE_ENV !== "production" ? this.name_ + "." + Zo(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, s), Ju(s, function() {
        return o.hasMap_.delete(n);
      });
    }
    return i.get();
  }, t.set = function(n, o) {
    var i = this.has_(n);
    if (qe(this)) {
      var s = Ue(this, {
        type: i ? Qe : Ct,
        object: this,
        newValue: o,
        name: n
      });
      if (!s)
        return this;
      o = s.newValue;
    }
    return i ? this.updateValue_(n, o) : this.addValue_(n, o), this;
  }, t.delete = function(n) {
    var o = this;
    if (it(this.keysAtom_), qe(this)) {
      var i = Ue(this, {
        type: Fn,
        object: this,
        name: n
      });
      if (!i)
        return !1;
    }
    if (this.has_(n)) {
      var s = ke(), a = Ze(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && s && Fe(u), ht(function() {
        var c;
        o.keysAtom_.reportChanged(), (c = o.hasMap_.get(n)) == null || c.setNewValue_(!1);
        var l = o.data_.get(n);
        l.setNewValue_(void 0), o.data_.delete(n);
      }), a && et(this, u), process.env.NODE_ENV !== "production" && s && je(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, o) {
    var i = this.data_.get(n);
    if (o = i.prepareNewValue_(o), o !== S.UNCHANGED) {
      var s = ke(), a = Ze(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Qe,
        object: this,
        oldValue: i.value_,
        name: n,
        newValue: o
      } : null;
      process.env.NODE_ENV !== "production" && s && Fe(u), i.setNewValue_(o), a && et(this, u), process.env.NODE_ENV !== "production" && s && je();
    }
  }, t.addValue_ = function(n, o) {
    var i = this;
    it(this.keysAtom_), ht(function() {
      var c, l = new Mt(o, i.enhancer_, process.env.NODE_ENV !== "production" ? i.name_ + "." + Zo(n) : "ObservableMap.key", !1);
      i.data_.set(n, l), o = l.value_, (c = i.hasMap_.get(n)) == null || c.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var s = ke(), a = Ze(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Ct,
      object: this,
      name: n,
      newValue: o
    } : null;
    process.env.NODE_ENV !== "production" && s && Fe(u), a && et(this, u), process.env.NODE_ENV !== "production" && s && je();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, o = this.keys();
    return Ar({
      next: function() {
        var s = o.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : n.get(u)
        };
      }
    });
  }, t.entries = function() {
    var n = this, o = this.keys();
    return Ar({
      next: function() {
        var s = o.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : [u, n.get(u)]
        };
      }
    });
  }, t[oc] = function() {
    return this.entries();
  }, t.forEach = function(n, o) {
    for (var i = rr(this), s; !(s = i()).done; ) {
      var a = s.value, u = a[0], c = a[1];
      n.call(o, c, u, this);
    }
  }, t.merge = function(n) {
    var o = this;
    return Et(n) && (n = new Map(n)), ht(function() {
      Ie(n) ? nd(n).forEach(function(i) {
        return o.set(i, n[i]);
      }) : Array.isArray(n) ? n.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : vr(n) ? (n.constructor !== Map && P(19, n), n.forEach(function(i, s) {
        return o.set(s, i);
      })) : n != null && P(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    ht(function() {
      Mu(function() {
        for (var o = rr(n.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          n.delete(s);
        }
      });
    });
  }, t.replace = function(n) {
    var o = this;
    return ht(function() {
      for (var i = Vh(n), s = /* @__PURE__ */ new Map(), a = !1, u = rr(o.data_.keys()), c; !(c = u()).done; ) {
        var l = c.value;
        if (!i.has(l)) {
          var f = o.delete(l);
          if (f)
            a = !0;
          else {
            var d = o.data_.get(l);
            s.set(l, d);
          }
        }
      }
      for (var p = rr(i.entries()), h; !(h = p()).done; ) {
        var v = h.value, _ = v[0], m = v[1], w = o.data_.has(_);
        if (o.set(_, m), o.data_.has(_)) {
          var b = o.data_.get(_);
          s.set(_, b), w || (a = !0);
        }
      }
      if (!a)
        if (o.data_.size !== s.size)
          o.keysAtom_.reportChanged();
        else
          for (var E = o.data_.keys(), y = s.keys(), N = E.next(), B = y.next(); !N.done; ) {
            if (N.value !== B.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            N = E.next(), B = y.next();
          }
      o.data_ = s;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, o) {
    return process.env.NODE_ENV !== "production" && o === !0 && P("`observe` doesn't support fireImmediately=true in combination with maps."), Xr(this, n);
  }, t.intercept_ = function(n) {
    return Yr(this, n);
  }, Mi(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ic,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Et = /* @__PURE__ */ Yt("ObservableMap", sc);
function Vh(e) {
  if (vr(e) || Et(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (Ie(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return P(21, e);
}
var ac, uc, qh = {};
ac = Symbol.iterator;
uc = Symbol.toStringTag;
var cc = /* @__PURE__ */ function() {
  function e(r, n, o) {
    var i = this;
    n === void 0 && (n = Ut), o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableSet@" + tt() : "ObservableSet"), this.name_ = void 0, this[$] = qh, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, we(Set) || P(22), this.enhancer_ = function(s, a) {
      return n(s, a, o);
    }, Rt(function() {
      i.atom_ = Su(i.name_), r && i.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    ht(function() {
      Mu(function() {
        for (var o = rr(n.data_.values()), i; !(i = o()).done; ) {
          var s = i.value;
          n.delete(s);
        }
      });
    });
  }, t.forEach = function(n, o) {
    for (var i = rr(this), s; !(s = i()).done; ) {
      var a = s.value;
      n.call(o, a, a, this);
    }
  }, t.add = function(n) {
    var o = this;
    if (it(this.atom_), qe(this)) {
      var i = Ue(this, {
        type: Ct,
        object: this,
        newValue: n
      });
      if (!i)
        return this;
    }
    if (!this.has(n)) {
      ht(function() {
        o.data_.add(o.enhancer_(n, void 0)), o.atom_.reportChanged();
      });
      var s = process.env.NODE_ENV !== "production" && ke(), a = Ze(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Ct,
        object: this,
        newValue: n
      } : null;
      s && process.env.NODE_ENV !== "production" && Fe(u), a && et(this, u), s && process.env.NODE_ENV !== "production" && je();
    }
    return this;
  }, t.delete = function(n) {
    var o = this;
    if (qe(this)) {
      var i = Ue(this, {
        type: Fn,
        object: this,
        oldValue: n
      });
      if (!i)
        return !1;
    }
    if (this.has(n)) {
      var s = process.env.NODE_ENV !== "production" && ke(), a = Ze(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        oldValue: n
      } : null;
      return s && process.env.NODE_ENV !== "production" && Fe(u), ht(function() {
        o.atom_.reportChanged(), o.data_.delete(n);
      }), a && et(this, u), s && process.env.NODE_ENV !== "production" && je(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return Ar({
      next: function() {
        var a = n;
        return n += 1, a < i.length ? {
          value: [o[a], i[a]],
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
    var n = this, o = 0, i = Array.from(this.data_.values());
    return Ar({
      next: function() {
        return o < i.length ? {
          value: n.dehanceValue_(i[o++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var o = this;
    return br(n) && (n = new Set(n)), ht(function() {
      Array.isArray(n) ? (o.clear(), n.forEach(function(i) {
        return o.add(i);
      })) : $r(n) ? (o.clear(), n.forEach(function(i) {
        return o.add(i);
      })) : n != null && P("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, o) {
    return process.env.NODE_ENV !== "production" && o === !0 && P("`observe` doesn't support fireImmediately=true in combination with sets."), Xr(this, n);
  }, t.intercept_ = function(n) {
    return Yr(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[ac] = function() {
    return this.values();
  }, Mi(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: uc,
    get: function() {
      return "Set";
    }
  }]), e;
}(), br = /* @__PURE__ */ Yt("ObservableSet", cc), Cs = /* @__PURE__ */ Object.create(null), ks = "remove", ui = /* @__PURE__ */ function() {
  function e(r, n, o, i) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), i === void 0 && (i = Bd), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new Hr(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = Ie(this.target_), process.env.NODE_ENV !== "production" && !hc(this.defaultAnnotation_) && P("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, o) {
    var i = this.values_.get(n);
    if (i instanceof Wt)
      return i.set(o), !0;
    if (qe(this)) {
      var s = Ue(this, {
        type: Qe,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: o
      });
      if (!s)
        return null;
      o = s.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== S.UNCHANGED) {
      var a = Ze(this), u = process.env.NODE_ENV !== "production" && ke(), c = a || u ? {
        type: Qe,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: n,
        newValue: o
      } : null;
      process.env.NODE_ENV !== "production" && u && Fe(c), i.setNewValue_(o), a && et(this, c), process.env.NODE_ENV !== "production" && u && je();
    }
    return !0;
  }, t.get_ = function(n) {
    return S.trackingDerivation && !He(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, o, i) {
    return i === void 0 && (i = !1), He(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, o) : i ? Reflect.set(this.target_, n, o) : (this.target_[n] = o, !0) : this.extend_(n, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, t.has_ = function(n) {
    if (!S.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var o = this.pendingKeys_.get(n);
    return o || (o = new Mt(n in this.target_, Kn, process.env.NODE_ENV !== "production" ? this.name_ + "." + Zo(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, o)), o.get();
  }, t.make_ = function(n, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (As(this, o, n), !(n in this.target_)) {
        var i;
        if ((i = this.target_[Pe]) != null && i[n])
          return;
        P(1, o.annotationType_, this.name_ + "." + n.toString());
      }
      for (var s = this.target_; s && s !== $n; ) {
        var a = Cn(s, n);
        if (a) {
          var u = o.make_(this, n, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      Ds(this, o, n);
    }
  }, t.extend_ = function(n, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(n, o, s);
    As(this, i, n);
    var a = i.extend_(this, n, o, s);
    return a && Ds(this, i, n), a;
  }, t.defineProperty_ = function(n, o, i) {
    i === void 0 && (i = !1), it(this.keysAtom_);
    try {
      $e();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (qe(this)) {
        var a = Ue(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Ct,
          newValue: o.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        o.value !== u && (o = bt({}, o, {
          value: u
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, n, o))
          return !1;
      } else
        at(this.target_, n, o);
      this.notifyPropertyAddition_(n, o.value);
    } finally {
      We();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, o, i, s) {
    s === void 0 && (s = !1), it(this.keysAtom_);
    try {
      $e();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (qe(this)) {
        var u = Ue(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Ct,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var c = Rs(n), l = {
        configurable: S.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, n, l))
          return !1;
      } else
        at(this.target_, n, l);
      var f = new Mt(o, i, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, f), this.notifyPropertyAddition_(n, f.value_);
    } finally {
      We();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, o, i) {
    i === void 0 && (i = !1), it(this.keysAtom_);
    try {
      $e();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (qe(this)) {
        var a = Ue(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Ct,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = Rs(n), c = {
        configurable: S.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        at(this.target_, n, c);
      this.values_.set(n, new Wt(o)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      We();
    }
    return !0;
  }, t.delete_ = function(n, o) {
    if (o === void 0 && (o = !1), it(this.keysAtom_), !He(this.target_, n))
      return !0;
    if (qe(this)) {
      var i = Ue(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: ks
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      $e();
      var u = Ze(this), c = process.env.NODE_ENV !== "production" && ke(), l = this.values_.get(n), f = void 0;
      if (!l && (u || c)) {
        var d;
        f = (d = Cn(this.target_, n)) == null ? void 0 : d.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], l && (this.values_.delete(n), l instanceof Mt && (f = l.value_), $u(l)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(n)) == null || a.set(n in this.target_), u || c) {
        var p = {
          type: ks,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: f,
          name: n
        };
        process.env.NODE_ENV !== "production" && c && Fe(p), u && et(this, p), process.env.NODE_ENV !== "production" && c && je();
      }
    } finally {
      We();
    }
    return !0;
  }, t.observe_ = function(n, o) {
    return process.env.NODE_ENV !== "production" && o === !0 && P("`observe` doesn't support the fire immediately property for observable objects."), Xr(this, n);
  }, t.intercept_ = function(n) {
    return Yr(this, n);
  }, t.notifyPropertyAddition_ = function(n, o) {
    var i, s, a = Ze(this), u = process.env.NODE_ENV !== "production" && ke();
    if (a || u) {
      var c = a || u ? {
        type: Ct,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: o
      } : null;
      process.env.NODE_ENV !== "production" && u && Fe(c), a && et(this, c), process.env.NODE_ENV !== "production" && u && je();
    }
    (i = this.pendingKeys_) == null || (s = i.get(n)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), cr(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Jt(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && Kt(e) && P("Options can't be provided for already observable objects."), He(e, $))
    return process.env.NODE_ENV !== "production" && !(Hi(e) instanceof ui) && P("Cannot convert '" + jn(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && P("Cannot make the designated object observable; it is not extensible");
  var n = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (Ie(e) ? "ObservableObject" : e.constructor.name) + "@" + tt() : "ObservableObject", o = new ui(e, /* @__PURE__ */ new Map(), String(n), Wd(t));
  return Ur(e, $, o), e;
}
var Uh = /* @__PURE__ */ Yt("ObservableObjectAdministration", ui);
function Rs(e) {
  return Cs[e] || (Cs[e] = {
    get: function() {
      return this[$].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[$].setObservablePropValue_(e, r);
    }
  });
}
function Kt(e) {
  return Wn(e) ? Uh(e[$]) : !1;
}
function Ds(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[Pe]) == null || delete n[r];
}
function As(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !hc(t) && P("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !Dn(t) && He(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), o = e.appliedAnnotations_[r].annotationType_, i = t.annotationType_;
    P("Cannot apply '" + i + "' to '" + n + "':" + (`
The field is already annotated with '` + o + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var $h = /* @__PURE__ */ fc(0), Wh = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), go = 0, lc = function() {
};
function Hh(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
Hh(lc, Array.prototype);
var Wi = /* @__PURE__ */ function(e, t, r) {
  Ou(n, e);
  function n(i, s, a, u) {
    var c;
    return a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableArray@" + tt() : "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this, Rt(function() {
      var l = new $i(a, s, u, !0);
      l.proxy_ = bn(c), Eu(bn(c), $, l), i && i.length && c.spliceWithArray(0, 0, i), Wh && Object.defineProperty(bn(c), "0", $h);
    }), c;
  }
  var o = n.prototype;
  return o.concat = function() {
    this[$].atom_.reportObserved();
    for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(c) {
        return Jr(c) ? c.slice() : c;
      })
    );
  }, o[r] = function() {
    var i = this, s = 0;
    return Ar({
      next: function() {
        return s < i.length ? {
          value: i[s++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, Mi(n, [{
    key: "length",
    get: function() {
      return this[$].getArrayLength_();
    },
    set: function(s) {
      this[$].setArrayLength_(s);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}(lc, Symbol.toStringTag, Symbol.iterator);
Object.entries(In).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && Ur(Wi.prototype, t, r);
});
function fc(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[$].get_(e);
    },
    set: function(r) {
      this[$].set_(e, r);
    }
  };
}
function Kh(e) {
  at(Wi.prototype, "" + e, fc(e));
}
function dc(e) {
  if (e > go) {
    for (var t = go; t < e + 100; t++)
      Kh(t);
    go = e;
  }
}
dc(1e3);
function Gh(e, t, r) {
  return new Wi(e, t, r);
}
function kt(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Jr(e))
      return t !== void 0 && P(23), e[$].atom_;
    if (br(e))
      return e.atom_;
    if (Et(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || P(25, t, jn(e)), r;
    }
    if (Kt(e)) {
      if (!t)
        return P(26);
      var n = e[$].values_.get(t);
      return n || P(27, t, jn(e)), n;
    }
    if (zi(e) || Qn(e) || Bn(e))
      return e;
  } else if (we(e) && Bn(e[$]))
    return e[$];
  P(28);
}
function Hi(e, t) {
  if (e || P(29), t !== void 0)
    return Hi(kt(e, t));
  if (zi(e) || Qn(e) || Bn(e) || Et(e) || br(e))
    return e;
  if (e[$])
    return e[$];
  P(24, e);
}
function jn(e, t) {
  var r;
  if (t !== void 0)
    r = kt(e, t);
  else {
    if (Gr(e))
      return e.name;
    Kt(e) || Et(e) || br(e) ? r = Hi(e) : r = kt(e);
  }
  return r.name_;
}
function Rt(e) {
  var t = Xt(), r = Xn(!0);
  $e();
  try {
    return e();
  } finally {
    We(), Jn(r), pt(t);
  }
}
var Ps = $n.toString;
function Ki(e, t, r) {
  return r === void 0 && (r = -1), ci(e, t, r);
}
function ci(e, t, r, n, o) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object")
    return !1;
  var s = Ps.call(e);
  if (s !== Ps.call(t))
    return !1;
  switch (s) {
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
  e = Bs(e), t = Bs(t);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, c = t.constructor;
    if (u !== c && !(we(u) && u instanceof u && we(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], o = o || [];
  for (var l = n.length; l--; )
    if (n[l] === e)
      return o[l] === t;
  if (n.push(e), o.push(t), a) {
    if (l = e.length, l !== t.length)
      return !1;
    for (; l--; )
      if (!ci(e[l], t[l], r - 1, n, o))
        return !1;
  } else {
    var f = Object.keys(e), d;
    if (l = f.length, Object.keys(t).length !== l)
      return !1;
    for (; l--; )
      if (d = f[l], !(He(t, d) && ci(e[d], t[d], r - 1, n, o)))
        return !1;
  }
  return n.pop(), o.pop(), !0;
}
function Bs(e) {
  return Jr(e) ? e.slice() : vr(e) || Et(e) || $r(e) || br(e) ? Array.from(e.entries()) : e;
}
function Ar(e) {
  return e[Symbol.iterator] = Yh, e;
}
function Yh() {
  return this;
}
function hc(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && we(e.make_) && we(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Fi();
  typeof t[e] > "u" && P("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: hh,
  extras: {
    getDebugName: jn
  },
  $mobx: $
});
if (!eu)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ih)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Xh(e) {
  e();
}
function Jh(e) {
  e || (e = Xh, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), Th({ reactionScheduler: e });
}
function Qh(e) {
  return ec(e);
}
var Zh = 1e4, ep = 1e4, tp = (
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
        value: function(n) {
          n === void 0 && (n = Zh), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var o = Date.now();
          r.registrations.forEach(function(i, s) {
            o - i.registeredAt >= n && (r.finalize(i.value), r.registrations.delete(s));
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
      value: function(t, r, n) {
        this.registrations.set(n, {
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, ep));
      }
    }), e;
  }()
), rp = typeof FinalizationRegistry < "u" ? FinalizationRegistry : tp, Pr = new rp(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
});
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var li = { exports: {} }, _o = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function op() {
  if (Is)
    return _o;
  Is = 1;
  var e = ot;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(f, d) {
    var p = d(), h = n({ inst: { value: p, getSnapshot: d } }), v = h[0].inst, _ = h[1];
    return i(function() {
      v.value = p, v.getSnapshot = d, u(v) && _({ inst: v });
    }, [f, p, d]), o(function() {
      return u(v) && _({ inst: v }), f(function() {
        u(v) && _({ inst: v });
      });
    }, [f]), s(p), p;
  }
  function u(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var p = d();
      return !r(f, p);
    } catch {
      return !0;
    }
  }
  function c(f, d) {
    return d();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return _o.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, _o;
}
var yo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function ip() {
  return Fs || (Fs = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ot, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(b) {
      {
        for (var E = arguments.length, y = new Array(E > 1 ? E - 1 : 0), N = 1; N < E; N++)
          y[N - 1] = arguments[N];
        n("error", b, y);
      }
    }
    function n(b, E, y) {
      {
        var N = t.ReactDebugCurrentFrame, B = N.getStackAddendum();
        B !== "" && (E += "%s", y = y.concat([B]));
        var R = y.map(function(j) {
          return String(j);
        });
        R.unshift("Warning: " + E), Function.prototype.apply.call(console[b], console, R);
      }
    }
    function o(b, E) {
      return b === E && (b !== 0 || 1 / b === 1 / E) || b !== b && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, a = e.useEffect, u = e.useLayoutEffect, c = e.useDebugValue, l = !1, f = !1;
    function d(b, E, y) {
      l || e.startTransition !== void 0 && (l = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = E();
      if (!f) {
        var B = E();
        i(N, B) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var R = s({
        inst: {
          value: N,
          getSnapshot: E
        }
      }), j = R[0].inst, V = R[1];
      return u(function() {
        j.value = N, j.getSnapshot = E, p(j) && V({
          inst: j
        });
      }, [b, N, E]), a(function() {
        p(j) && V({
          inst: j
        });
        var re = function() {
          p(j) && V({
            inst: j
          });
        };
        return b(re);
      }, [b]), c(N), N;
    }
    function p(b) {
      var E = b.getSnapshot, y = b.value;
      try {
        var N = E();
        return !i(y, N);
      } catch {
        return !0;
      }
    }
    function h(b, E, y) {
      return E();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _ = !v, m = _ ? h : d, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m;
    yo.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yo;
}
process.env.NODE_ENV === "production" ? li.exports = op() : li.exports = ip();
var sp = li.exports;
function js(e) {
  e.reaction = new Cr("observer".concat(e.name), function() {
    var t;
    e.stateVersion = Symbol(), (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function ap(e, t) {
  t === void 0 && (t = "observed");
  var r = ot.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function(a) {
        return Pr.unregister(n), n.onStoreChange = a, n.reaction || (js(n), n.stateVersion = Symbol()), function() {
          var u;
          n.onStoreChange = null, (u = n.reaction) === null || u === void 0 || u.dispose(), n.reaction = null;
        };
      },
      getSnapshot: function() {
        return n.stateVersion;
      }
    };
    r.current = n;
  }
  var o = r.current;
  o.reaction || (js(o), Pr.register(r, o, o)), ot.useDebugValue(o.reaction, Qh), sp.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    o.subscribe,
    o.getSnapshot,
    o.getSnapshot
  );
  var i, s;
  if (o.reaction.track(function() {
    try {
      i = e();
    } catch (a) {
      s = a;
    }
  }), s)
    throw s;
  return i;
}
var Eo, wo, Ms = !0, pc = typeof Symbol == "function" && Symbol.for, up = (wo = (Eo = Object.getOwnPropertyDescriptor(function() {
}, "name")) === null || Eo === void 0 ? void 0 : Eo.configurable) !== null && wo !== void 0 ? wo : !1, zs = pc ? Symbol.for("react.forward_ref") : typeof Go == "function" && Go(function(e) {
  return null;
}).$$typeof, Ls = pc ? Symbol.for("react.memo") : typeof Yo == "function" && Yo(function(e) {
  return null;
}).$$typeof;
function cp(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && Ms && t && (Ms = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), Ls && e.$$typeof === Ls)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var n = (r = t == null ? void 0 : t.forwardRef) !== null && r !== void 0 ? r : !1, o = e, i = e.displayName || e.name;
  if (zs && e.$$typeof === zs && (n = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, u) {
    return ap(function() {
      return o(a, u);
    }, i);
  };
  return s.displayName = e.displayName, up && Object.defineProperty(s, "name", {
    value: e.name,
    writable: !0,
    configurable: !0
  }), e.contextTypes && (s.contextTypes = e.contextTypes), n && (s = Go(s)), s = Yo(s), fp(e, s), process.env.NODE_ENV !== "production" && Object.defineProperty(s, "contextTypes", {
    set: function() {
      var a, u;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((a = this.type) === null || a === void 0 ? void 0 : a.displayName) || ((u = this.type) === null || u === void 0 ? void 0 : u.name) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), s;
}
var lp = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function fp(e, t) {
  Object.keys(e).forEach(function(r) {
    lp[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
process.env.NODE_ENV;
var xo;
Jh(lf);
xo = Pr.finalizeAllImmediately;
function dp(e, t) {
  if (Vs(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (var o = 0; o < r.length; o++)
    if (!Object.hasOwnProperty.call(t, r[o]) || !Vs(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function Vs(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var qs = /* @__PURE__ */ Symbol("patchMixins"), vc = /* @__PURE__ */ Symbol("patchedDefinition");
function hp(e, t) {
  var r = e[qs] = e[qs] || {}, n = r[t] = r[t] || {};
  return n.locks = n.locks || 0, n.methods = n.methods || [], n;
}
function Us(e, t) {
  for (var r = this, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    o[i - 2] = arguments[i];
  t.locks++;
  try {
    var s;
    return e != null && (s = e.apply(this, o)), s;
  } finally {
    t.locks--, t.locks === 0 && t.methods.forEach(function(a) {
      a.apply(r, o);
    });
  }
}
function $s(e, t) {
  var r = function() {
    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    Us.call.apply(Us, [this, e, t].concat(i));
  };
  return r;
}
function pp(e, t, r) {
  var n = hp(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var o = Object.getOwnPropertyDescriptor(e, t);
  if (!(o && o[vc])) {
    var i = e[t], s = mc(e, t, o ? o.enumerable : void 0, n, i);
    Object.defineProperty(e, t, s);
  }
}
function mc(e, t, r, n, o) {
  var i, s = $s(o, n);
  return i = {}, i[vc] = !0, i.get = function() {
    return s;
  }, i.set = function(u) {
    if (this === e)
      s = $s(u, n);
    else {
      var c = mc(this, t, r, n, u);
      Object.defineProperty(this, t, c);
    }
  }, i.configurable = !0, i.enumerable = r, i;
}
var Ws = /* @__PURE__ */ Symbol("ObserverAdministration"), Hs = /* @__PURE__ */ Symbol("isMobXReactObserver"), bc;
process.env.NODE_ENV !== "production" && (bc = {
  props: /* @__PURE__ */ Oo("props"),
  state: /* @__PURE__ */ Oo("state"),
  context: /* @__PURE__ */ Oo("context")
});
function Br(e) {
  var t;
  return (t = e[Ws]) != null ? t : e[Ws] = {
    reaction: null,
    mounted: !1,
    reactionInvalidatedBeforeMount: !1,
    forceUpdate: null,
    name: En(e.constructor),
    state: void 0,
    props: void 0,
    context: void 0
  };
}
function vp(e) {
  var t = e.prototype;
  if (e[Hs]) {
    var r = En(e);
    throw new Error("The provided component class (" + r + ") has already been declared as an observer component.");
  } else
    e[Hs] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== ru) {
    if (!t.shouldComponentUpdate)
      t.shouldComponentUpdate = Ks;
    else if (t.shouldComponentUpdate !== Ks)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  process.env.NODE_ENV !== "production" && Object.defineProperties(t, bc);
  var n = t.render;
  if (typeof n != "function") {
    var o = En(e);
    throw new Error("[mobx-react] class component (" + o + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  t.render = function() {
    return Object.defineProperty(this, "render", {
      // There is no safe way to replace render, therefore it's forbidden.
      configurable: !1,
      writable: !1,
      value: mp.call(this, n)
    }), this.render();
  };
  var i = t.componentDidMount;
  return t.componentDidMount = function() {
    var s = this;
    if (process.env.NODE_ENV !== "production" && this.componentDidMount !== Object.getPrototypeOf(this).componentDidMount) {
      var a = En(e);
      throw new Error("[mobx-react] `observer(" + a + ").componentDidMount` must be defined on prototype.\n`componentDidMount = () => {}` or `componentDidMount = function() {}` is not supported.");
    }
    var u = Br(this);
    return u.mounted = !0, Pr.unregister(this), u.forceUpdate = function() {
      return s.forceUpdate();
    }, (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(), i == null ? void 0 : i.apply(this, arguments);
  }, pp(t, "componentWillUnmount", function() {
    var s, a = Br(this);
    (s = a.reaction) == null || s.dispose(), a.reaction = null, a.forceUpdate = null, a.mounted = !1, a.reactionInvalidatedBeforeMount = !1;
  }), e;
}
function En(e) {
  return e.displayName || e.name || "<component>";
}
function mp(e) {
  var t = e.bind(this), r = Br(this);
  function n() {
    r.reaction || (r.reaction = bp(r), r.mounted || Pr.register(this, r, this));
    var o = void 0, i = void 0;
    if (r.reaction.track(function() {
      try {
        i = eh(!1, t);
      } catch (s) {
        o = s;
      }
    }), o)
      throw o;
    return i;
  }
  return n;
}
function bp(e) {
  return new Cr(e.name + ".render()", function() {
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
function Ks(e, t) {
  return this.state !== t ? !0 : !dp(this.props, e);
}
function Oo(e) {
  return {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var r = Br(this), n = sh().trackingDerivation;
      if (n && n !== r.reaction)
        throw new Error('[mobx-react] Cannot read "' + r.name + "." + e + `" in a reactive context, as it isn't observable.
                    Please use component lifecycle method to copy the value into a local observable first.
                    See https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations`);
      return r[e];
    },
    set: function(r) {
      Br(this)[e] = r;
    }
  };
}
function gp(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(tu, e) || Object.prototype.isPrototypeOf.call(ru, e) ? vp(e) : cp(e);
}
ot.version.split(".")[0];
if (!tu)
  throw new Error("mobx-react requires React to be available");
if (!Se)
  throw new Error("mobx-react requires mobx to be available");
const _p = {};
class yp {
  constructor() {
    this.dialogIsVisible = !1, this.setDialogIsVisible = (t) => {
      this.dialogIsVisible = t;
    }, Ui(this);
  }
}
const Ep = 10;
class wp {
  constructor() {
    this.currentPage = 1, this.totalPages = 1, Ui(this);
  }
  setCurrentPage(t) {
    this.currentPage = t;
  }
  setTtotalPages(t) {
    const r = Math.max(1, Math.ceil(t / Ep));
    this.totalPages = t > 0 ? r : 1, this.currentPage > r && (this.currentPage = r);
  }
}
function gc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: xp } = Object.prototype, { getPrototypeOf: Gi } = Object, Zn = /* @__PURE__ */ ((e) => (t) => {
  const r = xp.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), lt = (e) => (e = e.toLowerCase(), (t) => Zn(t) === e), eo = (e) => (t) => typeof t === e, { isArray: gr } = Array, Ir = eo("undefined");
function Op(e) {
  return e !== null && !Ir(e) && e.constructor !== null && !Ir(e.constructor) && Ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _c = lt("ArrayBuffer");
function Sp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _c(e.buffer), t;
}
const Tp = eo("string"), Ge = eo("function"), yc = eo("number"), to = (e) => e !== null && typeof e == "object", Np = (e) => e === !0 || e === !1, wn = (e) => {
  if (Zn(e) !== "object")
    return !1;
  const t = Gi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Cp = lt("Date"), kp = lt("File"), Rp = lt("Blob"), Dp = lt("FileList"), Ap = (e) => to(e) && Ge(e.pipe), Pp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ge(e.append) && ((t = Zn(e)) === "formdata" || // detect form-data instance
  t === "object" && Ge(e.toString) && e.toString() === "[object FormData]"));
}, Bp = lt("URLSearchParams"), Ip = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), gr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (n = 0; n < s; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function Ec(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const wc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xc = (e) => !Ir(e) && e !== wc;
function fi() {
  const { caseless: e } = xc(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Ec(t, o) || o;
    wn(t[i]) && wn(n) ? t[i] = fi(t[i], n) : wn(n) ? t[i] = fi({}, n) : gr(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Qr(arguments[n], r);
  return t;
}
const Fp = (e, t, r, { allOwnKeys: n } = {}) => (Qr(t, (o, i) => {
  r && Ge(o) ? e[i] = gc(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), jp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Mp = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, zp = (e, t, r, n) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && Gi(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Lp = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Vp = (e) => {
  if (!e)
    return null;
  if (gr(e))
    return e;
  let t = e.length;
  if (!yc(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, qp = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Gi(Uint8Array)), Up = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, $p = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Wp = lt("HTMLFormElement"), Hp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Gs = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Kp = lt("RegExp"), Oc = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Qr(r, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (n[i] = s || o);
  }), Object.defineProperties(e, n);
}, Gp = (e) => {
  Oc(e, (t, r) => {
    if (Ge(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ge(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Yp = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return gr(e) ? n(e) : n(String(e).split(t)), r;
}, Xp = () => {
}, Jp = (e, t) => (e = +e, Number.isFinite(e) ? e : t), So = "abcdefghijklmnopqrstuvwxyz", Ys = "0123456789", Sc = {
  DIGIT: Ys,
  ALPHA: So,
  ALPHA_DIGIT: So + So.toUpperCase() + Ys
}, Qp = (e = 16, t = Sc.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Zp(e) {
  return !!(e && Ge(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ev = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (to(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = gr(n) ? [] : {};
        return Qr(n, (s, a) => {
          const u = r(s, o + 1);
          !Ir(u) && (i[a] = u);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, tv = lt("AsyncFunction"), rv = (e) => e && (to(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), O = {
  isArray: gr,
  isArrayBuffer: _c,
  isBuffer: Op,
  isFormData: Pp,
  isArrayBufferView: Sp,
  isString: Tp,
  isNumber: yc,
  isBoolean: Np,
  isObject: to,
  isPlainObject: wn,
  isUndefined: Ir,
  isDate: Cp,
  isFile: kp,
  isBlob: Rp,
  isRegExp: Kp,
  isFunction: Ge,
  isStream: Ap,
  isURLSearchParams: Bp,
  isTypedArray: qp,
  isFileList: Dp,
  forEach: Qr,
  merge: fi,
  extend: Fp,
  trim: Ip,
  stripBOM: jp,
  inherits: Mp,
  toFlatObject: zp,
  kindOf: Zn,
  kindOfTest: lt,
  endsWith: Lp,
  toArray: Vp,
  forEachEntry: Up,
  matchAll: $p,
  isHTMLForm: Wp,
  hasOwnProperty: Gs,
  hasOwnProp: Gs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Oc,
  freezeMethods: Gp,
  toObjectSet: Yp,
  toCamelCase: Hp,
  noop: Xp,
  toFiniteNumber: Jp,
  findKey: Ec,
  global: wc,
  isContextDefined: xc,
  ALPHABET: Sc,
  generateString: Qp,
  isSpecCompliantForm: Zp,
  toJSONObject: ev,
  isAsyncFn: tv,
  isThenable: rv
};
function Z(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
O.inherits(Z, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Tc = Z.prototype, Nc = {};
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
  Nc[e] = { value: e };
});
Object.defineProperties(Z, Nc);
Object.defineProperty(Tc, "isAxiosError", { value: !0 });
Z.from = (e, t, r, n, o, i) => {
  const s = Object.create(Tc);
  return O.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Z.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const nv = null;
function di(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function Cc(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xs(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Cc(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ov(e) {
  return O.isArray(e) && !e.some(di);
}
const iv = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ro(e, t, r) {
  if (!O.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = O.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, _) {
    return !O.isUndefined(_[v]);
  });
  const n = r.metaTokens, o = r.visitor || l, i = r.dots, s = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (O.isDate(h))
      return h.toISOString();
    if (!u && O.isBlob(h))
      throw new Z("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(h) || O.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, v, _) {
    let m = h;
    if (h && !_ && typeof h == "object") {
      if (O.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (O.isArray(h) && ov(h) || (O.isFileList(h) || O.endsWith(v, "[]")) && (m = O.toArray(h)))
        return v = Cc(v), m.forEach(function(b, E) {
          !(O.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Xs([v], E, i) : s === null ? v : v + "[]",
            c(b)
          );
        }), !1;
    }
    return di(h) ? !0 : (t.append(Xs(_, v, i), c(h)), !1);
  }
  const f = [], d = Object.assign(iv, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: di
  });
  function p(h, v) {
    if (!O.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(h), O.forEach(h, function(m, w) {
        (!(O.isUndefined(m) || m === null) && o.call(
          t,
          m,
          O.isString(w) ? w.trim() : w,
          v,
          d
        )) === !0 && p(m, v ? v.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!O.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Js(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Yi(e, t) {
  this._pairs = [], e && ro(e, this, t);
}
const kc = Yi.prototype;
kc.append = function(t, r) {
  this._pairs.push([t, r]);
};
kc.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Js);
  } : Js;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function sv(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rc(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || sv, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = O.isURLSearchParams(t) ? t.toString() : new Yi(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Qs {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    O.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Dc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, av = typeof URLSearchParams < "u" ? URLSearchParams : Yi, uv = typeof FormData < "u" ? FormData : null, cv = typeof Blob < "u" ? Blob : null, lv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: av,
    FormData: uv,
    Blob: cv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ac = typeof window < "u" && typeof document < "u", fv = ((e) => Ac && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), dv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ac,
  hasStandardBrowserEnv: fv,
  hasStandardBrowserWebWorkerEnv: dv
}, Symbol.toStringTag, { value: "Module" })), st = {
  ...hv,
  ...lv
};
function pv(e, t) {
  return ro(e, new st.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return st.isNode && O.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vv(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mv(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Pc(e) {
  function t(r, n, o, i) {
    let s = r[i++];
    if (s === "__proto__")
      return !0;
    const a = Number.isFinite(+s), u = i >= r.length;
    return s = !s && O.isArray(o) ? o.length : s, u ? (O.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !a) : ((!o[s] || !O.isObject(o[s])) && (o[s] = []), t(r, n, o[s], i) && O.isArray(o[s]) && (o[s] = mv(o[s])), !a);
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const r = {};
    return O.forEachEntry(e, (n, o) => {
      t(vv(n), o, r, 0);
    }), r;
  }
  return null;
}
function bv(e, t, r) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Xi = {
  transitional: Dc,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = O.isObject(t);
    if (i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return o ? JSON.stringify(Pc(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return pv(t, this.formSerializer).toString();
      if ((a = O.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ro(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), bv(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Xi.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && O.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? Z.from(a, Z.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: st.classes.FormData,
    Blob: st.classes.Blob
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Xi.headers[e] = {};
});
const Ji = Xi, gv = O.toObjectSet([
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
]), _v = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && gv[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Zs = Symbol("internals");
function wr(e) {
  return e && String(e).trim().toLowerCase();
}
function xn(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(xn) : String(e);
}
function yv(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ev = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function To(e, t, r, n, o) {
  if (O.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!O.isString(t)) {
    if (O.isString(n))
      return t.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(t);
  }
}
function wv(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function xv(e, t) {
  const r = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, s) {
        return this[n].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class no {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, u, c) {
      const l = wr(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = O.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || u] = xn(a));
    }
    const s = (a, u) => O.forEach(a, (c, l) => i(c, l, u));
    return O.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : O.isString(t) && (t = t.trim()) && !Ev(t) ? s(_v(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = wr(t), t) {
      const n = O.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return yv(o);
        if (O.isFunction(r))
          return r.call(this, o, n);
        if (O.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = wr(t), t) {
      const n = O.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || To(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = wr(s), s) {
        const a = O.findKey(n, s);
        a && (!r || To(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return O.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || To(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return O.forEach(this, (o, i) => {
      const s = O.findKey(n, i);
      if (s) {
        r[s] = xn(o), delete r[i];
        return;
      }
      const a = t ? wv(i) : String(i).trim();
      a !== i && delete r[i], r[a] = xn(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && O.isArray(n) ? n.join(", ") : n);
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
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Zs] = this[Zs] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = wr(s);
      n[a] || (xv(o, s), n[a] = !0);
    }
    return O.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
no.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(no.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
O.freezeMethods(no);
const vt = no;
function No(e, t) {
  const r = this || Ji, n = t || r, o = vt.from(n.headers);
  let i = n.data;
  return O.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Bc(e) {
  return !!(e && e.__CANCEL__);
}
function Zr(e, t, r) {
  Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, r), this.name = "CanceledError";
}
O.inherits(Zr, Z, {
  __CANCEL__: !0
});
function Ov(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Z(
    "Request failed with status code " + r.status,
    [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Sv = st.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      O.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), O.isString(n) && s.push("path=" + n), O.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ic(e, t) {
  return e && !Tv(t) ? Nv(e, t) : t;
}
const Cv = st.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let s = i;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
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
    return n = o(window.location.href), function(s) {
      const a = O.isString(s) ? o(s) : s;
      return a.protocol === n.protocol && a.host === n.host;
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
function kv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rv(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[i];
    s || (s = c), r[o] = u, n[o] = c;
    let f = i, d = 0;
    for (; f !== o; )
      d += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - s < t)
      return;
    const p = l && c - l;
    return p ? Math.round(d * 1e3 / p) : void 0;
  };
}
function ea(e, t) {
  let r = 0;
  const n = Rv(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - r, u = n(a), c = i <= s;
    r = i;
    const l = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && c ? (s - i) / u : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Dv = typeof XMLHttpRequest < "u", Av = Dv && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = vt.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: a } = e, u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let l;
    if (O.isFormData(o)) {
      if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((l = i.getContentType()) !== !1) {
        const [v, ..._] = l ? l.split(";").map((m) => m.trim()).filter(Boolean) : [];
        i.setContentType([v || "multipart/form-data", ..._].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + _));
    }
    const d = Ic(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), Rc(d, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function p() {
      if (!f)
        return;
      const v = vt.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), m = {
        data: !s || s === "text" || s === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: v,
        config: e,
        request: f
      };
      Ov(function(b) {
        r(b), c();
      }, function(b) {
        n(b), c();
      }, m), f = null;
    }
    if ("onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, f.onabort = function() {
      f && (n(new Z("Request aborted", Z.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      n(new Z("Network Error", Z.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let _ = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || Dc;
      e.timeoutErrorMessage && (_ = e.timeoutErrorMessage), n(new Z(
        _,
        m.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
        e,
        f
      )), f = null;
    }, st.hasStandardBrowserEnv && (a && O.isFunction(a) && (a = a(e)), a || a !== !1 && Cv(d))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && Sv.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in f && O.forEach(i.toJSON(), function(_, m) {
      f.setRequestHeader(m, _);
    }), O.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), s && s !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", ea(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", ea(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (v) => {
      f && (n(!v || v.type ? new Zr(null, e, f) : v), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const h = kv(d);
    if (h && st.protocols.indexOf(h) === -1) {
      n(new Z("Unsupported protocol " + h + ":", Z.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(o || null);
  });
}, hi = {
  http: nv,
  xhr: Av
};
O.forEach(hi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ta = (e) => `- ${e}`, Pv = (e) => O.isFunction(e) || e === null || e === !1, Fc = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let s;
      if (n = r, !Pv(r) && (n = hi[(s = String(r)).toLowerCase()], n === void 0))
        throw new Z(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(ta).join(`
`) : " " + ta(i[0]) : "as no adapter specified";
      throw new Z(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: hi
};
function Co(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Zr(null, e);
}
function ra(e) {
  return Co(e), e.headers = vt.from(e.headers), e.data = No.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fc.getAdapter(e.adapter || Ji.adapter)(e).then(function(n) {
    return Co(e), n.data = No.call(
      e,
      e.transformResponse,
      n
    ), n.headers = vt.from(n.headers), n;
  }, function(n) {
    return Bc(n) || (Co(e), n && n.response && (n.response.data = No.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = vt.from(n.response.headers))), Promise.reject(n);
  });
}
const na = (e) => e instanceof vt ? { ...e } : e;
function fr(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, f) {
    return O.isPlainObject(c) && O.isPlainObject(l) ? O.merge.call({ caseless: f }, c, l) : O.isPlainObject(l) ? O.merge({}, l) : O.isArray(l) ? l.slice() : l;
  }
  function o(c, l, f) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function i(c, l) {
    if (!O.isUndefined(l))
      return n(void 0, l);
  }
  function s(c, l) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function a(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (c, l) => o(na(c), na(l), !0)
  };
  return O.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = u[l] || o, d = f(e[l], t[l], l);
    O.isUndefined(d) && f !== a || (r[l] = d);
  }), r;
}
const jc = "1.6.8", Qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Qi[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const oa = {};
Qi.transitional = function(t, r, n) {
  function o(i, s) {
    return "[Axios v" + jc + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new Z(
        o(s, " has been removed" + (r ? " in " + r : "")),
        Z.ERR_DEPRECATED
      );
    return r && !oa[s] && (oa[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function Bv(e, t, r) {
  if (typeof e != "object")
    throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = t[i];
    if (s) {
      const a = e[i], u = a === void 0 || s(a, i, e);
      if (u !== !0)
        throw new Z("option " + i + " must be " + u, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Z("Unknown option " + i, Z.ERR_BAD_OPTION);
  }
}
const pi = {
  assertOptions: Bv,
  validators: Qi
}, St = pi.validators;
class Mn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Qs(),
      response: new Qs()
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
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = fr(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && pi.assertOptions(n, {
      silentJSONParsing: St.transitional(St.boolean),
      forcedJSONParsing: St.transitional(St.boolean),
      clarifyTimeoutError: St.transitional(St.boolean)
    }, !1), o != null && (O.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : pi.assertOptions(o, {
      encode: St.function,
      serialize: St.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = i && O.merge(
      i.common,
      i[r.method]
    );
    i && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), r.headers = vt.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (u = u && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let l, f = 0, d;
    if (!u) {
      const h = [ra.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), d = h.length, l = Promise.resolve(r); f < d; )
        l = l.then(h[f++], h[f++]);
      return l;
    }
    d = a.length;
    let p = r;
    for (f = 0; f < d; ) {
      const h = a[f++], v = a[f++];
      try {
        p = h(p);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      l = ra.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, d = c.length; f < d; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = fr(this.defaults, t);
    const r = Ic(t.baseURL, t.url);
    return Rc(r, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function(t) {
  Mn.prototype[t] = function(r, n) {
    return this.request(fr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, a) {
      return this.request(fr(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Mn.prototype[t] = r(), Mn.prototype[t + "Form"] = r(!0);
});
const On = Mn;
class Zi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      n.reason || (n.reason = new Zr(i, s, a), r(n.reason));
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
      token: new Zi(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Iv = Zi;
function Fv(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function jv(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const vi = {
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
Object.entries(vi).forEach(([e, t]) => {
  vi[t] = e;
});
const Mv = vi;
function Mc(e) {
  const t = new On(e), r = gc(On.prototype.request, t);
  return O.extend(r, On.prototype, t, { allOwnKeys: !0 }), O.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Mc(fr(e, o));
  }, r;
}
const ue = Mc(Ji);
ue.Axios = On;
ue.CanceledError = Zr;
ue.CancelToken = Iv;
ue.isCancel = Bc;
ue.VERSION = jc;
ue.toFormData = ro;
ue.AxiosError = Z;
ue.Cancel = ue.CanceledError;
ue.all = function(t) {
  return Promise.all(t);
};
ue.spread = Fv;
ue.isAxiosError = jv;
ue.mergeConfig = fr;
ue.AxiosHeaders = vt;
ue.formToJSON = (e) => Pc(O.isHTMLForm(e) ? new FormData(e) : e);
ue.getAdapter = Fc.getAdapter;
ue.HttpStatusCode = Mv;
ue.default = ue;
ue.defaults.baseURL = "http://localhost:3000";
const or = (e) => e.data, ln = {
  get: (e) => ue.get(e).then(or),
  post: (e, t) => ue.post(e, t).then(or),
  put: (e, t) => ue.put(e, t).then(or),
  del: (e) => ue.delete(e).then(or)
}, zv = {
  list: () => ue.get("/tasks").then(or),
  listPaginated: (e, t) => ue.get(`/tasks?_page=${e}&_per_page=${t}`).then(or),
  details: (e) => ln.get(`/tasks/${e}`),
  create: (e) => ln.post("/tasks", e),
  update: (e) => ln.put(`/tasks/${e.id}`, e),
  delete: (e) => ln.del(`/tasks/${e}`)
}, xr = {
  Tasks: zv
}, ia = 10;
class Lv {
  constructor() {
    this.tasks = [], this.loadingInitial = !1, this.totalTasks = 0, this.loadTask = async (t) => {
      let r = this.getTask(t);
      if (r)
        return r;
      try {
        return r = await xr.Tasks.details(t), this.setTask(r), r;
      } catch (n) {
        console.log(n);
      }
    }, this.setTask = (t) => {
      this.tasks.push(t);
    }, this.getTask = (t) => this.tasks.find((r) => r.id === t), this.setTasks = (t) => {
      this.tasks = t;
    }, this.createTask = async (t) => {
      try {
        await xr.Tasks.create(t), this.setTask(t);
      } catch (r) {
        console.log(r);
      }
    }, this.updateTask = async (t) => {
      try {
        await xr.Tasks.update(t), un(() => {
          if (t.id) {
            const r = this.tasks.findIndex((n) => n.id === t.id);
            r !== -1 && (this.tasks[r] = { ...this.tasks[r], ...t });
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.deleteTask = async (t) => {
      try {
        await xr.Tasks.delete(t), un(() => {
          if (this.tasks = this.tasks.filter((r) => r.id !== t), this.tasks.length === 0 && this.totalTasks > 0) {
            const r = Math.ceil(this.totalTasks / ia), n = Math.max(1, r - 1);
            this.loadPaginatedTasks(n);
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.loadPaginatedTasks = async (t) => {
      this.loadingInitial = !0;
      try {
        const r = await xr.Tasks.listPaginated(t, ia);
        un(() => {
          this.setTasks(r.data), this.setTotalTasks(Number(r.items)), this.setLoadingInitial(!1);
        });
      } catch (r) {
        console.log(r), this.setLoadingInitial(!1);
      }
    }, Ui(this), this.loadPaginatedTasks(1);
  }
  setLoadingInitial(t) {
    this.loadingInitial = t;
  }
  setTotalTasks(t) {
    un(() => {
      this.totalTasks = t;
    });
  }
}
const Vv = {
  taskStore: new Lv(),
  dialogStore: new yp(),
  paginationStore: new wp()
}, qv = nu(Vv);
function Uv() {
  return ou(qv);
}
function $v(e) {
  if (!Array.isArray(e))
    return [e];
  if (process.env.NODE_ENV !== "production" && e.length > 2)
    throw new Error("CSS Bucket contains an entry with greater than 2 items, please report this to https://github.com/microsoft/griffel/issues");
  return e;
}
const ko = typeof window > "u" ? global : window, Ro = "@griffel/";
function zc(e, t) {
  return ko[Symbol.for(Ro + e)] || (ko[Symbol.for(Ro + e)] = t), ko[Symbol.for(Ro + e)];
}
const Lc = /* @__PURE__ */ zc("DEBUG_RESET_CLASSES", {}), Fr = /* @__PURE__ */ zc("DEFINITION_LOOKUP_TABLE", {}), Sn = "data-make-styles-bucket", Wv = "r", Tr = 7, ct = "___", Vc = "_", qc = process.env.NODE_ENV === "production" ? ct.length + Tr : ct.length + Tr + Vc.length + Tr, Hv = 0, sa = 1;
function Kv(e, t, r) {
  const n = [];
  if (r[Sn] = t, e)
    for (const i in r)
      e.setAttribute(i, r[i]);
  function o(i) {
    return e != null && e.sheet ? e.sheet.insertRule(i, e.sheet.cssRules.length) : n.push(i);
  }
  return {
    elementAttributes: r,
    insertRule: o,
    element: e,
    bucketName: t,
    cssRules() {
      return e != null && e.sheet ? Array.from(e.sheet.cssRules).map((i) => i.cssText) : n;
    }
  };
}
const Gv = [
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
], aa = /* @__PURE__ */ Gv.reduce((e, t, r) => (e[t] = r, e), {});
function Yv(e, t, r, n, o = {}) {
  const i = e === "m", s = i ? e + o.m : e;
  if (!n.stylesheets[s]) {
    const a = t && t.createElement("style"), u = Kv(a, e, Object.assign({}, n.styleElementAttributes, i && {
      media: o.m
    }));
    n.stylesheets[s] = u, t && a && t.head.insertBefore(a, Xv(t, r, e, n, o));
  }
  return n.stylesheets[s];
}
function Xv(e, t, r, n, o) {
  const i = aa[r];
  let s = (l) => i - aa[l.getAttribute(Sn)], a = e.head.querySelectorAll(`[${Sn}]`);
  if (r === "m" && o) {
    const l = e.head.querySelectorAll(`[${Sn}="${r}"]`);
    l.length && (a = l, s = (f) => n.compareMediaQueries(o.m, f.media));
  }
  const u = a.length;
  let c = u - 1;
  for (; c >= 0; ) {
    const l = a.item(c);
    if (s(l) > 0)
      return l.nextSibling;
    c--;
  }
  return u > 0 ? a.item(0) : t ? t.nextSibling : null;
}
const Jv = /* @__PURE__ */ ["-moz-placeholder", "-moz-focus-inner", "-moz-focusring", "-ms-input-placeholder", "-moz-read-write", "-moz-read-only"].join("|"), Qv = /* @__PURE__ */ new RegExp(`:(${Jv})`);
function ua(e, t) {
  try {
    e.insertRule(t);
  } catch (r) {
    process.env.NODE_ENV !== "production" && !Qv.test(t) && console.error(`There was a problem inserting the following rule: "${t}"`, r);
  }
}
const zn = /* @__PURE__ */ (() => {
  try {
    var e;
    return !!(typeof window < "u" && ((e = window.sessionStorage) != null && e.getItem("__GRIFFEL_DEVTOOLS__")));
  } catch {
    return !1;
  }
})();
function Do(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ao(e) {
  const t = e.length;
  if (t === Tr)
    return e;
  for (let r = t; r < Tr; r++)
    e += "0";
  return e;
}
function Uc(e, t, r = []) {
  return process.env.NODE_ENV === "production" ? ct + Ao(Do(e + t)) : ct + Ao(Do(e + t)) + Vc + Ao(Do(r.join("")));
}
function $c(e, t) {
  let r = "";
  for (const n in e) {
    const o = e[n];
    if (o) {
      const i = Array.isArray(o);
      t === "rtl" ? r += (i ? o[1] : o) + " " : r += (i ? o[0] : o) + " ";
    }
  }
  return r.slice(0, -1);
}
function ca(e, t) {
  const r = {};
  for (const n in e) {
    const o = $c(e[n], t);
    if (o === "") {
      r[n] = "";
      continue;
    }
    const i = Uc(o, t), s = i + " " + o;
    Fr[i] = [e[n], t], r[n] = s;
  }
  return r;
}
const Ln = {};
function pe() {
  let e = null, t = "", r = "";
  const n = new Array(arguments.length);
  let o = "";
  for (let l = 0; l < arguments.length; l++) {
    const f = arguments[l];
    if (typeof f == "string" && f !== "") {
      const d = f.indexOf(ct);
      if (d === -1)
        process.env.NODE_ENV !== "production" && f.split(" ").forEach((p) => {
          p.startsWith(Wv) && Lc[p] && (o ? console.error(`mergeClasses(): a passed string contains multiple classes produced by makeResetStyles (${f} & ${t}, this will lead to non-deterministic behavior. Learn more:https://griffel.js.org/react/api/make-reset-styles#limitations
Source string: ${f}`) : o = p);
        }), t += f + " ";
      else {
        const p = f.substr(d, qc);
        d > 0 && (t += f.slice(0, d)), r += p, n[l] = p;
      }
      process.env.NODE_ENV !== "production" && f.indexOf(ct, d + 1) !== -1 && console.error(`mergeClasses(): a passed string contains multiple identifiers of atomic classes (classes that start with "${ct}"), it's possible that passed classes were concatenated in a wrong way. Source string: ${f}`);
    }
  }
  if (r === "")
    return t.slice(0, -1);
  const i = Ln[r];
  if (i !== void 0)
    return t + i;
  const s = [];
  for (let l = 0; l < arguments.length; l++) {
    const f = n[l];
    if (f) {
      const d = Fr[f];
      d ? (s.push(d[Hv]), process.env.NODE_ENV !== "production" && e !== null && e !== d[sa] && console.error(`mergeClasses(): a passed string contains an identifier (${f}) that has different direction (dir="${d[1] ? "rtl" : "ltr"}") setting than other classes. This is not supported. Source string: ${arguments[l]}`), e = d[sa]) : process.env.NODE_ENV !== "production" && console.error(`mergeClasses(): a passed string contains an identifier (${f}) that does not match any entry in cache. Source string: ${arguments[l]}`);
    }
  }
  const a = Object.assign.apply(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(s)
  );
  let u = $c(a, e);
  const c = Uc(u, e, n);
  return u = c + " " + u, Ln[r] = u, Fr[c] = [a, e], t + u;
}
const la = {}, fa = /* @__PURE__ */ new Set(), Nr = {
  getChildrenSequences: (e) => {
    const t = Object.keys(Ln).find((r) => Ln[r].startsWith(e));
    return t ? t.split(ct).filter((r) => r.length).map((r) => ct + r) : [];
  },
  addCSSRule: (e) => {
    fa.add(e);
  },
  addSequenceDetails: (e, t) => {
    Object.entries(e).forEach(([r, n]) => {
      la[n.substring(0, qc)] = {
        slotName: r,
        sourceURL: t
      };
    });
  },
  getCSSRules: () => Array.from(fa),
  getSequenceDetails: (e) => la[e]
};
function da(e, t) {
  return Array.isArray(e) ? t === "rtl" ? e[1] : e[0] : e;
}
function Zv(e, t, r, n) {
  const o = e[0], i = e[1];
  return Object.entries(o).map(([s, a]) => {
    const u = da(a, i);
    let c;
    if (r && t) {
      const l = r.find(({
        className: f
      }) => f === u);
      !l && t[0][s] ? c = da(t[0][s], t[1]) : l && t[0][s] ? c = (n ? n.filter(({
        debugClassNames: d
      }) => d.filter(({
        className: p
      }) => p === u).length > 0).length > 0 : !1) ? l.className : l.overriddenBy : (!l && !t[0][s] || l && !t[0][s]) && (c = void 0);
    }
    return {
      className: u,
      overriddenBy: c
    };
  });
}
function Wc(e, t) {
  const r = Fr[e];
  if (r === void 0)
    return;
  const n = t ? Fr[t.sequenceHash] : void 0, o = Zv(r, n, t == null ? void 0 : t.debugClassNames, t == null ? void 0 : t.children), i = {
    sequenceHash: e,
    direction: r[1],
    children: [],
    debugClassNames: o
  };
  return Nr.getChildrenSequences(i.sequenceHash).reverse().forEach((a) => {
    const u = Wc(a, i);
    u && i.children.push(u);
  }), i.children.length || (i.rules = {}, i.debugClassNames.forEach(({
    className: a
  }) => {
    const u = Nr.getSequenceDetails(e);
    u && (i.slot = u.slotName, i.sourceURL = u.sourceURL);
    const c = Nr.getCSSRules().find((l) => l.includes(a));
    i.rules[a] = c;
  })), i;
}
function em(e) {
  const t = e.defaultView;
  if (!t || t.__GRIFFEL_DEVTOOLS__)
    return;
  const r = {
    getInfo: (n) => {
      const o = Array.from(n.classList).find((i) => i.startsWith(ct));
      if (o !== void 0)
        return Wc(o);
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
let tm = 0;
const rm = (e, t) => e < t ? -1 : e > t ? 1 : 0;
function nm(e = typeof document > "u" ? void 0 : document, t = {}) {
  const {
    unstable_filterCSSRule: r,
    insertionPoint: n,
    styleElementAttributes: o,
    compareMediaQueries: i = rm
  } = t, s = {
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(o),
    compareMediaQueries: i,
    id: `d${tm++}`,
    insertCSSRules(a) {
      for (const u in a) {
        const c = a[u];
        for (let l = 0, f = c.length; l < f; l++) {
          const [d, p] = $v(c[l]), h = Yv(u, e, n || null, s, p);
          s.insertionCache[d] || (s.insertionCache[d] = u, process.env.NODE_ENV !== "production" && zn && Nr.addCSSRule(d), r ? r(d) && ua(h, d) : ua(h, d));
        }
      }
    }
  };
  return e && process.env.NODE_ENV !== "production" && zn && em(e), s;
}
const Hc = () => {
  const e = {};
  return function(r, n) {
    e[r.id] === void 0 && (r.insertCSSRules(n), e[r.id] = !0);
  };
}, es = "<unknown>";
function om(e) {
  return um(e) || fm(e) || hm(e);
}
const im = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i, sm = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i, am = /\((\S*)\)/;
function um(e) {
  const t = im.exec(e) || sm.exec(e);
  if (!t)
    return null;
  let r = t[2];
  const n = r && r.indexOf("native") === 0, o = r && r.indexOf("eval") === 0, i = am.exec(r);
  return o && i != null && (r = i[1]), {
    loc: n ? null : t[2],
    name: t[1] || es
  };
}
const cm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i, lm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function fm(e) {
  const t = cm.exec(e);
  if (!t)
    return null;
  let r = t[3];
  const n = r && r.indexOf(" > eval") > -1, o = lm.exec(r);
  return n && o != null && (r = o[1]), {
    loc: t[3],
    name: t[1] || es
  };
}
const dm = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
function hm(e) {
  const t = dm.exec(e);
  return t ? {
    loc: t[3],
    name: t[1] || es
  } : null;
}
function pm() {
  const e = String(new Error().stack).split(`
`), t = vm(e);
  if (t === void 0)
    return;
  const r = om(t);
  return r == null ? void 0 : r.loc;
}
function vm(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].includes("at getSourceURLfromError"))
      return e[t + 3];
}
function mm(e, t, r = Hc) {
  const n = r();
  let o = null, i = null, s;
  process.env.NODE_ENV !== "production" && zn && (s = pm());
  function a(u) {
    const {
      dir: c,
      renderer: l
    } = u, f = c === "ltr";
    f ? o === null && (o = ca(e, c)) : i === null && (i = ca(e, c)), n(l, t);
    const d = f ? o : i;
    return process.env.NODE_ENV !== "production" && zn && Nr.addSequenceDetails(d, s), d;
  }
  return a;
}
function bm(e, t, r, n = Hc) {
  const o = n();
  function i(s) {
    const {
      dir: a,
      renderer: u
    } = s, c = a === "ltr" ? e : t || e;
    return o(u, Array.isArray(r) ? {
      r
    } : r), process.env.NODE_ENV !== "production" && (Lc[c] = 1), c;
  }
  return i;
}
function gm() {
  return typeof window < "u" && !!(window.document && window.document.createElement);
}
const ha = (
  // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
  // eslint-disable-next-line no-useless-concat
  g.useInsertionEffect ? g.useInsertionEffect : void 0
), Kc = () => {
  const e = {};
  return function(r, n) {
    if (ha && gm()) {
      ha(() => {
        r.insertCSSRules(n);
      }, [r, n]);
      return;
    }
    e[r.id] === void 0 && (r.insertCSSRules(n), e[r.id] = !0);
  };
}, _m = /* @__PURE__ */ g.createContext(/* @__PURE__ */ nm());
function Gc() {
  return g.useContext(_m);
}
const ym = /* @__PURE__ */ g.createContext("ltr");
function Yc() {
  return g.useContext(ym);
}
function Te(e, t) {
  const r = mm(e, t, Kc);
  return function() {
    const o = Yc(), i = Gc();
    return r({
      dir: o,
      renderer: i
    });
  };
}
function Re(e, t, r) {
  const n = bm(e, t, r, Kc);
  return function() {
    const i = Yc(), s = Gc();
    return n({
      dir: i,
      renderer: s
    });
  };
}
const Xc = Symbol.for("fui.slotRenderFunction"), dr = Symbol.for("fui.slotElementType");
function Be(e, t) {
  const { defaultProps: r, elementType: n } = t, o = Jc(e), i = {
    ...r,
    ...o,
    [dr]: n
  };
  return o && typeof o.children == "function" && (i[Xc] = o.children, i.children = r == null ? void 0 : r.children), i;
}
function Gt(e, t) {
  if (!(e === null || e === void 0 && !t.renderByDefault))
    return Be(e, t);
}
function Jc(e) {
  return typeof e == "string" || typeof e == "number" || Array.isArray(e) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  g.isValidElement(e) ? {
    children: e
  } : (e && typeof e != "object" && process.env.NODE_ENV !== "production" && console.error(`@fluentui/react-utilities [slot.${Jc.name}]:
A slot got an invalid value "${e}" (${typeof e}).
A valid value for a slot is a slot shorthand or slot properties object.
Slot shorthands can be strings, numbers, arrays or JSX elements`), e);
}
function Em(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && !of(e);
}
function mi(e) {
  return !!(e != null && e.hasOwnProperty(dr));
}
function ze(e) {
  if (process.env.NODE_ENV !== "production") {
    const t = e;
    for (const r of Object.keys(t.components)) {
      const n = t[r];
      if (n !== void 0)
        if (!mi(n))
          t[r] = Be(n, {
            elementType: t.components[r]
          }), console.warn(`@fluentui/react-utilities [${ze.name}]:
"state.${r}" is not a slot!
Be sure to create slots properly by using "slot.always" or "slot.optional".`);
        else {
          const { [dr]: o } = n;
          o !== t.components[r] && (n[dr] = t.components[r], console.warn(`@fluentui/react-utilities [${ze.name}]:
"state.${r}" element type differs from "state.components.${r}",
${o} !== ${t.components[r]}.
Be sure to create slots properly by using "slot.always" or "slot.optional" with the correct elementType.`));
        }
    }
  }
}
const le = (...e) => {
  const t = {};
  for (const r of e) {
    const n = Array.isArray(r) ? r : Object.keys(r);
    for (const o of n)
      t[o] = 1;
  }
  return t;
}, wm = le([
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
]), xm = le([
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
]), Om = le([
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType"
]), ye = le(xm, wm, Om), Sm = le(ye, [
  "form"
]), Qc = le(ye, [
  "height",
  "loop",
  "muted",
  "preload",
  "src",
  "width"
]), Tm = le(Qc, [
  "poster"
]), Nm = le(ye, [
  "start"
]), Cm = le(ye, [
  "value"
]), km = le(ye, [
  "download",
  "href",
  "hrefLang",
  "media",
  "rel",
  "target",
  "type"
]), Rm = le(ye, [
  "dateTime"
]), oo = le(ye, [
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
]), Dm = le(oo, [
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
]), Am = le(oo, [
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
]), Pm = le(oo, [
  "form",
  "multiple",
  "required"
]), Bm = le(ye, [
  "selected",
  "value"
]), Im = le(ye, [
  "cellPadding",
  "cellSpacing"
]), Fm = ye, jm = le(ye, [
  "colSpan",
  "rowSpan",
  "scope"
]), Mm = le(ye, [
  "colSpan",
  "headers",
  "rowSpan",
  "scope"
]), zm = le(ye, [
  "span"
]), Lm = le(ye, [
  "span"
]), Vm = le(ye, [
  "disabled",
  "form"
]), qm = le(ye, [
  "acceptCharset",
  "action",
  "encType",
  "encType",
  "method",
  "noValidate",
  "target"
]), Um = le(ye, [
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
]), $m = le(ye, [
  "alt",
  "crossOrigin",
  "height",
  "src",
  "srcSet",
  "useMap",
  "width"
]), Wm = le(ye, [
  "open",
  "onCancel",
  "onClose"
]);
function Hm(e, t, r) {
  const n = Array.isArray(t), o = {}, i = Object.keys(e);
  for (const s of i)
    (!n && t[s] || n && t.indexOf(s) >= 0 || s.indexOf("data-") === 0 || s.indexOf("aria-") === 0) && (!r || (r == null ? void 0 : r.indexOf(s)) === -1) && (o[s] = e[s]);
  return o;
}
const Km = {
  label: Sm,
  audio: Qc,
  video: Tm,
  ol: Nm,
  li: Cm,
  a: km,
  button: oo,
  input: Dm,
  textarea: Am,
  select: Pm,
  option: Bm,
  table: Im,
  tr: Fm,
  th: jm,
  td: Mm,
  colGroup: zm,
  col: Lm,
  fieldset: Vm,
  form: qm,
  iframe: Um,
  img: $m,
  time: Rm,
  dialog: Wm
};
function Gm(e, t, r) {
  const n = e && Km[e] || ye;
  return n.as = 1, Hm(t, n, r);
}
const nt = (e, t, r) => {
  var n;
  return Gm((n = t.as) !== null && n !== void 0 ? n : e, t, r);
};
function Ym() {
  return (
    // eslint-disable-next-line deprecation/deprecation, no-restricted-globals
    typeof window < "u" && !!(window.document && window.document.createElement)
  );
}
function Xm(e, t) {
  const r = g.useRef(void 0), n = g.useCallback((i, s) => (r.current !== void 0 && t(r.current), r.current = e(i, s), r.current), [
    t,
    e
  ]), o = g.useCallback(() => {
    r.current !== void 0 && (t(r.current), r.current = void 0);
  }, [
    t
  ]);
  return g.useEffect(() => o, [
    o
  ]), [
    n,
    o
  ];
}
function Jm(e) {
  return typeof e == "function";
}
const Zc = (e) => {
  const [t, r] = g.useState(() => e.defaultState === void 0 ? e.initialState : Qm(e.defaultState) ? e.defaultState() : e.defaultState), n = g.useRef(e.state);
  g.useEffect(() => {
    n.current = e.state;
  }, [
    e.state
  ]);
  const o = g.useCallback((i) => {
    Jm(i) && i(n.current);
  }, []);
  return Zm(e.state) ? [
    e.state,
    o
  ] : [
    t,
    r
  ];
};
function Qm(e) {
  return typeof e == "function";
}
const Zm = (e) => {
  const [t] = g.useState(() => e !== void 0);
  return process.env.NODE_ENV !== "production" && g.useEffect(() => {
    if (t !== (e !== void 0)) {
      const r = new Error(), n = t ? "a controlled value to be uncontrolled" : "an uncontrolled value to be controlled", o = t ? "defined to an undefined" : "undefined to a defined";
      console.error(`@fluentui/react-utilities [${Zc.name}]:
A component is changing ${n}. This is likely caused by the value changing from ${o} value, which should not happen.
Decide between using a controlled or uncontrolled input element for the lifetime of the component.
More info: https://reactjs.org/link/controlled-components
${r.stack}`);
    }
  }, [
    t,
    e
  ]), t;
}, eb = {
  current: 0
}, tb = /* @__PURE__ */ g.createContext(void 0);
function rb() {
  var e;
  return (e = g.useContext(tb)) !== null && e !== void 0 ? e : eb;
}
const en = Ym() ? g.useLayoutEffect : g.useEffect, zt = (e) => {
  const t = g.useRef(() => {
    throw new Error("Cannot call an event handler while rendering");
  });
  return en(() => {
    t.current = e;
  }, [
    e
  ]), g.useCallback((...r) => {
    const n = t.current;
    return n(...r);
  }, [
    t
  ]);
}, el = g.createContext(void 0);
el.Provider;
function nb() {
  return g.useContext(el) || "";
}
function ts(e = "fui-", t) {
  const r = rb(), n = nb(), o = g.useId;
  if (o) {
    const i = o(), s = g.useMemo(() => i.replace(/:/g, ""), [
      i
    ]);
    return t || `${n}${e}${s}`;
  }
  return g.useMemo(() => t || `${n}${e}${++r.current}`, [
    n,
    e,
    t,
    r
  ]);
}
function ob(...e) {
  const t = g.useCallback(
    (r) => {
      t.current = r;
      for (const n of e)
        typeof n == "function" ? n(r) : n && (n.current = r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
      ...e
    ]
  );
  return t;
}
const tl = g.createContext(void 0), ib = "";
tl.Provider;
function sb() {
  var e;
  return (e = g.useContext(tl)) !== null && e !== void 0 ? e : ib;
}
const rl = g.createContext(void 0), ab = {
  // eslint-disable-next-line no-restricted-globals
  targetDocument: typeof document == "object" ? document : void 0,
  dir: "ltr"
};
rl.Provider;
function Dt() {
  var e;
  return (e = g.useContext(rl)) !== null && e !== void 0 ? e : ab;
}
const nl = g.createContext(void 0), ub = () => {
};
nl.Provider;
const Xe = (e) => {
  var t, r;
  return (r = (t = g.useContext(nl)) === null || t === void 0 ? void 0 : t[e]) !== null && r !== void 0 ? r : ub;
}, ol = g.createContext(void 0);
ol.Provider;
function cb() {
  return g.useContext(ol);
}
function lb() {
  return Xm(setTimeout, clearTimeout);
}
function bi(e, t) {
  var r;
  const n = e;
  var o;
  return !!(!(n == null || (r = n.ownerDocument) === null || r === void 0) && r.defaultView && n instanceof n.ownerDocument.defaultView[(o = t == null ? void 0 : t.constructorName) !== null && o !== void 0 ? o : "HTMLElement"]);
}
function il(e) {
  return !!e.type.isFluentTriggerComponent;
}
function fb(e, t) {
  return typeof e == "function" ? e(t) : e ? sl(e, t) : e || null;
}
function sl(e, t) {
  if (!g.isValidElement(e) || e.type === g.Fragment)
    throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");
  if (il(e)) {
    const r = sl(e.props.children, t);
    return g.cloneElement(e, void 0, r);
  } else
    return g.cloneElement(e, t);
}
function al(e) {
  return g.isValidElement(e) ? il(e) ? al(
    // FIXME: This casting should be unnecessary as isFluentTrigger is a guard type method,
    // but for some reason it's failing on build
    e.props.children
  ) : e : null;
}
function db(e) {
  return e && !!e._virtual;
}
function hb(e) {
  return db(e) && e._virtual.parent || null;
}
function pb(e, t = {}) {
  if (!e)
    return null;
  if (!t.skipVirtual) {
    const n = hb(e);
    if (n)
      return n;
  }
  const r = e.parentNode;
  return r && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? r.host : r;
}
function pa(e, t) {
  if (!e)
    return;
  const r = e;
  r._virtual || (r._virtual = {}), r._virtual.parent = t;
}
function vb(e, t) {
  return {
    ...t,
    [dr]: e
  };
}
var gi = { exports: {} }, se = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function mb() {
  if (va)
    return se;
  va = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, i = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, p = 60122, h = 60117, v = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    e = m("react.element"), t = m("react.portal"), r = m("react.fragment"), n = m("react.strict_mode"), o = m("react.profiler"), i = m("react.provider"), s = m("react.context"), a = m("react.forward_ref"), u = m("react.suspense"), c = m("react.suspense_list"), l = m("react.memo"), f = m("react.lazy"), d = m("react.block"), p = m("react.server.block"), h = m("react.fundamental"), v = m("react.debug_trace_mode"), _ = m("react.legacy_hidden");
  }
  function w(k) {
    if (typeof k == "object" && k !== null) {
      var Y = k.$$typeof;
      switch (Y) {
        case e:
          switch (k = k.type, k) {
            case r:
            case o:
            case n:
            case u:
            case c:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case s:
                case a:
                case f:
                case l:
                case i:
                  return k;
                default:
                  return Y;
              }
          }
        case t:
          return Y;
      }
    }
  }
  var b = i, E = e, y = a, N = r, B = f, R = l, j = t, V = o, re = n, Ee = u;
  return se.ContextConsumer = s, se.ContextProvider = b, se.Element = E, se.ForwardRef = y, se.Fragment = N, se.Lazy = B, se.Memo = R, se.Portal = j, se.Profiler = V, se.StrictMode = re, se.Suspense = Ee, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(k) {
    return w(k) === s;
  }, se.isContextProvider = function(k) {
    return w(k) === i;
  }, se.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, se.isForwardRef = function(k) {
    return w(k) === a;
  }, se.isFragment = function(k) {
    return w(k) === r;
  }, se.isLazy = function(k) {
    return w(k) === f;
  }, se.isMemo = function(k) {
    return w(k) === l;
  }, se.isPortal = function(k) {
    return w(k) === t;
  }, se.isProfiler = function(k) {
    return w(k) === o;
  }, se.isStrictMode = function(k) {
    return w(k) === n;
  }, se.isSuspense = function(k) {
    return w(k) === u;
  }, se.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === o || k === v || k === n || k === u || k === c || k === _ || typeof k == "object" && k !== null && (k.$$typeof === f || k.$$typeof === l || k.$$typeof === i || k.$$typeof === s || k.$$typeof === a || k.$$typeof === h || k.$$typeof === d || k[0] === p);
  }, se.typeOf = w, se;
}
var ae = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function bb() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, i = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, p = 60122, h = 60117, v = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var m = Symbol.for;
      e = m("react.element"), t = m("react.portal"), r = m("react.fragment"), n = m("react.strict_mode"), o = m("react.profiler"), i = m("react.provider"), s = m("react.context"), a = m("react.forward_ref"), u = m("react.suspense"), c = m("react.suspense_list"), l = m("react.memo"), f = m("react.lazy"), d = m("react.block"), p = m("react.server.block"), h = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), v = m("react.debug_trace_mode"), m("react.offscreen"), _ = m("react.legacy_hidden");
    }
    var w = !1;
    function b(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === o || I === v || I === n || I === u || I === c || I === _ || w || typeof I == "object" && I !== null && (I.$$typeof === f || I.$$typeof === l || I.$$typeof === i || I.$$typeof === s || I.$$typeof === a || I.$$typeof === h || I.$$typeof === d || I[0] === p));
    }
    function E(I) {
      if (typeof I == "object" && I !== null) {
        var A = I.$$typeof;
        switch (A) {
          case e:
            var Ce = I.type;
            switch (Ce) {
              case r:
              case o:
              case n:
              case u:
              case c:
                return Ce;
              default:
                var Ve = Ce && Ce.$$typeof;
                switch (Ve) {
                  case s:
                  case a:
                  case f:
                  case l:
                  case i:
                    return Ve;
                  default:
                    return A;
                }
            }
          case t:
            return A;
        }
      }
    }
    var y = s, N = i, B = e, R = a, j = r, V = f, re = l, Ee = t, k = o, Y = n, Ne = u, ie = !1, fe = !1;
    function D(I) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(I) {
      return fe || (fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(I) {
      return E(I) === s;
    }
    function T(I) {
      return E(I) === i;
    }
    function M(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function q(I) {
      return E(I) === a;
    }
    function z(I) {
      return E(I) === r;
    }
    function K(I) {
      return E(I) === f;
    }
    function U(I) {
      return E(I) === l;
    }
    function H(I) {
      return E(I) === t;
    }
    function X(I) {
      return E(I) === o;
    }
    function ee(I) {
      return E(I) === n;
    }
    function J(I) {
      return E(I) === u;
    }
    ae.ContextConsumer = y, ae.ContextProvider = N, ae.Element = B, ae.ForwardRef = R, ae.Fragment = j, ae.Lazy = V, ae.Memo = re, ae.Portal = Ee, ae.Profiler = k, ae.StrictMode = Y, ae.Suspense = Ne, ae.isAsyncMode = D, ae.isConcurrentMode = L, ae.isContextConsumer = x, ae.isContextProvider = T, ae.isElement = M, ae.isForwardRef = q, ae.isFragment = z, ae.isLazy = K, ae.isMemo = U, ae.isPortal = H, ae.isProfiler = X, ae.isStrictMode = ee, ae.isSuspense = J, ae.isValidElementType = b, ae.typeOf = E;
  }()), ae;
}
process.env.NODE_ENV === "production" ? gi.exports = mb() : gi.exports = bb();
var gb = gi.exports;
function _b(e) {
  process.env.NODE_ENV === "development" && typeof e == "object" && !gb.isValidElementType(e) && console.error(`@fluentui/react-jsx-runtime:
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${e}.

If this happened in a slot of Fluent UI component, you might be facing package resolution issues.
Please make sure you don't have multiple versions of "@fluentui/react-utilities" installed in your dependencies or sub-dependencies.
You can check this by searching up for matching entries in a lockfile produced by your package manager (yarn.lock, pnpm-lock.yaml or package-lock.json).`);
}
function ul(e, t) {
  return function(n, o, i, s, a) {
    return mi(o) ? t(vb(n, o), null, i, s, a) : mi(n) ? t(n, o, i, s, a) : (_b(n), e(n, o, i, s, a));
  };
}
function cl(e) {
  const { as: t, [dr]: r, [Xc]: n, ...o } = e, i = o, s = typeof r == "string" ? t ?? r : r;
  return typeof s != "string" && t && (i.as = t), {
    elementType: s,
    props: i,
    renderFunction: n
  };
}
const Lt = rf, yb = (e, t, r) => {
  const { elementType: n, renderFunction: o, props: i } = cl(e), s = {
    ...i,
    ...t
  };
  return o ? Lt.jsx(g.Fragment, {
    children: o(n, s)
  }, r) : Lt.jsx(n, s, r);
}, Eb = (e, t, r) => {
  const { elementType: n, renderFunction: o, props: i } = cl(e), s = {
    ...i,
    ...t
  };
  return o ? Lt.jsx(g.Fragment, {
    children: o(n, {
      ...s,
      children: Lt.jsxs(g.Fragment, {
        children: s.children
      }, void 0)
    })
  }, r) : Lt.jsxs(n, s, r);
}, de = ul(Lt.jsx, yb), _r = ul(Lt.jsxs, Eb), _i = g.createContext(void 0), wb = {};
_i.Provider;
const xb = () => g.useContext(_i) ? g.useContext(_i) : wb, Ob = Te({
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
}), Sb = (e, t) => {
  const {
    title: r,
    primaryFill: n = "currentColor",
    ...o
  } = e, i = {
    ...o,
    title: void 0,
    fill: n
  }, s = Ob(), a = xb();
  return i.className = pe(s.root, (t == null ? void 0 : t.flipInRtl) && (a == null ? void 0 : a.textDirection) === "rtl" && s.rtl, i.className), r && (i["aria-label"] = r), !i["aria-label"] && !i["aria-labelledby"] ? i["aria-hidden"] = !0 : i.role = "img", i;
}, tn = (e, t, r, n) => {
  const o = t === "1em" ? "20" : t, i = g.forwardRef((s, a) => {
    const u = {
      ...Sb(s, {
        flipInRtl: n == null ? void 0 : n.flipInRtl
      }),
      ref: a,
      width: t,
      height: t,
      viewBox: `0 0 ${o} ${o}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    return g.createElement("svg", u, ...r.map((c) => g.createElement("path", {
      d: c,
      fill: u.fill
    })));
  });
  return i.displayName = e, i;
}, Tb = /* @__PURE__ */ tn("CaretLeftRegular", "1em", ["M11.37 14.98A1 1 0 0 0 13 14.2V5.8a1 1 0 0 0-1.63-.78L6.65 8.83a1.5 1.5 0 0 0 0 2.34l4.72 3.81ZM12 5.8v8.4L7.28 10.4a.5.5 0 0 1 0-.78L12 5.8Z"]), Nb = /* @__PURE__ */ tn("CaretRightRegular", "1em", ["M8.63 14.98A1 1 0 0 1 7 14.2V5.8a1 1 0 0 1 1.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81ZM8 5.8v8.4l4.72-3.81a.5.5 0 0 0 0-.78L8 5.8Z"]), Cb = /* @__PURE__ */ tn("ChevronLeftRegular", "1em", ["M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z"]), kb = /* @__PURE__ */ tn("ChevronRightRegular", "1em", ["M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"]), Rb = /* @__PURE__ */ tn("Dismiss20Regular", "20", ["m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);
var Db = typeof WeakRef < "u", ba = class {
  constructor(e) {
    Db && typeof e == "object" ? this._weakRef = new WeakRef(e) : this._instance = e;
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */
  deref() {
    var e, t;
    let r;
    return this._weakRef ? (r = (e = this._weakRef) == null ? void 0 : e.deref(), r || delete this._weakRef) : (r = this._instance, (t = r == null ? void 0 : r.isDisposed) != null && t.call(r) && delete this._instance), r;
  }
}, gt = "keyborg:focusin", jr = "keyborg:focusout";
function Ab(e) {
  const t = e.HTMLElement, r = t.prototype.focus;
  let n = !1;
  return t.prototype.focus = function() {
    n = !0;
  }, e.document.createElement("button").focus(), t.prototype.focus = r, n;
}
var Po = !1;
function _t(e) {
  const t = e.focus;
  t.__keyborgNativeFocus ? t.__keyborgNativeFocus.call(e) : e.focus();
}
function Pb(e) {
  const t = e;
  Po || (Po = Ab(t));
  const r = t.HTMLElement.prototype.focus;
  if (r.__keyborgNativeFocus)
    return;
  t.HTMLElement.prototype.focus = u;
  const n = /* @__PURE__ */ new Set(), o = (l) => {
    const f = l.target;
    if (!f)
      return;
    const d = new CustomEvent(jr, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: {
        originalEvent: l
      }
    });
    f.dispatchEvent(d);
  }, i = (l) => {
    const f = l.target;
    if (!f)
      return;
    let d = l.composedPath()[0];
    const p = /* @__PURE__ */ new Set();
    for (; d; )
      d.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (p.add(d), d = d.host) : d = d.parentNode;
    for (const h of n) {
      const v = h.deref();
      (!v || !p.has(v)) && (n.delete(h), v && (v.removeEventListener("focusin", i, !0), v.removeEventListener("focusout", o, !0)));
    }
    s(f, l.relatedTarget || void 0);
  }, s = (l, f, d) => {
    var p;
    const h = l.shadowRoot;
    if (h) {
      for (const m of n)
        if (m.deref() === h)
          return;
      h.addEventListener("focusin", i, !0), h.addEventListener("focusout", o, !0), n.add(new ba(h));
      return;
    }
    const v = {
      relatedTarget: f,
      originalEvent: d
    }, _ = new CustomEvent(gt, {
      cancelable: !0,
      bubbles: !0,
      // Allows the event to bubble past an open shadow root
      composed: !0,
      detail: v
    });
    _.details = v, (Po || a.lastFocusedProgrammatically) && (v.isFocusedProgrammatically = l === ((p = a.lastFocusedProgrammatically) == null ? void 0 : p.deref()), a.lastFocusedProgrammatically = void 0), l.dispatchEvent(_);
  }, a = t.__keyborgData = {
    focusInHandler: i,
    focusOutHandler: o,
    shadowTargets: n
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
  function u() {
    const l = t.__keyborgData;
    return l && (l.lastFocusedProgrammatically = new ba(
      this
    )), r.apply(this, arguments);
  }
  let c = t.document.activeElement;
  for (; c && c.shadowRoot; )
    s(c), c = c.shadowRoot.activeElement;
  u.__keyborgNativeFocus = r;
}
function Bb(e) {
  const t = e, r = t.HTMLElement.prototype, n = r.focus.__keyborgNativeFocus, o = t.__keyborgData;
  if (o) {
    t.document.removeEventListener(
      "focusin",
      o.focusInHandler,
      !0
    ), t.document.removeEventListener(
      "focusout",
      o.focusOutHandler,
      !0
    );
    for (const i of o.shadowTargets) {
      const s = i.deref();
      s && (s.removeEventListener(
        "focusin",
        o.focusInHandler,
        !0
      ), s.removeEventListener(
        "focusout",
        o.focusOutHandler,
        !0
      ));
    }
    o.shadowTargets.clear(), delete t.__keyborgData;
  }
  n && (r.focus = n);
}
var Ib = 500, ll = 0, Fb = class {
  constructor(e, t) {
    this._isNavigatingWithKeyboard_DO_NOT_USE = !1, this._onFocusIn = (n) => {
      if (this._isMouseUsedTimer || this.isNavigatingWithKeyboard)
        return;
      const o = n.detail;
      o.relatedTarget && (o.isFocusedProgrammatically || o.isFocusedProgrammatically === void 0 || (this.isNavigatingWithKeyboard = !0));
    }, this._onMouseDown = (n) => {
      if (n.buttons === 0 || n.clientX === 0 && n.clientY === 0 && n.screenX === 0 && n.screenY === 0)
        return;
      const o = this._win;
      o && (this._isMouseUsedTimer && o.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = o.setTimeout(() => {
        delete this._isMouseUsedTimer;
      }, 1e3)), this.isNavigatingWithKeyboard = !1;
    }, this._onKeyDown = (n) => {
      this.isNavigatingWithKeyboard ? this._shouldDismissKeyboardNavigation(n) && this._scheduleDismiss() : this._shouldTriggerKeyboardNavigation(n) && (this.isNavigatingWithKeyboard = !0);
    }, this.id = "c" + ++ll, this._win = e;
    const r = e.document;
    if (t) {
      const n = t.triggerKeys, o = t.dismissKeys;
      n != null && n.length && (this._triggerKeys = new Set(n)), o != null && o.length && (this._dismissKeys = new Set(o));
    }
    r.addEventListener(gt, this._onFocusIn, !0), r.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("keydown", this._onKeyDown, !0), Pb(e);
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
      this._isMouseUsedTimer && (e.clearTimeout(this._isMouseUsedTimer), this._isMouseUsedTimer = void 0), this._dismissTimer && (e.clearTimeout(this._dismissTimer), this._dismissTimer = void 0), Bb(e);
      const t = e.document;
      t.removeEventListener(gt, this._onFocusIn, !0), t.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("keydown", this._onKeyDown, !0), delete this._win;
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
      for (const n of Object.keys(r))
        rs.update(r[n], this.isNavigatingWithKeyboard);
  }
  /**
   * @returns whether the keyboard event should trigger keyboard navigation mode
   */
  _shouldTriggerKeyboardNavigation(e) {
    var t;
    if (e.key === "Tab")
      return !0;
    const r = (t = this._win) == null ? void 0 : t.document.activeElement, n = !this._triggerKeys || this._triggerKeys.has(e.keyCode), o = r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable);
    return n && !o;
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
      }, Ib);
    }
  }
}, rs = class fl {
  constructor(t, r) {
    this._cb = [], this._id = "k" + ++ll, this._win = t;
    const n = t.__keyborg;
    n ? (this._core = n.core, n.refs[this._id] = this) : (this._core = new Fb(t, r), t.__keyborg = {
      core: this._core,
      refs: { [this._id]: this }
    });
  }
  static create(t, r) {
    return new fl(t, r);
  }
  static dispose(t) {
    t.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */
  static update(t, r) {
    t._cb.forEach((n) => n(r));
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
function dl(e, t) {
  return rs.create(e, t);
}
function hl(e) {
  rs.dispose(e);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const mt = "data-tabster", ns = "data-tabster-dummy", os = /* @__PURE__ */ ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]", "*[contenteditable]", "details > summary", "audio[controls]", "video[controls]"].join(", "), Vt = {
  EscapeGroupper: 1,
  Restorer: 2,
  Deloser: 3
}, jb = {
  Any: 0,
  Accessible: 1,
  Focusable: 2
}, Mb = {
  History: 0,
  DeloserDefault: 1,
  RootDefault: 2,
  DeloserFirst: 3,
  RootFirst: 4
}, zb = {
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
}, ft = {
  Invisible: 0,
  PartiallyVisible: 1,
  Visible: 2
}, Mr = {
  Source: 0,
  Target: 1
}, Bt = {
  Both: 0,
  Vertical: 1,
  Horizontal: 2,
  Grid: 3,
  GridLinear: 4
}, ve = {
  ArrowUp: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
  ArrowRight: 4,
  PageUp: 5,
  PageDown: 6,
  Home: 7,
  End: 8
}, Lb = {
  Unlimited: 0,
  Limited: 1,
  LimitedTrapFocus: 2
  // The focus is limited as above, plus trapped when inside.
}, Vb = {
  Enter: 1,
  Escape: 2
}, pl = {
  Auto: 0,
  Inside: 1,
  Outside: 2
  // Tabster will always place dummy inputs outside of the container.
};
var Nt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TabsterAttributeName: mt,
  TabsterDummyInputAttributeName: ns,
  FocusableSelector: os,
  AsyncFocusSources: Vt,
  ObservedElementAccesibilities: jb,
  RestoreFocusOrders: Mb,
  DeloserStrategies: zb,
  Visibilities: ft,
  RestorerTypes: Mr,
  MoverDirections: Bt,
  MoverKeys: ve,
  GroupperTabbabilities: Lb,
  GroupperMoveFocusActions: Vb,
  SysDummyInputsPositions: pl
});
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Me(e, t) {
  var r;
  return (r = e.storageEntry(t)) === null || r === void 0 ? void 0 : r.tabster;
}
function vl(e, t, r) {
  var n, o;
  const i = r || e._noop ? void 0 : t.getAttribute(mt);
  let s = e.storageEntry(t), a;
  if (i)
    if (i !== ((n = s == null ? void 0 : s.attr) === null || n === void 0 ? void 0 : n.string))
      try {
        const f = JSON.parse(i);
        if (typeof f != "object")
          throw new Error(`Value is not a JSON object, got '${i}'.`);
        a = {
          string: i,
          object: f
        };
      } catch (f) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${f}`, t);
      }
    else
      return;
  else if (!s)
    return;
  s || (s = e.storageEntry(t, !0)), s.tabster || (s.tabster = {});
  const u = s.tabster || {}, c = ((o = s.attr) === null || o === void 0 ? void 0 : o.object) || {}, l = (a == null ? void 0 : a.object) || {};
  for (const f of Object.keys(c))
    if (!l[f]) {
      if (f === "root") {
        const d = u[f];
        d && e.root.onRoot(d, !0);
      }
      switch (f) {
        case "deloser":
        case "root":
        case "groupper":
        case "modalizer":
        case "restorer":
        case "mover":
          const d = u[f];
          d && (d.dispose(), delete u[f]);
          break;
        case "observed":
          delete u[f], e.observedElement && e.observedElement.onObservedElementUpdate(t);
          break;
        case "focusable":
        case "outline":
        case "uncontrolled":
        case "sys":
          delete u[f];
          break;
      }
    }
  for (const f of Object.keys(l)) {
    const d = l.sys;
    switch (f) {
      case "deloser":
        u.deloser ? u.deloser.setProps(l.deloser) : e.deloser ? u.deloser = e.deloser.createDeloser(t, l.deloser) : process.env.NODE_ENV === "development" && console.error("Deloser API used before initialization, please call `getDeloser()`");
        break;
      case "root":
        u.root ? u.root.setProps(l.root) : u.root = e.root.createRoot(t, l.root, d), e.root.onRoot(u.root);
        break;
      case "modalizer":
        u.modalizer ? u.modalizer.setProps(l.modalizer) : e.modalizer ? u.modalizer = e.modalizer.createModalizer(t, l.modalizer, d) : process.env.NODE_ENV === "development" && console.error("Modalizer API used before initialization, please call `getModalizer()`");
        break;
      case "restorer":
        u.restorer ? u.restorer.setProps(l.restorer) : e.restorer ? l.restorer && (u.restorer = e.restorer.createRestorer(t, l.restorer)) : process.env.NODE_ENV === "development" && console.error("Restorer API used before initialization, please call `getRestorer()`");
        break;
      case "focusable":
        u.focusable = l.focusable;
        break;
      case "groupper":
        u.groupper ? u.groupper.setProps(l.groupper) : e.groupper ? u.groupper = e.groupper.createGroupper(t, l.groupper, d) : process.env.NODE_ENV === "development" && console.error("Groupper API used before initialization, please call `getGroupper()`");
        break;
      case "mover":
        u.mover ? u.mover.setProps(l.mover) : e.mover ? u.mover = e.mover.createMover(t, l.mover, d) : process.env.NODE_ENV === "development" && console.error("Mover API used before initialization, please call `getMover()`");
        break;
      case "observed":
        e.observedElement ? (u.observed = l.observed, e.observedElement.onObservedElementUpdate(t)) : process.env.NODE_ENV === "development" && console.error("ObservedElement API used before initialization, please call `getObservedElement()`");
        break;
      case "uncontrolled":
        u.uncontrolled = l.uncontrolled;
        break;
      case "outline":
        e.outline ? u.outline = l.outline : process.env.NODE_ENV === "development" && console.error("Outline API used before initialization, please call `getOutline()`");
        break;
      case "sys":
        u.sys = l.sys;
        break;
      default:
        console.error(`Unknown key '${f}' in data-tabster attribute value.`);
    }
  }
  a ? s.attr = a : (Object.keys(u).length === 0 && (delete s.tabster, delete s.attr), e.storageEntry(t, !1));
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const qb = "tabster:focusin", Ub = "tabster:focusout", $b = "tabster:movefocus", Wb = "tabster:modalizer:active", Hb = "tabster:modalizer:inactive", Kb = "tabster:mover:state", ga = "tabster:mover:movefocus", _a = "tabster:mover:memorized-element", yi = "tabster:restorer:restore-focus", Gb = "tabster:root:focus", Yb = "tabster:root:blur", Xb = typeof CustomEvent < "u" ? CustomEvent : function() {
};
class wt extends Xb {
  constructor(t, r) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: r
    }), this.details = r;
  }
}
class Jb extends wt {
  constructor(t) {
    super(qb, t);
  }
}
class Qb extends wt {
  constructor(t) {
    super(Ub, t);
  }
}
class ir extends wt {
  constructor(t) {
    super($b, t);
  }
}
class ya extends wt {
  constructor(t) {
    super(Kb, t);
  }
}
class Zb extends wt {
  constructor(t) {
    super(Wb, t);
  }
}
class eg extends wt {
  constructor(t) {
    super(Hb, t);
  }
}
class Ea extends wt {
  constructor() {
    super(yi);
  }
}
class tg extends wt {
  constructor(t) {
    super(Gb, t);
  }
}
class rg extends wt {
  constructor(t) {
    super(Yb, t);
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const ng = (e) => new MutationObserver(e), og = (e, t, r, n) => e.createTreeWalker(t, r, n), ig = (e) => e ? e.parentNode : null, sg = (e) => e ? e.parentElement : null, ag = (e, t) => !!(t && (e != null && e.contains(t))), ug = (e) => e.activeElement, cg = (e, t) => e.querySelector(t), lg = (e, t) => Array.prototype.slice.call(e.querySelectorAll(t), 0), fg = (e, t) => e.getElementById(t), dg = (e) => (e == null ? void 0 : e.firstChild) || null, hg = (e) => (e == null ? void 0 : e.lastChild) || null, pg = (e) => (e == null ? void 0 : e.nextSibling) || null, vg = (e) => (e == null ? void 0 : e.previousSibling) || null, mg = (e) => (e == null ? void 0 : e.firstElementChild) || null, bg = (e) => (e == null ? void 0 : e.lastElementChild) || null, gg = (e) => (e == null ? void 0 : e.nextElementSibling) || null, _g = (e) => (e == null ? void 0 : e.previousElementSibling) || null, yg = (e, t) => e.appendChild(t), Eg = (e, t, r) => e.insertBefore(t, r), wg = (e) => {
  var t;
  return ((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.getSelection()) || null;
}, C = {
  createMutationObserver: ng,
  createTreeWalker: og,
  getParentNode: ig,
  getParentElement: sg,
  nodeContains: ag,
  getActiveElement: ug,
  querySelector: cg,
  querySelectorAll: lg,
  getElementById: fg,
  getFirstChild: dg,
  getLastChild: hg,
  getNextSibling: pg,
  getPreviousSibling: vg,
  getFirstElementChild: mg,
  getLastElementChild: bg,
  getNextElementSibling: gg,
  getPreviousElementSibling: _g,
  appendChild: yg,
  insertBefore: Eg,
  getSelection: wg
};
function xg(e) {
  for (const t of Object.keys(e))
    C[t] = e[t];
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let Ei;
const wa = typeof DOMRect < "u" ? DOMRect : class {
  constructor(e, t, r, n) {
    this.left = e || 0, this.top = t || 0, this.right = (e || 0) + (r || 0), this.bottom = (t || 0) + (n || 0);
  }
};
let Og = 0;
try {
  document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT), Ei = !1;
} catch {
  Ei = !0;
}
const Bo = 100;
function xt(e) {
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
function Sg(e) {
  const t = e.__tabsterInstanceContext;
  t && (t.elementByUId = {}, delete t.WeakRef, t.containerBoundingRectCache = {}, t.containerBoundingRectCacheTimer && e.clearTimeout(t.containerBoundingRectCacheTimer), t.fakeWeakRefsTimer && e.clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefs = [], delete e.__tabsterInstanceContext);
}
function Tg(e) {
  const t = e.__tabsterInstanceContext;
  return new ((t == null ? void 0 : t.basics.WeakMap) || WeakMap)();
}
function Ng(e) {
  return !!e.querySelector(os);
}
class ml {
  constructor(t) {
    this._target = t;
  }
  deref() {
    return this._target;
  }
  static cleanup(t, r) {
    return t._target ? r || !ss(t._target.ownerDocument, t._target) ? (delete t._target, !0) : !1 : !0;
  }
}
class Ye {
  constructor(t, r, n) {
    const o = xt(t);
    let i;
    o.WeakRef ? i = new o.WeakRef(r) : (i = new ml(r), o.fakeWeakRefs.push(i)), this._ref = i, this._data = n;
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
function bl(e, t) {
  const r = xt(e);
  r.fakeWeakRefs = r.fakeWeakRefs.filter((n) => !ml.cleanup(n, t));
}
function gl(e) {
  const t = xt(e);
  t.fakeWeakRefsStarted || (t.fakeWeakRefsStarted = !0, t.WeakRef = Pg(t)), t.fakeWeakRefsTimer || (t.fakeWeakRefsTimer = e().setTimeout(() => {
    t.fakeWeakRefsTimer = void 0, bl(e), gl(e);
  }, 2 * 60 * 1e3));
}
function Cg(e) {
  const t = xt(e);
  t.fakeWeakRefsStarted = !1, t.fakeWeakRefsTimer && (e().clearTimeout(t.fakeWeakRefsTimer), t.fakeWeakRefsTimer = void 0, t.fakeWeakRefs = []);
}
function is(e, t, r) {
  if (t.nodeType !== Node.ELEMENT_NODE)
    return;
  const n = Ei ? r : {
    acceptNode: r
  };
  return C.createTreeWalker(
    e,
    t,
    NodeFilter.SHOW_ELEMENT,
    n,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: We still don't want to completely break IE11, so, entityReferenceExpansion argument is not optional.
    !1
    /* Last argument is not optional for IE11! */
  );
}
function _l(e, t) {
  let r = t.__tabsterCacheId;
  const n = xt(e), o = r ? n.containerBoundingRectCache[r] : void 0;
  if (o)
    return o.rect;
  const i = t.ownerDocument && t.ownerDocument.documentElement;
  if (!i)
    return new wa();
  let s = 0, a = 0, u = i.clientWidth, c = i.clientHeight;
  if (t !== i) {
    const f = t.getBoundingClientRect();
    s = Math.max(s, f.left), a = Math.max(a, f.top), u = Math.min(u, f.right), c = Math.min(c, f.bottom);
  }
  const l = new wa(s < u ? s : -1, a < c ? a : -1, s < u ? u - s : 0, a < c ? c - a : 0);
  return r || (r = "r-" + ++n.lastContainerBoundingRectCacheId, t.__tabsterCacheId = r), n.containerBoundingRectCache[r] = {
    rect: l,
    element: t
  }, n.containerBoundingRectCacheTimer || (n.containerBoundingRectCacheTimer = window.setTimeout(() => {
    n.containerBoundingRectCacheTimer = void 0;
    for (const f of Object.keys(n.containerBoundingRectCache))
      delete n.containerBoundingRectCache[f].element.__tabsterCacheId;
    n.containerBoundingRectCache = {};
  }, 50)), l;
}
function xa(e, t, r) {
  const n = yl(t);
  if (!n)
    return !1;
  const o = _l(e, n), i = t.getBoundingClientRect(), s = i.height * (1 - r), a = Math.max(0, o.top - i.top), u = Math.max(0, i.bottom - o.bottom), c = a + u;
  return c === 0 || c <= s;
}
function kg(e, t, r) {
  const n = yl(t);
  if (n) {
    const o = _l(e, n), i = t.getBoundingClientRect();
    r ? n.scrollTop += i.top - o.top : n.scrollTop += i.bottom - o.bottom;
  }
}
function yl(e) {
  const t = e.ownerDocument;
  if (t) {
    for (let r = C.getParentElement(e); r; r = C.getParentElement(r))
      if (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight)
        return r;
    return t.documentElement;
  }
  return null;
}
function Rg(e) {
  e.__shouldIgnoreFocus = !0;
}
function El(e) {
  return !!e.__shouldIgnoreFocus;
}
function Dg(e) {
  const t = new Uint32Array(4);
  if (e.crypto && e.crypto.getRandomValues)
    e.crypto.getRandomValues(t);
  else if (e.msCrypto && e.msCrypto.getRandomValues)
    e.msCrypto.getRandomValues(t);
  else
    for (let n = 0; n < t.length; n++)
      t[n] = 4294967295 * Math.random();
  const r = [];
  for (let n = 0; n < t.length; n++)
    r.push(t[n].toString(36));
  return r.push("|"), r.push((++Og).toString(36)), r.push("|"), r.push(Date.now().toString(36)), r.join("");
}
function Tn(e, t) {
  const r = xt(e);
  let n = t.__tabsterElementUID;
  return n || (n = t.__tabsterElementUID = Dg(e())), !r.elementByUId[n] && ss(t.ownerDocument, t) && (r.elementByUId[n] = new Ye(e, t)), n;
}
function Oa(e, t) {
  const r = xt(e);
  for (const n of Object.keys(r.elementByUId)) {
    const o = r.elementByUId[n], i = o && o.get();
    i && t && !C.nodeContains(t, i) || delete r.elementByUId[n];
  }
}
function ss(e, t) {
  return C.nodeContains(e == null ? void 0 : e.body, t);
}
function wl(e, t) {
  const r = e.matches || e.matchesSelector || e.msMatchesSelector || e.webkitMatchesSelector;
  return r && r.call(e, t);
}
function Ag(e) {
  const t = xt(e);
  if (t.basics.Promise)
    return t.basics.Promise;
  throw new Error("No Promise defined.");
}
function Pg(e) {
  return e.basics.WeakRef;
}
let Bg = 0;
class io {
  constructor(t, r, n) {
    const o = t.getWindow;
    this._tabster = t, this._element = new Ye(o, r), this._props = {
      ...n
    }, this.id = "i" + ++Bg;
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
class Vn {
  constructor(t, r, n, o, i) {
    var s;
    this._focusIn = (l) => {
      if (this._fixedTarget) {
        const d = this._fixedTarget.get();
        d && _t(d);
        return;
      }
      const f = this.input;
      if (this.onFocusIn && f) {
        const d = l.relatedTarget;
        this.onFocusIn(this, this._isBackward(!0, f, d), d);
      }
    }, this._focusOut = (l) => {
      if (this._fixedTarget)
        return;
      this.useDefaultAction = !1;
      const f = this.input;
      if (this.onFocusOut && f) {
        const d = l.relatedTarget;
        this.onFocusOut(this, this._isBackward(!1, f, d), d);
      }
    };
    const a = t(), u = a.document.createElement("i");
    u.tabIndex = 0, u.setAttribute("role", "none"), u.setAttribute(ns, ""), u.setAttribute("aria-hidden", "true");
    const c = u.style;
    c.position = "fixed", c.width = c.height = "1px", c.opacity = "0.001", c.zIndex = "-1", c.setProperty("content-visibility", "hidden"), Rg(u), this.input = u, this.isFirst = n.isFirst, this.isOutside = r, this._isPhantom = (s = n.isPhantom) !== null && s !== void 0 ? s : !1, this._fixedTarget = i, u.addEventListener("focusin", this._focusIn), u.addEventListener("focusout", this._focusOut), u.__tabsterDummyContainer = o, this._isPhantom && (this._disposeTimer = a.setTimeout(() => {
      delete this._disposeTimer, this.dispose();
    }, 0), this._clearDisposeTimeout = () => {
      this._disposeTimer && (a.clearTimeout(this._disposeTimer), delete this._disposeTimer), delete this._clearDisposeTimeout;
    });
  }
  dispose() {
    var t;
    this._clearDisposeTimeout && this._clearDisposeTimeout();
    const r = this.input;
    r && (delete this._fixedTarget, delete this.onFocusIn, delete this.onFocusOut, delete this.input, r.removeEventListener("focusin", this._focusIn), r.removeEventListener("focusout", this._focusOut), delete r.__tabsterDummyContainer, (t = C.getParentNode(r)) === null || t === void 0 || t.removeChild(r));
  }
  setTopLeft(t, r) {
    var n;
    const o = (n = this.input) === null || n === void 0 ? void 0 : n.style;
    o && (o.top = `${t}px`, o.left = `${r}px`);
  }
  _isBackward(t, r, n) {
    return t && !n ? !this.isFirst : !!(n && r.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING);
  }
}
const as = {
  Root: 1,
  Modalizer: 2,
  Mover: 3,
  Groupper: 4
};
class zr {
  constructor(t, r, n, o, i, s) {
    this._element = r, this._instance = new Fg(t, r, this, n, o, i, s);
  }
  _setHandlers(t, r) {
    this._onFocusIn = t, this._onFocusOut = r;
  }
  moveOut(t) {
    var r;
    (r = this._instance) === null || r === void 0 || r.moveOut(t);
  }
  moveOutWithDefaultAction(t, r) {
    var n;
    (n = this._instance) === null || n === void 0 || n.moveOutWithDefaultAction(t, r);
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
  static moveWithPhantomDummy(t, r, n, o, i) {
    var s;
    const u = new Vn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }).input;
    if (u) {
      let c, l;
      if (r.tagName === "BODY")
        c = r, l = n && o || !n && !o ? C.getFirstElementChild(r) : null;
      else {
        n && (!o || o && !t.focusable.isFocusable(r, !1, !0, !0)) ? (c = r, l = o ? r.firstElementChild : null) : (c = C.getParentElement(r), l = n && o || !n && !o ? r : C.getNextElementSibling(r));
        let f, d;
        do
          f = n && o || !n && !o ? C.getPreviousElementSibling(l) : l, d = (s = f == null ? void 0 : f.__tabsterDummyContainer) === null || s === void 0 ? void 0 : s.get(), d === r ? l = n && o || !n && !o ? f : C.getNextElementSibling(f) : d = void 0;
        while (d);
      }
      c != null && c.dispatchEvent(new ir({
        by: "root",
        owner: c,
        next: null,
        relatedEvent: i
      })) && (C.insertBefore(c, u, l), _t(u));
    }
  }
  static addPhantomDummyWithTarget(t, r, n, o) {
    const s = new Vn(t.getWindow, !0, {
      isPhantom: !0,
      isFirst: !0
    }, void 0, new Ye(t.getWindow, o)).input;
    if (s) {
      let a, u;
      Ng(r) && !n ? (a = r, u = C.getFirstElementChild(r)) : (a = C.getParentElement(r), u = n ? r : C.getNextElementSibling(r)), a && C.insertBefore(a, s, u);
    }
  }
}
function Tt(e, t) {
  var r;
  const n = {
    1: "Root",
    2: "Modalizer",
    3: "Mover",
    4: "Groupper"
  };
  (r = e.input) === null || r === void 0 || r.setAttribute(ns, [`isFirst=${e.isFirst}`, `isOutside=${e.isOutside}`, ...t.map((o) => `(${n[o.priority]}, tabbable=${o.tabbable})`)].join(", "));
}
class Ig {
  constructor(t) {
    this._updateQueue = /* @__PURE__ */ new Set(), this._lastUpdateQueueTime = 0, this._changedParents = /* @__PURE__ */ new WeakSet(), this._dummyElements = [], this._dummyCallbacks = /* @__PURE__ */ new WeakMap(), this._domChanged = (r) => {
      var n;
      this._changedParents.has(r) || (this._changedParents.add(r), !this._updateDummyInputsTimer && (this._updateDummyInputsTimer = (n = this._win) === null || n === void 0 ? void 0 : n.call(this).setTimeout(() => {
        delete this._updateDummyInputsTimer;
        for (const o of this._dummyElements) {
          const i = o.get();
          if (i) {
            const s = this._dummyCallbacks.get(i);
            if (s) {
              const a = C.getParentNode(i);
              (!a || this._changedParents.has(a)) && s();
            }
          }
        }
        this._changedParents = /* @__PURE__ */ new WeakSet();
      }, Bo)));
    }, this._win = t;
  }
  add(t, r) {
    !this._dummyCallbacks.has(t) && this._win && (this._dummyElements.push(new Ye(this._win, t)), this._dummyCallbacks.set(t, r), this.domChanged = this._domChanged);
  }
  remove(t) {
    this._dummyElements = this._dummyElements.filter((r) => {
      const n = r.get();
      return n && n !== t;
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
      if (delete this._updateTimer, this._lastUpdateQueueTime + Bo <= Date.now()) {
        const r = /* @__PURE__ */ new Map(), n = [];
        for (const o of this._updateQueue)
          n.push(o(r));
        this._updateQueue.clear();
        for (const o of n)
          o();
        r.clear();
      } else
        this._scheduledUpdatePositions();
    }, Bo));
  }
}
class Fg {
  constructor(t, r, n, o, i, s, a) {
    this._wrappers = [], this._isOutside = !1, this._transformElements = /* @__PURE__ */ new Set(), this._onFocusIn = (p, h, v) => {
      this._onFocus(!0, p, h, v);
    }, this._onFocusOut = (p, h, v) => {
      this._onFocus(!1, p, h, v);
    }, this.moveOut = (p) => {
      var h;
      const v = this._firstDummy, _ = this._lastDummy;
      if (v && _) {
        this._ensurePosition();
        const m = v.input, w = _.input, b = (h = this._element) === null || h === void 0 ? void 0 : h.get();
        if (m && w && b) {
          let E;
          p ? (m.tabIndex = 0, E = m) : (w.tabIndex = 0, E = w), E && _t(E);
        }
      }
    }, this.moveOutWithDefaultAction = (p, h) => {
      var v;
      const _ = this._firstDummy, m = this._lastDummy;
      if (_ && m) {
        this._ensurePosition();
        const w = _.input, b = m.input, E = (v = this._element) === null || v === void 0 ? void 0 : v.get();
        if (w && b && E) {
          let y;
          p ? !_.isOutside && this._tabster.focusable.isFocusable(E, !0, !0, !0) ? y = E : (_.useDefaultAction = !0, w.tabIndex = 0, y = w) : (m.useDefaultAction = !0, b.tabIndex = 0, y = b), y && E.dispatchEvent(new ir({
            by: "root",
            owner: E,
            next: null,
            relatedEvent: h
          })) && _t(y);
        }
      }
    }, this.setTabbable = (p, h) => {
      var v, _;
      for (const w of this._wrappers)
        if (w.manager === p) {
          w.tabbable = h;
          break;
        }
      const m = this._getCurrent();
      if (m) {
        const w = m.tabbable ? 0 : -1;
        let b = (v = this._firstDummy) === null || v === void 0 ? void 0 : v.input;
        b && (b.tabIndex = w), b = (_ = this._lastDummy) === null || _ === void 0 ? void 0 : _.input, b && (b.tabIndex = w);
      }
      process.env.NODE_ENV === "development" && (this._firstDummy && Tt(this._firstDummy, this._wrappers), this._lastDummy && Tt(this._lastDummy, this._wrappers));
    }, this._addDummyInputs = () => {
      this._addTimer || (this._addTimer = this._getWindow().setTimeout(() => {
        delete this._addTimer, this._ensurePosition(), process.env.NODE_ENV === "development" && (this._firstDummy && Tt(this._firstDummy, this._wrappers), this._lastDummy && Tt(this._lastDummy, this._wrappers)), this._addTransformOffsets();
      }, 0));
    }, this._addTransformOffsets = () => {
      this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets);
    }, this._computeTransformOffsets = (p) => {
      var h, v;
      const _ = ((h = this._firstDummy) === null || h === void 0 ? void 0 : h.input) || ((v = this._lastDummy) === null || v === void 0 ? void 0 : v.input), m = this._transformElements, w = /* @__PURE__ */ new Set();
      let b = 0, E = 0;
      const y = this._getWindow();
      for (let N = _; N && N.nodeType === Node.ELEMENT_NODE; N = C.getParentElement(N)) {
        let B = p.get(N);
        if (B === void 0) {
          const R = y.getComputedStyle(N).transform;
          R && R !== "none" && (B = {
            scrollTop: N.scrollTop,
            scrollLeft: N.scrollLeft
          }), p.set(N, B || null);
        }
        B && (w.add(N), m.has(N) || N.addEventListener("scroll", this._addTransformOffsets), b += B.scrollTop, E += B.scrollLeft);
      }
      for (const N of m)
        w.has(N) || N.removeEventListener("scroll", this._addTransformOffsets);
      return this._transformElements = w, () => {
        var N, B;
        (N = this._firstDummy) === null || N === void 0 || N.setTopLeft(b, E), (B = this._lastDummy) === null || B === void 0 || B.setTopLeft(b, E);
      };
    };
    const u = r.get();
    if (!u)
      throw new Error("No element");
    this._tabster = t, this._getWindow = t.getWindow, this._callForDefaultAction = a;
    const c = u.__tabsterDummy;
    if ((c || this)._wrappers.push({
      manager: n,
      priority: o,
      tabbable: !0
    }), c)
      return process.env.NODE_ENV === "development" && (this._firstDummy && Tt(this._firstDummy, c._wrappers), this._lastDummy && Tt(this._lastDummy, c._wrappers)), c;
    u.__tabsterDummy = this;
    const l = i == null ? void 0 : i.dummyInputsPosition, f = u.tagName;
    this._isOutside = l ? l === pl.Outside : (s || f === "UL" || f === "OL" || f === "TABLE") && !(f === "LI" || f === "TD" || f === "TH"), this._firstDummy = new Vn(this._getWindow, this._isOutside, {
      isFirst: !0
    }, r), this._lastDummy = new Vn(this._getWindow, this._isOutside, {
      isFirst: !1
    }, r);
    const d = this._firstDummy.input;
    d && t._dummyObserver.add(d, this._addDummyInputs), this._firstDummy.onFocusIn = this._onFocusIn, this._firstDummy.onFocusOut = this._onFocusOut, this._lastDummy.onFocusIn = this._onFocusIn, this._lastDummy.onFocusOut = this._onFocusOut, this._element = r, this._addDummyInputs();
  }
  dispose(t, r) {
    var n, o, i, s;
    const a = this._wrappers = this._wrappers.filter((u) => u.manager !== t && !r);
    if (process.env.NODE_ENV === "development" && (this._firstDummy && Tt(this._firstDummy, a), this._lastDummy && Tt(this._lastDummy, a)), a.length === 0) {
      delete ((n = this._element) === null || n === void 0 ? void 0 : n.get()).__tabsterDummy;
      for (const l of this._transformElements)
        l.removeEventListener("scroll", this._addTransformOffsets);
      this._transformElements.clear();
      const u = this._getWindow();
      this._addTimer && (u.clearTimeout(this._addTimer), delete this._addTimer);
      const c = (o = this._firstDummy) === null || o === void 0 ? void 0 : o.input;
      c && this._tabster._dummyObserver.remove(c), (i = this._firstDummy) === null || i === void 0 || i.dispose(), (s = this._lastDummy) === null || s === void 0 || s.dispose();
    }
  }
  _onFocus(t, r, n, o) {
    var i;
    const s = this._getCurrent();
    s && (!r.useDefaultAction || this._callForDefaultAction) && ((i = s.manager.getHandler(t)) === null || i === void 0 || i(r, n, o));
  }
  _getCurrent() {
    return this._wrappers.sort((t, r) => t.tabbable !== r.tabbable ? t.tabbable ? -1 : 1 : t.priority - r.priority), this._wrappers[0];
  }
  _ensurePosition() {
    var t, r, n;
    const o = (t = this._element) === null || t === void 0 ? void 0 : t.get(), i = (r = this._firstDummy) === null || r === void 0 ? void 0 : r.input, s = (n = this._lastDummy) === null || n === void 0 ? void 0 : n.input;
    if (!(!o || !i || !s))
      if (this._isOutside) {
        const a = C.getParentNode(o);
        if (a) {
          const u = C.getNextSibling(o);
          u !== s && C.insertBefore(a, s, u), C.getPreviousElementSibling(o) !== i && C.insertBefore(a, i, o);
        }
      } else {
        C.getLastElementChild(o) !== s && C.appendChild(o, s);
        const a = C.getFirstElementChild(o);
        a && a !== i && a.parentNode && C.insertBefore(a.parentNode, i, a);
      }
  }
}
function xl(e) {
  let t = null;
  for (let r = C.getLastElementChild(e); r; r = C.getLastElementChild(r))
    t = r;
  return t || void 0;
}
function Io(e, t, r, n) {
  const o = e.storageEntry(t, !0);
  let i = !1;
  if (!o.aug) {
    if (n === void 0)
      return i;
    o.aug = {};
  }
  if (n === void 0) {
    if (r in o.aug) {
      const s = o.aug[r];
      delete o.aug[r], s === null ? t.removeAttribute(r) : t.setAttribute(r, s), i = !0;
    }
  } else {
    let s;
    r in o.aug || (s = t.getAttribute(r)), s !== void 0 && s !== n && (o.aug[r] = s, n === null ? t.removeAttribute(r) : t.setAttribute(r, n), i = !0);
  }
  return n === void 0 && Object.keys(o.aug).length === 0 && (delete o.aug, e.storageEntry(t, !1)), i;
}
function jg(e) {
  var t, r;
  const n = e.ownerDocument, o = (t = n.defaultView) === null || t === void 0 ? void 0 : t.getComputedStyle(e);
  return e.offsetParent === null && n.body !== e && (o == null ? void 0 : o.position) !== "fixed" || (o == null ? void 0 : o.visibility) === "hidden" || (o == null ? void 0 : o.position) === "fixed" && (o.display === "none" || ((r = e.parentElement) === null || r === void 0 ? void 0 : r.offsetParent) === null && n.body !== e.parentElement);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Ol(e, t) {
  const r = JSON.stringify(e);
  return t === !0 ? r : {
    [mt]: r
  };
}
function Mg(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    n ? e[r] = n : delete e[r];
  }
}
function zg(e, t, r) {
  let n;
  if (r) {
    const o = e.getAttribute(mt);
    if (o)
      try {
        n = JSON.parse(o);
      } catch (i) {
        process.env.NODE_ENV === "development" && console.error(`data-tabster attribute error: ${i}`, e);
      }
  }
  n || (n = {}), Mg(n, t), Object.keys(n).length > 0 ? e.setAttribute(mt, Ol(n, !0)) : e.removeAttribute(mt);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Sa(e, t, r) {
  if (process.env.NODE_ENV === "development") {
    const n = e.get();
    n && (t ? n.style.removeProperty("--tabster-root") : n.style.setProperty("--tabster-root", r + ","));
  }
}
class Ta extends zr {
  constructor(t, r, n, o) {
    super(t, r, as.Root, o, void 0, !0), this._onDummyInputFocus = (i) => {
      var s;
      if (i.useDefaultAction)
        this._setFocused(!1);
      else {
        this._tabster.keyboardNavigation.setNavigatingWithKeyboard(!0);
        const a = this._element.get();
        if (a) {
          this._setFocused(!0);
          const u = this._tabster.focusedElement.getFirstOrLastTabbable(i.isFirst, {
            container: a,
            ignoreAccessibility: !0
          });
          if (u) {
            _t(u);
            return;
          }
        }
        (s = i.input) === null || s === void 0 || s.blur();
      }
    }, this._setHandlers(this._onDummyInputFocus), this._tabster = t, this._setFocused = n;
  }
}
class Lg extends io {
  constructor(t, r, n, o, i) {
    super(t, r, o), this._isFocused = !1, this._setFocused = (c) => {
      var l;
      if (this._setFocusedTimer && (this._tabster.getWindow().clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), this._isFocused === c)
        return;
      const f = this._element.get();
      f && (c ? (this._isFocused = !0, (l = this._dummyManager) === null || l === void 0 || l.setTabbable(!1), f.dispatchEvent(new tg({
        element: f
      }))) : this._setFocusedTimer = this._tabster.getWindow().setTimeout(() => {
        var d;
        delete this._setFocusedTimer, this._isFocused = !1, (d = this._dummyManager) === null || d === void 0 || d.setTabbable(!0), f.dispatchEvent(new rg({
          element: f
        }));
      }, 0));
    }, this._onFocusIn = (c) => {
      const l = this._tabster.getParent, f = this._element.get();
      let d = c.composedPath()[0];
      do {
        if (d === f) {
          this._setFocused(!0);
          return;
        }
        d = d && l(d);
      } while (d);
    }, this._onFocusOut = () => {
      this._setFocused(!1);
    }, this._onDispose = n;
    const s = t.getWindow;
    this.uid = Tn(s, r), this._sys = i, (t.controlTab || t.rootDummyInputs) && this.addDummyInputs();
    const u = s().document;
    u.addEventListener(gt, this._onFocusIn), u.addEventListener(jr, this._onFocusOut), this._add();
  }
  addDummyInputs() {
    this._dummyManager || (this._dummyManager = new Ta(this._tabster, this._element, this._setFocused, this._sys));
  }
  dispose() {
    var t;
    this._onDispose(this);
    const r = this._tabster.getWindow(), n = r.document;
    n.removeEventListener(gt, this._onFocusIn), n.removeEventListener(jr, this._onFocusOut), this._setFocusedTimer && (r.clearTimeout(this._setFocusedTimer), delete this._setFocusedTimer), (t = this._dummyManager) === null || t === void 0 || t.dispose(), this._remove();
  }
  moveOutWithDefaultAction(t, r) {
    const n = this._dummyManager;
    if (n)
      n.moveOutWithDefaultAction(t, r);
    else {
      const o = this.getElement();
      o && Ta.moveWithPhantomDummy(this._tabster, o, !0, t, r);
    }
  }
  _add() {
    process.env.NODE_ENV === "development" && Sa(this._element, !1, this.uid);
  }
  _remove() {
    process.env.NODE_ENV === "development" && Sa(this._element, !0);
  }
}
class _e {
  constructor(t, r) {
    this._autoRootWaiting = !1, this._roots = {}, this._forceDummy = !1, this.rootById = {}, this._autoRootCreate = () => {
      var n;
      const o = this._win().document, i = o.body;
      if (i) {
        this._autoRootUnwait(o);
        const s = this._autoRoot;
        if (s)
          return zg(i, {
            root: s
          }, !0), vl(this._tabster, i), (n = Me(this._tabster, i)) === null || n === void 0 ? void 0 : n.root;
      } else
        this._autoRootWaiting || (this._autoRootWaiting = !0, o.addEventListener("readystatechange", this._autoRootCreate));
    }, this._onRootDispose = (n) => {
      delete this._roots[n.id];
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
  createRoot(t, r, n) {
    process.env.NODE_ENV;
    const o = new Lg(this._tabster, t, this._onRootDispose, r, n);
    return this._roots[o.id] = o, this._forceDummy && o.addDummyInputs(), o;
  }
  addDummyInputs() {
    this._forceDummy = !0;
    const t = this._roots;
    for (const r of Object.keys(t))
      t[r].addDummyInputs();
  }
  static getRootByUId(t, r) {
    const n = t().__tabsterInstance;
    return n && n.root.rootById[r];
  }
  /**
   * Fetches the tabster context for an element walking up its ancestors
   *
   * @param tabster Tabster instance
   * @param element The element the tabster context should represent
   * @param options Additional options
   * @returns undefined if the element is not a child of a tabster root, otherwise all applicable tabster behaviours and configurations
   */
  static getTabsterContext(t, r, n) {
    n === void 0 && (n = {});
    var o, i, s, a;
    if (!r.ownerDocument)
      return;
    const {
      checkRtl: u,
      referenceElement: c
    } = n, l = t.getParent;
    t.drainInitQueue();
    let f, d, p, h, v = !1, _, m, w, b, E = c || r;
    const y = {};
    for (; E && (!f || u); ) {
      const B = Me(t, E);
      if (u && w === void 0) {
        const Ee = E.dir;
        Ee && (w = Ee.toLowerCase() === "rtl");
      }
      if (!B) {
        E = l(E);
        continue;
      }
      const R = E.tagName;
      (B.uncontrolled || R === "IFRAME" || R === "WEBVIEW") && (b = E), !h && (!((o = B.focusable) === null || o === void 0) && o.excludeFromMover) && !p && (v = !0);
      const j = B.modalizer, V = B.groupper, re = B.mover;
      !d && j && (d = j), !p && V && (!d || j) && (d ? (!V.isActive() && V.getProps().tabbability && d.userId !== ((i = t.modalizer) === null || i === void 0 ? void 0 : i.activeId) && (d = void 0, p = V), m = V) : p = V), !h && re && (!d || j) && (!V || E !== r) && (h = re, _ = !!p && p !== V), B.root && (f = B.root), !((s = B.focusable) === null || s === void 0) && s.ignoreKeydown && Object.assign(y, B.focusable.ignoreKeydown), E = l(E);
    }
    if (!f) {
      const B = t.root;
      B._autoRoot && !((a = r.ownerDocument) === null || a === void 0) && a.body && (f = B._autoRootCreate());
    }
    return p && !h && (_ = !0), process.env.NODE_ENV === "development" && !f && (d || p || h) && console.error("Tabster Root is required for Mover, Groupper and Modalizer to work."), f ? {
      root: f,
      modalizer: d,
      groupper: p,
      mover: h,
      groupperBeforeMover: _,
      modalizerInGroupper: m,
      rtl: u ? !!w : void 0,
      uncontrolled: b,
      excludedFromMover: v,
      ignoreKeydown: (B) => !!y[B.key]
    } : void 0;
  }
  static getRoot(t, r) {
    var n;
    const o = t.getParent;
    for (let i = r; i; i = o(i)) {
      const s = (n = Me(t, i)) === null || n === void 0 ? void 0 : n.root;
      if (s)
        return s;
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
class Sl {
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
    const r = this._callbacks, n = r.indexOf(t);
    n >= 0 && r.splice(n, 1), r.unshift(t);
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
    this._callbacks.forEach((n) => n(t, r));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Vg {
  constructor(t) {
    this._tabster = t;
  }
  dispose() {
  }
  getProps(t) {
    const r = Me(this._tabster, t);
    return r && r.focusable || {};
  }
  isFocusable(t, r, n, o) {
    return wl(t, os) && (r || t.tabIndex !== -1) ? (n || this.isVisible(t)) && (o || this.isAccessible(t)) : !1;
  }
  isVisible(t) {
    if (!t.ownerDocument || t.nodeType !== Node.ELEMENT_NODE || jg(t))
      return !1;
    const r = t.ownerDocument.body.getBoundingClientRect();
    return !(r.width === 0 && r.height === 0);
  }
  isAccessible(t) {
    var r;
    for (let n = t; n; n = C.getParentElement(n)) {
      const o = Me(this._tabster, n);
      if (this._isHidden(n) || !((r = o == null ? void 0 : o.focusable) === null || r === void 0 ? void 0 : r.ignoreAriaDisabled) && this._isDisabled(n))
        return !1;
    }
    return !0;
  }
  _isDisabled(t) {
    return t.hasAttribute("disabled");
  }
  _isHidden(t) {
    var r;
    const n = t.getAttribute("aria-hidden");
    return !!(n && n.toLowerCase() === "true" && !(!((r = this._tabster.modalizer) === null || r === void 0) && r.isAugmented(t)));
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
      acceptCondition: (n) => this.isFocusable(n, t.includeProgrammaticallyFocusable) && !!this.getProps(n).isDefault
    }, r) || null;
  }
  findAll(t) {
    return this._findElements(!0, t) || [];
  }
  findElement(t, r) {
    const n = this._findElements(!1, t, r);
    return n && n[0];
  }
  _findElements(t, r, n) {
    var o, i, s;
    const {
      container: a,
      currentElement: u = null,
      includeProgrammaticallyFocusable: c,
      useActiveModalizer: l,
      ignoreAccessibility: f,
      modalizerId: d,
      isBackward: p,
      onElement: h
    } = r;
    n || (n = {});
    const v = [];
    let {
      acceptCondition: _
    } = r;
    const m = !!_;
    if (!a)
      return null;
    _ || (_ = (y) => this.isFocusable(y, c, !1, f));
    const w = {
      container: a,
      modalizerUserId: d === void 0 && l ? (o = this._tabster.modalizer) === null || o === void 0 ? void 0 : o.activeId : d || ((s = (i = _e.getTabsterContext(this._tabster, a)) === null || i === void 0 ? void 0 : i.modalizer) === null || s === void 0 ? void 0 : s.userId),
      from: u || a,
      isBackward: p,
      acceptCondition: _,
      hasCustomCondition: m,
      includeProgrammaticallyFocusable: c,
      ignoreAccessibility: f,
      cachedGrouppers: {}
    }, b = is(a.ownerDocument, a, (y) => this._acceptElement(y, w));
    if (!b)
      return null;
    const E = (y) => {
      var N, B;
      const R = (N = w.foundElement) !== null && N !== void 0 ? N : w.foundBackward;
      return R && v.push(R), t ? R && (w.found = !1, delete w.foundElement, delete w.foundBackward, delete w.fromCtx, w.from = R, h && !h(R)) ? !1 : !!(R || y) : (R && n && (n.uncontrolled = (B = _e.getTabsterContext(this._tabster, R)) === null || B === void 0 ? void 0 : B.uncontrolled), !!(y && !R));
    };
    if (u || (n.outOfDOMOrder = !0), u && C.nodeContains(a, u))
      b.currentNode = u;
    else if (p) {
      const y = xl(a);
      if (!y)
        return null;
      if (this._acceptElement(y, w) === NodeFilter.FILTER_ACCEPT && !E(!0))
        return w.skippedFocusable && (n.outOfDOMOrder = !0), v;
      b.currentNode = y;
    }
    do
      p ? b.previousNode() : b.nextNode();
    while (E());
    return w.skippedFocusable && (n.outOfDOMOrder = !0), v.length ? v : null;
  }
  _acceptElement(t, r) {
    var n, o, i;
    if (r.found)
      return NodeFilter.FILTER_ACCEPT;
    const s = r.foundBackward;
    if (s && (t === s || !C.nodeContains(s, t)))
      return r.found = !0, r.foundElement = s, NodeFilter.FILTER_ACCEPT;
    const a = r.container;
    if (t === a)
      return NodeFilter.FILTER_SKIP;
    if (!C.nodeContains(a, t) || t.__tabsterDummyContainer || C.nodeContains(r.rejectElementsFrom, t))
      return NodeFilter.FILTER_REJECT;
    const u = r.currentCtx = _e.getTabsterContext(this._tabster, t);
    if (!u)
      return NodeFilter.FILTER_SKIP;
    if (El(t))
      return this.isFocusable(t, void 0, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_SKIP;
    if (!r.hasCustomCondition && (t.tagName === "IFRAME" || t.tagName === "WEBVIEW"))
      return ((n = u.modalizer) === null || n === void 0 ? void 0 : n.userId) === ((o = this._tabster.modalizer) === null || o === void 0 ? void 0 : o.activeId) ? (r.found = !0, r.rejectElementsFrom = r.foundElement = t, NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
    if (!r.ignoreAccessibility && !this.isAccessible(t))
      return this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0), NodeFilter.FILTER_REJECT;
    let c, l = r.fromCtx;
    l || (l = r.fromCtx = _e.getTabsterContext(this._tabster, r.from));
    const f = l == null ? void 0 : l.mover;
    let d = u.groupper, p = u.mover;
    if (c = (i = this._tabster.modalizer) === null || i === void 0 ? void 0 : i.acceptElement(t, r), c !== void 0 && (r.skippedFocusable = !0), c === void 0 && (d || p || f)) {
      const h = d == null ? void 0 : d.getElement(), v = f == null ? void 0 : f.getElement();
      let _ = p == null ? void 0 : p.getElement();
      _ && C.nodeContains(v, _) && C.nodeContains(a, v) && (!h || !p || C.nodeContains(v, h)) && (p = f, _ = v), h && (h === a || !C.nodeContains(a, h)) && (d = void 0), _ && !C.nodeContains(a, _) && (p = void 0), d && p && (_ && h && !C.nodeContains(h, _) ? p = void 0 : d = void 0), d && (c = d.acceptElement(t, r)), p && (c = p.acceptElement(t, r));
    }
    return c === void 0 && (c = r.acceptCondition(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, c === NodeFilter.FILTER_SKIP && this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0)), c === NodeFilter.FILTER_ACCEPT && !r.found && (r.isBackward ? (r.foundBackward = t, c = NodeFilter.FILTER_SKIP) : (r.found = !0, r.foundElement = t)), c;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Oe = {
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
function qg(e, t) {
  var r;
  const n = e.getParent;
  let o = t;
  do {
    const i = (r = Me(e, o)) === null || r === void 0 ? void 0 : r.uncontrolled;
    if (i && e.uncontrolled.isUncontrolledCompletely(o, !!i.completely))
      return o;
    o = n(o);
  } while (o);
}
const Na = {
  [Vt.Restorer]: 0,
  [Vt.Deloser]: 1,
  [Vt.EscapeGroupper]: 2
};
class me extends Sl {
  constructor(t, r) {
    super(), this._init = () => {
      const n = this._win(), o = n.document;
      o.addEventListener(gt, this._onFocusIn, !0), o.addEventListener(jr, this._onFocusOut, !0), n.addEventListener("keydown", this._onKeyDown, !0);
      const i = C.getActiveElement(o);
      i && i !== o.body && this._setFocusedElement(i), this.subscribe(this._onChanged);
    }, this._onFocusIn = (n) => {
      const o = n.composedPath()[0];
      o && this._setFocusedElement(o, n.detail.relatedTarget, n.detail.isFocusedProgrammatically);
    }, this._onFocusOut = (n) => {
      var o;
      this._setFocusedElement(void 0, (o = n.detail) === null || o === void 0 ? void 0 : o.originalEvent.relatedTarget);
    }, this._validateFocusedElement = (n) => {
    }, this._onKeyDown = (n) => {
      if (n.key !== Oe.Tab || n.ctrlKey)
        return;
      const o = this.getVal();
      if (!o || !o.ownerDocument || o.contentEditable === "true")
        return;
      const i = this._tabster, s = i.controlTab, a = _e.getTabsterContext(i, o);
      if (!a || a.ignoreKeydown(n))
        return;
      const u = n.shiftKey, c = me.findNextTabbable(i, a, void 0, o, void 0, u, !0), l = a.root.getElement();
      if (!l)
        return;
      const f = c == null ? void 0 : c.element, d = qg(i, o);
      if (f) {
        const p = c.uncontrolled;
        if (a.uncontrolled || C.nodeContains(p, o)) {
          if (!c.outOfDOMOrder && p === a.uncontrolled || d && !C.nodeContains(d, f))
            return;
          zr.addPhantomDummyWithTarget(i, o, u, f);
          return;
        }
        if (p || f.tagName === "IFRAME") {
          l.dispatchEvent(new ir({
            by: "root",
            owner: l,
            next: f,
            relatedEvent: n
          })) && zr.moveWithPhantomDummy(this._tabster, p ?? f, !1, u, n);
          return;
        }
        (s || c != null && c.outOfDOMOrder) && l.dispatchEvent(new ir({
          by: "root",
          owner: l,
          next: f,
          relatedEvent: n
        })) && (n.preventDefault(), n.stopImmediatePropagation(), _t(f));
      } else
        !d && l.dispatchEvent(new ir({
          by: "root",
          owner: l,
          next: null,
          relatedEvent: n
        })) && a.root.moveOutWithDefaultAction(u, n);
    }, this._onChanged = (n, o) => {
      var i, s;
      if (n)
        n.dispatchEvent(new Jb(o));
      else {
        const a = (i = this._lastVal) === null || i === void 0 ? void 0 : i.get();
        if (a) {
          const u = {
            ...o
          }, c = _e.getTabsterContext(this._tabster, a), l = (s = c == null ? void 0 : c.modalizer) === null || s === void 0 ? void 0 : s.userId;
          l && (u.modalizerId = l), a.dispatchEvent(new Qb(u));
        }
      }
    }, this._tabster = t, this._win = r, t.queueInit(this._init);
  }
  dispose() {
    super.dispose();
    const t = this._win(), r = t.document;
    r.removeEventListener(gt, this._onFocusIn, !0), r.removeEventListener(jr, this._onFocusOut, !0), t.removeEventListener("keydown", this._onKeyDown, !0), this.unsubscribe(this._onChanged);
    const n = this._asyncFocus;
    n && (t.clearTimeout(n.timeout), delete this._asyncFocus), delete me._lastResetElement, delete this._nextVal, delete this._lastVal;
  }
  static forgetMemorized(t, r) {
    var n, o;
    let i = me._lastResetElement, s = i && i.get();
    s && C.nodeContains(r, s) && delete me._lastResetElement, s = (o = (n = t._nextVal) === null || n === void 0 ? void 0 : n.element) === null || o === void 0 ? void 0 : o.get(), s && C.nodeContains(r, s) && delete t._nextVal, i = t._lastVal, s = i && i.get(), s && C.nodeContains(r, s) && delete t._lastVal;
  }
  getFocusedElement() {
    return this.getVal();
  }
  getLastFocusedElement() {
    var t;
    let r = (t = this._lastVal) === null || t === void 0 ? void 0 : t.get();
    return (!r || r && !ss(r.ownerDocument, r)) && (this._lastVal = r = void 0), r;
  }
  focus(t, r, n) {
    return this._tabster.focusable.isFocusable(t, r, !1, n) ? (t.focus(), !0) : !1;
  }
  focusDefault(t) {
    const r = this._tabster.focusable.findDefault({
      container: t
    });
    return r ? (this._tabster.focusedElement.focus(r), !0) : !1;
  }
  getFirstOrLastTabbable(t, r) {
    var n;
    const {
      container: o,
      ignoreAccessibility: i
    } = r;
    let s;
    if (o) {
      const a = _e.getTabsterContext(this._tabster, o);
      a && (s = (n = me.findNextTabbable(this._tabster, a, o, void 0, void 0, !t, i)) === null || n === void 0 ? void 0 : n.element);
    }
    return s && !C.nodeContains(o, s) && (s = void 0), s || void 0;
  }
  _focusFirstOrLast(t, r) {
    const n = this.getFirstOrLastTabbable(t, r);
    return n ? (this.focus(n, !1, !0), !0) : !1;
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
      const r = t.getAttribute("tabindex"), n = t.getAttribute("aria-hidden");
      t.tabIndex = -1, t.setAttribute("aria-hidden", "true"), me._lastResetElement = new Ye(this._win, t), this.focus(t, !0, !0), this._setOrRemoveAttribute(t, "tabindex", r), this._setOrRemoveAttribute(t, "aria-hidden", n);
    }
    return !0;
  }
  requestAsyncFocus(t, r, n) {
    const o = this._tabster.getWindow(), i = this._asyncFocus;
    if (i) {
      if (Na[t] > Na[i.source])
        return;
      o.clearTimeout(i.timeout);
    }
    this._asyncFocus = {
      source: t,
      callback: r,
      timeout: o.setTimeout(() => {
        this._asyncFocus = void 0, r();
      }, n)
    };
  }
  cancelAsyncFocus(t) {
    const r = this._asyncFocus;
    (r == null ? void 0 : r.source) === t && (this._tabster.getWindow().clearTimeout(r.timeout), this._asyncFocus = void 0);
  }
  _setOrRemoveAttribute(t, r, n) {
    n === null ? t.removeAttribute(r) : t.setAttribute(r, n);
  }
  _setFocusedElement(t, r, n) {
    var o, i;
    if (this._tabster._noop)
      return;
    const s = {
      relatedTarget: r
    };
    if (t) {
      const u = (o = me._lastResetElement) === null || o === void 0 ? void 0 : o.get();
      if (me._lastResetElement = void 0, u === t || El(t))
        return;
      s.isFocusedProgrammatically = n;
      const c = _e.getTabsterContext(this._tabster, t), l = (i = c == null ? void 0 : c.modalizer) === null || i === void 0 ? void 0 : i.userId;
      l && (s.modalizerId = l);
    }
    const a = this._nextVal = {
      element: t ? new Ye(this._win, t) : void 0,
      detail: s
    };
    t && t !== this._val && this._validateFocusedElement(t), this._nextVal === a && this.setVal(t, s), this._nextVal = void 0;
  }
  setVal(t, r) {
    super.setVal(t, r), t && (this._lastVal = new Ye(this._win, t));
  }
  static findNextTabbable(t, r, n, o, i, s, a) {
    const u = n || r.root.getElement();
    if (!u)
      return null;
    let c = null;
    const l = me._isTabbingTimer, f = t.getWindow();
    l && f.clearTimeout(l), me.isTabbing = !0, me._isTabbingTimer = f.setTimeout(() => {
      delete me._isTabbingTimer, me.isTabbing = !1;
    }, 0);
    const d = r.modalizer, p = r.groupper, h = r.mover, v = (_) => {
      if (c = _.findNextTabbable(o, i, s, a), o && !(c != null && c.element)) {
        const m = _ !== d && C.getParentElement(_.getElement());
        if (m) {
          const w = _e.getTabsterContext(t, o, {
            referenceElement: m
          });
          if (w) {
            const b = _.getElement(), E = s ? b : b && xl(b) || b;
            E && (c = me.findNextTabbable(t, w, n, E, m, s, a), c && (c.outOfDOMOrder = !0));
          }
        }
      }
    };
    if (p && h)
      v(r.groupperBeforeMover ? p : h);
    else if (p)
      v(p);
    else if (h)
      v(h);
    else if (d)
      v(d);
    else {
      const _ = {
        container: u,
        currentElement: o,
        referenceElement: i,
        ignoreAccessibility: a,
        useActiveModalizer: !0
      }, m = {};
      c = {
        element: t.focusable[s ? "findPrev" : "findNext"](_, m),
        outOfDOMOrder: m.outOfDOMOrder,
        uncontrolled: m.uncontrolled
      };
    }
    return c;
  }
}
me.isTabbing = !1;
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Ug extends Sl {
  constructor(t) {
    super(), this._onChange = (r) => {
      this.setVal(r, void 0);
    }, this._keyborg = dl(t()), this._keyborg.subscribe(this._onChange);
  }
  dispose() {
    super.dispose(), this._keyborg && (this._keyborg.unsubscribe(this._onChange), hl(this._keyborg), delete this._keyborg);
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
let $g = 0;
const Fo = "aria-hidden";
function jo(e, t, r, n, o, i) {
  if (process.env.NODE_ENV === "development") {
    const s = e.get();
    s && (t ? s.style.removeProperty("--tabster-modalizer") : s.style.setProperty("--tabster-modalizer", r + "," + n + "," + (o ? "active" : "inactive") + ",," + (i ? `focused(${i})` : "not-focused")));
  }
}
class Wg extends zr {
  constructor(t, r, n) {
    super(r, t, as.Modalizer, n), this._setHandlers((o, i) => {
      var s, a, u;
      const c = t.get(), l = c && ((s = _e.getRoot(r, c)) === null || s === void 0 ? void 0 : s.getElement()), f = o.input;
      let d;
      if (l && f) {
        const p = (a = f.__tabsterDummyContainer) === null || a === void 0 ? void 0 : a.get(), h = _e.getTabsterContext(r, p || f);
        h && (d = (u = me.findNextTabbable(r, h, l, f, void 0, i, !0)) === null || u === void 0 ? void 0 : u.element), d && _t(d);
      }
    });
  }
}
class Hg extends io {
  constructor(t, r, n, o, i, s) {
    super(t, r, o), this._wasFocused = 0, this.userId = o.id, this._onDispose = n, this._activeElements = s, t.controlTab || (this.dummyManager = new Wg(this._element, t, i)), process.env.NODE_ENV === "development" && jo(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused);
  }
  makeActive(t) {
    if (this._isActive !== t) {
      this._isActive = t;
      const r = this.getElement();
      if (r) {
        const n = this._activeElements, o = n.map((i) => i.get()).indexOf(r);
        t ? o < 0 && n.push(new Ye(this._tabster.getWindow, r)) : o >= 0 && n.splice(o, 1);
      }
      process.env.NODE_ENV === "development" && jo(this._element, !1, this.id, this.userId, this._isActive, this._wasFocused), this._dispatchEvent(t);
    }
  }
  focused(t) {
    return t || (this._wasFocused = ++$g), this._wasFocused;
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
    return C.nodeContains(this.getElement(), t);
  }
  findNextTabbable(t, r, n, o) {
    var i, s;
    if (!this.getElement())
      return null;
    const u = this._tabster;
    let c = null, l = !1, f;
    const d = t && ((i = _e.getRoot(u, t)) === null || i === void 0 ? void 0 : i.getElement());
    if (d) {
      const p = {
        container: d,
        currentElement: t,
        referenceElement: r,
        ignoreAccessibility: o,
        useActiveModalizer: !0
      }, h = {};
      c = u.focusable[n ? "findPrev" : "findNext"](p, h), !c && this._props.isTrapped && (!((s = u.modalizer) === null || s === void 0) && s.activeId) ? (c = u.focusable[n ? "findLast" : "findFirst"]({
        container: d,
        ignoreAccessibility: o,
        useActiveModalizer: !0
      }, h), l = !0) : l = !!h.outOfDOMOrder, f = h.uncontrolled;
    }
    return {
      element: c,
      uncontrolled: f,
      outOfDOMOrder: l
    };
  }
  _dispatchEvent(t, r) {
    const n = this.getElement();
    let o = !1;
    if (n) {
      const i = r ? this._activeElements.map((s) => s.get()) : [n];
      for (const s of i)
        if (s) {
          const a = {
            id: this.userId,
            element: n
          }, u = t ? new Zb(a) : new eg(a);
          s.dispatchEvent(u), u.defaultPrevented && (o = !0);
        }
    }
    return o;
  }
  _remove() {
    process.env.NODE_ENV === "development" && jo(this._element, !0);
  }
}
class Kg {
  constructor(t, r, n) {
    this._onModalizerDispose = (i) => {
      const s = i.id, a = i.userId, u = this._parts[a];
      delete this._modalizers[s], u && (delete u[s], Object.keys(u).length === 0 && (delete this._parts[a], this.activeId === a && this.setActive(void 0)));
    }, this._onKeyDown = (i) => {
      var s;
      if (i.key !== Oe.Escape)
        return;
      const a = this._tabster, u = a.focusedElement.getFocusedElement();
      if (u) {
        const c = _e.getTabsterContext(a, u), l = c == null ? void 0 : c.modalizer;
        if (c && !c.groupper && (l != null && l.isActive()) && !c.ignoreKeydown(i)) {
          const f = l.userId;
          if (f) {
            const d = this._parts[f];
            if (d) {
              const p = Object.keys(d).map((h) => {
                var v;
                const _ = d[h], m = _.getElement();
                let w;
                return m && (w = (v = Me(this._tabster, m)) === null || v === void 0 ? void 0 : v.groupper), _ && m && w ? {
                  el: m,
                  focusedSince: _.focused(!0)
                } : {
                  focusedSince: 0
                };
              }).filter((h) => h.focusedSince > 0).sort((h, v) => h.focusedSince > v.focusedSince ? -1 : h.focusedSince < v.focusedSince ? 1 : 0);
              if (p.length) {
                const h = p[0].el;
                h && ((s = a.groupper) === null || s === void 0 || s.handleKeyPress(h, i, !0));
              }
            }
          }
        }
      }
    }, this._onFocus = (i, s) => {
      var a, u;
      const c = i && _e.getTabsterContext(this._tabster, i);
      if (!c || !i)
        return;
      const l = this._augMap;
      for (let d = i; d; d = C.getParentElement(d))
        l.has(d) && (l.delete(d), Io(this._tabster, d, Fo));
      const f = c.modalizer;
      if ((u = f || ((a = Me(this._tabster, i)) === null || a === void 0 ? void 0 : a.modalizer)) === null || u === void 0 || u.focused(), (f == null ? void 0 : f.userId) === this.activeId) {
        this.currentIsOthersAccessible = f == null ? void 0 : f.getProps().isOthersAccessible;
        return;
      }
      if (s.isFocusedProgrammatically || this.currentIsOthersAccessible || f != null && f.getProps().isAlwaysAccessible)
        this.setActive(f);
      else {
        const d = this._win();
        d.clearTimeout(this._restoreModalizerFocusTimer), this._restoreModalizerFocusTimer = d.setTimeout(() => this._restoreModalizerFocus(i), 100);
      }
    }, this._tabster = t, this._win = t.getWindow, this._modalizers = {}, this._parts = {}, this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._alwaysAccessibleSelector = r, this._accessibleCheck = n, this.activeElements = [], t.controlTab || t.root.addDummyInputs(), this._win().addEventListener("keydown", this._onKeyDown, !0), t.queueInit(() => {
      this._tabster.focusedElement.subscribe(this._onFocus);
    });
  }
  dispose() {
    const t = this._win();
    t.removeEventListener("keydown", this._onKeyDown, !0), Object.keys(this._modalizers).forEach((r) => {
      this._modalizers[r] && (this._modalizers[r].dispose(), delete this._modalizers[r]);
    }), t.clearTimeout(this._restoreModalizerFocusTimer), t.clearTimeout(this._hiddenUpdateTimer), this._parts = {}, delete this.activeId, this.activeElements = [], this._augMap = /* @__PURE__ */ new WeakMap(), this._aug = [], this._tabster.focusedElement.unsubscribe(this._onFocus);
  }
  createModalizer(t, r, n) {
    var o;
    process.env.NODE_ENV;
    const i = new Hg(this._tabster, t, this._onModalizerDispose, r, n, this.activeElements), s = i.id, a = r.id;
    this._modalizers[s] = i;
    let u = this._parts[a];
    return u || (u = this._parts[a] = {}), u[s] = i, C.nodeContains(t, (o = this._tabster.focusedElement.getFocusedElement()) !== null && o !== void 0 ? o : null) && (a !== this.activeId ? this.setActive(i) : i.makeActive(!0)), i;
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
    const r = t == null ? void 0 : t.userId, n = this.activeId;
    if (n !== r) {
      if (this.activeId = r, n) {
        const o = this._parts[n];
        if (o)
          for (const i of Object.keys(o))
            o[i].makeActive(!1);
      }
      if (r) {
        const o = this._parts[r];
        if (o)
          for (const i of Object.keys(o))
            o[i].makeActive(!0);
      }
      this.currentIsOthersAccessible = t == null ? void 0 : t.getProps().isOthersAccessible, this.hiddenUpdate();
    }
  }
  focus(t, r, n) {
    const o = _e.getTabsterContext(this._tabster, t), i = o == null ? void 0 : o.modalizer;
    if (i) {
      this.setActive(i);
      const s = i.getProps(), a = i.getElement();
      if (a) {
        if (r === void 0 && (r = s.isNoFocusFirst), !r && this._tabster.keyboardNavigation.isNavigatingWithKeyboard() && this._tabster.focusedElement.focusFirst({
          container: a
        }) || (n === void 0 && (n = s.isNoFocusDefault), !n && this._tabster.focusedElement.focusDefault(a)))
          return !0;
        this._tabster.focusedElement.resetFocus(a);
      }
    } else
      process.env.NODE_ENV === "development" && console.error("Element is not in Modalizer.", t);
    return !1;
  }
  acceptElement(t, r) {
    var n;
    const o = r.modalizerUserId, i = (n = r.currentCtx) === null || n === void 0 ? void 0 : n.modalizer;
    if (o)
      for (const a of this.activeElements) {
        const u = a.get();
        if (u && (C.nodeContains(t, u) || u === t))
          return NodeFilter.FILTER_SKIP;
      }
    const s = o === (i == null ? void 0 : i.userId) || !o && (i != null && i.getProps().isAlwaysAccessible) ? void 0 : NodeFilter.FILTER_SKIP;
    return s !== void 0 && (r.skippedFocusable = !0), s;
  }
  _hiddenUpdate() {
    var t;
    const r = this._tabster, n = r.getWindow().document.body, o = this.activeId, i = this._parts, s = [], a = [], u = this._alwaysAccessibleSelector, c = u ? Array.from(C.querySelectorAll(n, u)) : [], l = [];
    for (const m of Object.keys(i)) {
      const w = i[m];
      for (const b of Object.keys(w)) {
        const E = w[b], y = E.getElement(), B = E.getProps().isAlwaysAccessible;
        y && (m === o ? (l.push(y), this.currentIsOthersAccessible || s.push(y)) : B ? c.push(y) : a.push(y));
      }
    }
    const f = this._augMap, d = s.length > 0 ? [...s, ...c] : void 0, p = [], h = /* @__PURE__ */ new WeakMap(), v = (m, w) => {
      var b;
      const E = m.tagName;
      if (E === "SCRIPT" || E === "STYLE")
        return;
      let y = !1;
      f.has(m) ? w ? y = !0 : (f.delete(m), Io(r, m, Fo)) : w && !(!((b = this._accessibleCheck) === null || b === void 0) && b.call(this, m, l)) && Io(r, m, Fo, "true") && (f.set(m, !0), y = !0), y && (p.push(new Ye(r.getWindow, m)), h.set(m, !0));
    }, _ = (m) => {
      for (let w = C.getFirstElementChild(m); w; w = C.getNextElementSibling(w)) {
        let b = !1, E = !1, y = !1;
        if (d) {
          const N = r.getParent(w);
          for (const B of d) {
            if (w === B) {
              b = !0;
              break;
            }
            if (C.nodeContains(w, B)) {
              E = !0;
              break;
            } else
              C.nodeContains(B, N) && (y = !0);
          }
          E ? _(w) : !b && !y && v(w, !0);
        } else
          v(w, !1);
      }
    };
    d || c.forEach((m) => v(m, !1)), a.forEach((m) => v(m, !0)), n && _(n), (t = this._aug) === null || t === void 0 || t.map((m) => m.get()).forEach((m) => {
      m && !h.get(m) && v(m, !1);
    }), this._aug = p, this._augMap = h;
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
    const n = _e.getTabsterContext(this._tabster, t), o = n == null ? void 0 : n.modalizer, i = this.activeId;
    if (!o && !i || o && i === o.userId)
      return;
    const s = n == null ? void 0 : n.root.getElement();
    if (s) {
      let a = this._tabster.focusable.findFirst({
        container: s,
        useActiveModalizer: !0
      });
      if (a) {
        if (t.compareDocumentPosition(a) & document.DOCUMENT_POSITION_PRECEDING && (a = this._tabster.focusable.findLast({
          container: s,
          useActiveModalizer: !0
        }), !a))
          throw new Error("Something went wrong.");
        this._tabster.focusedElement.focus(a);
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
const Gg = /* @__PURE__ */ ["input", "textarea", "*[contenteditable]"].join(", ");
class Yg extends zr {
  constructor(t, r, n, o) {
    super(r, t, as.Mover, o), this._onFocusDummyInput = (i) => {
      var s, a;
      const u = this._element.get(), c = i.input;
      if (u && c) {
        const l = _e.getTabsterContext(this._tabster, u);
        let f;
        l && (f = (s = me.findNextTabbable(this._tabster, l, void 0, c, void 0, !i.isFirst, !0)) === null || s === void 0 ? void 0 : s.element);
        const d = (a = this._getMemorized()) === null || a === void 0 ? void 0 : a.get();
        d && (f = d), f && _t(f);
      }
    }, this._tabster = r, this._getMemorized = n, this._setHandlers(this._onFocusDummyInput);
  }
}
const Mo = 1, Ca = 2, ka = 3;
class Xg extends io {
  constructor(t, r, n, o, i) {
    var s;
    super(t, r, o), this._visible = {}, this._onIntersection = (u) => {
      for (const c of u) {
        const l = c.target, f = Tn(this._win, l);
        let d, p = this._fullyVisible;
        if (c.intersectionRatio >= 0.25 ? (d = c.intersectionRatio >= 0.75 ? ft.Visible : ft.PartiallyVisible, d === ft.Visible && (p = f)) : d = ft.Invisible, this._visible[f] !== d) {
          d === void 0 ? (delete this._visible[f], p === f && delete this._fullyVisible) : (this._visible[f] = d, this._fullyVisible = p);
          const h = this.getState(l);
          h && l.dispatchEvent(new ya(h));
        }
      }
    }, this._win = t.getWindow, this.visibilityTolerance = (s = o.visibilityTolerance) !== null && s !== void 0 ? s : 0.8, (this._props.trackState || this._props.visibilityAware) && (this._intersectionObserver = new IntersectionObserver(this._onIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }), this._observeState()), this._onDispose = n;
    const a = () => o.memorizeCurrent ? this._current : void 0;
    t.controlTab || (this.dummyManager = new Yg(this._element, t, a, i));
  }
  dispose() {
    var t;
    this._onDispose(this), this._intersectionObserver && (this._intersectionObserver.disconnect(), delete this._intersectionObserver), delete this._current, delete this._fullyVisible, delete this._allElements, delete this._updateQueue, this._unobserve && (this._unobserve(), delete this._unobserve);
    const r = this._win();
    this._setCurrentTimer && (r.clearTimeout(this._setCurrentTimer), delete this._setCurrentTimer), this._updateTimer && (r.clearTimeout(this._updateTimer), delete this._updateTimer), (t = this.dummyManager) === null || t === void 0 || t.dispose(), delete this.dummyManager;
  }
  setCurrent(t) {
    t ? this._current = new Ye(this._win, t) : this._current = void 0, (this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer && (this._setCurrentTimer = this._win().setTimeout(() => {
      var r;
      delete this._setCurrentTimer;
      const n = [];
      this._current !== this._prevCurrent && (n.push(this._current), n.push(this._prevCurrent), this._prevCurrent = this._current);
      for (const o of n) {
        const i = o == null ? void 0 : o.get();
        if (i && ((r = this._allElements) === null || r === void 0 ? void 0 : r.get(i)) === this) {
          const s = this._props;
          if (i && (s.visibilityAware !== void 0 || s.trackState)) {
            const a = this.getState(i);
            a && i.dispatchEvent(new ya(a));
          }
        }
      }
    }));
  }
  getCurrent() {
    var t;
    return ((t = this._current) === null || t === void 0 ? void 0 : t.get()) || null;
  }
  findNextTabbable(t, r, n, o) {
    var i;
    const s = this.getElement(), a = s && ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === s;
    if (!s)
      return null;
    let u = null, c = !1, l;
    if (this._props.tabbable || a || t && !C.nodeContains(s, t)) {
      const f = {
        currentElement: t,
        referenceElement: r,
        container: s,
        ignoreAccessibility: o,
        useActiveModalizer: !0
      }, d = {};
      u = this._tabster.focusable[n ? "findPrev" : "findNext"](f, d), c = !!d.outOfDOMOrder, l = d.uncontrolled;
    }
    return {
      element: u,
      uncontrolled: l,
      outOfDOMOrder: c
    };
  }
  acceptElement(t, r) {
    var n, o, i;
    if (!me.isTabbing)
      return !((n = r.currentCtx) === null || n === void 0) && n.excludedFromMover ? NodeFilter.FILTER_REJECT : void 0;
    const {
      memorizeCurrent: s,
      visibilityAware: a,
      hasDefault: u = !0
    } = this._props, c = this.getElement();
    if (c && (s || a || u) && (!C.nodeContains(c, r.from) || ((o = r.from.__tabsterDummyContainer) === null || o === void 0 ? void 0 : o.get()) === c)) {
      let l;
      if (s) {
        const f = (i = this._current) === null || i === void 0 ? void 0 : i.get();
        f && r.acceptCondition(f) && (l = f);
      }
      if (!l && u && (l = this._tabster.focusable.findDefault({
        container: c,
        useActiveModalizer: !0
      })), !l && a && (l = this._tabster.focusable.findElement({
        container: c,
        useActiveModalizer: !0,
        isBackward: r.isBackward,
        acceptCondition: (f) => {
          var d;
          const p = Tn(this._win, f), h = this._visible[p];
          return c !== f && !!(!((d = this._allElements) === null || d === void 0) && d.get(f)) && r.acceptCondition(f) && (h === ft.Visible || h === ft.PartiallyVisible && (a === ft.PartiallyVisible || !this._fullyVisible));
        }
      })), l)
        return r.found = !0, r.foundElement = l, r.rejectElementsFrom = c, r.skippedFocusable = !0, NodeFilter.FILTER_ACCEPT;
    }
  }
  _observeState() {
    const t = this.getElement();
    if (this._unobserve || !t || typeof MutationObserver > "u")
      return;
    const r = this._win(), n = this._allElements = /* @__PURE__ */ new WeakMap(), o = this._tabster.focusable;
    let i = this._updateQueue = [];
    const s = C.createMutationObserver((p) => {
      for (const h of p) {
        const v = h.target, _ = h.removedNodes, m = h.addedNodes;
        if (h.type === "attributes")
          h.attributeName === "tabindex" && i.push({
            element: v,
            type: Ca
          });
        else {
          for (let w = 0; w < _.length; w++)
            i.push({
              element: _[w],
              type: ka
            });
          for (let w = 0; w < m.length; w++)
            i.push({
              element: m[w],
              type: Mo
            });
        }
      }
      f();
    }), a = (p, h) => {
      var v, _;
      const m = n.get(p);
      m && h && ((v = this._intersectionObserver) === null || v === void 0 || v.unobserve(p), n.delete(p)), !m && !h && (n.set(p, this), (_ = this._intersectionObserver) === null || _ === void 0 || _.observe(p));
    }, u = (p) => {
      const h = o.isFocusable(p);
      n.get(p) ? h || a(p, !0) : h && a(p);
    }, c = (p) => {
      const {
        mover: h
      } = d(p);
      if (h && h !== this)
        if (h.getElement() === p && o.isFocusable(p))
          a(p);
        else
          return;
      const v = is(r.document, p, (_) => {
        const {
          mover: m,
          groupper: w
        } = d(_);
        if (m && m !== this)
          return NodeFilter.FILTER_REJECT;
        const b = w == null ? void 0 : w.getFirst(!0);
        return w && w.getElement() !== _ && b && b !== _ ? NodeFilter.FILTER_REJECT : (o.isFocusable(_) && a(_), NodeFilter.FILTER_SKIP);
      });
      if (v)
        for (v.currentNode = p; v.nextNode(); )
          ;
    }, l = (p) => {
      n.get(p) && a(p, !0);
      for (let v = C.getFirstElementChild(p); v; v = C.getNextElementSibling(v))
        l(v);
    }, f = () => {
      !this._updateTimer && i.length && (this._updateTimer = r.setTimeout(() => {
        delete this._updateTimer;
        for (const {
          element: p,
          type: h
        } of i)
          switch (h) {
            case Ca:
              u(p);
              break;
            case Mo:
              c(p);
              break;
            case ka:
              l(p);
              break;
          }
        i = this._updateQueue = [];
      }, 0));
    }, d = (p) => {
      const h = {};
      for (let v = p; v; v = C.getParentElement(v)) {
        const _ = Me(this._tabster, v);
        if (_ && (_.groupper && !h.groupper && (h.groupper = _.groupper), _.mover)) {
          h.mover = _.mover;
          break;
        }
      }
      return h;
    };
    i.push({
      element: t,
      type: Mo
    }), f(), s.observe(t, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["tabindex"]
    }), this._unobserve = () => {
      s.disconnect();
    };
  }
  getState(t) {
    const r = Tn(this._win, t);
    if (r in this._visible) {
      const n = this._visible[r] || ft.Invisible;
      return {
        isCurrent: this._current ? this._current.get() === t : void 0,
        visibility: n
      };
    }
  }
}
function Jg(e, t, r, n, o, i, s, a) {
  const u = r < o ? o - r : s < e ? e - s : 0, c = n < i ? i - n : a < t ? t - a : 0;
  return u === 0 ? c : c === 0 ? u : Math.sqrt(u * u + c * c);
}
class Qg {
  constructor(t, r) {
    this._init = () => {
      const n = this._win();
      n.addEventListener("keydown", this._onKeyDown, !0), n.addEventListener(ga, this._onMoveFocus), n.addEventListener(_a, this._onMemorizedElement), this._tabster.focusedElement.subscribe(this._onFocus);
    }, this._onMoverDispose = (n) => {
      delete this._movers[n.id];
    }, this._onFocus = (n) => {
      var o;
      let i = n, s = n;
      for (let a = C.getParentElement(n); a; a = C.getParentElement(a)) {
        const u = (o = Me(this._tabster, a)) === null || o === void 0 ? void 0 : o.mover;
        u && (u.setCurrent(s), i = void 0), !i && this._tabster.focusable.isFocusable(a) && (i = s = a);
      }
    }, this._onKeyDown = async (n) => {
      var o;
      if (this._ignoredInputTimer && (this._win().clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), (o = this._ignoredInputResolve) === null || o === void 0 || o.call(this, !1), n.ctrlKey || n.altKey || n.shiftKey || n.metaKey)
        return;
      const i = n.key;
      let s;
      if (i === Oe.ArrowDown ? s = ve.ArrowDown : i === Oe.ArrowRight ? s = ve.ArrowRight : i === Oe.ArrowUp ? s = ve.ArrowUp : i === Oe.ArrowLeft ? s = ve.ArrowLeft : i === Oe.PageDown ? s = ve.PageDown : i === Oe.PageUp ? s = ve.PageUp : i === Oe.Home ? s = ve.Home : i === Oe.End && (s = ve.End), !s)
        return;
      const a = this._tabster.focusedElement.getFocusedElement();
      !a || await this._isIgnoredInput(a, i) || this._moveFocus(a, s, n);
    }, this._onMoveFocus = (n) => {
      var o;
      const i = n.composedPath()[0], s = (o = n.detail) === null || o === void 0 ? void 0 : o.key;
      i && s !== void 0 && !n.defaultPrevented && (this._moveFocus(i, s), n.stopImmediatePropagation());
    }, this._onMemorizedElement = (n) => {
      var o;
      const i = n.composedPath()[0];
      let s = (o = n.detail) === null || o === void 0 ? void 0 : o.memorizedElement;
      if (i) {
        const a = _e.getTabsterContext(this._tabster, i), u = a == null ? void 0 : a.mover;
        u && (s && !C.nodeContains(u.getElement(), s) && (s = void 0), u.setCurrent(s), n.stopImmediatePropagation());
      }
    }, this._tabster = t, this._win = r, this._movers = {}, t.queueInit(this._init);
  }
  dispose() {
    var t;
    const r = this._win();
    this._tabster.focusedElement.unsubscribe(this._onFocus), (t = this._ignoredInputResolve) === null || t === void 0 || t.call(this, !1), this._ignoredInputTimer && (r.clearTimeout(this._ignoredInputTimer), delete this._ignoredInputTimer), r.removeEventListener("keydown", this._onKeyDown, !0), r.removeEventListener(ga, this._onMoveFocus), r.removeEventListener(_a, this._onMemorizedElement), Object.keys(this._movers).forEach((n) => {
      this._movers[n] && (this._movers[n].dispose(), delete this._movers[n]);
    });
  }
  createMover(t, r, n) {
    process.env.NODE_ENV;
    const o = new Xg(this._tabster, t, this._onMoverDispose, r, n);
    return this._movers[o.id] = o, o;
  }
  moveFocus(t, r) {
    return this._moveFocus(t, r);
  }
  _moveFocus(t, r, n) {
    var o, i;
    const s = this._tabster, a = _e.getTabsterContext(s, t, {
      checkRtl: !0
    });
    if (!a || !a.mover || a.excludedFromMover || n && a.ignoreKeydown(n))
      return null;
    const u = a.mover, c = u.getElement();
    if (a.groupperBeforeMover) {
      const R = a.groupper;
      if (R && !R.isActive(!0)) {
        for (let j = C.getParentElement(R.getElement()); j && j !== c; j = C.getParentElement(j))
          if (!((i = (o = Me(s, j)) === null || o === void 0 ? void 0 : o.groupper) === null || i === void 0) && i.isActive(!0))
            return null;
      } else
        return null;
    }
    if (!c)
      return null;
    const l = s.focusable, f = u.getProps(), d = f.direction || Bt.Both, p = d === Bt.Both, h = p || d === Bt.Vertical, v = p || d === Bt.Horizontal, _ = d === Bt.GridLinear, m = _ || d === Bt.Grid, w = f.cyclic;
    let b, E, y, N = 0, B = 0;
    if (m && (y = t.getBoundingClientRect(), N = Math.ceil(y.left), B = Math.floor(y.right)), a.rtl && (r === ve.ArrowRight ? r = ve.ArrowLeft : r === ve.ArrowLeft && (r = ve.ArrowRight)), r === ve.ArrowDown && h || r === ve.ArrowRight && (v || m))
      if (b = l.findNext({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), b && m) {
        const R = Math.ceil(b.getBoundingClientRect().left);
        !_ && B > R && (b = void 0);
      } else
        !b && w && (b = l.findFirst({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === ve.ArrowUp && h || r === ve.ArrowLeft && (v || m))
      if (b = l.findPrev({
        currentElement: t,
        container: c,
        useActiveModalizer: !0
      }), b && m) {
        const R = Math.floor(b.getBoundingClientRect().right);
        !_ && R > N && (b = void 0);
      } else
        !b && w && (b = l.findLast({
          container: c,
          useActiveModalizer: !0
        }));
    else if (r === ve.Home)
      m ? l.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (R) => {
          var j;
          if (!l.isFocusable(R))
            return !1;
          const V = Math.ceil((j = R.getBoundingClientRect().left) !== null && j !== void 0 ? j : 0);
          return R !== t && N <= V ? !0 : (b = R, !1);
        }
      }) : b = l.findFirst({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === ve.End)
      m ? l.findElement({
        container: c,
        currentElement: t,
        useActiveModalizer: !0,
        acceptCondition: (R) => {
          var j;
          if (!l.isFocusable(R))
            return !1;
          const V = Math.ceil((j = R.getBoundingClientRect().left) !== null && j !== void 0 ? j : 0);
          return R !== t && N >= V ? !0 : (b = R, !1);
        }
      }) : b = l.findLast({
        container: c,
        useActiveModalizer: !0
      });
    else if (r === ve.PageUp) {
      if (l.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        isBackward: !0,
        acceptCondition: (R) => l.isFocusable(R) ? xa(this._win, R, u.visibilityTolerance) ? (b = R, !1) : !0 : !1
      }), m && b) {
        const R = Math.ceil(b.getBoundingClientRect().left);
        l.findElement({
          currentElement: b,
          container: c,
          useActiveModalizer: !0,
          acceptCondition: (j) => {
            if (!l.isFocusable(j))
              return !1;
            const V = Math.ceil(j.getBoundingClientRect().left);
            return N < V || R >= V ? !0 : (b = j, !1);
          }
        });
      }
      E = !1;
    } else if (r === ve.PageDown) {
      if (l.findElement({
        currentElement: t,
        container: c,
        useActiveModalizer: !0,
        acceptCondition: (R) => l.isFocusable(R) ? xa(this._win, R, u.visibilityTolerance) ? (b = R, !1) : !0 : !1
      }), m && b) {
        const R = Math.ceil(b.getBoundingClientRect().left);
        l.findElement({
          currentElement: b,
          container: c,
          useActiveModalizer: !0,
          isBackward: !0,
          acceptCondition: (j) => {
            if (!l.isFocusable(j))
              return !1;
            const V = Math.ceil(j.getBoundingClientRect().left);
            return N > V || R <= V ? !0 : (b = j, !1);
          }
        });
      }
      E = !0;
    } else if (m) {
      const R = r === ve.ArrowUp, j = N, V = Math.ceil(y.top), re = B, Ee = Math.floor(y.bottom);
      let k, Y, Ne = 0;
      l.findAll({
        container: c,
        currentElement: t,
        isBackward: R,
        onElement: (ie) => {
          const fe = ie.getBoundingClientRect(), D = Math.ceil(fe.left), L = Math.ceil(fe.top), x = Math.floor(fe.right), T = Math.floor(fe.bottom);
          if (R && V < T || !R && Ee > L)
            return !0;
          const M = Math.ceil(Math.min(re, x)) - Math.floor(Math.max(j, D)), q = Math.ceil(Math.min(re - j, x - D));
          if (M > 0 && q >= M) {
            const z = M / q;
            z > Ne && (k = ie, Ne = z);
          } else if (Ne === 0) {
            const z = Jg(j, V, re, Ee, D, L, x, T);
            (Y === void 0 || z < Y) && (Y = z, k = ie);
          } else if (Ne > 0)
            return !1;
          return !0;
        }
      }), b = k;
    }
    return b && (!n || n && c.dispatchEvent(new ir({
      by: "mover",
      owner: c,
      next: b,
      relatedEvent: n
    }))) ? (E !== void 0 && kg(this._win, b, E), n && (n.preventDefault(), n.stopImmediatePropagation()), _t(b), b) : null;
  }
  async _isIgnoredInput(t, r) {
    if (t.getAttribute("aria-expanded") === "true" && t.hasAttribute("aria-activedescendant"))
      return !0;
    if (wl(t, Gg)) {
      let n = 0, o = 0, i = 0, s;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
        const a = t.type;
        if (i = (t.value || "").length, a === "email" || a === "number") {
          if (i) {
            const c = C.getSelection(t);
            if (c) {
              const l = c.toString().length, f = r === Oe.ArrowLeft || r === Oe.ArrowUp;
              if (c.modify("extend", f ? "backward" : "forward", "character"), l !== c.toString().length)
                return c.modify("extend", f ? "forward" : "backward", "character"), !0;
              i = 0;
            }
          }
        } else {
          const c = t.selectionStart;
          if (c === null)
            return a === "hidden";
          n = c || 0, o = t.selectionEnd || 0;
        }
      } else
        t.contentEditable === "true" && (s = new (Ag(this._win))((a) => {
          this._ignoredInputResolve = (p) => {
            delete this._ignoredInputResolve, a(p);
          };
          const u = this._win();
          this._ignoredInputTimer && u.clearTimeout(this._ignoredInputTimer);
          const {
            anchorNode: c,
            focusNode: l,
            anchorOffset: f,
            focusOffset: d
          } = C.getSelection(t) || {};
          this._ignoredInputTimer = u.setTimeout(() => {
            var p, h, v;
            delete this._ignoredInputTimer;
            const {
              anchorNode: _,
              focusNode: m,
              anchorOffset: w,
              focusOffset: b
            } = C.getSelection(t) || {};
            if (_ !== c || m !== l || w !== f || b !== d) {
              (p = this._ignoredInputResolve) === null || p === void 0 || p.call(this, !1);
              return;
            }
            if (n = w || 0, o = b || 0, i = ((h = t.textContent) === null || h === void 0 ? void 0 : h.length) || 0, _ && m && C.nodeContains(t, _) && C.nodeContains(t, m) && _ !== t) {
              let E = !1;
              const y = (N) => {
                if (N === _)
                  E = !0;
                else if (N === m)
                  return !0;
                const B = N.textContent;
                if (B && !C.getFirstChild(N)) {
                  const j = B.length;
                  E ? m !== _ && (o += j) : (n += j, o += j);
                }
                let R = !1;
                for (let j = C.getFirstChild(N); j && !R; j = j.nextSibling)
                  R = y(j);
                return R;
              };
              y(t);
            }
            (v = this._ignoredInputResolve) === null || v === void 0 || v.call(this, !0);
          }, 0);
        }));
      if (s && !await s || n !== o || n > 0 && (r === Oe.ArrowLeft || r === Oe.ArrowUp || r === Oe.Home) || n < i && (r === Oe.ArrowRight || r === Oe.ArrowDown || r === Oe.End))
        return !0;
    }
    return !1;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function Zg(e, t, r, n) {
  if (typeof MutationObserver > "u")
    return () => {
    };
  const o = t.getWindow;
  let i;
  const s = (l) => {
    var f, d, p, h, v;
    const _ = /* @__PURE__ */ new Set();
    for (const m of l) {
      const w = m.target, b = m.removedNodes, E = m.addedNodes;
      if (m.type === "attributes")
        m.attributeName === mt && (_.has(w) || r(t, w));
      else {
        for (let y = 0; y < b.length; y++) {
          const N = b[y];
          _.add(N), a(N, !0), (d = (f = t._dummyObserver).domChanged) === null || d === void 0 || d.call(f, w);
        }
        for (let y = 0; y < E.length; y++)
          a(E[y]), (h = (p = t._dummyObserver).domChanged) === null || h === void 0 || h.call(p, w);
      }
    }
    _.clear(), (v = t.modalizer) === null || v === void 0 || v.hiddenUpdate();
  };
  function a(l, f) {
    i || (i = xt(o).elementByUId), u(l, f);
    const d = is(e, l, (p) => u(p, f));
    if (d)
      for (; d.nextNode(); )
        ;
  }
  function u(l, f) {
    var d;
    if (!l.getAttribute)
      return NodeFilter.FILTER_SKIP;
    const p = l.__tabsterElementUID;
    return p && i && (f ? delete i[p] : (d = i[p]) !== null && d !== void 0 || (i[p] = new Ye(o, l))), (Me(t, l) || l.hasAttribute(mt)) && r(t, l, f), NodeFilter.FILTER_SKIP;
  }
  const c = C.createMutationObserver(s);
  return n && a(o().document.body), c.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [mt]
  }), () => {
    c.disconnect();
  };
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class e_ {
  constructor(t) {
    this._isUncontrolledCompletely = t;
  }
  isUncontrolledCompletely(t, r) {
    var n;
    const o = (n = this._isUncontrolledCompletely) === null || n === void 0 ? void 0 : n.call(this, t, r);
    return o === void 0 ? r : o;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const t_ = 10;
class r_ extends io {
  constructor(t, r, n) {
    var o;
    if (super(t, r, n), this._hasFocus = !1, this._onFocusOut = (i) => {
      var s;
      const a = (s = this._element) === null || s === void 0 ? void 0 : s.get();
      a && i.relatedTarget === null && a.dispatchEvent(new Ea()), a && !C.nodeContains(a, i.relatedTarget) && (this._hasFocus = !1);
    }, this._onFocusIn = () => {
      this._hasFocus = !0;
    }, this._props.type === Mr.Source) {
      const i = (o = this._element) === null || o === void 0 ? void 0 : o.get();
      i == null || i.addEventListener("focusout", this._onFocusOut), i == null || i.addEventListener("focusin", this._onFocusIn), this._hasFocus = C.nodeContains(i, i && C.getActiveElement(i.ownerDocument));
    }
  }
  dispose() {
    var t;
    if (this._props.type === Mr.Source) {
      const r = (t = this._element) === null || t === void 0 ? void 0 : t.get();
      r == null || r.removeEventListener("focusout", this._onFocusOut), r == null || r.removeEventListener("focusin", this._onFocusIn), this._hasFocus && this._tabster.getWindow().document.body.dispatchEvent(new Ea());
    }
  }
}
class n_ {
  constructor(t) {
    this._history = [], this._onRestoreFocus = (r) => {
      this._focusedElementState.cancelAsyncFocus(Vt.Restorer);
      const n = r.composedPath()[0];
      n && this._focusedElementState.requestAsyncFocus(Vt.Restorer, () => this._restoreFocus(n), 0);
    }, this._onFocusIn = (r) => {
      var n;
      if (!r)
        return;
      const o = Me(this._tabster, r);
      ((n = o == null ? void 0 : o.restorer) === null || n === void 0 ? void 0 : n.getProps().type) === Mr.Target && this._addToHistory(r);
    }, this._restoreFocus = (r) => {
      var n;
      const o = this._getWindow().document;
      if (C.getActiveElement(o) !== o.body || // clicking on any empty space focuses body - this is can be a false positive
      !this._keyboardNavState.isNavigatingWithKeyboard() && // Source no longer exists on DOM - always restore focus
      C.nodeContains(o.body, r))
        return;
      let i = this._history.pop();
      for (; i && !C.nodeContains(o.body, C.getParentElement(i.get())); )
        i = this._history.pop();
      (n = i == null ? void 0 : i.get()) === null || n === void 0 || n.focus();
    }, this._tabster = t, this._getWindow = t.getWindow, this._getWindow().addEventListener(yi, this._onRestoreFocus), this._keyboardNavState = t.keyboardNavigation, this._focusedElementState = t.focusedElement, this._focusedElementState.subscribe(this._onFocusIn);
  }
  dispose() {
    const t = this._getWindow();
    this._focusedElementState.unsubscribe(this._onFocusIn), this._focusedElementState.cancelAsyncFocus(Vt.Restorer), t.removeEventListener(yi, this._onRestoreFocus);
  }
  _addToHistory(t) {
    var r;
    ((r = this._history[this._history.length - 1]) === null || r === void 0 ? void 0 : r.get()) !== t && (this._history.length > t_ && this._history.shift(), this._history.push(new Ye(this._getWindow, t)));
  }
  createRestorer(t, r) {
    const n = new r_(this._tabster, t, r);
    return r.type === Mr.Target && C.getActiveElement(t.ownerDocument) === t && this._addToHistory(t), n;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class o_ {
  constructor(t) {
    this.keyboardNavigation = t.keyboardNavigation, this.focusedElement = t.focusedElement, this.focusable = t.focusable, this.root = t.root, this.uncontrolled = t.uncontrolled, this.core = t;
  }
}
class i_ {
  constructor(t, r) {
    var n, o;
    this._forgetMemorizedElements = [], this._wrappers = /* @__PURE__ */ new Set(), this._initQueue = [], this._version = "7.1.0", this._noop = !1, this.getWindow = () => {
      if (!this._win)
        throw new Error("Using disposed Tabster.");
      return this._win;
    }, this._storage = Tg(t), this._win = t;
    const i = this.getWindow;
    r != null && r.DOMAPI && xg({
      ...r.DOMAPI
    }), this.keyboardNavigation = new Ug(i), this.focusedElement = new me(this, i), this.focusable = new Vg(this), this.root = new _e(this, r == null ? void 0 : r.autoRoot), this.uncontrolled = new e_(
      // TODO: Remove checkUncontrolledTrappingFocus in the next major version.
      (r == null ? void 0 : r.checkUncontrolledCompletely) || (r == null ? void 0 : r.checkUncontrolledTrappingFocus)
    ), this.controlTab = (n = r == null ? void 0 : r.controlTab) !== null && n !== void 0 ? n : !0, this.rootDummyInputs = !!(r != null && r.rootDummyInputs), this._dummyObserver = new Ig(i), this.getParent = (o = r == null ? void 0 : r.getParent) !== null && o !== void 0 ? o : C.getParentNode, this.internal = {
      stopObserver: () => {
        this._unobserve && (this._unobserve(), delete this._unobserve);
      },
      resumeObserver: (s) => {
        if (!this._unobserve) {
          const a = i().document;
          this._unobserve = Zg(a, this, vl, s);
        }
      }
    }, gl(i), this.queueInit(() => {
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
    const n = new o_(this);
    return t || this._wrappers.add(n), this._mergeProps(r), n;
  }
  disposeTabster(t, r) {
    r ? this._wrappers.clear() : this._wrappers.delete(t), this._wrappers.size === 0 && this.dispose();
  }
  dispose() {
    var t, r, n, o, i, s, a, u;
    this.internal.stopObserver();
    const c = this._win;
    c == null || c.clearTimeout(this._initTimer), delete this._initTimer, this._initQueue = [], this._forgetMemorizedElements = [], c && this._forgetMemorizedTimer && (c.clearTimeout(this._forgetMemorizedTimer), delete this._forgetMemorizedTimer), (t = this.outline) === null || t === void 0 || t.dispose(), (r = this.crossOrigin) === null || r === void 0 || r.dispose(), (n = this.deloser) === null || n === void 0 || n.dispose(), (o = this.groupper) === null || o === void 0 || o.dispose(), (i = this.mover) === null || i === void 0 || i.dispose(), (s = this.modalizer) === null || s === void 0 || s.dispose(), (a = this.observedElement) === null || a === void 0 || a.dispose(), (u = this.restorer) === null || u === void 0 || u.dispose(), this.keyboardNavigation.dispose(), this.focusable.dispose(), this.focusedElement.dispose(), this.root.dispose(), this._dummyObserver.dispose(), Cg(this.getWindow), Oa(this.getWindow), this._storage = /* @__PURE__ */ new WeakMap(), this._wrappers.clear(), c && (Sg(c), delete c.__tabsterInstance, delete this._win);
  }
  storageEntry(t, r) {
    const n = this._storage;
    let o = n.get(t);
    return o ? r === !1 && Object.keys(o).length === 0 && n.delete(t) : r === !0 && (o = {}, n.set(t, o)), o;
  }
  forceCleanup() {
    this._win && (this._forgetMemorizedElements.push(this._win.document.body), !this._forgetMemorizedTimer && (this._forgetMemorizedTimer = this._win.setTimeout(() => {
      delete this._forgetMemorizedTimer;
      for (let t = this._forgetMemorizedElements.shift(); t; t = this._forgetMemorizedElements.shift())
        Oa(this.getWindow, t), me.forgetMemorized(this.focusedElement, t);
    }, 0), bl(this.getWindow, !0)));
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
function s_(e, t) {
  let r = f_(e);
  return r ? r.createTabster(!1, t) : (r = new i_(e, t), e.__tabsterInstance = r, r.createTabster());
}
function a_(e) {
  const t = e.core;
  return t.mover || (t.mover = new Qg(t, t.getWindow)), t.mover;
}
function u_(e, t, r) {
  const n = e.core;
  return n.modalizer || (n.modalizer = new Kg(n, t, r)), n.modalizer;
}
function c_(e) {
  const t = e.core;
  return t.restorer || (t.restorer = new n_(t)), t.restorer;
}
function l_(e, t) {
  e.core.disposeTabster(e, t);
}
function f_(e) {
  return e.__tabsterInstance;
}
const so = () => {
  const { targetDocument: e } = Dt(), t = (e == null ? void 0 : e.defaultView) || void 0, r = t == null ? void 0 : t.__tabsterShadowDOMAPI, n = g.useMemo(() => t ? s_(t, {
    autoRoot: {},
    controlTab: !1,
    getParent: pb,
    checkUncontrolledTrappingFocus: (o) => {
      var i;
      return !!(!((i = o.firstElementChild) === null || i === void 0) && i.hasAttribute("data-is-focus-trap-zone-bumper"));
    },
    DOMAPI: r
  }) : null, [
    t,
    r
  ]);
  return en(() => () => {
    n && l_(n);
  }, [
    n
  ]), n;
}, wi = (e) => {
  so();
  const t = Ol(e, !0);
  return g.useMemo(() => ({
    [Nt.TabsterAttributeName]: t
  }), [
    t
  ]);
}, d_ = (e = {}) => {
  const {
    circular: t,
    axis: r,
    memorizeCurrent: n = !0,
    tabbable: o,
    ignoreDefaultKeydown: i,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_hasDefault: s
  } = e, a = so();
  return a && a_(a), wi({
    mover: {
      cyclic: !!t,
      direction: h_(r ?? "vertical"),
      memorizeCurrent: n,
      tabbable: o,
      hasDefault: s
    },
    ...i && {
      focusable: {
        ignoreKeydown: i
      }
    }
  });
};
function h_(e) {
  switch (e) {
    case "horizontal":
      return Nt.MoverDirections.Horizontal;
    case "grid":
      return Nt.MoverDirections.Grid;
    case "grid-linear":
      return Nt.MoverDirections.GridLinear;
    case "both":
      return Nt.MoverDirections.Both;
    case "vertical":
    default:
      return Nt.MoverDirections.Vertical;
  }
}
const p_ = () => {
  const e = so(), { targetDocument: t } = Dt(), r = g.useCallback((a, u) => (e == null ? void 0 : e.focusable.findAll({
    container: a,
    acceptCondition: u
  })) || [], [
    e
  ]), n = g.useCallback((a) => e == null ? void 0 : e.focusable.findFirst({
    container: a
  }), [
    e
  ]), o = g.useCallback((a) => e == null ? void 0 : e.focusable.findLast({
    container: a
  }), [
    e
  ]), i = g.useCallback((a, u = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = u;
    return e.focusable.findNext({
      currentElement: a,
      container: c
    });
  }, [
    e,
    t
  ]), s = g.useCallback((a, u = {}) => {
    if (!e || !t)
      return null;
    const { container: c = t.body } = u;
    return e.focusable.findPrev({
      currentElement: a,
      container: c
    });
  }, [
    e,
    t
  ]);
  return {
    findAllFocusable: r,
    findFirstFocusable: n,
    findLastFocusable: o,
    findNextFocusable: i,
    findPrevFocusable: s
  };
}, Ra = "data-fui-focus-visible";
function v_(e, t) {
  if (Tl(e))
    return () => {
    };
  const r = {
    current: void 0
  }, n = dl(t);
  function o(u) {
    n.isNavigatingWithKeyboard() && bi(u) && (r.current = u, u.setAttribute(Ra, ""));
  }
  function i() {
    r.current && (r.current.removeAttribute(Ra), r.current = void 0);
  }
  n.subscribe((u) => {
    u || i();
  });
  const s = (u) => {
    i();
    const c = u.composedPath()[0];
    o(c);
  }, a = (u) => {
    (!u.relatedTarget || bi(u.relatedTarget) && !e.contains(u.relatedTarget)) && i();
  };
  return e.addEventListener(gt, s), e.addEventListener("focusout", a), e.focusVisible = !0, e.contains(t.document.activeElement) && o(t.document.activeElement), () => {
    i(), e.removeEventListener(gt, s), e.removeEventListener("focusout", a), delete e.focusVisible, hl(n);
  };
}
function Tl(e) {
  return e ? e.focusVisible ? !0 : Tl(e == null ? void 0 : e.parentElement) : !1;
}
function m_(e = {}) {
  const t = Dt(), r = g.useRef(null);
  var n;
  const o = (n = e.targetDocument) !== null && n !== void 0 ? n : t.targetDocument;
  return g.useEffect(() => {
    if (o != null && o.defaultView && r.current)
      return v_(r.current, o.defaultView);
  }, [
    r,
    o
  ]), r;
}
const Nl = (e = {}) => {
  const { trapFocus: t, alwaysFocusable: r, legacyTrapFocus: n } = e, o = so();
  o && (u_(o), c_(o));
  const i = ts("modal-", e.id), s = wi({
    restorer: {
      type: Nt.RestorerTypes.Source
    },
    ...t && {
      modalizer: {
        id: i,
        isOthersAccessible: !t,
        isAlwaysAccessible: r,
        isTrapped: n && t
      }
    }
  }), a = wi({
    restorer: {
      type: Nt.RestorerTypes.Target
    }
  });
  return {
    modalAttributes: s,
    triggerAttributes: a
  };
};
var xi = { exports: {} }, zo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function b_() {
  return Da || (Da = 1, function(e) {
    function t(D, L) {
      var x = D.length;
      D.push(L);
      e:
        for (; 0 < x; ) {
          var T = x - 1 >>> 1, M = D[T];
          if (0 < o(M, L))
            D[T] = L, D[x] = M, x = T;
          else
            break e;
        }
    }
    function r(D) {
      return D.length === 0 ? null : D[0];
    }
    function n(D) {
      if (D.length === 0)
        return null;
      var L = D[0], x = D.pop();
      if (x !== L) {
        D[0] = x;
        e:
          for (var T = 0, M = D.length, q = M >>> 1; T < q; ) {
            var z = 2 * (T + 1) - 1, K = D[z], U = z + 1, H = D[U];
            if (0 > o(K, x))
              U < M && 0 > o(H, K) ? (D[T] = H, D[U] = x, T = U) : (D[T] = K, D[z] = x, T = z);
            else if (U < M && 0 > o(H, x))
              D[T] = H, D[U] = x, T = U;
            else
              break e;
          }
      }
      return L;
    }
    function o(D, L) {
      var x = D.sortIndex - L.sortIndex;
      return x !== 0 ? x : D.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var s = Date, a = s.now();
      e.unstable_now = function() {
        return s.now() - a;
      };
    }
    var u = [], c = [], l = 1, f = null, d = 3, p = !1, h = !1, v = !1, _ = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(D) {
      for (var L = r(c); L !== null; ) {
        if (L.callback === null)
          n(c);
        else if (L.startTime <= D)
          n(c), L.sortIndex = L.expirationTime, t(u, L);
        else
          break;
        L = r(c);
      }
    }
    function E(D) {
      if (v = !1, b(D), !h)
        if (r(u) !== null)
          h = !0, ie(y);
        else {
          var L = r(c);
          L !== null && fe(E, L.startTime - D);
        }
    }
    function y(D, L) {
      h = !1, v && (v = !1, m(R), R = -1), p = !0;
      var x = d;
      try {
        for (b(L), f = r(u); f !== null && (!(f.expirationTime > L) || D && !re()); ) {
          var T = f.callback;
          if (typeof T == "function") {
            f.callback = null, d = f.priorityLevel;
            var M = T(f.expirationTime <= L);
            L = e.unstable_now(), typeof M == "function" ? f.callback = M : f === r(u) && n(u), b(L);
          } else
            n(u);
          f = r(u);
        }
        if (f !== null)
          var q = !0;
        else {
          var z = r(c);
          z !== null && fe(E, z.startTime - L), q = !1;
        }
        return q;
      } finally {
        f = null, d = x, p = !1;
      }
    }
    var N = !1, B = null, R = -1, j = 5, V = -1;
    function re() {
      return !(e.unstable_now() - V < j);
    }
    function Ee() {
      if (B !== null) {
        var D = e.unstable_now();
        V = D;
        var L = !0;
        try {
          L = B(!0, D);
        } finally {
          L ? k() : (N = !1, B = null);
        }
      } else
        N = !1;
    }
    var k;
    if (typeof w == "function")
      k = function() {
        w(Ee);
      };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), Ne = Y.port2;
      Y.port1.onmessage = Ee, k = function() {
        Ne.postMessage(null);
      };
    } else
      k = function() {
        _(Ee, 0);
      };
    function ie(D) {
      B = D, N || (N = !0, k());
    }
    function fe(D, L) {
      R = _(function() {
        D(e.unstable_now());
      }, L);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, e.unstable_continueExecution = function() {
      h || p || (h = !0, ie(y));
    }, e.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < D ? Math.floor(1e3 / D) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(u);
    }, e.unstable_next = function(D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var x = d;
      d = L;
      try {
        return D();
      } finally {
        d = x;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(D, L) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var x = d;
      d = D;
      try {
        return L();
      } finally {
        d = x;
      }
    }, e.unstable_scheduleCallback = function(D, L, x) {
      var T = e.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? T + x : T) : x = T, D) {
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
      return M = x + M, D = { id: l++, callback: L, priorityLevel: D, startTime: x, expirationTime: M, sortIndex: -1 }, x > T ? (D.sortIndex = x, t(c, D), r(u) === null && D === r(c) && (v ? (m(R), R = -1) : v = !0, fe(E, x - T))) : (D.sortIndex = M, t(u, D), h || p || (h = !0, ie(y))), D;
    }, e.unstable_shouldYield = re, e.unstable_wrapCallback = function(D) {
      var L = d;
      return function() {
        var x = d;
        d = L;
        try {
          return D.apply(this, arguments);
        } finally {
          d = x;
        }
      };
    };
  }(zo)), zo;
}
var Lo = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function g_() {
  return Aa || (Aa = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, r = !1, n = 5;
      function o(F, W) {
        var Q = F.length;
        F.push(W), a(F, W, Q);
      }
      function i(F) {
        return F.length === 0 ? null : F[0];
      }
      function s(F) {
        if (F.length === 0)
          return null;
        var W = F[0], Q = F.pop();
        return Q !== W && (F[0] = Q, u(F, Q, 0)), W;
      }
      function a(F, W, Q) {
        for (var he = Q; he > 0; ) {
          var xe = he - 1 >>> 1, Je = F[xe];
          if (c(Je, W) > 0)
            F[xe] = W, F[he] = Je, he = xe;
          else
            return;
        }
      }
      function u(F, W, Q) {
        for (var he = Q, xe = F.length, Je = xe >>> 1; he < Je; ) {
          var De = (he + 1) * 2 - 1, Qt = F[De], Ae = De + 1, rn = F[Ae];
          if (c(Qt, W) < 0)
            Ae < xe && c(rn, Qt) < 0 ? (F[he] = rn, F[Ae] = W, he = Ae) : (F[he] = Qt, F[De] = W, he = De);
          else if (Ae < xe && c(rn, W) < 0)
            F[he] = rn, F[Ae] = W, he = Ae;
          else
            return;
        }
      }
      function c(F, W) {
        var Q = F.sortIndex - W.sortIndex;
        return Q !== 0 ? Q : F.id - W.id;
      }
      var l = 1, f = 2, d = 3, p = 4, h = 5;
      function v(F, W) {
      }
      var _ = typeof performance == "object" && typeof performance.now == "function";
      if (_) {
        var m = performance;
        e.unstable_now = function() {
          return m.now();
        };
      } else {
        var w = Date, b = w.now();
        e.unstable_now = function() {
          return w.now() - b;
        };
      }
      var E = 1073741823, y = -1, N = 250, B = 5e3, R = 1e4, j = E, V = [], re = [], Ee = 1, k = null, Y = d, Ne = !1, ie = !1, fe = !1, D = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function T(F) {
        for (var W = i(re); W !== null; ) {
          if (W.callback === null)
            s(re);
          else if (W.startTime <= F)
            s(re), W.sortIndex = W.expirationTime, o(V, W);
          else
            return;
          W = i(re);
        }
      }
      function M(F) {
        if (fe = !1, T(F), !ie)
          if (i(V) !== null)
            ie = !0, fo(q);
          else {
            var W = i(re);
            W !== null && ho(M, W.startTime - F);
          }
      }
      function q(F, W) {
        ie = !1, fe && (fe = !1, vs()), Ne = !0;
        var Q = Y;
        try {
          var he;
          if (!r)
            return z(F, W);
        } finally {
          k = null, Y = Q, Ne = !1;
        }
      }
      function z(F, W) {
        var Q = W;
        for (T(Q), k = i(V); k !== null && !t && !(k.expirationTime > Q && (!F || hs())); ) {
          var he = k.callback;
          if (typeof he == "function") {
            k.callback = null, Y = k.priorityLevel;
            var xe = k.expirationTime <= Q, Je = he(xe);
            Q = e.unstable_now(), typeof Je == "function" ? k.callback = Je : k === i(V) && s(V), T(Q);
          } else
            s(V);
          k = i(V);
        }
        if (k !== null)
          return !0;
        var De = i(re);
        return De !== null && ho(M, De.startTime - Q), !1;
      }
      function K(F, W) {
        switch (F) {
          case l:
          case f:
          case d:
          case p:
          case h:
            break;
          default:
            F = d;
        }
        var Q = Y;
        Y = F;
        try {
          return W();
        } finally {
          Y = Q;
        }
      }
      function U(F) {
        var W;
        switch (Y) {
          case l:
          case f:
          case d:
            W = d;
            break;
          default:
            W = Y;
            break;
        }
        var Q = Y;
        Y = W;
        try {
          return F();
        } finally {
          Y = Q;
        }
      }
      function H(F) {
        var W = Y;
        return function() {
          var Q = Y;
          Y = W;
          try {
            return F.apply(this, arguments);
          } finally {
            Y = Q;
          }
        };
      }
      function X(F, W, Q) {
        var he = e.unstable_now(), xe;
        if (typeof Q == "object" && Q !== null) {
          var Je = Q.delay;
          typeof Je == "number" && Je > 0 ? xe = he + Je : xe = he;
        } else
          xe = he;
        var De;
        switch (F) {
          case l:
            De = y;
            break;
          case f:
            De = N;
            break;
          case h:
            De = j;
            break;
          case p:
            De = R;
            break;
          case d:
          default:
            De = B;
            break;
        }
        var Qt = xe + De, Ae = {
          id: Ee++,
          callback: W,
          priorityLevel: F,
          startTime: xe,
          expirationTime: Qt,
          sortIndex: -1
        };
        return xe > he ? (Ae.sortIndex = xe, o(re, Ae), i(V) === null && Ae === i(re) && (fe ? vs() : fe = !0, ho(M, xe - he))) : (Ae.sortIndex = Qt, o(V, Ae), !ie && !Ne && (ie = !0, fo(q))), Ae;
      }
      function ee() {
      }
      function J() {
        !ie && !Ne && (ie = !0, fo(q));
      }
      function I() {
        return i(V);
      }
      function A(F) {
        F.callback = null;
      }
      function Ce() {
        return Y;
      }
      var Ve = !1, At = null, uo = -1, co = n, ds = -1;
      function hs() {
        var F = e.unstable_now() - ds;
        return !(F < co);
      }
      function Jl() {
      }
      function Ql(F) {
        if (F < 0 || F > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        F > 0 ? co = Math.floor(1e3 / F) : co = n;
      }
      var lo = function() {
        if (At !== null) {
          var F = e.unstable_now();
          ds = F;
          var W = !0, Q = !0;
          try {
            Q = At(W, F);
          } finally {
            Q ? yr() : (Ve = !1, At = null);
          }
        } else
          Ve = !1;
      }, yr;
      if (typeof x == "function")
        yr = function() {
          x(lo);
        };
      else if (typeof MessageChannel < "u") {
        var ps = new MessageChannel(), Zl = ps.port2;
        ps.port1.onmessage = lo, yr = function() {
          Zl.postMessage(null);
        };
      } else
        yr = function() {
          D(lo, 0);
        };
      function fo(F) {
        At = F, Ve || (Ve = !0, yr());
      }
      function ho(F, W) {
        uo = D(function() {
          F(e.unstable_now());
        }, W);
      }
      function vs() {
        L(uo), uo = -1;
      }
      var ef = Jl, tf = null;
      e.unstable_IdlePriority = h, e.unstable_ImmediatePriority = l, e.unstable_LowPriority = p, e.unstable_NormalPriority = d, e.unstable_Profiling = tf, e.unstable_UserBlockingPriority = f, e.unstable_cancelCallback = A, e.unstable_continueExecution = J, e.unstable_forceFrameRate = Ql, e.unstable_getCurrentPriorityLevel = Ce, e.unstable_getFirstCallbackNode = I, e.unstable_next = U, e.unstable_pauseExecution = ee, e.unstable_requestPaint = ef, e.unstable_runWithPriority = K, e.unstable_scheduleCallback = X, e.unstable_shouldYield = hs, e.unstable_wrapCallback = H, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Lo)), Lo;
}
process.env.NODE_ENV === "production" ? xi.exports = b_() : xi.exports = g_();
var Pa = xi.exports;
const __ = (e) => {
  const t = (r) => {
    const n = g.useRef(r.value), o = g.useRef(0), i = g.useRef();
    return i.current || (i.current = {
      value: n,
      version: o,
      listeners: []
    }), en(() => {
      n.current = r.value, o.current += 1, Pa.unstable_runWithPriority(Pa.unstable_NormalPriority, () => {
        i.current.listeners.forEach((s) => {
          s([
            o.current,
            r.value
          ]);
        });
      });
    }, [
      r.value
    ]), g.createElement(e, {
      value: i.current
    }, r.children);
  };
  return process.env.NODE_ENV !== "production" && (t.displayName = "ContextSelector.Provider"), t;
}, y_ = (e) => {
  const t = g.createContext({
    value: {
      current: e
    },
    version: {
      current: -1
    },
    listeners: []
  });
  return t.Provider = __(t.Provider), delete t.Consumer, t;
}, E_ = (e, t) => {
  const r = g.useContext(e), { value: { current: n }, version: { current: o }, listeners: i } = r, s = t(n), [a, u] = g.useReducer((c, l) => {
    if (!l)
      return [
        n,
        s
      ];
    if (l[0] <= o)
      return fn(c[1], s) ? c : [
        n,
        s
      ];
    try {
      if (fn(c[0], l[1]))
        return c;
      const f = t(l[1]);
      return fn(c[1], f) ? c : [
        l[1],
        f
      ];
    } catch {
    }
    return [
      c[0],
      c[1]
    ];
  }, [
    n,
    s
  ]);
  return fn(a[1], s) || u(void 0), en(() => (i.push(u), () => {
    const c = i.indexOf(u);
    i.splice(c, 1);
  }), [
    i
  ]), a[1];
};
function w_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const fn = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore fallback to native if it exists (not in IE11)
  typeof Object.is == "function" ? Object.is : w_
);
function x_(e) {
  const t = g.useContext(e);
  return t.version ? t.version.current !== -1 : !1;
}
const Vo = "Enter", dn = " ", O_ = "Escape";
function Cl(e, t) {
  const { disabled: r, disabledFocusable: n = !1, ["aria-disabled"]: o, onClick: i, onKeyDown: s, onKeyUp: a, ...u } = t ?? {}, c = typeof o == "string" ? o === "true" : o, l = r || n || c, f = zt((h) => {
    l ? (h.preventDefault(), h.stopPropagation()) : i == null || i(h);
  }), d = zt((h) => {
    if (s == null || s(h), h.isDefaultPrevented())
      return;
    const v = h.key;
    if (l && (v === Vo || v === dn)) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    if (v === dn) {
      h.preventDefault();
      return;
    } else
      v === Vo && (h.preventDefault(), h.currentTarget.click());
  }), p = zt((h) => {
    if (a == null || a(h), h.isDefaultPrevented())
      return;
    const v = h.key;
    if (l && (v === Vo || v === dn)) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    v === dn && (h.preventDefault(), h.currentTarget.click());
  });
  if (e === "button" || e === void 0)
    return {
      ...u,
      disabled: r && !n,
      "aria-disabled": n ? !0 : c,
      // onclick should still use internal handler to ensure prevention if disabled
      // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
      onClick: n ? void 0 : f,
      onKeyUp: n ? void 0 : a,
      onKeyDown: n ? void 0 : s
    };
  {
    const h = {
      role: "button",
      tabIndex: r && !n ? void 0 : 0,
      ...u,
      // If it's not a <button> than listeners are required even with disabledFocusable
      // Since you cannot assure the default behavior of the element
      // E.g: <a> will redirect on click
      onClick: f,
      onKeyUp: p,
      onKeyDown: d,
      "aria-disabled": r || n || c
    };
    return e === "a" && l && (h.href = void 0), h;
  }
}
function S_(e) {
  return bi(e) ? {
    element: e
  } : typeof e == "object" ? e === null ? {
    element: null
  } : e : {};
}
var us = () => g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current, Ba = /* @__PURE__ */ Symbol.for("react.strict_mode"), T_ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = g.useRef(void 0), t = g.useMemo(() => Number(g.version.split(".")[0]), [g.version]);
  if (isNaN(t) || t < 18)
    return !1;
  if (e.current === void 0) {
    let r = us();
    for (; r && r.return; )
      r = r.return, (r.type === Ba || r.elementType === Ba) && (e.current = !0);
  }
  return !!e.current;
}, Ia = /* @__PURE__ */ new WeakSet();
function N_(e, t) {
  const r = us();
  g.useEffect(() => {
    if (!Ia.has(r)) {
      Ia.add(r), e();
      return;
    }
    return e();
  }, t);
}
var Fa = /* @__PURE__ */ new WeakSet();
function C_(e, t) {
  return g.useMemo(() => {
    const r = us();
    return Fa.has(r) ? e() : (Fa.add(r), null);
  }, t);
}
function k_(e, t) {
  var r;
  const n = T_() && process.env.NODE_ENV !== "production", o = n ? C_ : g.useMemo, i = n ? N_ : g.useEffect, [s, a] = (r = o(() => e(), t)) != null ? r : [
    null,
    () => null
  ];
  return i(() => a, t), s;
}
const R_ = /* @__PURE__ */ Te({
  root: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "f15twtuk",
    oyh7mz: ["f1vgc2s3", "f1e31b4d"],
    j35jbq: ["f1e31b4d", "f1vgc2s3"],
    Bj3rh1h: "f494woh"
  }
}, {
  d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
}), ja = g.useInsertionEffect, D_ = (e) => {
  const { targetDocument: t, dir: r } = Dt(), n = cb(), o = m_(), i = R_(), s = sb(), a = pe(s, i.root, e.className), u = n ?? (t == null ? void 0 : t.body), c = k_(() => {
    if (u === void 0 || e.disabled)
      return [
        null,
        () => null
      ];
    const l = u.ownerDocument.createElement("div");
    return u.appendChild(l), [
      l,
      () => l.remove()
    ];
  }, [
    u
  ]);
  return ja ? ja(() => {
    if (!c)
      return;
    const l = a.split(" ").filter(Boolean);
    return c.classList.add(...l), c.setAttribute("dir", r), c.setAttribute("data-portal-node", "true"), o.current = c, () => {
      c.classList.remove(...l), c.removeAttribute("dir");
    };
  }, [
    a,
    r,
    c,
    o
  ]) : g.useMemo(() => {
    c && (c.className = a, c.setAttribute("dir", r), c.setAttribute("data-portal-node", "true"), o.current = c);
  }, [
    a,
    r,
    c,
    o
  ]), c;
}, A_ = (e) => {
  const { element: t, className: r } = S_(e.mountNode), n = g.useRef(null), o = D_({
    disabled: !!t,
    className: r
  }), i = t ?? o, s = {
    children: e.children,
    mountNode: i,
    virtualParentRootRef: n
  };
  return g.useEffect(() => {
    if (!i)
      return;
    const a = n.current, u = i.contains(a);
    if (a && !u)
      return pa(i, a), () => {
        pa(i, void 0);
      };
  }, [
    n,
    i
  ]), s;
}, P_ = (e) => /* @__PURE__ */ g.createElement("span", {
  hidden: !0,
  ref: e.virtualParentRootRef
}, e.mountNode && /* @__PURE__ */ cf.createPortal(e.children, e.mountNode)), kl = (e) => {
  const t = A_(e);
  return P_(t);
};
kl.displayName = "Portal";
const Rl = (e) => {
  ze(e);
  const { iconOnly: t, iconPosition: r } = e;
  return /* @__PURE__ */ _r(e.root, {
    children: [
      r !== "after" && e.icon && /* @__PURE__ */ de(e.icon, {}),
      !t && e.root.children,
      r === "after" && e.icon && /* @__PURE__ */ de(e.icon, {})
    ]
  });
}, Dl = g.createContext(void 0), B_ = {};
Dl.Provider;
const I_ = () => {
  var e;
  return (e = g.useContext(Dl)) !== null && e !== void 0 ? e : B_;
}, Al = (e, t) => {
  const { size: r } = I_(), { appearance: n = "secondary", as: o = "button", disabled: i = !1, disabledFocusable: s = !1, icon: a, iconPosition: u = "before", shape: c = "rounded", size: l = r ?? "medium" } = e, f = Gt(a, {
    elementType: "span"
  });
  return {
    // Props passed at the top-level
    appearance: n,
    disabled: i,
    disabledFocusable: s,
    iconPosition: u,
    shape: c,
    size: l,
    iconOnly: !!(f != null && f.children && !e.children),
    components: {
      root: "button",
      icon: "span"
    },
    root: Be(nt(o, Cl(e.as, e)), {
      elementType: "button",
      defaultProps: {
        ref: t,
        type: "button"
      }
    }),
    icon: f
  };
}, Ma = {
  root: "fui-Button",
  icon: "fui-Button__icon"
}, F_ = /* @__PURE__ */ Re("r1alrhcs", null, {
  r: [".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
}), j_ = /* @__PURE__ */ Re("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]), M_ = /* @__PURE__ */ Te({
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
}), z_ = /* @__PURE__ */ Te({
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
}), L_ = /* @__PURE__ */ Te({
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
}), V_ = /* @__PURE__ */ Te({
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
}), q_ = /* @__PURE__ */ Te({
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
}), Pl = (e) => {
  const t = F_(), r = j_(), n = M_(), o = z_(), i = L_(), s = V_(), a = q_(), {
    appearance: u,
    disabled: c,
    disabledFocusable: l,
    icon: f,
    iconOnly: d,
    iconPosition: p,
    shape: h,
    size: v
  } = e;
  return e.root.className = pe(
    Ma.root,
    t,
    u && n[u],
    n[v],
    f && v === "small" && n.smallWithIcon,
    f && v === "large" && n.largeWithIcon,
    n[h],
    // Disabled styles
    (c || l) && o.base,
    (c || l) && o.highContrast,
    u && (c || l) && o[u],
    // Focus styles
    u === "primary" && i.primary,
    i[v],
    i[h],
    // Icon-only styles
    d && s[v],
    // User provided class name
    e.root.className
  ), e.icon && (e.icon.className = pe(Ma.icon, r, !!e.root.children && a[p], a[v], e.icon.className)), e;
}, Lr = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = Al(e, t);
  return Pl(r), Xe("useButtonStyles_unstable")(r), Rl(r);
});
Lr.displayName = "Button";
const U_ = (e, t) => {
  const { disabled: r = !1, required: n = !1, weight: o = "regular", size: i = "medium" } = e;
  return {
    disabled: r,
    required: Gt(n === !0 ? "*" : n || void 0, {
      defaultProps: {
        "aria-hidden": "true"
      },
      elementType: "span"
    }),
    weight: o,
    size: i,
    components: {
      root: "label",
      required: "span"
    },
    root: Be(nt("label", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLLabelElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "label"
    })
  };
}, $_ = (e) => (ze(e), /* @__PURE__ */ _r(e.root, {
  children: [
    e.root.children,
    e.required && /* @__PURE__ */ de(e.required, {})
  ]
})), za = {
  root: "fui-Label",
  required: "fui-Label__required"
}, W_ = /* @__PURE__ */ Te({
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
}), H_ = (e) => {
  const t = W_();
  return e.root.className = pe(za.root, t.root, e.disabled && t.disabled, t[e.size], e.weight === "semibold" && t.semibold, e.root.className), e.required && (e.required.className = pe(za.required, t.required, e.disabled && t.disabled, e.required.className)), e;
}, Oi = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = U_(e, t);
  return H_(r), Xe("useLabelStyles_unstable")(r), $_(r);
});
Oi.displayName = "Label";
const Bl = g.createContext(void 0), K_ = {};
Bl.Provider;
const G_ = () => {
  var e;
  return (e = g.useContext(Bl)) !== null && e !== void 0 ? e : K_;
}, Y_ = (e, t) => {
  const { size: r } = G_(), { appearance: n = "primary", labelPosition: o = "after", size: i = r ?? "medium", delay: s = 0 } = e, a = ts("spinner"), { role: u = "progressbar", ...c } = e, l = Be(nt("div", {
    // FIXME:
    // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
    // but since it would be a breaking change to fix it, we are casting ref to it's proper type
    ref: t,
    role: u,
    ...c
  }, [
    "size"
  ]), {
    elementType: "div"
  }), [f, d] = g.useState(!1), [p, h] = lb();
  g.useEffect(() => {
    if (!(s <= 0))
      return p(() => {
        d(!0);
      }, s), () => {
        h();
      };
  }, [
    p,
    h,
    s
  ]);
  const v = Gt(e.label, {
    defaultProps: {
      id: a
    },
    renderByDefault: !1,
    elementType: Oi
  }), _ = Gt(e.spinner, {
    renderByDefault: !0,
    elementType: "span"
  });
  return v && l && !l["aria-labelledby"] && (l["aria-labelledby"] = v.id), {
    appearance: n,
    delay: s,
    labelPosition: o,
    size: i,
    shouldRenderSpinner: !s || f,
    components: {
      root: "div",
      spinner: "span",
      spinnerTail: "span",
      label: Oi
    },
    root: l,
    spinner: _,
    spinnerTail: Be(e.spinnerTail, {
      elementType: "span"
    }),
    label: v
  };
}, X_ = (e) => {
  ze(e);
  const { labelPosition: t, shouldRenderSpinner: r } = e;
  return /* @__PURE__ */ _r(e.root, {
    children: [
      e.label && r && (t === "above" || t === "before") && /* @__PURE__ */ de(e.label, {}),
      e.spinner && r && /* @__PURE__ */ de(e.spinner, {
        children: e.spinnerTail && /* @__PURE__ */ de(e.spinnerTail, {})
      }),
      e.label && r && (t === "below" || t === "after") && /* @__PURE__ */ de(e.label, {})
    ]
  });
}, hn = {
  root: "fui-Spinner",
  spinner: "fui-Spinner__spinner",
  spinnerTail: "fui-Spinner__spinnerTail",
  label: "fui-Spinner__label"
}, J_ = /* @__PURE__ */ Re("r82apo5", null, [".r82apo5{display:flex;align-items:center;justify-content:center;line-height:0;gap:8px;overflow:hidden;}"]), Q_ = /* @__PURE__ */ Te({
  vertical: {
    Beiy3e4: "f1vx9l62"
  }
}, {
  d: [".f1vx9l62{flex-direction:column;}"]
}), Z_ = /* @__PURE__ */ Re("rvgcg50", "r15nd2jo", {
  r: [".rvgcg50{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:rb7n1on;}", "@keyframes rb7n1on{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}", ".r15nd2jo{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:r1gx3jof;}", "@keyframes r1gx3jof{0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}}"],
  s: ["@media screen and (forced-colors: active){.rvgcg50{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.rvgcg50{animation-duration:1.8s;}}", "@media screen and (forced-colors: active){.r15nd2jo{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.r15nd2jo{animation-duration:1.8s;}}"]
}), ey = /* @__PURE__ */ Re("r1lregi5", "rxq293c", {
  r: [".r1lregi5{position:absolute;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r15mim6k;}", '.r1lregi5::before,.r1lregi5::after{content:"";position:absolute;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r15mim6k{0%{transform:rotate(-135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(225deg);}}", ".r1lregi5::before{animation-name:r18vhmn8;}", "@keyframes r18vhmn8{0%{transform:rotate(0deg);}50%{transform:rotate(105deg);}100%{transform:rotate(0deg);}}", ".r1lregi5::after{animation-name:rkgrvoi;}", "@keyframes rkgrvoi{0%{transform:rotate(0deg);}50%{transform:rotate(225deg);}100%{transform:rotate(0deg);}}", ".rxq293c{position:absolute;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r109gmi5;}", '.rxq293c::before,.rxq293c::after{content:"";position:absolute;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r109gmi5{0%{transform:rotate(135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(-225deg);}}", ".rxq293c::before{animation-name:r17whflh;}", "@keyframes r17whflh{0%{transform:rotate(0deg);}50%{transform:rotate(-105deg);}100%{transform:rotate(0deg);}}", ".rxq293c::after{animation-name:re4odhl;}", "@keyframes re4odhl{0%{transform:rotate(0deg);}50%{transform:rotate(-225deg);}100%{transform:rotate(0deg);}}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1lregi5{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.r1lregi5::before,.r1lregi5::after{content:none;}}", "@media screen and (prefers-reduced-motion: reduce){.rxq293c{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.rxq293c::before,.rxq293c::after{content:none;}}"]
}), ty = /* @__PURE__ */ Te({
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
}), ry = /* @__PURE__ */ Te({
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
}), ny = (e) => {
  const {
    labelPosition: t,
    size: r,
    appearance: n
  } = e, {
    dir: o
  } = Dt(), i = J_(), s = Q_(), a = Z_(), u = ty(), c = ey(), l = ry();
  return e.root.className = pe(hn.root, i, (t === "above" || t === "below") && s.vertical, e.root.className), e.spinner && (e.spinner.className = pe(hn.spinner, a, u[r], n === "inverted" && u.inverted, e.spinner.className)), e.spinnerTail && (e.spinnerTail.className = pe(hn.spinnerTail, c, o === "rtl" && u.rtlTail, e.spinnerTail.className)), e.label && (e.label.className = pe(hn.label, l[r], n === "inverted" && l.inverted, e.label.className)), e;
}, Il = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = Y_(e, t);
  return ny(r), Xe("useSpinnerStyles_unstable")(r), X_(r);
});
Il.displayName = "Spinner";
const It = "__fluentDisableScrollElement";
function oy() {
  const { targetDocument: e } = Dt();
  return sf(() => {
    if (e)
      return iy(e.body);
  }, [
    e
  ]);
}
function iy(e) {
  var t;
  const { clientWidth: r } = e.ownerDocument.documentElement;
  var n;
  const o = (n = (t = e.ownerDocument.defaultView) === null || t === void 0 ? void 0 : t.innerWidth) !== null && n !== void 0 ? n : 0;
  return sy(e), e[It].count === 0 && (e.style.overflow = "hidden", e.style.paddingRight = `${o - r}px`), e[It].count++, () => {
    e[It].count--, e[It].count === 0 && (e.style.overflow = e[It].previousOverflowStyle, e.style.paddingRight = e[It].previousPaddingRightStyle);
  };
}
function sy(e) {
  var t, r, n;
  (n = (t = e)[r = It]) !== null && n !== void 0 || (t[r] = {
    count: 0,
    previousOverflowStyle: e.style.overflow,
    previousPaddingRightStyle: e.style.paddingRight
  });
}
function ay(e, t) {
  const { findFirstFocusable: r } = p_(), { targetDocument: n } = Dt(), o = g.useRef(null);
  return g.useEffect(() => {
    if (!e)
      return;
    const i = o.current && r(o.current);
    if (i)
      i.focus();
    else {
      var s;
      (s = o.current) === null || s === void 0 || s.focus(), process.env.NODE_ENV === "development" && console.warn("@fluentui/react-dialog [useFocusFirstElement]:\nA Dialog should have at least one focusable element inside DialogSurface.\nPlease add at least a close button either on `DialogTitle` action slot or inside `DialogActions`");
    }
  }, [
    r,
    e,
    t,
    n
  ]), o;
}
const uy = {
  open: !1,
  inertTrapFocus: !1,
  modalType: "modal",
  isNestedDialog: !1,
  dialogRef: {
    current: null
  },
  requestOpenChange() {
  }
}, cs = y_(void 0), cy = cs.Provider, dt = (e) => E_(cs, (t = uy) => e(t)), ly = !1, Fl = nu(void 0), jl = Fl.Provider, fy = () => {
  var e;
  return (e = ou(Fl)) !== null && e !== void 0 ? e : ly;
}, dy = (e) => {
  const { children: t, modalType: r = "modal", onOpenChange: n, inertTrapFocus: o = !1 } = e, [i, s] = hy(t), [a, u] = Zc({
    state: e.open,
    defaultState: e.defaultOpen,
    initialState: !1
  }), c = zt((v) => {
    n == null || n(v.event, v), v.event.isDefaultPrevented() || u(v.open);
  }), l = ay(a, r), f = oy(), d = !!(a && r !== "non-modal");
  en(() => {
    if (d)
      return f();
  }, [
    f,
    d
  ]);
  const { modalAttributes: p, triggerAttributes: h } = Nl({
    trapFocus: r !== "non-modal",
    legacyTrapFocus: !o
  });
  return {
    components: {
      backdrop: "div"
    },
    inertTrapFocus: o,
    open: a,
    modalType: r,
    content: s,
    trigger: i,
    requestOpenChange: c,
    dialogTitleId: ts("dialog-title-"),
    isNestedDialog: x_(cs),
    dialogRef: l,
    modalAttributes: r !== "non-modal" ? p : void 0,
    triggerAttributes: h
  };
};
function hy(e) {
  const t = g.Children.toArray(e);
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
function py(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Si(e, t) {
  return Si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Si(e, t);
}
function vy(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Si(e, t);
}
var Ti = { exports: {} }, pn = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function my() {
  if (La)
    return ne;
  La = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var N = y.$$typeof;
      switch (N) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case n:
            case i:
            case o:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case l:
                case h:
                case p:
                case s:
                  return y;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(y) {
    return b(y) === c;
  }
  return ne.AsyncMode = u, ne.ConcurrentMode = c, ne.ContextConsumer = a, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = l, ne.Fragment = n, ne.Lazy = h, ne.Memo = p, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = f, ne.isAsyncMode = function(y) {
    return E(y) || b(y) === u;
  }, ne.isConcurrentMode = E, ne.isContextConsumer = function(y) {
    return b(y) === a;
  }, ne.isContextProvider = function(y) {
    return b(y) === s;
  }, ne.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ne.isForwardRef = function(y) {
    return b(y) === l;
  }, ne.isFragment = function(y) {
    return b(y) === n;
  }, ne.isLazy = function(y) {
    return b(y) === h;
  }, ne.isMemo = function(y) {
    return b(y) === p;
  }, ne.isPortal = function(y) {
    return b(y) === r;
  }, ne.isProfiler = function(y) {
    return b(y) === i;
  }, ne.isStrictMode = function(y) {
    return b(y) === o;
  }, ne.isSuspense = function(y) {
    return b(y) === f;
  }, ne.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === i || y === o || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === p || y.$$typeof === s || y.$$typeof === a || y.$$typeof === l || y.$$typeof === _ || y.$$typeof === m || y.$$typeof === w || y.$$typeof === v);
  }, ne.typeOf = b, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function by() {
  return Va || (Va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function b(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === n || A === c || A === i || A === o || A === f || A === d || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || A.$$typeof === _ || A.$$typeof === m || A.$$typeof === w || A.$$typeof === v);
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var Ce = A.$$typeof;
        switch (Ce) {
          case t:
            var Ve = A.type;
            switch (Ve) {
              case u:
              case c:
              case n:
              case i:
              case o:
              case f:
                return Ve;
              default:
                var At = Ve && Ve.$$typeof;
                switch (At) {
                  case a:
                  case l:
                  case h:
                  case p:
                  case s:
                    return At;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var y = u, N = c, B = a, R = s, j = t, V = l, re = n, Ee = h, k = p, Y = r, Ne = i, ie = o, fe = f, D = !1;
    function L(A) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(A) || E(A) === u;
    }
    function x(A) {
      return E(A) === c;
    }
    function T(A) {
      return E(A) === a;
    }
    function M(A) {
      return E(A) === s;
    }
    function q(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function z(A) {
      return E(A) === l;
    }
    function K(A) {
      return E(A) === n;
    }
    function U(A) {
      return E(A) === h;
    }
    function H(A) {
      return E(A) === p;
    }
    function X(A) {
      return E(A) === r;
    }
    function ee(A) {
      return E(A) === i;
    }
    function J(A) {
      return E(A) === o;
    }
    function I(A) {
      return E(A) === f;
    }
    oe.AsyncMode = y, oe.ConcurrentMode = N, oe.ContextConsumer = B, oe.ContextProvider = R, oe.Element = j, oe.ForwardRef = V, oe.Fragment = re, oe.Lazy = Ee, oe.Memo = k, oe.Portal = Y, oe.Profiler = Ne, oe.StrictMode = ie, oe.Suspense = fe, oe.isAsyncMode = L, oe.isConcurrentMode = x, oe.isContextConsumer = T, oe.isContextProvider = M, oe.isElement = q, oe.isForwardRef = z, oe.isFragment = K, oe.isLazy = U, oe.isMemo = H, oe.isPortal = X, oe.isProfiler = ee, oe.isStrictMode = J, oe.isSuspense = I, oe.isValidElementType = b, oe.typeOf = E;
  }()), oe;
}
var qa;
function Ml() {
  return qa || (qa = 1, process.env.NODE_ENV === "production" ? pn.exports = my() : pn.exports = by()), pn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qo, Ua;
function gy() {
  if (Ua)
    return qo;
  Ua = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qo = o() ? Object.assign : function(i, s) {
    for (var a, u = n(i), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var f in a)
        t.call(a, f) && (u[f] = a[f]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          r.call(a, c[d]) && (u[c[d]] = a[c[d]]);
      }
    }
    return u;
  }, qo;
}
var Uo, $a;
function ls() {
  if ($a)
    return Uo;
  $a = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Uo = e, Uo;
}
var $o, Wa;
function zl() {
  return Wa || (Wa = 1, $o = Function.call.bind(Object.prototype.hasOwnProperty)), $o;
}
var Wo, Ha;
function _y() {
  if (Ha)
    return Wo;
  Ha = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ls(), r = {}, n = zl();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (n(i, l)) {
          var f;
          try {
            if (typeof i[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = i[l](s, l, u, a, null, t);
          } catch (h) {
            f = h;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + a + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Wo = o, Wo;
}
var Ho, Ka;
function yy() {
  if (Ka)
    return Ho;
  Ka = 1;
  var e = Ml(), t = gy(), r = ls(), n = zl(), o = _y(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ho = function(a, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(x) {
      var T = x && (c && x[c] || x[l]);
      if (typeof T == "function")
        return T;
    }
    var d = "<<anonymous>>", p = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: w(),
      arrayOf: b,
      element: E(),
      elementType: y(),
      instanceOf: N,
      node: V(),
      objectOf: R,
      oneOf: B,
      oneOfType: j,
      shape: Ee,
      exact: k
    };
    function h(x, T) {
      return x === T ? x !== 0 || 1 / x === 1 / T : x !== x && T !== T;
    }
    function v(x, T) {
      this.message = x, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function _(x) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, M = 0;
      function q(K, U, H, X, ee, J, I) {
        if (X = X || d, J = J || H, I !== r) {
          if (u) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = X + ":" + H;
            !T[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[Ce] = !0, M++);
          }
        }
        return U[H] == null ? K ? U[H] === null ? new v("The " + ee + " `" + J + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new v("The " + ee + " `" + J + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : x(U, H, X, ee, J);
      }
      var z = q.bind(null, !1);
      return z.isRequired = q.bind(null, !0), z;
    }
    function m(x) {
      function T(M, q, z, K, U, H) {
        var X = M[q], ee = ie(X);
        if (ee !== x) {
          var J = fe(X);
          return new v(
            "Invalid " + K + " `" + U + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return _(T);
    }
    function w() {
      return _(s);
    }
    function b(x) {
      function T(M, q, z, K, U) {
        if (typeof x != "function")
          return new v("Property `" + U + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var H = M[q];
        if (!Array.isArray(H)) {
          var X = ie(H);
          return new v("Invalid " + K + " `" + U + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected an array."));
        }
        for (var ee = 0; ee < H.length; ee++) {
          var J = x(H, ee, z, K, U + "[" + ee + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return _(T);
    }
    function E() {
      function x(T, M, q, z, K) {
        var U = T[M];
        if (!a(U)) {
          var H = ie(U);
          return new v("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(x);
    }
    function y() {
      function x(T, M, q, z, K) {
        var U = T[M];
        if (!e.isValidElementType(U)) {
          var H = ie(U);
          return new v("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(x);
    }
    function N(x) {
      function T(M, q, z, K, U) {
        if (!(M[q] instanceof x)) {
          var H = x.name || d, X = L(M[q]);
          return new v("Invalid " + K + " `" + U + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return _(T);
    }
    function B(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(M, q, z, K, U) {
        for (var H = M[q], X = 0; X < x.length; X++)
          if (h(H, x[X]))
            return null;
        var ee = JSON.stringify(x, function(I, A) {
          var Ce = fe(A);
          return Ce === "symbol" ? String(A) : A;
        });
        return new v("Invalid " + K + " `" + U + "` of value `" + String(H) + "` " + ("supplied to `" + z + "`, expected one of " + ee + "."));
      }
      return _(T);
    }
    function R(x) {
      function T(M, q, z, K, U) {
        if (typeof x != "function")
          return new v("Property `" + U + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var H = M[q], X = ie(H);
        if (X !== "object")
          return new v("Invalid " + K + " `" + U + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected an object."));
        for (var ee in H)
          if (n(H, ee)) {
            var J = x(H, ee, z, K, U + "." + ee, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return _(T);
    }
    function j(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < x.length; T++) {
        var M = x[T];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(M) + " at index " + T + "."
          ), s;
      }
      function q(z, K, U, H, X) {
        for (var ee = [], J = 0; J < x.length; J++) {
          var I = x[J], A = I(z, K, U, H, X, r);
          if (A == null)
            return null;
          A.data && n(A.data, "expectedType") && ee.push(A.data.expectedType);
        }
        var Ce = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new v("Invalid " + H + " `" + X + "` supplied to " + ("`" + U + "`" + Ce + "."));
      }
      return _(q);
    }
    function V() {
      function x(T, M, q, z, K) {
        return Y(T[M]) ? null : new v("Invalid " + z + " `" + K + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return _(x);
    }
    function re(x, T, M, q, z) {
      return new v(
        (x || "React class") + ": " + T + " type `" + M + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function Ee(x) {
      function T(M, q, z, K, U) {
        var H = M[q], X = ie(H);
        if (X !== "object")
          return new v("Invalid " + K + " `" + U + "` of type `" + X + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var ee in x) {
          var J = x[ee];
          if (typeof J != "function")
            return re(z, K, U, ee, fe(J));
          var I = J(H, ee, z, K, U + "." + ee, r);
          if (I)
            return I;
        }
        return null;
      }
      return _(T);
    }
    function k(x) {
      function T(M, q, z, K, U) {
        var H = M[q], X = ie(H);
        if (X !== "object")
          return new v("Invalid " + K + " `" + U + "` of type `" + X + "` " + ("supplied to `" + z + "`, expected `object`."));
        var ee = t({}, M[q], x);
        for (var J in ee) {
          var I = x[J];
          if (n(x, J) && typeof I != "function")
            return re(z, K, U, J, fe(I));
          if (!I)
            return new v(
              "Invalid " + K + " `" + U + "` key `" + J + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(M[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var A = I(H, J, z, K, U + "." + J, r);
          if (A)
            return A;
        }
        return null;
      }
      return _(T);
    }
    function Y(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(Y);
          if (x === null || a(x))
            return !0;
          var T = f(x);
          if (T) {
            var M = T.call(x), q;
            if (T !== x.entries) {
              for (; !(q = M.next()).done; )
                if (!Y(q.value))
                  return !1;
            } else
              for (; !(q = M.next()).done; ) {
                var z = q.value;
                if (z && !Y(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ne(x, T) {
      return x === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ie(x) {
      var T = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Ne(T, x) ? "symbol" : T;
    }
    function fe(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var T = ie(x);
      if (T === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function D(x) {
      var T = fe(x);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function L(x) {
      return !x.constructor || !x.constructor.name ? d : x.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Ho;
}
var Ko, Ga;
function Ey() {
  if (Ga)
    return Ko;
  Ga = 1;
  var e = ls();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ko = function() {
    function n(s, a, u, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ko;
}
if (process.env.NODE_ENV !== "production") {
  var wy = Ml(), xy = !0;
  Ti.exports = yy()(wy.isElement, xy);
} else
  Ti.exports = Ey()();
var Oy = Ti.exports;
const G = /* @__PURE__ */ np(Oy), Ya = {
  disabled: !1
};
var Sy = process.env.NODE_ENV !== "production" ? G.oneOfType([G.number, G.shape({
  enter: G.number,
  exit: G.number,
  appear: G.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && G.oneOfType([G.string, G.shape({
  enter: G.string,
  exit: G.string,
  active: G.string
}), G.shape({
  enter: G.string,
  enterDone: G.string,
  enterActive: G.string,
  exit: G.string,
  exitDone: G.string,
  exitActive: G.string
})]);
const Ll = ot.createContext(null);
var Ty = function(t) {
  return t.scrollTop;
}, Or = "unmounted", Ft = "exited", jt = "entering", er = "entered", Ni = "exiting", Ot = /* @__PURE__ */ function(e) {
  vy(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, a = s && !s.isMounting ? n.enter : n.appear, u;
    return i.appearStatus = null, n.in ? a ? (u = Ft, i.appearStatus = jt) : u = er : n.unmountOnExit || n.mountOnEnter ? u = Or : u = Ft, i.state = {
      status: u
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Or ? {
      status: Ft
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== jt && s !== er && (i = jt) : (s === jt || s === er) && (i = Ni);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : nn.findDOMNode(this);
          s && Ty(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ft && this.setState({
        status: Or
      });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [a] : [nn.findDOMNode(this), a], c = u[0], l = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!o && !s || Ya.disabled) {
      this.safeSetState({
        status: er
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, l), this.safeSetState({
      status: jt
    }, function() {
      i.props.onEntering(c, l), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: er
        }, function() {
          i.props.onEntered(c, l);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : nn.findDOMNode(this);
    if (!i || Ya.disabled) {
      this.safeSetState({
        status: Ft
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Ni
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Ft
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : nn.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = u[0], l = u[1];
      this.props.addEndListener(c, l);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Or)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = py(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ot.createElement(Ll.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : ot.cloneElement(ot.Children.only(s), a))
    );
  }, t;
}(ot.Component);
Ot.contextType = Ll;
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: G.shape({
    current: typeof Element > "u" ? G.any : function(e, t, r, n, o, i) {
      var s = e[t];
      return G.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
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
  children: G.oneOfType([G.func.isRequired, G.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: G.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: G.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: G.bool,
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
  appear: G.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: G.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: G.bool,
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
    var r = Sy;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
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
  addEndListener: G.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: G.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: G.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: G.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: G.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: G.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: G.func
} : {};
function Zt() {
}
Ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zt,
  onEntering: Zt,
  onEntered: Zt,
  onExit: Zt,
  onExiting: Zt,
  onExited: Zt
};
Ot.UNMOUNTED = Or;
Ot.EXITED = Ft;
Ot.ENTERING = jt;
Ot.ENTERED = er;
Ot.EXITING = Ni;
const Ny = Ot, Cy = void 0, Vl = g.createContext(void 0), Xa = Vl.Provider, ky = () => {
  var e;
  return (e = g.useContext(Vl)) !== null && e !== void 0 ? e : Cy;
}, Ry = (e, t) => {
  const { content: r, trigger: n } = e;
  return /* @__PURE__ */ de(cy, {
    value: t.dialog,
    children: /* @__PURE__ */ _r(jl, {
      value: t.dialogSurface,
      children: [
        n,
        process.env.NODE_ENV === "test" ? e.open && /* @__PURE__ */ de(Xa, {
          value: void 0,
          children: r
        }) : /* @__PURE__ */ de(Ny, {
          mountOnEnter: !0,
          unmountOnExit: !0,
          in: e.open,
          nodeRef: e.dialogRef,
          appear: !0,
          // FIXME: this should not be hardcoded tokens.durationGentle
          timeout: 250,
          children: (o) => /* @__PURE__ */ de(Xa, {
            value: o,
            children: r
          })
        })
      ]
    })
  });
};
function Dy(e) {
  const { modalType: t, open: r, dialogRef: n, dialogTitleId: o, isNestedDialog: i, inertTrapFocus: s, requestOpenChange: a, modalAttributes: u, triggerAttributes: c } = e;
  return {
    dialog: {
      open: r,
      modalType: t,
      dialogRef: n,
      dialogTitleId: o,
      isNestedDialog: i,
      inertTrapFocus: s,
      modalAttributes: u,
      triggerAttributes: c,
      requestOpenChange: a
    },
    dialogSurface: !1
  };
}
const ql = /* @__PURE__ */ g.memo((e) => {
  const t = dy(e), r = Dy(t);
  return Ry(t, r);
});
ql.displayName = "Dialog";
const Ay = (e) => {
  const t = fy(), { children: r, disableButtonEnhancement: n = !1, action: o = t ? "close" : "open" } = e, i = al(r), s = dt((f) => f.requestOpenChange), { triggerAttributes: a } = Nl(), u = zt((f) => {
    var d, p;
    i == null || (d = (p = i.props).onClick) === null || d === void 0 || d.call(p, f), f.isDefaultPrevented() || s({
      event: f,
      type: "triggerClick",
      open: o === "open"
    });
  }), c = {
    ...i == null ? void 0 : i.props,
    ref: i == null ? void 0 : i.ref,
    onClick: u,
    ...a
  }, l = Cl((i == null ? void 0 : i.type) === "button" || (i == null ? void 0 : i.type) === "a" ? i.type : "div", {
    ...c,
    type: "button"
  });
  return {
    children: fb(r, n ? c : l)
  };
}, Py = (e) => e.children, ao = (e) => {
  const t = Ay(e);
  return Py(t);
};
ao.displayName = "DialogTrigger";
ao.isFluentTriggerComponent = !0;
const By = (e, t) => {
  const { position: r = "end", fluid: n = !1 } = e;
  return {
    components: {
      root: "div"
    },
    root: Be(nt("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    }),
    position: r,
    fluid: n
  };
}, Iy = (e) => (ze(e), /* @__PURE__ */ de(e.root, {})), Fy = {
  root: "fui-DialogActions"
}, jy = /* @__PURE__ */ Re("rhfpeu0", null, {
  r: [".rhfpeu0{gap:8px;height:fit-content;box-sizing:border-box;display:flex;grid-row-start:3;grid-row-end:3;}"],
  s: ["@media screen and (max-width: 480px){.rhfpeu0{flex-direction:column;justify-self:stretch;}}"]
}), My = /* @__PURE__ */ Te({
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
}), zy = (e) => {
  const t = jy(), r = My();
  return e.root.className = pe(Fy.root, t, e.position === "start" && r.gridPositionStart, e.position === "end" && r.gridPositionEnd, e.fluid && e.position === "start" && r.fluidStart, e.fluid && e.position === "end" && r.fluidEnd, e.root.className), e;
}, Ul = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = By(e, t);
  return zy(r), Xe("useDialogActionsStyles_unstable")(r), Iy(r);
});
Ul.displayName = "DialogActions";
const Ly = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: Be(nt((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, Vy = (e) => (ze(e), /* @__PURE__ */ de(e.root, {})), qy = {
  root: "fui-DialogBody"
}, Uy = /* @__PURE__ */ Re("r1h3qql9", null, {
  r: [".r1h3qql9{overflow:unset;gap:8px;display:grid;max-height:calc(100vh - 2 * 24px);box-sizing:border-box;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr auto;}"],
  s: ["@media screen and (max-width: 480px){.r1h3qql9{max-width:100vw;grid-template-rows:auto 1fr auto;}}", "@media screen and (max-height: 359px){.r1h3qql9{max-height:unset;}}"]
}), $y = (e) => {
  const t = Uy();
  return e.root.className = pe(qy.root, t, e.root.className), e;
}, $l = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = Ly(e, t);
  return $y(r), Xe("useDialogBodyStyles_unstable")(r), Vy(r);
});
$l.displayName = "DialogBody";
const Ja = {
  root: "fui-DialogTitle",
  action: "fui-DialogTitle__action"
}, Wy = /* @__PURE__ */ Re("rxjm636", null, [".rxjm636{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}"]), Hy = /* @__PURE__ */ Te({
  rootWithoutAction: {
    Bw0ie65: "fsyjsko"
  }
}, {
  d: [".fsyjsko{grid-column-end:4;}"]
}), Ky = /* @__PURE__ */ Re("r13kcrze", null, [".r13kcrze{grid-row-start:1;grid-row-end:1;grid-column-start:3;justify-self:end;align-self:start;}"]), Gy = /* @__PURE__ */ Re("r8i4vpr", "r15ezg2h", {
  r: [".r8i4vpr{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r8i4vpr:focus{outline-style:none;}", ".r8i4vpr:focus-visible{outline-style:none;}", ".r8i4vpr[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r8i4vpr[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r15ezg2h{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r15ezg2h:focus{outline-style:none;}", ".r15ezg2h:focus-visible{outline-style:none;}", ".r15ezg2h[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r15ezg2h[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r8i4vpr[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.r15ezg2h[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
}), Yy = (e) => {
  const t = Wy(), r = Ky(), n = Hy();
  return e.root.className = pe(Ja.root, t, !e.action && n.rootWithoutAction, e.root.className), e.action && (e.action.className = pe(Ja.action, r, e.action.className)), e;
}, Xy = (e, t) => {
  const { action: r } = e, n = dt((i) => i.modalType), o = Gy();
  return {
    components: {
      root: "h2",
      action: "div"
    },
    root: Be(nt("h2", {
      ref: t,
      id: dt((i) => i.dialogTitleId),
      ...e
    }), {
      elementType: "h2"
    }),
    action: Gt(r, {
      renderByDefault: n === "non-modal",
      defaultProps: {
        children: /* @__PURE__ */ g.createElement(ao, {
          disableButtonEnhancement: !0,
          action: "close"
        }, /* @__PURE__ */ g.createElement("button", {
          type: "button",
          className: o,
          // TODO: find a better way to add internal labels
          "aria-label": "close"
        }, /* @__PURE__ */ g.createElement(Rb, null)))
      },
      elementType: "div"
    })
  };
}, Jy = (e) => (ze(e), /* @__PURE__ */ _r(af, {
  children: [
    /* @__PURE__ */ de(e.root, {
      children: e.root.children
    }),
    e.action && /* @__PURE__ */ de(e.action, {})
  ]
})), Wl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = Xy(e, t);
  return Yy(r), Xe("useDialogTitleStyles_unstable")(r), Jy(r);
});
Wl.displayName = "DialogTitle";
const Qy = (e, t) => {
  const r = dt((d) => d.modalType), n = dt((d) => d.isNestedDialog), o = ky(), i = dt((d) => d.modalAttributes), s = dt((d) => d.dialogRef), a = dt((d) => d.requestOpenChange), u = dt((d) => d.dialogTitleId), c = zt((d) => {
    if (Em(e.backdrop)) {
      var p, h;
      (p = (h = e.backdrop).onClick) === null || p === void 0 || p.call(h, d);
    }
    r === "modal" && !d.isDefaultPrevented() && a({
      event: d,
      open: !1,
      type: "backdropClick"
    });
  }), l = zt((d) => {
    var p;
    (p = e.onKeyDown) === null || p === void 0 || p.call(e, d), d.key === O_ && !d.isDefaultPrevented() && (a({
      event: d,
      open: !1,
      type: "escapeKeyDown"
    }), d.preventDefault());
  }), f = Gt(e.backdrop, {
    renderByDefault: r !== "non-modal",
    defaultProps: {
      "aria-hidden": "true"
    },
    elementType: "div"
  });
  return f && (f.onClick = c), {
    components: {
      backdrop: "div",
      root: "div"
    },
    backdrop: f,
    isNestedDialog: n,
    transitionStatus: o,
    mountNode: e.mountNode,
    root: Be(nt("div", {
      tabIndex: -1,
      "aria-modal": r !== "non-modal",
      role: r === "alert" ? "alertdialog" : "dialog",
      "aria-labelledby": e["aria-label"] ? void 0 : u,
      ...e,
      ...i,
      onKeyDown: l,
      // FIXME:
      // `DialogSurfaceElement` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: ob(t, s)
    }), {
      elementType: "div"
    })
  };
}, Zy = (e, t) => (ze(e), /* @__PURE__ */ _r(kl, {
  mountNode: e.mountNode,
  children: [
    e.backdrop && /* @__PURE__ */ de(e.backdrop, {}),
    /* @__PURE__ */ de(jl, {
      value: t.dialogSurface,
      children: /* @__PURE__ */ de(e.root, {})
    })
  ]
})), Qa = {
  root: "fui-DialogSurface",
  backdrop: "fui-DialogSurface__backdrop"
}, e0 = /* @__PURE__ */ Re("rhzkxut", "r1dhpx9", {
  r: [".rhzkxut{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".rhzkxut:focus{outline-style:none;}", ".rhzkxut:focus-visible{outline-style:none;}", ".rhzkxut[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.rhzkxut[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r1dhpx9{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".r1dhpx9:focus{outline-style:none;}", ".r1dhpx9:focus-visible{outline-style:none;}", ".r1dhpx9[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r1dhpx9[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.rhzkxut[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media screen and (max-width: 480px){.rhzkxut{max-width:100vw;}}", "@media screen and (max-height: 359px){.rhzkxut{overflow-y:auto;padding-right:calc(24px - 4px);border-right-width:4px;border-top-width:4px;border-bottom-width:4px;}}", "@media (forced-colors: active){.r1dhpx9[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}", "@media screen and (max-width: 480px){.r1dhpx9{max-width:100vw;}}", "@media screen and (max-height: 359px){.r1dhpx9{overflow-y:auto;padding-left:calc(24px - 4px);border-left-width:4px;border-top-width:4px;border-bottom-width:4px;}}"]
}), t0 = /* @__PURE__ */ Te({
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
}), r0 = /* @__PURE__ */ Re("r19ug08i", null, [".r19ug08i{inset:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}"]), n0 = /* @__PURE__ */ Te({
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
}), o0 = (e) => {
  const {
    isNestedDialog: t,
    root: r,
    backdrop: n,
    transitionStatus: o
  } = e, i = e0(), s = t0(), a = r0(), u = n0();
  return r.className = pe(Qa.root, i, o ? s.animated : s.static, o && s[o], r.className), n && (n.className = pe(Qa.backdrop, a, t && u.nestedDialogBackdrop, o && u[o], n.className)), e;
};
function i0(e) {
  return {
    dialogSurface: !0
  };
}
const Hl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = Qy(e, t), n = i0();
  return o0(r), Xe("useDialogSurfaceStyles_unstable")(r), Zy(r, n);
});
Hl.displayName = "DialogSurface";
const s0 = (e, t) => {
  var r;
  return {
    components: {
      root: "div"
    },
    root: Be(nt((r = e.as) !== null && r !== void 0 ? r : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: t,
      ...e
    }), {
      elementType: "div"
    })
  };
}, a0 = (e) => (ze(e), /* @__PURE__ */ de(e.root, {})), u0 = {
  root: "fui-DialogContent"
}, c0 = /* @__PURE__ */ Re("r1v5zwsm", null, {
  r: [".r1v5zwsm{padding:var(--strokeWidthThick);margin:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}"],
  s: ["@media screen and (max-height: 359px){.r1v5zwsm{overflow-y:unset;}}"]
}), l0 = (e) => {
  const t = c0();
  return e.root.className = pe(u0.root, t, e.root.className), e;
}, Kl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = s0(e, t);
  return l0(r), Xe("useDialogContentStyles_unstable")(r), a0(r);
});
Kl.displayName = "DialogContent";
const f0 = (e, t) => {
  const { focusMode: r = "tab", size: n = "medium", list: o, ...i } = e, s = d_({
    circular: !0,
    axis: "horizontal",
    memorizeCurrent: !0
  });
  var a;
  return {
    components: {
      root: "nav",
      list: "ol"
    },
    root: Be(nt("nav", {
      ref: t,
      "aria-label": (a = e["aria-label"]) !== null && a !== void 0 ? a : "breadcrumb",
      ...r === "arrow" ? s : {},
      ...i
    }), {
      elementType: "nav"
    }),
    list: Gt(o, {
      renderByDefault: !0,
      defaultProps: {
        role: "list"
      },
      elementType: "ol"
    }),
    size: n
  };
}, Gl = g.createContext(void 0), d0 = {
  size: "medium"
}, h0 = Gl.Provider, fs = () => {
  var e;
  return (e = g.useContext(Gl)) !== null && e !== void 0 ? e : d0;
}, p0 = (e, t) => (ze(e), /* @__PURE__ */ de(e.root, {
  children: /* @__PURE__ */ de(h0, {
    value: t,
    children: e.list && /* @__PURE__ */ de(e.list, {
      children: e.root.children
    })
  })
})), Za = {
  root: "fui-Breadcrumb",
  list: "fui-Breadcrumb__list"
}, v0 = /* @__PURE__ */ Re("rc5rb6b", null, [".rc5rb6b{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}"]), m0 = (e) => {
  const t = v0();
  return e.root.className = pe(Za.root, e.root.className), e.list && (e.list.className = pe(t, Za.list, e.list.className)), e;
};
function b0(e) {
  const { size: t } = e;
  return g.useMemo(() => ({
    size: t
  }), [
    t
  ]);
}
const Yl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = f0(e, t), n = b0(r);
  return m0(r), Xe("useBreadcrumbStyles_unstable")(r), p0(r, n);
});
Yl.displayName = "Breadcrumb";
const g0 = (e, t) => {
  const { size: r } = fs(), { dir: n } = Dt(), o = _0(n);
  return {
    components: {
      root: "li"
    },
    root: Be(nt("li", {
      ref: t,
      "aria-hidden": !0,
      children: o,
      ...e
    }), {
      elementType: "li"
    }),
    size: r
  };
};
function _0(e) {
  return e === "rtl" ? /* @__PURE__ */ g.createElement(Cb, null) : /* @__PURE__ */ g.createElement(kb, null);
}
const y0 = (e) => (ze(e), /* @__PURE__ */ de(e.root, {})), E0 = {
  root: "fui-BreadcrumbDivider"
}, w0 = /* @__PURE__ */ Re("rk008qs", null, [".rk008qs{display:flex;}"]), x0 = /* @__PURE__ */ Te({
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
}), O0 = (e) => {
  const t = w0(), r = x0(), {
    size: n = "medium"
  } = e;
  return e.root.className = pe(E0.root, t, r[n], e.root.className), e;
}, Xl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = g0(e, t);
  return O0(r), Xe("useBreadcrumbDividerStyles_unstable")(r), y0(r);
});
Xl.displayName = "BreadcrumbDivider";
const S0 = (e, t) => {
  const { size: r } = fs();
  return {
    components: {
      root: "li"
    },
    root: Be(nt("li", {
      ref: t,
      ...e
    }), {
      elementType: "li"
    }),
    size: r
  };
}, T0 = (e) => (ze(e), /* @__PURE__ */ de(e.root, {
  children: e.root.children
})), N0 = {
  root: "fui-BreadcrumbItem"
}, C0 = /* @__PURE__ */ Re("r1tl60rs", null, [".r1tl60rs{display:flex;align-items:center;color:var(--colorNeutralForeground2);box-sizing:border-box;text-wrap:nowrap;}"]), k0 = (e) => {
  const t = C0();
  return e.root.className = pe(N0.root, t, e.root.className), e;
}, Ci = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = S0(e, t);
  return k0(r), Xe("useBreadcrumbItemStyles_unstable")(r), T0(r);
});
Ci.displayName = "BreadcrumbItem";
const R0 = (e, t) => {
  const { size: r } = fs(), { current: n = !1, as: o, ...i } = e, s = o ?? e.href ? "a" : "button";
  var a, u;
  return {
    ...Al({
      appearance: "subtle",
      role: void 0,
      type: void 0,
      as: s,
      iconPosition: "before",
      "aria-current": n ? (a = e["aria-current"]) !== null && a !== void 0 ? a : "page" : void 0,
      "aria-disabled": n ? (u = e["aria-disabled"]) !== null && u !== void 0 ? u : !0 : void 0,
      ...i
    }, t),
    current: n,
    size: r
  };
}, D0 = (e) => Rl(e), A0 = {
  root: "fui-BreadcrumbButton",
  icon: "fui-BreadcrumbButton__icon"
}, P0 = /* @__PURE__ */ Te({
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
}), B0 = /* @__PURE__ */ Te({
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
}), I0 = (e) => {
  const t = B0(), r = P0(), n = {
    small: t.currentSmall,
    medium: t.currentMedium,
    large: t.currentLarge
  };
  return e.root.className = pe(A0.root, t[e.size], t.root, e.current && n[e.size], e.current && t.current, e.root.className), e.icon && (e.icon.className = pe(r.base, r[e.size], e.icon.className)), Pl(e), e;
}, ki = /* @__PURE__ */ g.forwardRef((e, t) => {
  const r = R0(e, t);
  return I0(r), Xe("useBreadcrumbButtonStyles_unstable")(r), D0(r);
});
ki.displayName = "BreadcrumbButton";
const $0 = gp((e) => {
  const { paginationStore: t, taskStore: r } = Uv(), n = () => {
    t.currentPage > 1 && (t.setCurrentPage(t.currentPage - 1), r.loadPaginatedTasks(t.currentPage));
  }, o = () => {
    t.currentPage < t.totalPages && (t.setCurrentPage(t.currentPage + 1), r.loadPaginatedTasks(t.currentPage));
  };
  return /* @__PURE__ */ sr("div", { className: _p.paginationContainer, children: [
    /* @__PURE__ */ be(
      Lr,
      {
        icon: /* @__PURE__ */ be(Tb, {}),
        onClick: n,
        title: "Previous",
        disabled: t.currentPage === 1
      }
    ),
    /* @__PURE__ */ sr("span", { children: [
      " Page ",
      t.currentPage,
      " of ",
      t.totalPages,
      " "
    ] }),
    /* @__PURE__ */ be(
      Lr,
      {
        icon: /* @__PURE__ */ be(Nb, {}),
        onClick: o,
        title: "Next",
        disabled: t.currentPage === t.totalPages
      }
    )
  ] });
}), F0 = {};
function W0(e) {
  const { open: t, onOpenChange: r, title: n, action: o, actionText: i, children: s, showActionButtons: a } = e, u = (c, l) => {
    r(c, l);
  };
  return /* @__PURE__ */ be("div", { className: F0.container, children: /* @__PURE__ */ be(
    ql,
    {
      open: t,
      onOpenChange: u,
      children: /* @__PURE__ */ be(Hl, { children: /* @__PURE__ */ sr($l, { children: [
        /* @__PURE__ */ be(Wl, { children: n }),
        /* @__PURE__ */ be(Kl, { children: s }),
        a && /* @__PURE__ */ sr(Ul, { children: [
          /* @__PURE__ */ be(ao, { disableButtonEnhancement: !0, children: /* @__PURE__ */ be(Lr, { appearance: "secondary", children: "Close" }) }),
          /* @__PURE__ */ be(Lr, { appearance: "primary", onClick: o, children: i })
        ] })
      ] }) })
    }
  ) });
}
function H0({ label: e, loading: t }) {
  return t ? /* @__PURE__ */ be(Il, { label: e }) : null;
}
const j0 = (e) => {
  const [t, r] = eu({}), n = pr();
  return uf(() => {
    const o = M0(n.pathname);
    r(o);
  }, [n]), t;
}, K0 = () => Math.random().toString(36).substr(2, 9), M0 = (e) => {
  for (const t of L0) {
    const n = t.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/:\w+/g, "([^/]+)");
    if (new RegExp(`^${n}$`).test(e))
      return t;
  }
}, z0 = {};
function G0(e) {
  return /* @__PURE__ */ be("div", { className: z0.container, children: /* @__PURE__ */ be("h1", { children: "Welcome to SharedUi!" }) });
}
const L0 = [
  { path: "/", breadcrumb: "Home" },
  { path: "/tasks/:taskId", root: "/", rootBreadcrumb: "Home", breadcrumb: "Task Details" }
  // Add more breadcrumb data as needed
], Y0 = 10;
function X0(e) {
  const t = j0();
  return /* @__PURE__ */ sr(Yl, { children: [
    t && t.root && /* @__PURE__ */ sr(nf, { children: [
      /* @__PURE__ */ be(Ci, { children: /* @__PURE__ */ be(Ii, { to: t.root, children: /* @__PURE__ */ be(ki, { children: t.rootBreadcrumb }) }) }),
      /* @__PURE__ */ be(Xl, {})
    ] }),
    t && /* @__PURE__ */ be(Ci, { children: /* @__PURE__ */ be(ki, { current: !0, children: t.breadcrumb }) })
  ] });
}
export {
  X0 as Breadcrumbs,
  H0 as LoadingSpinner,
  W0 as ModalDialog,
  $0 as Pagination,
  G0 as SharedUi,
  L0 as breadcrumbData,
  M0 as findBreadcrumb,
  K0 as generateRandomId,
  Y0 as pageSize,
  j0 as useBreadCrumbs
};
