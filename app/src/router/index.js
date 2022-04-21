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
    name: "dashboard",
    component: () => import("../pages/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "dashboard.guilds",
        component: () => import("../pages/dashboard/GuildSelector.vue"),
      },
      {
        path: "guild/:guildID",
        component: () => import("../pages/DashboardGuild.vue"),
        children: [
          {
            name: "dashboard.guild.memberships",
            path: "memberships",
            component: () => import("../pages/dashboard/Memberships.vue"),
          },

          {
            name: "dashboard.guild.overview",
            path: "",
            component: () => import("../pages/dashboard/Home.vue"),
          },
          {
            name: "dashboard.guild.settings",
            path: "settings",
            component: () => import("../pages/dashboard/Settings.vue"),
          },

          {
            name: "dashboard.guild.welcomer",
            path: "welcomer",
            component: () => import("../pages/dashboard/members/Welcomer.vue"),
          },
          {
            name: "dashboard.guild.rules",
            path: "rules",
            component: () => import("../pages/dashboard/members/Rules.vue"),
          },
          {
            name: "dashboard.guild.borderwall",
            path: "borderwall",
            component: () =>
              import("../pages/dashboard/members/Borderwall.vue"),
          },
          {
            name: "dashboard.guild.autoroles",
            path: "autorole",
            component: () => import("../pages/dashboard/members/Autorole.vue"),
          },
          {
            name: "dashboard.guild.leaver",
            path: "leaver",
            component: () => import("../pages/dashboard/members/Leaver.vue"),
          },

          {
            name: "dashboard.guild.freeroles",
            path: "freeroles",
            component: () => import("../pages/dashboard/roles/Freeroles.vue"),
          },
          {
            name: "dashboard.guild.timeroles",
            path: "timeroles",
            component: () => import("../pages/dashboard/roles/Timeroles.vue"),
          },
          {
            name: "dashboard.guild.tempchannels",
            path: "tempchannels",
            component: () =>
              import("../pages/dashboard/roles/Tempchannels.vue"),
          },

          {
            name: "dashboard.guild.automod",
            path: "automod",
            component: () =>
              import("../pages/dashboard/moderation/Automod.vue"),
          },

          {
            path: "example",
            name: "dashboard.guild.example",
            component: () => import("../pages/dashboard/debug/Example.vue"),
          },
        ],
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
