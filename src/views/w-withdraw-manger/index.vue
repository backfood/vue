<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" ref="logSearch" :model="form">
          <el-form-item label="时间">
            <el-date-picker
              v-model="date"
              type="datetimerange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.userId" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-select clearable v-model="form.coinId" placeholder="请选择">
              <el-option
                :key="key"
                :label="key"
                v-for="(key, value) of type"
                :value="value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item style="float: right">
            <el-button type="primary" @click="search" :loading="btnload"
              >查询</el-button
            >
            <el-button @click="clear">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border>
          <el-table-column
            prop="userId"
            label="序号"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="account"
            label="用户"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="coinSymbol"
            label="提现金额"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="amount"
            label="手续费"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="amount"
            label="实际到账"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="amount"
            label="提现方式"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="amount"
            label="提现账号"
            align="center"
          ></el-table-column
          ><el-table-column prop="amount" label="提现账号" align="center">
            <template slot-scope="scoped">
              <el-button
                type="primary"
                @click="viewin(scoped.row)"
                size="medium"
                >查看</el-button
              >
            </template>
          </el-table-column>

          <el-table-column
            prop="createTime"
            label="提现时间"
            :formatter="handleTime"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="createTime"
            label="处理时间"
            :formatter="handleTime"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="createTime"
            label="处理人"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="medium" type="primary" @click="option(scope.row)"
                >处理</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="24">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="meta.requestedPage"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="meta.totalCount"
          style="float: right"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog title="提现方式详情" :visible.sync="dialogViewin" width="30%">
      <div>
        <p>
          <span>开户行：</span><span>{{ viewinDetails.bank }}</span>
        </p>
        <p v-show="viewinDetails.alipay">支付宝</p>
        <p>
          <span>账户名：</span><span>{{ viewinDetails.bank }}</span>
        </p>
        <p>
          <span>账号：</span><span>{{ viewinDetails.bank }}</span>
        </p>
        <p>
          <span>开户地址：</span><span>{{ viewinDetails.bank }}</span>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogViewin = false" type="primary">确认</el-button>
      </span>
    </el-dialog> <el-dialog title="转账提示" :visible.sync="dialogOption" width="30%">
      <div>
        <p>备注: 转账成功时请留空; 转账失败时填写失败说明</p>
       <el-input v-model="tips" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogOption = false" >取消</el-button>
        <el-button @click="submitOption" type="primary">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { mixin } from "@/utils/mix";
// import { getInjectWaterRecord, getCoinList2 } from "@/api/finance";
import dayjs from "dayjs";
export default {
  name: "order-details",
  // mixins: [mixin],
  data() {
    return {
      date: [],
      form: {},
      btnload: false,
      meta: {},
      tableData: [
        {
          userId: "1",
          account: "2",
        },
        {
          userId: "3",
          account: "2",
        },
        {
          userId: "10",
          account: "2",
        },
      ],
      type: {
        new: "银行卡",
        old: "支付宝",
        all: "",
      },
      dialogViewin: false,
      viewinDetails: {
        bank: "农业银行",
        account: "农业银行",
        name: "农业银行",
        site: "农业银行",
        alipay: true,
      },
      dialogOption:false,
      tips:""
    };
  },

  computed: {
    param() {
      return this.checkNull({
        ...this.form,
        startDate: this.date ? this.date[0] : null,
        endDate: this.date ? this.date[1] : null,
      });
    },
  },
  created() {
    // this.init();
    // getCoinList2().then((res) => {
    //   this.coins = res.data;
    // });
  },
  methods: {
    search() {
      this.param.page = 1;
      this.init(this.param);
    },
    clear() {
      this.form = {};
      this.date = [];
    },
    viewin(e) {
     this.viewinDetails=e
     this.dialogViewin=true
    },
    option(e){
        console.log(e)
        this.dialogOption=true

    },
    submitOption(){
        console.log(this.tips)
        this.dialogOption=false
    },
    handleCurrentChange(v) {
      this.param.page = v;
      this.init(this.param);
    },
    init(param = {}) {
      this.btnload = true;
      getInjectWaterRecord(param).then((res) => {
        this.tableData = res.data.items.map((e) => {
          let goods = e.goods;
          if (goods.length > 15) {
            goods = goods.slice(1, 15).concat("...");
          }
          return {
            ...e,
            goods,
            price: "￥" + e.price,
          };
        });
        this.meta = res.data.meta;
        this.btnload = false;
      });
    },
    handleTime(row, column, cellValue, index) {
      // console.log(cellValue);
      return dayjs(cellValue).format("'YYYY-MM-DD HH:mm");
    },
  },
};
</script>

<style>
</style>
