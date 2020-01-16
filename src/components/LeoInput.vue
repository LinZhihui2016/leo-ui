<template>
  <div class="leo-input--wrap">
    <input
      :type="type"
      v-model="value"
      :disabled="disabled"
      :readonly="readonly"
      class="leo-input"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
    />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    }
  }
});
</script>

<style lang="scss">
.leo-input--wrap {
  width: 256px;
  box-sizing: border-box;
  input {
    width: 100%;
  }
}
</style>
