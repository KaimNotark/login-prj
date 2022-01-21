<template>
  <div id="app">
    <PasswordInput />
  </div>
</template>

<script>
import PasswordInput from "./components/PasswordInput.vue";

export default {
  name: "App",
  components: {
    PasswordInput,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

@import "./stylesheets/variables.scss";
@import "./stylesheets/resets.scss";

$font-family-primary: "Roboto", "Verdana", "Arial", sans-serif;

#app {
  font-family: $font-family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
