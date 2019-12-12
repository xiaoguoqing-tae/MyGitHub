<template>
  <div class="login">
    <div class="zt">校贝通</div>
    <van-cell-group>
      <van-field
        v-model="form.username"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button color="#FFA500" @click="submit">登录</van-button>
    <van-button color="#778899" @click="register">注册</van-button>
    <div class="com">校贝通资讯有限公司</div>
  </div>
</template>

<script>
import apis from "@/apis";
import { localStorage } from "@/storage";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      maintitle: "校贝通"
    };
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    async submit() {
      if (this.form.username == "") {
        this.$toast("请输入用户名");
        return false;
      }
      if (this.form.password == "") {
        this.$toast("请输入密码");
        return false;
      } else {
        await apis.login({ ...this.form }).then(res => {
          console.log(res);
          if (res.data.code == "error") {
            this.$toast("用户名或密码错误");
          } else {
            localStorage.saveToLocal("name", this.form.username);
            this.$router.push({ name: "home" });
          }
        });
      }
    },
    register() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>
