<template>
  <div
    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5 mb-4 sm:mb-0 align-middle"
  >
    <label class="block font-semibold text-gray-700 sm:mt-px sm:pt-2">
      {{ title }}
    </label>
    <div v-if="type == FormTypeBlank" class="mt-1 sm:mt-0 sm:col-span-2">
      <slot />
    </div>
    <div v-else-if="type == FormTypeToggle" class="mt-1 sm:mt-0 sm:col-span-2">
      <Switch
        :modelValue="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
        :class="[
          $props.invalid ? 'ring-red-500 border-red-500' : '',
          $props.disabled
            ? 'bg-gray-100'
            : modelValue
            ? 'bg-green-500 focus:ring-green-500'
            : 'bg-gray-400 focus:ring-gray-400',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        ]"
      >
        <span
          :class="[
            modelValue ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          ]"
        >
          <span
            :class="[
              modelValue
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span
            :class="[
              modelValue
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg
              class="w-3 h-3 text-green-500"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
              />
            </svg>
          </span>
        </span>
      </Switch>
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeChannelList"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
      >
        <div class="relative">
          <ListboxButton
            :class="[
              $props.invalid ? 'border-red-500 ring-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="hashtag"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoadingGuild"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">{{
              modelValue == null
                ? "No channel selected"
                : $store.getters.getGuildChannelById(modelValue)?.name ||
                  `Unknown channel ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="$store.getters.isLoadingGuild"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div v-else>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                  :value="null"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect channel
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <ListboxOption
                  as="template"
                  v-for="channel in this.filterTextChannels(
                    $store.getters.getGuildChannels
                  )"
                  :key="channel.id"
                  :value="channel.id"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      <font-awesome-icon
                        icon="hashtag"
                        :class="[
                          active ? 'text-white' : 'text-gray-400',
                          'inline w-4 h-4 mr-1',
                        ]"
                        aria-hidden="true"
                      />
                      {{ channel.name }}
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeChannelListCategories"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        :disabled="$props.disabled"
        @update:modelValue="updateValue($event)"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="hashtag"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoadingGuild"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">{{
              modelValue == null
                ? "No channel selected"
                : $store.getters.getGuildChannelById(modelValue)?.name ||
                  `Unknown channel ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="$store.getters.isLoadingGuild"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div v-else>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                  :value="null"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect channel
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <div
                  v-for="category in $store.getters.getPackedGuildChannels"
                  :key="category"
                >
                  <div
                    class="py-3"
                    v-if="category.name && category.channels.length !== 0"
                  >
                    <span class="pl-2 text-xs font-bold uppercase">{{
                      category.name
                    }}</span>
                  </div>
                  <ListboxOption
                    as="template"
                    v-for="channel in category.channels"
                    :key="channel.id"
                    :value="channel.id"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-primary' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                      >
                        <font-awesome-icon
                          icon="hashtag"
                          :class="[
                            active ? 'text-white' : 'text-gray-400',
                            'inline w-4 h-4 mr-1',
                          ]"
                        />
                        {{ channel.name }}
                      </span>

                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-primary',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        ]"
                      >
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </div>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeRoleList"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="at"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoadingGuild"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">{{
              modelValue == null
                ? "No role selected"
                : $store.getters.getGuildRoleById(modelValue)?.name ||
                  `Unknown role ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="$store.getters.isLoadingGuild"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div v-else>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                  :value="null"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect role
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <ListboxOption
                  as="template"
                  v-for="role in $store.getters.getGuildRoles"
                  :key="role.id"
                  :value="role.id"
                  v-slot="{ active, selected }"
                  :disabled="!role.is_assignable"
                >
                  <li
                    :class="[
                      role.is_assignable ? '' : 'bg-gray-200',
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      <font-awesome-icon
                        icon="circle"
                        :class="[
                          active ? 'text-white' : 'text-gray-400',
                          'inline w-4 h-4 mr-1 border-primary',
                        ]"
                        :style="{ color: `${RGBIntToRGB(role?.colour, 0)}` }"
                      />
                      {{ role.name }}
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeMemberList"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="user"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoadingGuild"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">
              {{
                modelValue == null
                  ? "No member selected"
                  : $store.getters.getGuildMemberById(modelValue)
                      ?.display_name || `Unknown member ${modelValue}`
              }}
            </span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 text-base bg-white rounded-md shadow-sm ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="$store.getters.isLoadingGuild"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div v-else>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                  :value="null"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect member
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <div class="w-full p-2">
                  <input
                    type="text"
                    class="w-full border-gray-300 rounded-md sm:text-sm"
                    placeholder="Start typing a name or user id..."
                    v-model="query"
                    @update:modelValue="onQueryChange()"
                  />
                </div>
                <div class="overflow-auto max-h-60">
                  <ListboxOption
                    as="template"
                    :key="this.query"
                    :value="this.query"
                    v-slot="{ active, selected }"
                    v-if="this.isValidSnowflake"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-primary' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                      >
                        Use Id "{{ this.query }}"
                      </span>
                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-primary',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        ]"
                      >
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span></li
                  ></ListboxOption>
                  <ListboxOption
                    as="template"
                    v-for="member in $store.getters.getGuildMemberResults"
                    :key="member.id"
                    :value="member.id"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-primary' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                      >
                        <img
                          alt=""
                          v-lazy="
                            `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=32`
                          "
                          class="flex-shrink-0 inline w-4 h-4 mr-1 rounded-full object-contain"
                        />
                        {{ member.display_name }}
                      </span>

                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-primary',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        ]"
                      >
                        <CheckIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </div>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeEmojiList"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <img
                v-if="modelValue != undefined"
                :src="`https://cdn.discordapp.com/emojis/${modelValue}.png`"
                class="w-5 h-5 object-contain"
              />
              <font-awesome-icon
                v-else
                icon="face-laugh"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <span class="block pl-10 truncate">{{
              modelValue == null
                ? "No emoji selected"
                : $store.getters.getGuildEmojiById(modelValue)?.name ||
                  `Unknown emoji ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 text-base bg-white rounded-md shadow-sm ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div class="w-full p-2">
                <input
                  type="text"
                  class="w-full border-gray-300 rounded-md sm:text-sm"
                  placeholder="Start typing a name or emoji id..."
                />
              </div>
              <div class="overflow-auto max-h-60">
                <ListboxOption
                  as="template"
                  :value="null"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect emoji
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <ListboxOption
                  as="template"
                  v-for="emoji in $store.getters.getGuildEmojis"
                  :key="emoji.id"
                  :value="emoji.id"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      <img
                        alt=""
                        v-lazy="
                          `https://cdn.discordapp.com/emojis/${emoji.id}.${
                            emoji.is_animated ? 'gif' : 'png'
                          }`
                        "
                        class="flex-shrink-0 inline w-4 h-4 mr-1 object-contain"
                      />
                      {{ emoji.name }}
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div v-else-if="type == FormTypeColour" class="mt-1 sm:mt-0 sm:col-span-2">
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <font-awesome-icon
                icon="square"
                class="inline w-4 h-4 mr-1 border-primary"
                :style="{ color: `${RGBIntToRGB(modelValue, 0)}` }"
              />
            </div>
            <span class="block pl-10 truncate">{{
              RGBIntToRGB(modelValue, 0).toUpperCase()
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
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
                :color="RGBIntToRGB(modelValue, 0)"
                @changeColor="SetRGBIntToRGB"
                :sucker-hide="true"
              />
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <div v-else-if="type == FormTypeText" class="mt-1 sm:mt-0 sm:col-span-2">
      <input
        type="text"
        :class="[
          $props.invalid ? 'ring-red-500 border-red-500' : '',
          $props.disabled ? 'bg-gray-100' : 'bg-white',
          'flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm',
        ]"
        :disabled="$props.disabled"
        placeholder="Enter text here..."
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
      />
      <slot />
    </div>

    <div v-else-if="type == FormTypeNumber" class="mt-1 sm:mt-0 sm:col-span-2">
      <input
        type="number"
        :class="[
          $props.invalid ? 'ring-red-500 border-red-500' : '',
          $props.disabled ? 'bg-gray-100' : 'bg-white',
          'flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm',
        ]"
        :disabled="$props.disabled"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
      />
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeTextArea"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <textarea
        type="text"
        :class="[
          $props.invalid ? 'ring-red-500 border-red-500' : '',
          $props.disabled ? 'bg-gray-100' : 'bg-white',
          'flex-1 shadow-sm block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm',
        ]"
        rows="4"
        :disabled="$props.disabled"
        placeholder="Enter text here..."
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
      />
      <slot />
    </div>

    <div
      v-else-if="type == FormTypeDropdown"
      class="mt-1 sm:mt-0 sm:col-span-2"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        :disabled="$props.disabled"
        @update:modelValue="updateValue($event)"
      >
        <div class="relative mt-1">
          <ListboxButton
            :class="[
              $props.invalid ? 'ring-red-500 border-red-500' : '',
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
          >
            <div
              v-if="$props.isLoading"
              class="block h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block truncate">{{
              modelValue == null ? "No value selected" : modelValue
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="$props.isLoading"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div v-else>
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-if="nullable"
                  :value="null"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      Unselect
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
                <ListboxOption
                  as="template"
                  v-for="value in $props.values"
                  :key="value"
                  :value="value"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      {{ value }}
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <slot />
    </div>

    <div v-else-if="type == FormTypeEmbed" class="mt-1 sm:mt-0 sm:col-span-2">
      <embed-builder
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
        :disabled="$props.disabled"
        :invalid="$props.invalid"
      />
    </div>

    <span v-else
      ><span>Unknown type {{ type }}</span>
      <div><slot /></div
    ></span>
  </div>
</template>

<style>
.code_editor > .code_area > pre {
  display: flex;
}
</style>

<script>
import LoadingIcon from "../LoadingIcon.vue";
import debounce from "lodash/debounce";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";

import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

import {
  FormTypeBlank,
  FormTypeToggle,
  FormTypeChannelList,
  FormTypeChannelListCategories,
  FormTypeRoleList,
  FormTypeMemberList,
  FormTypeEmojiList,
  FormTypeColour,
  FormTypeText,
  FormTypeTextArea,
  FormTypeNumber,
  FormTypeDropdown,
  FormTypeEmbed,
} from "./FormValueEnum";
import EmbedBuilder from "./EmbedBuilder.vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
    CheckIcon,
    SelectorIcon,
    XIcon,
    ColorPicker,
    LoadingIcon,
    EmbedBuilder,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    type: {
      type: Number,
      required: true,
      validator(value) {
        return [
          FormTypeBlank,
          FormTypeToggle,
          FormTypeChannelList,
          FormTypeChannelListCategories,
          FormTypeRoleList,
          FormTypeMemberList,
          FormTypeEmojiList,
          FormTypeColour,
          FormTypeText,
          FormTypeTextArea,
          FormTypeNumber,
          FormTypeDropdown,
          FormTypeEmbed,
        ].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: null,
      required: false,
    },
    nullable: {
      type: Boolean,
      required: false,
    },
    invalid: {
      type: Boolean,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
    values: {
      required: false,
    },
  },

  emits: ["update:modelValue"],

  setup() {
    let query = "";
    let isValidSnowflake = false;

    const idRegex = new RegExp("([0-9]{15,20})");

    return {
      FormTypeBlank,
      FormTypeToggle,
      FormTypeChannelList,
      FormTypeChannelListCategories,
      FormTypeRoleList,
      FormTypeMemberList,
      FormTypeEmojiList,
      FormTypeColour,
      FormTypeText,
      FormTypeTextArea,
      FormTypeNumber,
      FormTypeDropdown,
      FormTypeEmbed,

      idRegex,

      query,
      isValidSnowflake,
    };
  },

  methods: {
    refreshStore() {
      switch (props.type) {
        case FormTypeChannelList:
          break;
        case FormTypeChannelListCategories:
          break;
        case FormTypeRoleList:
          break;
        case FormTypeMemberList:
          break;
        case FormTypeEmojiList:
          break;
      }
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

    SetRGBIntToRGB(color) {
      const { r, g, b } = color.rgba;
      this.updateValue((r << 16) + (g << 8) + b);
    },

    updateValue(value) {
      if (this.$props.disabled) {
        return;
      }
      this.$emit("update:modelValue", value);
    },

    filterTextChannels(channels) {
      return channels.filter((c) => {
        return c.type === 0;
      });
    },

    onQueryChange() {
      this.isValidSnowflake = this.query.match(this.idRegex) != undefined;
      this.fetchGuildMemberByQuery(this);
    },

    fetchGuildMemberByQuery: debounce((self) => {
      // TODO: Move into component.
      self.$store.dispatch("fetchGuildMembersByQuery", self.query);
    }, 500),
  },
};
</script>
