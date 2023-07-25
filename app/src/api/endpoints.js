const EndpointGuilds = "/api/guild/";

export default {
  EndpointGuildWelcomer(guildID) {
    return EndpointGuilds + guildID + "/welcomer";
  },

  EndpointGuildRules(guildID) {
    return EndpointGuilds + guildID + "/rules";
  },
};
