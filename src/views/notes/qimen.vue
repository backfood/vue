<template>
  <div>
    <div>
      <h1>奇门起局步骤(按时家奇门起局)</h1>
      <div class="suber-text">
        <h2>1 定局方法</h2>
        <div class="text-value">
          <span>
            （定局可以直接查表，也可以推算出来）
            <br />根据二十四节气可确定用遁甲几局，一年有二十四个节气，每个节气有上中下三元
            <br />一天有十二个甲子，五天有六十个甲子
            <br />夏至后采用阳遁，冬至后采用阴遁
            <br />排四柱
            <br />2006 5 23 19 45
            <br />四柱为 丙戌 癸巳 壬子 庚戌
            <br />局数取 （年支序数+月数+时支序数）/9 整除取9
            <br />戌为11 四月二十六 4+26 时支戌为11
            <br />相加%9=7 因为是夏至前 故为阳遁 故阳遁7局
            <br />这种推算出来的不太对
          </span>
        </div>
        <div>
          <strong>阳遁</strong>
          <p>
            <strong>冬至、惊蛰一七四，小寒二八五，大寒、春分三九六，雨水九六三，</strong>
          </p>
          <p>
            <span>
              <strong>清明、立夏四一七，立春八五二，谷雨、小满五二八，芒种六三九。</strong>
            </span>
          </p>
          <p>
            <span>
              <strong>阴遁：</strong>
            </span>
          </p>
          <p>
            <span>
              <strong>夏至、白露九三六，小暑八二五，大暑、秋分七一四，立秋二五八，</strong>
            </span>
          </p>
          <p>
            <span>
              <strong>寒露、立冬六九三，处暑一四七，霜降、小雪五八二，大雪四七一。</strong>
            </span>
          </p>
          <p>即冬至、惊蛰的上元为阳遁一局，中元为阳遁七局，下元为阳遁四局；其它以此类推。</p>
          <p>按照这个方法，可以是阳遁还是阴遁，确定后按照 1戊2己3庚4辛5壬6癸7丁8丙9乙 的顺序排入九宫格</p>
          <p>查旬首 按时辰的天干地支查旬首 旬首是以甲开头的那一列，如戊戌旬首为甲午癸酉为甲子，甲子为甲子</p>
        </div>
      </div>
      <div>
        <canvas id="myCanvas" width="600" height="500"></canvas>
      </div>
      <div>12345</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qimen",
  data() {
    return {
      tiangan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
      dizhi: [
        "子",
        "丑",
        "寅",
        "卯",
        "辰",
        "巳",
        "午",
        "未",
        "申",
        "酉",
        "戌",
        "亥"
      ]
    };
  },
  mounted() {
    this.jiazi();
  },
  methods: {
    //画60甲子
    jiazi() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      for (let i = 0; i <= 10; i++) {
        ctx.moveTo(50 * i, 0);
        ctx.lineTo(50 * i, 300);
        ctx.stroke();
      }
      for (let j = 0; j <= 6; j++) {
        ctx.moveTo(0, 50 * j);
        ctx.lineTo(500, 50 * j);
        ctx.stroke();
      }
      ctx.font = "18px bold 黑体";
      // 设置颜色
      ctx.fillStyle = "#000000";
      // 设置水平对齐方式
      ctx.textAlign = "center";
      // 设置垂直对齐方式
      ctx.textBaseline = "middle";
      // ctx.fillText("甲子",25,25)
      // ctx.fillText("甲子",75,25)
      // ctx.fillText("甲子",50,25)
      // ctx.fillText("甲子",50,50)

      let k = 0;

      for (let j = 0; j < 6; j++) {
        for (let i = 0; i < 10; i++) {
          ctx.fillText(
            this.tiangan[i] + " " + this.dizhi[k],
            i * 50 + 25,
            j * 50 + 25
          );
          ++k;
          if (k >= 12) k = 0;
        }
      }
    }
    //排二十四节气定局
  }
};
</script>
<style lang="less" scoped>
h1 {
  text-align: left;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bolder;
}
.suber-text {
  font-size: 16px;
  text-align: center;
  h2 {
    float: left;
    padding-left: 30px;
    font-size: 18px;
  }
  .text-value {
    width: 80%;
  }
}
#myCanvas {
}
</style>