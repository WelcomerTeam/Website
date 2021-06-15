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

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: () => import("../pages/Home.vue"),
//     },
//     {
//         path: "/premium",
//         name: "Premium",
//         component: () => import("../pages/Premium.vue"),
//     },
//     {
//         path: "/:catchAll(.*)",
//         component: () => import("../pages/NotFound.vue"),
//     }
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;