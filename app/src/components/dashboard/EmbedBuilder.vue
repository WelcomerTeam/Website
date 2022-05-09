<template>
  <Popover as="div" v-slot="{ open }" class="relative">
    <div
      :class="[
        $props.invalid ? 'ring-red-500 border-red-500' : '',
        open ? 'rounded-b-none' : '',
        'border border-gray-300 p-4 rounded-md flex shadow-sm',
      ]"
    >
      <discord-embed
        class="flex-1"
        :embeds="parseDict(modelValue).embeds"
        :content="parseDict(modelValue).content"
        :isLight="true"
        :isBot="true"
      />

      <div class="flex items-end">
        <div class="relative">
          <PopoverButton
            :class="[
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
            :disabled="$props.disabled"
          >
            <div class="">
              <font-awesome-icon
                icon="pen-to-square"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <ChevronDownIcon
                :class="[
                  open ? 'transform rotate-180' : '',
                  'w-5 h-5 text-gray-400',
                ]"
                aria-hidden="true"
              />
            </span>
          </PopoverButton>
        </div>
      </div>
    </div>
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        class="block w-full overflow-auto text-base bg-white rounded-md shadow-sm sm:text-sm rounded-t-none border-t-0"
      >
        <div
          class="border-gray-300 rounded-md border shadow-sm rounded-t-none border-t-0"
        >
          <div class="block">
            <div class="border-b border-gray-200">
              <nav class="flex display-flex justify-evenly" aria-label="Tabs">
                <a
                  v-for="tab in tabs"
                  :key="tab.name"
                  @click="this.page = tab.value"
                  :class="[
                    tab.value == this.page
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer w-full justify-center',
                  ]"
                  :aria-current="tab.value == this.page ? 'page' : undefined"
                >
                  {{ tab.name }}
                </a>
              </nav>
            </div>
          </div>

          <div class="py-8 px-4 lg:px-8">
            <!-- Embed Builder -->
            <div class="space-y-1" v-if="this.page == 1">
              <!-- Content -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0 pb-7"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Content</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <textarea
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Message Content"
                    v-model="content"
                    rows="4"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Title -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Title</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Embed title"
                    v-model="title"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- URL -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Title URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Title URL"
                    v-model="url"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Description -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Description</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <textarea
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Embed description"
                    v-model="description"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Colour -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Colour</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7 flex items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded mr-2"
                    v-model="use_color"
                    @update:modelValue="updateEmbed()"
                  />
                  <Listbox as="div" class="flex-1">
                    <div class="relative">
                      <ListboxButton
                        class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                      >
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <font-awesome-icon
                            icon="square"
                            class="inline w-4 h-4 mr-1 border-primary"
                            :style="{
                              color: `${RGBIntToRGB(color, 2450411)}`,
                            }"
                          />
                        </div>
                        <span class="block pl-10 truncate">{{
                          RGBIntToRGB(color, 2450411).toUpperCase()
                        }}</span>
                        <span
                          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                        >
                          <SelectorIcon
                            class="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </ListboxButton>

                      <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions class="absolute z-10 mt-1">
                          <ColorPicker
                            theme="light"
                            :color="RGBIntToRGB(color, 2450411)"
                            @changeColor="SetColorRGBIntToRGB"
                            :sucker-hide="true"
                          />
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                </div>
              </div>

              <!-- fields -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Fields</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7 space-y-2">
                  <div
                    class="p-3 border rounded-md border-gray-300 shadow-sm space-y-1"
                    :key="index"
                    v-for="(field, index) in fields"
                  >
                    <input
                      type="text"
                      class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Field Name"
                      v-model="field.name"
                      @update:modelValue="updateEmbed()"
                    />
                    <input
                      type="text"
                      class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Field Value"
                      v-model="field.value"
                      @update:modelValue="updateEmbed()"
                    />
                    <div class="flex items-center">
                      <div class="flex-1">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          :true-value="true"
                          :false-value="false"
                          class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                          v-model="field.inline"
                          @update:modelValue="updateEmbed()"
                        />
                        <span
                          class="ml-3 text-sm font-medium text-gray-900 shadow-sm"
                          >Inline</span
                        >
                      </div>
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        @click="removeField(index)"
                      >
                        <font-awesome-icon icon="close" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="cta-button bg-primary hover:bg-primary-dark"
                    @click="newField"
                  >
                    Create New Field
                  </button>
                </div>
              </div>

              <!-- Image URL -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Embed Image URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Embed Image URL"
                    v-model="image_url"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Thumbnail URL -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Thumbnail Image URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Thumbnail Image URL"
                    v-model="thumbnail_url"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Footer Text -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Footer Text</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Embed title"
                    v-model="footer_text"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Footer Icon -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Footer Icon URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Footer Icon URL"
                    v-model="footer_icon"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Author Name -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Author Name</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Author Name"
                    v-model="author_name"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Author URL -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Author URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Author URL"
                    v-model="author_url"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>

              <!-- Author Icon URL -->
              <div
                class="sm:grid sm:grid-cols-10 sm:gap-2 sm:items-start sm:border-gray-200 mb-4 sm:mb-0"
              >
                <div
                  class="block font-semibold text-gray-700 sm:col-span-3 sm:text-right leading-none"
                >
                  <span class="font-bold text-sm sm:block text-gray-800"
                    >Author Icon URL</span
                  >
                </div>
                <div class="mt-1 sm:mt-0 sm:col-span-7">
                  <input
                    type="text"
                    class="flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Author Icon URL"
                    v-model="author_icon_url"
                    @update:modelValue="updateEmbed()"
                  />
                </div>
              </div>
            </div>

            <div v-if="this.page == 2">
              <!-- Embed Code -->
              <CodeEditor
                v-model="modelValue"
                @update:modelValue="updateValue($event)"
                :languages="[['json', 'JSON']]"
                :wrap_code="true"
                width="100%"
              />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style lang="css">
