import { doLogin, getRequest } from "./routes";

export default {
  getUser(callback, errorCallback) {
    getRequest(
      "/api/users/@me",
      (response) => {
        if (response.status === 401) {
          callback({ user: null });
        } else {
          response
            .json()
            .then((res) => {
              if (res.ok) {
                callback({ user: res.data });
              } else {
                errorCallback(res.error);
              }
            })
            .catch((error) => {
              errorCallback(error);
            });
        }
      },
      (error) => {
        errorCallback(error);
      }
    );
  },

  getGuilds(doRefresh, callback, errorCallback) {
    getRequest(
      "/api/users/guilds" + (doRefresh ? "?refresh=1" : ""),
      (response) => {
        if (response.status === 401) {
          doLogin();
        } else {
          response
            .json()
            .then((res) => {
              if (res.ok) {
                let sortedGuilds = res.data
                  .filter((a) => {
                    return a.has_elevation;
                  })
                  .sort((a, b) => {
                    return (
                      (a.is_owner == true) +
                      (a.has_elevation == true) +
                      (a.has_welcomer_pro == true) +
                      (a.has_custom_backgrounds == true) +
                      (a.has_welcomer == true) -
                      ((b.is_owner == true) +
                        (b.has_elevation == true) +
                        (b.has_welcomer_pro == true) +
                        (b.has_custom_backgrounds == true) +
                        (b.has_welcomer == true))
                    );
                  });
                sortedGuilds.reverse();
                callback({ guilds: sortedGuilds });
              } else {
                errorCallback(res.error);
              }
            })
            .catch((error) => {
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
