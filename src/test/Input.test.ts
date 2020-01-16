const expect = chai.expect;
import { describe, it } from "mocha";
import sinonChai from "sinon-chai";
import sinon from "sinon";
import Vue from "vue";
import LeoInput from "components/LeoInput.vue";
import { CreateTest, RemoveTest } from "./tool";
chai.use(sinonChai);
Vue.config.productionTip = false;
Vue.config.devtools = false;
const _CreateTest = (prop: Object): Vue => CreateTest(prop, LeoInput);
const EventTest = (_vm: Vue, eventType: string) => {
  const callback = sinon.fake();
  _vm.$on(eventType, callback);
  let inputElement = _vm.$el.querySelector("input");
  let event = new Event(eventType);
  const random = Math.random().toString();
  Object.defineProperty(event, "target", {
    value: { value: random },
    enumerable: true
  });
  inputElement && inputElement.dispatchEvent(event);
  expect(callback).to.have.been.calledWith(random);
};

describe("Input", () => {
  it("存在", () => {
    expect(LeoInput).to.be.ok;
  });
  describe("props", () => {
    it("可以接受value，并且可以修改", () => {
      const List = [123, "123", null, undefined];
      List.forEach(value => {
        const _vm = _CreateTest({ propsData: { type: "text", value } });
        const inputElement = _vm.$el.querySelector("input");
        let input_value = inputElement && inputElement.value;
        expect(input_value).to.equal(value ? value.toString() : "");
        input_value = "123";
        expect(input_value).to.equal("123");
        RemoveTest(_vm);
      });
    });
    it("可以传入disabled禁止输入", () => {
      [true, false].forEach(disabled => {
        const _vm = _CreateTest({
          propsData: { type: "text", value: 123, disabled }
        });
        const inputElement = _vm.$el.querySelector("input");
        let attr_disabled =
          inputElement && inputElement.getAttribute("disabled");
        expect(attr_disabled).to.eq(disabled ? "disabled" : null);
      });
    });
    it("可以传入readonly只读属性", () => {
      [true, false].forEach(readonly => {
        const _vm = _CreateTest({
          propsData: { value: 123, readonly }
        });
        const inputElement = _vm.$el.querySelector("input");
        let attr_readOnly =
          inputElement && inputElement.getAttribute("readOnly");
        expect(attr_readOnly).to.eq(readonly ? "readonly" : null);
      });
    });
  });
  describe("event", () => {
    let _vm: Vue;
    beforeEach(() => {
      _vm = _CreateTest({
        propsData: { value: 222 }
      });
    });
    afterEach(() => {
      RemoveTest(_vm);
    });
    ["change", "input", "focus", "blur"].forEach(eventType => {
      it(`${eventType}事件`, () => {
        EventTest(_vm, eventType);
      });
    });
  });
});
