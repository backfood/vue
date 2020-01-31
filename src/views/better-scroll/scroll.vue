<template>
  <div class="box">
    
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <router-link to="/rotate">旋转</router-link>
        <router-view class="roate"/>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  methods: {
    scroll() {
      let scroll = new BScroll(".wrapper", {
        scrollY: true,
        click: true,
        startY: 0
      });
      scroll.on();
    }
  },

  mounted() {
    this.scroll();
  }
};
</script>

<style scoped lang="less">
// .box {
//   width: 100%;
//   height: 100%;
//   .wrapper {
//     width: 100%;
//     height: 300px;
//     border: 1px solid #0000;
//     background-color: royalblue;
//     overflow: hidden;
//     .content {
//       height: 400px;
//       width: 100%;
//       border: 2px solid #3333;
//       background-color: #1999;
//     }
//   }
// }
</style>>

