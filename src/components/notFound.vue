<template>
  <div>
    <div class="w-100 mt-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c; border-radius: 10px;"
        >
          <div class="mt-3 p-4 font-weight-bold" style="height: 20%">
            <p>{{ $t("등록된 페이지가(이) 아닌 것 같습니다") }}</p>
            <hr />
          </div>
          <div class="mt-3 pt-5 pl-4 pr-4" style="height: 30%">
            <p>
              {{ $t("존재하지 않는 페이지 이므로") }}<br />{{
                $t("다른 주소로 접속 해주세요")
              }}
            </p>
            <small style="color:#868686; font-weight: 400;">{{
              $t("등록된 페이지라면 관리자에게 문의해주세요")
            }}</small>
          </div>
          <div class="pr-4" style="height: 40%">
            <div class="w-100 h-100 d-flex align-items-end justify-content-end">
              <router-link to="/" class="btn btn-success homebtn">{{
                $t("홈으로 이동")
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notQR {
  width: 100%;
  display: flex;
  justify-content: center;
}
.homebtn {
  transition: ease 0.3s;
}
.notQRBox {
  width: 400px;
  height: 600px;
}
</style>
