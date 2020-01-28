<template>
  <main>
    <section>
      <p>{{ text }}</p>
      <div>
        <LeoInput v-model="text" size="giant"></LeoInput>
        <LeoInput v-model="text" size="large"></LeoInput>
        <LeoInput v-model="text" size="medium"></LeoInput>
        <LeoInput v-model="text" size="small"></LeoInput>
      </div>
      <div>
        <LeoInput v-model="text" disabled></LeoInput>
        <LeoInput v-model="text" readonly></LeoInput>
        <LeoInput v-model="text" clear ref="xxx"></LeoInput>
      </div>
      <div>
        <LeoInput v-model="text" iconLeft="lzh-left-arrow"></LeoInput>
        <LeoInput v-model="text" iconRight="lzh-right-arrow"></LeoInput>
        <LeoInput
          v-model="text"
          iconRight="lzh-right-arrow"
          iconLeft="lzh-left-arrow"
        ></LeoInput>
      </div>
      <div>
        <LeoInput v-model="text" clear iconLeft="lzh-left-arrow"></LeoInput>
        <LeoInput v-model="text" clear iconRight="lzh-right-arrow"></LeoInput>
        <LeoInput
          v-model="text"
          clear
          iconRight="lzh-right-arrow"
          iconLeft="lzh-left-arrow"
        ></LeoInput>
      </div>
      <div>
        <LeoInput v-model="text" password></LeoInput>
        <LeoInput v-model="text" password clear></LeoInput>
      </div>
      <div>
        <LeoInput v-model="text" password iconLeft="lzh-left-arrow"></LeoInput>
        <LeoInput
          v-model="text"
          password
          iconRight="lzh-right-arrow"
        ></LeoInput>
        <LeoInput
          v-model="text"
          password
          iconLeft="lzh-left-arrow"
          iconRight="lzh-right-arrow"
        ></LeoInput>
      </div>
      <div>
        <LeoInput
          v-model="text"
          password
          clear
          iconLeft="lzh-left-arrow"
        ></LeoInput>
        <LeoInput
          v-model="text"
          password
          clear
          iconRight="lzh-right-arrow"
        ></LeoInput>
        <LeoInput
          v-model="text"
          password
          clear
          iconLeft="lzh-left-arrow"
          iconRight="lzh-right-arrow"
        ></LeoInput>
      </div>
      <div>
        <LeoInputGroup>
          <LeoInput v-model="text" size="giant"></LeoInput>
        </LeoInputGroup>
      </div>
      <div>
        <LeoInput v-model="text" label="你好你好"></LeoInput>
      </div>

      <p>{{ text }}</p>
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import LeoInput from "components/LeoInput.vue";
import LeoInputGroup from "components/LeoInputGroup.vue";
export default Vue.extend({
  components: {
    LeoInput,
    LeoInputGroup
  },
  data() {
    return {
      text: "123"
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
});
</script>
<style lang="scss"></style>
