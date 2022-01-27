<template>
  <div class="start-page-container">
    <header class="header">
      <div class="header-container">
        <p class="header-text">
          Пользователь:
          <span class="header-text__word __green" v-if="!isLogin">{{
            email
          }}</span>
          <span class="header-text__word __red" v-if="isLogin"
            >Отсутствует</span
          >
        </p>
        <button class="header-button" @click="logout" v-if="!isLogin">
          Выйти
        </button>
        <button
          class="header-button"
          @click="$router.push({ name: 'login' })"
          v-if="isLogin"
        >
          Войти
        </button>
      </div>
    </header>

    <main class="main">
      <div class="main-container">
        <p class="main-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga
          asperiores quo necessitatibus accusantium facilis consectetur
          consequuntur, cum distinctio nam adipisci dicta quos reiciendis rem
          libero et molestiae aut aliquid.
        </p>
      </div>
    </main>

    <footer class="footer">
      <p class="footer-author">&copy; Прищепов Александр</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "StartPage",

  data: () => ({
    isLogin: false,
    email: "",
  }),

  methods: {
    logout() {
      this.isLogin = !this.isLogin;

      localStorage.email = "";
      localStorage.accessToken = "";
    },
  },

  created() {
    this.email = localStorage.email;
  },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/variables.scss";
@import "../../stylesheets/resets.scss";

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

%text {
  color: $color-text-main;
  font-size: 16px;
  font-weight: 400;
  line-height: 12px;
  font-family: Montserrat;
}

.start-page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
}

.header {
  padding-top: 30px;

  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-button {
    width: 150px;
    height: 36px;
    margin: 7px 17px 7px 0px;
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
  &-button:hover {
    border-color: #3c8e96;
    background-color: #3c8e96;
  }
  &-button:focus {
    outline: none;
    border: 1px solid #3c8e96;
  }
  &-button:active {
    border: 2px solid #53c6d1;
    background-color: #ffffff;
    color: #53c6d1;
  }

  &-text {
    @extend %text;
    margin-top: auto;
    font-weight: 600;

    &__word {
      font-weight: 600;
    }
  }
}

.main {
  &-container {
    height: calc(100vh - (80px + 90px));
    padding-top: 20px;
  }

  &-text {
    @extend %text;
  }
}

.footer {
  height: 50px;
  text-align: center;

  &-author {
    @extend %text;
  }
}

.__is-false {
  display: none;
}
.__green {
  color: green;
}
.__red {
  color: red;
}
</style>
