<template>
  <div class="home">
    <div class="info">
      <van-image
        round
        width="4rem"
        height="4rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="mymsg">
        <p>{{ getItem }}</p>
        <span>xx小学，班主任</span>
      </div>
      <div class="classnum">
        <p>任课班级5</p>
      </div>
    </div>
    <div class="gridup">
      <van-icon name="edit" />
      <p>常态事务</p>
    </div>
    <van-grid>
      <van-grid-item
        v-for="(item, index) in tableList1"
        :key="index"
        :to="item.to"
      >
        <img :src="item.imgurl" /><span>{{ item.text }}</span>
      </van-grid-item>
    </van-grid>
    <div class="gridup"><van-icon name="home-o" />班主任事务</div>
    <van-grid>
      <van-grid-item
        v-for="(item, index) in tableList2"
        :key="index"
        :text="item.text"
        :to="item.to"
      >
        <img :src="item.imgurl" /><span>{{ item.text }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { localStorage } from "@/storage";
export default {
  name: "home",
  data() {
    return {
      tableList1: [
        {
          imgurl: require("../../assets/icon/111.png"),
          text: "通知公告",
          to: "notice"
        },
        {
          imgurl: require("../../assets/icon/作业.png"),
          text: "学生作业",
          to: "work"
        },
        {
          imgurl: require("../../assets/icon/成绩.png"),
          text: "学生成绩",
          to: "result"
        },
        {
          imgurl: require("../../assets/icon/办审批.png"),
          text: "办公审批",
          to: "Approval"
        }
      ],
      tableList2: [
        {
          imgurl: require("../../assets/icon/通知公告.png"),
          text: "班级通知",
          to: "notify"
        },
        {
          imgurl: require("../../assets/icon/班级缴费.png"),
          text: "班级缴费",
          to: "money"
        },
        {
          imgurl: require("../../assets/icon/请假.png"),
          text: "班级请假",
          to: "leave"
        },
        {
          imgurl: require("../../assets/icon/考勤.png"),
          text: "班级考勤",
          to: "Check"
        },
        {
          imgurl: require("../../assets/icon/班级相册.png"),
          text: "班级相册",
          to: "picture"
        },
        {
          imgurl: require("../../assets/icon/课程.png"),
          text: "班级课程",
          to: "course"
        },
        {
          imgurl: require("../../assets/icon/定位.png"),
          text: "学生定位",
          to: "location"
        },
        {
          imgurl: require("../../assets/icon/学生求救.png"),
          text: "学生求救",
          to: "help"
        }
      ]
    };
  },
  created() {},
  components: {},
  computed: {
    getItem() {
      return localStorage.loadFromLocal("name");
    }
  },
  watch: {},
  methods: {}
};
</script>
