<template>
  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-2xl font-medium leading-6 text-gray-900">Page Title</h1>
    </div>

    <!-- Toggle Active -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Active Toggle
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Switch
            :class="[
              true ? 'bg-green-500' : 'bg-gray-400',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
            ]"
          >
            <span class="sr-only">Use setting</span>
            <span
              :class="[
                true ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
              ]"
            >
              <span
                :class="[
                  true
                    ? 'opacity-0 ease-out duration-100'
                    : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="w-3 h-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 12 12"
                >
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
                  true
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
        </div>
      </div>
    </div>
    <!-- Toggle Disabled -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Inactive Toggle
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Switch
            :class="[
              false ? 'bg-green-500' : 'bg-gray-400',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
            ]"
          >
            <span class="sr-only">Use setting</span>
            <span
              :class="[
                false ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
              ]"
            >
              <span
                :class="[
                  false
                    ? 'opacity-0 ease-out duration-100'
                    : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="w-3 h-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 12 12"
                >
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
                  false
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
        </div>
      </div>
    </div>

    <!-- List Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Text Channel List
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selected">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiPound"
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <span class="block pl-10 truncate">{{ selected.name }}</span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="channel in channels"
                    :key="channel.id"
                    :value="channel"
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
                        <svg-icon
                          type="mdi"
                          :path="mdiPound"
                          :class="[active ? 'text-white' : 'text-gray-400', 'inline w-4 h-4 mr-1']"
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
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>

    <!-- Channel Selection with Categories -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Channel w Categories List
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selectedB">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiPound"
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <span class="block pl-10 truncate">
                  {{ selectedB.name }}
                </span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <div
                    v-for="category in channelsWithCategories"
                    :key="category"
                  >
                    <div class="py-3" v-if="category.name && category.channels.length !== 0">
                      <span class="pl-2 text-xs font-bold uppercase">{{ category.name }}</span>
                    </div>
                    <ListboxOption
                      as="template"
                      v-for="channel in category.channels"
                      :key="channel.id"
                      :value="channel"
                      v-slot="{ active, selectedB }"
                    >
                      <li
                        :class="[
                          active ? 'text-white bg-primary' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9',
                        ]"
                      >
                        <span
                          :class="[
                            selectedB ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          ]"
                        >
                          <svg-icon
                            type="mdi"
                            :path="channel.type == 2 ? mdiVolumeHigh : mdiPound"
                            :class="[active ? 'text-white' : 'text-gray-400', 'inline w-4 h-4 mr-1']"
                          />
                          {{ channel.name }}
                        </span>

                        <span
                          v-if="selectedB"
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
        </div>
      </div>
    </div>

    <!-- Role Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Role List
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selectedC">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiAt"
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <span class="block pl-10 truncate">{{ selectedC.name }}</span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="role in roles"
                    :key="role.id"
                    :value="role"
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
                        <svg-icon
                          type="mdi"
                          :path="mdiCheckboxBlank"
                          :class="[active ? 'text-white' : 'text-gray-400', 'inline w-4 h-4 mr-1 border-primary']"
                          :style="{ color: `${rgbIntToRGB(role?.colour, 0)}` }"
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
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>

    <!-- Member Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Member List
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selectedD">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiAccount"
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <span class="block pl-10 truncate">{{ selectedD.name }}#{{ selectedD.discriminator }}</span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 w-full mt-1 text-base bg-white rounded-md shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <div class="w-full p-2">
                    <input type="text" class="w-full border-gray-300 rounded-md sm:text-sm " placeholder="Start typing a name or user id..."/>
                  </div>
                  <div class="overflow-auto max-h-60">
                    <ListboxOption
                      as="template"
                      v-for="member in members"
                      :key="member.id"
                      :value="member"
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
                          <img alt="" v-lazy="`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=32`" class="flex-shrink-0 inline w-4 h-4 mr-1 rounded-full" />
                          {{ member.name }}#{{ member.discriminator }}
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
        </div>
      </div>
    </div>

    <!-- Emoji Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Emoji List
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selectedE">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <img v-lazy="`https://cdn.discordapp.com/emojis/${selectedE.id}.png`" class="w-5 h-5"/>
                </div>
                <span class="block pl-10 truncate">{{ selectedE.name }}</span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 w-full mt-1 text-base bg-white rounded-md shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <div class="w-full p-2">
                    <input type="text" class="w-full border-gray-300 rounded-md sm:text-sm " placeholder="Start typing a name or emoji id..."/>
                  </div>
                  <div class="overflow-auto max-h-60">
                    <ListboxOption
                      as="template"
                      v-for="emoji in emojis"
                      :key="emoji.id"
                      :value="emoji"
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
                          <img alt="" v-lazy="`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.is_animated ? 'gif' : 'png'}`" class="flex-shrink-0 inline w-4 h-4 mr-1 rounded-full" />
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
        </div>
      </div>
    </div>

    <!-- Colour Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Colour Input
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Listbox as="div" v-model="selectedF">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiCheckboxBlank"
                    class="inline w-4 h-4 mr-1 border-primary"
                    :style="{ color: `${rgbIntToRGB(selectedF, 0)}` }"
                  />
                </div>
                <span class="block pl-10 truncate">{{ rgbIntToRGB(selectedF) }}</span>
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
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
                <ListboxOptions
                  class="absolute z-10 mt-1"
                >
                  <ColorPicker theme="light" :color="rgbIntToRGB(selectedF)" @changeColor="changeColour" :sucker-hide="true" />
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>

    <!-- Text Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Text Input
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input
            type="text"
            name="username"
            id="username"
            autocomplete="username"
            class="flex-1 block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter text here..."
          />
        </div>
      </div>
    </div>

        <!-- Number Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Number Input
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input
            type="number"
            name="username"
            id="username"
            autocomplete="username"
            class="flex-1 block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>
    </div>

    <!-- Text area Selection -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Text area Input
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <textarea
            type="text"
            name="username"
            id="username"
            autocomplete="username"
            class="flex-1 block w-full min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter text here..."
          />
        </div>
      </div>
    </div>

    <!-- Text with checkbox -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Text Input with checkbox
        </label>
        <div class="flex mt-1 sm:mt-0 sm:col-span-2">
          <input
            type="text"
            name="username"
            id="username"
            autocomplete="username"
            class="block w-full min-w-0 mr-4 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter text here..."
          />
          <label class="block mr-4 font-medium text-secondary-light sm:mt-px sm:pt-2">INLINE</label>
          <input
            type="checkbox"
            name="username"
            id="username"
            autocomplete="username"
            class="block w-10 h-10 min-w-0 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter text here..."
          />
        </div>
      </div>
    </div>

    <!-- Text with cancel -->
    <div class="space-y-8">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          for="username"
          class="block font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Text Input with close
        </label>
        <div class="flex mt-1 sm:mt-0 sm:col-span-2">
          <input
            type="text"
            name="username"
            id="username"
            autocomplete="username"
            class="block w-full min-w-0 mr-4 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Enter text here..."
          />
          <button
            class="block h-10 min-w-0 bg-red-500 border-gray-300 rounded-md w-11 focus:ring-primary focus:border-primary sm:text-sm">
            <XIcon class="w-6 h-6 mx-auto text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hu-color-picker {
  width: 218px !important;
}
</style>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { XIcon } from '@heroicons/vue/outline';
import { mdiPound, mdiBullhorn, mdiVolumeHigh, mdiAt, mdiCheckboxBlank, mdiAccount } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

