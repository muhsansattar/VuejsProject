<script setup lang="ts">
import HeaderArea from "@/components/Header/HeaderArea.vue";
import HeaderG from "@/components/Header/HeaderG.vue";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
import Sidebar from "@/views/Sidebar/Sidebar.vue"
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden sticky z-0  ">
    <!-- ===== Sidebar Start ===== -->
    <Sidebar />
    <!-- <SidebarArea/> -->
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <!-- ===== Header Start ===== -->
      <!-- <HeaderArea /> -->
      <HeaderG />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl">
          <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
