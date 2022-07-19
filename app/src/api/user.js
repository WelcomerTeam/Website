// Handles user specific routes

import { doRequest, doLogin } from "./routes";

export default {
  getUser(callback, errorCallback) {
    doRequest(
      "GET",
      "/api/users/@me",
      null,
      (response) => {
        if (response.status === 401) {
          callback(null);
        } else {
          response.json().then((user) => {
            if (user.ok) {
              callback(user.data);
            } else {
              callback(null);
            }
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
          callback(null);
        } else {
          response.json().then((guilds) => {
            if (guilds.ok) {
              let sortedGuilds = guilds.data.sort(function (a, b) {
                return (
                  a.has_membership +
                  a.has_welcomer -
                  (b.has_membership + b.has_welcomer)
                );
              });
              sortedGuilds.reverse();
              callback(sortedGuilds);
            } else {
              callback(null);
            }
          });
        }
      },
      (error) => {
        errorCallback(error);
      }
    );
  },
};
