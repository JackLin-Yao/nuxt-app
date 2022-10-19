<template>
  <div class="m-header">
    <el-row :gutter="0">
      <el-col :span="5">
        <geo></geo>
      </el-col>
      <el-col :span="6">
      <user></user>
      </el-col>
      <el-col :span="13">
        <nav-bar></nav-bar>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Geo from './geo.vue';
import User from './user.vue';
import NavBar from './nav.vue';
export default {
  components: {
    Geo,User,NavBar
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";
</style>
