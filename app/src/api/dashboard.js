// Contains API routes for all Dashboard stuff

// Specific pages (config and setting)
// Getting guild information
// fetch members

const dummyGuild = {
  guild: {
    id: "341685098468343822",
    name: "Welcomer Support Guild",
    icon: "09cfc7fe72945a7c04ec6d3ddd01767c",
  },
  channels: [
    { id: "485801351352418304", name: "general", type: 0, position: 0 },
    {
      id: "485801388182601741",
      name: "Testing",
      type: 4,
      position: 0,
    },
    {
      id: "583030103647191099",
      name: "testing",
      type: 0,
      category: "485801388182601741",
      position: 2,
    },
    {
      id: "583030128058302474",
      name: "beta-testing",
      type: 0,
      category: "485801388182601741",
      position: 3,
    },
    {
      id: "594088076398034944",
      name: "shitipc",
      type: 0,
      category: "485801388182601741",
      position: 4,
    },
    {
      id: "808653611793252442",
      name: "test",
      type: 0,
      category: "485801388182601741",
      position: 5,
    },
    { id: "485801407337725982", name: "bot-commands", type: 0, position: 1 },
    {
      id: "495932713002336277",
      name: "Server Stats",
      type: 4,
      position: 1,
    },
    {
      id: "590242489517080669",
      name: "Loading ServerStat...",
      type: 2,
      category: "495932713002336277",
      position: 12,
    },
    {
      id: "604043533971619862",
      name: "Loading ServerStat...",
      type: 2,
      category: "495932713002336277",
      position: 13,
    },
    {
      id: "586847364795334681",
      name: "TestStats",
      type: 4,
      position: 2,
    },
    {
      id: "586859354142277651",
      name: "15:50 09/06 [UTC]",
      type: 2,
      category: "586847364795334681",
      position: 11,
    },
    { id: "865142537576382484", name: "ticket-imrock", type: 0, position: 6 },
    {
      id: "865142545737318450",
      name: "ticket-almightynan",
      type: 0,
      position: 7,
    },
    {
      id: "865142611434143755",
      name: "ticket-almightynan",
      type: 0,
      position: 8,
    },
    {
      id: "865145457369546792",
      name: "ticket-almightynan",
      type: 0,
      position: 9,
    },
    {
      id: "865174795536826368",
      name: "ticket-almightynan",
      type: 0,
      position: 10,
    },
    {
      id: "865188828204630086",
      name: "ticket-almightynan",
      type: 0,
      position: 11,
    },
    {
      id: "485801388182601741",
      name: "Testing",
      type: 4,
      position: 0,
    },
    {
      id: "583030103647191099",
      name: "testing",
      type: 0,
      category: "485801388182601741",
      position: 2,
    },
    {
      id: "583030128058302474",
      name: "beta-testing",
      type: 0,
      category: "485801388182601741",
      position: 3,
    },
    {
      id: "594088076398034944",
      name: "shitipc",
      type: 0,
      category: "485801388182601741",
      position: 4,
    },
    {
      id: "808653611793252442",
      name: "test",
      type: 0,
      category: "485801388182601741",
      position: 5,
    },
    {
      id: "495932713002336277",
      name: "Server Stats",
      type: 4,
      position: 1,
    },
    {
      id: "590242489517080669",
      name: "Loading ServerStat...",
      type: 2,
      category: "495932713002336277",
      position: 12,
    },
    {
      id: "604043533971619862",
      name: "Loading ServerStat...",
      type: 2,
      category: "495932713002336277",
      position: 13,
    },
    {
      id: "586847364795334681",
      name: "TestStats",
      type: 4,
      position: 2,
    },
    {
      id: "586859354142277651",
      name: "15:50 09/06 [UTC]",
      type: 2,
      category: "586847364795334681",
      position: 11,
    },
  ],
  roles: [
    {
      id: "436243598925627392",
      name: "@everyone",
      position: 0,
      colour: 0,
      is_assignable: true,
    },
    {
      id: "865141693842063372",
      name: "Ticketer",
      position: 1,
      colour: 65280,
      is_assignable: true,
    },
    {
      id: "683649087018762268",
      name: "Dank Memer",
      position: 1,
      colour: 0,
      is_assignable: true,
    },
    {
      id: "619208190952734730",
      name: "R. Danny",
      position: 1,
      colour: 0,
      is_assignable: true,
    },
    {
      id: "593945304458461185",
      name: "Test Boy",
      position: 1,
      colour: 0,
      is_assignable: true,
    },
    {
      id: "585737326441922569",
      name: "2 years",
      position: 2,
      colour: 0,
      is_assignable: true,
    },
    { id: "497525113676234763", name: "test", position: 3, colour: 0 },
    { id: "584402287661809675", name: "Muted", position: 4, colour: 2303786 },
    {
      id: "485809646364524584",
      name: "Welcomer-Beta",
      position: 5,
      colour: 0,
    },
    { id: "448590206824742927", name: "Welcomer", position: 6, colour: 0 },
  ],
  emojis: [
    { id: "485806295589584896", name: "yup", animated: false },
    { id: "485806295665082371", name: "nuu", animated: false },
    { id: "516641361471209515", name: "mmsid", animated: false },
    {
      id: "567272704139329547",
      name: "a_c21f1574eeef57550fa3a0cddba8a8",
      animated: true,
    },
    { id: "621100584375812128", name: "comfyfast", animated: true },
    { id: "627983959544037386", name: "dumbuser", animated: false },
    { id: "630358356774879262", name: "gmod", animated: false },
    {
      id: "630358818005450752",
      name: "youidiotyouforgottodownloadcss",
      animated: false,
    },
    { id: "677960003922952242", name: "msyert", animated: false },
    { id: "678260036006576155", name: "sad", animated: false },
    { id: "683645065347858442", name: "borgarfast", animated: true },
    { id: "697845781448753153", name: "killollie", animated: false },
    { id: "699633414978142290", name: "dabspooky", animated: false },
    { id: "704665530098778162", name: "starfast", animated: true },
    { id: "704666015862358026", name: "fasteststar", animated: true },
    { id: "704666015921078312", name: "fasterstar", animated: true },
    { id: "704691586130509965", name: "peepeemoment", animated: false },
    { id: "733289460204175470", name: "poggie", animated: false },
    { id: "733318268374220843", name: "dabshiney", animated: false },
    { id: "735156109995671572", name: "sinisterpoggers", animated: false },
    { id: "735434747781709854", name: "dpy", animated: false },
    { id: "735442159838429264", name: "conecatl", animated: false },
    { id: "735442202859143228", name: "conecatr", animated: false },
    {
      id: "735445499615641692",
      name: "conecatdanceatthespeedoflight",
      animated: true,
    },
    { id: "735445499707916339", name: "conecatdance", animated: true },
    { id: "735445500060237834", name: "ezgif", animated: true },
    { id: "735610170494943312", name: "ncpogz", animated: false },
    { id: "739629834333847612", name: "stickbug", animated: true },
    { id: "740665043875790940", name: "noheroku", animated: false },
    { id: "740665458813829170", name: "noheroku", animated: false },
    { id: "743478304891469835", name: "bruhcat", animated: false },
    { id: "747439295073091585", name: "dabstickbug", animated: false },
    { id: "753297240797216788", name: "howdy", animated: false },
    { id: "753320412779380887", name: "tyler", animated: false },
    { id: "754314633099083826", name: "umbro", animated: true },
    { id: "755788202442358784", name: "ollie", animated: true },
    { id: "758039909503205379", name: "aws", animated: false },
    { id: "758826569220227072", name: "dpymascot", animated: false },
    { id: "766943116565413918", name: "tyler", animated: false },
    { id: "767358057851650068", name: "blobus", animated: false },
    { id: "770993898633035776", name: "ga0", animated: false },
    { id: "770993899904696330", name: "ga1", animated: false },
    { id: "770994036222984222", name: "ga0", animated: false },
    { id: "770994037405515777", name: "ga1", animated: false },
    { id: "770994039259660309", name: "ga2", animated: false },
    { id: "770994040522539038", name: "ga3", animated: false },
    { id: "778406551781769226", name: "ad4", animated: false },
    { id: "780547801050382346", name: "tesco", animated: false },
    { id: "783051101783457793", name: "cat4", animated: false },
    { id: "783051110372999188", name: "cat6", animated: false },
    { id: "783051118593835089", name: "cat2", animated: false },
    { id: "783051126923722814", name: "cat1", animated: false },
    { id: "783051163795718144", name: "cat5", animated: false },
    { id: "788893811945242624", name: "noBeat", animated: false },
    { id: "793488748033605662", name: "ass", animated: true },
    { id: "803615769912279070", name: "diamondhoe", animated: false },
    { id: "820035188834041867", name: "amog1", animated: false },
    { id: "830742921417326592", name: "comfypain", animated: false },
    { id: "830743140826349568", name: "comfy", animated: false },
    { id: "830896863870976051", name: "megaios", animated: false },
    { id: "830897182570971147", name: "megaiosf", animated: false },
  ],
};

