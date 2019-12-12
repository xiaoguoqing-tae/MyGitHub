<template>
  <div class="money">
    <Top></Top>
    <van-tabs type="card">
      <van-tab title="待缴费">内容1</van-tab>
      <van-tab title="已缴费">内容 2</van-tab>
      <van-tab title="过期缴费"
        ><div class="moneycard">
          <img src="../../assets/icon/过期.png" alt="" />
          <div class="cardItem" v-for="(item, index) in list" :key="index">
            <span class="title">{{ item.title }}:</span>
            <span class="content">{{ item.content }}</span>
            <van-divider dashed />
          </div></div
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
export default {
  data() {
    return {
      list: [
        { title: "缴费项目", content: "本学期住宿费" },
        { title: "缴费金额", content: "100元" },
        { title: "备注说明", content: "请尽快缴费" },
        { title: "截止时间", content: "2020-03-09" },
        { title: "友情提醒", content: "尽快联系班主任" }
      ]
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {}
};
</script>
