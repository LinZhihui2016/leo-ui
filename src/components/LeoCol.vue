<template>
  <div class="leo-col" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>
<script>
import { isObject } from "@/js/util";

const transformObject = (v, media) => {
  if (!v) return [];
  const obj = isObject(v) ? v : { span: v };
  media = media ? `--${media}` : "";
  return ["span", "pre", "forward", "backward"]
    .map(key => obj[key] && `leo-col--${key}-${obj[key]}${media}`)
    .filter(i => i);
};

export default {
  props: {
    span: [Number, String],
    pre: [Number, String],
    forward: Number,
    backward: Number,
    mobile: {
      type: [Object, Number, String]
    },
    pad: {
      type: [Object, Number, String]
    },
    narrowPc: {
      type: [Object, Number, String]
    }
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
      const { span, pre, forward, backward } = this;
      let { mobile, narrowPc, pad } = this;
      return [
        ...transformObject({ span, pre, forward, backward }),
        ...transformObject(mobile, "mobile"),
        ...transformObject(narrowPc, "narrowPc"),
        ...transformObject(pad, "pad")
      ];
    }
  }
};
</script>
<style lang="scss">
.leo-col {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  @for $n from 1 through 24 {
    $standWith: ($n / 24) * 100%;
    &.leo-col--span-#{$n} {
      width: $standWith;
    }
    &.leo-col--pre-#{$n} {
      margin-left: $standWith;
    }
    &.leo-col--forward-#{$n} {
      left: $standWith;
    }
    &.leo-col--backward-#{$n} {
      right: $standWith;
    }
  }
}

@media screen and (max-width: 768px) {
  .leo-col {
    @for $n from 1 through 24 {
      $standWith: ($n / 24) * 100%;
      &.leo-col--span-#{$n}--mobile {
        width: $standWith;
      }
      &.leo-col--pre-#{$n}--mobile {
        margin-left: $standWith;
      }
      &.leo-col--forward-#{$n}--mobile {
        left: $standWith;
      }
      &.leo-col--backward-#{$n}--mobile {
        right: $standWith;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .leo-col {
    @for $n from 1 through 24 {
      $standWith: ($n / 24) * 100%;
      &.leo-col--span-#{$n}--pad {
        width: $standWith;
      }
      &.leo-col--pre-#{$n}--pad {
        margin-left: $standWith;
      }
      &.leo-col--forward-#{$n}--pad {
        left: $standWith;
      }
      &.leo-col--backward-#{$n}--pad {
        right: $standWith;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .leo-col {
    @for $n from 1 through 24 {
      $standWith: ($n / 24) * 100%;
      &.leo-col--span-#{$n}--narrowPc {
        width: $standWith;
      }
      &.leo-col--pre-#{$n}--narrowPc {
        margin-left: $standWith;
      }
      &.leo-col--forward-#{$n}--narrowPc {
        left: $standWith;
      }
      &.leo-col--backward-#{$n}--narrowPc {
        right: $standWith;
      }
    }
  }
}
</style>
