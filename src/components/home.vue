<template>
  <div @scroll="changePicture">
    <div class="w-100 bannerColor" style="height: 300px;">
      <div class="m-auto banner h-100 string-middle">
        <div class="d-flex">
          <p style="font-weight:600; color: #fff;">QRCODE</p>
          <p style="color:#2e77ef; font-weight:600">'s Emergency QR</p>
        </div>
        <p style="font-weight:600; font-size: 25px; color: #fff">
          {{ $t("QR코드로") }}<br />
          {{ $t("빠르고 새롭게 정보를 얻어보세요!") }}
        </p>
        <small style="color:#9d9d9d;">{{
          $t("DB도 암호화 되어 있습니다.")
        }}</small>
      </div>
    </div>
    <div class="CenterBanner">
      <div class="StickyBanner">
        <div class="Banner2">
          <div class="HomeImgSize">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/annie-spratt-CI6cc_5OoTU-unsplash.jpg"
              alt=""
              :class="desktopImg1"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/alexey-elfimov-nTYkr4p6B9w-unsplash.jpg"
              alt=""
              :class="desktopImg2"
            />
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/daniel-sessler-PRSm9_059_I-unsplash.jpg"
              alt=""
              :class="desktopImg3"
            />
          </div>
          <div class="Title">
            <div class="section1">
              <h4 class="FontBold sec1Title">
                QR로 새로운 의료정보를
                <br />
                탐색해보세요!
              </h4>
              <small style="color: #a5a5a5;">
                어디서나 빠르고 쉽게 탐색해보세요!
              </small>
              <p class="miniTitle">
                세상에서 아주 간단한 방법이면서 당신의 곁에서 항상 함께하는<br />요놈들
                QR이 되도록 하겠습니다.
              </p>
              <button class="Sec1 OnlyHomeBtn" @click.prevent="GoHome">
                지금 탐색하러 가기
              </button>
              <div class="mt-5 w-100 d-flex ButtonDown">
                <img
                  src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/arrow_tri.png"
                  alt=""
                  class="arrowIcon"
                  @click.prevent="TODeskImg2"
                />
              </div>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                병원에서 신속하게 사용이
                <br />
                가능합니다!
              </h4>
              <small style="color: #a5a5a5;">
                당신근처에서 신속한 의료정보를 만나보세요!
              </small>
              <p class="miniTitle">
                당신 근처에서 어디서나 QR로 찍고<br />신속하게 의료정보를 얻고
                빠르게 병을 치료해보세요!
              </p>
              <div class="mt-5 w-100 d-flex ButtonDown">
                <img
                  src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/arrow_tri.png"
                  alt=""
                  class="arrowIcon"
                  @click.prevent="TODeskImg3"
                />
              </div>
            </div>
            <div class="section2">
              <h4 class="FontBold sec1Title">
                쉽고 어디서나 간편하게!
                <br />
                경험해보세요!
              </h4>
              <small style="color: #a5a5a5;">
                미래의 비전을 보여줍니다.
              </small>
              <p class="miniTitle">
                한국에서도 QR만으로 가장 빠르게 무엇이든지 조회하고<br />빠른
                일처리를 경험해보세요!
              </p>
              <button class="Sec1 OnlyHomeBtn" @click.prevent="qrScan">
                QR코드 스캔하기
              </button>
              <div class="mt-5 w-100 d-flex ButtonDown">
                <img
                  src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/arrow_tri.png"
                  alt=""
                  class="arrowIconReverse"
                  @click.prevent="TODeskImg0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="MobileBanner">
        <div class="banner3">
          <div class="MSec1">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/annie-spratt-CI6cc_5OoTU-unsplash.jpg"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              QR로 새로운 의료정보를
              <br />
              탐색해보세요!
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              세상에서 아주 간단한 방법이면서 당신의 곁에서 항상 함께하는 요놈들
              QR이 되도록 하겠습니다. 무엇이든지 함께하는 QR과 함께 새로운
              미래를 만나보세요!
            </h4>
            <button class="MBSec1 OnlyHomeBtn" @click.prevent="GoHome">
              지금 탐색하러 가기
            </button>
          </div>
          <div class="MSec1">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/alexey-elfimov-nTYkr4p6B9w-unsplash.jpg"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              QR로 새로운 의료정보를
              <br />
              탐색해보세요!
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              당신 근처에서 어디서나 QR로 찍고 신속하게 의료정보를 얻고 빠르게
              병을 치료해보세요! 아마 매우 좋아질 거에요!
            </h4>
            <button class="MBSec1 OnlyHomeBtn" @click.prevent="AdminLogin">
              관리자로 로그인
            </button>
          </div>
          <div class="MSec1 mb-5">
            <img
              src="https://www.sequence9.com/server//var/NewQrcode/uploads/Icons/daniel-sessler-PRSm9_059_I-unsplash.jpg"
              alt=""
              class="ImgSize2"
            />
            <h3 class="mt-4 homeColor" style="font-weight: 600;">
              QR로 새로운 의료정보를
              <br />
              탐색해보세요!
            </h3>
            <h4 class="mt-3" style="font-weight: 600; color: #a9a9a9;">
              한국에서도 QR만으로 가장 빠르게 무엇이든지 조회하고<br />빠른
              일처리로 완벽하게 일을 끝마쳐 보세요! 가장 빠르게 끝나는 당신이 될
              거에요.
            </h4>
            <button class="MBSec1 OnlyHomeBtn" @click.prevent="qrScan">
              QR코드 스캔하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$t(this.$router.name);
    },
  },
  data() {
    return {
      scrollPosition: null,
      desktopImg1: "ImgSize visi-v",
      desktopImg2: "ImgSize visi-h",
      desktopImg3: "ImgSize visi-h",
    };
  },
  created() {},
  beforeMount() {
    this.$store.state.Navbar.Toggle =
      "Visible navbar navbar-expand-lg navbar-light bg-light";
    this.$store.state.personInfo.bloodType = "";
    this.$store.state.personInfo.age = "";
    this.$store.state.personInfo.sex = "";
    this.$store.state.personInfo.sergery = "";
    this.$store.state.personInfo.ill = "";
    this.$store.state.personInfo.medicine = "";
    this.$store.state.personInfo.alergy = "";
    this.$store.state.personInfo.sideEff = "";
    this.$store.state.personInfo.number = "";
    this.$store.state.personInfo.others = "";
    this.$store.state.personInfo.freeInfo = "";
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    GoHome() {
      this.$router.go(this.$router.currentRoute);
    },
    AdminLogin() {
      this.$router.push("/adminLogin");
    },
    qrScan() {
      this.$router.push("/qrScan");
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.changePicture();
    },
    changePicture() {
      if (this.scrollPosition < 1193) {
        this.desktopImg1 = "ImgSize visi-v";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-h";
      } else if (this.scrollPosition > 1193) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-v";
        this.desktopImg3 = "ImgSize visi-h";
      }
      if (this.scrollPosition > 2263) {
        this.desktopImg1 = "ImgSize visi-h";
        this.desktopImg2 = "ImgSize visi-h";
        this.desktopImg3 = "ImgSize visi-v";
      }
    },
    TODeskImg2() {
      window.scrollTo({ top: "1883", behavior: "smooth" });
    },
    TODeskImg3() {
      window.scrollTo({ top: "3021", behavior: "smooth" });
    },
    TODeskImg0() {
      window.scrollTo({ top: "0", behavior: "smooth" });
    },
  },
  destory() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.bannerColor {
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-image: url("./img/banner.png") !important;
  background-size: 100% !important;
  background-position: center !important;
  transition: all cubic-bezier(0.34, 0.06, 0.01, 1) 2s !important;
}

