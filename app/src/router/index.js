import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/premium",
    name: "Premium",
    component: () => import("../pages/Premium.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
    children: [
      { path: "", component: () => import("../pages/dashboard/Home.vue") },
      {
        path: "example",
        component: () => import("../pages/dashboard/debug/Example.vue"),
      },
      {
        path: "myguilds",
        component: () => import("../pages/dashboard/MyGuilds.vue"),
      },
      {
        path: "welcomer",
        component: () => import("../pages/dashboard/members/Welcomer.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
