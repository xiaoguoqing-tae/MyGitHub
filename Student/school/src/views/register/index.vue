<template>
  <div class="register">
    <Top></Top>
    <van-cell-group>
      <van-field
        left-icon="manager"
        v-model="form.username"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        left-icon="lock"
        v-model="form.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      @click="register"
      >立即注册</van-button
    >
    <van-button color="#808080" @click="back">已有账号？</van-button>
    <div class="xy">*注册代表你同意<span>《校贝通协议》</span></div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
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
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    back() {
      this.$router.push({ name: "/" });
    },
    async register() {
      if (this.form.username == "") {
        this.$toast("请输入用户名");
        return false;
      }
      if (this.form.password == "") {
        this.$toast("请输入密码");
        return false;
      } else {
        await apis.register({ ...this.form }).then(res => {
          console.log(res);
          if (res.data.code == -1) {
            this.$toast("当前用户名已被注册");
          } else {
            this.$toast("注册成功");
            setTimeout(() => {
              this.$router.push({ name: "/" });
            }, 1500);
          }
        });
      }
    }
  }
};
</script>
