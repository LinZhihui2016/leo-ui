<template>
  <div class="leo-footer" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    height: {
      type: [Number, String],
      default: 60
    }
  },
  computed: {
    style() {
      const { height } = this;
      return {
        height: typeof height === "number" ? height + "px" : height
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.leo-footer {
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  background: lightcoral;
}
</style>
