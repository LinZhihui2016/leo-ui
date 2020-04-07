<template>
  <div
    class="leo-input-group"
    :class="{
      'leo-input-group--left': $slots.left,
      'leo-input-group--right': $slots.right,
      'leo-input-group--full': full
    }"
  >
    <div v-if="$slots.left" class="leo-input--slot-left">
      <slot name="left"></slot>
    </div>
    <slot :full="full"> </slot>

    <div v-if="$slots.right" class="leo-input--slot-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    full: Boolean
  }
};
</script>
<style lang="scss">
.leo-input-group--left > .leo-input--wrap > .leo-input {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  z-index: 1;
}
.leo-input-group--right > .leo-input--wrap > .leo-input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 1;
}

.leo-input-group:not(.leo-input-group--full) + .leo-input-group,
.leo-input--wrap:not(.leo-input--full) + .leo-input--wrap,
.leo-input-group:not(.leo-input-group--full) + .leo-input--wrap,
.leo-input--wrap:not(.leo-input--full) + .leo-input-group {
  margin-left: 8px;
}

.leo-input-group {
  display: inline-flex;
  margin: 4px 0;
  width: 300px;

  &.leo-input-group--full {
    width: 100%;
  }
  > .leo-input--wrap {
    flex: 1;
    margin: 0;
  }
  .leo-input--slot-right {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    margin-left: -1px;
    border-left: 0;
  }
  .leo-input--slot-left {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    border-right: 0;
    margin-right: -1px;
  }
  .leo-input--slot-right,
  .leo-input--slot-left {
    display: inline-flex;
    align-items: center;
    border: 1px solid $default;
    white-space: nowrap;
    background: #eee;
    box-sizing: border-box;
    color: $placeholder_text;
    padding: 0 10px;
  }
}
</style>
