<template>
  <div>
    <el-button type="primary" @click="dialog">打开对话框</el-button>
    <!-- <el-button type="primary" @click="diaopen">通过open打开</el-button> -->
    <el-dialog
      title
      :visible.sync="dialogVisible"
      width="600"
      :before-close="dialogBeforeClose"
      ref="opendia"
      @open="diaopen"
    >
      <div></div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "eledialog",
  data() {
    return {
      dialogVisible: false
    };
  },
  mounted() {
    //   this.$refs.dialog.open();
  },
  methods: {
    dialog() {
      this.dialogVisible = true;
    },
    dialogBeforeClose(done) {
      //done执行表示确认关闭 相当于路由守卫的next()
      done();
    },
    diaopen() {
      this.$refs.opendia.open();
      console.log("open")
      //   this.$refs.opendia.opened();
    }
  }
};
</script>

<style>
</style>