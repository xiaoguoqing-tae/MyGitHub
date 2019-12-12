<template>
  <div class="store">
    <Top></Top>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item.src" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-card
      v-for="(item, index) in goods.goodsData"
      :key="index"
      :num="item.num"
      :price="item.price"
      :title="item.title"
      :thumb="item.image"
    >
      <div slot="footer">
        <van-button size="mini" color="red" @click="addGoods(index)"
          >增加</van-button
        >
        <van-button size="mini" @click="reduceGoods(index)">减少</van-button>
      </div>
    </van-card>
    <div class="pay">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button
          type="warning"
          :text="goods.totalPrice + '元'"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
import { mapState, mapGetters, mapMutations } from "vuex";
import { localStorage } from "@/storage";
export default {
  data() {
    return {
      images: [
        { src: require("../../assets/fruit1.jpg") },
        { src: require("../../assets/fruit2.jpg") },
        { src: require("../../assets/fruit3.jpg") },
        { src: require("../../assets/fruit4.jpg") }
      ],
      money: "",
      name: ""
    };
  },
  created() {},
  components: { Top },
  computed: {
    ...mapState(["goods"]),
    ...mapGetters(["totalPrice", "totalNum"])
  },
  watch: {},
  methods: {
    ...mapMutations(["reduceGoods", "addGoods"]),
    onClickButton() {
      this.name = localStorage.loadFromLocal("name");
      this.money = parseInt(localStorage.loadFromLocal("money"));
      this.money = this.money - this.goods.totalPrice;
      console.log(this.money);
      apis.recharge({ name: this.name, money: this.money });
      this.$toast("购买成功");
    }
  }
};
</script>
