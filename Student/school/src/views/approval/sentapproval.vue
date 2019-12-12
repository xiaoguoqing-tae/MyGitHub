<template>
  <div class="sentapproval">
    <Top></Top>
    <div class="top">
      <van-cell-group>
        <van-field required v-model="value" label="审批内容" />
        <van-divider />
        <van-field
          required
          v-model="message"
          rows="2"
          label="审批详情"
          type="textarea"
          maxlength="50"
        />
      </van-cell-group>
    </div>
    <div class="center">
      <p>图片</p>
      <van-uploader :after-read="afterRead" />
      <van-divider />
      <p>文件附件</p>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="bottom">
      <p>审批人</p>
      <van-uploader :after-read="afterRead" />
      <van-divider />
      <p>抄送人</p>
      <van-uploader :after-read="afterRead" />
    </div>
    <van-button @click="sent" type="info" size="large">发布审批</van-button>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
export default {
  name: "sentapproval",
  data() {
    return {
      value: "",
      message: ""
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    afterRead() {},
    sent() {}
  }
};
</script>
