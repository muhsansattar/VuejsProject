<script setup lang="ts">
import ModalOne from '@/views/CheckoutPage/ModalOne.vue'
import Module2 from '@/views/CheckoutPage/Module2.vue';
import Table from '@/views/CheckoutPage/Table.vue'
import { ref } from 'vue';
const moduleShow = ref(false)
const moduleToggle = () => {
  moduleShow.value = !moduleShow.value;
}
const moduleShow2 = ref(false)
const moduleToggle2 = () => {
  moduleShow2.value = !moduleShow2.value;
}

const moduleShow3 = ref(false)
const moduleToggle3 = () => {
  moduleShow3.value = !moduleShow3.value;
}
</script>
<template>
  <div v-if="moduleShow">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <ModalOne />
      <div @click="moduleToggle" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div v-if="moduleShow2">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <Module2 />
      <div @click="moduleToggle2" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div v-if="moduleShow3">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-10 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <Table />
      <div @click="moduleToggle3" class="absolute top-0 right-2 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row gap-3 my-6 md:px-6 px-3   ">
    <div class="bg-white mx-auto flex justify-evenly sm:mx-0 w-auto lg:w-[30%] dark:bg-extraGrey p-2 gap-3 rounded-xl shadow-4  ">
      <div class=" md:w-[50%] flex justify-center items-center">
        <button @click="moduleToggle"
          class=" bg-extradarkGrey w-auto sm:w-[90px] xl:w-[100%] text-sm sm:text-[11px] dark:bg-white text-white dark:text-black rounded-xl px-2 py-1 focus:outline-none 2xl:text-base">
          Iniciar Corte
        </button>
      </div>
      <div class="md:w-[50%] flex justify-center items-center ">
        <div class=" w-full text-center bg-[#E6E6E7] dark:bg-lightGrey rounded-xl">
          <select  class=" bg-transparent text-base   text-black-2  px-2 py-1 focus:outline-none 2xl:text-lg" name="" id="">
          <option value="">Cuentas</option>
          <option @click="moduleToggle2" class="">Creditos</option>
          <option value="">Apartados</option>
        </select>
        </div>
      </div>
    </div>
    <div class=" md:w-[80%] overflow-x-auto rounded-xl bg-white dark:bg-extraGrey shadow-4 ">
      <div class=" bg-white min-w-[616px] lg:w-[100%] dark:bg-extraGrey text-black dark:text-white flex justify-evenly items-center px-2 py-1 p-2 gap-3  ">
        <div class="">
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
        <div class="">
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
          <button @click="moduleToggle3"
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