.hu-color-picker {
  width: 218px !important;
}
</style>

<script>
import LoadingIcon from "../LoadingIcon.vue";
import CodeEditor from "../simple-code-editor/CodeEditor.vue";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
  SwitchGroup,
  SwitchLabel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";

import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";
import { ref } from "vue";
import DiscordEmbed from "../DiscordEmbed.vue";

const tabs = [
  { name: "Build", value: 1 },
  { name: "Code", value: 2 },
];

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
    SwitchGroup,
    SwitchLabel,
    CheckIcon,
    SelectorIcon,
    ChevronDownIcon,
    XIcon,
    ColorPicker,
    LoadingIcon,
    DiscordEmbed,
    Popover,
    PopoverButton,
    PopoverPanel,

    CodeEditor,
  },

  props: {
    modelValue: {
      type: null,
      required: false,
    },
    disabled: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    },
  },

  emits: ["update:modelValue"],

  setup() {
    let content = "";

    let title = "";
    let description = "";
    let url = "";
    let use_color = ref(false);
    let color = 2450411;

    let footer_text = "";
    let footer_icon = "";

    let image_url = "";

    let thumbnail_url = "";

    let author_name = "";
    let author_url = "";
    let author_icon_url = "";

    let page = ref(1);

    let fields = ref([]);

    return {
      title,
      description,
      url,
      use_color,
      color,
      footer_text,
      footer_icon,
      image_url,
      thumbnail_url,
      author_name,
      author_url,
      author_icon_url,
      fields,

      content,

      tabs,
      page,
    };
  },

  mounted() {
    this.parseModelValue(this.$props.modelValue);
  },

  watch: {
    modelValue: function (after, _) {
      this.parseModelValue(after);
    },
  },

  methods: {
    parseModelValue(modelValue) {
      modelValue = this.parseDict(modelValue);

      this.content = modelValue?.content;

      let embeds = modelValue?.embeds;

      if (embeds && embeds.length > 0) {
        modelValue = embeds[0];

        this.title = modelValue?.title || "";
        this.description = modelValue?.description || "";
        this.url = modelValue?.url || "";
        this.use_color = modelValue?.color !== undefined;
        this.color = modelValue?.color || 2450411;

        this.footer_text = modelValue?.footer?.text || "";
        this.footer_icon = modelValue?.footer?.icon_url || "";

        this.image_url = modelValue?.image?.url || "";

        this.thumbnail_url = modelValue?.thumbnail?.icon_url || "";

        this.author_name = modelValue?.author?.name || "";
        this.author_url = modelValue?.author?.url || "";
        this.author_icon_url = modelValue?.author?.icon_url || "";

        this.fields = [];

        modelValue?.fields?.forEach((field) => {
          this.fields.push({
            name: field.name,
            value: field.value,
            inline: field.inline,
          });
        });
      }
    },

    newField() {
      this.fields.push({
        name: "",
        value: "",
        inline: false,
      });
      this.updateEmbed();
    },

    removeField(index) {
      if (index == 0) {
        this.fields.shift();
      } else {
        this.fields.splice(index, index);
      }
      this.updateEmbed();
    },

    updateEmbed() {
      let embed = {};

      if (this.title !== "") {
        embed["title"] = this.title;
      }

      if (this.description !== "") {
        embed["description"] = this.description;
      }

      // TODO: Validate url URL
      if (this.url !== "") {
        embed["url"] = this.url;
      }

      if (this.color !== undefined && this.use_color) {
        embed["color"] = this.color;
      }

      // TODO: Validate footer icon_url
      if (this.footer_text !== "" || this.footer_icon !== "") {
        let footer = {};

        if (this.footer_text !== "") {
          footer["text"] = this.footer_text;
        }

        if (this.footer_icon !== "") {
          footer["icon_url"] = this.footer_icon;
        }

        embed["footer"] = footer;
      }

      // TODO: Validate image_url
      if (this.image_url !== "") {
        embed["image"] = {
          url: this.image_url,
        };
      }

      // TODO: Validate thumbnail_url
      if (this.thumbnail_url !== "") {
        embed["thumbnail"] = {
          url: this.thumbnail_url,
        };
      }

      // TODO: Validate author_icon_url
      if (
        this.author_name !== "" ||
        this.author_url !== "" ||
        this.author_icon_url !== ""
      ) {
        let author = {};

        if (this.author_name !== "") {
          author["name"] = this.author_name;
        }

        if (this.author_url !== "") {
          author["url"] = this.author_url;
        }

        if (this.author_icon_url !== "") {
          author["icon_url"] = this.author_icon_url;
        }

        embed["author"] = author;
      }

      let fields = [];

      this.fields.forEach((field) => {
        if (field.name !== "" && field.value !== "") {
          fields.push({
            name: field.name,
            value: field.value,
            inline: field.inline | false,
          });
        }
      });

      if (fields.length > 0) {
        embed["fields"] = fields;
      }

      let data = {};

      if (this.content !== "") {
        data["content"] = this.content;
      }

      if (Object.keys(embed).length > 0) {
        data["embeds"] = [embed];
      }

      let value = JSON.stringify(data);

      this.updateValue(value);
    },

    updateValue(value) {
      this.$emit("update:modelValue", value);
    },

    RGBIntToRGB(rgbInt, defaultValue) {
      return (
        "#" +
        (rgbInt == undefined ? defaultValue : rgbInt)
          .toString(16)
          .slice(-6)
          .padStart(6, "0")
      );
    },

    SetColorRGBIntToRGB(color) {
      const { r, g, b } = color.rgba;
      this.color = (r << 16) + (g << 8) + b;
      this.use_color = true;
      this.updateEmbed();
    },

    parseDict(data) {
      try {
        return JSON.parse(data);
      } catch {
        return {};
      }
    },

    parseList(data) {
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    },
  },
};
</script>
