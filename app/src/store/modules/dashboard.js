import dashboardAPI from "../../api/dashboard";

// initial state
const state = () => ({
  selectedGuild: null,
  guild: null,

  isLoadingGuild: false,

  guildChannels: [],
  guildChannelsPacked: [],
  guildRoles: [],
  guildEmojis: [],

  guildMemberResults: [],
});

// getters
const getters = {
  isLoadingGuild: (state) => {
    return state.isLoadingGuild;
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

  getGuildMemberResults: (state) => {
    return state.guildMemberResults;
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

  getGuildMemberById: (state) => (guildMemberID) => {
    // TODO
    return null;
  },
};

// actions
const actions = {
  fetchGuild({ commit, state }) {
    commit("loadingGuild");
    dashboardAPI.getGuild(
      state.selectedGuild,
      (guild) => {
        commit("setGuild", guild);
      },
      () => commit("setGuild", null)
    );
  },

  fetchGuildMembersByQuery({ commit, state }, query) {
    if (query !== state.previousGuildMembersQuery) {
      dashboardAPI.fetchGuildMembers(
        query,
        state.selectedGuild,
        (guildMembers) => {
          commit("setGuildMemberResults", { query, guildMembers });
        },
        () => {
          guildMembers = [];
          commit("setGuildMemberResults", { query, guildMembers });
        }
      );
    }
  },

  fillGuild({ dispatch, state }) {
    if (state.selectedGuild != state.guild?.id) {
      dispatch("fetchGuild");
    }
  },
};

// mutations
const mutations = {
  setGuild(state, guildObject) {
    state.guild = guildObject?.guild;
    state.guildChannels = guildObject?.channels || [];
    state.guildChannelsPacked = packGuildChannels(state.guildChannels);
    state.guildRoles = guildObject?.roles || [];
    state.guildEmojis = guildObject?.emojis || [];
    state.isLoadingGuild = false;
  },

  setSelectedGuild(state, guildID) {
    state.selectedGuild = guildID;
    this.dispatch("fetchGuilds");
  },

  setGuildMemberResults(state, { query, guildMembers }) {
    state.previousGuildMembersQuery = query;
    state.guildMemberResults = guildMembers;
  },

  loadingGuild(state) {
    state.isLoadingGuild = true;
  },
};

function packGuildChannels(channels) {
  let categories = {};
  let emptyCategory = { channels: [] };

  channels
    .filter((channel) => {
      return channel.type === 4;
    })
    .map((channel) => {
      channel = JSON.parse(JSON.stringify(channel));
      channel.channels = [];
      categories[channel.id] = channel;
    });

  channels
    .filter((channel) => {
      return channel.type !== 4;
    })
    .map((channel) => {
      if (categories[channel.category]) {
        categories[channel.category].channels.push(channel);
      } else {
        emptyCategory.channels.push(channel);
      }
    });

  return [emptyCategory, ...Object.values(categories)];
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
