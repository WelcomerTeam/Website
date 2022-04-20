<template>
  <div>
    <div v-if="$store.getters.isLoadingUser" class="px-10">
      <LoadingIcon class="text-white" />
    </div>
    <div v-else-if="!$store.getters.isLoggedIn">
      <a
        href="/login"
        class="w-full cta-button bg-primary hover:bg-primary-dark"
      >
        Login with Discord
      </a>
    </div>
    <div v-else>
      <router-link
        to="/profile"
        class="gap-6 px-5 py-6 relative rounded-lg sm:gap-8 sm:p-6 group bg-primary hover:bg-primary-dark text-white grid grid-cols-4"
      >
        <img
          class="object-cover col-span-1 aspect-square"
          :src="
            `https://cdn.discordapp.com/avatars/${$store.getters.getCurrentUser.id}/${$store.getters.getCurrentUser.avatar}.${($store.getters.getCurrentUser.avatar.startsWith('a_')
              ? 'gif'
              : 'webp')}?size=128`
          "
        />
        <div class="col-span-3 flex items-center">
          <div>
            <h2 class="font-bold text-xl">
              {{ $store.getters.getCurrentUser.name }}#{{
                $store.getters.getCurrentUser.discriminator
              }}
            </h2>
            <div class="space-x-2 space-y-2">
              <font-awesome-icon
                :title="badge.name"
                v-for="badge in $store.getters.getCurrentUser.badges"
                v-bind:key="badge.name"
                :icon="badge.icon"
                :class="['p-2 bg-white rounded-md', badge.colour]"
              />
            </div>
          </div>
        </div>
      </router-link>
      <div class="gap-6 grid px-5 py-6 relative rounded-lg sm:gap-6 sm:p-8">
        <a href="/logout" class="text-white hover:text-gray-300 underline"
          >Logout</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
