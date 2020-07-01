<template>
  <div class="home">
    <div class="static">
      <vue-button></vue-button>
    </div>
    <div class="float">
      <Sonvue title="bioati" @sonemit="tiger"></Sonvue>
    </div>
    <div>
      <button @click="axiosx">axios</button>
    </div>
    <!-- <div class="home-header"></div>
    <div class="home-body"></div>
    <div class="home-footer"></div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sonvue from '@/components/sonvue.vue'
// console.log(Sonvue)
export default {
  name: "home",
  components: {
    // HelloWorld,
    Sonvue
  },
  methods:{
    tiger(data){
      console.log(data)
    },
    axiosx(){
      console.log('res')
      this.$axios.get("/h5vue").then(res=>{
        console.log(res)
      })
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.static{
  background-color: #555555;
  width: 100px;
  height: 100px;
  float: left;
}
.float{
  width: 100px;
  height: 100px;
  background-color: #6bb4a4;
  float: left;
}
.home {
  height: 100%;
  width: 100%;
  // position: fixed;
  // top: 0px;
  // bottom: 0px;
  // left: 0px;
  // right: 0px;
  // opacity: 50%;
  // background-color: #a1a39a;
  // background-color: rgb(163, 163, 154, 0.5);
  // display: flex;
  .home-header {
    height: 100px;
    width: 100%;
    background-color: #555555;
     position: absolute;
  }
  .home-body {
    height: 100%;
    width: 100%;
    background-color: #b64949;
    flex: 1;
    position: absolute;
    // position: fixed;
    top: 100px;
    // bottom: 100px;
  }
  .home-footer {
    height: 100px;
    width: 100%;
    background-color: #6bb4a4;
    // margin-bottom: 0px;
    position: absolute;
    bottom: 0px;
  }
}
</style>
