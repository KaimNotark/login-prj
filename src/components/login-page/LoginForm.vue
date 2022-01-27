<template>
  <div class="login-form-container">
    <form
      class="form"
      id="formId"
      name="form"
      autocomplete="on"
      @submit.prevent.stop="onSubmit"
    >
      <div class="form-header">
        <h2 class="form-header__title">Авторизация</h2>
      </div>

      <hr class="form-devider" />

      <EmailInput @dataFromEmailInput="dataFromEmailInput" />
      <PasswordInput @dataFromPasswordInput="dataFromPasswordInput" />

      <hr class="form-devider" />

      <div class="form-footer">
        <button type="submit" class="form-footer__submit-button">
          Войти
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import EmailInput from "./EmailInput.vue";
import PasswordInput from "./PasswordInput.vue";

export default {
  name: "LoginForm",

  components: {
    EmailInput,
    PasswordInput,
  },

  data: () => ({
    isFormValid: false,
    isEmailValid: false,
    isPasswordValid: false,

    eMailValue: "",
    passwordValue: "",
  }),

  methods: {
    dataFromEmailInput(payload) {
      this.isEmailValid = payload.isValid;
      this.eMailValue = payload.value;
    },

    dataFromPasswordInput(payload) {
      this.isPasswordValid = payload.isValid;
      this.passwordValue = payload.value;
    },

    validation() {
      this.isFormValid = this.isEmailValid && this.isPasswordValid;
    },

    onSubmit(event) {
      this.validation();

      if (this.isFormValid) {
        const payload = {
          email: this.eMailValue,
          password: this.passwordValue,
        };

        this.$emit("addFeedback", payload);

        event.target.reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

%title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: $color-text-main;
  letter-spacing: 1px;
}

.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
}

.form {
  width: 560px;
  height: 280px;
  background-color: $color-white;
  padding: 0px 32px 0px 32px;
  border-radius: 16px;

  &-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    left: 0px;
    margin-top: 16px;
    background: #ffffff;
    border-radius: 16px 16px 0px 0px;

    &__title {
      left: 32px;
      top: 16px;
      letter-spacing: 0.3px;
      @extend %title;
    }
  }

  &-devider {
    margin-top: 19px;
    width: 560px;
    border: none;
    color: $color-form-devider;
    background-color: $color-form-devider;
    height: 1px;
    margin-left: -32px;
  }

  &-footer {
    display: flex;
    justify-content: flex-end;
    width: 496px;
    height: 68px;
    left: 0px;
    top: 588px;
    border-radius: 0px 0px 16px 16px;

    &__submit-button {
      width: 150px;
      height: 36px;
      margin: 0px -16px 16px 0px;
      border: solid 1px $color-button-background-blue;
      background: $color-button-background-blue;
      border-radius: 6px;
      color: #ffffff;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1px;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__submit-button:hover {
      border-color: #3c8e96;
      background-color: #3c8e96;
    }
    &__submit-button:focus {
      outline: none;
      border: 1px solid #3c8e96;
    }
    &__submit-button:active {
      border: 2px solid #53c6d1;
      background-color: #ffffff;
      color: #53c6d1;
    }
  }
}
</style>
