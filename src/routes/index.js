import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import adminLogin from "@/components/adminPage/adminLogin";
import UpdateAccount from "@/components/adminPage/UpdateAccount";
import qrScan from "@/components/qrScan";
import notQR from "@/components/notQR";
import NewQR from "@/components/NewQR";
import Me from "@/components/adminPage/Me";
import UserInfo from "@/components/UserInfo";
import InfoLaw from "@/components/infoLaw";
import emQR from "@/components/emQR";
import freeQR from "@/components/freeQR";
import QRsucces from "@/components/QRsucces";
import reset from "@/components/reset";
import freeInfo from "@/components/UserInfoFree";
import NotFound from "@/components/notFound";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "당신의 곁에있는 QRCODE",
      },
    },
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: adminLogin,
      meta: {
        title: "QRCODE 관리자 로그인",
      },
    },
    {
      path: "/qrScan",
      name: "qrScan",
      component: qrScan,
      meta: {
        title: "QRCODE 스캔",
      },
    },
    {
      path: "/notQR",
      name: "notQR",
      component: notQR,
      meta: {
        title: "QRCODE오류",
      },
    },
    {
      path: "/notInfoQR",
      name: "notInfoQR",
      component: NewQR,
      meta: {
        title: "QRCODE 정보등록",
      },
    },
    {
      path: "/admin",
      name: "adminPage",
      component: Me,
      meta: {
        title: "QRCODE 관리자",
      },
    },
    {
      path: "/qrlist/:id",
      name: "UserInfo",
      component: UserInfo,
      props: true,
      meta: {
        title: "QRCODE 응급정보",
      },
    },
    {
      path: "/infoLaw",
      name: "InfoLaw",
      component: InfoLaw,
      meta: {
        title: "QRCODE 개인정보보호정책",
      },
    },
    {
      path: "/emQR",
      name: "emQR",
      component: emQR,
      meta: {
        title: "QRCODE 응급정보입력",
      },
    },
    {
      path: "/freeQR",
      name: "freeQR",
      component: freeQR,
      meta: {
        title: "QRCODE 자유정보입력",
      },
    },
    {
      path: "/QRsucces",
      name: "QRsucces",
      component: QRsucces,
      meta: {
        title: "QRCODE",
      },
    },
    {
      path: "/reset",
      name: "reset",
      component: reset,
      meta: {
        title: "QRCODE 초기화",
      },
    },
    {
      path: "/UpdateAccount",
      name: "UpdateAccount",
      component: UpdateAccount,
      meta: {
        title: "QRCODE 관리자 계정 수정",
      },
    },
    {
      path: "/freeInfo",
      name: "freeInfo",
      component: freeInfo,
      meta: {
        title: "QRCODE 자유정보",
      },
    },
    {
      path: "/notFound",
      name: "notFound",
      component: NotFound,
      meta: {
        title: "QRCODE 존재하지 않는 페이지",
      },
    },
    {
      path: "/*",
      name: "notFound",
      component: NotFound,
      meta: {
        title: "QRCODE 존재하지 않는 페이지",
      },
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
