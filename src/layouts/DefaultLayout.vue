<script setup lang="ts">
import HeaderG from "@/components/Header/HeaderG.vue";
import Sidebar from "@/views/Sidebar/Sidebar.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";

import { ref } from "vue";
const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <Sidebar :show-sidebar="showSidebar" :toggle-sidebar="toggleSidebar" />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <!-- ===== Header Start ===== -->
      <HeaderG :show-sidebar="showSidebar" :toggle-sidebar="toggleSidebar" />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-[100%] p-0 md:p-6 2xl:p-10">
          <slot>
            <Dashboard />
          </slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
