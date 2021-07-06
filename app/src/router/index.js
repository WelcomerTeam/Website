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
        path: "/:catchAll(.*)",
        component: () => import("../pages/NotFound.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;