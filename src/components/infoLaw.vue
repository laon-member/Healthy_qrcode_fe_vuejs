<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c;
                 overflow: auto;
                 width: calc(100% -40px);
                 margin: 20px auto;
                 background: #fff;
                 border-top: 4px solid #2e77ef !important;
                 box-shadow: 0px 2px 16px -4px rgba(0,0,0,0.2);"
        >
          <div class=" p-4 font-weight-bold" style="height: 10%">
            <div class="d-flex">
              <router-link to="/notInfoQR">
                <img
                  class="backimg"
                  src="https://www.flaticon.com/svg/static/icons/svg/61/61022.svg"
                  alt=""
                />
              </router-link>
              <p class="ml-3">{{ $t("개인정보보호정책") }}</p>
            </div>
            <hr />
          </div>
          <div class="show" style="width: 80%; margin: 0 auto;">
            <div class="mt-4 pt-4">
              <p class="LawInfo">
                제1조(개인정보의 처리목적) QRCODE은(는) 다음의 목적을 위하여
                개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
                이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한
                조치를 이행할 예정입니다.
                <br />
                <br />
                1. 홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스
                제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적
                본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세
                미만 아동의 개인정보 처리시 법정대리인의 동의여부 확인, 각종
                고지․통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
                <br />
                <br />
                2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서․청구서
                발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증,
                요금결제․정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
                <br />
                <br />
                3. 고충처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
                연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.
                <br />
                <br />
                4. 보호정책에 동의하는 순간부터 사용자가 쿠키를 사용할 수 있도록
                하는 것에 대해 동의하는 것으로 간주합니다. 만약 거부 시 서비스를
                더 이상 사용할 수 없습니다.
              </p>
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
.backimg {
  width: 25px;
  height: 25px;
}
.LawInfo {
  font-size: 14px;
  color: #555555;
  font-weight: 400;
}
</style>
