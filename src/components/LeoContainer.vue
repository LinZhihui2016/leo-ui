<template>
  <div class="leo-container" :class="{ 'leo-container--aside': hasAside }">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hasAside: false
    };
  }
});
</script>

<style lang="scss" scoped>
.leo-container {
  flex-grow: 1;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  &.leo-container--aside {
    flex-direction: row;
  }
}
</style>
