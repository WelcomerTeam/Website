<template>
  <div class="flex-1 bg-white focus:outline-none">
    <main class="relative z-0 flex-1 min-h-full pb-8">
      <div class="mt-8 font-medium pb-20">
        <div class="dashboard-container">
          <div class="dashboard-title-container">
            <div class="dashboard-title">My Guilds</div>
            <button
              type="button"
              class="-mx-1.5 bg-white text-gray-500 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
              @click="refreshGuildList()"
              aria-label="Refresh guild list"
            >
              <span class="sr-only">Refresh guild list</span>
              <font-awesome-icon
                icon="arrows-rotate"
                :class="[
                  $store.getters.isLoadingGuilds ? 'fa-spin' : '',
                  'w-5 h-5',
                ]"
              />
            </button>
          </div>
          <div class="dashboard-content">
            <div
              v-if="$store.getters.isLoadingGuilds"
              class="mt-4 p-6 justify-center flex items-center"
            >
              <LoadingIcon />
              Loading your guilds...
            </div>
            <div
              v-else
              class="mt-4 bg-white shadow-sm overflow-hidden rounded-md border-gray-300 border"
            >
              <ul role="list" class="divide-y divide-gray-200">
                <li v-if="$store.getters.getGuilds.length === 0">
                  <div class="p-4">
                    <p class="font-medium text-center max-w-xl mx-auto">
                      Failed to get a list of your guilds. Please allow Welcomer
                      to view all your guilds or try refreshing
                    </p>
                  </div>
                </li>
                <li
                  v-else
                  v-for="guild in $store.getters.getGuilds"
                  :key="guild.id"
                  @click="setSelectedGuild(guild.id)"
                >
                  <button class="block hover:bg-gray-50 w-full">
                    <div class="px-4 py-4 flex items-center space-x-5 group">
                      <div class="flex-shrink-0">
                        <div class="flex overflow-hidden -space-x-1">
                          <img
                            :class="[
                              !guild.has_welcomer ? 'saturate-0' : '',
                              'w-10 h-10 rounded-lg',
                            ]"
                            v-lazy="{
                              src: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=256`,
                              error: '/assets/brokenImage.webp',
                            }"
                          />
                        </div>
                      </div>
                      <div
                        class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"
                      >
                        <div class="truncate">
                          <div class="flex text-sm">
                            <p class="font-bold truncate">
                              <span
                                v-if="guild.has_membership"
                                class="mr-2 inline-flex items-center p-1.5 rounded-md text-xs font-medium bg-primary-light text-white"
                              >
                                <font-awesome-icon icon="heart" />
                              </span>
                              {{ guild.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <ChevronRightIcon
                          v-if="guild.has_welcomer"
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <button
                          v-else
                          type="button"
                          class="cta-button bg-primary group-hover:bg-primary-dark"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FormValue from "../../components/dashboard/FormValue.vue";
import { ChevronRightIcon, PlusIcon } from "@heroicons/vue/outline";
import LoadingIcon from "../../components/LoadingIcon.vue";
import store from "../../store/index";
export default {
  components: { FormValue, ChevronRightIcon, LoadingIcon, PlusIcon },
  setup() {
    return {};
  },
  methods: {
    refreshGuildList() {
      store.dispatch("fetchGuilds");
    },
    setSelectedGuild(guildID) {
      store.commit("setSelectedGuild", guildID);
      this.$router.push({
        name: "dashboard.guild.overview",
        params: {
          guildID: guildID,
        },
      });
    },
  },
};
</script>
