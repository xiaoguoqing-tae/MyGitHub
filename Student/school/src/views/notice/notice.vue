<template>
  <div class="notice">
    <Top></Top>
    <van-tabs type="card" color="#0ac0ee">
      <van-tab title="班级通知">
        <div
          class="card"
          v-for="(item, index) in classnotice"
          :key="index"
          @click="detail(item.id)"
        >
          <div class="top">
            <van-tag color="#7232dd">{{ item.type }}</van-tag>
            <span class="text">{{ item.title }}</span>
            <van-tag
              type="danger"
              :style="{ display: item.states == '未读' ? 'block' : 'none' }"
            >
              <span class="new">New</span>
            </van-tag>
          </div>
          <van-divider dashed />
          <div class="center">{{ item.content }}</div>
          <div class="bottom">
            <div>{{ item.date }}</div>
            <div :style="{ color: item.states == '未读' ? 'red' : 'black' }">
              {{ item.states }}
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="校园通知">
        <div
          class="card"
          v-for="(item, index) in schoolnotice"
          :key="index"
          @click="detail(item.id)"
        >
          <div class="top">
            <van-tag color="#7232dd">{{ item.type }}</van-tag>
            <span class="text">{{ item.title }}</span>
            <van-tag
              type="danger"
              :style="{ display: item.states == '未读' ? 'block' : 'none' }"
            >
              <span class="new">New</span>
            </van-tag>
          </div>
          <van-divider dashed />
          <div class="center">{{ item.content }}</div>
          <div class="bottom">
            <div>{{ item.date }}</div>
            <div :style="{ color: item.states == '未读' ? 'red' : 'black' }">
              {{ item.states }}
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="教务通知">
        <div
          class="card"
          v-for="(item, index) in edunotice"
          :key="index"
          @click="detail(item.id)"
        >
          <div class="top">
            <van-tag color="#7232dd">{{ item.type }}</van-tag>
            <span class="text">{{ item.title }}</span>
            <van-tag
              type="danger"
              :style="{
                display: item.states == '未读' ? 'block' : 'none'
              }"
            >
              <span class="new">New</span>
            </van-tag>
          </div>
          <van-divider dashed />
          <div class="center">{{ item.content }}</div>
          <div class="bottom">
            <div>{{ item.date }}</div>
            <div :style="{ color: item.states == '未读' ? 'red' : 'black' }">
              {{ item.states }}
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-button type="primary" size="large" @click="sent">发布</van-button>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
export default {
  data() {
    return {
      classnotice: [],
      schoolnotice: [],
      edunotice: [],
      did: ""
    };
  },
  created() {
    this.getclass();
    this.getschool();
    this.getedunotice();
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    async getclass() {
      await apis.notice({ type: "班级通知" }).then(res => {
        this.classnotice = res.data.reverse();
      });
    },
    async getschool() {
      await apis.notice({ type: "校园通知" }).then(res => {
        this.schoolnotice = res.data.reverse();
      });
    },
    async getedunotice() {
      await apis.notice({ type: "教务通知" }).then(res => {
        this.edunotice = res.data.reverse();
      });
    },
    detail(i) {
      this.did = i;
      apis.changestates({ did: this.did });
      this.$router.push({ name: "noticedetail", params: { did: this.did } });
    },
    sent() {
      this.$router.push({ name: "sentnotice" });
    }
  }
};
</script>
