// initial state
const state = () => ({
    selectedGuild: null,
    guild: null,

    guildChannels: null,
    guildRoles: null,
    guildEmojis: null,
})

// getters
const getters = {
    // get current selected guild
    // get channels
    // get roles
    // query emojis
}

// actions
const actions = {
    // fetch guild (+ channels, roles, emoji)
}

// mutations
const mutations = {
    // set selected guild
    // set guild (+ channels, roles, emoji)
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}