import VueRouter from "vue-router";

import StartPage from "./components/start-page/StartPage.vue";
import LoginPage from "./components/login-page/LoginPage.vue";
import NotFoundPage from "./components/NotFoundPage.vue"

export default new VueRouter({
  routes: [
    { path: "/", name: "start", component: StartPage },
    { path: "/login", name: "login", component: LoginPage },
    { path: "/404", name: "not-found", component: NotFoundPage },
    { path: "*", redirect: "/404" },
  ],

  mode: "history",
});
