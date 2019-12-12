<template>
  <div>
    <Top></Top>
    <van-image
      width="100%"
      height="10rem"
      fit="cover"
      src="https://www.logosc.cn/uploads/output/2019/05/29/Logosc_01559060411.jpg?t=1559060386"
    />
    <van-cell-group>
      <van-field
        label="充值金额"
        v-model="money"
        placeholder="请输入充值金额"
      />
    </van-cell-group>
    <van-button
      :style="{ width: '80%', margin: '20px' }"
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      @click="recharge"
      >充值</van-button
    >
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
import { localStorage } from "@/storage";
export default {
  data() {
    return {
      money: "",
      name: "",
      balance: ""
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    recharge() {
      this.name = localStorage.loadFromLocal("name");
      this.balance = localStorage.loadFromLocal("money");
      this.money = parseInt(this.money) + parseInt(this.balance);
      console.log(this.money);
      console.log(this.balance);
      apis.recharge({ money: this.money, name: this.name });
      this.$toast("充值成功");
      setTimeout(() => {
        this.$router.push({ name: "myinfo" });
      }, 1000);
    }
  }
};
</script>
