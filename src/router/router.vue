<template>
  <div>
      <!-- 命名式路由 -->
      <div>这是子路由显示出来的内容</div>
  </div>
</template>

<script>
export default {
    name:'router',
    created(){
        console.log(this.route)
    }
}
</script>

<style>

</style>