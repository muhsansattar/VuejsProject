<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
import DarkModeSwitcher from "./DarkModeSwitcher.vue";
import DropdownMessage from "./DropdownMessage.vue";
import DropdownNotification from "./DropdownNotification.vue";
import DropdownUser from "./DropdownUser.vue";

const { isSidebarOpen, toggleSidebar } = useSidebarStore();
</script>

<template>
  <header class="sticky top-0 flex w-full bg-white dark:bg-extradarkGrey z-9">
    <div
      class="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11"
    >
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden"></div>
      <div class="hidden sm:flex sm:ml-7">
        <div class="dark:hidden pr-4">
          <img src="@/assets/vueJs/alridD.png" alt="" />
        </div>
        <div class="hidden dark:block pr-4">
          <img src="@/assets/vueJs/alrid.png" alt="" />
        </div>
        <div class="pl-4 border-l-2 border-darkGrey">
          <h3 class="text-xl">Martes, 07 julio 2024</h3>
        </div>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <DropdownMessage />

          <DropdownNotification />
        </ul>

        <DropdownUser />
        <DarkModeSwitcher />
      </div>
    </div>
  </header>
</template>
