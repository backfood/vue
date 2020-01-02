<template>
  <div>
    子路由2是注册
    <div>
      这是通过this.$store.state.id获取的id
      <span style="color:red">{{id}}</span>
    </div>
    <div>
      mapstate中的变量
      <span style="color:red">{{unexp}}</span>
    </div>
    <div>
      这是通过对象式获取的type
      <span style="color:red">{{type}}</span>
      <br />
      <span style="color:red">实时显示name ----- {{name}}</span>
    </div>
    <input type="text" class="state-input" @keyup="change" :value="name" />
    <div>{{dataname}}</div>
    <input type="text" class="state-input" v-model="dataname" />
    <button @click="changId">点击</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  // computed:{
  //   id(){
  //     return this.$store.state.id
  //   }
  // }
  // computed:
  //   mapState({id:state=>state.id,//对象式获取state
  //   unexp(){
  //     return "mapstate中的变量"
  //   }
  //   })
  // ,
  data() {
    return {
      dataname: "1234dfwggsg"
    };
  },
  computed: {
    unexp() {
      return "mapstate中的变量";
    },
    ...mapState(["type", "id", "name"])
  },
  methods: {
    change(e) {
      this.changname({ name: e.target.value});
    },
    ...mapMutations(["changname", "changId"])
    /**
     *
     * mutation 要通过commit来提交
     * 'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
     */
  },
  created() {
    // console.log(this.$route);
  }
};
</script>

<style>
.state-input {
  width: 100px;
  height: 30px;
}
</style>