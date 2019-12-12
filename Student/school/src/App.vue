<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="currentItem" v-show="getshowtabber">
      <van-tabbar-item
        v-for="(item, index) in iconlist"
        :key="index"
        :name="item.name"
        :to="item.name"
        ><img :src="item.imgurl" />
        <span>{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: "home",
      iconlist: [
        {
          routername: "home",
          title: "首页",
          name: "home",
          imgurl: require("./assets/icon/home.png")
        },
        {
          routername: "chart",
          title: "家校交流",
          name: "chart",
          imgurl: require("./assets/icon/交流.png")
        },
        {
          routername: "store",
          title: "商城",
          name: "store",
          imgurl: require("./assets/icon/商城.png")
        },
        {
          routername: "myinfo",
          title: "个人中心",
          name: "myinfo",
          imgurl: require("./assets/icon/我的.png")
        }
      ]
    };
  },
  computed: {
    getshowtabber() {
      return this.$route.meta.showtabbar;
    }
  },
  created() {}
};
</script>

<style lang="scss">
@import "./styles/style";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 25px;
}
.van-tabbar-item__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
