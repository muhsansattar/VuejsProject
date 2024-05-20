<script setup lang="ts">
import PriceModal from '@/components/Modals/PriceModal.vue';
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

const ModalPrice = ref(false);

const ShowModal=()=>{
  ModalPrice.value = !ModalPrice.value
}

</script>
<template>
  <div v-if="ModalPrice">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-10 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <PriceModal/>
      <div @click="ShowModal" class="absolute top-0 right-2 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-extraGrey shadow-4 py-2 lg:py-4 px-3 mt-4  rounded-xl h-[95%] w-full flex flex-col justify-between">
    <div class="">
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold">SubTotal</p>
        <p class=" text-xl sm:text-4xl 2xl:text-5xl font-thin">$3547.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold ">Descuento</p>
        <p class="text-xl sm:text-4xl 2xl:text-5xl font-thin">$347.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold  ">Total</p>
        <p class="text-xl sm:text-4xl 2xl:text-5xl text-black-2 dark:text-white font-bold">$3322.00</p>
      </div>
      <div v-if="Price" class="">
        <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold   ">Efectivo</p>
        <p class="text-xl sm:text-4xl 2xl:text-5xl text-green-600 font-thin">$3500.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold">Cambio</p>
        <p class="text-xl sm:text-4xl 2xl:text-5xl text-amber-400 font-bold">$178.00</p>
      </div>
      </div>
    </div>
    <div class="">
      <div class="flex justify-between text-black dark:text-white  ">
        <button @click="addPrice" 
      :class="[
        'px-1 xsm:px-2 md:w-[30%] py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none', 
        isClicked ? 'bg-green-700' : 'bg-[#E6E6E7]',
        isClicked ? 'dark:bg-darkRed' : 'dark:bg-textGrey'
      ]">
          Efectivo
        </button>
        <button class=" bg-[#E6E6E7] md:w-[30%] dark:bg-textGrey  px-2 py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
          Tarjeta <br>Debito
        </button>
        <button class=" bg-[#E6E6E7] md:w-[30%] dark:bg-textGrey px-1  xsm:px-2 py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
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
          <img class="w-full  object-fit" src="@/assets/images/aplazo.png" alt="icon">
        </div>
      </div>
      <div class="flex justify-center mt-5 ">
        <button @click="ShowModal"
          class=" bg-textGrey dark:bg-extradarkGrey px-4 sm:px-10 lg:px-20 lg:text-4xl pt-1 pb-2 text-center text-white text-xl sm:text-3xl font-thin rounded-full focus:outline-none">
          Pagar
        </button>
      </div>
    </div>
  </div>
</template>
