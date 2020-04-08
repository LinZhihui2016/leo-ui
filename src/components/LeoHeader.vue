<template>
  <div class="leo-header">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.leo-header {
  width: 100%;
  height: 100px;
  background: lightgreen;
}
</style>
