<template>
  <div>
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
  </div>
</template>

<script>
export default {
  beforeMount() {
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
  },
  methods: {},
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
</style>
