<script setup lang="ts">
import { ref } from 'vue';
const isClicked = ref(false);
const Price = ref(false);
const changeBackgroundColor = () => {
    isClicked.value = !isClicked.value;
};

const addPrice =()=>{
  Price.value =!Price.value;
  changeBackgroundColor();
}
</script>
<template>
    <div class="flex justify-center">
        <div class="w-[90%] sm:w-[70%]  flex justify-center ">
            <div class="w-1/2 border"> </div>
            <div class="w-1/2 bg-white dark:bg-extraGrey shadow-4 py-2 lg:py-4 px-1 sm:px-2 md:px-4 h-screen flex flex-col justify-between">
                <div class="">
                    <p class="text-xs sm:text-base md:text-xl xl:text-4xl font-bold ">Total De Productos: 6</p>
                    <div class="flex items-center justify-between mb-4">
                        <p class="font-extrabold text-[12px]  xsm:text-sm md:text-lg xl:text-4xl 2xl:font-bold">Total</p>
                        <p class=" text-black text-base xsm:text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold">$3,547.00</p>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <p class="font-extrabold text-[12px] xsm:text-sm md:text-lg xl:text-4xl 2xl:font-bold ">Por Pager</p>
                        <p class="text-lime-500 text-[11px] xsm:text-base sm:text-xl md:text-2xl xl:text-4xl font-semibold ">$3,475.00</p>
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
                        <button @click="addPrice" :class="[
                            'px-1 sm:px-2 w-[30%] py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none',
                            isClicked ? 'bg-green-700' : 'bg-[#E6E6E7]',
                            isClicked ? 'dark:bg-darkRed' : 'dark:bg-textGrey'
                        ]">
                            Efectivo
                        </button>
                        <button
                            class=" bg-[#E6E6E7] w-[30%] dark:bg-textGrey  px-2 py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                            Tarjeta <br>Debito
                        </button>
                        <button
                            class=" bg-[#E6E6E7] w-[30%] dark:bg-textGrey px-1  xsm:px-2 py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                            tarjita <br> Credito
                        </button>
                    </div>
                    <div class="flex justify-between mt-4">
                        <div class="bg-gray dark:bg-textGrey rounded-md px-1 py-2 w-[30%]">
                            <img class="w-full  object-fit" src="@/assets/images/paypal.png" alt="icon">
                        </div>
                        <div class="bg-gray dark:bg-textGrey rounded-md px-1 py-2 xsm:px-2 w-[30%]">
                            <img class="w-full object-fit" src="@/assets/images/mercado.png" alt="icon">
                        </div>
                        <div class="bg-gray dark:bg-textGrey rounded-md px-1 py-2 xsm:px-2 w-[30%]">
                            <img class="w-full  object-fit" src="@/assets/images/aplazo.png" alt="icon">
                        </div>
                    </div>
                    <div class="flex justify-center mt-5 ">
                        <button
                            class=" bg-textGrey dark:bg-extradarkGrey px-6 sm:px-10 lg:px-20 pt-0 xsm:pt-1 pb-1 xsm:pb-2 text-center text-white text-xl sm:text-3xl lg:text-4xl font-thin rounded-full focus:outline-none">
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>