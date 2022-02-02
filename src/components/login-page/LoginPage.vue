<template>
  <div class="login-page-container">
    <LoginForm @addFeedback="addFeedback" @createAccount="createAccount" />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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
          this.saveToStorageAndOpenStartPage(data);
        })
        .catch((error) => {
          console.log("addFeedback-firebase-error.message:", error.code);
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
        case "auth/email-already-in-use":
          this.makeToast("Аккаунт с таким E-mail уже есть.");
          break;
        default:
          this.makeToast("Что-то пошло не так, попробуйте ещё раз.");
          break;
      }
    },

    saveToStorage({ email, accessToken }) {
      localStorage.email = email;
      localStorage.accessToken = accessToken;
    },

    createAccount({ email, password }) {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          this.saveToStorageAndOpenStartPage(data);
        })
        .catch((error) => {
          console.log("user not created--error.code", error.code);
          console.log("user not created--error.message", error.message);
          this.showErrorToast(error.code);
        });
    },

    saveToStorageAndOpenStartPage(data) {
      this.user.email = data.user.email;
      this.user.accessToken = data.user.accessToken;
      this.saveToStorage(this.user);

      if (this.$route.path != "/") {
        this.$router.push({ name: "start" });
      }
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
