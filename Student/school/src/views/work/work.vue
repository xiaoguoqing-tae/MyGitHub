<template>
  <div class="work">
    <Top></Top>
    <van-tabs type="card" color="#0ac0ee">
      <van-tab title="已发布">
        <div
          class="card"
          v-for="(item, index) in worklist"
          :key="index"
          @click="detailwork(item.id)"
        >
          <div class="top">
            <van-tag mark>{{ item.course }}</van-tag>
            <span class="text">{{ item.title }}</span>
            <van-tag
              type="danger"
              :style="{ display: index == 0 ? 'block' : 'none' }"
            >
              <span class="new">New</span>
            </van-tag>
          </div>
          <van-divider dashed />
          <div class="center">{{ item.message }}</div>
          <div class="bottom">
            <div>{{ item.time }}</div>
            <div>
              详情
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发布"
        ><div class="card" v-for="(item, index) in waitlist" :key="index">
          <div class="top">
            <van-tag mark>{{ item.course }}</van-tag>
            <span class="text">{{ item.title }}</span>
            <van-tag
              type="danger"
              :style="{ display: index == 0 ? 'block' : 'none' }"
            >
              <span class="new">New</span>
            </van-tag>
          </div>
          <van-divider dashed />
          <div class="center">{{ item.message }}</div>
          <div class="bottom">
            <div>{{ item.time }}</div>
            <div>
              <van-button type="primary" size="small" @click="sentwait(item.id)"
                >发布作业</van-button
              >
              <van-button
                type="primary"
                size="small"
                @click="cancelwait(item.id)"
                >取消发布</van-button
              >
            </div>
          </div>
        </div>
        <div :style="{ display: waitlist.length == 0 ? 'block' : 'none' }">
          <img :style="{ width: '100%' }" src="../../assets/work.png" alt="" />
        </div>
      </van-tab>
    </van-tabs>
    <van-button type="primary" size="large" @click="sentwork"
      >发布作业</van-button
    >
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
export default {
  data() {
    return {
      worklist: [],
      waitlist: [],
      wid: ""
    };
  },
  created() {
    this.getwork();
    this.getwaitwork();
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    async getwork() {
      await apis.work().then(res => {
        this.worklist = res.data.reverse();
      });
    },
    async getwaitwork() {
      await apis.waitwork().then(res => {
        this.waitlist = res.data.reverse();
      });
    },
    async sentwait(wid) {
      await apis.gosentwork({ wid: wid }).then(res => {
        let obj = {
          bj: res.data[0].bj,
          title: res.data[0].title,
          course: res.data[0].course,
          message: res.data[0].message,
          remarks: res.data[0].remarks,
          time: res.data[0].time
        };
        apis.sentwork(obj);
        console.log(res.data);
      });
      await apis.delwaitwork({ wid: wid });
      this.$toast("发布成功");
      this.$router.go(0);
    },
    async cancelwait(wid) {
      await apis.delwaitwork({ wid: wid });
      this.$toast("已取消");
      this.$router.go(0);
    },
    sentwork() {
      this.$router.push({ name: "sentwork" });
    },
    detailwork(i) {
      this.wid = i;
      this.$router.push({ name: "detailwork", params: { wid: this.wid } });
    }
  }
};
</script>
