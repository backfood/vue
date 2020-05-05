<template>
  <div id="myChart"></div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {
      diedata: []
    };
  },
  mounted() {
    this.draw();
    // this.$axios.get("https://www.echartsjs.com/examples/data/asset/data/aqi-beijing.json").then(res=>{
    //     console.log(res)
    // })
  },
  methods: {
    draw() {
      let that = this;

      let myChart = this.$echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
          text: "瞎写的",
          subtext: "副标题",
          textAlign: "auto",
          left: "center"
        },
        tooltip: {
          // trigger: "item"
          trigger: "axis"
        },
        toolbox: {
          left: "right",
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            startValue: "100"
          },
          {
            type: "inside"
          },
          {
            filterMode: "filter"
          }
        ],
        xAxis: {
          //   name: "X轴",
          data: that.stepXaxis(5, 200)
        },
        yAxis: {
          //   name: "X轴",
          //   type: "value",
        //   max: "dataMax",
        //   min: "dataMin", 
          splitLine: {
            show: false
          }
        },
        // visualMap: {
        //   top: 10,
        //   right: 10,
        //   pieces: [
        //     {
        //       gt: 0,
        //       lte: 100,
        //       color: "#096"
        //     },
        //     {
        //       gt: 100,
        //       lte: 200,
        //       color: "#ffde33"
        //     },
        //     {
        //       gt: 200,
        //       lte: 400,
        //       color: "#ff9933"
        //     },
        //     {
        //       gt: 400,
        //       lte: 600,
        //       color: "#660099"
        //     },
        //     {
        //       gt: 800,
        //       color: "#7e0023"
        //     }
        //   ],
        //   outOfRange: {
        //     color: "#999"
        //   }
        // },
        series: [
          {
            name: "成交",
            type: "line",
            stack: "总量",
            smooth: 0.7,
            lineStyle:{
                 color:'rgb(128, 128, 128)'
             },
            //smooth: true,
            data: that.dataBase(200, 1000),
            // markLine: {
            //   silent: true,
            //   data: [
            //     {
            //       yAxis: 100
            //     },
            //     {
            //       yAxis: 200
            //     },
            //     {
            //       yAxis: 400
            //     },
            //     {
            //       yAxis: 600
            //     },
            //     {
            //       yAxis: 800
            //     }
            //   ]
            // }
          },{
            name: "成交",
            type: "bar",
              areaStyle:{
                 color:"#000"
             },
           
            //smooth: true,
            data: that.dataBase(200, 1000),
            
          }
        ]
      });
    },
    dataBase(sum = 20, max = 50) {
      let arr = [];
      for (let i = 0; i < sum; i++) {
        arr.push((Math.random() * max).toFixed(2));
      }
      return arr;
    },
    stepXaxis(step = 2, sum = 100) {
      let arr = [];
      for (let i = 0; i < sum; i++) {
        arr.push(step * i);
      }
      return arr;
    },
    BTB(sum) {
      let arr = [];
      for (let i = 0; i < sum; i++) {
        arr.push(i);
      }
    }
  }
};
</script>

<style lang="less" scoped>
#myChart {
  width: 100%;
  height: 400px;
}
</style>