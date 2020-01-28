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
type Size = "small" | "medium" | "large" | "giant";
enum Height {
  "small" = "28px",
  "medium" = "32px",
  "large" = "36px",
  "giant" = "40px"
}
const SIZE: Array<Size> = ["small", "medium", "large", "giant"];
const _CreateTest = (prop: Object): Vue => CreateTest(prop, LeoInput);
const EventTest = (_vm: Vue, eventType: string) => {
  const callback = sinon.fake();
  _vm.$on(eventType, callback);
  let inputElement = _vm.$el.querySelector("input");
  let event = new Event(eventType);
  Object.defineProperty(event, "target", {
    value: { value: 1 },
    enumerable: true
  });
  inputElement && inputElement.dispatchEvent(event);
  expect(callback).to.have.been.called;
};

const HeightTest = (_vm: Vue, size: Size) => {
  let { height } = window.getComputedStyle(_vm.$el);
  expect(height).to.eq(Height[size]);
};
const PasswordTypeTest = (_vm: Vue) => {
  const inputElement = _vm.$el.querySelector("input");
  expect(inputElement && inputElement.type).to.eq("password");
};
const IconClickTest = (_vm: Vue, value: any, icon: string) => {
  if (value) {
    const iconFont = _vm.$el.querySelector(`.${icon}`);
    const iconSpan = iconFont && iconFont.parentElement;
    const callback = sinon.fake();
    expect(iconSpan).to.be.ok;
    (iconSpan as HTMLElement).addEventListener("click", callback);
    (iconSpan as HTMLElement).click();
    expect(callback).to.have.been.called;
  } else {
    const iconFonts = _vm.$el.querySelectorAll(".iconfont");
    iconFonts.forEach(iconNode => {
      const classList = iconNode.className.split(" ");
      expect(classList).to.not.include(icon);
    });
  }
};

const IconTest = (_vm: Vue, icon: string, position: "left" | "right") => {
  const iconContainer = _vm.$el.querySelector(`.leo-input--inner-${position}`);
  const iconFont = iconContainer && iconContainer.querySelector(".iconfont");
  const classList = iconFont && iconFont.className.split(" ");
  expect(iconFont).to.be.ok;
  expect(iconContainer).to.be.ok;
  expect(classList).to.include(icon);
};

