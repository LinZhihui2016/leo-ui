<template>
  <div>
    <div class="container">
      <leo-row :gutter="20">
        <leo-col span="2">
          <div class="bg-ccc">
            1
          </div>
        </leo-col>
        <leo-col span="12" pre-span="17">
          <div class="bg-ccc">
            2
          </div>
        </leo-col>
      </leo-row>
      <leo-row>
        <leo-col>
          <div class="bg-ccc">
            3
          </div>
        </leo-col>
      </leo-row>
      <leo-row>
        <leo-col>
          <div class="bg-ccc">
            4
          </div>
        </leo-col>
      </leo-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LeoCol from "components/LeoCol.vue";
import LeoRow from "components/LeoRow.vue";
export default Vue.extend({
  components: {
    LeoCol,
    LeoRow
  }
});
</script>

<style lang="scss" scoped>
.bg-ccc {
  background: #ccc;
}
.container {
  width: 960px;
  margin: 0 auto;
  border: 5px solid red;
}
</style>
