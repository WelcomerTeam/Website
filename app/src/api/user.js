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
      has_welcomer: true,
      has_membership: true,
    },
    {
      name: "\u263e| D.O.D.",
      id: "929012945915105301",
      icon: "c78dd95a05e5f8efaa1c120d3b0d0cac",
      has_welcomer: true,
      has_membership: true,
    },
    {
      name: "parmesean",
      id: "795798052177707018",
      icon: "3abbbead5657299e8554d82669c4bf7a",
      has_welcomer: true,
      has_membership: false,
    },
    {
      name: "Sabke Baap Gamer",
      id: "666629577321480192",
      icon: "f699ad3ba22188337c3e1770a74c41b1",
      has_welcomer: false,
      has_membership: true,
    },
    {
      name: "Dwelling Center",
      id: "434387163124072459",
      icon: "2857985495a7ade9ef77c8b957bad9bb",
      has_issues: true,
    },
    {
      name: "Eagle Bounce",
      id: "847373325743161354",
      icon: "5499c182334e9fe650afa4bdf89dcd0a",
    },
    {
      name: ".BROCOLIS",
      id: "630892741240291342",
      icon: "1450d83e9f2f7c2406cdb8084b044076",
    },
    {
      name: "C H E R N O B Y L \u2665\ud83c\udde7\ud83c\uddf7",
      id: "751275999072616478",
      icon: "fdb83580eca19ae041e00920d6ed0321",
    },
    {
      name: "Luci's Coding Community",
      id: "783489952989184071",
      icon: "60a2f218978767e91762fff72c36fc46",
    },
    {
      name: "\u300e\u1d05\u1d00\u0280\u1d0b \u1d00\u1d04\u1d00\u1d05\u1d07\u1d0d\u026a\u1d00\u300f",
      id: "798584350806507581",
      icon: "09bfd75884ad55813a57900be01394b3",
    },
    {
      name: "Pet Simulator X Trading Center \u2728",
      id: "878880516617670677",
      icon: "358ff0829a5f154f6f9ff8ca08de128d",
    },
    {
      name: "\ud83d\ude01\ud83d\ude01EaglE HoUsE\ud83d\ude01\ud83d\ude01",
      id: "597790802164318208",
      icon: "1c7414e13cecab3cdfbd33bfb80e355b",
    },
    {
      name: "G\u039bMI\u041fG",
      id: "843562928064954368",
      icon: "546b9c705f35d760f533b93a02ac7639",
    },
    {
      name: "MD PRO/MAX DRAGON PRO",
      id: "922763442350338068",
      icon: "2883cee2a108afe00bbdd33a4f35d82f",
    },
    {
      name: "My funerals guest list, unless ali's here",
      id: "880195498366083072",
      icon: "3cff48af6e8e2f9616b5c57171ca16ef",
    },
    {
      name: "Mei's Galaxy",
      id: "707700053107802183",
      icon: "592fa490861f87dd46d9e3310ec652ad",
    },
    {
      name: "The Gang",
      id: "459256338430820352",
      icon: "721d56483e05a04d0822e3c8a36f3f9d",
    },
    {
      name: "Nami's Cave",
      id: "227934249490186241",
      icon: "1ccb06203e268c1ddab8b9c97f8ea739",
    },
    {
      name: "Digbeth Crew",
      id: "915612599633190943",
      icon: "4080e45d7748be7fc0eae2bd63b12082",
    },
    {
      name: "Larry Cult",
      id: "853492696831754320",
      icon: "6a141d25e47f9ef4707aa8807b3063da",
    },
    {
      name: "Code-Craft",
      id: "464198187528224768",
      icon: "ae14b3667f692cc5332e7badebd4ab73",
    },
    {
      name: "\ud835\udc30\ud835\udc21\ud835\udc28\ud835\udc2b\ud835\udc1e\ud835\udc33 \ud835\udc31\ud835\udc28\ud835\udc31\ud835\udc28 \u2661",
      id: "759188742145310750",
      icon: "85a4d5e974003da7959426923a2653dc",
    },
    { name: "bs try", id: "834048965149851648", icon: null },
    {
      name: "Aries",
      id: "735837957902041119",
      icon: "689df62d9ede1edf6707d068fb954044",
    },
    {
      name: "Susan Fanclub",
      id: "391744607504957441",
      icon: "4edb709fd33a519ea91badbe2b3baba3",
    },
    {
      name: "Arcade Game Community",
      id: "933737452890361896",
      icon: "69ca2de89588cca05786e10affbf7f0b",
    },
    {
      name: "\ud83d\udd30MONSTER TRIVIA\ud83d\udd30",
      id: "634401684558184472",
      icon: "2d6353cbf8d71661a4e2ddc7cc80acf8",
    },
    {
      name: "NOT DEOXY'S ESPORTS",
      id: "841669503812894731",
      icon: "382b03a3f567e8758f808909835b75d6",
    },
    {
      name: "HADES PARADISE",
      id: "640088461172277258",
      icon: "83cbf1b30a1edc670d1b45091403663c",
    },
    {
      name: "Cineman Rolls",
      id: "440553722146193429",
      icon: "53636aaef099b90be1c0462a4869c720",
    },
    {
      name: "D\u03a3VIL\u00a7 \ud83d\ude08",
      id: "775422594114781195",
      icon: "1ee226347ca8439e5941d63fd1600596",
    },
    { name: "Undays", id: "640272763587788840", icon: null },
    {
      name: "BAN CLAN",
      id: "822853829560238080",
      icon: "cbdc5dcb83270d0ada4abaa22c377a0c",
    },
    {
      name: "\uff33\uff41\uff50\uff50\uff48\uff49\uff52\uff45",
      id: "754441912076730428",
      icon: "eee88af7f8605f4c37fd59672763290a",
    },
    { name: "P T S", id: "260394664400650240", icon: null },
    {
      name: "DreamBois",
      id: "722917011507904545",
      icon: "74e0c84283477ab7c9302530f8b15293",
    },
    {
      name: "Mantaro",
      id: "768869995379163178",
      icon: "313c63a733a005842b0c452ade4a776c",
    },
    {
      name: "\ud835\udd5d\ud835\udd5a\ud835\udd67\ud835\udd5a\ud835\udd5f\ud835\udd58 \ud835\udd52\ud835\udd57\ud835\udd65\ud835\udd56\ud835\udd63 \ud835\udd5e\ud835\udd5a\ud835\udd55\ud835\udd5f\ud835\udd5a\ud835\udd58\ud835\udd59\ud835\udd65",
      id: "576487586873475073",
      icon: "6290f7d31a4e884a6ecdd2fe7a5836cd",
    },
    {
      name: "Organization: Chaos",
      id: "833458720881115177",
      icon: "4e51ca5d367b46ef98a0460127bb2a4e",
    },
    {
      name: "\uff24\uff25\uff2d\uff2f\uff23\uff32\uff21\uff34\uff33",
      id: "673963996671377409",
      icon: "b8b01c4dc46e2cd3806315884aa81029",
    },
    {
      name: "Earwens Eggs",
      id: "709128042492067868",
      icon: "172475b5ce603dd379e3eb735a9cdd2d",
    },
  ],
};

export default {
  getUser(callback, errorCallback) {
    setTimeout(() => {
      callback(dummyUser);
    }, 500);
  },
  getGuilds(callback, errorCallback) {
    setTimeout(() => {
      callback(dummyUser.guilds);
    }, 5000);
  },
};
