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

  data: () => ({
    user: {
      email: "",
      accessToken: "",
    },
  }),

  methods: {
    addFeedback({ email, password }) {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          this.user.email = data.user.email;
          this.user.accessToken = data.user.accessToken;
          this.saveToStorage(this.user);

          this.$router.push({ name: "start" }).catch(() => {});
        })
        .catch((error) => {
          console.log("addFeedback-firebase-error.message:", error.message);
          this.showErrorToast(error.code);
        });
    },

    makeToast(errorMessage) {
      this.$bvToast.toast(errorMessage, {
        title: "Ошибка",
        autoHideDelay: 5000,
        toaster: "b-toaster-bottom-center",
      });
    },

    showErrorToast(errorCode) {
      switch (errorCode) {
        case "auth/invalid-email":
          this.makeToast("E-mail не верный.");
          break;
        case "auth/user-not-found":
          this.makeToast("Нет пользователя с таким E-mail.");
          break;
        case "auth/wrong-password":
          this.makeToast("Пароль не верный.");
          break;
        default:
          this.makeToast("Пароль или E-mail не правельные.");
          break;
      }
    },

    saveToStorage({ email, accessToken }) {
      localStorage.email = email;
      localStorage.accessToken = accessToken;
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
