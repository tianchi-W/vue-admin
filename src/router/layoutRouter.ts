import { RouteRecordRaw } from "vue-router";

const layouts = require.context("../layout/", false, /\.vue$/);

function getRoutes() {
  const layoutRouter = [] as RouteRecordRaw[];
  layouts.keys().forEach((key) => {
    const attr: any = key.split(".")[1].split("/")[1];
    const module = layouts(key);
    const route = getRouterByMoulde(attr, module);
    layoutRouter.push(route);
  });
  return layoutRouter;
}

function getRouterByMoulde(file: string, module: { [key: string]: any }) {
  const name = file;
  const route = {
    name,
    path: `/${file}`,
    component: module.default,
  } as RouteRecordRaw;
  return route;
}

export default getRoutes();
