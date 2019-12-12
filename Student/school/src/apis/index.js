import Axios from "@/utils/fetch";
import qs from "qs";
export default {
  login(data) {
    return Axios.post("http://localhost:3000/login", qs.stringify(data));
  },
  register(data) {
    return Axios.post("http://localhost:3000/register", qs.stringify(data));
  },
  notice(data) {
    return Axios.post("http://localhost:3000/notice", qs.stringify(data));
  },
  writenotice(data) {
    return Axios.post("http://localhost:3000/writenotice", qs.stringify(data));
  },
  changestates(data) {
    return Axios.post("http://localhost:3000/changestates", qs.stringify(data));
  },
  detail(data) {
    return Axios.post("http://localhost:3000/detail", qs.stringify(data));
  },
  work() {
    return Axios.get("http://localhost:3000/work");
  },
  waitwork() {
    return Axios.get("http://localhost:3000/waitwork");
  },
  detailwork(data) {
    return Axios.post("http://localhost:3000/detailwork", qs.stringify(data));
  },
  gosentwork(data) {
    return Axios.post("http://localhost:3000/gosentwork", qs.stringify(data));
  },
  delwaitwork(data) {
    return Axios.post("http://localhost:3000/delwaitwork", qs.stringify(data));
  },
  delsentwork(data) {
    return Axios.post("http://localhost:3000/delsentwork", qs.stringify(data));
  },
  sentwork(data) {
    return Axios.post("http://localhost:3000/sentwork", qs.stringify(data));
  },
  sentwaitwork(data) {
    return Axios.post("http://localhost:3000/sentwaitwork", qs.stringify(data));
  },
  sentnotify(data) {
    return Axios.post("http://localhost:3000/sentnotify", qs.stringify(data));
  },
  waitnotify(data) {
    return Axios.post("http://localhost:3000/waitnotify", qs.stringify(data));
  },
  getsentednotify() {
    return Axios.get("http://localhost:3000/getsentednotify");
  },
  getwaitnotify() {
    return Axios.get("http://localhost:3000/getwaitnotify");
  },
  notifyDetail(data) {
    return Axios.post("http://localhost:3000/notifyDetail", qs.stringify(data));
  },
  waitnotifyDetail(data) {
    return Axios.post(
      "http://localhost:3000/waitnotifyDetail",
      qs.stringify(data)
    );
  },
  delwaitnotify(data) {
    return Axios.post(
      "http://localhost:3000/delwaitnotify",
      qs.stringify(data)
    );
  },
  getleave(data) {
    return Axios.post("http://localhost:3000/getleave", qs.stringify(data));
  },
  sentleave(data) {
    return Axios.post("http://localhost:3000/sentleave", qs.stringify(data));
  },
  yesleave(data) {
    return Axios.post("http://localhost:3000/yesleave", qs.stringify(data));
  },
  noleave(data) {
    return Axios.post("http://localhost:3000/noleave", qs.stringify(data));
  },
  recharge(data) {
    return Axios.post("http://localhost:3000/recharge", qs.stringify(data));
  },
  pay(data) {
    return Axios.post("http://localhost:3000/pay", qs.stringify(data));
  }
};
