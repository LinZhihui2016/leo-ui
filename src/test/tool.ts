import Vue from "vue";

export const CreateTestWithTemplate = (template?: string) => {
  let div = document.createElement("div");
  document.body.appendChild(div);
  template && (div.innerHTML = template);
  const _vm = new Vue({ el: div });
  return _vm;
};

export const CreateTest = (
  prop: Object,
  Component: Vue.VueConstructor
): Vue => {
  let div = document.querySelector("#test");
  if (!div) {
    div = document.createElement("div");
    div.id = "test";
    document.body.appendChild(div);
  }
  const Constuctor = Vue.extend(Component);
  const _vm = new Constuctor({
    ...prop
  }).$mount(div);
  return _vm;
};

export const RemoveTest = (_vm: Vue) => {
  _vm.$el.remove();
  _vm.$destroy();
};
