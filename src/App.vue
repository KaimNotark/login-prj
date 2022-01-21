<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <LoginPage />
    </div>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";

export default {
  name: "App",
  components: {
    LoginPage,
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
</style>
