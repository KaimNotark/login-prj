<template>
  <div class="login-page-container">
    <LoginForm @addFeedback="addFeedback" />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginPage",

  components: {
    LoginForm,
  },

  methods: {
    async addFeedback(payload) {
      console.log("LoginPage--addFeedback-RUN", payload);

      const auth = getAuth();

      await signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((data) => {
          console.log("addFeedback-firebase-Signed in:", data);

          this.$emit("addFeedback", data);
        })
        .catch((error) => {
          console.log("addFeedback-firebase-error.message:", error.message);

          switch (error.code) {
            case "auth/invalid-email":
              console.log("E-mail не верный.");
              break;
            case "auth/user-not-found":
              console.log("Нет пользователя с таким E-mail.");
              break;
            case "auth/wrong-password":
              console.log("Пароль не верный.");
              break;
            default:
              console.log("Пароль или E-mail не правельные.");
              break;
          }
        });
    },
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
