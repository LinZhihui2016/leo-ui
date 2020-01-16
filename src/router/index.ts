import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/button",
    name: "button",
    component: () => import("views/Button.vue")
  },

  {
    path: "/input",
    name: "input",
    component: () => import("views/Input.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
