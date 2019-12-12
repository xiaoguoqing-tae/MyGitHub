<template>
  <div class="user">
    <van-image
      round
      width="80px"
      height="80px"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="info">
      <div>xx老师</div>
      <div>2019.09.10</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  background: white;
}
.van-image {
  padding: 10px;
}
.info {
  padding: 10px;
}
</style>
