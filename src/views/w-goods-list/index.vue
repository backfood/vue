<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-form>
          <el-form-item>
            <el-button @click="option" type="primary">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border>
          <el-table-column prop="userId" label="商品图片" align="center">
            <template slot-scope="scoped">
              <el-image
                style="width: 100px; height: 100px"
                :src="scoped.row.url"
                :preview-src-list="[scoped.row.url]"
                fit="contain"
              ></el-image>
            </template>
            ></el-table-column
          >
          <el-table-column
            prop="商品编号"
            label="用户"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="coinSymbol"
            label="商品名称"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="amount"
            label="商品分类"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="amount"
            label="商品价格"
            align="center"
          ></el-table-column
          ><el-table-column
            prop="amount"
            label="商品状态"
            align="center"
          ></el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="medium"
                type="primary"
                @click="option(scope.row, 'down')"
                >下架</el-button
              >
              <el-button
                size="medium"
                type="primary"
                @click="option(scope.row, 'edit')"
                >编辑</el-button
              >
              <el-button
                size="medium"
                type="danger"
                @click="option(scope.row, 'delete')"
                >删除</el-button
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
    <el-dialog title="转账提示" :visible.sync="dialogDelete" width="30%">
      <div>
        <p>确认删除当前商品</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDelete = false">取消</el-button>
        <el-button @click="submitDelete" type="primary">确认</el-button>
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
      btnload: false,
      meta: {},
      tableData: [
        {
          userId: "1",
          account: "2",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          id: "2",
        },
        {
          userId: "3",
          account: "2",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

          id: "20",
        },
        {
          userId: "10",
          account: "2",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

          id: "8520",
        },
      ],
      dialogDelete: false,
      id: "",
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
    option(e, type) {
      this.id = e.id;
      let id = e.id;
      if (type == "down") {
        this.dialogDelete = true;
        // 下架的操作
      } else {
        this.$router.push({
          path: `/goods-list/${id}`,
        });
      }
      this.dialogDelete = true;
    },
    submitDelete() {
      console.log(this.id);
      this.dialogDelete = false;
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

<style scoped lang="less">
/deep/.el-image-viewer__canvas {
  .el-image-viewer__img {
    width: 300px;
    height: 300px;
  }
}

</style>
