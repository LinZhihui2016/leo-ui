<template>
  <div class="container">
    <leo-container>
      <leo-header>header</leo-header>
      <leo-container>
        <leo-aside width="20%">aside</leo-aside>
        <leo-content>content</leo-content>
      </leo-container>
      <leo-footer>footer</leo-footer>
    </leo-container>
  </div>
</template>

<script>
import Vue from "vue";
import LeoContainer from "components/LeoContainer.vue";
import LeoHeader from "components/LeoHeader.vue";
import LeoFooter from "components/LeoFooter.vue";
import LeoAside from "components/LeoAside.vue";
import LeoContent from "components/LeoContent.vue";
export default Vue.extend({
  components: {
    LeoContainer,
    LeoHeader,
    LeoFooter,
    LeoAside,
    LeoContent
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 400px;
}
</style>
