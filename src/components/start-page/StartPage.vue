<template>
  <div class="start-page-container">
    <header class="header">
      <div class="header-container">
        <button class="header-button" @click="login">Авторизация</button>
        <p class="header-text">
          <span class="header-text__word" :class="`__is-${isLogin}`">Yes</span>
          <span class="header-text__word" :class="`__is-${isLogin}`">No</span>
        </p>
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
      <p class="footer-author">Прищепов Александр</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "StartPage",

  data: () => ({
    isLogin: false,
  }),

  methods: {
    login() {
      console.log("btn login");
    },
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

.header {
  &-container {
  }

  &-button {
    width: 150px;
    height: 36px;
    margin: 7px -16px 16px 0px;
    border: solid 1px $color-button-background-blue;
    background: $color-button-background-blue;
    border-radius: 6px;
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
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

    &__word {
      @extend %text;
    }
  }
}

.main {
  &-container {
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

.__is-true {
  color: green;
}
.__is-false {
  color: red;
}
</style>
