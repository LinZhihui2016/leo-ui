<template>
  <i class="iconfont" :class="icon" v-if="icon"></i>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null
    }
  }
});
</script>
