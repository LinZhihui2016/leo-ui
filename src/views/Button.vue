<template>
  <main>
    <section>
      <input type="text" v-model="loadingText" />
      <div>
        <leo-button
          v-for="(v, item) in data.TYPE"
          :key="item"
          @click="type = item"
          class="radio"
          :class="[{ active: type === item }, item]"
        >
          {{ v }}
        </leo-button>
      </div>
      <div>
        <leo-button
          v-for="(v, item) in data.SIZE"
          :key="item"
          @click="size = item"
          class="radio"
          :class="[{ active: size === item }]"
        >
          {{ v }}
        </leo-button>
      </div>
      <div>
        <leo-button
          v-for="(v, item) in data.ICON"
          :key="item"
          @click="icon = item"
          class="radio"
          :class="[{ active: icon === item }]"
        >
          <span class="iconfont" :class="item">
            {{ v }}
          </span>
        </leo-button>
      </div>
      <div>
        <leo-button
          v-for="(v, item) in data.ICON_POSITION"
          :key="item"
          @click="iconPosition = item"
          class="radio "
          :class="[{ active: iconPosition === item }]"
        >
          {{ v }}
        </leo-button>
      </div>
      <div></div>
      <input type="checkbox" v-model="plain" id="plain" />
      <label for="plain">朴素按钮</label>
      <input type="checkbox" v-model="round" id="round" />
      <label for="round">圆角按钮</label>
      <input type="checkbox" v-model="circle" id="circle" />
      <label for="circle">圆形按钮</label>
      <input type="checkbox" v-model="disabled" id="disabled" />
      <label for="disabled">禁用按钮</label>
      <input type="checkbox" v-model="loading" id="loading" />
      <label for="loading">加载中</label>
      <input type="checkbox" v-model="full" id="full" />
      <label for="full">满宽度</label>
      <hr />
      <leo-button
        :type="type"
        :size="size"
        :plain="plain"
        :round="round"
        :circle="circle"
        :disabled="disabled"
        :loading="loading"
        :loadingText="loadingText"
        :iconPosition="iconPosition"
        :icon="icon"
        :full="full"
        @click="xxx"
        @contextMenu.prevent="xxx"
        >{{ data.TYPE[type] }}</leo-button
      >
      <leo-button
        :type="type"
        :size="size"
        :plain="plain"
        :round="round"
        :circle="circle"
        :disabled="disabled"
        :loading="loading"
        :loadingText="loadingText"
        :iconPosition="iconPosition"
        icon="lzh-loading"
        :full="full"
        @click="xxx"
        @contextMenu.prevent="xxx"
      ></leo-button>
      <hr />
      <LeoButtonGroup :type="type" :size="size" :round="round">
        <leo-button
          v-for="index in 6"
          :key="index + '+++'"
          :plain="plain"
          :round="round"
          :circle="circle"
          :disabled="disabled"
          :loading="loading"
          :loadingText="loadingText"
          :icon="icon"
          :iconPosition="iconPosition"
          :full="full"
          @click="xxx"
          @contextMenu.prevent="xxx"
          >{{ data.TYPE[type] }}</leo-button
        >
      </LeoButtonGroup>
    </section>
  </main>
</template>

<script>
const SIZE = {
  small: "小(28px)",
  medium: "中(32px)",
  large: "大(36px)",
  giant: "特大(40px)"
};
const TYPE = {
  default: "默认按钮",
  primary: "主要按钮",
  secondary: "次要按钮",
  success: "成功按钮",
  warning: "警告按钮",
  danger: "危险按钮",
  info: "提示按钮"
};
const ICON_POSITION = { left: "左ICON", right: "右ICON" };
import Vue from "vue";
import LeoButton from "components/LeoButton.vue";
import LeoButtonGroup from "components/LeoButtonGroup.vue";
export default Vue.extend({
  components: {
    LeoButton,
    LeoButtonGroup
  },
  data() {
    return {
      data: {
        TYPE,
        SIZE,
        ICON: {
          "lzh-up-arrow": "上箭头",
          "lzh-left-arrow": "左箭头",
          "lzh-right-arrow": "右箭头",
          "lzh-down-arrow": "下箭头",
          "lzh-loading": "加载"
        },
        ICON_POSITION
      },
      type: "default",
      size: null,
      plain: false,
      round: false,
      circle: false,
      disabled: false,
      loading: false,
      iconPosition: "left",
      loadingText: "加载中...",
      icon: null,
      full: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {}
  }
});
</script>
<style lang="scss">
.radio {
  display: inline-block;
  margin: 4px;
  padding: 4px;
  border: 2px dashed #aaa;
}
.active {
  border: 2px solid purple;
}
</style>
