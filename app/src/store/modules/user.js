import userAPI from "../../api/user";

// initial state
const state = () => ({
  isLoggedIn: false,
  user: null,
  guilds: [],

  isLoadingUser: false,
});

// getters
const getters = {
  isLoadingUser: (state) => {
    return state.isLoadingUser;
  },

  isLoggedIn: (state) => {
    return state.isLoggedIn;
  },

  getCurrentUser: (state) => {
    return state.user;
  },

  getGuilds: (state) => {
    return state.user?.guilds;
  },
};

// actions
const actions = {
  fetchCurrentUser({ commit }) {
    commit("loadingUser");
    userAPI.getUser(
      (user) => {
        commit("setCurrentUser", user);
      },
      () => {
        commit("setCurrentUser", undefined);
      }
    );
  },
};

// mutations
const mutations = {
  setCurrentUser(state, userObject) {
    state.isLoggedIn = userObject !== undefined;
    state.user = userObject;
    state.isLoadingUser = false;
  },

  loadingUser(state) {
    state.isLoadingUser = true;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
