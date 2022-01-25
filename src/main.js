import "normalize.css";
import Vue from "vue";
import App from "./App.vue";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBMuVyGPIHCoIAr_R2Ol8TMyWukAaK85tk",
  authDomain: "login-task-9fa4f.firebaseapp.com",
  projectId: "login-task-9fa4f",
  storageBucket: "login-task-9fa4f.appspot.com",
  messagingSenderId: "470907564780",
  appId: "1:470907564780:web:9008e8e36adb9b852dabc9",
  measurementId: "G-L4DEGJ72ZF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

export default (analytics, app);
