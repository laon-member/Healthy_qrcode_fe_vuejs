<template>
  <div>
    <section class="m-auto w-75 pt-1">
      <form>
        <div>
          <label for="#" class="err">{{ $store.state.Qrcode.qrErr }}</label>
          <qrcode-stream
            @decode="onDecode"
            class="camera"
            @init="onInit"
          ></qrcode-stream>
        </div>
        <br />
        <div class="d-flex" style="width:100%;">
          <div class="d-flex" style="width: 40%">
            <button class="btn btn-primary submitBtn" @click.prevent="onSubmit">
              확인하기
            </button>
            <router-link
              class="btn btn-danger ml-3 submitBtn"
              to="/"
              style="text-decoration: none;"
              >취소하기</router-link
            >
          </div>
          <div class="d-flex" style="width: 60%;">
            <small class="Qrstatus">{{
              $store.state.Qrcode.qrScanStatus
            }}</small>
          </div>
        </div>
        <!-- <p style="margin-bottom: 0;">{{$store.state.Qrcode.qrInfo}}</p> -->
      </form>
    </section>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export default {
  created() {
    this.$store.state.Qrcode.qrInfo = "";
    this.$store.state.Qrcode.qrScanStatus = "";
  },
  components: {
    QrcodeStream,
  },
  methods: {
    onDecode(result) {
      let result2 = result.split(":");
      this.$store.state.Qrcode.qrInfo = result2[3];
      this.checkQrInfo();
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.$store.state.Qrcode.qrErr =
            "카메라 사용에 대한 권한을 허용해 주세요.";
          console.log(this.error);
        } else if (error.name === "NotFoundError") {
          this.$store.state.Qrcode.qrErr =
            "이 컴퓨터에 카메라 모듈이 존재하지 않습니다.";
        } else if (error.name === "NotSupportedError") {
          this.$store.state.Qrcode.qrErr =
            "현재 사이트가 https를 사용하지 않아 카메라를 사용할 수 없습니다. 웹 관리자에게 문의해주세요.";
        } else if (error.name === "NotReadableError") {
          this.$store.state.Qrcode.qrErr =
            "다른 프로그램에서 이미 카메라를 사용중이에요. 카메라가 사용중인 프로그램을 닫아주세요.";
        } else if (error.name === "OverconstrainedError") {
          this.$store.state.Qrcode.qrErr =
            "설치된 카메라는 현재 이 웹사이트에서 사용이 불가능해요";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.$store.state.Qrcode.qrErr =
            "현재 사용중이신 브라우저가 카메라사용을 지원하지 않고 있어요! Chrome를 다운받아 주세요.";
        }
      }
    },
    onSubmit() {
      let qrInfo = this.$store.state.Qrcode.qrInfo;
      if (qrInfo === "") {
        alert(
          "QR코드가 인식되지 않았습니다.\n인식 확인메세지 확인 후 확인을 눌러주세요."
        );
      } else {
        const formData = new FormData();
        formData.append("qrInfo", qrInfo);
        instance.post("/check_Info", formData).then((res) => {
          if (res.data === false) {
            this.$router.push("/notQR"); //제작됨
          } else if (res.data === true) {
            this.$store.state.Info.qrlist = qrInfo;
            this.$router.push("/notInfoQR"); //첫페이지만 제작됨.
          } else if (res.data["person"].free === "yes") {
            this.$store.state.personInfo.freeInfo = res.data["person"].freeInfo;
            this.$router.push("/freeQR"); //제작되지 않음
          } else if (res.data["person"].free === "none") {
            this.$store.state.personInfo.bloodType =
              res.data["person"].bloodType;
            this.$store.state.personInfo.age = res.data["person"].age;
            this.$store.state.personInfo.sex = res.data["person"].sex;
            this.$store.state.personInfo.sergery = res.data["person"].sergery;
            this.$store.state.personInfo.ill = res.data["person"].ill;
            this.$store.state.personInfo.medicine = res.data["person"].medicine;
            this.$store.state.personInfo.alergy = res.data["person"].alergy;
            this.$store.state.personInfo.sideEff = res.data["person"].sideEff;
            this.$store.state.personInfo.number = res.data["person"].number;
            this.$store.state.personInfo.others = res.data["person"].others;
            this.$router.push("/nonFreeQR"); //제작되지 않음
          }
        });
      }
    },
    checkQrInfo() {
      let qrInfo = this.$store.state.Qrcode.qrInfo;
      console.log(qrInfo);
      if (qrInfo !== "") {
        this.$store.state.Qrcode.qrScanStatus = "인식되었습니다.";
      } else {
        return;
      }
    },
  },
};
</script>

<style>
.err {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  color: #e84d7d;
}
.Qrstatus {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: #30b53f;
  font-size: 18px;
}
@media screen and (max-width: 596px) {
  .submitBtn {
    font-size: 11px;
  }
}
</style>
