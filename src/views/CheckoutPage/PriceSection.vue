<script setup lang="ts">

</script>
<template>
  <div class="bg-white dark:bg-extraGrey shadow-4 p-3 my-6 mx-3 rounded-xl h-[90%] flex flex-col justify-between ">
    <div class="">
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold ">SubTotal</p>
        <p class="text-4xl font-thin">$3547.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold  ">Descuento</p>
        <p class="text-4xl font-thin">$347.00</p>
      </div>
      <div class="flex items-center justify-between mb-4">
        <p class="font-extrabold ">Total</p>
        <p class="text-4xl text-black-2 dark:text-white font-bold">$3547.00</p>
      </div>
    </div>
    <div class="">
      <div class="flex justify-between text-black dark:text-white gap-5">
        <button class=" bg-[#E6E6E7] dark:bg-textGrey px-3 py-3   text-xl leading-none  rounded-md focus:outline-none">
          Efectivo
        </button>
        <button class=" bg-[#E6E6E7] dark:bg-textGrey px-2 py-3  text-xl leading-none  rounded-md focus:outline-none">
          Tarjeta <br>Debito
        </button>
        <button class=" bg-[#E6E6E7] dark:bg-textGrey  px-2 py-3   text-xl leading-none  rounded-md focus:outline-none">
          tarjita <br> Credito
        </button>
      </div>
      <div class="flex justify-between gap-5 mt-4">
        <div class="bg-gray dark:bg-textGrey rounded-lg p-2 w-20">
          <img class="w-full  object-fit" src="@/assets/images/paypal.png" alt="icon">
        </div>
        <div class="bg-gray dark:bg-textGrey rounded-lg p-2 w-20">
          <img class="w-full object-fit" src="@/assets/images/mercado.png" alt="icon">
        </div>
        <div class="bg-gray dark:bg-textGrey rounded-lg p-2 w-20">
          <img class="w-full object-fit" src="@/assets/images/aplazo.png" alt="icon">
        </div>
      </div>
      <div class="flex justify-center  mt-10 ">
        <button
          class=" bg-textGrey dark:bg-extradarkGrey px-10 pt-1 pb-3 text-center  text-white text-3xl font-thin  rounded-full focus:outline-none">
          procesar
        </button>
      </div>
    </div>

  </div>
</template>
