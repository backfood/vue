<template>
  <div>
      <table>
          <thead>{{title}}</thead>
          <tbody>
              <tr>
                  <td>gezi1</td>
              </tr>
          </tbody>
          <tfoot>
              底部
          </tfoot>
      </table>
      <button @click="click"></button>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            default:"标题默认",
            type:String
        }
    },
    name:"Sonvue",
    methods:{
        click(){
            this.$emit("sonemit","from son data")
        }
    }
}
</script>

<style>

</style>