<template>
  <div class="leo-content">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.leo-content {
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  background: lightseagreen;
}
</style>
