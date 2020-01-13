<template>
  <button
    :class="_class"
    class="leo-button"
    @click="on_click_left"
    @contextmenu="on_click_right"
  >
    <LeoIcon
      :icon="loading ? 'lzh-loading' : icon"
      v-if="icon || loading"
    ></LeoIcon>
    <span>
      <slot v-if="!(loading && loadingText)"></slot>
      <template v-else>{{ loadingText }}</template>
    </span>
  </button>
</template>

<script>
const SIZE = ["small", "medium", "large", "giant"];
const TYPE = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info"
];
const ICON_POSITION = ["left", "right"];
import LeoIcon from "components/LeoIcon.vue";
export default {
  components: {
    LeoIcon
  },
  props: {
    size: {
      type: String,
      validator: v => SIZE.includes(v)
    },
    type: {
      type: String,
      validator: v => TYPE.includes(v)
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: v => ICON_POSITION.includes(v)
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      size_from_group: null,
      type_from_group: null,
      circle_from_group: null,
      round_left: null,
      round_right: null,
      disabled_from_group: null
    };
  },
  computed: {
    _class() {
      return [
        `leo-button--${this.size_from_group || this.size || "large"}`,
        `leo-button--${this.type_from_group || this.type || "default"}`,
        {
          "leo-button--plain": !!this.plain,
          "leo-button--round": !!this.round,
          "leo-button--round-left": !!this.round_left,
          "leo-button--round-right": !!this.round_right,
          "leo-button--disabled":
            this.loading || this.disabled_from_group || !!this.disabled,
          "leo-button--circle": !this.$slots.default && !!this.circle,
          "leo-button--loading": !!this.loading,
          "leo-button--full-width": !!this.full,
          "leo-button--icon-right":
            (!!this.icon || !!this.loading) && this.iconPosition === "right"
        }
      ];
    }
  },
  methods: {
    on_click_left(e) {
      this.$emit("click", e);
    },
    on_click_right(e) {
      this.$emit("contextMenu", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.leo-button {
  display: inline-flex;
  align-items: center;
  background: #fff;
  border-radius: $border-radius;
  border: 1px solid $default;
  outline: 0;
  font-size: $m_text;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
    z-index: 1;
  }
  &:active {
    opacity: 0.9;
    z-index: 1;
  }

  & + .leo-button {
    margin-left: 8px;
  }
  .iconfont + span {
    margin-left: 4px;
    margin-right: 0;
  }
  &.leo-button--icon-right {
    flex-direction: row-reverse;
    .iconfont + span {
      margin-left: 0;
      margin-right: 4px;
    }
  }

  &.leo-button--disabled {
    opacity: 0.5 !important;
    cursor: not-allowed;
  }
  &.leo-button--full-width {
    justify-content: center;
    margin: 4px 0;
    width: 100%;
  }

  > span,
  i {
    font-size: inherit;
    height: 14px;
    line-height: 14px;
    display: inline-block;
    vertical-align: middle;
  }
}
//颜色区
.leo-button--default {
  &:active,
  &:focus,
  &:hover {
    background: $primary_30;
    color: $primary;
    border-color: $primary_30;
  }

  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: #fff;
    color: $main_text;
    border-color: $default;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: #fff;
      color: $main_text;
      border-color: $default;
    }
    &:active,
    &:focus,
    &:hover {
      background: #fff;
      color: $primary;
      border-color: $primary;
    }
  }
}

.leo-button--primary {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $primary;
    border-color: $primary;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $primary;
    color: #fff;
    border-color: $primary;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $primary_30;
      color: $primary;
      border-color: $primary_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $primary;
      color: #fff;
      border-color: $primary;
    }
  }
}
.leo-button--secondary {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $secondary;
    border-color: $secondary;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $secondary;
    color: #fff;
    border-color: $secondary;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $secondary_30;
      color: $secondary;
      border-color: $secondary_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $secondary;
      color: #fff;
      border-color: $secondary;
    }
  }
}

.leo-button--success {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $success;
    border-color: $success;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $success;
    color: #fff;
    border-color: $success;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $success_30;
      color: $success;
      border-color: $success_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $success;
      color: #fff;
      border-color: $success;
    }
  }
}
.leo-button--warning {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $warning;
    border-color: $warning;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $warning;
    color: #fff;
    border-color: $warning;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $warning_30;
      color: $warning;
      border-color: $warning_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $warning;
      color: #fff;
      border-color: $warning;
    }
  }
}

.leo-button--danger {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $danger;
    border-color: $danger;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $danger;
    color: #fff;
    border-color: $danger;
  }

  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $danger_30;
      color: $danger;
      border-color: $danger_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $danger;
      color: #fff;
      border-color: $danger;
    }
  }
}
.leo-button--info {
  &,
  &.leo-button--disabled,
  &.leo-button--disabled:active,
  &.leo-button--disabled:focus,
  &.leo-button--disabled:hover {
    background: $info;
    border-color: $info;
    color: #fff;
  }
  &:active,
  &:focus,
  &:hover {
    background: $info;
    color: #fff;
    border-color: $info;
  }
  &.leo-button--plain {
    &,
    &.leo-button--disabled,
    &.leo-button--disabled:active,
    &.leo-button--disabled:focus,
    &.leo-button--disabled:hover {
      background: $info_30;
      color: $info;
      border-color: $info_30;
    }
    &:active,
    &:focus,
    &:hover {
      background: $info;
      color: #fff;
      border-color: $info;
    }
  }
}
// 大小区
.leo-button--small,
.leo-button--medium {
  font-size: $s_text;
}
.leo-button--large,
.leo-button--giant {
  font-size: $m_text;
}

.leo-button--small {
  padding: 6px 15px; //1+6+14+6+1=28
  &.leo-button--round {
    border-radius: 14px;
  }
  &.leo-button--circle {
    border-radius: 50%;
    padding: 6px;
  }
  &.leo-button--round-left {
    border-top-left-radius: 14px !important;
    border-bottom-left-radius: 14px !important;
  }
  &.leo-button--round-right {
    border-top-right-radius: 14px !important;
    border-bottom-right-radius: 14px !important;
  }
}
.leo-button--medium {
  padding: 8px 15px; //1+8+14+8+1=32
  &.leo-button--round {
    border-radius: 16px;
  }
  &.leo-button--circle {
    border-radius: 50%;
    padding: 8px;
  }
  &.leo-button--round-left {
    border-top-left-radius: 16px !important;
    border-bottom-left-radius: 16px !important;
  }
  &.leo-button--round-right {
    border-top-right-radius: 16px !important;
    border-bottom-right-radius: 16px !important;
  }
}

.leo-button--large {
  padding: 10px 20px; //1+10+14+10+1=36
  &.leo-button--round {
    border-radius: 18px;
  }
  &.leo-button--circle {
    border-radius: 50%;
    padding: 10px;
  }
  &.leo-button--round-left {
    border-top-left-radius: 18px !important;
    border-bottom-left-radius: 18px !important;
  }
  &.leo-button--round-right {
    border-top-right-radius: 18px !important;
    border-bottom-right-radius: 18px !important;
  }
}
.leo-button--giant {
  padding: 12px 20px; //1+12+14+12+1=40
  &.leo-button--round {
    border-radius: 20px;
  }
  &.leo-button--circle {
    border-radius: 50%;
    padding: 12px; //
  }
  &.leo-button--round-left {
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
  }
  &.leo-button--round-right {
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }
}
.leo-button--loading {
  .iconfont {
    animation: loading 1s linear infinite;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
