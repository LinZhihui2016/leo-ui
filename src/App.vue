<template>
  <div id="app">
    <header class="flex-center">
      <router-link to="/button">
        Button
      </router-link>
    </header>
    <router-view class="flex-center"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "app"
});
</script>

<style lang="scss">
@import url("css/common.scss");
header {
  margin-bottom: 10px;
}
</style>
