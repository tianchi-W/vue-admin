import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../layout/left.vue"),
    children: [
      {
        path: "/home",
        components: {
          default: () => import("views/Home.vue"),
          myheader: () => import("@/components/MyHeader.vue"),
        },
      },
    ],
  },
  {
    path: "/lianxi",
    name: "lianxi",
    component: () => import("../layout/left.vue"),
    children: [
      {
        path: "/lianxi",
        components: {
          default: () => import("views/lianxi.vue"),
          myheader: () => import("@/components/MyHeader.vue"),
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/top.vue"),
    children: [
      { path: "/about", component: () => import("../views/About.vue") },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];
export default routes;
