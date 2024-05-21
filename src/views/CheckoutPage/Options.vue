<script setup lang="ts">
import { ref } from 'vue';
const dropdownOpen = ref(false)
</script>
<template>
  <div
    class="flex items-center text-black-2 dark:text-white gap-5 pt-6 md:mx-6 lg:mx-0 mx-2 px-0 lg:px-6 relative  overflow-x-auto  ">
    <a href="#">Checador</a>
    <select class="bg-transparent  focus:outline-none  hello">
      <option class="bg-white dark:bg-black">Cajas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black ">Articulos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Clientes</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
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
    <!-- <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Utleries</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select> -->
    <div class="relative">
      <div @click.prevent="dropdownOpen = !dropdownOpen" class="flex items-center gap-2 md:gap-4">
        Centus
        <svg :class="dropdownOpen && 'rotate-180'" class="fill-current" width="12" height="8" viewBox="0 0 12 8"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill="" />
        </svg>
      </div>
      <div v-if="dropdownOpen"
        class="absolute z-1 right-0 top-0 mt-0 w-20 md:w-full overflow-hidden flex flex-col rounded-bl-2xl rounded-br-2xl bg-white dark:bg-darkGrey shadow-4 dark:border-strokedark">
        <ul class="flex flex-col border-b border-stroke dark:border-strokedark">
          <li>
            <div @click.prevent="dropdownOpen = !dropdownOpen"
              class="flex items-center text-sm pl-2 md:pl-4 py-3 font-medium border-b hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
              Centus
            </div>
          </li>
          <li>
            <div @click.prevent="dropdownOpen = !dropdownOpen"
              class="flex items-center text-sm pl-2 md:pl-4 py-3 font-medium hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
              Creditos
            </div>
          </li>

          <li>
            <div
              class="flex items-center gap-3.5 text-sm pl-2 md:pl-4 py-3 font-medium hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
              Apartados
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>