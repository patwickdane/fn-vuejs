import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import "../defaults.css";
import AboutPage from "../views/AboutPage/AboutPage.vue";
import GalleryPage from "../views/GalleryPage/GalleryPage.vue";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/gallery/:categoryName",
    name: "Lorem",
    component: GalleryPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
