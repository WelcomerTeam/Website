const EndpointGuilds = "/api/guild/";

export default {
  EndpointGuildAutorole(guildID) {
    return EndpointGuilds + guildID + "/autoroles";
  },

  EndpointGuildBorderwall(guildID) {
    return EndpointGuilds + guildID + "/borderwall";
  },

  EndpointGuildFreeroles(guildID) {
    return EndpointGuilds + guildID + "/freeroles";
  },

  EndpointGuildLeaver(guildID) {
    return EndpointGuilds + guildID + "/leaver";
  },

  EndpointGuildRules(guildID) {
    return EndpointGuilds + guildID + "/rules";
  },

  EndpointGuildTempchannels(guildID) {
    return EndpointGuilds + guildID + "/tempchannels";
  },

  EndpointGuildTimeroles(guildID) {
    return EndpointGuilds + guildID + "/timeroles";
  },

  EndpointGuildWelcomer(guildID) {
    return EndpointGuilds + guildID + "/welcomer";
  },

  EndpointGuildSettings(guildID) {
    return EndpointGuilds + guildID + "/settings";
  },

};
