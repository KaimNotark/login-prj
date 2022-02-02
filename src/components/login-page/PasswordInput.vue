<template>
  <div class="password-input-container">
    <label class="password-input__label">
      <ValidationProvider
        class="password-input__validator"
        name="ПАРОЛЬ"
        ref="provider"
        v-slot="{ valid, errors }"
        :bails="false"
        :rules="{
          required: true,
          email: false,
          min: 6,
          max: 20,
        }"
      >
        <!-- mode="lazy" -->
        <span class="password-input__errors-text" :class="`__is-${valid}`">{{
          errors[0]
        }}</span>

        <input
          class="password-input__input"
          v-model="value"
          inputTitle="password"
          inputPattern=""
          type="password"
          name="password"
          maxlength="20"
          autocomplete="off"
          placeholder="Введите пароль"
          required
          spellcheck="false"
          @change="changeInput()"
          value=""
        />
      </ValidationProvider>
    </label>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { localize } from "vee-validate";
import ru from "vee-validate/dist/locale/ru.json";
// install rules and localization vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize("ru", ru);

export default {
  name: "PasswordInput",

  components: {
    ValidationProvider,
  },

  data: () => ({
    payloadPassword: {
      value: "",
      isValid: false,
    },

    value: "",
  }),

  methods: {
    changeInput() {
      this.payloadPassword.value = this.value;
      this.payloadPassword.isValid = this.$refs.provider.flags.valid;

      this.$emit("dataFromPasswordInput", this.payloadPassword);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/variables.scss";
@import "../../stylesheets/resets.scss";

%text-input {
  color: $color-text-main;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

%input {
  height: 35px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  border: 1px solid $color-input-focus;
}

.password-input {
  &-container {
    margin-top: 1px;
  }

  &__label {
    display: flex;
    flex-direction: column;
  }

  &__errors-text {
    display: block;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 3px;
    height: 12px;
  }

  &__input {
    @extend %text-input;
    @extend %input;
    width: 400px;
  }
}

// change text color by placeholder
::-webkit-input-placeholder {
  /* Chrome */
  color: $color-text-light;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: $color-text-light;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: $color-text-light;
  opacity: 1;
}
:-moz-placeholder {
  /* Firefox 4 - 18 */
  color: $color-text-light;
  opacity: 1;
}

// change background color by autofill
@-webkit-keyframes autofill {
  to {
    color: $color-text-main;
    background-color: $color-input-background;
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
  -webkit-box-shadow: inset 0 0 0 10em $color-input-background !important;
}

.__is-true {
  color: green;
}
.__is-false {
  color: red;
}
</style>
