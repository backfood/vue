<template>
  <div>
    <p style="marginBottom:20px">
      <el-button type="primary" @click="add">添加分类</el-button>
    </p>
    <el-row>
      <el-table :data="list" border>
        <el-table-column prop="classific" label="分类" align="center">
        </el-table-column>
        <el-table-column prop="explain" label="分类说明" align="center">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scoped">
            <el-button type="primary" @click="edit(scoped.row)">编辑</el-button>
            <el-button type="danger" @click="delt(scoped.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogDelte" width="30%">
      <div>确定要删除当前分类？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDelte = false">取 消</el-button>
        <el-button type="primary" @click="deleteSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          classific: "直播商品",
          explain: "低价购买一下专属商品即可获赠会员权益卡",
        },
        {
          classific: "直播商品",
          explain: "低价购买一下专属商品即可获赠会员权益卡",
        },
        {
          classific: "直播商品",
          explain: "低价购买一下专属商品即可获赠会员权益卡",
        },
        {
          classific: "直播商品",
          explain: "低价购买一下专属商品即可获赠会员权益卡",
        },
      ],
      temForm: {},
      dialogAdd: false,
      dialogDelte: false,
      editType: "add",
      editID: "",
      form: {},
    };
  },
  methods: {
    add() {
      this.dialogAdd = true;
      this.editType = "add";
    }, // 添加
    edit(e) {
      console.log(e);
      this.dialogAdd = true;
      this.editType = "edit";
    }, // 编辑
    delt(e) {
      this.dialogDelte = true;
    }, //删除
    addSubmit() {
      console.log(this.form);
      this.dialogAdd = false;
    }, // 编辑 添加
    deleteSubmit() {
      this.dialogDelte = false;
    },
  },
};
</script>

<style>
</style>