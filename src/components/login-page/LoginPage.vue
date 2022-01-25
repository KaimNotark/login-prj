<template>
  <div class="login-page-container">
    <p class="login-page-error-message">{{ errorMessage }}</p>
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

  data: () => ({
    errorMessage: "",
  }),

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
              this.errorMessage = "E-mail не верный.";
              break;
            case "auth/user-not-found":
              this.errorMessage = "Нет пользователя с таким E-mail.";
              break;
            case "auth/wrong-password":
              this.errorMessage = "Пароль не верный.";
              break;
            default:
              this.errorMessage = "Пароль или E-mail не правельные.";
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

.login-page-error-message {
  color: red;
}
</style>
