<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s3plus.meituan.net/static-prod01/com.sankuai.fe.www.web-files/62588ab/img/logo.png" alt="美团">
      </el-col>
      <el-col class="center" :span="15">
        <div class="wrapper">

          <el-input @focus="focus" @blur="blur" @input="input" v-model="search" placeholder="搜索商家或地点"></el-input>
          <el-button class="el-button el-button--primary"><i class="el-icon-search" /></el-button>
          <dl class="hotPlace" v-if="isHotSearch">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotSearch" :key="index">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">

            <dd v-for="(item1,index1) in searchList" :key="index1">{{item1}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col class="right" :span="6">
        <ul class="security">
          <li><i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li><i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li><i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotSearch:['歡樂谷','歡樂谷','歡樂谷','歡樂谷',],
      searchList:['頤和園','頤和園','頤和園']

    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
