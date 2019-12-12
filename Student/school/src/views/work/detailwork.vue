<template>
  <div class="detailwork">
    <Top></Top>
    <User></User>
    <div class="card" v-for="(item, index) in datalist" :key="index">
      <h3>{{ item.title }}</h3>
      <div class="content">{{ item.message }}</div>
      <van-divider dashed />
      <div class="bj">班级：{{ item.bj }}</div>
      <van-divider dashed />
      <div class="course">科目：{{ item.course }}</div>
      <van-divider dashed />
      <div class="remarks">备注：{{ item.remarks }}</div>
      <van-divider dashed />
      <div class="time">要求完成时间：{{ item.time }}</div>
    </div>
    <div class="other">
      <p :style="{ textAlign: 'left' }">相关附件：</p>
      <img
        :style="{ width: '40%', height: '80px', float: 'left' }"
        src="../../assets/ty.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import User from "../layout/components/user";
import apis from "@/apis";
export default {
  data() {
    return {
      datalist: []
    };
  },
  created() {
    this.getmsg();
  },
  components: { Top, User },
  computed: {},
  watch: {},
  methods: {
    async getmsg() {
      await apis.detailwork({ wid: this.$route.params.wid }).then(res => {
        this.datalist = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>
