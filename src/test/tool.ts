import Vue from "vue";

export const CreateTest = (
  prop: Object,
  Component: Vue.VueConstructor | Vue.VueConstructor[],
  template?: string
): Vue => {
  let div = document.querySelector("#test");
  if (!div) {
    div = document.createElement("div");
    div.id = "test";
    document.body.appendChild(div);
  }

  const Constuctor = Vue.extend(Component);
  const _vm = new Constuctor({
    ...prop,
    template
  }).$mount(div);
  return _vm;
};

export const RemoveTest = (_vm: Vue) => {
  _vm.$el.remove();
  _vm.$destroy();
};
