<template>
  <div class="sentwork">
    <Top></Top>
    <van-field
      required
      clickable
      label="发布班级"
      :value="bj"
      placeholder="选择班级"
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
    <van-cell-group>
      <van-field
        label="课程名称"
        required
        v-model="course"
        placeholder="请输入课程名称"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        required
        label="作业名称"
        v-model="title"
        placeholder="请输入作业标题"
      />
    </van-cell-group>
    <div class="content">
      <van-cell-group>
        <van-field
          required
          v-model="message"
          rows="2"
          autosize
          label="作业内容"
          type="textarea"
          placeholder="请输入作业内容"
        />
      </van-cell-group>
    </div>
    <div class="imga">
      <p>图片</p>
      <van-uploader preview-size="50px" :after-read="afterRead" />
      <p>文件附件</p>
      <van-uploader preview-size="50px" :after-read="afterRead" />
    </div>
    <div class="remarks">
      <van-cell-group>
        <van-field required label="备注" v-model="remarks" />
      </van-cell-group>
    </div>
    <div class="time">
      <van-field
        required
        clickable
        label="完成时间"
        :value="time"
        placeholder="请选择完成时间"
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
    </div>
    <div class="btn">
      <van-button
        type="info"
        :style="{ margin: '10px', width: '45%' }"
        @click="sentwork"
        >立即发布</van-button
      >
      <van-button type="warning" :style="{ width: '45%' }" @click="sentwait"
        >稍后发布</van-button
      >
    </div>
  </div>
</template>

<script>
import Top from "../layout/components/Navbar";
import apis from "@/apis";
export default {
  data() {
    return {
      bj: "",
      showPicker: false,
      columns: ["五年一班", "五年二班", "五年三班", "五年四班"],
      title: "",
      message: "",
      remarks: "",
      course: "",
      minDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      time: "",
      show: false
    };
  },
  created() {},
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    onConfirm(value) {
      this.bj = value;
      this.showPicker = false;
    },
    afterRead(file) {
      console.log(file);
    },
    showdate() {
      this.show = true;
    },
    changedate() {
      this.changeDate = this.currentDate;
    },
    onConfirmdate() {
      this.time = this.timeFormat(this.currentDate);
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
    async sentwork() {
      if (
        this.title == "" ||
        this.bj == "" ||
        this.course == "" ||
        this.message == "" ||
        this.remarks == "" ||
        this.time == ""
      ) {
        this.$toast("星号内容为必填选项");
      } else {
        let obj = {
          bj: this.bj,
          title: this.title,
          course: this.course,
          message: this.message,
          remarks: this.remarks,
          time: this.time
        };
        await apis.sentwork(obj);
        this.$toast("发布成功");
        this.$router.push({ name: "work" });
      }
    },
    async sentwait() {
      if (
        this.title == "" ||
        this.bj == "" ||
        this.course == "" ||
        this.message == "" ||
        this.remarks == "" ||
        this.time == ""
      ) {
        this.$toast("星号内容为必填选项");
      } else {
        let obj = {
          bj: this.bj,
          title: this.title,
          course: this.course,
          message: this.message,
          remarks: this.remarks,
          time: this.time
        };
        await apis.sentwaitwork(obj);
        this.$toast("发布成功,请注意查看");
        this.$router.push({ name: "work" });
      }
    }
  }
};
</script>
