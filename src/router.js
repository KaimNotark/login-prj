import VueRouter from "vue-router";

import StartPage from "./components/start-page/StartPage.vue";
import LoginPage from "./components/login-page/LoginPage.vue";

export default new VueRouter({
  ruotes: [
    { path: "", component: StartPage },
    { path: "/login", component: LoginPage },
  ],

  mode: "history",
});
