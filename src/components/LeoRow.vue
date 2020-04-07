<template>
  <div class="leo-row" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: [Number, String],
    justify: String,
    align: String
  },
  computed: {
    style() {
      const { justify, align, gutter } = this;
      let style = {};
      justify && (style.justify = justify);
      align && (style.align = align);
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
}
</style>
