<script setup lang="ts">
import ModalOne from '@/views/CheckoutPage/ModalOne.vue'
import Module2 from '@/views/CheckoutPage/Module2.vue';
import { ref } from 'vue';
const moduleShow = ref(false)
const moduleToggle =()=>{
  moduleShow.value = !moduleShow.value;
}
const moduleShow2 = ref(false)
const moduleToggle2 =()=>{
  moduleShow2.value = !moduleShow2.value;
}
</script>
<template>
  <div v-if="moduleShow">
    <div class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 top-0">
        
    <ModalOne />
    <div @click="moduleToggle" class="absolute top-4 right-20 w-10">
          <img class="w-full" src="@/assets/images/delete.png" alt="">
        </div>
    </div>
  </div>
  <div v-if="moduleShow2">
    <div class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 top-0">
        
    <Module2 />
    <div @click="moduleToggle2" class="absolute top-4 right-20 w-10">
          <img class="w-full" src="@/assets/images/delete.png" alt="">
        </div>
    </div>
  </div>
    <div class="flex flex-col sm:flex-row gap-3 my-6 md:px-6 px-3   ">
    <div class="bg-white mx-auto sm:mx-0 max-w-[220px] dark:bg-extraGrey flex p-2 gap-3 rounded-xl shadow-4     ">
      <div class="flex w items-center">
        <button @click="moduleToggle" class=" bg-extradarkGrey dark:bg-white text-white dark:text-black rounded-xl px-2 py-1 focus:outline-none">
          Iniciar Corte
        </button>
      </div>
      <div class="flex items-center">
        <button @click="moduleToggle2" class="bg-[#E6E6E7] dark:bg-lightGrey  rounded-xl text-black-2  px-2 py-1 focus:outline-none">
          Apartado
        </button>
      </div>
    </div>
    <div class="overflow-x-auto rounded-xl shadow-4">
      <div class=" bg-white min-w-[616px] dark:bg-extraGrey text-black dark:text-white flex items-center px-2 py-1 p-2 gap-3 rounded-xl shadow-4">
      <div class="">
        <img src="@/assets/images/Asset8.png" alt="">
      </div>
      <div class="">
        <p class="font-extrabold text-[12px]">No. Cliente</p>
        <span class="text-[11px]">TDA-00001</span>
      </div>
      <div class="">
        <p class="font-extrabold text-[12px]">Nombre</p>
        <span class="text-[11px]">Publico Genral</span>
      </div>
      <div class="">
        <p class="font-extrabold text-[12px]">Credito disponible</p>
        <span class="text-[11px]">$1234.00</span>
      </div>
      <div class="">
        <p class="font-extrabold text-[12px]">Vendedor</p>
        <select class="bg-transparent text-[11px] focus:outline-none">
          <option>Juana Olivia</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </div>
      <div class="">
        <p class="font-extrabold text-[12px]">Canal</p>
        <select class="bg-transparent text-[11px] focus:outline-none ">
          <option class="p-0 m-0">Tiende</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </div>
      <div class="flex items-center">
        <button class="bg-[#E6E6E7] dark:bg-lightGrey text-black px-2 py-1 rounded-xl focus:outline-none">
          Apartado
        </button>
      </div>
      <div class="w-5">
        <img class="object-contain" src="@/assets/images/Trash.png" alt="">
      </div>
    </div>
    </div>
  </div>
</template>
