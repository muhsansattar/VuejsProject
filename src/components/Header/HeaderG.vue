<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
import DarkModeSwitcher from "./DarkModeSwitcher.vue";
import DropdownMessage from "./DropdownMessage.vue";
import DropdownNotification from "./DropdownNotification.vue";
import DropdownUser from "./DropdownUser.vue";

const { isSidebarOpen, toggleSidebar } = useSidebarStore();
</script>

<template>
  <header
    class="sticky top-0  flex w-full bg-white dark:bg-extradarkGrey dark:drop-shadow-none z-9"
  >
    <div
      class="flex flex-grow items-center justify-between py-4 px-4  md:px-6 2xl:px-11"
    >
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <!-- <button
          class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          @click="
            () => {
              console.log('Toggling Sidebar');
              toggleSidebar();
            }
          "
        >
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="du-block absolute right-0 h-full w-full">
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-300': !isSidebarOpen }"
              ></span>
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-400': !isSidebarOpen }"
              ></span>
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-500': !isSidebarOpen }"
              ></span>
            </span>
            <span class="du-block absolute right-0 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-[0]': !isSidebarOpen }"
              ></span>
              <span
                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 dealy-200': !isSidebarOpen }"
              ></span>
            </span>
          </span>
        </button> -->
        <!-- Hamburger Toggle BTN -->
        <!-- <router-link class="block flex-shrink-0 lg:hidden" to="/">
          <img src="@/assets/images/logo/logo-icon.svg" alt="Logo" />
        </router-link> -->
      </div>
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
          <!-- Chat Notification Area -->
          <DropdownMessage />
          <!-- Chat Notification Area -->

          <!-- Notification Menu Area -->
          <DropdownNotification />
          <!-- Notification Menu Area -->
        </ul>

        <!-- User Area -->
        <DropdownUser />
        <!-- User Area -->
        <!-- Dark Mode Toggler -->
        <DarkModeSwitcher />
        <!-- Dark Mode Toggler -->
      </div>
    </div>
  </header>
</template>
