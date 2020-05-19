<template>
  <div>
      这是子路由1的内容分
      <div>通过action改变state</div>
      <div>这是id{{id}}</div>
      <div>这是name{{name}}</div>
      <button @click="chanid">点击</button>
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  name:"childrenfirst",
  methods:{
      ...mapActions(['acId']),
      chanid(){
        this.acId('魏征')
        let that=this
        setTimeout(()=>{
          that.$router.push('/notes')
        },1000)
      }
      /*
      现在已经完成了mutation和action的基本使用
      下一步是尝试在一个mutation/action中调用另一个mutation/action
      
      */
  },
  computed:{
    ...mapState(['id','name'])
  }
}
</script>

<style>

</style>