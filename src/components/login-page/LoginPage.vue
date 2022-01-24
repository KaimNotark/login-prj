<template>
  <div class="login-page-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  name: "LoginPage",

  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/variables.scss";

.login-page-container {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
