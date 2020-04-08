import { expect } from "chai";
import { describe, it } from "mocha";
import spies from "chai-spies";
import sinonChai from "sinon-chai";
import Vue from "vue";
import LeoCol from "components/LeoCol.vue";
import { CreateTest, RemoveTest } from "./tool";
chai.use(spies);
chai.use(sinonChai);
Vue.config.productionTip = false;
Vue.config.devtools = false;
type Media = "" | "mobile" | "pad" | "narrowPc";
const _CreateTest = (prop = {}): Vue => CreateTest(prop, LeoCol);
const classTest = (el: Element, className: string) => {
  let classList = el.className.split(" ");
  expect(classList).to.include(className);
};
const className = (key: string, number: number, media: Media) =>
  `leo-col--${key}-${number}${media ? `--${media}` : ""}`;

describe("Col", () => {
  it("存在", () => {
    expect(LeoCol).to.be.ok;
    expect(_CreateTest()).to.be.ok;
  });
  describe("props", () => {
    it("可以设置span", () => {
      [1, 2, 3, 4, 6, 8, 12, 24].forEach(span => {
        const _vm = _CreateTest({ propsData: { span } });
        classTest(_vm.$el, className("span", span, ""));
        RemoveTest(_vm);
      });
    });
    it("可以设置pre", () => {
      [1, 2, 3, 4, 6, 8, 12, 24].forEach(pre => {
        const _vm = _CreateTest({ propsData: { pre } });
        classTest(_vm.$el, className("pre", pre, ""));
        RemoveTest(_vm);
      });
    });
    it("可以设置forward", () => {
      [1, 2, 3, 4, 6, 8, 12, 24].forEach(forward => {
        const _vm = _CreateTest({ propsData: { forward } });
        classTest(_vm.$el, className("forward", forward, ""));
        RemoveTest(_vm);
      });
    });
    it("可以设置backward", () => {
      [1, 2, 3, 4, 6, 8, 12, 24].forEach(backward => {
        const _vm = _CreateTest({ propsData: { backward } });
        classTest(_vm.$el, className("backward", backward, ""));
        RemoveTest(_vm);
      });
    });
    describe("响应式", () => {
      const span = 4;
      const pre = 3;
      const forward = 2;
      const backward = 1;
      describe("mobile接收数字或者对象", () => {
        it("接收数字", () => {
          let mobileSpan = 5;
          const _vm = _CreateTest({
            propsData: { span, mobile: mobileSpan }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("span", mobileSpan, "mobile"));
          RemoveTest(_vm);
        });
        it("接收对象", () => {
          let mobileObj = {
            span: 1,
            pre: 2,
            forward: 3,
            backward: 4
          };
          const _vm = _CreateTest({
            propsData: { span, pre, forward, backward, mobile: mobileObj }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("pre", pre, ""));
          classTest(_vm.$el, className("forward", forward, ""));
          classTest(_vm.$el, className("backward", backward, ""));

          classTest(_vm.$el, className("span", mobileObj.span, "mobile"));
          classTest(_vm.$el, className("pre", mobileObj.pre, "mobile"));
          classTest(_vm.$el, className("forward", mobileObj.forward, "mobile"));
          classTest(
            _vm.$el,
            className("backward", mobileObj.backward, "mobile")
          );
          RemoveTest(_vm);
        });
      });
      describe("pad接收数字或者对象", () => {
        it("接收数字", () => {
          let padSpan = 5;
          const _vm = _CreateTest({
            propsData: { span, pad: padSpan }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("span", padSpan, "pad"));
          RemoveTest(_vm);
        });
        it("接收对象", () => {
          let padObj = {
            span: 1,
            pre: 2,
            forward: 3,
            backward: 4
          };
          const _vm = _CreateTest({
            propsData: { span, pre, forward, backward, pad: padObj }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("pre", pre, ""));
          classTest(_vm.$el, className("forward", forward, ""));
          classTest(_vm.$el, className("backward", backward, ""));

          classTest(_vm.$el, className("span", padObj.span, "pad"));
          classTest(_vm.$el, className("pre", padObj.pre, "pad"));
          classTest(_vm.$el, className("forward", padObj.forward, "pad"));
          classTest(_vm.$el, className("backward", padObj.backward, "pad"));
          RemoveTest(_vm);
        });
      });
      describe("narrowPc接收数字或者对象", () => {
        it("接收数字", () => {
          let narrowPcSpan = 5;
          const _vm = _CreateTest({
            propsData: { span, narrowPc: narrowPcSpan }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("span", narrowPcSpan, "narrowPc"));
          RemoveTest(_vm);
        });
        it("接收对象", () => {
          let narrowPcObj = {
            span: 1,
            pre: 2,
            forward: 3,
            backward: 4
          };
          const _vm = _CreateTest({
            propsData: { span, pre, forward, backward, narrowPc: narrowPcObj }
          });
          classTest(_vm.$el, className("span", span, ""));
          classTest(_vm.$el, className("pre", pre, ""));
          classTest(_vm.$el, className("forward", forward, ""));
          classTest(_vm.$el, className("backward", backward, ""));

          classTest(_vm.$el, className("span", narrowPcObj.span, "narrowPc"));
          classTest(_vm.$el, className("pre", narrowPcObj.pre, "narrowPc"));
          classTest(
            _vm.$el,
            className("forward", narrowPcObj.forward, "narrowPc")
          );
          classTest(
            _vm.$el,
            className("backward", narrowPcObj.backward, "narrowPc")
          );
          RemoveTest(_vm);
        });
      });
    });
  });
});
