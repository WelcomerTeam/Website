import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Premium from "../pages/Premium.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/premium",
        name: "Premium",
        component: Premium,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;