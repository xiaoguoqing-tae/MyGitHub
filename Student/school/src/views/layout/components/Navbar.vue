<template>
  <div>
    <van-nav-bar :title="getmsg.title" :style="{ background: getmsg.color }">
      <van-icon
        :style="{ visibility: getmsg.left ? '' : 'hidden' }"
        name="arrow-left"
        color="white"
        size="20"
        slot="left"
        @click="go()"
      />
      <van-icon
        :style="{ display: getmsg.right ? 'block' : 'none' }"
        name="share"
        color="white"
        size="20"
        slot="right"
      />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  computed: {
    getmsg() {
      return this.$route.meta;
    }
  },
  watch: {},
  methods: {
    go() {
      history.go(-1);
    }
  }
};
</script>
