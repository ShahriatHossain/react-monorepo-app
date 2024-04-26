import { jsx as i } from "react/jsx-runtime";
class c {
  constructor(t) {
    this.id = "", this.title = "", this.description = "", this.completed = !1, t && (this.id = t.id, this.title = t.title, this.description = t.description, this.completed = t.completed);
  }
}
class l {
  constructor(t) {
    this.id = "", this.title = "", this.description = "", this.completed = !1, t && (this.id = t.id, this.title = t.title, this.description = t.description, this.completed = t.completed);
  }
}
const s = {};
function d(e) {
  return /* @__PURE__ */ i("div", { className: s.container, children: /* @__PURE__ */ i("h1", { children: "Welcome to TaskManagerModels!" }) });
}
export {
  c as Task,
  l as TaskFormValues,
  d as TaskManagerModels
};
