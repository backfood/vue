<template>
  <div>
    <div>
      <el-button type="primary" @click="touterBack">返回</el-button>
    </div>
    <div class="list">
      <div>
        <span>编号：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>订单编号：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>购买人：</span><span>{{ res.id }}：{{ res.phone }}</span>
      </div>
      <div>
        <span>当前等级：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>下单类型：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>购买时间</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>状态：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>邀请人：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>购买产品：</span><span>{{ res.id }}</span>
      </div>
      <div>
        <span>价格：</span><span>{{ res.id }}</span>
      </div>
      <div class="sit">
        <div>地址信息：</div>
        <div>
          <p><span>收货人：</span><span>张飞</span></p>
          <p><span>联系方式</span><span>张飞</span></p>
          <p><span>地址:</span><span>张飞</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetails",
  data() {
    return {
      res: {
        id: "1111", //编号
        num: "G1111", //订单号
        buyer: "张三", //购买人
        phone: "1464981567461687",
        level: "v1",
      },
    };
  },
  created() {
    let { id } = this.$route.params;
    console.log(id);
  },
  methods: {
    touterBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style  scoped>
.sit {
  display: flex;
}
.list>div{
    margin: 20px 0;
}
.sit p{
    margin: 0;
    margin-bottom: 20px;
}
</style>