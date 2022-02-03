<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <transition name="fade">
        <router-view @goToStart="goToStart" />
      </transition>
    </div>
  </div>
</template>
//

<script>
export default {
  name: "App",

  data: () => ({
    user: {
      email: "",
      accessToken: "",
    },

    isLogin: false,
    isStorageEmpty: true,
  }),

  mounted() {
    if (this.$route.path != "/404") this.goToStart();
  },

  methods: {
    getUserFromLocalStorage() {
      this.user.email = localStorage.email;
      this.user.accessToken = localStorage.accessToken;
    },

    checkUserLogin() {
      this.isLogin = this.user.accessToken === "" ? false : true;
    },

    checkStorage() {
      this.isStorageEmpty = this.user.accessToken === undefined ? true : false;
    },

    pageSelection() {
      if (this.isLogin) {
        if (this.$route.path != "/") this.$router.push({ name: "start" });
      } else {
        if (this.$route.path != "/login") this.$router.push({ name: "login" });
      }
    },

    goToStart() {
      this.getUserFromLocalStorage();
      this.checkStorage();

      if (this.isStorageEmpty) this.isLogin = false;
      else this.checkUserLogin();

      this.pageSelection();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

@import "./stylesheets/variables.scss";
@import "./stylesheets/resets.scss";

$font-family-primary: "Roboto", "Verdana", "Arial", sans-serif;

.wrapper *,
.wrapper *::before,
.wrapper *::after {
  box-sizing: border-box;
}

#app {
  font-family: $font-family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
