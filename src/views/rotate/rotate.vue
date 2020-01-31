<template>
  <div class="home">
    <CircleLodaing></CircleLodaing>
    <Bubbleloading></Bubbleloading>
  </div>
</template>

<script>
import CircleLodaing from "./lodaing/CircleLoading.vue";
import Bubbleloading from "./lodaing/Bubbleloading.vue";
export default {
  name: "rtate",
  components: {
    CircleLodaing,
    Bubbleloading
  }
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(2, 1ft);
  grid-template-rows: repeat(3, 1ft);
  height: 50vh;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.home > div {
  transform: scale(1.5);
}
</style>