<template>
  <div class="leo-aside" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  },
  computed: {
    style() {
      const { width } = this;
      return {
        width: typeof width === "number" ? width + "px" : width
      };
    }
  },
  mounted() {
    this.$parent && (this.$parent.hasAside = true);
  }
});
</script>

<style lang="scss" scoped>
.leo-aside {
  height: 100%;
  background: yellowgreen;
}
</style>
