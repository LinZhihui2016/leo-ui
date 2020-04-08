<template>
  <div class="leo-header" :style="style">
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
.leo-header {
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  background: lightgreen;
}
</style>
