<template>
  <section class="m-istyle">
    <dl  @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      kind: 'all',
      list: {
        all: [
          {
            img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
            title: '白云机场24小时免费接送机无忧大床房',
            pos: '望京',
            price: '22'
          }, {
            img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
            title: '白云机场24小时免费接送机无忧大床房',
            pos: '望京',
            price: '22'
          }
        ],
        part: [{
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }, {
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }],
        spa: [{
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }, {
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }],
        movie: [{
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }, {
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }],
        travel: [{
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }, {
          img: '//p1.meituan.net/iphoenix/dede366ffe53d1f44efe03cde3ba790d145493.jpg@740w_416h_1e_1c',
          title: '白云机场24小时免费接送机无忧大床房',
          pos: '望京',
          price: '22'
        }]
      },

    }
  },
  computed: {
    cur() {
      return this.list[this.kind]
    }
  },
  methods: {
    over( e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      if(tag==='dd'){
        this.kind=dom.getAttribute('kind')
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.m-istyle {
  width: 1190px;
  margin-left: 20px;
  margin-top: 40px;

  dl {
    height: 44px;
    line-height: 44px;
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    display: flex;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;

    dt {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
      padding: 0 5px;
    }

    dd {
      padding: 0 5px;
      position: relative;

      &:after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
      }

      &.active:after {
        display: block;
      }
    }
  }

  .ibody {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    >li {
      width: 33.3%;
      height: 314px;
      padding: 10px;
      box-sizing: border-box;
      float: left;
      background: #fff;
      transition: background-color .5s;
      height: 314px;

      .el-card {
        width: 100%;
        height: 100%;
        border: none;

        img {
          max-width: 100%;
          width: 100%;
          height: 208px;
          margin-bottom: 11px;
          cursor: pointer;
        }

        .el-card__body {
          .cbody {
            list-style: none;

            .title {
              font-size: 16px;
              color: #222;
              height: 22px;
              line-height: 22px;
              margin-bottom: 8px;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }

            .pos {
              font-size: 12px;

              span {
                height: 18px;
                line-height: 18px;
                text-align: center;
                border: 1px solid #d8d8d8;
                border-radius: 2px;
                margin-right: 10px;
                margin-bottom: 5px;
                padding: 0 3px;
              }
            }

            .price {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              font-size: 12px;
              color: #BE9E4D;
              font-weight: 500;

              em {
                font-size: 20px;
                color: #BE9E4D;
                margin-right: 6px;
                letter-spacing: -.8px;
                cursor: pointer;
                font-style: normal;
              }

              span {
                font-size: 12px;
                letter-spacing: -.6px;
              }
            }
          }
        }
      }

      &:hover {
        background: #F4F4F4;
        transition: background-color .5s;
        border-radius: 4px;
      }
    }
  }
}
</style>
