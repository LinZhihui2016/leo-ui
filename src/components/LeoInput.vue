<template>
  <div class="leo-input--wrap" :class="_class">
    <div
      class="leo-input--inner-left"
      v-if="iconLeft"
      :style="_style_left_icon"
    >
      <span class="leo-input--icon">
        <leo-icon :icon="iconLeft"></leo-icon>
      </span>
    </div>
    <input
      :type="password && password_show ? 'password' : type"
      v-model="_value"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :name="name"
      :placeholder="placeholder"
      class="leo-input"
      :style="_style"
      @change="$emit('change', _value)"
      @blur="$emit('blur', _value)"
      @focus="$emit('focus', _value)"
    />
    <div
      class="leo-input--inner-right"
      v-if="(clear && value) || iconRight || password"
    >
      <span v-if="iconRight" class="leo-input--icon">
        <leo-icon :icon="iconRight"></leo-icon>
      </span>
      <span class="leo-input--icon" v-if="clear && value" @click="clearEvent">
        <leo-icon icon="lzh-close-circle"></leo-icon>
      </span>
      <span
        @click="togglePasswordEvent"
        class="leo-input--icon"
        v-if="password && value"
      >
        <leo-icon
          :icon="!password_show ? 'lzh-eye-active' : 'lzh-eye-hidden'"
        ></leo-icon>
      </span>
    </div>
  </div>
</template>

<script>
const SIZE = ["small", "medium", "large", "giant"];
import Vue from "vue";
import LeoIcon from "./LeoIcon";
export default Vue.extend({
  components: {
    LeoIcon
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    size: {
      type: String,
      validator: v => SIZE.includes(v)
    },
    clear: {
      type: Boolean
    },
    iconLeft: {
      type: String
    },
    iconRight: {
      type: String
    },
    password: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    full: {
      type: Boolean
    }
  },
  data() {
    return {
      password_show: true
    };
  },
  computed: {
    _value: {
      get: function() {
        return this.value;
      },
      set: function(v) {
        this.$emit("input", v);
      }
    },
    _class() {
      return [
        `leo-input--${this.size || "large"}`,
        {
          "leo-input--disabled": !!this.disabled,
          "leo-input--readonly": !!this.readonly,
          "leo-input--full": this.full
        }
      ];
    },
    _style() {
      let paddingRight = 0;
      let paddingLeft = 0;
      let { iconLeft, iconRight, clear, password } = this;
      !!iconLeft && paddingLeft++;
      !!iconRight && paddingRight++;
      clear && paddingRight++;
      password && paddingRight++;
      return {
        paddingLeft: (paddingLeft ? 10 + paddingLeft * 20 : 20) + "px",
        paddingRight: (paddingRight ? 10 + paddingRight * 20 : 20) + "px"
      };
    }
  },
  methods: {
    clearEvent() {
      this._value = "";
      this.$emit("onClear");
    },
    togglePasswordEvent() {
      this.password_show = !this.password_show;
      this.$emit("onPassword");
    }
  }
});
</script>

<style lang="scss">
.leo-input--wrap {
  margin: 4px 0;
  display: inline-flex;
  align-items: center;
  width: 300px;
  box-sizing: border-box;
  position: relative;
}

.leo-input--full {
  width: 100%;
}
.leo-input--disabled > input {
  &,
  &:active,
  &:focus,
  &:hover {
    background: $disabled;
    border-color: $default;
    color: $placeholder_text;
    cursor: not-allowed;
  }
}

.leo-input--readonly > input {
  font-style: italic;
  color: $placeholder_text;
}

.leo-input {
  flex: 1;
  display: inline-block;
  background: #fff;
  border-radius: $border-radius;
  border: 1px solid $default;
  outline: 0;
  width: 100%;
  font-size: $m_text;
  line-height: 1;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    border-color: $main_text;
  }
  &:active,
  &:focus {
    border-color: $primary;
  }
}

.leo-input--small,
.leo-input--medium {
  > input {
    font-size: $s_text;
  }
}
.leo-input--large,
.leo-input--giant {
  > input {
    font-size: $m_text;
  }
}
.leo-input--small {
  > input {
    padding: 6px 15px;
  }
}
.leo-input--medium {
  > input {
    padding: 8px 15px;
  }
}
.leo-input--large {
  > input {
    padding: 9px 20px;
  }
}
.leo-input--giant {
  > input {
    padding: 11px 20px;
  }
}
.leo-input--inner-left,
.leo-input--inner-right {
  height: 100%;
  position: absolute;
  z-index: 2;
  .leo-input--icon {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .iconfont {
    display: inline-block;
    width: 20px;
    text-align: center;
    &.lzh-close-circle,
    &.lzh-eye-active,
    &.lzh-eye-hidden {
      cursor: pointer;
      color: #999;
      &:hover {
        color: #000;
      }
    }
  }
}
.leo-input--inner-left {
  left: 0;
  padding-left: 10px;
}
.leo-input--inner-right {
  right: 0;
  padding-right: 10px;
}
</style>
