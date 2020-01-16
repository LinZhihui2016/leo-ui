<template>
  <main>
    <p>{{ text }}</p>
    <LeoInput v-model="text" id="a2" @focus="xxx"></LeoInput>
    <LeoInput v-model="text" disabled id="a1"></LeoInput>
    <LeoInput v-model="text" readonly></LeoInput>
    <p>{{ text }}</p>
  </main>
</template>

<script>
import Vue from "vue";
import LeoInput from "components/LeoInput.vue";
export default Vue.extend({
  components: {
    LeoInput
  },
  data() {
    return {
      text: "123"
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {}
  }
});
</script>
<style lang="scss"></style>
