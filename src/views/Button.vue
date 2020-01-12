<template>
  <main>
    <section>
      <input type="text" v-model="loadingText" />
      <hr />
      <template v-for="(v, item) in data.TYPE">
        <input
          type="radio"
          :id="'type_' + item"
          v-model="type"
          :key="item"
          :value="item"
        />
        <label
          :for="'type_' + item"
          :key="item + 1"
          style="margin:0 8px"
          :class="item"
          >{{ v }}</label
        >
      </template>
      <hr />
      <template v-for="(v, item) in data.SIZE">
        <input
          type="radio"
          :id="'type_' + item"
          v-model="size"
          :key="item"
          :value="item"
        />
        <label
          :for="'type_' + item"
          :key="item + 1"
          style="margin-right:16px"
          >{{ v }}</label
        >
      </template>
      <hr />
      <template v-for="(v, item) in data.ICON">
        <input
          type="radio"
          :id="'type_' + item"
          v-model="icon"
          :key="item"
          :value="v"
        />
        <label
          :for="'type_' + item"
          :key="item + 1"
          style="margin-right:16px"
          >{{ v }}</label
        >
      </template>
      <hr />
      <template v-for="(v, item) in data.ICON_POSITION">
        <input
          type="radio"
          :id="'type_' + item"
          v-model="iconPosition"
          :key="item"
          :value="v"
        />
        <label
          :for="'type_' + item"
          :key="item + 1"
          style="margin-right:16px"
          >{{ v }}</label
        >
      </template>
      <hr />
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
        v-for="index in 2"
        :key="index"
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
      <hr />
      <LeoButtonGroup :type="type" :size="size" :round="round">
        <leo-button
          v-for="index in 6"
          :key="index"
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
const ICON_POSITION = ["left", "right"];
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
        ICON: [
          "lzh-up-arrow",
          "lzh-left-arrow",
          "lzh-right-arrow",
          "lzh-loading"
        ],
        ICON_POSITION
      },
      type: "default",
      size: null,
      plain: false,
      round: false,
      circle: false,
      disabled: true,
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
<style lang="scss"></style>