.bannerColor:hover {
  background-image: url("./img/banner.png") !important;
  background-size: 130% auto !important;
}

.banner {
  width: 70% !important;
}

.choice {
  width: 70% !important;
}

.choice-list {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}

.string-middle {
  padding-top: 5rem !important;
}

.FontBold {
  font-weight: 700;
}

.HomeImgSize {
  width: 800px;
  height: 500px;
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 250px;
  margin-top: 150px;
  box-shadow: 0 0 54px 0 rgba(0, 0, 0, 0.2);
  border-radius: 30px;
}
.ImgSize {
  width: 800px;
  height: 600px;
  z-index: 1;
  position: absolute;
}
.ImgSize:nth-of-type(2) {
  z-index: 2;
}
.ImgSize:nth-of-type(3) {
  z-index: 3;
}
.Banner2 {
  display: flex;
}
.Title {
  margin-top: 40rem;
  margin-left: 2rem;
  height: 2830px;
}
.section2 {
  margin-top: 50rem;
}
.StickyBanner {
  width: 75%;
}
.CenterBanner {
  display: flex;
  width: 100%;
  justify-content: center;
}
.miniTitle {
  margin-top: 1rem;
  font-size: 15px;
  color: #121212;
}
.Sec1 {
  margin-top: 5rem;
}
.MSec1 {
  margin-top: 4rem;
}
.OnlyHomeBtn {
  padding: 20px;
  display: flex;
  align-items: center;
  border: none;
  height: 40px;
  background-color: #000b30;
  border-radius: 10px;
  color: white;
}
.OnlyHomeBtn:hover {
  background-color: #1f3a94;
}
.MobileBanner {
  width: 75%;
  display: none;
}
.ImgSize2 {
  width: 100%;
  height: 300px;
}
.homeColor {
  background: linear-gradient(-45deg, #6b5f50, #5b6c87, #a67358);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.arrowIcon {
  width: 20px;
  height: 20px;
}
.ButtonDown {
  justify-content: flex-end;
  cursor: pointer;
}
.arrowIconReverse {
  width: 20px;
  height: 20px;
  transform: rotate(-180deg);
}
@media screen and (max-width: 992px) {
  .HomeImgSize {
    width: 300px;
    height: 200px;
  }
  .ImgSize {
    width: 300px;
    height: 200px;
    z-index: 1;
  }
  .sec1Title {
    font-size: 18px;
  }
  .MobileBanner {
    display: block;
  }
  .StickyBanner {
    display: none;
  }
}
</style>
