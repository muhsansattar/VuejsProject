<script setup lang="ts" >
import Module2 from '@/views/CheckoutPage/Module2.vue'
</script>
<template>
    <!-- <Module2/> -->
    <!-- <div class="bg-white bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto z-999 top-0"> -->
        
        <div class="rounded-2xl  bg-white dark:bg-extraGrey text-black mx-2 sm:mx-20 md:mx-30 lg:mx-60 xl:mx-90 dark:text-white p-3 px-10 shadow-6">

            <h1 class="text-xl font-bold my-3 dark:text-white">Corte inicial</h1>

            <div class="px-10 sm:px-20">
                <div class="border-b-2 border-gray dark:border-black  flex justify-center sm:w-70 mb-14">
                    <button
                        class="border-2 border-gray dark:border-black border-b-0 text-xs p-1 px-4 rounded-tl-xl rounded-tr-xl font-bold -mb-1 bg-[rgba(249,249,249)] dark:bg-[#333a3d] ">Corte
                        inicial</button>
                </div>

                <div class="change  flex flex-col sm:flex-row justify-between">
                    <div>
                        <h2 class="font-bold">No.Corte</h2>
                        <input type="text"
                            class="focus:outline-none  border-b border-[#d6d3d0] dark:border-[#ffffff25]  dark:bg-extraGrey text-right w-17 font-light"
                            placeholder="59">
                    </div>

                    <div class="my-4 sm:my-0 mx-2">
                        <h2 class="font-bold">Fecha</h2>
                        <input type="date"
                            class="focus:outline-none border-b border-[#d6d3d0]  md:w-35 dark:border-[#ffffff25] dark:bg-extraGrey font-light">
                    </div>

                    <div>
                        <h2 class="font-bold">Hora</h2>
                        <input type="time"
                            class="focus:outline-none border-b border-[#d6d3d0] md:w-25 dark:border-[#ffffff25] dark:bg-extraGrey font-light">
                    </div>
                </div>

                <div class="my-5 ">
                    <h2 class="font-bold">No. Caja</h2>
                    <select
                        class="focus:outline-none border-b border-[#d6d3d0] w-full dark:border-[#ffffff25] dark:bg-extraGrey font-light">
                        <option>Caja 1 -/- Web Store</option>
                        <option>Caja 2 -/- Web Store</option>
                        <option>Caja 3 -/- Web Store</option>
                        <option>Caja 4 -/- Web Store</option>
                    </select>
                </div>

                <div>
                    <h2 class="font-bold">Terminal</h2>
                    <select
                        class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light">
                        <option>TPV-000005 -/- Bancomer</option>
                        <option>ABC-11111111111 -/- webstore</option>
                        <option>DEF-222222 -/- Bancomer</option>
                        <option>GHI-333333 -/- webstore</option>
                    </select>
                </div>

                <div class="flex flex-col sm:flex-row justify-between my-5">
                    <div>
                        <h2 class="font-bold">Saldo</h2>
                        <input type="text"
                            class="focus:outline-none border-b  border-[#d6d3d0] dark:border-[#ffffff25] sm:w-30 md:w-30 lg:w-40 xl:w-45 dark:bg-extraGrey font-light"
                            placeholder="0">
                    </div>

                    <div>
                        <h2 class="font-bold">Hora</h2>
                        <input type="text"
                            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] sm:w-30 md:w-30 lg:w-40 xl:w-45 dark:bg-extraGrey font-light"
                            placeholder="0.00">
                    </div>
                </div>

                <div>
                    <h2 class="font-bold">Fondos</h2>
                    <input type="text"
                        class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light"
                        placeholder="0.00">
                </div>

                <div class="my-5">
                    <h2 class="font-bold">Correo Electronico</h2>
                    <input type="email"
                        class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light"
                        placeholder="Alridshop2@familysport.com.mx">
                </div>

                <div class="">
                    <h2 class="font-bold">Contrasena</h2>
                    <input type="password"
                        class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light"
                        placeholder="">
                </div>

                <div class="flex justify-center mt-5 ">
                    <button
                        class=" py-1 px-8 rounded-3xl text-2xl bg-[#62666f] text-[rgb(187,187,187)] dark:border-[#ffffff25] dark:bg-extraDarkGrey font-light">Guardar</button>
                </div>
            </div>

        </div>
    <!-- </div> -->
</template>