const dummyMembers = [
  {
    id: 330416853971107840,
    name: "Welcomer",
    display_name: "Welcomer#5491",
    discriminator: "5491",
    avatar: "5f65708fd35ee3844a463d5bf9fe7828",
    bot: true,
  },
  {
    id: 689205223306297416,
    name: "Lukef",
    display_name: "Lukef#3842",
    discriminator: "3842",
    avatar: "a_bc7930302db3239b4b31c430793eaeb4",
    bot: false,
  },
  {
    id: 209692588792479744,
    name: "Lowy",
    display_name: "Lowy#2001",
    discriminator: "2001",
    avatar: "a_2f775ae4d0449b35b18ca4374d1244dd",
    bot: false,
  },
  {
    id: 774938059342479372,
    name: "Senpai Legend",
    display_name: "Senpai Legend#0001",
    discriminator: "0001",
    avatar: "a_a39932eac94ae45b5868f41d9670e081",
    bot: false,
  },
  {
    id: 157589756442574848,
    name: "Bergin",
    display_name: "Bergin#2077",
    discriminator: "2077",
    avatar: "e4037b1f022697bfcd29ad2b3b9c4988",
    bot: false,
  },
  {
    id: 660139603960922115,
    name: "ReafilL",
    display_name: "ReafilL#8684",
    discriminator: "8684",
    avatar: "3e508d5972a4a02f78e072dd4fb6a418",
    bot: false,
  },
  {
    id: 749469480865759283,
    name: "anne_",
    display_name: "anne_#7432",
    discriminator: "7432",
    avatar: "67dcf6d87e02b7db74aa1dd19d22a099",
    bot: false,
  },
  {
    id: 855599077542723604,
    name: "hiraginoyuki",
    display_name: "hiraginoyuki#1284",
    discriminator: "1284",
    avatar: "5bc8db40cb86ed904693dbce219870c3",
    bot: false,
  },
  {
    id: 852719537849630792,
    name: "Reo",
    display_name: "Reo#6699",
    discriminator: "6699",
    avatar: "c3258b8cf95c4c38fed3bb1a1bcc4e66",
    bot: false,
  },
  {
    id: 253960412117205002,
    name: "AmberChief23",
    display_name: "AmberChief23#2513",
    discriminator: "2513",
    avatar: "0cc5d84580414f0684fd2223657103a8",
    bot: false,
  },
];

import Fuse from "fuse.js";

const dummyMemberSearch = new Fuse(dummyMembers, {
  keys: ["name", "id", "display_name"],
  threshold: 0.2,
  useExtendedSearch: true,
});

export default {
  getGuild(guildID, callback, errorCallback) {
    // Gets guild information.

    if (guildID != dummyGuild.guild.id) {
      return errorCallback();
    }

    setTimeout(() => {
      callback(dummyGuild);
    }, 1000);
  },

  fetchGuildMembers(query, guildID, callback, errorCallback) {
    if (guildID != dummyGuild.guild.id) {
      return errorCallback();
    }

    if (query == "") {
      callback(this.dummyMembers);
    } else {
      callback(
        dummyMemberSearch.search(query).map((v) => {
          return v.item;
        })
      );
    }
  },
};
