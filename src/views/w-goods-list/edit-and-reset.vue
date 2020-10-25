<template>
  <div>
    <div class="title">编辑商品</div>
    <el-row>
      <el-form
        :inline="true"
        ref="logSearch"
        :model="form"
        :rules="rules"
        label-width="100px"
      >
        <div>
          <el-form-item label="商品名称" prop="name" :rules="ruleRequired">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item
            label="类型"
            prop="type"
            :rules="[{ required: true, message: '此项必选' }]"
          >
            <el-select clearable v-model="form.type" placeholder="请选择">
              <el-option label="开通会员专属商品" :value="1"></el-option>
              <el-option label="直升县代专属商品" :value="2"></el-option>
              <el-option label="会员复购专属商品" :value="3"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="商品价格" prop="price">
            <el-input
              v-model="form.price"
              placeholder="请输入"
              @input="float2"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="几盒装" prop="num" :rules="ruleRequired">
            <el-input v-model="form.num" placeholder="1"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="几盒装" prop="sort" :rules="ruleRequired">
            <el-input v-model="form.sort" placeholder="0"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="描述" prop="disc" :rules="ruleRequired">
            <el-input
              v-model="form.disc"
              placeholder="请输入商品描述"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="描述" prop="disc" :rules="ruleRequired">
            <el-input
              v-model="form.disc"
              placeholder="请输入商品描述"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="商品图片" prop="pics" :rules="ruleRequired">
            <el-input
              v-model="form.disc"
              placeholder="请输入商品描述"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    function float2(rule, value, callback) {
      if (value == "") {
        callback(new Error("此项必填"));
      } else if (isNaN(parseFloat(value))) {
        callback(new Error("请输入数字值"));
      } else if (value.split(".")[1] && value.split(".")[1].length > 2) {
        callback(new Error("请保留两位数字"));
      } else {
        callback();
      }
    }
    return {
      id: "",
      form: {
        num: 1,
        sort: 0,
      },
      rules: { price: [{ validator: float2, trigger: "change" }] },
      ruleRequired: [{ required: true, message: "此项必填" }],
    };
  },
  created() {
    let { id } = this.$route.params;
    this.id = id;
  },
  methods: {
    float2(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>