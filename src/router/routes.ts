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
        alias: "/abc",
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
        },
      },
    ],
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import("../views/Vuex.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../layout/left.vue"),
    children: [
      {
        path: "/users",
        components: {
          default: () => import("views/Users.vue"),
        },
      },
      {
        path: "/users/:id",
        component: () => import("@/components/Users.vue"),
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
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];
export default routes;
