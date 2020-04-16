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
    name:"Sonvue"
}
</script>

<style>

</style>