<template>
  <div>
    <div class="w-100 mt-5 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px; overflow: auto"
        >
          <div class="mt-3 p-4 font-weight-bold" style="height: 10%">
            <div class="d-flex">
              <p class="ml-3">{{ $t("정보 저장이 완료되었습니다") }}</p>
            </div>
            <hr />
          </div>
          <div class="show">
            <div class="mt-4 pt-4 pl-4 pr-4">
              <p>
                {{ $t("새롭게 QR Code를 스캔하면") }}<br />
                {{ $t("저장된 정보를 확인할 수 있습니다") }}<br />
                <br />
                {{ $t("비밀번호를 통해서 입력된 정보를 초기화하고") }}<br />
                {{ $t("새롭게 입력할 수도 있습니다") }}<br />
                <br />
                {{ $t("비밀번호는 관리자도 알 수 없으니") }}<br />
                {{ $t("분실하지 않도록 주의해주세요") }}
              </p>
              <button @click="selfClose" class="illBtn2 closingBtn">
                {{ $t("창 닫기") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selfClose() {
      self.opener = self;
      window.close();
    },
  },
};
</script>

<style>
.closingBtn {
  text-align: center !important;
  margin-bottom: 0 !important;
  margin-top: 18rem !important;
  display: flex;
  justify-content: center;
}
</style>
