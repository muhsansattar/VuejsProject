<script setup lang="ts">
import { ref } from 'vue';
const isClicked = ref(false);
const Effectivo = ref(false);
const Credito = ref(false);
const Debito = ref(false);
const trasnferencia = ref(false);
const aplazo = ref(false);
const PayPal = ref(false)
const changeBackgroundColor = () => {
    isClicked.value = !isClicked.value;
};

const addPrice = () => {
    Effectivo.value = !Effectivo.value;
    changeBackgroundColor();
}

import { useDataStore } from '@/stores/Index';
const dataStore = useDataStore();
const Subtotal = dataStore.Subtotal;
</script>
<template>
    <div class="flex flex-col justify-center items-center ">
        <div class="w-[90%] sm:w-[80%] py-2 lg:py-4 bg-white dark:bg-extraGrey shadow-4 rounded-3xl">
            <div class=" w-full flex justify-center  ">
                <div class="w-1/2 h-full px-2 sm:px-4 md:px-8 ">
                    <p class="text-xs sm:text-sm text-black  xl:text-2xl font-semibold mb-6 ">Forma de pago</p>
                    <div v-if="Effectivo" class="border-t border-lightGrey">
                        <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">
                            Effectivo</p>
                        <div class="w-full xsm:w-2/3 mx-auto">
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Recibido</p>
                                <p
                                    class="text-lime-500 font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                                    $1000.00</p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    cobrar</p>
                                <p class="text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-2xl font-bold">$800.00
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Cambio</p>
                                <p class="text-amber-600 text-[12px] xsm:text-sm sm:text-lg  xl:text-2xl font-bold">
                                    $200.00</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="Credito" class="border-t border-lightGrey">
                        <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">Tarjita
                            Credito</p>
                        <div class="w-full xsm:w-2/3 mx-auto">
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Banco</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    <select class="bg-transparent focus:outline-none">
                                        <option value="">BANAMAX</option>
                                    </select>
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Monto</p>
                                <p class="text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">$800.00
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    MSI</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    <select class="bg-transparent focus:outline-none">
                                        <option value="">3 MSI</option>
                                    </select>
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Autorization</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">008549
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="trasnferencia" class="border-t border-lightGrey">
                        <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">
                            Trasnferencia</p>
                        <div class="w-full xsm:w-2/3 mx-auto">
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Banco</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    <select class="bg-transparent focus:outline-none">
                                        <option value="">BANAMAX</option>
                                    </select>
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Monto</p>
                                <p class="text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">$800.00
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Autorization</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">008549
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Fecha</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    17/05/2024</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="aplazo" class="border-t border-lightGrey">
                        <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">
                            Aplazo</p>
                        <div class="w-full xsm:w-2/3 mx-auto">
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Monto</p>
                                <p class="text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    $800.00
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl ">
                                    Autorization</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    008549
                                </p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                    Fecha</p>
                                <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                    17/05/2024</p>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl ">
                                    Observation
                                </p>
                                <input
                                    class="text-black w-1/2 text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold text-end outline-none"
                                    type="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2  px-1 sm:px-2 md:px-4 flex flex-col justify-between">
                    <div class="">
                        <p class="text-xs sm:text-sm  xl:text-2xl font-semibold mb-5 ">Total De Productos: 6</p>
                        <div class="flex items-center justify-between mb:2 sm:mb-4">
                            <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">
                                Total
                            </p>
                            <p class=" text-black text-base sm:text-xl md:text-3xl xl:text-3xl font-bold">
                                {{ Subtotal.toFixed(2) }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between mb:2 sm:mb-4">
                            <p class="text-[12px] xsm:text-sm md:text-base xl:text-2xl font-semibold 2xl:font-bold ">
                                Por Pager</p>
                            <p
                                class=" text-lime-500 text-[11px] xsm:text-base sm:text-xl md:text-2xl xl:text-2xl font-semibold ">
                                $0.00</p>
                        </div>
                        <div v-if="PayPal" class="border-t border-lightGrey">
                            <p class="font-semibold text-[12px]  xsm:text-sm md:text-base xl:text-2xl 2xl:font-bold">
                                PayPal</p>
                            <div class="w-full xsm:w-2/3 mx-auto">
                                <div class="flex justify-between items-center mb-2">
                                    <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                        Monto</p>
                                    <p class="text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                        $800.00
                                    </p>
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl ">
                                        Autorization</p>
                                    <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                        008549
                                    </p>
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl">
                                        Fecha</p>
                                    <p class=" text-black text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold">
                                        17/05/2024</p>
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <p class="font-semibold text-[12px]  xsm:text-sm md:text-lg xl:text-xl ">
                                        Observation
                                    </p>
                                    <input
                                        class="text-black w-1/2 text-[12px] xsm:text-sm sm:text-lg  xl:text-xl font-bold text-end outline-none"
                                        type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex justify-between text-black dark:text-white  ">
                            <button @click="addPrice" :class="[
                                'xsm:px-2 w-[30%] py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none',
                                isClicked ? 'bg-green-700' : 'bg-[#E6E6E7]',
                                isClicked ? 'dark:bg-darkRed' : 'dark:bg-textGrey'
                            ]">
                                Efectivo
                            </button>
                            <button @click.prevent="" :class="Debito ? 'bg-green-700' : 'bg-[#E6E6E7] dark:bg-textGrey'"
                                class=" bg-[#E6E6E7] w-[30%] dark:bg-textGrey  xsm:px-2 py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                                Tarjeta <br>Debito
                            </button>
                            <button @click.prevent="Credito = !Credito"
                                :class="Credito ? 'bg-green-700' : 'bg-[#E6E6E7] dark:bg-textGrey'"
                                class="  w-[30%] px-1  xsm:px-2 py-2 text-[10px] sm:text-base xl:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                                tarjita <br> Credito
                            </button>
                        </div>
                        <div class="flex justify-between text-black dark:text-white mt-4">
                            <button
                                class="bg-[#E6E6E7] w-[48%] dark:bg-textGrey px-2 py-2 text-[10px] sm:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                                credito directo
                            </button>
                            <button @click.prevent="trasnferencia = !trasnferencia"
                                :class="trasnferencia ? 'bg-green-700' : 'bg-[#E6E6E7] dark:bg-textGrey'"
                                class="bg-[#E6E6E7] w-[48%] dark:bg-textGrey  sm:px-2 py-2 text-[10px] sm:text-lg 2xl:text-2xl leading-none rounded-md focus:outline-none">
                                trasnferencia
                            </button>
                        </div>
                        <div class="flex justify-between mt-4">

                            <div @click.prevent="PayPal = !PayPal"
                                :class="PayPal ? 'bg-green-700' : 'bg-gray dark:bg-textGrey'"
                                class=" content-evenly rounded-md px-1 py-2 w-[30%]">
                                <img class="w-[80%]  object-fit" src="@/assets/images/paypal.png" alt="icon">
                            </div>
                            <div class=" content-evenly bg-gray dark:bg-textGrey rounded-md px-1 py-2 xsm:px-2 w-[30%]">
                                <img class="w-[80%] object-fit" src="@/assets/images/mercado.png" alt="icon">
                            </div>
                            <div @click.prevent="aplazo = !aplazo"
                                :class="aplazo ? 'bg-green-700' : 'bg-gray dark:bg-textGrey'"
                                class=" content-evenly rounded-md px-1 py-2 xsm:px-2 w-[30%]">
                                <img class="w-[80%]  object-fit" src="@/assets/images/aplazo.png" alt="icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-5 ">
                <button
                    class=" bg-textGrey dark:bg-extradarkGrey px-6 sm:px-10 lg:px-20 pt-0 xsm:pt-1 pb-1 xsm:pb-2 text-center text-white text-xl sm:text-3xl lg:text-4xl font-thin rounded-full focus:outline-none">
                    Processa
                </button>
            </div>
        </div>
    </div>
</template>