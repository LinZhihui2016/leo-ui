<template>
  <div class="leo-row" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: [Number, String],
    justify: {
      type: String,
      validator(v) {
        return [
          "flex-start",
          "flex-end",
          "center",
          "space-around",
          "space-between"
        ].includes(v);
      }
    },
    align: {
      type: String,
      validator(v) {
        return ["flex-start", "flex-end", "center"].includes(v);
      }
    }
  },
  computed: {
    style() {
      const { justify, align, gutter } = this;
      let style = {};
      justify && (style.justifyContent = justify);
      align && (style.alignItems = align);
      if (gutter) {
        style.marginLeft = `-${gutter / 2}px`;
        style.marginRight = `-${gutter / 2}px`;
      }
      return style;
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>
<style lang="scss">
.leo-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
