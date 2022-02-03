<template>
  <div class="not-found-container">
    <p class="not-found-text">Страница не найдена.</p>
    <button type="button" class="not-found-button" @click="goStart">
      На стартовую страницу.
    </button>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",

  methods: {
    goStart() {
      this.$emit("goToStart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

%text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: $color-text-main;
  letter-spacing: 1px;
}

.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
}

.not-found-text {
  @extend %text;
}

.not-found-button {
  width: 250px;
  height: 36px;
  border: solid 1px $color-button-background-blue;
  background: $color-button-background-gray;
  border-radius: 6px;
  color: $color-button-background-blue;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  transition: background-color 0.1s ease, border-color 0.3s ease;
  cursor: pointer;
}

.not-found-button:hover {
  border-color: #3c8e96;
  background-color: #3c8e96;
  color: $color-white;
}
.not-found-button:focus {
  outline: none;
  border: 1px solid #3c8e96;
}
.not-found-button:active {
  border: 2px solid #53c6d1;
  background-color: #ffffff;
  color: #53c6d1;
}
</style>
