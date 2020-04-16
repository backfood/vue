<template>
  <div>
    <h1 @dblclick="dbinput($event)">http权威指南</h1>      
    <div >{{inpvalue}}</div>     
    <input @dblclick="dbinput($event)"  type="text"  v-model='inpvalue'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      inpvalue:"http权威指南"
    };
  },
  methods: {
    dbinput(e) {
      // console.log(e.target.parentNode.innerHTML);
      // console.log(e.target);
      // console.log(e);
      e.target.parentNode.innerHTMl="<div>1234</div>"
    }
  }
};
</script>

<style>
</style>