const channels = [
  { id: "1", name: "rules", type: 0 },
  { id: "2", name: "welcome", type: 0 },
  { id: "3", name: "news", type: 0 },
  { id: "4", name: "general", type: 0 },
  { id: "5", name: "support", type: 0 },
  { id: "6", name: "support-2", type: 0 },
  { id: "7", name: "bot-commands", type: 0 },
  { id: "8", name: "status", type: 0 },
  { id: "9", name: "nsfw-general", type: 0 },
  { id: "10", name: "testing", type: 0 },
];

const channelsWithCategories = [
  {
    channels: [
      { id: "1", name: "rules", type: 0 },
      { id: "2", name: "welcome", type: 0 },
      { id: "3", name: "news", type: 0 },
    ],
  },
  {
    name: "General",
    channels: [
      { id: "4", name: "general", type: 0 },
      { id: "5", name: "support", type: 0 },
      { id: "6", name: "text", type: 0 },
      { id: "11", name: "dm", type: 1 },
      { id: "12", name: "voice", type: 2 },
      { id: "13", name: "group dm", type: 3 },
      { id: "14", name: "category", type: 4 },
      { id: "15", name: "news", type: 5 },
      { id: "16", name: "store", type: 6 },
      { id: "17", name: "news thread", type: 7 },
      { id: "18", name: "public thread", type: 8 },
      { id: "19", name: "private thread", type: 8 },
      { id: "20", name: "stage channel", type: 8 },
    ],
  },
  {
    name: "Tickets",
    channels: [],
  },
  {
    name: "Others",
    channels: [
      { id: "7", name: "bot-commands", type: 0 },
      { id: "8", name: "status", type: 0 },
      { id: "9", name: "nsfw-general", type: 0 },
      { id: "10", name: "testing", type: 0 },
    ],
  },
];

