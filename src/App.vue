<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <StartPage />
    </div>
  </div>
</template>

<script>
import StartPage from "./components/start-page/StartPage.vue";

export default {
  name: "App",
  components: {
    StartPage,
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
