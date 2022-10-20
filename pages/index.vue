<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <side-menu></side-menu>
      </el-col>
      <el-col :span="19">
        <life></life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic></artistic>
      </el-col>
    </el-row>
  </div>
</template>

<script >
import SideMenu from '@/components/index/menu.vue'
import life from '@/components/index/life.vue';
import artistic from '@/components/index/artistic.vue';

export default {
  components: {
    SideMenu, life, artistic
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
