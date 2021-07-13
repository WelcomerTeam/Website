<template>
  <div>
    <div class="flex items-center flex-shrink-0 px-4">Guild selector</div>
    <nav
      class="flex flex-col flex-1 px-3 mt-5 overflow-y-auto divide-y divide-gray-300 "
      aria-label="Sidebar"
    >
      <div>
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-second-800 text-primary'
              : 'text-secondary-light',
            'hover:bg-gray-200 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          <component
            :is="item.icon"
            :class="[
              item.current ? 'text-primary' : 'text-secondary',
              'flex-shrink-0 w-6 h-6 mr-4',
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </a>
      </div>
      <div class="pt-3 mt-3">
        <div>
          <a
            v-for="item in secondaryNavigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-second-800 text-primary'
                : 'text-secondary-light',
              'hover:bg-gray-200 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                item.current ? 'text-primary' : 'text-secondary',
                'flex-shrink-0 w-6 h-6 mr-4',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "a", href: "#", icon: ClockIcon, current: false },
  { name: "b", href: "#", icon: ScaleIcon, current: false },
  { name: "c", href: "#", icon: CreditCardIcon, current: false },
  { name: "d", href: "#", icon: UserGroupIcon, current: false },
  { name: "e", href: "#", icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: "f", href: "#", icon: CogIcon },
  { name: "g", href: "#", icon: QuestionMarkCircleIcon },
  { name: "h", href: "#", icon: ShieldCheckIcon },
];
const cards = [
  { name: "Members", href: "#", icon: ScaleIcon, amount: "123" },
  { name: "Messages Today", href: "#", icon: ScaleIcon, amount: "44,725" },
  { name: "Pogging?", href: "#", icon: ScaleIcon, amount: "yes" },
  // More items...
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MenuAlt1Icon,
    OfficeBuildingIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
      secondaryNavigation,
    };
  },
};
</script>
