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
    errorMessage: "",

    user: {
      accessToken: "",
      email: "",
    },
  }),

  methods: {
    async addFeedback({ email, password }) {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          this.user.email = data.user.email;
          this.user.accessToken = data.user.accessToken;
          this.saveToStorage(this.user);

          this.$emit("addFeedback", data);
        })
        .catch((error) => {
          console.log("addFeedback-firebase-error.message:", error.message);

          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "E-mail не верный.";
              this.makeToast();
              break;
            case "auth/user-not-found":
              this.errorMessage = "Нет пользователя с таким E-mail.";
              this.makeToast();
              break;
            case "auth/wrong-password":
              this.errorMessage = "Пароль не верный.";
              this.makeToast();
              break;
            default:
              this.errorMessage = "Пароль или E-mail не правельные.";
              this.makeToast();
              break;
          }
        });
    },

    makeToast() {
      this.$bvToast.toast(this.errorMessage, {
        title: "Ошибка",
        autoHideDelay: 5000,
        toaster: "b-toaster-bottom-center",
      });
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
