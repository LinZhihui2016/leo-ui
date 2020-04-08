import { expect } from "chai";
import { describe, it } from "mocha";
import spies from "chai-spies";
import sinonChai from "sinon-chai";
import Vue from "vue";
import LeoRow from "components/LeoRow.vue";
import LeoCol from "components/LeoCol.vue";
import { CreateTest, RemoveTest, CreateTestWithTemplate } from "./tool";
chai.use(spies);
chai.use(sinonChai);
Vue.config.productionTip = false;
Vue.config.devtools = false;
const _CreateTest = (prop = {}): Vue => CreateTest(prop, LeoRow);
Vue.component("leo-row", LeoRow);
Vue.component("leo-col", LeoCol);
const _CreateTestWithTemplate = (props: any): Vue => {
  let gutter = props.propsData.gutter;
  return CreateTestWithTemplate(
    `<leo-row :gutter='${gutter}'>
      <leo-col :span='4' ></leo-col>
      <leo-col :span='6' ></leo-col>
    </leo-row>`
  );
};

const GutterTest = (gutter: number | string, _vm: Vue, tag: "row" | "col") => {
  switch (tag) {
    case "row":
      let { marginLeft, marginRight } = window.getComputedStyle(_vm.$el);
      expect(marginLeft).to.eq(-gutter / 2 + "px");
      expect(marginRight).to.eq(-gutter / 2 + "px");
      break;
    case "col":
      let { paddingLeft, paddingRight } = window.getComputedStyle(_vm.$el);
      expect(paddingLeft).to.eq(+gutter / 2 + "px");
      expect(paddingRight).to.eq(+gutter / 2 + "px");
      break;
  }
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
    it("可以设置gutter", done => {
      [10, 100, 200].forEach(gutter => {
        const _vm = _CreateTestWithTemplate({ propsData: { gutter } });
        setTimeout(() => {
          const row = _vm.$children[0];
          const cols = row.$children;
          GutterTest(gutter, _vm.$children[0], "row");
          cols.forEach(col => {
            GutterTest(gutter, col, "col");
          });
          RemoveTest(_vm);
          done();
        }, 1000);
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
