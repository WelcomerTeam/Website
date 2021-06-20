<template>
  <div class="p-24 bg-gray-200">
    <DiscordEmbed :isLight="true" author="ImRock" :authorColour="5793266" avatar="https://cdn.discordapp.com/avatars/498519480985583636/1641bc1956758555f57e6cf5921a2f00.webp?size=256" :isBot="true" content="Hello! <@1>" :embeds='[
      {
        "description": "HI",
        "fields": [
              {
                "name": "🤔",
                "value": "some of these properties have certain limits..."
              },
              {
                "name": "😱",
                "value": "try exceeding some of them!"
              },
              {
                "name": "🙄",
                "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "these last two",
                "inline": true
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "are inline fields",
                "inline": true
              },
            ]
      }]' />


    <DiscordEmbed :isLight="true" author="ImRock" :authorColour="5793266" avatar="https://cdn.discordapp.com/avatars/498519480985583636/1641bc1956758555f57e6cf5921a2f00.webp?size=256" :isBot="true" content="this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js
    function foo(bar) {
      console.log(bar);
    }
    foo(1);```" :embeds='[{
    "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
    "url": "https://discordapp.com",
    "color": 11646151,
    "timestamp": "2021-06-20T22:22:46.026Z",
    "footer": "footer **a**asd text",
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "🤔",
        "value": "some of these properties have certain limits..."
      },
      {
        "name": "😱",
        "value": "try exceeding some of them!"
      },
      {
        "name": "🙄",
        "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "these last two",
        "inline": true
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "are inline fields",
        "inline": true
      }
    ]
  }]' />
    <!-- <DiscordEmbed :isLight="true" author="ImRock" :authorColour="5793266" avatar="https://cdn.discordapp.com/avatars/498519480985583636/1641bc1956758555f57e6cf5921a2f00.webp?size=256" :isBot="true" content="Hello!" :embeds='[
      {
        "title": "title ~~(did you know you can have markdown here too?)~~",
        "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
        "url": "https://discordapp.com",
        "color": 5370085,
        "timestamp": "2021-06-19 16:26:19.239877",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "footer text"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "image": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
          "name": "author name",
        },
        "fields": [
          {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
          },
          {
            "name": "😱",
            "value": "try exceeding some of them!"
          },
          {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "these last two",
            "inline": true
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
          }
        ]
      }
    ]' />

    <DiscordEmbed author="ImRock" :ac="0" av="" :isBot="false" content="" :embeds='[
      {
        "title": "title ~~(did you know you can have markdown here too?)~~",
        "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
        "url": "https://discordapp.com",
        "color": 5370085,
        "timestamp": "2021-06-19 16:26:19.239877",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "footer text"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "image": {
          "url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "author": {
          "name": "author name",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
          },
          {
            "name": "😱",
            "value": "try exceeding some of them!"
          },
          {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "these last two",
            "inline": true
          },
          {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
          }
        ]
      }
    ]' /> -->
  </div>
</template>

<script>
import DiscordEmbed from "../components/DiscordEmbed.vue";
import hljs from "highlight.js";

export default {
  components: {
    DiscordEmbed,
    hljs,
  },
  setup() {
    return {};
  },
};
</script>
