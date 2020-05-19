<template>
  <div class="swiper">
    
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="i of picarr" :key="i">
          <img class="img" :src="'https://picsum.photos/360/460?random='+i"  alt="">
          </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "carrousel",
  data() {
    return {
        picarr:[2,4,6,9,23],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay:{
            delay:2000,
            disableOnInteraction: false,
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
    axios.get('/mode2').then(res=>{
      console.log(res)
    })
  }
};
</script>

<style scoped lang=less>
.swiper{
    width: 600px;
    height: 400px;
    background-color: aquamarine;
}

.swiper-pagination::after{
width: 0;
height: 0;
content: "";
overflow: hidden;
clear: both;
display: block;
}
</style>>
