import VueRouter from "vue-router";

import StartPage from "./components/start-page/StartPage.vue";
import LoginPage from "./components/login-page/LoginPage.vue";

export default new VueRouter({
  routes: [
    { path: "/", name: "start", component: StartPage },
    { path: "/login", name: "login", component: LoginPage },
  ],

  mode: "history",
});
