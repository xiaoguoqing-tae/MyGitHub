<template>
  <div class="noticeDetail">
    <Top></Top>
    <user></user>
    <div class="usermsg" v-for="(item, index) in msg" :key="index">
      <span>{{ item.title }}</span>
      <img src="../../assets/ty.png" alt="" />
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
import user from "../layout/components/user";
export default {
  data() {
    return {
      msg: []
    };
  },
  created() {
    this.getmsg();
  },
  components: { user, Top },
  computed: {},
  watch: {},
  methods: {
    async getmsg() {
      await apis.detail({ did: this.$route.params.did }).then(res => {
        this.msg = res.data;
      });
    }
  }
};
</script>
