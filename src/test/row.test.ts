import { expect } from "chai";
import { describe, it } from "mocha";
import spies from "chai-spies";
import sinonChai from "sinon-chai";
import Vue from "vue";
import LeoRow from "components/LeoRow.vue";
import LeoCol from "components/LeoCol.vue";
import { CreateTest, RemoveTest } from "./tool";
chai.use(spies);
chai.use(sinonChai);
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("leo-col", LeoCol);
const _CreateTest = (prop?: Object): Vue => {
  return CreateTest(prop || {}, LeoRow);
};
const GutterTest = (gutter: number | string, _vm: Vue) => {
  let { marginLeft, marginRight } = window.getComputedStyle(_vm.$el);
  expect(marginLeft).to.eq(-gutter / 2 + "px");
  expect(marginRight).to.eq(-gutter / 2 + "px");
};
const JustifyTest = (justify: string, _vm: Vue) => {
  let { justifyContent } = window.getComputedStyle(_vm.$el);
  expect(justifyContent).to.eq(justify);
};
const AlignTest = (align: string, _vm: Vue) => {
  let { alignItems } = window.getComputedStyle(_vm.$el);
  expect(alignItems).to.eq(align);
};

const Justify = [
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-between"
];

const Align = ["flex-start", "flex-end", "center"];
describe("Row", () => {
  it("存在。", () => {
    expect(LeoRow).to.be.ok;
  });
  describe("props", () => {
    it("可以设置gutter", () => {
      [1, 10, 100, 200].forEach(gutter => {
        const _vm = _CreateTest({ propsData: { gutter } });
        GutterTest(gutter, _vm);
        RemoveTest(_vm);
      });
    });
    it("可以设置justifyContent", () => {
      Justify.forEach(justify => {
        const _vm = _CreateTest({ propsData: { justify } });
        JustifyTest(justify, _vm);
        RemoveTest(_vm);
      });
    });
    it("可以设置align", () => {
      Align.forEach(align => {
        const _vm = _CreateTest({ propsData: { align } });
        AlignTest(align, _vm);
        RemoveTest(_vm);
      });
    });
  });
});
