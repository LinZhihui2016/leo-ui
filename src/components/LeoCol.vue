<template>
  <div class="leo-col" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: [Number, String],
    preSpan: [Number, String]
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    style() {
      const { gutter } = this;
      let style = {};
      if (gutter) {
        style.paddingLeft = `${gutter / 2}px`;
        style.paddingRight = `${gutter / 2}px`;
      }
      return style;
    },
    classList() {
      const { span, preSpan } = this;
      return [
        span && `leo-col--span-${span}`,
        preSpan && `leo-col--pre-${preSpan}`
      ];
    }
  }
};
</script>
<style lang="scss">
.leo-col {
  width: 100%;
  @for $n from 1 through 24 {
    &.leo-col--span-#{$n} {
      width: ($n / 24) * 100%;
    }
    &.leo-col--pre-#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
