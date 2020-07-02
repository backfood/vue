<template>
  <div class="home">
    <div class="static">
      <vue-button @click="axiosx"></vue-button>
    </div>
    <div class="float">
      <Sonvue title="bioati" @sonemit="tiger"></Sonvue>
    </div>


    <div>{{res}}</div>
    <div>
      <button @click="axiosx">axiosx</button>

    </div>
    <!-- <div class="home-header"></div>
    <div class="home-body"></div>
    <div class="home-footer"></div>-->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sonvue from "@/components/sonvue.vue";
// console.log(Sonvue)
export default {
  name: "home",
  data() {
    return { res: "这是默认的未返回的状态" };
  },
  components: {
    // HelloWorld,
    Sonvue
  },
<<<<<<< HEAD
  methods: {
    tiger(data) {
      console.log(data);
    },
    axiosx() {
      console.log("res");
      this.$axios.get("/h5run", "123很好").then(res => {
        console.log(res.data);
        this.res = res.data;
      });
    },
    confirmVerifyResult() {
      if (this.submitMsg.status === "") {
        this.$message({
          message: "请输选择审核结果",
          type: "warning"
        });
      } else if (
        this.submitMsg.status === "REJECTED" &&
        this.submitMsg.rejectedReason === ""
      ) {
        this.$message({
          message: "请输入审核失败的原因",
          type: "warning"
        });
      } else {
        submitVerify(this.submitMsg).then(res => {
          if (res.status == 200) {
            this.$message({
              message: "提交成功",
              type: "success"
            });
          }
          let param = this.checkNull({
            submittedStartAt: this.submittime ? this.submittime[0] : null,
            submittedEndAt: this.submittime ? this.submittime[1] : null,
            auditStartAt: this.verifytime ? this.verifytime[0] : null,
            auditEndAt: this.verifytime ? this.verifytime[1] : null,
            ...this.searchParam
          });
          this.init(param);
        });
        this.showVerifyDialog = false;
      }
=======
  methods:{
    tiger(data){
      console.log(data)
    },
    axiosx(){
      console.log('res')
      this.$axios.get("/h5vue").then(res=>{
        console.log(res)
      })
>>>>>>> 4008870c549f0495a5e782af8dacb5d3c795e7c9
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.static {
  background-color: #555555;
  width: 100px;
  height: 100px;
  float: left;
}
.float {
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
