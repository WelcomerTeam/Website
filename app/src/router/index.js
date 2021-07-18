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
            { path: '', component: () => import("../pages/dashboard/Home.vue") },

            { path: 'fieldtest', component: () => import("../pages/dashboard/FieldTest.vue") },
            { path: 'example', component: () => import("../pages/dashboard/DashboardExample.vue") },

            { path: 'myguilds', component: () => import("../pages/dashboard/MyGuilds.vue") },
        ],
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