import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
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
    path: "/gallery/:categoryName",
    name: "Gallery",
    component: GalleryPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/GalleryPage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
