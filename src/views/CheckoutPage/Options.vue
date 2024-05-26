<script setup lang="ts">
import clintModal from "@/components/Modals/ClintModal.vue"
const dropdownOpen = ref(false);

import { ref, computed } from "vue";
const moduleShow2 = ref(false);

</script>
<template>
  <div
    class="flex items-center text-black-2 dark:text-white gap-5 pt-6 md:mx-6 lg:mx-0 mx-2 px-0 lg:px-6 relative overflow-x-auto"
  >
    <a href="#">Checador</a>
    <select class="bg-transparent focus:outline-none hello">
      <option class="bg-white dark:bg-black">Cajas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Articulos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <div
      class="flex items-center cursor-pointer"
      @click.prevent="moduleShow2 = !moduleShow2"
    >
      <button>Clientes</button>
      <img
        class="ml-4 w-[9px] dark:hidden"
        src="../../assets/images//right-arrow.png"
      />
      <img
        class="ml-4 w-[9px] hidden dark:block"
        src="../../assets/images//right-arrow-white.png"
      />
    </div>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Ventas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Movimientos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Utleries</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
  </div>

  <div v-if="moduleShow2">
    <div
      class="bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0"
    >
      <!-- ////////////// -->

      <clintModal/>
      <!-- ///////////// -->
      <div
        @click.prevent="moduleShow2 = !moduleShow2"
        class="absolute top-2 right-4 w-10"
      >
        <img class="w-full" src="@/assets/images/delete.png" alt="" />
      </div>
    </div>
  </div>
</template>
