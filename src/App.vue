<template>
  <div style="height: 100%;">
    <div id="body">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="m-auto navigator">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand"
            ><p class="logo">QRCODE</p></router-link
          >

          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto">
              <router-link
                to="/qrScan"
                class="nav-link"
                style="font-size: 14px; padding-left: 0; color:#2e77ef;"
              >
                {{ $t("QR코드 스캔") }}
              </router-link>
              <router-link style="font-size: 14px;" to="/" class="nav-link">
                {{ $t("뭐 넣을지 고민중") }}
              </router-link>
            </div>
            <form class="form-inline my-2 my-lg-0">
              <!-- <input type="text" :value="this.$store.state.Navbar.searchData" class="searchBox mr-sm-2 notShow">
                <button class="btnSearch my-2 my-sm-0 notShow" type="submit" @click="search">{{$t('검색')}}</button> -->
            </form>
            <router-link
              :class="this.$store.state.Navbar.logstatus"
              to="/adminLogin"
              style="text-decoration: none"
              >{{ $t("로그인") }}</router-link
            >
            <button
              :class="this.$store.state.Navbar.logClass"
              @click="logout"
              style="padding: 0"
            >
              {{ $t("로그아웃") }}
            </button>
            <button
              :class="this.$store.state.Navbar.logClass"
              @click="adminPage"
              style="text-decoration: none;"
            >
              {{ $t("관리자페이지") }}
            </button>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
    <div class="d-flex" style="align-items: end;">
      <footer style="width: 100%;">
        <nav
          class="d-flex"
          style="height: 70px; justify-content: space-around; height: 70px; background-color: #e8e8e8; align-items: center;"
        >
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>QRCODE</p>
          </div>
          <div>
            <select name="#" id="#" v-model="langue" @change="selectLang">
              <option value="ko">
                언어선택
              </option>
              <option value="ko">
                한국어
              </option>
              <option value="en">
                English
              </option>
              <option value="ja">
                日本語
              </option>
            </select>
          </div>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export default {
  created() {
    try {
      const tokenCheck = localStorage["jwt-token"];
      let locale = navigator.language || navigator.userLanguege;
      locale = locale.substring(0, 2);
      if (locale === "ko") {
        this.$i18n.locale = "ko";
      } else if (locale === "en") {
        this.$i18n.locale = "en";
      } else if (locale === "ja") {
        this.$i18n.locale = "ja";
      }

      if (tokenCheck !== null) {
        const token = localStorage.getItem("jwt-token");
        const formData = new FormData();
        formData.append("token", token);
        instance.post("/check_token", formData).then((res) => {
          if (res.data === true) {
            this.$store.state.Navbar.logClass = "lo show";
            this.$store.state.Navbar.logstatus = "lo notShow";
          } else {
            this.$store.state.Navbar.logClass = "lo notShow";
            this.$store.state.Navbar.logstatus = "lo notShow";
          }
        });
      } else {
        this.$store.state.Navbar.logstatus = "lo show";
        this.$store.state.Navbar.logClass = "lo notShow";
      }
    } catch (err) {
      console.log(err);
      if (err.name === "jwt malformed") {
        this.$store.state.Navbar.logstatus = "lo show";
        this.$store.state.Navbar.logClass = "lo notShow";
      }
    }
  },
  data() {
    return {
      langue: "언어선택",
    };
  },
  methods: {
    search() {},
    logout() {
      try {
        localStorage.removeItem("jwt-token");
        this.logstatus = "lo show";
        this.logClass = "lo notShow";
        location.href = "http://localhost:8080";
      } catch (err) {
        console.log(err);
      }
    },
    adminPage() {
      location.href = "http://localhost:8080/admin";
    },
    selectLang() {
      if (this.langue === "ko") {
        this.$i18n.locale = "ko";
      } else if (this.langue === "en") {
        this.$i18n.locale = "en";
      } else if (this.langue === "ja") {
        this.$i18n.locale = "ja";
      }
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#body {
  min-height: 100%;
}
.show {
  display: block;
}
.notShow {
  display: none;
}
.logo {
  margin-bottom: inherit;
  color: #2e77ef;
  font-weight: 600;
}
.lo {
  font-size: 14px;
  border: none;
  background-color: transparent;
  color: #2e77ef;
  cursor: pointer;
  margin-right: 1rem;
}
.lo:nth-of-type(2) {
  margin-right: 0;
}
.lo:focus {
  outline: none;
}
.navigator {
  display: flex;
  width: 75%;
}
.searchBox {
  width: 200px;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
}
.btnSearch {
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 30px;
  background-color: #2e77ef;
  color: white;
  animation: fade ease 3s;
  transition: ease 0.3s;
}
.btnSearch:hover {
  background-color: #346cc8;
  cursor: pointer;
}
.btnSearch:focus {
  outline: none;
}
@media screen and (max-width: 992px) {
  .navigator {
    display: block;
    width: 100%;
  }
  .logo {
    margin-left: 1rem;
  }
  .lo {
    margin-top: 10px;
    padding: 0;
  }
  .lo:nth-of-type(1) {
    margin-top: 0;
  }
}
</style>
