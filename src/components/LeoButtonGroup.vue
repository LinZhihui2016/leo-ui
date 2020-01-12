<template>
  <div class="leo-button-group" :class="round ? 'leo-button-group--round' : ''">
    <slot></slot>
  </div>
</template>

<script>
const SIZE = ["small", "medium", "large", "giant"];
const TYPE = [
  "default",
  "primary",
  "secondary",
  "success",
  "danger",
  "error",
  "info"
];
export default {
  props: {
    size: {
      type: String,
      validator: v => SIZE.includes(v)
    },
    type: {
      type: String,
      validator: v => TYPE.includes(v)
    },
    round: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    size: "on_change",
    type: "on_change",
    round: "on_change",
    disabled: "on_change"
  },
  mounted() {
    this.on_change();
  },
  methods: {
    on_change() {
      this.$nextTick(() => {
        this.$slots.default.forEach((slot, index, arr) => {
          slot.child.type_from_group = this.type;
          slot.child.size_from_group = this.size;
          slot.child.disabled_from_group = this.disabled;
          slot.child.round_left = index === 0 && this.round;
          slot.child.round_right = index === arr.length - 1 && this.round;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.leo-button-group > .leo-button {
  margin-left: -1px;
  border-radius: 0;
  position: relative;
  &:hover {
    z-index: 2;
  }
  border-left-color: $default;
  border-right-color: $default;
  &:first-child {
    margin-left: 0;
  }
  &:first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }
  &:last-child {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    border-left-color: $default;
    border-right-color: $default;
  }
}
</style>
