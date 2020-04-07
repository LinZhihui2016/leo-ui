<template>
  <div>
    <div class="container">
      <leo-row gutter="20">
        <leo-col :span="24"
          ><div class="grid-content bg-purple-dark"></div
        ></leo-col>
      </leo-row>
      <leo-row gutter="20">
        <leo-col :span="12"><div class="grid-content bg-purple"></div></leo-col>
        <leo-col :span="12"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
      </leo-row>
      <leo-row gutter="20">
        <leo-col :span="8"><div class="grid-content bg-purple"></div></leo-col>
        <leo-col :span="8"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
        <leo-col :span="8"><div class="grid-content bg-purple"></div></leo-col>
      </leo-row>
      <leo-row gutter="20">
        <leo-col :span="6"><div class="grid-content bg-purple"></div></leo-col>
        <leo-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
        <leo-col :span="6"><div class="grid-content bg-purple"></div></leo-col>
        <leo-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
      </leo-row>
      <leo-row gutter="20">
        <leo-col :span="4"><div class="grid-content bg-purple"></div></leo-col>
        <leo-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
        <leo-col :span="4" :backward="1"
          ><div class="grid-content bg-purple"></div
        ></leo-col>
        <leo-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></leo-col>
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

<style lang="scss">
.leo-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.leo-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
