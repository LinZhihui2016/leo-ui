import chai, { expect } from "chai";
import { describe, it } from "mocha";
import spies from "chai-spies";
import Vue from "vue";
import LeoButton from "components/LeoButton.vue";
chai.use(spies);

Vue.config.productionTip = false;
Vue.config.devtools = false;

type LoadingText = "测试" | "加载中" | "我要测试";
type Type =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";
type Size = "small" | "medium" | "large" | "giant";
enum Color {
  "primary" = "rgb(41, 121, 255)",
  "primary_30" = "rgba(41, 121, 255, 0.19)",
  "secondary" = "rgb(130, 119, 23)",
  "secondary_30" = "rgba(130, 119, 23, 0.19)",
  "success" = "rgb(67, 160, 71)",
  "success_30" = "rgba(67, 160, 71, 0.19)",
  "warning" = "rgb(230, 81, 0)",
  "warning_30" = "rgba(230, 81, 0, 0.19)",
  "danger" = "rgb(221, 44, 0)",
  "danger_30" = "rgba(221, 44, 0, 0.19)",
  "info" = "rgb(117, 117, 117)",
  "info_30" = "rgba(117, 117, 117, 0.19)",
  "default" = "rgb(189, 189, 189)",
  "text" = "rgb(51, 51, 51)",
  "white" = "rgb(255, 255, 255)"
}
enum Height {
  "small" = "28px",
  "medium" = "32px",
  "large" = "36px",
  "giant" = "40px"
}

interface StyleColors {
  color: Color;
  backgroundColor: Color;
  borderColor: Color;
}
interface ButtonColorType {
  origin: StyleColors;
  plain: StyleColors;
}
class SizeHash {
  small = Height.small;
  medium = Height.medium;
  large = Height.large;
  giant = Height.giant;
}
class TypeHash {
  default: ButtonColorType;
  primary: ButtonColorType;
  secondary: ButtonColorType;
  success: ButtonColorType;
  warning: ButtonColorType;
  danger: ButtonColorType;
  info: ButtonColorType;
  constructor() {
    this.default = {
      origin: {
        color: Color.text,
        backgroundColor: Color.white,
        borderColor: Color.default
      },
      plain: {
        color: Color.text,
        backgroundColor: Color.white,
        borderColor: Color.default
      }
    };
    this.primary = {
      origin: {
        color: Color.white,
        backgroundColor: Color.primary,
        borderColor: Color.primary
      },
      plain: {
        color: Color.primary,
        backgroundColor: Color.primary_30,
        borderColor: Color.primary_30
      }
    };
    this.secondary = {
      origin: {
        color: Color.white,
        backgroundColor: Color.secondary,
        borderColor: Color.secondary
      },
      plain: {
        color: Color.secondary,
        backgroundColor: Color.secondary_30,
        borderColor: Color.secondary_30
      }
    };
    this.success = {
      origin: {
        color: Color.white,
        backgroundColor: Color.success,
        borderColor: Color.success
      },
      plain: {
        color: Color.success,
        backgroundColor: Color.success_30,
        borderColor: Color.success_30
      }
    };
    this.warning = {
      origin: {
        color: Color.white,
        backgroundColor: Color.warning,
        borderColor: Color.warning
      },
      plain: {
        color: Color.warning,
        backgroundColor: Color.warning_30,
        borderColor: Color.warning_30
      }
    };
    this.danger = {
      origin: {
        color: Color.white,
        backgroundColor: Color.danger,
        borderColor: Color.danger
      },
      plain: {
        color: Color.danger,
        backgroundColor: Color.danger_30,
        borderColor: Color.danger_30
      }
    };
    this.info = {
      origin: {
        color: Color.white,
        backgroundColor: Color.info,
        borderColor: Color.info
      },
      plain: {
        color: Color.info,
        backgroundColor: Color.info_30,
        borderColor: Color.info_30
      }
    };
  }
}

const TYPE: Array<Type> = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info"
];
const SIZE: Array<Size> = ["small", "medium", "large", "giant"];
const CreateTest = (prop: Object): Vue => {
  let div: HTMLElement = document.createElement("div");
  div.id = "test";
  document.body.appendChild(div);
  const Constuctor = Vue.extend(LeoButton);
  const _vm = new Constuctor({
    ...prop,
    template: "测试"
  });
  _vm.$mount("#test");
  return _vm;
};
const RemoveTest = (_vm: Vue) => {
  _vm.$el.remove();
  _vm.$destroy();
};
const IconTest = (icon: Icon, _vm: Vue): string[] | null => {
  let iconElement = _vm.$el.querySelector(".iconfont");
  let classList = iconElement && iconElement.className.split(" ");
  expect(classList).to.include(icon);
  return classList;
};
const IconPositionTest = (position: "left" | "right", _vm: Vue) => {
  let { flexDirection } = window.getComputedStyle(_vm.$el);
  let flexDirection_hash = {
    left: "row",
    right: "row-reverse"
  };
  expect(flexDirection).to.eq(flexDirection_hash[position]);
};
const LoadingTextTest = (loadingText: LoadingText, _vm: Vue) => {
  let span = _vm.$el.querySelector("span");
  expect(span && span.innerHTML).to.eq(loadingText);
};
const TypeTest = (type: Type, plain: Boolean, _vm: Vue) => {
  const { color, backgroundColor, borderColor } = window.getComputedStyle(
    _vm.$el
  );
  let _t: "plain" | "origin" = plain ? "plain" : "origin";
  let colors = new TypeHash();

  expect(color).to.eq(colors[type][_t].color);
  expect(backgroundColor).to.eq(colors[type][_t].backgroundColor);
  expect(borderColor).to.eq(colors[type][_t].borderColor);
};