const IconPositionTest = (
  _vm: Vue,
  iconLenght: number,
  position: "left" | "right"
) => {
  if (iconLenght === 0) {
    return;
  }
  const inputElement = _vm.$el.querySelector("input");
  const iconContainer = _vm.$el.querySelector(`.leo-input--inner-${position}`);
  const inputStyle = window.getComputedStyle(<HTMLElement>inputElement);
  const iconContainerStyle = window.getComputedStyle(
    <HTMLElement>iconContainer
  );
  expect(iconContainer).to.be.ok;
  switch (position) {
    case "left":
      expect(inputStyle.paddingLeft).to.eq(`${20 * iconLenght + 10}px`);
      expect(iconContainerStyle.paddingLeft).to.eq("10px");
      break;
    case "right":
      expect(inputStyle.paddingRight).to.eq(`${20 * iconLenght + 10}px`);
      expect(iconContainerStyle.paddingRight).to.eq("10px");
      break;
  }
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
        EventTest(_vm, "input");
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
    it("可以传入type来控制大小", () => {
      SIZE.forEach(key => {
        const _vm = _CreateTest({
          propsData: {
            value: 123,
            size: key
          }
        });
        HeightTest(_vm, key);
        RemoveTest(_vm);
      });
    });
    it("可以传入password来开启密码模式", () => {
      [null, 123, "123", undefined].forEach(key => {
        const _vm = _CreateTest({
          propsData: {
            value: key,
            password: true
          }
        });
        const inputElement = _vm.$el.querySelector("input");
        expect(inputElement && inputElement.type).to.eq("password");
        IconClickTest(_vm, key, key ? "lzh-eye-hidden" : "");
        RemoveTest(_vm);
      });
    });
    it("可以传入iconLeft来添加左icon", () => {
      const _vm = _CreateTest({
        propsData: {
          value: 123,
          iconLeft: "lzh-left-arrow"
        }
      });
      IconTest(_vm, "lzh-left-arrow", "left");
      IconPositionTest(_vm, 1, "left");
      RemoveTest(_vm);
    });
    it("可以传入iconRight来添加右icon", () => {
      const _vm = _CreateTest({
        propsData: {
          value: 123,
          iconRight: "lzh-right-arrow"
        }
      });
      IconTest(_vm, "lzh-right-arrow", "right");
      IconPositionTest(_vm, 1, "right");
      RemoveTest(_vm);
    });
    it("可以同时传入iconLeft和iconRight", () => {
      const _vm = _CreateTest({
        propsData: {
          value: 123,
          iconRight: "lzh-right-arrow",
          iconLeft: "lzh-left-arrow"
        }
      });
      IconTest(_vm, "lzh-left-arrow", "left");
      IconTest(_vm, "lzh-right-arrow", "right");
      IconPositionTest(_vm, 1, "right");
      IconPositionTest(_vm, 1, "left");
      RemoveTest(_vm);
    });
    describe("传入clear开启清除按钮,并可以同时传入其他icon", () => {
      let _vm: Vue;
      const iconLeft = "lzh-left-arrow";
      const iconRight = "lzh-right-arrow";
      afterEach(() => {
        RemoveTest(_vm);
      });
      [null, undefined, 123, "123"].forEach(key => {
        const propsData = { value: key, clear: true };
        it("clear", () => {
          _vm = _CreateTest({
            propsData
          });
          key && IconPositionTest(_vm, 1, "right");
          IconClickTest(_vm, key, "lzh-close-circle");
        });
        it("clear && iconLeft", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconLeft }
          });
          IconTest(_vm, "lzh-left-arrow", "left");
          IconPositionTest(_vm, 1, "left");
          key && IconPositionTest(_vm, 1, "right");
          IconClickTest(_vm, key, "lzh-close-circle");
        });
        it("clear && iconRight", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconRight }
          });
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 2, "right");
          IconClickTest(_vm, key, "lzh-close-circle");
        });
        it("clear && iconRight && iconLeft", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconRight, iconLeft }
          });
          IconTest(_vm, "lzh-left-arrow", "left");
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 2, "right");
          IconPositionTest(_vm, 1, "left");
          IconClickTest(_vm, key, "lzh-close-circle");
        });
      });
    });
    describe("传入password开启密码模式,并可以同时传入其他icon", () => {
      let _vm: Vue;
      const iconLeft = "lzh-left-arrow";
      const iconRight = "lzh-right-arrow";

      [null, undefined, 123, "123"].forEach(key => {
        const propsData = { value: key, password: true };
        it("password", () => {
          _vm = _CreateTest({ propsData });
          IconClickTest(_vm, key, "lzh-eye-hidden");
          key && IconPositionTest(_vm, 1, "right");
          PasswordTypeTest(_vm);
        });
        it("password && iconLeft", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconLeft }
          });
          IconTest(_vm, "lzh-left-arrow", "left");
          IconPositionTest(_vm, 1, "left");
          key && IconPositionTest(_vm, 1, "right");
          IconClickTest(_vm, key, "lzh-eye-hidden");
          PasswordTypeTest(_vm);
        });
        it("password && iconRight", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconRight }
          });
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 2, "right");
          IconClickTest(_vm, key, "lzh-eye-hidden");
          PasswordTypeTest(_vm);
        });
        it("password && iconRight && iconLeft", () => {
          _vm = _CreateTest({
            propsData: { ...propsData, iconRight, iconLeft }
          });
          IconTest(_vm, "lzh-left-arrow", "left");
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 2, "right");
          IconPositionTest(_vm, 1, "left");
          IconClickTest(_vm, key, "lzh-eye-hidden");
          PasswordTypeTest(_vm);
        });
      });
      afterEach(() => {
        RemoveTest(_vm);
      });
    });
    describe("clear && password", () => {
      let _vm: Vue;
      const iconLeft = "lzh-left-arrow";
      const iconRight = "lzh-right-arrow";
      [null, undefined, 123, "123"].forEach(key => {
        const propsData = { value: key, password: true, clear: true };
        it("没有icon", () => {
          _vm = _CreateTest({
            propsData
          });
          IconClickTest(_vm, key, "lzh-eye-hidden");
          IconClickTest(_vm, key, "lzh-close-circle");
          key && IconPositionTest(_vm, 2, "right");
          PasswordTypeTest(_vm);
        });
        it("iconLeft", () => {
          _vm = _CreateTest({
            propsData: {
              ...propsData,
              iconLeft
            }
          });
          IconClickTest(_vm, key, "lzh-eye-hidden");
          IconClickTest(_vm, key, "lzh-close-circle");
          key && IconPositionTest(_vm, 2, "right");
          IconTest(_vm, "lzh-left-arrow", "left");
          IconPositionTest(_vm, 1, "left");
          PasswordTypeTest(_vm);
        });
        it("iconRight", () => {
          _vm = _CreateTest({
            propsData: {
              ...propsData,
              iconRight
            }
          });
          IconClickTest(_vm, key, "lzh-eye-hidden");
          IconClickTest(_vm, key, "lzh-close-circle");
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 3, "right");
          PasswordTypeTest(_vm);
        });
        it("iconRight && iconLeft", () => {
          _vm = _CreateTest({
            propsData: {
              ...propsData,
              iconRight,
              iconLeft
            }
          });
          IconClickTest(_vm, key, "lzh-eye-hidden");
          IconClickTest(_vm, key, "lzh-close-circle");
          IconTest(_vm, "lzh-left-arrow", "left");
          IconTest(_vm, "lzh-right-arrow", "right");
          IconPositionTest(_vm, 3, "right");
          IconPositionTest(_vm, 1, "left");
          PasswordTypeTest(_vm);
        });
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
