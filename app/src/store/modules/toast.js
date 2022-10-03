// initial state
const state = () => ({
  toasts: [],
});

// getters
const getters = {
  getToasts: (state) => {
    return state.toasts;
  },
};

// actions
const actions = {
  createToast({ commit }, toast) {
    toast.id = new Date().getTime();

    commit("addToast", toast);
    setTimeout(() => {
      commit("removeToast", toast.id);
    }, toast.expiration || 5000);
  },
  removeToast({ commit }, toastID) {
    commit("removeToast", toastID);
  },
};

// mutations
const mutations = {
  addToast(state, toastObject) {
    state.toasts.push(toastObject);
  },
  removeToast(state, toastID) {
    state.toasts = state.toasts.filter((toast) => {
      return toast.id !== toastID;
    });
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
