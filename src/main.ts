import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import LeoButton from "@/components/LeoButton.vue";
Vue.component("leo-button", LeoButton);

Vue.config.productionTip = false;
Vue.prototype.xxx = (v: any) => console.log(v);

import { expect } from "chai";
type Icon =
  | "lzh-up-arrow"
  | "lzh-left-arrow"
  | "lzh-right-arrow"
  | "lzh-down-arrow"
  | "lzh-loading";

type LoadingText = "测试" | "加载中" | "我要测试";
type Type =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

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
interface StyleColors {
  color: Color;
  backgroundColor: Color;
  borderColor: Color;
}
interface ButtonColorType {
  origin: StyleColors;
  plain: StyleColors;
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
const ICON: Array<Icon> = [
  "lzh-up-arrow",
  "lzh-left-arrow",
  "lzh-right-arrow",
  "lzh-down-arrow"
];
const LOADING_TEXT: Array<LoadingText> = ["测试", "加载中", "我要测试"];
const TYPE: Array<Type> = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info"
];
const CreateTest = (prop: Object): Vue => {
  let div: HTMLElement = document.createElement("div");
  div.id = "test";
  document.body.appendChild(div);
  const Constuctor = Vue.extend(LeoButton);
  const _vm = new Constuctor(prop);
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
const ButtonIconTest = (icon: Icon): void => {
  const _vm = CreateTest({ propsData: { icon } });
  IconTest(icon, _vm);
  IconPositionTest("left", _vm);
  RemoveTest(_vm);
};
const ButtonLoadingTest = (icon: Icon): void => {
  const _vm = CreateTest({ propsData: { icon, loading: true } });
  if (icon !== "lzh-loading") {
    const classList = IconTest("lzh-loading", _vm);
    expect(classList).to.not.include(icon);
  }
  IconPositionTest("left", _vm);
  RemoveTest(_vm);
};
const ButtonIconRightTest = (icon: Icon): void => {
  const _vm = CreateTest({ propsData: { icon, iconPosition: "right" } });
  IconPositionTest("right", _vm);
  RemoveTest(_vm);
};
const ButtonLoadingTextTest = (loadingText: LoadingText): void => {
  const _vm = CreateTest({
    propsData: { loading: true, loadingText }
  });
  LoadingTextTest(loadingText, _vm);
  IconPositionTest("left", _vm);
  IconTest("lzh-loading", _vm);
  RemoveTest(_vm);
};
const ButtonTypeTest = (type: Type, plain: Boolean): void => {
  const _vm = CreateTest({
    propsData: { type, plain }
  });
  _vm.$el.innerHTML = "测试";
  TypeTest(type, plain, _vm);
  RemoveTest(_vm);
};

ICON.forEach(key => ButtonIconTest(key));
ICON.forEach(key => ButtonLoadingTest(key));
ICON.forEach(key => ButtonIconRightTest(key));
LOADING_TEXT.forEach(key => ButtonLoadingTextTest(key));
TYPE.forEach(key => ButtonTypeTest(key, true));
TYPE.forEach(key => ButtonTypeTest(key, false));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
