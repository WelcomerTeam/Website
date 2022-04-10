// Handles user specific routes

// Fetching if i am logged in or not
// Fetching guild list

const dummyUser = {
  id: "143090142360371200",
  name: "ImRock",
  discriminator: "0001",
  avatar: "a_70444022ea3e5d73dd00d59c5578b07e",
  badges: [
    {
      name: "Donator",
      icon: "heart",
      colour: "text-primary",
    },
    {
      name: "Developer",
      icon: "cog",
      colour: "text-gray-400",
    },
  ],
  guilds: [
    {
      id: "341685098468343822",
      name: "Welcomer Support Guild",
      icon: "09cfc7fe72945a7c04ec6d3ddd01767c",
    },
  ],
};

export default {
  getUser(callback, errorCallback) {
    setTimeout(() => {
      callback(dummyUser);
    }, 500);
  },
};
