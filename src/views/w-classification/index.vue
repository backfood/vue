<template>
  <div>
    <div style="marginBottom:20px">
       <el-button type="primary" @click="add">添加分类</el-button>
    </div>
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
    <el-dialog
      :title="editType == 'add' ? '分类设置' : '添加分类'"
      :visible.sync="dialogAdd"
      width="30%"
    >
      <div>
        <el-form ref="form" :model="form" label-width="90px">
          <el-row>
            <div>
              <el-form-item
              label="分类名称"
              prop="name"
              :rules="[
                { required: true, message: '此项必填' },
                { max: 20, message: '限制20个字符' },
              ]"
            >
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            </div>
            <div>
              <el-form-item
              label="分类描述"
              prop="discri"
              :rules="[
                { required: true, message: '此项必填' },
                { max: 100, message: '限制100个字符' },
              ]"
            >
              <el-input v-model="form.discri" placeholder="请输入"></el-input>
            </el-form-item>
            </div>
            <div>
              <el-form-item
              label="排序"
              prop="sort"
              :rules="[
                { required: true, message: '此项必填' },
                { type: 'number', message: '排序值必须为数字' },
              ]"
            >
              <el-input
                v-model.number="form.sort"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            </div>
            <div>
              <el-form-item label="仅会员展示" prop="vip">
              <el-radio-group v-model="form.vip">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
              </el-radio-group>
            </el-form-item>
            </div>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="确认删除？"
      :visible.sync="dialogDelte"
      width="30%">
      <div>确认删除此项分类？</div>
      <div slot="footer">
        <el-button @click="dialogDelte = false">取 消</el-button>
        <el-button type="primary" @click="deltSubmit">确 定</el-button>
      </div>
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
      this.editID=e.id
      this.dialogAdd = true;
      this.editType = "edit";
    }, // 编辑
    delt(e) {
      this.editID=e.id
      this.dialogDelte = true;
    }, //删除
    deltSubmit(){
      this.dialogDelte = false;

    },
    addSubmit() {
      console.log(this.form);
      this.dialogAdd = false;
    }, // 编辑 添加
  },
};
</script>

<style>
</style>