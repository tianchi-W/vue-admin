import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import layoutRoutes from "./layoutRouter";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
});
// GOOD
router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && !localStorage.getItem("token"))
    next({ name: "Login" });
  else next();
});
router.beforeResolve((to, from, next) => {
  document.title = "ddluuu";
  console.log(to, from);
  next();
});
export function setupRouter(app: App) {
  app.use(router);
}

export default router;
