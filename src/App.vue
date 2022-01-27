<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <transition name="fade">
        <router-view />
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
  }),

  mounted() {
    this.getDataFromLocalStorage();
    this.isUserLogin();
    this.pageSelection();
  },

  methods: {
    addFeedback(data) {
      console.log("App.", data);
    },

    getDataFromLocalStorage() {
      this.user.email = localStorage.email;
      this.user.accessToken = localStorage.accessToken;
    },

    isUserLogin() {
      this.isLogin = this.user.accessToken === "" ? false : true;
    },

    pageSelection() {
      if (this.isLogin) {
        this.$router.push({ name: "start" }).catch(() => {});
      } else {
        this.$router.push({ name: "login" }).catch(() => {});
      }
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
