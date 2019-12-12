<template>
  <div class="mine">
    <div class="myinfo">
      <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>{{ getItem }}</span>
    </div>
    <div class="item pay">
      <van-icon name="balance-pay" /><span>余额:{{ pay }}元</span>
    </div>
    <div class="item" @click="money">
      <van-icon name="balance-pay" /><span>充值</span>
    </div>
    <div class="item"><van-icon name="video-o" /><span>小视频</span></div>
    <div class="item"><van-icon name="music-o" /><span>音乐推荐</span></div>
    <div class="item"><van-icon name="photo-o" /><span>我的相册</span></div>
    <div class="item"><van-icon name="hot-o" /><span>今日推荐</span></div>
    <div class="item set"><van-icon name="setting-o" /><span>设置</span></div>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      @click="exit"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import { Dialog } from "vant";
import { localStorage } from "@/storage";
import apis from "@/apis";
export default {
  data() {
    return {
      pay: "",
      name: ""
    };
  },
  created() {
    this.getmoney();
  },
  components: {},
  computed: {
    getItem() {
      return localStorage.loadFromLocal("name");
    }
  },
  watch: {},
  methods: {
    exit() {
      Dialog.confirm({
        message: "您确定要退出登录?"
      }).then(() => {
        localStorage.removeFromLocal("name");
        this.$toast("退出成功");
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 2000);
      });
    },
    money() {
      this.$router.push({ name: "recharge" });
    },
    getmoney() {
      this.name = localStorage.loadFromLocal("name");
      apis.pay({ name: this.name }).then(res => {
        this.pay = res.data[0].money;
        localStorage.saveToLocal("money", this.pay);
      });
    }
  }
};
</script>
