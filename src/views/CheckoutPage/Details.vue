<script setup lang="ts">
import Table from '@/views/CheckoutPage/Table.vue'
import { ref } from 'vue';
const moduleShow = ref(false)
const moduleToggle = () => {
  moduleShow.value = !moduleShow.value;
}

const dropdownOpen = ref(false);

const openDropDown = ()=>{
  dropdownOpen.value = !dropdownOpen.value;
}

import { defineProps } from "vue";

const props = defineProps({
  apartadosopen: {
    type: Boolean,
    required: true,
  },
  changeApartadoShow: {
    type: Function,
    required: true,
  },
});

const handleApartadoShow = (event: MouseEvent) => {
  props.changeApartadoShow();
  openDropDown();
};

</script>
<template>
  <div v-if="moduleShow">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-10 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <Table />
      <div @click="moduleToggle" class="absolute top-0 right-2 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row gap-3 my-6 md:px-6 px-3   ">
    <div
      class="bg-white mx-auto flex justify-evenly sm:mx-0 w-auto lg:w-[30%] dark:bg-extraGrey p-2 gap-3 rounded-xl shadow-4  ">
      <div class=" md:w-[50%] flex justify-center items-center">
        <button 
          class=" bg-extradarkGrey w-auto sm:w-[90px] xl:w-[100%] text-sm sm:text-[11px] dark:bg-white text-white dark:text-black rounded-xl px-2 py-1 focus:outline-none 2xl:text-base">
          Iniciar Corte
        </button>
      </div>
      <div class=" relative z-1 md:w-[50%] flex justify-center items-center ">
        <div class=" w-full text-center text-black dark:text-white rounded-xl">
          <div @click="openDropDown" class="flex items-center gap-2 md:gap-4">
            Centus
          <svg :class="dropdownOpen && 'rotate-180'" class="fill-current" width="12" height="8"
            viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
              fill="" />
          </svg>
          </div>
          <div v-if="dropdownOpen"
            class="absolute z-10 right-0 top-0 mt-0 w-20 md:w-full overflow-hidden flex flex-col rounded-bl-2xl rounded-br-2xl bg-white dark:bg-darkGrey shadow-4 dark:border-strokedark">
            <ul class="flex flex-col border-b border-stroke dark:border-strokedark">
              <li>
                <div @click="openDropDown"
                  class="flex items-center text-sm pl-2 md:pl-4 py-3 font-medium border-b hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                  Centus
                </div>
              </li>
              <li>
                <div @click="openDropDown"
                  class="flex items-center text-sm pl-2 md:pl-4 py-3 font-medium hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                  Creditos
                </div>
              </li>

              <li>
                <div @click="handleApartadoShow"
                  class="flex items-center gap-3.5 text-sm pl-2 md:pl-4 py-3 font-medium hover:pl-0 md:hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                  Apartados
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class=" md:w-[80%] overflow-x-auto rounded-xl bg-white dark:bg-extraGrey shadow-4 ">
      <div
        class=" bg-white min-w-[640px] lg:w-[100%] dark:bg-extraGrey text-black dark:text-white flex justify-evenly items-center px-2 py-1 p-2 gap-3  ">
        <div class=" bg-[#E6E6E7] p-1 rounded-md">
          <img src="@/assets/images/Asset8.png" alt="">
        </div>
        <div class="">
          <p class="font-extrabold text-[12px]   ">No. Cliente</p>
          <span class="text-[11px] ">TDA-00001</span>
        </div>
        <div class="">
          <p class="font-extrabold text-[12px] ">Nombre</p>
          <span class="text-[11px] ">Publico Genral</span>
        </div>
        <div class="">
          <p class="font-extrabold text-[12px] ">Credito disponible</p>
          <span class="text-[11px] ">$1234.00</span>
        </div>
        <div class=" relative">
          <p class="font-extrabold text-[12px] ">Vendedor</p>
          <select class="bg-transparent text-[11px]  focus:outline-none">
            <option>Juana Olivia</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
        <div class="">
          <p class="font-extrabold text-[12px] ">Canal</p>
          <select class="bg-transparent text-[11px]  focus:outline-none ">
            <option class="p-0 m-0">Tiende</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
        <div class="flex items-center  ">
          <button @click="moduleToggle"
            class="bg-[#E6E6E7] text-[12px] sm:w-[80px] 2xl:w-[100%] dark:bg-lightGrey text-black px-2 py-1 rounded-xl focus:outline-none 2xl:text-2xl">
            Iniciar venta
          </button>
        </div>
        <div class="w-5">
          <img class="object-contain" src="@/assets/images/Trash.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
