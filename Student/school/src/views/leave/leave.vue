<template>
  <div class="leave">
    <Top></Top>
    <van-tabs type="card">
      <van-tab title="已处理">
        <div class="leavecard">
          <div class="card" v-for="(item, index) in leaved" :key="index">
            <img
              class="agree"
              :style="{ display: item.result == '同意' ? 'block' : 'none' }"
              src="../../assets/icon/agree .png"
              alt=""
            />
            <img
              class="veto"
              :style="{ display: item.result == '否决' ? 'block' : 'none' }"
              src="../../assets/icon/veto.png"
              alt=""
            />
            <div class="cardItem">
              <span class="title">申请人:</span>
              <span class="content">{{ item.name }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">申请时间:</span>
              <span class="content">{{ item.date }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">到校时间:</span>
              <span class="content">{{ item.time }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">请假原因:</span>
              <span class="content">{{ item.content }}</span>
            </div>
            <van-divider dashed />
          </div>
        </div>
      </van-tab>
      <van-tab title="待处理"
        ><div class="leavecard">
          <div class="card" v-for="(item, index) in waitlist" :key="index">
            <div class="cardItem">
              <span class="title">申请人:</span>
              <span class="content">{{ item.name }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">申请时间:</span>
              <span class="content">{{ item.date }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">到校时间:</span>
              <span class="content">{{ item.time }}</span>
            </div>
            <van-divider dashed />
            <div class="cardItem">
              <span class="title">请假原因:</span>
              <span class="content">{{ item.content }}</span>
            </div>
            <van-divider dashed />
            <div class="btn">
              <van-button
                size="small"
                plain
                hairline
                type="primary"
                @click="yes(index)"
                >同意</van-button
              >
              <van-button
                size="small"
                plain
                hairline
                type="danger"
                @click="no(index)"
                >否决</van-button
              >
            </div>
          </div>
        </div></van-tab
      >
    </van-tabs>
    <van-button type="info" size="large" @click="sent">开始请假</van-button>
  </div>
</template>

<script>
import apis from "@/apis";
import Top from "../layout/components/Navbar";
export default {
  data() {
    return {
      waitlist: [],
      leaved: [],
      cid: "",
      result: ""
    };
  },
  created() {
    this.getleave();
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    sent() {
      this.$router.push({ name: "sentleave" });
    },
    async getleave() {
      await apis.getleave({ states: "待处理" }).then(res => {
        this.waitlist = res.data.reverse();
      });
      await apis.getleave({ states: "已处理" }).then(res => {
        this.leaved = res.data.reverse();
      });
    },
    async no(i) {
      this.cid = this.waitlist[i].id;
      await apis.noleave({ cid: this.cid });
      this.$router.go(0);
    },
    async yes(i) {
      this.cid = this.waitlist[i].id;
      await apis.yesleave({ cid: this.cid });
      this.$router.go(0);
    }
  }
};
</script>
