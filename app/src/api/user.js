import { doRequest, doLogin } from "./routes";

export default {
  getUser(callback, errorCallback) {
    doRequest(
      "GET",
      "/api/users/@me",
      null,
      (response) => {
        if (response.status === 401) {
          callback({ user: null });
        } else {
          response.json().then((res) => {
            if (res.ok) {
              callback({ user: res.data });
            } else {
              errorCallback(res.error);
            }
          }).catch((error) => {
            errorCallback(error);
          });
        }
      },
      (error) => {
        errorCallback(error);
      }
    );
  },

  getGuilds(callback, errorCallback) {
    doRequest(
      "GET",
      "/api/users/guilds",
      null,
      (response) => {
        if (response.status === 401) {
          doLogin();
          callback({ guilds: [] });
        } else {
          response.json().then((res) => {
            if (res.ok) {
              let sortedGuilds = res.data.sort(function (a, b) {
                return (
                  (a.has_membership === true) +
                  (a.has_welcomer === true) -
                  ((b.has_membership === true) + (b.has_welcomer === true))
                );
              });
              sortedGuilds.reverse();
              callback({ guilds: sortedGuilds });
            } else {
              errorCallback(res.error);
            }
          }).catch((error) => {
            errorCallback(error);
          });
        }
      },
      (error) => {
        errorCallback(error);
      }
    );
  },
};
