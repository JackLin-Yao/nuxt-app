<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分類</dt>
      <dd v-for="(item, index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(items,idx) in curdetail.child">
        <h4>{{ items.title }}</h4>
        <span>子项目</span>
        <span>子项目</span>
        <span>子项目</span>
        <span>子项目</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
        }]
      }, {
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      }, {
        type: 'hotel',
        name: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      }]

    }
  },
  computed: {
    curdetail() {
      return this.menu.filter(item => item.type === this.kind)[0]
      // console.log($store.state.home.menu)
      //   return this.$store.state.home.menu.filter(item => item.type===this.kind)[0]
      // }
    }
  },
  methods: {
    mouseleave: function () {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className
      
    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
