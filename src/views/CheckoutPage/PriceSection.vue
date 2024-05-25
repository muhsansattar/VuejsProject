<script setup lang="ts">
import PriceModal from '@/components/Modals/PriceModal.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import { useDataStore } from '@/stores/Index';
const dataStore = useDataStore();
const Total = computed(() => {
  return dataStore.Total;
});
const SubTotal = computed(() => {
  return dataStore.Subtotal;
});
const discountamount = computed(() => {
  return dataStore.discountamount;
});

// console.log(cartitems.subtotal);




const ModalPrice = ref(false);

const ShowModal = () => {
  ModalPrice.value = !ModalPrice.value
}



</script>
<template>
  <div v-if="ModalPrice">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-10 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <PriceModal />
      <div @click="ShowModal" class="absolute top-0 right-2 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div
    class="bg-white dark:bg-extraGrey shadow-4 py-2 lg:py-4 px-3 mt-4  rounded-xl h-[95%] w-full flex flex-col justify-between">
    <div class="">
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold">SubTotal</p>
        <p class=" text-xl sm:text-4xl 2xl:text-5xl font-thin">${{ SubTotal.toFixed(2) }}</p>
      </div>
      <div class="flex items-center justify-between mb-4">
       <div class="">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold ">Descuento </p>
        <p>Cupon: Oferton (10 %)</p>
       </div>
        <p class="text-xl sm:text-4xl 2xl:text-5xl font-thin">${{discountamount.toFixed(2)}}</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold 2xl:text-3xl 2xl:font-bold  ">Total</p>
        <p class="text-xl sm:text-4xl 2xl:text-5xl text-black-2 dark:text-white font-bold">${{ Total.toFixed(2) }}</p>
      </div>
    </div>
    <div class="">
      <div class="flex justify-evenly text-black dark:text-white mb-4  ">
        <button
          class="px-1 xsm:px-2 w-[48%] py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none bg-[#E6E6E7] dark:bg-textGrey">
          Decounto
        </button>
        <button
          class=" bg-[#E6E6E7] w-[48%] dark:bg-textGrey  px-2 py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
          Cupon
        </button>
      </div>
      <div class="flex justify-evenly text-black dark:text-white  ">
        <button
          class="px-1 xsm:px-2 w-[48%] py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none bg-[#E6E6E7] dark:bg-textGrey">
          Seguro Yenvio
        </button>
        <button
          class=" bg-[#E6E6E7] w-[48%] dark:bg-textGrey  px-2 py-2 text-sm sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
          Apartado
        </button>
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
