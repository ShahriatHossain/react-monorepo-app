import { jsx as An } from "react/jsx-runtime";
import { createContext as pi, useContext as _i } from "react";
const vi = {};
function Ca(e) {
  return /* @__PURE__ */ An("div", { className: vi.container, children: /* @__PURE__ */ An("h1", { children: "Welcome to TaskManagerCore!" }) });
}
var bi = {
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
}, mi = process.env.NODE_ENV !== "production" ? bi : {};
function p(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : mi[e];
    throw typeof i == "function" && (i = i.apply(null, r)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var gi = {};
function Yn() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : gi;
}
var Zn = Object.assign, at = Object.getOwnPropertyDescriptor, X = Object.defineProperty, mt = Object.prototype, ut = [];
Object.freeze(ut);
var Qn = {};
Object.freeze(Qn);
var yi = typeof Proxy < "u", Oi = /* @__PURE__ */ Object.toString();
function er() {
  yi || p(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function je(e) {
  process.env.NODE_ENV !== "production" && h.verifyProxies && p("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function H() {
  return ++h.mobxGuid;
}
function nn(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var Oe = function() {
};
function S(e) {
  return typeof e == "function";
}
function de(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function gt(e) {
  return e !== null && typeof e == "object";
}
function P(e) {
  if (!gt(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Oi;
}
function tr(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function yt(e, t, r) {
  X(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function nr(e, t, r) {
  X(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function me(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return gt(n) && n[r] === !0;
  };
}
function De(e) {
  return e instanceof Map;
}
function $e(e) {
  return e instanceof Set;
}
var rr = typeof Object.getOwnPropertySymbols < "u";
function Ei(e) {
  var t = Object.keys(e);
  if (!rr)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return mt.propertyIsEnumerable.call(e, n);
  })) : t;
}
var Be = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : rr ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function It(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function ir(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function q(e, t) {
  return mt.hasOwnProperty.call(e, t);
}
var Ai = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Be(t).forEach(function(n) {
    r[n] = at(t, n);
  }), r;
};
function Nn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Si(n.key), n);
  }
}
function rn(e, t, r) {
  return t && Nn(e.prototype, t), r && Nn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ae.apply(this, arguments);
}
function sr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ft(e, t);
}
function Ft(e, t) {
  return Ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ft(e, t);
}
function nt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ni(e, t) {
  if (e) {
    if (typeof e == "string")
      return wn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wn(e, t);
  }
}
function wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ee(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ni(e)) || t && e && typeof e.length == "number") {
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
function wi(e, t) {
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
function Si(e) {
  var t = wi(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Q = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Y(e) {
  function t(r, n) {
    if (qe(n))
      return e.decorate_20223_(r, n);
    Te(r, n, e);
  }
  return Object.assign(t, e);
}
function Te(e, t, r) {
  if (q(e, Q) || yt(e, Q, ae({}, e[Q])), process.env.NODE_ENV !== "production" && lt(r) && !q(e[Q], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    p("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  Di(e, r, t), lt(r) || (e[Q][t] = r);
}
function Di(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !lt(t) && q(e[Q], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), i = e[Q][r].annotationType_, s = t.annotationType_;
    p("Cannot apply '@" + s + "' to '" + n + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function qe(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function Ot(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && p("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var m = /* @__PURE__ */ Symbol("mobx administration"), Ke = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + H() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = y.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
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
    return Ar(this);
  }, t.reportChanged = function() {
    M(), Nr(this), k();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), sn = /* @__PURE__ */ me("Atom", Ke);
function or(e, t, r) {
  t === void 0 && (t = Oe), r === void 0 && (r = Oe);
  var n = new Ke(e);
  return t !== Oe && Ms(n, t), r !== Oe && Pr(n, r), n;
}
function Ti(e, t) {
  return e === t;
}
function Ri(e, t) {
  return _n(e, t);
}
function xi(e, t) {
  return _n(e, t, 1);
}
function Pi(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ct = {
  identity: Ti,
  structural: Ri,
  default: Pi,
  shallow: xi
};
function he(e, t, r) {
  return ke(e) ? e : Array.isArray(e) ? D.array(e, {
    name: r
  }) : P(e) ? D.object(e, void 0, {
    name: r
  }) : De(e) ? D.map(e, {
    name: r
  }) : $e(e) ? D.set(e, {
    name: r
  }) : typeof e == "function" && !He(e) && !Me(e) ? tr(e) ? we(e) : Ue(r, e) : e;
}
function ji(e, t, r) {
  if (e == null || be(e) || We(e) || re(e) || Re(e))
    return e;
  if (Array.isArray(e))
    return D.array(e, {
      name: r,
      deep: !1
    });
  if (P(e))
    return D.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (De(e))
    return D.map(e, {
      name: r,
      deep: !1
    });
  if ($e(e))
    return D.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && p("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function Et(e) {
  return e;
}
function Vi(e, t) {
  return process.env.NODE_ENV !== "production" && ke(e) && p("observable.struct should not be used with observable values"), _n(e, t) ? t : e;
}
var Ci = "override";
function lt(e) {
  return e.annotationType_ === Ci;
}
function ze(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Li,
    extend_: Bi,
    decorate_20223_: Ui
  };
}
function Li(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (He(r.value))
    return 1;
  var s = ar(e, this, t, r, !1);
  return X(n, t, s), 2;
}
function Bi(e, t, r, n) {
  var i = ar(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Ui(e, t) {
  process.env.NODE_ENV !== "production" && Ot(t, ["method", "field"]);
  var r = t.kind, n = t.name, i = t.addInitializer, s = this, o = function(c) {
    var l, f, b, E;
    return pe((l = (f = s.options_) == null ? void 0 : f.name) != null ? l : n.toString(), c, (b = (E = s.options_) == null ? void 0 : E.autoAction) != null ? b : !1);
  };
  if (r == "field") {
    i(function() {
      Te(this, n, s);
    });
    return;
  }
  if (r == "method") {
    var a;
    return He(e) || (e = o(e)), (a = this.options_) != null && a.bound && i(function() {
      var u = this, c = u[n].bind(u);
      c.isMobxAction = !0, u[n] = c;
    }), e;
  }
  p("Cannot apply '" + s.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + s.annotationType_ + "' can only be used on properties with a function value."));
}
function Mi(e, t, r, n) {
  var i = t.annotationType_, s = n.value;
  process.env.NODE_ENV !== "production" && !S(s) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function ar(e, t, r, n, i) {
  var s, o, a, u, c, l, f;
  i === void 0 && (i = h.safeDescriptors), Mi(e, t, r, n);
  var b = n.value;
  if ((s = t.options_) != null && s.bound) {
    var E;
    b = b.bind((E = e.proxy_) != null ? E : e.target_);
  }
  return {
    value: pe(
      (o = (a = t.options_) == null ? void 0 : a.name) != null ? o : r.toString(),
      b,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (l = t.options_) != null && l.bound ? (f = e.proxy_) != null ? f : e.target_ : void 0
    ),
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
function ur(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: ki,
    extend_: Ii,
    decorate_20223_: Fi
  };
}
function ki(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!q(e.target_, t) || !Me(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Me(r.value))
    return 1;
  var s = cr(e, this, t, r, !1, !1);
  return X(n, t, s), 2;
}
function Ii(e, t, r, n) {
  var i, s = cr(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, s, n);
}
function Fi(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && Ot(t, ["method"]);
  var n = t.name, i = t.addInitializer;
  return Me(e) || (e = we(e)), (r = this.options_) != null && r.bound && i(function() {
    var s = this, o = s[n].bind(s);
    o.isMobXFlow = !0, s[n] = o;
  }), e;
}
function $i(e, t, r, n) {
  var i = t.annotationType_, s = n.value;
  process.env.NODE_ENV !== "production" && !S(s) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function cr(e, t, r, n, i, s) {
  s === void 0 && (s = h.safeDescriptors), $i(e, t, r, n);
  var o = n.value;
  if (Me(o) || (o = we(o)), i) {
    var a;
    o = o.bind((a = e.proxy_) != null ? a : e.target_), o.isMobXFlow = !0;
  }
  return {
    value: o,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: s ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !s
  };
}
function on(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: qi,
    extend_: Ki,
    decorate_20223_: zi
  };
}
function qi(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ki(e, t, r, n) {
  return Hi(e, this, t, r), e.defineComputedProperty_(t, ae({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function zi(e, t) {
  process.env.NODE_ENV !== "production" && Ot(t, ["getter"]);
  var r = this, n = t.name, i = t.addInitializer;
  return i(function() {
    var s = xe(this)[m], o = ae({}, r.options_, {
      get: e,
      context: this
    });
    o.name || (o.name = process.env.NODE_ENV !== "production" ? s.name_ + "." + n.toString() : "ObservableObject." + n.toString()), s.values_.set(n, new _e(o));
  }), function() {
    return this[m].getObservablePropValue_(n);
  };
}
function Hi(e, t, r, n) {
  var i = t.annotationType_, s = n.get;
  process.env.NODE_ENV !== "production" && !s && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function At(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Gi,
    extend_: Ji,
    decorate_20223_: Wi
  };
}
function Gi(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Ji(e, t, r, n) {
  var i, s;
  return Xi(e, this, t, r), e.defineObservableProperty_(t, r.value, (i = (s = this.options_) == null ? void 0 : s.enhancer) != null ? i : he, n);
}
function Wi(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw p("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    Ot(t, ["accessor"]);
  }
  var r = this, n = t.kind, i = t.name, s = /* @__PURE__ */ new WeakSet();
  function o(a, u) {
    var c, l, f = xe(a)[m], b = new fe(u, (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : he, process.env.NODE_ENV !== "production" ? f.name_ + "." + i.toString() : "ObservableObject." + i.toString(), !1);
    f.values_.set(i, b), s.add(a);
  }
  if (n == "accessor")
    return {
      get: function() {
        return s.has(this) || o(this, e.get.call(this)), this[m].getObservablePropValue_(i);
      },
      set: function(u) {
        return s.has(this) || o(this, u), this[m].setObservablePropValue_(i, u);
      },
      init: function(u) {
        return s.has(this) || o(this, u), u;
      }
    };
}
function Xi(e, t, r, n) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && p("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var Yi = "true", Zi = /* @__PURE__ */ lr();
function lr(e) {
  return {
    annotationType_: Yi,
    options_: e,
    make_: Qi,
    extend_: es,
    decorate_20223_: ts
  };
}
function Qi(e, t, r, n) {
  var i, s;
  if (r.get)
    return Nt.make_(e, t, r, n);
  if (r.set) {
    var o = pe(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: o
    }) === null ? 0 : 2 : (X(n, t, {
      configurable: !0,
      set: o
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var a;
    if (tr(r.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? we.bound : we;
      return c.make_(e, t, r, n);
    }
    var l = (a = this.options_) != null && a.autoBind ? Ue.bound : Ue;
    return l.make_(e, t, r, n);
  }
  var f = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? D.ref : D;
  if (typeof r.value == "function" && (s = this.options_) != null && s.autoBind) {
    var b;
    r.value = r.value.bind((b = e.proxy_) != null ? b : e.target_);
  }
  return f.make_(e, t, r, n);
}
function es(e, t, r, n) {
  var i, s;
  if (r.get)
    return Nt.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: h.safeDescriptors ? e.isPlainObject_ : !0,
      set: pe(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var a = ((s = this.options_) == null ? void 0 : s.deep) === !1 ? D.ref : D;
  return a.extend_(e, t, r, n);
}
function ts(e, t) {
  p("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var ns = "observable", rs = "observable.ref", is = "observable.shallow", ss = "observable.struct", fr = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(fr);
function Ze(e) {
  return e || fr;
}
var $t = /* @__PURE__ */ At(ns), os = /* @__PURE__ */ At(rs, {
  enhancer: Et
}), as = /* @__PURE__ */ At(is, {
  enhancer: ji
}), us = /* @__PURE__ */ At(ss, {
  enhancer: Vi
}), dr = /* @__PURE__ */ Y($t);
function Qe(e) {
  return e.deep === !0 ? he : e.deep === !1 ? Et : ls(e.defaultDecorator);
}
function cs(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : lr(e) : void 0;
}
function ls(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : he;
}
function hr(e, t, r) {
  if (qe(t))
    return $t.decorate_20223_(e, t);
  if (de(t)) {
    Te(e, t, $t);
    return;
  }
  return ke(e) ? e : P(e) ? D.object(e, t, r) : Array.isArray(e) ? D.array(e, t) : De(e) ? D.map(e, t) : $e(e) ? D.set(e, t) : typeof e == "object" && e !== null ? e : D.box(e, t);
}
Zn(hr, dr);
var fs = {
  box: function(t, r) {
    var n = Ze(r);
    return new fe(t, Qe(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = Ze(r);
    return (h.useProxies === !1 || n.proxy === !1 ? oo : Xs)(t, Qe(n), n.name);
  },
  map: function(t, r) {
    var n = Ze(r);
    return new kr(t, Qe(n), n.name);
  },
  set: function(t, r) {
    var n = Ze(r);
    return new $r(t, Qe(n), n.name);
  },
  object: function(t, r, n) {
    return ye(function() {
      return Vr(h.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? xe({}, n) : Gs({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ Y(os),
  shallow: /* @__PURE__ */ Y(as),
  deep: dr,
  struct: /* @__PURE__ */ Y(us)
}, D = /* @__PURE__ */ Zn(hr, fs), pr = "computed", ds = "computed.struct", qt = /* @__PURE__ */ on(pr), hs = /* @__PURE__ */ on(ds, {
  equals: ct.structural
}), Nt = function(t, r) {
  if (qe(r))
    return qt.decorate_20223_(t, r);
  if (de(r))
    return Te(t, r, qt);
  if (P(t))
    return Y(on(pr, t));
  process.env.NODE_ENV !== "production" && (S(t) || p("First argument to `computed` should be an expression."), S(r) && p("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = P(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new _e(n);
};
Object.assign(Nt, qt);
Nt.struct = /* @__PURE__ */ Y(hs);
var Sn, Dn, ft = 0, ps = 1, _s = (Sn = (Dn = /* @__PURE__ */ at(function() {
}, "name")) == null ? void 0 : Dn.configurable) != null ? Sn : !1, Tn = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function pe(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (S(t) || p("`action` can only be invoked on functions"), (typeof e != "string" || !e) && p("actions should have valid names, got: '" + e + "'"));
  function i() {
    return _r(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, i.toString = function() {
    return t.toString();
  }, _s && (Tn.value = e, X(i, "name", Tn)), i;
}
function _r(e, t, r, n, i) {
  var s = vs(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw s.error_ = o, o;
  } finally {
    bs(s);
  }
}
function vs(e, t, r, n) {
  var i = process.env.NODE_ENV !== "production" && T() && !!e, s = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    s = Date.now();
    var o = n ? Array.from(n) : ut;
    j({
      type: ln,
      name: e,
      object: r,
      arguments: o
    });
  }
  var a = h.trackingDerivation, u = !t || !a;
  M();
  var c = h.allowStateChanges;
  u && (ge(), c = an(!0));
  var l = cn(!0), f = {
    runAsAction_: u,
    prevDerivation_: a,
    prevAllowStateChanges_: c,
    prevAllowStateReads_: l,
    notifySpy_: i,
    startTime_: s,
    actionId_: ps++,
    parentActionId_: ft
  };
  return ft = f.actionId_, f;
}
function bs(e) {
  ft !== e.actionId_ && p(30), ft = e.parentActionId_, e.error_ !== void 0 && (h.suppressReactionErrors = !0), un(e.prevAllowStateChanges_), Le(e.prevAllowStateReads_), k(), e.runAsAction_ && te(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && V({
    time: Date.now() - e.startTime_
  }), h.suppressReactionErrors = !1;
}
function an(e) {
  var t = h.allowStateChanges;
  return h.allowStateChanges = e, t;
}
function un(e) {
  h.allowStateChanges = e;
}
var vr, ms = "create";
vr = Symbol.toPrimitive;
var fe = /* @__PURE__ */ function(e) {
  sr(t, e);
  function t(n, i, s, o, a) {
    var u;
    return s === void 0 && (s = process.env.NODE_ENV !== "production" ? "ObservableValue@" + H() : "ObservableValue"), o === void 0 && (o = !0), a === void 0 && (a = ct.default), u = e.call(this, s) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = i, u.name_ = s, u.equals = a, u.value_ = i(n, void 0, s), process.env.NODE_ENV !== "production" && o && T() && ve({
      type: ms,
      object: nt(u),
      observableKind: "value",
      debugObjectName: u.name_,
      newValue: "" + u.value_
    }), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    var s = this.value_;
    if (i = this.prepareNewValue_(i), i !== h.UNCHANGED) {
      var o = T();
      process.env.NODE_ENV !== "production" && o && j({
        type: $,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: s
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && o && V();
    }
  }, r.prepareNewValue_ = function(i) {
    if (J(this), B(this)) {
      var s = U(this, {
        object: this,
        type: $,
        newValue: i
      });
      if (!s)
        return h.UNCHANGED;
      i = s.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? h.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var s = this.value_;
    this.value_ = i, this.reportChanged(), K(this) && z(this, {
      type: $,
      object: this,
      newValue: i,
      oldValue: s
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return Ge(this, i);
  }, r.observe_ = function(i, s) {
    return s && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: $,
      newValue: this.value_,
      oldValue: void 0
    }), Je(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return ir(this.get());
  }, r[vr] = function() {
    return this.valueOf();
  }, t;
}(Ke), br;
br = Symbol.toPrimitive;
var _e = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = y.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = y.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new dt(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = I.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || p(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + H() : "ComputedValue"), r.set && (this.setter_ = pe(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? ct.structural : ct.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    Ns(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && p(32, this.name_, this.derivation), h.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Kt(this) && (this.warnAboutUntrackedRead_(), M(), this.value_ = this.computeValue_(!1), k());
    else if (Ar(this), Kt(this)) {
      var n = h.trackingContext;
      this.keepAlive_ && !n && (h.trackingContext = this), this.trackAndCompute() && As(this), h.trackingContext = n;
    }
    var i = this.value_;
    if (rt(i))
      throw i.cause;
    return i;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && p(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      p(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === y.NOT_TRACKING_
    ), s = this.computeValue_(!0), o = i || rt(n) || rt(s) || !this.equals_(n, s);
    return o && (this.value_ = s, process.env.NODE_ENV !== "production" && T() && ve({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: s
    })), o;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = an(!1), s;
    if (n)
      s = mr(this, this.derivation, this.scope_);
    else if (h.disableErrorBoundaries === !0)
      s = this.derivation.call(this.scope_);
    else
      try {
        s = this.derivation.call(this.scope_);
      } catch (o) {
        s = new dt(o);
      }
    return un(i), this.isComputing_ = !1, s;
  }, t.suspend_ = function() {
    this.keepAlive_ || (zt(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== I.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, i) {
    var s = this, o = !0, a = void 0;
    return Vs(function() {
      var u = s.get();
      if (!o || i) {
        var c = ge();
        n({
          observableKind: "computed",
          debugObjectName: s.name_,
          type: $,
          object: s,
          newValue: u,
          oldValue: a
        }), te(c);
      }
      o = !1, a = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== I.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : h.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return ir(this.get());
  }, t[br] = function() {
    return this.valueOf();
  }, e;
}(), wt = /* @__PURE__ */ me("ComputedValue", _e), y;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(y || (y = {}));
var I;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(I || (I = {}));
var dt = function(t) {
  this.cause = void 0, this.cause = t;
};
function rt(e) {
  return e instanceof dt;
}
function Kt(e) {
  switch (e.dependenciesState_) {
    case y.UP_TO_DATE_:
      return !1;
    case y.NOT_TRACKING_:
    case y.STALE_:
      return !0;
    case y.POSSIBLY_STALE_: {
      for (var t = cn(!0), r = ge(), n = e.observing_, i = n.length, s = 0; s < i; s++) {
        var o = n[s];
        if (wt(o)) {
          if (h.disableErrorBoundaries)
            o.get();
          else
            try {
              o.get();
            } catch {
              return te(r), Le(t), !0;
            }
          if (e.dependenciesState_ === y.STALE_)
            return te(r), Le(t), !0;
        }
      }
      return yr(e), te(r), Le(t), !1;
    }
  }
}
function J(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !h.allowStateChanges && (t || h.enforceActions === "always") && console.warn("[MobX] " + (h.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function gs(e) {
  process.env.NODE_ENV !== "production" && !h.allowStateReads && h.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function mr(e, t, r) {
  var n = cn(!0);
  yr(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++h.runId;
  var i = h.trackingDerivation;
  h.trackingDerivation = e, h.inBatch++;
  var s;
  if (h.disableErrorBoundaries === !0)
    s = t.call(r);
  else
    try {
      s = t.call(r);
    } catch (o) {
      s = new dt(o);
    }
  return h.inBatch--, h.trackingDerivation = i, Os(e), ys(e), Le(n), s;
}
function ys(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : h.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function Os(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = y.UP_TO_DATE_, i = 0, s = e.unboundDepsCount_, o = 0; o < s; o++) {
    var a = r[o];
    a.diffValue_ === 0 && (a.diffValue_ = 1, i !== o && (r[i] = a), i++), a.dependenciesState_ > n && (n = a.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, s = t.length; s--; ) {
    var u = t[s];
    u.diffValue_ === 0 && Or(u, e), u.diffValue_ = 0;
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && (c.diffValue_ = 0, Es(c, e));
  }
  n !== y.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function zt(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    Or(t[r], e);
  e.dependenciesState_ = y.NOT_TRACKING_;
}
function gr(e) {
  var t = ge();
  try {
    return e();
  } finally {
    te(t);
  }
}
function ge() {
  var e = h.trackingDerivation;
  return h.trackingDerivation = null, e;
}
function te(e) {
  h.trackingDerivation = e;
}
function cn(e) {
  var t = h.allowStateReads;
  return h.allowStateReads = e, t;
}
function Le(e) {
  h.allowStateReads = e;
}
function yr(e) {
  if (e.dependenciesState_ !== y.UP_TO_DATE_) {
    e.dependenciesState_ = y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = y.UP_TO_DATE_;
  }
}
var Pt = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, jt = !0, h = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Yn();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (jt = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Pt().version && (jt = !1), jt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new Pt()) : (setTimeout(function() {
    p(35);
  }, 1), new Pt());
}();
function Es(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Or(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Er(e);
}
function Er(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, h.pendingUnobservations.push(e));
}
function M() {
  h.inBatch++;
}
function k() {
  if (--h.inBatch === 0) {
    Dr();
    for (var e = h.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof _e && r.suspend_());
    }
    h.pendingUnobservations = [];
  }
}
function Ar(e) {
  gs(e);
  var t = h.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && h.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && h.inBatch > 0 && Er(e), !1);
}
function Nr(e) {
  e.lowestObserverState_ !== y.STALE_ && (e.lowestObserverState_ = y.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === y.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== I.NONE && wr(t, e), t.onBecomeStale_()), t.dependenciesState_ = y.STALE_;
  }));
}
function As(e) {
  e.lowestObserverState_ !== y.STALE_ && (e.lowestObserverState_ = y.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === y.POSSIBLY_STALE_ ? (t.dependenciesState_ = y.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== I.NONE && wr(t, e)) : t.dependenciesState_ === y.UP_TO_DATE_ && (e.lowestObserverState_ = y.UP_TO_DATE_);
  }));
}
function Ns(e) {
  e.lowestObserverState_ === y.UP_TO_DATE_ && (e.lowestObserverState_ = y.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === y.UP_TO_DATE_ && (t.dependenciesState_ = y.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function wr(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === I.BREAK) {
    var r = [];
    Sr(ks(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof _e ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Sr(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return Sr(n, t, r + 1);
  });
}
var Ht = /* @__PURE__ */ function() {
  function e(r, n, i, s) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + H() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = y.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = I.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = s;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, h.pendingReactions.push(this), Dr());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      M(), this.isScheduled_ = !1;
      var n = h.trackingContext;
      if (h.trackingContext = this, Kt(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && T() && ve({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      h.trackingContext = n, k();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      M();
      var i = T(), s;
      process.env.NODE_ENV !== "production" && i && (s = Date.now(), j({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var o = h.trackingContext;
      h.trackingContext = this;
      var a = mr(this, n, void 0);
      h.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && zt(this), rt(a) && this.reportExceptionInDerivation_(a.cause), process.env.NODE_ENV !== "production" && i && V({
        time: Date.now() - s
      }), k();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (h.disableErrorBoundaries)
      throw n;
    var s = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    h.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(s, n), process.env.NODE_ENV !== "production" && T() && ve({
      type: "error",
      name: this.name_,
      message: s,
      error: "" + n
    }), h.globalReactionErrorHandlers.forEach(function(o) {
      return o(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (M(), zt(this), k()));
  }, t.getDisposer_ = function(n) {
    var i = this, s = function o() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", o);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", s), s[m] = this, s;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), Ks(this, n);
  }, e;
}(), Rn = 100, ws = function(t) {
  return t();
};
function Dr() {
  h.inBatch > 0 || h.isRunningReactions || ws(Ss);
}
function Ss() {
  h.isRunningReactions = !0;
  for (var e = h.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Rn && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Rn + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  h.isRunningReactions = !1;
}
var ht = /* @__PURE__ */ me("Reaction", Ht);
function T() {
  return process.env.NODE_ENV !== "production" && !!h.spyListeners.length;
}
function ve(e) {
  if (process.env.NODE_ENV !== "production" && h.spyListeners.length)
    for (var t = h.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function j(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = ae({}, e, {
      spyReportStart: !0
    });
    ve(t);
  }
}
var Ds = {
  type: "report-end",
  spyReportEnd: !0
};
function V(e) {
  process.env.NODE_ENV !== "production" && ve(e ? ae({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : Ds);
}
function Ts(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (h.spyListeners.push(e), nn(function() {
    h.spyListeners = h.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var ln = "action", Rs = "action.bound", Tr = "autoAction", xs = "autoAction.bound", Rr = "<unnamed action>", Gt = /* @__PURE__ */ ze(ln), Ps = /* @__PURE__ */ ze(Rs, {
  bound: !0
}), Jt = /* @__PURE__ */ ze(Tr, {
  autoAction: !0
}), js = /* @__PURE__ */ ze(xs, {
  autoAction: !0,
  bound: !0
});
function xr(e) {
  var t = function(n, i) {
    if (S(n))
      return pe(n.name || Rr, n, e);
    if (S(i))
      return pe(n, i, e);
    if (qe(i))
      return (e ? Jt : Gt).decorate_20223_(n, i);
    if (de(i))
      return Te(n, i, e ? Jt : Gt);
    if (de(n))
      return Y(ze(e ? Tr : ln, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && p("Invalid arguments for `action`");
  };
  return t;
}
var Ae = /* @__PURE__ */ xr(!1);
Object.assign(Ae, Gt);
var Ue = /* @__PURE__ */ xr(!0);
Object.assign(Ue, Jt);
Ae.bound = /* @__PURE__ */ Y(Ps);
Ue.bound = /* @__PURE__ */ Y(js);
function et(e) {
  return _r(e.name || Rr, !1, e, this, void 0);
}
function He(e) {
  return S(e) && e.isMobxAction === !0;
}
function Vs(e, t) {
  var r, n, i, s, o;
  t === void 0 && (t = Qn), process.env.NODE_ENV !== "production" && (S(e) || p("Autorun expects a function as first argument"), He(e) && p("Autorun does not accept actions since actions are untrackable"));
  var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + H() : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Ht(a, function() {
      this.track(b);
    }, t.onError, t.requiresObservable);
  else {
    var l = Ls(t), f = !1;
    c = new Ht(a, function() {
      f || (f = !0, l(function() {
        f = !1, c.isDisposed_ || c.track(b);
      }));
    }, t.onError, t.requiresObservable);
  }
  function b() {
    e(c);
  }
  return (i = t) != null && (s = i.signal) != null && s.aborted || c.schedule_(), c.getDisposer_((o = t) == null ? void 0 : o.signal);
}
var Cs = function(t) {
  return t();
};
function Ls(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : Cs;
}
var Bs = "onBO", Us = "onBUO";
function Ms(e, t, r) {
  return jr(Bs, e, t, r);
}
function Pr(e, t, r) {
  return jr(Us, e, t, r);
}
function jr(e, t, r, n) {
  var i = typeof n == "function" ? ue(t, r) : ue(t), s = S(n) ? n : r, o = e + "L";
  return i[o] ? i[o].add(s) : i[o] = /* @__PURE__ */ new Set([s]), function() {
    var a = i[o];
    a && (a.delete(s), a.size === 0 && delete i[o]);
  };
}
function Vr(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && p("'extendObservable' expected 2-4 arguments"), typeof e != "object" && p("'extendObservable' expects an object as first argument"), re(e) && p("'extendObservable' should not be used on maps, use map.merge instead"), P(t) || p("'extendObservable' only accepts plain objects as second argument"), (ke(t) || ke(r)) && p("Extending an object with another observable (object) is not supported"));
  var i = Ai(t);
  return ye(function() {
    var s = xe(e, n)[m];
    Be(i).forEach(function(o) {
      s.extend_(
        o,
        i[o],
        // must pass "undefined" for { key: undefined }
        r && o in r ? r[o] : !0
      );
    });
  }), e;
}
function ks(e, t) {
  return Cr(ue(e, t));
}
function Cr(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Is(e.observing_).map(Cr)), t;
}
function Is(e) {
  return Array.from(new Set(e));
}
var Fs = 0;
function Lr() {
  this.message = "FLOW_CANCELLED";
}
Lr.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Vt = /* @__PURE__ */ ur("flow"), $s = /* @__PURE__ */ ur("flow.bound", {
  bound: !0
}), we = /* @__PURE__ */ Object.assign(function(t, r) {
  if (qe(r))
    return Vt.decorate_20223_(t, r);
  if (de(r))
    return Te(t, r, Vt);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && p("Flow expects single argument with generator function");
  var n = t, i = n.name || "<unnamed flow>", s = function() {
    var a = this, u = arguments, c = ++Fs, l = Ae(i + " - runid: " + c + " - init", n).apply(a, u), f, b = void 0, E = new Promise(function(v, _) {
      var O = 0;
      f = _;
      function w(R) {
        b = void 0;
        var ie;
        try {
          ie = Ae(i + " - runid: " + c + " - yield " + O++, l.next).call(l, R);
        } catch (ce) {
          return _(ce);
        }
        x(ie);
      }
      function L(R) {
        b = void 0;
        var ie;
        try {
          ie = Ae(i + " - runid: " + c + " - yield " + O++, l.throw).call(l, R);
        } catch (ce) {
          return _(ce);
        }
        x(ie);
      }
      function x(R) {
        if (S(R == null ? void 0 : R.then)) {
          R.then(x, _);
          return;
        }
        return R.done ? v(R.value) : (b = Promise.resolve(R.value), b.then(w, L));
      }
      w(void 0);
    });
    return E.cancel = Ae(i + " - runid: " + c + " - cancel", function() {
      try {
        b && xn(b);
        var v = l.return(void 0), _ = Promise.resolve(v.value);
        _.then(Oe, Oe), xn(_), f(new Lr());
      } catch (O) {
        f(O);
      }
    }), E;
  };
  return s.isMobXFlow = !0, s;
}, Vt);
we.bound = /* @__PURE__ */ Y($s);
function xn(e) {
  S(e.cancel) && e.cancel();
}
function Me(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function qs(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (re(e) || We(e)) ? p("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : be(e) ? e[m].values_.has(t) : !1 : be(e) || !!e[m] || sn(e) || ht(e) || wt(e) : !1;
}
function ke(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && p("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), qs(e);
}
function Ks() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var i = zs(r);
    if (!i)
      return p("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    i.isTracing_ === I.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? I.BREAK : I.LOG;
  }
}
function zs(e) {
  switch (e.length) {
    case 0:
      return h.trackingDerivation;
    case 1:
      return ue(e[0]);
    case 2:
      return ue(e[0], e[1]);
  }
}
function ee(e, t) {
  t === void 0 && (t = void 0), M();
  try {
    return e.apply(t);
  } finally {
    k();
  }
}
function le(e) {
  return e[m];
}
var Hs = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && je("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), le(t).has_(r);
  },
  get: function(t, r) {
    return le(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return de(r) ? (process.env.NODE_ENV !== "production" && !le(t).values_.has(r) && je("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = le(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && je("delete properties from an observable object. Use 'remove' from 'mobx' instead."), de(r) ? (n = le(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return process.env.NODE_ENV !== "production" && je("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = le(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && h.trackingDerivation && je("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), le(t).ownKeys_();
  },
  preventExtensions: function(t) {
    p(13);
  }
};
function Gs(e, t) {
  var r, n;
  return er(), e = xe(e, t), (n = (r = e[m]).proxy_) != null ? n : r.proxy_ = new Proxy(e, Hs);
}
function B(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ge(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), nn(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function U(e, t) {
  var r = ge();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, s = n.length; i < s && (t = n[i](t), t && !t.type && p(14), !!t); i++)
      ;
    return t;
  } finally {
    te(r);
  }
}
function K(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Je(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), nn(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function z(e, t) {
  var r = ge(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, s = n.length; i < s; i++)
      n[i](t);
    te(r);
  }
}
var Ct = /* @__PURE__ */ Symbol("mobx-keys");
function fn(e, t, r) {
  return process.env.NODE_ENV !== "production" && (!P(e) && !P(Object.getPrototypeOf(e)) && p("'makeAutoObservable' can only be used for classes that don't have a superclass"), be(e) && p("makeAutoObservable can only be used on objects not already made observable")), P(e) ? Vr(e, e, t, r) : (ye(function() {
    var n = xe(e, r)[m];
    if (!e[Ct]) {
      var i = Object.getPrototypeOf(e), s = new Set([].concat(Be(e), Be(i)));
      s.delete("constructor"), s.delete(m), yt(i, Ct, s);
    }
    e[Ct].forEach(function(o) {
      return n.make_(
        o,
        // must pass "undefined" for { key: undefined }
        t && o in t ? t[o] : !0
      );
    });
  }), e);
}
var Pn = "splice", $ = "update", Js = 1e4, Ws = {
  get: function(t, r) {
    var n = t[m];
    return r === m ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : q(pt, r) ? pt[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[m];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    p(15);
  }
}, dn = /* @__PURE__ */ function() {
  function e(r, n, i, s) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = s, this.atom_ = new Ke(r), this.enhancer_ = function(o, a) {
      return n(o, a, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return Ge(this, n);
  }, t.observe_ = function(n, i) {
    return i === void 0 && (i = !1), i && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Je(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && p("Out of range: " + n);
    var i = this.values_.length;
    if (n !== i)
      if (n > i) {
        for (var s = new Array(n - i), o = 0; o < n - i; o++)
          s[o] = void 0;
        this.spliceWithArray_(i, 0, s);
      } else
        this.spliceWithArray_(n, i - n);
  }, t.updateArrayLength_ = function(n, i) {
    n !== this.lastKnownLength_ && p(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && zr(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, s) {
    var o = this;
    J(this.atom_);
    var a = this.values_.length;
    if (n === void 0 ? n = 0 : n > a ? n = a : n < 0 && (n = Math.max(0, a + n)), arguments.length === 1 ? i = a - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, a - n)), s === void 0 && (s = ut), B(this)) {
      var u = U(this, {
        object: this.proxy_,
        type: Pn,
        index: n,
        removedCount: i,
        added: s
      });
      if (!u)
        return ut;
      i = u.removedCount, s = u.added;
    }
    if (s = s.length === 0 ? s : s.map(function(f) {
      return o.enhancer_(f, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var c = s.length - i;
      this.updateArrayLength_(a, c);
    }
    var l = this.spliceItemsIntoValues_(n, i, s);
    return (i !== 0 || s.length !== 0) && this.notifyArraySplice_(n, s, l), this.dehanceValues_(l);
  }, t.spliceItemsIntoValues_ = function(n, i, s) {
    if (s.length < Js) {
      var o;
      return (o = this.values_).splice.apply(o, [n, i].concat(s));
    } else {
      var a = this.values_.slice(n, n + i), u = this.values_.slice(n + i);
      this.values_.length += s.length - i;
      for (var c = 0; c < s.length; c++)
        this.values_[n + c] = s[c];
      for (var l = 0; l < u.length; l++)
        this.values_[n + s.length + l] = u[l];
      return a;
    }
  }, t.notifyArrayChildUpdate_ = function(n, i, s) {
    var o = !this.owned_ && T(), a = K(this), u = a || o ? {
      observableKind: "array",
      object: this.proxy_,
      type: $,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: s
    } : null;
    process.env.NODE_ENV !== "production" && o && j(u), this.atom_.reportChanged(), a && z(this, u), process.env.NODE_ENV !== "production" && o && V();
  }, t.notifyArraySplice_ = function(n, i, s) {
    var o = !this.owned_ && T(), a = K(this), u = a || o ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Pn,
      index: n,
      removed: s,
      added: i,
      removedCount: s.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && o && j(u), this.atom_.reportChanged(), a && z(this, u), process.env.NODE_ENV !== "production" && o && V();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, i) {
    var s = this.values_;
    if (this.legacyMode_ && n > s.length && p(17, n, s.length), n < s.length) {
      J(this.atom_);
      var o = s[n];
      if (B(this)) {
        var a = U(this, {
          type: $,
          object: this.proxy_,
          index: n,
          newValue: i
        });
        if (!a)
          return;
        i = a.newValue;
      }
      i = this.enhancer_(i, o);
      var u = i !== o;
      u && (s[n] = i, this.notifyArrayChildUpdate_(n, i, o));
    } else {
      for (var c = new Array(n + 1 - s.length), l = 0; l < c.length - 1; l++)
        c[l] = void 0;
      c[c.length - 1] = i, this.spliceWithArray_(s.length, 0, c);
    }
  }, e;
}();
function Xs(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), n === void 0 && (n = !1), er(), ye(function() {
    var i = new dn(r, t, n, !1);
    nr(i.values_, m, i);
    var s = new Proxy(i.values_, Ws);
    return i.proxy_ = s, e && e.length && i.spliceWithArray_(0, 0, e), s;
  });
}
var pt = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[m];
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
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
      i[s - 2] = arguments[s];
    var o = this[m];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function(t, r, n) {
    return this[m].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[m], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[m].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[m], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return h.trackingDerivation && p(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    h.trackingDerivation && p(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[m], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
N("at", C);
N("concat", C);
N("flat", C);
N("includes", C);
N("indexOf", C);
N("join", C);
N("lastIndexOf", C);
N("slice", C);
N("toString", C);
N("toLocaleString", C);
N("toSorted", C);
N("toSpliced", C);
N("with", C);
N("every", G);
N("filter", G);
N("find", G);
N("findIndex", G);
N("findLast", G);
N("findLastIndex", G);
N("flatMap", G);
N("forEach", G);
N("map", G);
N("some", G);
N("toReversed", G);
N("reduce", Br);
N("reduceRight", Br);
function N(e, t) {
  typeof Array.prototype[e] == "function" && (pt[e] = t(e));
}
function C(e) {
  return function() {
    var t = this[m];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function G(e) {
  return function(t, r) {
    var n = this, i = this[m];
    i.atom_.reportObserved();
    var s = i.dehanceValues_(i.values_);
    return s[e](function(o, a) {
      return t.call(r, o, a, n);
    });
  };
}
function Br(e) {
  return function() {
    var t = this, r = this[m];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(s, o, a) {
      return i(s, o, a, t);
    }, n[e].apply(n, arguments);
  };
}
var Ys = /* @__PURE__ */ me("ObservableArrayAdministration", dn);
function We(e) {
  return gt(e) && Ys(e[m]);
}
var Ur, Mr, Zs = {}, oe = "add", _t = "delete";
Ur = Symbol.iterator;
Mr = Symbol.toStringTag;
var kr = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var s = this;
    n === void 0 && (n = he), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + H() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[m] = Zs, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, S(Map) || p(18), ye(function() {
      s.keysAtom_ = or(process.env.NODE_ENV !== "production" ? s.name_ + ".keys()" : "ObservableMap.keys()"), s.data_ = /* @__PURE__ */ new Map(), s.hasMap_ = /* @__PURE__ */ new Map(), r && s.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!h.trackingDerivation)
      return this.has_(n);
    var s = this.hasMap_.get(n);
    if (!s) {
      var o = s = new fe(this.has_(n), Et, process.env.NODE_ENV !== "production" ? this.name_ + "." + It(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, o), Pr(o, function() {
        return i.hasMap_.delete(n);
      });
    }
    return s.get();
  }, t.set = function(n, i) {
    var s = this.has_(n);
    if (B(this)) {
      var o = U(this, {
        type: s ? $ : oe,
        object: this,
        newValue: i,
        name: n
      });
      if (!o)
        return this;
      i = o.newValue;
    }
    return s ? this.updateValue_(n, i) : this.addValue_(n, i), this;
  }, t.delete = function(n) {
    var i = this;
    if (J(this.keysAtom_), B(this)) {
      var s = U(this, {
        type: _t,
        object: this,
        name: n
      });
      if (!s)
        return !1;
    }
    if (this.has_(n)) {
      var o = T(), a = K(this), u = a || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: _t,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && o && j(u), ee(function() {
        var c;
        i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1);
        var l = i.data_.get(n);
        l.setNewValue_(void 0), i.data_.delete(n);
      }), a && z(this, u), process.env.NODE_ENV !== "production" && o && V(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, i) {
    var s = this.data_.get(n);
    if (i = s.prepareNewValue_(i), i !== h.UNCHANGED) {
      var o = T(), a = K(this), u = a || o ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: $,
        object: this,
        oldValue: s.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && o && j(u), s.setNewValue_(i), a && z(this, u), process.env.NODE_ENV !== "production" && o && V();
    }
  }, t.addValue_ = function(n, i) {
    var s = this;
    J(this.keysAtom_), ee(function() {
      var c, l = new fe(i, s.enhancer_, process.env.NODE_ENV !== "production" ? s.name_ + "." + It(n) : "ObservableMap.key", !1);
      s.data_.set(n, l), i = l.value_, (c = s.hasMap_.get(n)) == null || c.setNewValue_(!0), s.keysAtom_.reportChanged();
    });
    var o = T(), a = K(this), u = a || o ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: oe,
      object: this,
      name: n,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && o && j(u), a && z(this, u), process.env.NODE_ENV !== "production" && o && V();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, i = this.keys();
    return Ie({
      next: function() {
        var o = i.next(), a = o.done, u = o.value;
        return {
          done: a,
          value: a ? void 0 : n.get(u)
        };
      }
    });
  }, t.entries = function() {
    var n = this, i = this.keys();
    return Ie({
      next: function() {
        var o = i.next(), a = o.done, u = o.value;
        return {
          done: a,
          value: a ? void 0 : [u, n.get(u)]
        };
      }
    });
  }, t[Ur] = function() {
    return this.entries();
  }, t.forEach = function(n, i) {
    for (var s = Ee(this), o; !(o = s()).done; ) {
      var a = o.value, u = a[0], c = a[1];
      n.call(i, c, u, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return re(n) && (n = new Map(n)), ee(function() {
      P(n) ? Ei(n).forEach(function(s) {
        return i.set(s, n[s]);
      }) : Array.isArray(n) ? n.forEach(function(s) {
        var o = s[0], a = s[1];
        return i.set(o, a);
      }) : De(n) ? (n.constructor !== Map && p(19, n), n.forEach(function(s, o) {
        return i.set(o, s);
      })) : n != null && p(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    ee(function() {
      gr(function() {
        for (var i = Ee(n.keys()), s; !(s = i()).done; ) {
          var o = s.value;
          n.delete(o);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return ee(function() {
      for (var s = Qs(n), o = /* @__PURE__ */ new Map(), a = !1, u = Ee(i.data_.keys()), c; !(c = u()).done; ) {
        var l = c.value;
        if (!s.has(l)) {
          var f = i.delete(l);
          if (f)
            a = !0;
          else {
            var b = i.data_.get(l);
            o.set(l, b);
          }
        }
      }
      for (var E = Ee(s.entries()), v; !(v = E()).done; ) {
        var _ = v.value, O = _[0], w = _[1], L = i.data_.has(O);
        if (i.set(O, w), i.data_.has(O)) {
          var x = i.data_.get(O);
          o.set(O, x), L || (a = !0);
        }
      }
      if (!a)
        if (i.data_.size !== o.size)
          i.keysAtom_.reportChanged();
        else
          for (var R = i.data_.keys(), ie = o.keys(), ce = R.next(), En = ie.next(); !ce.done; ) {
            if (ce.value !== En.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            ce = R.next(), En = ie.next();
          }
      i.data_ = o;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support fireImmediately=true in combination with maps."), Je(this, n);
  }, t.intercept_ = function(n) {
    return Ge(this, n);
  }, rn(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Mr,
    get: function() {
      return "Map";
    }
  }]), e;
}(), re = /* @__PURE__ */ me("ObservableMap", kr);
function Qs(e) {
  if (De(e) || re(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (P(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return p(21, e);
}
var Ir, Fr, eo = {};
Ir = Symbol.iterator;
Fr = Symbol.toStringTag;
var $r = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var s = this;
    n === void 0 && (n = he), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + H() : "ObservableSet"), this.name_ = void 0, this[m] = eo, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, S(Set) || p(22), this.enhancer_ = function(o, a) {
      return n(o, a, i);
    }, ye(function() {
      s.atom_ = or(s.name_), r && s.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    ee(function() {
      gr(function() {
        for (var i = Ee(n.data_.values()), s; !(s = i()).done; ) {
          var o = s.value;
          n.delete(o);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var s = Ee(this), o; !(o = s()).done; ) {
      var a = o.value;
      n.call(i, a, a, this);
    }
  }, t.add = function(n) {
    var i = this;
    if (J(this.atom_), B(this)) {
      var s = U(this, {
        type: oe,
        object: this,
        newValue: n
      });
      if (!s)
        return this;
    }
    if (!this.has(n)) {
      ee(function() {
        i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
      });
      var o = process.env.NODE_ENV !== "production" && T(), a = K(this), u = a || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: oe,
        object: this,
        newValue: n
      } : null;
      o && process.env.NODE_ENV !== "production" && j(u), a && z(this, u), o && process.env.NODE_ENV !== "production" && V();
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (B(this)) {
      var s = U(this, {
        type: _t,
        object: this,
        oldValue: n
      });
      if (!s)
        return !1;
    }
    if (this.has(n)) {
      var o = process.env.NODE_ENV !== "production" && T(), a = K(this), u = a || o ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: _t,
        object: this,
        oldValue: n
      } : null;
      return o && process.env.NODE_ENV !== "production" && j(u), ee(function() {
        i.atom_.reportChanged(), i.data_.delete(n);
      }), a && z(this, u), o && process.env.NODE_ENV !== "production" && V(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, i = Array.from(this.keys()), s = Array.from(this.values());
    return Ie({
      next: function() {
        var a = n;
        return n += 1, a < s.length ? {
          value: [i[a], s[a]],
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
    var n = this, i = 0, s = Array.from(this.data_.values());
    return Ie({
      next: function() {
        return i < s.length ? {
          value: n.dehanceValue_(s[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var i = this;
    return Re(n) && (n = new Set(n)), ee(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(s) {
        return i.add(s);
      })) : $e(n) ? (i.clear(), n.forEach(function(s) {
        return i.add(s);
      })) : n != null && p("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support fireImmediately=true in combination with sets."), Je(this, n);
  }, t.intercept_ = function(n) {
    return Ge(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Ir] = function() {
    return this.values();
  }, rn(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Fr,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Re = /* @__PURE__ */ me("ObservableSet", $r), jn = /* @__PURE__ */ Object.create(null), Vn = "remove", Wt = /* @__PURE__ */ function() {
  function e(r, n, i, s) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), s === void 0 && (s = Zi), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = s, this.keysAtom_ = new Ke(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = P(this.target_), process.env.NODE_ENV !== "production" && !Hr(this.defaultAnnotation_) && p("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var s = this.values_.get(n);
    if (s instanceof _e)
      return s.set(i), !0;
    if (B(this)) {
      var o = U(this, {
        type: $,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!o)
        return null;
      i = o.newValue;
    }
    if (i = s.prepareNewValue_(i), i !== h.UNCHANGED) {
      var a = K(this), u = process.env.NODE_ENV !== "production" && T(), c = a || u ? {
        type: $,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: s.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && j(c), s.setNewValue_(i), a && z(this, c), process.env.NODE_ENV !== "production" && u && V();
    }
    return !0;
  }, t.get_ = function(n) {
    return h.trackingDerivation && !q(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, s) {
    return s === void 0 && (s = !1), q(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : s ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, s);
  }, t.has_ = function(n) {
    if (!h.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new fe(n in this.target_, Et, process.env.NODE_ENV !== "production" ? this.name_ + "." + It(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (Bn(this, i, n), !(n in this.target_)) {
        var s;
        if ((s = this.target_[Q]) != null && s[n])
          return;
        p(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var o = this.target_; o && o !== mt; ) {
        var a = at(o, n);
        if (a) {
          var u = i.make_(this, n, a, o);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        o = Object.getPrototypeOf(o);
      }
      Ln(this, i, n);
    }
  }, t.extend_ = function(n, i, s, o) {
    if (o === void 0 && (o = !1), s === !0 && (s = this.defaultAnnotation_), s === !1)
      return this.defineProperty_(n, i, o);
    Bn(this, s, n);
    var a = s.extend_(this, n, i, o);
    return a && Ln(this, s, n), a;
  }, t.defineProperty_ = function(n, i, s) {
    s === void 0 && (s = !1), J(this.keysAtom_);
    try {
      M();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (B(this)) {
        var a = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: oe,
          newValue: i.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        i.value !== u && (i = ae({}, i, {
          value: u
        }));
      }
      if (s) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        X(this.target_, n, i);
      this.notifyPropertyAddition_(n, i.value);
    } finally {
      k();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, i, s, o) {
    o === void 0 && (o = !1), J(this.keysAtom_);
    try {
      M();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (B(this)) {
        var u = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: oe,
          newValue: i
        });
        if (!u)
          return null;
        i = u.newValue;
      }
      var c = Cn(n), l = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, l))
          return !1;
      } else
        X(this.target_, n, l);
      var f = new fe(i, s, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, f), this.notifyPropertyAddition_(n, f.value_);
    } finally {
      k();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, i, s) {
    s === void 0 && (s = !1), J(this.keysAtom_);
    try {
      M();
      var o = this.delete_(n);
      if (!o)
        return o;
      if (B(this)) {
        var a = U(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: oe,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var u = Cn(n), c = {
        configurable: h.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        X(this.target_, n, c);
      this.values_.set(n, new _e(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      k();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), J(this.keysAtom_), !q(this.target_, n))
      return !0;
    if (B(this)) {
      var s = U(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: Vn
      });
      if (!s)
        return null;
    }
    try {
      var o, a;
      M();
      var u = K(this), c = process.env.NODE_ENV !== "production" && T(), l = this.values_.get(n), f = void 0;
      if (!l && (u || c)) {
        var b;
        f = (b = at(this.target_, n)) == null ? void 0 : b.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], l && (this.values_.delete(n), l instanceof fe && (f = l.value_), Nr(l)), this.keysAtom_.reportChanged(), (o = this.pendingKeys_) == null || (a = o.get(n)) == null || a.set(n in this.target_), u || c) {
        var E = {
          type: Vn,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: f,
          name: n
        };
        process.env.NODE_ENV !== "production" && c && j(E), u && z(this, E), process.env.NODE_ENV !== "production" && c && V();
      }
    } finally {
      k();
    }
    return !0;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && p("`observe` doesn't support the fire immediately property for observable objects."), Je(this, n);
  }, t.intercept_ = function(n) {
    return Ge(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var s, o, a = K(this), u = process.env.NODE_ENV !== "production" && T();
    if (a || u) {
      var c = a || u ? {
        type: oe,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && j(c), a && z(this, c), process.env.NODE_ENV !== "production" && u && V();
    }
    (s = this.pendingKeys_) == null || (o = s.get(n)) == null || o.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Be(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function xe(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && be(e) && p("Options can't be provided for already observable objects."), q(e, m))
    return process.env.NODE_ENV !== "production" && !(pn(e) instanceof Wt) && p("Cannot convert '" + vt(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && p("Cannot make the designated object observable; it is not extensible");
  var n = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (P(e) ? "ObservableObject" : e.constructor.name) + "@" + H() : "ObservableObject", i = new Wt(e, /* @__PURE__ */ new Map(), String(n), cs(t));
  return yt(e, m, i), e;
}
var to = /* @__PURE__ */ me("ObservableObjectAdministration", Wt);
function Cn(e) {
  return jn[e] || (jn[e] = {
    get: function() {
      return this[m].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[m].setObservablePropValue_(e, r);
    }
  });
}
function be(e) {
  return gt(e) ? to(e[m]) : !1;
}
function Ln(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[Q]) == null || delete n[r];
}
function Bn(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !Hr(t) && p("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !lt(t) && q(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), i = e.appliedAnnotations_[r].annotationType_, s = t.annotationType_;
    p("Cannot apply '" + s + "' to '" + n + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var no = /* @__PURE__ */ Kr(0), ro = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), Lt = 0, qr = function() {
};
function io(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
io(qr, Array.prototype);
var hn = /* @__PURE__ */ function(e, t, r) {
  sr(n, e);
  function n(s, o, a, u) {
    var c;
    return a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableArray@" + H() : "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this, ye(function() {
      var l = new dn(a, o, u, !0);
      l.proxy_ = nt(c), nr(nt(c), m, l), s && s.length && c.spliceWithArray(0, 0, s), ro && Object.defineProperty(nt(c), "0", no);
    }), c;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[m].atom_.reportObserved();
    for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++)
      a[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(c) {
        return We(c) ? c.slice() : c;
      })
    );
  }, i[r] = function() {
    var s = this, o = 0;
    return Ie({
      next: function() {
        return o < s.length ? {
          value: s[o++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, rn(n, [{
    key: "length",
    get: function() {
      return this[m].getArrayLength_();
    },
    set: function(o) {
      this[m].setArrayLength_(o);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}(qr, Symbol.toStringTag, Symbol.iterator);
Object.entries(pt).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && yt(hn.prototype, t, r);
});
function Kr(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[m].get_(e);
    },
    set: function(r) {
      this[m].set_(e, r);
    }
  };
}
function so(e) {
  X(hn.prototype, "" + e, Kr(e));
}
function zr(e) {
  if (e > Lt) {
    for (var t = Lt; t < e + 100; t++)
      so(t);
    Lt = e;
  }
}
zr(1e3);
function oo(e, t, r) {
  return new hn(e, t, r);
}
function ue(e, t) {
  if (typeof e == "object" && e !== null) {
    if (We(e))
      return t !== void 0 && p(23), e[m].atom_;
    if (Re(e))
      return e.atom_;
    if (re(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || p(25, t, vt(e)), r;
    }
    if (be(e)) {
      if (!t)
        return p(26);
      var n = e[m].values_.get(t);
      return n || p(27, t, vt(e)), n;
    }
    if (sn(e) || wt(e) || ht(e))
      return e;
  } else if (S(e) && ht(e[m]))
    return e[m];
  p(28);
}
function pn(e, t) {
  if (e || p(29), t !== void 0)
    return pn(ue(e, t));
  if (sn(e) || wt(e) || ht(e) || re(e) || Re(e))
    return e;
  if (e[m])
    return e[m];
  p(24, e);
}
function vt(e, t) {
  var r;
  if (t !== void 0)
    r = ue(e, t);
  else {
    if (He(e))
      return e.name;
    be(e) || re(e) || Re(e) ? r = pn(e) : r = ue(e);
  }
  return r.name_;
}
function ye(e) {
  var t = ge(), r = an(!0);
  M();
  try {
    return e();
  } finally {
    k(), un(r), te(t);
  }
}
var Un = mt.toString;
function _n(e, t, r) {
  return r === void 0 && (r = -1), Xt(e, t, r);
}
function Xt(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var s = typeof e;
  if (s !== "function" && s !== "object" && typeof t != "object")
    return !1;
  var o = Un.call(e);
  if (o !== Un.call(t))
    return !1;
  switch (o) {
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
  e = Mn(e), t = Mn(t);
  var a = o === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, c = t.constructor;
    if (u !== c && !(S(u) && u instanceof u && S(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], i = i || [];
  for (var l = n.length; l--; )
    if (n[l] === e)
      return i[l] === t;
  if (n.push(e), i.push(t), a) {
    if (l = e.length, l !== t.length)
      return !1;
    for (; l--; )
      if (!Xt(e[l], t[l], r - 1, n, i))
        return !1;
  } else {
    var f = Object.keys(e), b;
    if (l = f.length, Object.keys(t).length !== l)
      return !1;
    for (; l--; )
      if (b = f[l], !(q(t, b) && Xt(e[b], t[b], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function Mn(e) {
  return We(e) ? e.slice() : De(e) || re(e) || $e(e) || Re(e) ? Array.from(e.entries()) : e;
}
function Ie(e) {
  return e[Symbol.iterator] = ao, e;
}
function ao() {
  return this;
}
function Hr(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && S(e.make_) && S(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Yn();
  typeof t[e] > "u" && p("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Ts,
  extras: {
    getDebugName: vt
  },
  $mobx: m
});
class uo {
  constructor() {
    this.dialogIsVisible = !1, this.setDialogIsVisible = (t) => {
      this.dialogIsVisible = t;
    }, fn(this);
  }
}
const co = 10;
class lo {
  constructor() {
    this.currentPage = 1, this.totalPages = 1, fn(this);
  }
  setCurrentPage(t) {
    this.currentPage = t;
  }
  setTtotalPages(t) {
    const r = Math.max(1, Math.ceil(t / co));
    this.totalPages = t > 0 ? r : 1, this.currentPage > r && (this.currentPage = r);
  }
}
function Gr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fo } = Object.prototype, { getPrototypeOf: vn } = Object, St = /* @__PURE__ */ ((e) => (t) => {
  const r = fo.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Z = (e) => (e = e.toLowerCase(), (t) => St(t) === e), Dt = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Fe = Dt("undefined");
function ho(e) {
  return e !== null && !Fe(e) && e.constructor !== null && !Fe(e.constructor) && F(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jr = Z("ArrayBuffer");
function po(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jr(e.buffer), t;
}
const _o = Dt("string"), F = Dt("function"), Wr = Dt("number"), Tt = (e) => e !== null && typeof e == "object", vo = (e) => e === !0 || e === !1, it = (e) => {
  if (St(e) !== "object")
    return !1;
  const t = vn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, bo = Z("Date"), mo = Z("File"), go = Z("Blob"), yo = Z("FileList"), Oo = (e) => Tt(e) && F(e.pipe), Eo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || F(e.append) && ((t = St(e)) === "formdata" || // detect form-data instance
  t === "object" && F(e.toString) && e.toString() === "[object FormData]"));
}, Ao = Z("URLSearchParams"), No = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xe(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Pe(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let a;
    for (n = 0; n < o; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function Xr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Yr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zr = (e) => !Fe(e) && e !== Yr;
function Yt() {
  const { caseless: e } = Zr(this) && this || {}, t = {}, r = (n, i) => {
    const s = e && Xr(t, i) || i;
    it(t[s]) && it(n) ? t[s] = Yt(t[s], n) : it(n) ? t[s] = Yt({}, n) : Pe(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Xe(arguments[n], r);
  return t;
}
const wo = (e, t, r, { allOwnKeys: n } = {}) => (Xe(t, (i, s) => {
  r && F(i) ? e[s] = Gr(i, r) : e[s] = i;
}, { allOwnKeys: n }), e), So = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Do = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, To = (e, t, r, n) => {
  let i, s, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      o = i[s], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && vn(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ro = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, xo = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!Wr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Po = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vn(Uint8Array)), jo = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Vo = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Co = Z("HTMLFormElement"), Lo = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), kn = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Bo = Z("RegExp"), Qr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Xe(r, (i, s) => {
    let o;
    (o = t(i, s, e)) !== !1 && (n[s] = o || i);
  }), Object.defineProperties(e, n);
}, Uo = (e) => {
  Qr(e, (t, r) => {
    if (F(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (F(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Mo = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((s) => {
      r[s] = !0;
    });
  };
  return Pe(e) ? n(e) : n(String(e).split(t)), r;
}, ko = () => {
}, Io = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Bt = "abcdefghijklmnopqrstuvwxyz", In = "0123456789", ei = {
  DIGIT: In,
  ALPHA: Bt,
  ALPHA_DIGIT: Bt + Bt.toUpperCase() + In
}, Fo = (e = 16, t = ei.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function $o(e) {
  return !!(e && F(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const qo = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Tt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const s = Pe(n) ? [] : {};
        return Xe(n, (o, a) => {
          const u = r(o, i + 1);
          !Fe(u) && (s[a] = u);
        }), t[i] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ko = Z("AsyncFunction"), zo = (e) => e && (Tt(e) || F(e)) && F(e.then) && F(e.catch), d = {
  isArray: Pe,
  isArrayBuffer: Jr,
  isBuffer: ho,
  isFormData: Eo,
  isArrayBufferView: po,
  isString: _o,
  isNumber: Wr,
  isBoolean: vo,
  isObject: Tt,
  isPlainObject: it,
  isUndefined: Fe,
  isDate: bo,
  isFile: mo,
  isBlob: go,
  isRegExp: Bo,
  isFunction: F,
  isStream: Oo,
  isURLSearchParams: Ao,
  isTypedArray: Po,
  isFileList: yo,
  forEach: Xe,
  merge: Yt,
  extend: wo,
  trim: No,
  stripBOM: So,
  inherits: Do,
  toFlatObject: To,
  kindOf: St,
  kindOfTest: Z,
  endsWith: Ro,
  toArray: xo,
  forEachEntry: jo,
  matchAll: Vo,
  isHTMLForm: Co,
  hasOwnProperty: kn,
  hasOwnProp: kn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qr,
  freezeMethods: Uo,
  toObjectSet: Mo,
  toCamelCase: Lo,
  noop: ko,
  toFiniteNumber: Io,
  findKey: Xr,
  global: Yr,
  isContextDefined: Zr,
  ALPHABET: ei,
  generateString: Fo,
  isSpecCompliantForm: $o,
  toJSONObject: qo,
  isAsyncFn: Ko,
  isThenable: zo
};
function g(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
d.inherits(g, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ti = g.prototype, ni = {};
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
  ni[e] = { value: e };
});
Object.defineProperties(g, ni);
Object.defineProperty(ti, "isAxiosError", { value: !0 });
g.from = (e, t, r, n, i, s) => {
  const o = Object.create(ti);
  return d.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), g.call(o, e.message, t, r, n, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const Ho = null;
function Zt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function ri(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fn(e, t, r) {
  return e ? e.concat(t).map(function(i, s) {
    return i = ri(i), !r && s ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function Go(e) {
  return d.isArray(e) && !e.some(Zt);
}
const Jo = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Rt(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, O) {
    return !d.isUndefined(O[_]);
  });
  const n = r.metaTokens, i = r.visitor || l, s = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (d.isDate(v))
      return v.toISOString();
    if (!u && d.isBlob(v))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(v) || d.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, _, O) {
    let w = v;
    if (v && !O && typeof v == "object") {
      if (d.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), v = JSON.stringify(v);
      else if (d.isArray(v) && Go(v) || (d.isFileList(v) || d.endsWith(_, "[]")) && (w = d.toArray(v)))
        return _ = ri(_), w.forEach(function(x, R) {
          !(d.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fn([_], R, s) : o === null ? _ : _ + "[]",
            c(x)
          );
        }), !1;
    }
    return Zt(v) ? !0 : (t.append(Fn(O, _, s), c(v)), !1);
  }
  const f = [], b = Object.assign(Jo, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Zt
  });
  function E(v, _) {
    if (!d.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      f.push(v), d.forEach(v, function(w, L) {
        (!(d.isUndefined(w) || w === null) && i.call(
          t,
          w,
          d.isString(L) ? L.trim() : L,
          _,
          b
        )) === !0 && E(w, _ ? _.concat(L) : [L]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function $n(e) {
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
function bn(e, t) {
  this._pairs = [], e && Rt(e, this, t);
}
const ii = bn.prototype;
ii.append = function(t, r) {
  this._pairs.push([t, r]);
};
ii.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, $n);
  } : $n;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Wo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function si(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Wo, i = r && r.serialize;
  let s;
  if (i ? s = i(t, r) : s = d.isURLSearchParams(t) ? t.toString() : new bn(t, r).toString(n), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class qn {
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const oi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xo = typeof URLSearchParams < "u" ? URLSearchParams : bn, Yo = typeof FormData < "u" ? FormData : null, Zo = typeof Blob < "u" ? Blob : null, Qo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xo,
    FormData: Yo,
    Blob: Zo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ai = typeof window < "u" && typeof document < "u", ea = ((e) => ai && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ta = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ai,
  hasStandardBrowserEnv: ea,
  hasStandardBrowserWebWorkerEnv: ta
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...na,
  ...Qo
};
function ra(e, t) {
  return Rt(e, new W.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, s) {
      return W.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ia(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function sa(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let s;
  for (n = 0; n < i; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function ui(e) {
  function t(r, n, i, s) {
    let o = r[s++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), u = s >= r.length;
    return o = !o && d.isArray(i) ? i.length : o, u ? (d.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a) : ((!i[o] || !d.isObject(i[o])) && (i[o] = []), t(r, n, i[o], s) && d.isArray(i[o]) && (i[o] = sa(i[o])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, i) => {
      t(ia(n), i, r, 0);
    }), r;
  }
  return null;
}
function oa(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const mn = {
  transitional: oi,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return i ? JSON.stringify(ui(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ra(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Rt(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || i ? (r.setContentType("application/json", !1), oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || mn.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && d.isString(t) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: W.classes.FormData,
    Blob: W.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mn.headers[e] = {};
});
const gn = mn, aa = d.toObjectSet([
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
]), ua = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && aa[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Kn = Symbol("internals");
function Ve(e) {
  return e && String(e).trim().toLowerCase();
}
function st(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(st) : String(e);
}
function ca(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const la = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ut(e, t, r, n, i) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function fa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function da(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, s, o) {
        return this[n].call(this, t, i, s, o);
      },
      configurable: !0
    });
  });
}
class xt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function s(a, u, c) {
      const l = Ve(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(i, l);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || u] = st(a));
    }
    const o = (a, u) => d.forEach(a, (c, l) => s(c, l, u));
    return d.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : d.isString(t) && (t = t.trim()) && !la(t) ? o(ua(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = Ve(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return ca(i);
        if (d.isFunction(r))
          return r.call(this, i, n);
        if (d.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ve(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ut(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function s(o) {
      if (o = Ve(o), o) {
        const a = d.findKey(n, o);
        a && (!r || Ut(n, n[a], a, r)) && (delete n[a], i = !0);
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Ut(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (i, s) => {
      const o = d.findKey(n, s);
      if (o) {
        r[o] = st(i), delete r[s];
        return;
      }
      const a = t ? fa(s) : String(s).trim();
      a !== s && delete r[s], r[a] = st(i), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && d.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Kn] = this[Kn] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = Ve(o);
      n[a] || (da(i, o), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(xt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(xt);
const ne = xt;
function Mt(e, t) {
  const r = this || gn, n = t || r, i = ne.from(n.headers);
  let s = n.data;
  return d.forEach(e, function(a) {
    s = a.call(r, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function ci(e) {
  return !!(e && e.__CANCEL__);
}
function Ye(e, t, r) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Ye, g, {
  __CANCEL__: !0
});
function ha(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new g(
    "Request failed with status code " + r.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const pa = W.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, s) {
      const o = [e + "=" + encodeURIComponent(t)];
      d.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), d.isString(n) && o.push("path=" + n), d.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function _a(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function va(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function li(e, t) {
  return e && !_a(t) ? va(e, t) : t;
}
const ba = W.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(s) {
      let o = s;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
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
    return n = i(window.location.href), function(o) {
      const a = d.isString(o) ? i(o) : o;
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
function ma(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ga(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[s];
    o || (o = c), r[i] = u, n[i] = c;
    let f = s, b = 0;
    for (; f !== i; )
      b += r[f++], f = f % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), c - o < t)
      return;
    const E = l && c - l;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function zn(e, t) {
  let r = 0;
  const n = ga(50, 250);
  return (i) => {
    const s = i.loaded, o = i.lengthComputable ? i.total : void 0, a = s - r, u = n(a), c = s <= o;
    r = s;
    const l = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && o && c ? (o - s) / u : void 0,
      event: i
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const ya = typeof XMLHttpRequest < "u", Oa = ya && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const s = ne.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: a } = e, u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let l;
    if (d.isFormData(i)) {
      if (W.hasStandardBrowserEnv || W.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((l = s.getContentType()) !== !1) {
        const [_, ...O] = l ? l.split(";").map((w) => w.trim()).filter(Boolean) : [];
        s.setContentType([_ || "multipart/form-data", ...O].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(_ + ":" + O));
    }
    const b = li(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), si(b, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function E() {
      if (!f)
        return;
      const _ = ne.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), w = {
        data: !o || o === "text" || o === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: _,
        config: e,
        request: f
      };
      ha(function(x) {
        r(x), c();
      }, function(x) {
        n(x), c();
      }, w), f = null;
    }
    if ("onloadend" in f ? f.onloadend = E : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, f.onabort = function() {
      f && (n(new g("Request aborted", g.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || oi;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), n(new g(
        O,
        w.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        f
      )), f = null;
    }, W.hasStandardBrowserEnv && (a && d.isFunction(a) && (a = a(e)), a || a !== !1 && ba(b))) {
      const _ = e.xsrfHeaderName && e.xsrfCookieName && pa.read(e.xsrfCookieName);
      _ && s.set(e.xsrfHeaderName, _);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in f && d.forEach(s.toJSON(), function(O, w) {
      f.setRequestHeader(w, O);
    }), d.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), o && o !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", zn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", zn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (_) => {
      f && (n(!_ || _.type ? new Ye(null, e, f) : _), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const v = ma(b);
    if (v && W.protocols.indexOf(v) === -1) {
      n(new g("Unsupported protocol " + v + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, Qt = {
  http: Ho,
  xhr: Oa
};
d.forEach(Qt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hn = (e) => `- ${e}`, Ea = (e) => d.isFunction(e) || e === null || e === !1, fi = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let o;
      if (n = r, !Ea(r) && (n = Qt[(o = String(r)).toLowerCase()], n === void 0))
        throw new g(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(i).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(Hn).join(`
`) : " " + Hn(s[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Qt
};
function kt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ye(null, e);
}
function Gn(e) {
  return kt(e), e.headers = ne.from(e.headers), e.data = Mt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), fi.getAdapter(e.adapter || gn.adapter)(e).then(function(n) {
    return kt(e), n.data = Mt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ne.from(n.headers), n;
  }, function(n) {
    return ci(n) || (kt(e), n && n.response && (n.response.data = Mt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ne.from(n.response.headers))), Promise.reject(n);
  });
}
const Jn = (e) => e instanceof ne ? { ...e } : e;
function Se(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, f) {
    return d.isPlainObject(c) && d.isPlainObject(l) ? d.merge.call({ caseless: f }, c, l) : d.isPlainObject(l) ? d.merge({}, l) : d.isArray(l) ? l.slice() : l;
  }
  function i(c, l, f) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function s(c, l) {
    if (!d.isUndefined(l))
      return n(void 0, l);
  }
  function o(c, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
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
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, l) => i(Jn(c), Jn(l), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = u[l] || i, b = f(e[l], t[l], l);
    d.isUndefined(b) && f !== a || (r[l] = b);
  }), r;
}
const di = "1.6.8", yn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wn = {};
yn.transitional = function(t, r, n) {
  function i(s, o) {
    return "[Axios v" + di + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "");
  }
  return (s, o, a) => {
    if (t === !1)
      throw new g(
        i(o, " has been removed" + (r ? " in " + r : "")),
        g.ERR_DEPRECATED
      );
    return r && !Wn[o] && (Wn[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, o, a) : !0;
  };
};
function Aa(e, t, r) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const s = n[i], o = t[s];
    if (o) {
      const a = e[s], u = a === void 0 || o(a, s, e);
      if (u !== !0)
        throw new g("option " + s + " must be " + u, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new g("Unknown option " + s, g.ERR_BAD_OPTION);
  }
}
const en = {
  assertOptions: Aa,
  validators: yn
}, se = en.validators;
class bt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new qn(),
      response: new qn()
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
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Se(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: s } = r;
    n !== void 0 && en.assertOptions(n, {
      silentJSONParsing: se.transitional(se.boolean),
      forcedJSONParsing: se.transitional(se.boolean),
      clarifyTimeoutError: se.transitional(se.boolean)
    }, !1), i != null && (d.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : en.assertOptions(i, {
      encode: se.function,
      serialize: se.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = s && d.merge(
      s.common,
      s[r.method]
    );
    s && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete s[v];
      }
    ), r.headers = ne.concat(o, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(r) === !1 || (u = u && _.synchronous, a.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let l, f = 0, b;
    if (!u) {
      const v = [Gn.bind(this), void 0];
      for (v.unshift.apply(v, a), v.push.apply(v, c), b = v.length, l = Promise.resolve(r); f < b; )
        l = l.then(v[f++], v[f++]);
      return l;
    }
    b = a.length;
    let E = r;
    for (f = 0; f < b; ) {
      const v = a[f++], _ = a[f++];
      try {
        E = v(E);
      } catch (O) {
        _.call(this, O);
        break;
      }
    }
    try {
      l = Gn.call(this, E);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, b = c.length; f < b; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Se(this.defaults, t);
    const r = li(t.baseURL, t.url);
    return si(r, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  bt.prototype[t] = function(r, n) {
    return this.request(Se(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, o, a) {
      return this.request(Se(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  bt.prototype[t] = r(), bt.prototype[t + "Form"] = r(!0);
});
const ot = bt;
class On {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(s);
      }, o;
    }, t(function(s, o, a) {
      n.reason || (n.reason = new Ye(s, o, a), r(n.reason));
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
      token: new On(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Na = On;
function wa(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Sa(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const tn = {
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
Object.entries(tn).forEach(([e, t]) => {
  tn[t] = e;
});
const Da = tn;
function hi(e) {
  const t = new ot(e), r = Gr(ot.prototype.request, t);
  return d.extend(r, ot.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return hi(Se(e, i));
  }, r;
}
const A = hi(gn);
A.Axios = ot;
A.CanceledError = Ye;
A.CancelToken = Na;
A.isCancel = ci;
A.VERSION = di;
A.toFormData = Rt;
A.AxiosError = g;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = wa;
A.isAxiosError = Sa;
A.mergeConfig = Se;
A.AxiosHeaders = ne;
A.formToJSON = (e) => ui(d.isHTMLForm(e) ? new FormData(e) : e);
A.getAdapter = fi.getAdapter;
A.HttpStatusCode = Da;
A.default = A;
A.defaults.baseURL = "http://localhost:3000";
const Ne = (e) => e.data, tt = {
  get: (e) => A.get(e).then(Ne),
  post: (e, t) => A.post(e, t).then(Ne),
  put: (e, t) => A.put(e, t).then(Ne),
  del: (e) => A.delete(e).then(Ne)
}, Ta = {
  list: () => A.get("/tasks").then(Ne),
  listPaginated: (e, t) => A.get(`/tasks?_page=${e}&_per_page=${t}`).then(Ne),
  details: (e) => tt.get(`/tasks/${e}`),
  create: (e) => tt.post("/tasks", e),
  update: (e) => tt.put(`/tasks/${e.id}`, e),
  delete: (e) => tt.del(`/tasks/${e}`)
}, Ce = {
  Tasks: Ta
}, Xn = 10;
class Ra {
  constructor() {
    this.tasks = [], this.loadingInitial = !1, this.totalTasks = 0, this.loadTask = async (t) => {
      let r = this.getTask(t);
      if (r)
        return r;
      try {
        return r = await Ce.Tasks.details(t), this.setTask(r), r;
      } catch (n) {
        console.log(n);
      }
    }, this.setTask = (t) => {
      this.tasks.push(t);
    }, this.getTask = (t) => this.tasks.find((r) => r.id === t), this.setTasks = (t) => {
      this.tasks = t;
    }, this.createTask = async (t) => {
      try {
        await Ce.Tasks.create(t), this.setTask(t);
      } catch (r) {
        console.log(r);
      }
    }, this.updateTask = async (t) => {
      try {
        await Ce.Tasks.update(t), et(() => {
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
        await Ce.Tasks.delete(t), et(() => {
          if (this.tasks = this.tasks.filter((r) => r.id !== t), this.tasks.length === 0 && this.totalTasks > 0) {
            const r = Math.ceil(this.totalTasks / Xn), n = Math.max(1, r - 1);
            this.loadPaginatedTasks(n);
          }
        });
      } catch (r) {
        console.log(r);
      }
    }, this.loadPaginatedTasks = async (t) => {
      this.loadingInitial = !0;
      try {
        const r = await Ce.Tasks.listPaginated(t, Xn);
        et(() => {
          this.setTasks(r.data), this.setTotalTasks(Number(r.items)), this.setLoadingInitial(!1);
        });
      } catch (r) {
        console.log(r), this.setLoadingInitial(!1);
      }
    }, fn(this), this.loadPaginatedTasks(1);
  }
  setLoadingInitial(t) {
    this.loadingInitial = t;
  }
  setTotalTasks(t) {
    et(() => {
      this.totalTasks = t;
    });
  }
}
const xa = {
  taskStore: new Ra(),
  dialogStore: new uo(),
  paginationStore: new lo()
}, Pa = pi(xa);
function La() {
  return _i(Pa);
}
export {
  Pa as StoreContext,
  Ca as TaskManagerCore,
  xa as store,
  La as useStore
};
