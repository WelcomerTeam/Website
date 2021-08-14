import dashboardAPI from "../../api/dashboard";

// initial state
const state = () => ({
  selectedGuild: null,
  guild: null,
  isLoading: false,

  guildChannels: [],
  guildChannelsPacked: [],
  guildRoles: [],
  guildEmojis: [],
});

// getters
const getters = {
  isLoading: (state) => {
    return state.isLoading;
  },

  getCurrentSelectedGuild: (state) => {
    return state.guild;
  },

  getSelectedGuildID: (state) => {
    return state.selectedGuild;
  },

  getGuildChannels: (state) => {
    return state.guildChannels;
  },

  getPackedGuildChannels: (state) => {
    return state.guildChannelsPacked;
  },

  getGuildRoles: (state) => {
    return state.guildRoles;
  },

  getGuildEmojis: (state) => {
    return state.guildEmojis;
  },

  getGuildChannelById: (state) => (channelID) => {
    return state.guildChannels.find((c) => c.id == channelID);
  },

  getGuildRoleById: (state) => (roleID) => {
    return state.guildRoles.find((c) => c.id == roleID);
  },

  getGuildEmojiById: (state) => (emojiID) => {
    return state.guildEmojis.find((c) => c.id == emojiID);
  },
};

// actions
const actions = {
  fetchGuild({ commit, state }) {
    commit("loading", true);
    dashboardAPI.getGuild(
      state.selectedGuild,
      (g) => {
        commit("setGuild", g);
      },
      () => commit("setGuild", null)
    );
  },

  fillGuild({ dispatch, commit, state }) {
    if (state.selectedGuild != state.guild?.id) {
      dispatch("fetchGuild");
    }
  },
};

// mutations
const mutations = {
  setGuild(state, guildObject) {
    state.guild = guildObject?.guild;
    state.guildChannels = guildObject?.channels;
    state.guildChannelsPacked = packGuildChannels(state.guildChannels);
    state.guildRoles = guildObject?.roles;
    state.guildEmojis = guildObject?.emojis;
    state.isLoading = false;
  },

  loading(state) {
    state.isLoading = true;
  },

  setSelectedGuild(state, guildID) {
    state.selectedGuild = guildID;
  },
};

function packGuildChannels(channels) {
  let categories = {};
  let emptyCategory = { channels: [] };

  channels
    .filter((c) => {
      return c.type === 4;
    })
    .map((c) => {
      c = JSON.parse(JSON.stringify(c));
      c.channels = [];
      categories[c.id] = c;
    });

  channels
    .filter((c) => {
      return c.type !== 4;
    })
    .map((c) => {
      if (categories[c.category]) {
        categories[c.category].channels.push(c);
      } else {
        emptyCategory.channels.push(c);
      }
    });

  console.log("A");
  return [emptyCategory, ...Object.values(categories)];
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