const roles = [
  { id: "1", name: "members", is_assignable: true, colour: 15485081 },
  { id: "2", name: "muted", is_assignable: true, colour: 16777215 },
  { id: "3", name: "admins", is_assignable: false },
]

const members = [
  { id: "143090142360371200", name: "ImRock", discriminator: "0001", avatar: "a_70444022ea3e5d73dd00d59c5578b07e" },
  { id: "435026857801416705", name: 'pilonpl', discriminator: "4015", avatar: '7890143d83d6a770d8490123d3ab130b'},
  { id: "252420180704100352", name: 'Ganso Foda', discriminator: "9747", avatar: 'a_0247a112cc65db3b73d92d9a73659b55'},
  { id: "367402349234356235", name: 'KOALA-SAN', discriminator: "7147", avatar: '90397e2155dd98e5f4aa212a5ee370bf'},
  { id: "272825056323960844", name: 'Jo3ker', discriminator: "8985", avatar: '4201083637533f15905d79343aca0445'},
  { id: "318218758365773824", name: 'Andy', discriminator: "5104", avatar: '4434e5641e7ad6d175b5dac979b1ef07'},
  { id: "243590632180809728", name: 'phily', discriminator: "6360", avatar: 'de60ffcd47ac35ec6a81139effddbab7'},
  { id: "338785644186959875", name: 'Deep Manatee', discriminator: "1412", avatar: 'a_b205b077b78d0eb2881b3b0f2d51ed40'},
  { id: "111054778309619712", name: 'Risu', discriminator: "4860", avatar: 'fcd29b92578ae75ec0dc85db580101ad'},
  { id: "198313047129849866", name: 'Soldier', discriminator: "7676", avatar: 'a_6f45f81d512e11397261a60b43824001'},
  { id: "371568397575651339", name: 'm1scy', discriminator: "7772", avatar: 'b1f74c24dd30c5aef2583dccd5ab8a32'}
]

const emojis = [
  { id: "739614945045643447", name: "blobpain", is_animated: false },
  { id: "621100584375812128", name: "comfyfast", is_animated: true },
]

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
    SvgIcon,
    XIcon,
    ColorPicker,
  },
  setup() {
    const selected = ref(channels[3]);
    const selectedB = ref(channelsWithCategories[0].channels[0]);
    const selectedC = ref(roles[0]);
    const selectedD = ref(members[0]);
    const selectedE = ref(emojis[0]);
    const selectedF = ref(16711680); // # FF0000

    return {
      channels,
      channelsWithCategories,
      roles,
      members,
      emojis,

      selected,
      selectedB,
      selectedC,
      selectedD,
      selectedE,
      selectedF,

      mdiPound,
      mdiBullhorn,
      mdiVolumeHigh,
      mdiAt,
      mdiCheckboxBlank,
      mdiAccount,
    };
  },
  methods: {
    rgbIntToRGB(rgbInt, defaultValue) {
      return "#" + (rgbInt | defaultValue).toString(16).slice(-6).padStart(6, "0");
    },
    changeColour(color) {
      const { r, g, b } = color.rgba;
      this.selectedF = (r << 16) + (g << 8) + b;
    }
  }
};
</script>
