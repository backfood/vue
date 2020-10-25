<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" ref="logSearch" :model="form">
          <el-form-item label="用户ID">
            <el-input v-model="form.userId" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.account" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="币种">
            <el-select clearable v-model="form.coinId" placeholder="请选择">
              <el-option
                :key="e.id"
                :label="e.coinSymbol"
                v-for="e of coins"
                :value="e.id"
              ></el-option>
            </el-select>
          </el-form-item>
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
            label="编号"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="account"
            label="订单号"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="coinSymbol"
            label="购买人"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="amount"
            label="当前等级"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="createTime"
            label="购买时间"
            :formatter="handleTime"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="createTime"
            label="状态"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="createTime"
            label="邀请人"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="goods"
            label="购买产品"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="createTime"
            label="下单类型"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="createTime"
            label="价格"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="medium" type="primary" @click="viewin(scope.row)"
                >查看</el-button
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
      coins: [],
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
      this.$router.push({
        path: `/order-details/${e.userId}`,
      })

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
