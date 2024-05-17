<script setup lang="ts">
import { ref } from 'vue';
const Price = ref(false);
const isClicked = ref(false); 

const changeBackgroundColor = () => {
  isClicked.value = !isClicked.value;
};

const addPrice =()=>{
  Price.value =!Price.value;
  changeBackgroundColor();
}

</script>
<template>
  <div class="bg-white dark:bg-extraGrey shadow-4 py-2 px-3 mt-4  rounded-xl h-[95%] w-full flex flex-col justify-between">
    <div class="">
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold ">SubTotal</p>
        <p class=" text-xl sm:text-4xl font-thin">$3547.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold  ">Descuento</p>
        <p class="text-xl sm:text-4xl font-thin">$347.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold  ">Total</p>
        <p class="text-xl sm:text-4xl text-black-2 dark:text-white font-bold">$3322.00</p>
      </div>
      <div v-if="Price" class="">
        <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold  ">Efectivo</p>
        <p class="text-xl sm:text-4xl text-green-600 font-thin">$3500.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold  ">Cambio</p>
        <p class="text-xl sm:text-4xl text-amber-400 font-bold">$178.00</p>
      </div>
      </div>
    </div>
    <div class="">
      <div class="flex justify-between text-black dark:text-white  ">
        <button @click="addPrice" 
      :class="[
        'px-1 xsm:px-2 md:w-[30%] py-2 text-sm sm:text-xl leading-none rounded-md focus:outline-none', 
        isClicked ? 'bg-green-700' : 'bg-[#E6E6E7]',
        isClicked ? 'dark:bg-darkRed' : 'dark:bg-textGrey'
      ]">
          Efectivo
        </button>
        <button class=" bg-[#E6E6E7] md:w-[30%] dark:bg-textGrey  px-2 py-2 text-sm sm:text-xl leading-none rounded-md focus:outline-none">
          Tarjeta <br>Debito
        </button>
        <button class=" bg-[#E6E6E7] md:w-[30%] dark:bg-textGrey px-1  xsm:px-2 py-2 text-sm sm:text-xl leading-none rounded-md focus:outline-none">
          tarjita <br> Credito
        </button>
      </div>
      <div class="flex justify-between mt-4">
        <div class="bg-gray dark:bg-textGrey rounded-lg px-1 py-2 xsm:px-2 w-16 xsm:w-20 md:w-[30%]">
          <img class="w-full  object-fit" src="@/assets/images/paypal.png" alt="icon">
        </div>
        <div class="bg-gray dark:bg-textGrey rounded-lg px-1 py-2 xsm:px-2 w-16 xsm:w-20 md:w-[30%]">
          <img class="w-full object-fit" src="@/assets/images/mercado.png" alt="icon">
        </div>
        <div class="bg-gray dark:bg-textGrey rounded-lg px-1 py-2 xsm:px-2 w-16 xsm:w-20 md:w-[30%]">
          <img class="w-full object-fit" src="@/assets/images/aplazo.png" alt="icon">
        </div>
      </div>
      <div class="flex justify-center mt-5 ">
        <button
          class=" bg-textGrey dark:bg-extradarkGrey px-4 sm:px-10 pt-1 pb-2 text-center text-white text-xl sm:text-3xl font-thin rounded-full focus:outline-none">
          procesar
        </button>
      </div>
    </div>
  </div>
</template>
