<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/child1">子节点1</router-link>
    <router-link to="/child2">子节点2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "about",
  created() {
    console.log(this.$route);
  }
};
</script>>