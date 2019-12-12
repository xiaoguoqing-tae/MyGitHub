<template>
  <div>
    <Top></Top>
    <div class="main">
      <van-cell-group>
        <van-field
          label="标题"
          required
          v-model="title"
          placeholder="请输入标题"
        />
        <van-field
          label="内容"
          required
          v-model="content"
          placeholder="请输入内容"
        />
        <van-field
          readonly
          clickable
          required
          label="类型"
          :value="type"
          placeholder="选择类型"
          @click="showPicker = true"
        />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-field
          required
          clickable
          label="时间"
          :value="date"
          placeholder="请选择发送时间"
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
      </van-cell-group>
    </div>
    <van-button
      :style="{ width: '90%', marginTop: '10px' }"
      type="info"
      @click="sentnotice"
      >发布</van-button
    >
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
export default {
  data() {
    return {
      title: "",
      content: "",
      type: "",
      showPicker: false,
      columns: ["班级通知", "校园通知", "教务通知"],
      minDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      date: "",
      show: false
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    onConfirm(type) {
      this.type = type;
      this.showPicker = false;
    },
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
    async sentnotice() {
      if (
        this.title == "" ||
        this.content == "" ||
        this.type == "" ||
        this.date == ""
      ) {
        this.$toast("星号内容不可为空");
      } else {
        let obj = {
          title: this.title,
          content: this.content,
          type: this.type,
          date: this.date
        };
        this.$toast("发布成功");
        await apis.writenotice(obj);
        setTimeout(() => {
          this.$router.push({ name: "notice" });
        }, 2000);
      }
    }
  }
};
</script>
