<script setup lang="ts">
import HeaderArea from "@/components/Header/HeaderArea.vue";
import HeaderG from "@/components/Header/HeaderG.vue";
import SidebarArea from "@/components/Sidebar/SidebarArea.vue";
import Sidebar from "@/views/Sidebar/Sidebar.vue";
import ECommerceView from "@/views/Dashboard/ECommerceView.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <Sidebar />
    <!-- <SidebarArea/> -->
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <!-- ===== Header Start ===== -->
      <HeaderG />
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
