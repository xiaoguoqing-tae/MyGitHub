<template>
  <div class="check">
    <Top></Top>
    <div class="datepick">
      <ul>
        <li>
          <van-icon name="arrow-left" @click="pre" />
        </li>
        <li>{{ year }}年{{ month }}月</li>
        <li>
          <van-icon name="arrow" @click="next" />
        </li>
      </ul>
      <ul class="date" :style="{ height: hiddennum ? 'auto' : '45px' }">
        <van-icon
          name="arrow-down"
          @click="down()"
          :style="{ display: hiddennum ? 'none' : 'block' }"
        />
        <li v-for="(item, index) in datelist" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="state">
      <div>
        <van-circle
          v-model="currentRate"
          :rate="100"
          size="80px"
          text="40人"
          :color="gradientColor1"
          :stroke-width="150"
        />
        <div>未打卡</div>
      </div>
      <div>
        <van-circle
          v-model="currentRate"
          :rate="100"
          size="80px"
          text="25人"
          :color="gradientColor2"
          :stroke-width="150"
        />
        <div>迟到</div>
      </div>
      <div>
        <van-circle
          v-model="currentRate"
          :rate="100"
          size="80px"
          text="18人"
          :color="gradientColor3"
          :stroke-width="150"
        />
        <div>早退</div>
      </div>
    </div>

    <div class="echarts">
      <van-tabs type="card" color="#0066FF">
        <van-tab title="未打卡"></van-tab>
        <van-tab title="迟到"></van-tab>
        <van-tab title="早退"></van-tab>
      </van-tabs>
      <div id="main" style="width: 100%;height:250px"></div>
    </div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
export default {
  data() {
    return {
      year: "",
      month: "",
      datelist: "",
      active: false,
      currentRate: 100,
      activeNames: ["1"],
      hiddennum: "",
      gradientColor1: {
        "0%": "#33CC66",
        "100%": "#33FF66"
      },
      gradientColor2: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      },
      gradientColor3: {
        "0%": "#FFCC00",
        "100%": "#FFFF99"
      }
    };
  },
  created() {
    this.getpickdate();
    this.getdatelist();
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    getpickdate() {
      var MyDate = new Date();
      this.year = MyDate.getFullYear();
      this.month = MyDate.getMonth();
    },
    getdatelist() {
      if (this.year % 4 == 0) {
        if (this.month == 2) {
          console.log(1111);
          this.datelist = 29;
        } else if (
          this.month == 1 ||
          this.month == 3 ||
          this.month == 5 ||
          this.month == 7 ||
          this.month == 8 ||
          this.month == 10 ||
          this.month == 12
        ) {
          this.datelist = 31;
        } else {
          this.datelist = 30;
        }
      } else {
        if (this.month == 2) {
          this.datelist = 28;
        } else if (
          this.month == 1 ||
          this.month == 3 ||
          this.month == 5 ||
          this.month == 7 ||
          this.month == 8 ||
          this.month == 10 ||
          this.month == 12
        ) {
          this.datelist = 31;
        } else {
          this.datelist = 30;
        }
      }
    },
    pre() {
      this.month = this.month - 1;
      if (this.month == 0) {
        this.year = this.year - 1;
        this.month = 12;
      }
      this.getdatelist();
    },
    next() {
      this.month = this.month + 1;
      if (this.month == 13) {
        this.year = this.year + 1;
        this.month = 1;
      }
      this.getdatelist();
    },
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["", "第一周", "第二周", "第三周", "第四周", ""]
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 60,
          splitNumber: 4
        },
        series: [
          {
            data: [30, 20, 43, 50, 26, 19, 53],
            type: "line",
            smooth: true,
            areaStyle: {
              normal: { color: "#3366FF" }
            },
            itemStyle: {
              normal: { label: { show: true }, lineStyle: { color: "#3366FF" } }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    down() {
      let flag = 0;
      flag++;
      if (!flag % 2 == 0) {
        this.hiddennum = true;
      } else {
        this.hiddennum = false;
      }
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