const onClickTest = (_vm: Vue, shouldBeCalled: boolean) => {
  const spy = chai.spy(() => {});
  _vm.$on("click", spy);
  let el = _vm.$el as HTMLElement;
  el.click();
  if (shouldBeCalled) {
    expect(spy).to.have.been.called();
  } else {
    expect(spy).to.not.have.been.called();
  }
};
const FullWidthTest = (_vm: Vue) => {
  let _vm_width = window.getComputedStyle(_vm.$el).width;
  let parent = _vm.$el.parentElement;
  let parent_width = parent && window.getComputedStyle(parent).width;
  expect(_vm_width).to.eq(parent_width);
};

const HeightTest = (_vm: Vue, size: Size) => {
  let { height } = window.getComputedStyle(_vm.$el);
  let heights = new SizeHash();
  expect(height).to.eq(heights[size]);
};

const ButtonIconTest = ({ icon }: { icon: Icon }): void => {
  const _vm = CreateTest({ propsData: { icon } });
  IconTest(icon, _vm);
  HeightTest(_vm, "large");
  IconPositionTest("left", _vm);
  RemoveTest(_vm);
};
const ButtonLoadingTest = ({ icon }: { icon: Icon }): void => {
  const _vm = CreateTest({ propsData: { icon, loading: true } });
  if (icon !== "lzh-loading") {
    const classList = IconTest("lzh-loading", _vm);
    expect(classList).to.not.include(icon);
  }
  HeightTest(_vm, "large");
  onClickTest(_vm, false);
  IconPositionTest("left", _vm);
  RemoveTest(_vm);
};
const ButtonIconRightTest = ({ icon }: { icon: Icon }): void => {
  const _vm = CreateTest({ propsData: { icon, iconPosition: "right" } });
  IconPositionTest("right", _vm);
  HeightTest(_vm, "large");
  RemoveTest(_vm);
};
const ButtonLoadingTextTest = ({
  loadingText
}: {
  loadingText: LoadingText;
}): void => {
  const _vm = CreateTest({
    propsData: { loading: true, loadingText }
  });
  LoadingTextTest(loadingText, _vm);
  IconPositionTest("left", _vm);
  HeightTest(_vm, "large");
  IconTest("lzh-loading", _vm);
  onClickTest(_vm, false);
  RemoveTest(_vm);
};
const ButtonTypeTest = ({
  type,
  plain
}: {
  type: Type;
  plain: Boolean;
}): void => {
  const _vm = CreateTest({
    propsData: { type, plain, icon: "lzh-up-arrow" }
  });
  TypeTest(type, plain, _vm);
  HeightTest(_vm, "large");
  onClickTest(_vm, true);
  RemoveTest(_vm);
};

const ButtonDisabledTest = (): void => {
  const _vm = CreateTest({
    propsData: { disabled: true }
  });
  HeightTest(_vm, "large");
  onClickTest(_vm, false);
  RemoveTest(_vm);
};

const ButtonFullWidthTest = (): void => {
  const _vm = CreateTest({
    propsData: { full: true }
  });
  onClickTest(_vm, true);
  FullWidthTest(_vm);
  HeightTest(_vm, "large");
  RemoveTest(_vm);
};

const ButtonSizeTest = ({ size }: { size: Size }): void => {
  const _vm = CreateTest({
    propsData: { size }
  });
  HeightTest(_vm, size);
  RemoveTest(_vm);
};
type Icon =
  | "lzh-up-arrow"
  | "lzh-left-arrow"
  | "lzh-right-arrow"
  | "lzh-down-arrow"
  | "lzh-loading";
const ICON: Array<Icon> = [
  "lzh-up-arrow",
  "lzh-left-arrow",
  "lzh-right-arrow",
  "lzh-down-arrow"
];
describe("Button", () => {
  it("存在。", () => {
    expect(LeoButton).to.be.ok;
  });

  it("可以设置Icon", () => {
    ICON.forEach(key => {
      ButtonIconTest({ icon: key });
    });
  });

  it("可以设置icon的位置", () => {
    ICON.forEach(key => {
      ButtonIconRightTest({ icon: key });
    });
  });
  it("可以设置loading状态", () => {
    ICON.forEach(key => {
      ButtonLoadingTest({ icon: key });
    });
  });

  const LOADING_TEXT: Array<LoadingText> = ["测试", "加载中", "我要测试"];
  it("可以设置loading的文字", () => {
    LOADING_TEXT.forEach(key => ButtonLoadingTextTest({ loadingText: key }));
  });
  it("可以设置朴素按钮的样式", () => {
    TYPE.forEach(key => {
      ButtonTypeTest({ type: key, plain: true });
    });
  });
  it("可以设置非朴素按钮的样式", () => {
    TYPE.forEach(key => {
      ButtonTypeTest({ type: key, plain: false });
    });
  });
  it("可以设置禁用状态", () => {
    ButtonDisabledTest();
  });
  it("可以设置满宽度", () => {
    ButtonFullWidthTest();
  });
  it("可以设置四种大小", () => {
    SIZE.forEach(key => {
      ButtonSizeTest({ size: key });
    });
  });
});
