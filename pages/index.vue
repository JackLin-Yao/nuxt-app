<template>
  <div >
    解决方案：
如果是先执行了npm install之后发现项目运行时报Node Sass version 7.0.0 is incompatible with ^4.0.0类似这样的错，那么需要先卸载已下载好的node-sass依赖

1、npm uninstall node-sass;
2、npm i -D sass;
3、npm run dev；
用npm 卸载安装不了的同学可以试一下cnpm
npm install -g cnpm -registry=https://registry.npm.taobao.org

这样就成功了~~~~~
————————————————
版权声明：本文为CSDN博主「_鹿鹿」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/abcdefg182/article/details/124532610
  </div>
</template>

<script >
// import Index from '@/components/public/header/index.vue'

export default {
  components: {
    // Index
  }
}
</script>

<style lang="scss">
</style>
