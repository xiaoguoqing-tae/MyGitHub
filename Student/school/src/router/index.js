import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      showtabbar: 0
    },
    component: () => import("../views/login")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "注册",
      color: "#0066FF"
    },
    component: () => import("../views/register")
  },
  {
    path: "/index",
    name: "index",
    meta: {
      showtabbar: 1
    },
    component: () => import("../views/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          showtabbar: true,
          title: "校贝通首页",
          left: 1,
          right: 1,
          color: "#000000"
        },
        component: () => import("../views/home/index")
      }
    ]
  },
  {
    path: "/notice",
    name: "notice",
    meta: {
      title: "通知公告",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/notice/notice")
  },
  {
    path: "/noticedetail/:did",
    name: "noticedetail",
    meta: {
      title: "通知详情",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/notice/noticedetail")
  },
  {
    path: "sentnotice",
    name: "sentnotice",
    meta: {
      title: "通知详情",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/notice/sentnotice")
  },
  {
    path: "/work",
    name: "work",
    meta: {
      title: "学生作业",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/work/work")
  },
  {
    path: "/sentwork",
    name: "sentwork",
    meta: {
      title: "发布作业",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/work/sentwork")
  },
  {
    path: "/detailwork/:wid",
    name: "detailwork",
    meta: {
      title: "作业详情",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/work/detailwork")
  },
  {
    path: "/notify",
    name: "notify",
    meta: {
      title: "办公审批",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/notify/notify")
  },
  {
    path: "/approval",
    name: "approval",
    meta: {
      title: "办公审批",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/approval/approval")
  },
  {
    path: "/sentapproval",
    name: "sentapproval",
    meta: {
      title: "发起审批",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/approval/sentapproval")
  },

  {
    path: "/leave",
    name: "leave",
    meta: {
      title: "班级请假",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/leave/leave")
  },
  {
    path: "/sentleave",
    name: "sentleave",
    meta: {
      title: "写假条",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/leave/sentleave")
  },
  {
    path: "/money",
    name: "money",
    meta: {
      title: "班级缴费",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/money/money")
  },
  {
    path: "/course",
    name: "course",
    meta: {
      title: "班级课表",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/timetable/timetable")
  },
  {
    path: "/Check",
    name: "Check",
    meta: {
      title: "班级考勤",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/check/check")
  },
  {
    path: "/location",
    name: "location",
    meta: {
      title: "学生定位",
      color: "#0ac0ee",
      left: 1
    },
    component: () => import("../views/location/location")
  },
  {
    path: "/myinfo",
    name: "myinfo",
    meta: {
      showtabbar: true
    },
    component: () => import("../views/home/mine")
  },
  {
    path: "/recharge",
    name: "recharge",
    meta: {
      showtabbar: false,
      title: "充值中心",
      left: 1,
      color: "#0ac0ee"
    },
    component: () => import("../views/home/recharge")
  },
  {
    path: "/store",
    name: "store",
    meta: {
      showtabbar: true,
      title: "校贝商城",
      color: "#0ac0ee"
    },
    component: () => import("../views/home/store")
  }
];

const router = new VueRouter({
  routes
});

export default router;
