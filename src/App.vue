<template>
  <div id="app">
    <header>
      <router-link to="/button">
        Button
      </router-link>
      <router-link to="/input">
        Input
      </router-link>
      <router-link to="/grid">
        grid
      </router-link>
      <router-link to="/layout">
        layout
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
  a {
    display: block;
  }
}
.flex-center {
  height: 100%;
}
</style>
