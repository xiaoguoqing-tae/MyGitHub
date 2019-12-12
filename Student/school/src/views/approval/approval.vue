<template>
  <div>
    <Top></Top>
    <van-tabs type="card">
      <van-tab title="待审批"
        ><div class="wait">
          <img src="../../assets/icon/await.png" />
          <div class="approval">
            <div class="cardItem" v-for="(item, index) in list" :key="index">
              <span class="title">{{ item.title }}</span>
              <span class="content">{{ item.content }}</span>
              <van-divider dashed />
            </div>
            <div class="btn">
              <van-button size="small" plain hairline type="primary"
                >撤销</van-button
              >
              <van-button size="small" plain hairline type="info"
                >编辑</van-button
              >
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="审批中"
        ><div class="appro">
          <img src="../../assets/icon/ing.png" />
          <div class="approval">
            <div class="cardItem" v-for="(item, index) in list" :key="index">
              <span class="title">{{ item.title }}</span>
              <span class="content">{{ item.content }}</span>
              <van-divider dashed />
            </div>
            <div class="btn">
              <van-button size="small" plain hairline type="primary"
                >撤销</van-button
              >
              <van-button size="small" plain hairline type="info"
                >编辑</van-button
              >
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="已审批"
        ><div class="end">
          <img src="../../assets/icon/agree .png" />
          <div class="approval">
            <div class="cardItem" v-for="(item, index) in list" :key="index">
              <span class="title">{{ item.title }}</span>
              <span class="content">{{ item.content }}</span>
              <van-divider dashed />
            </div>
            <div class="btn">
              <van-button size="small" plain hairline type="primary"
                >撤销</van-button
              >
              <van-button size="small" plain hairline type="info"
                >编辑</van-button
              >
            </div>
          </div>
        </div></van-tab
      >
    </van-tabs>

    <van-button @click="sent" type="info" size="large">发布</van-button>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
export default {
  data() {
    return {
      list: [
        { title: "发起时间:", content: "2019-03-09" },
        { title: "审批内容:", content: "飞机票报销" },
        { title: "审批详情:", content: "请假去旅游" }
      ],
      active: "2"
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    sent() {
      this.$router.push({ name: "sentapproval" });
    }
  }
};
</script>
<style lang="scss" scoped></style>
