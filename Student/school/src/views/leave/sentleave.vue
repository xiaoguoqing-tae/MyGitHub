<template>
  <div class="sentleave">
    <Top></Top>
    <van-cell-group>
      <van-field
        required
        label="姓名"
        v-model="name"
        placeholder="请输入您的姓名"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="content"
        required
        rows="2"
        autosize
        label="请假原因"
        type="textarea"
        placeholder="请填写具体请假原因..."
      />
    </van-cell-group>
    <van-cell-group>
      <van-field :value="time" label="申请时间" disabled />
    </van-cell-group>
    <van-field
      required
      clickable
      label="到校时间"
      :value="date"
      placeholder="请选择截止时间"
      @click="showdate"
    />

    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @change="changedate"
        @confirm="onConfirmdate"
        @cancel="canceldate"
      />
    </van-popup>
    <button class="btn2" type="button" @click="sentleave">发送</button>
  </div>
</template>

<script>
import apis from "@/apis";
import Top from "../layout/components/Navbar";
export default {
  data() {
    return {
      time: "",
      name: "",
      content: "",
      minDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      date: "",
      show: false
    };
  },
  created() {
    var myDate = new Date();
    this.time = myDate.toLocaleDateString();
    console.log(this.time);
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    showdate() {
      this.show = true;
    },
    changedate() {
      this.changeDate = this.currentDate;
    },
    onConfirmdate() {
      this.date = this.timeFormat(this.currentDate);
      this.show = false;
    },
    canceldate() {
      this.show = false;
    },
    timeFormat(time) {
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "/" + month + "/" + day;
    },
    async sentleave() {
      let obj = {
        name: this.name,
        content: this.content,
        time: this.time,
        date: this.date,
        states: "待处理"
      };
      if (this.name == "" || this.content == "" || this.date == "") {
        this.$toast("星号内容不可为空");
      } else {
        await apis.sentleave(obj);
        this.$toast("发布成功");
        setTimeout(() => {
          this.$router.push({ name: "leave" });
        }, 2000);
      }
    }
  }
};
</script>
