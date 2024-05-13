<template>
    <!-- //////////////////////////////////////////////////////////////////////////
                                Module 1
    ////////////////////////////////////////////////////////////////////////// -->
<div class="dark:bg-[#252626]">
    <div class="rounded-2xl bg-white dark:bg-[#363B3D] text-black sm:mx-10 md:mx-30 lg:mx-60 xl:mx-80 dark:text-white p-3 px-10" style="box-shadow: 0 3px 7px rgba(0,0,0,0.36), 0 4px 8px rgba(0,0,0,0.53);">

        <h1 class="text-xl font-bold my-3 dark:text-white">Corte inicial</h1>
        <!-- //////// Form Div   /////////// -->
        <div class="px-10 sm:px-20">
            <div class="border-b-2 border-gray dark:border-black  flex justify-center w-70 mb-14">
                <button class="border-2 border-gray dark:border-black border-b-0 p-1 px-4 rounded-tl-xl rounded-tr-xl font-bold mb-[-1px] bg-[rgba(249,249,249)] dark:bg-[#333a3d] ">Corte inicial</button>
            </div>
            <!-- //////// 1st Row  ////////// -->
            <div class="flex flex-col sm:flex-row justify-between">
                <div>
                    <h2 class="font-bold">No.Corte</h2>
                    <input type="text" class="focus:outline-none  border-b border-[#d6d3d0] dark:border-[#ffffff25]  dark:bg-[#363B3D] text-right w-17 font-light" placeholder="59">
                </div>

                <div>
                    <h2 class="font-bold">Fecha</h2>
                    <input type="date" class="focus:outline-none border-b border-[#d6d3d0] md:w-35 dark:border-[#ffffff25] dark:bg-[#363B3D] font-light">
                </div>

                <div>
                    <h2 class="font-bold">Hora</h2>
                    <input type="time" class="focus:outline-none border-b border-[#d6d3d0] md:w-25 dark:border-[#ffffff25] dark:bg-[#363B3D] font-light">
                </div>
            </div>
            <!-- //////////// 2nd Row ///////////// -->
            <div class="my-5 ">
                <h2 class="font-bold">No. Caja</h2>
                <select class="focus:outline-none border-b border-[#d6d3d0] w-full dark:border-[#ffffff25] dark:bg-[#363B3D] font-light">
                    <option>Caja 1 -/- Web Store</option>
                    <option>Caja 2 -/- Web Store</option>
                    <option>Caja 3 -/- Web Store</option>
                    <option>Caja 4 -/- Web Store</option>
                </select>
            </div>
            <!-- /////////// 3rd Row ///////// -->
            <div>
                <h2 class="font-bold">Terminal</h2>
                <select class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-[#363B3D] font-light">
                    <option>TPV-000005 -/- Bancomer</option>
                    <option>ABC-11111111111 -/- webstore</option>
                    <option>DEF-222222 -/- Bancomer</option>
                    <option>GHI-333333 -/- webstore</option>
                </select>
            </div>
            <!-- /////////// 4th Row //////////// -->
            <div class="flex flex-col sm:flex-row justify-between my-5">
                <div>
                    <h2 class="font-bold">Saldo</h2>
                    <input type="text" class="focus:outline-none border-b  border-[#d6d3d0] dark:border-[#ffffff25] md:w-35 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light" placeholder="0">
                </div>

                <div>
                    <h2 class="font-bold">Hora</h2>
                    <input type="text" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] md:w-35 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light" placeholder="0.00">
                </div>
            </div>
            <!-- ///////// 5th Row /////////// -->
            <div>
                <h2 class="font-bold">Fondos</h2>
                <input type="text" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-[#363B3D] font-light" placeholder="0.00">
            </div>
            <!-- ///////// 6th Row /////////// -->
            <div class="my-5">
                <h2 class="font-bold">Correo Electronico</h2>
                <input type="email" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-[#363B3D] font-light" placeholder="Alridshop2@familysport.com.mx">
            </div>
            <!-- ///////// 7hth Row /////////// -->
            <div class="">
                <h2 class="font-bold">Contrasena</h2>
                <input type="password" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-[#363B3D] font-light" placeholder="********">
            </div>
            <!-- ////////  Button  ////////// -->
            <div class="flex justify-center mt-5 ">
                <button class=" py-1 px-8 rounded-3xl text-2xl bg-[#62666f] text-[rgb(187,187,187)] dark:border-[#ffffff25] dark:bg-[#252626] font-light">Guardar</button>
            </div>
        </div>

    </div>
</div>

 <!-- //////////////////////////////////////////////////////////////////////////
                                Module 2
    //////////////////////////////////////////////////////////////////////////-->

    <div class="dark:bg-[#252626] mt-5 ">
    <div class="rounded-2xl bg-white dark:bg-[#363B3D] text-black sm:mx-10 md:mx-30 lg:mx-60 xl:mx-80 dark:text-white p-4 px-10" style="box-shadow: 0 3px 7px rgba(0,0,0,0.36), 0 4px 8px rgba(0,0,0,0.53);">

        <h1 class="text-xl font-bold my-5 dark:text-white mb-20">Cotizacion de apartado</h1>
        <!-- //////// Form Div   /////////// -->
        <div class="px-10 sm:px-20">
            <!-- /////////// 1st Row //////////// -->
            <div class="flex flex-col sm:flex-row justify-between my-5">
                <div>
                    <h2 class="font-bold">Fecha inicio</h2>
                    <input type="date" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] md:w-35 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light">
                </div>

                <div>
                    <h2 class="font-bold">Fecha final</h2>
                    <input type="date" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] md:w-35 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light">
                </div>
                
            </div>
            <!-- ///////// 2nd Row /////////// -->
            <div>
                <h2 class="font-bold">Observaciones</h2>
                <input type="text" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-[#363B3D] font-light">
            </div>
            <!-- ///////// 3rd Row /////////// -->
            <div class="mt-5">
                    <a class="text-blue-500 border-b cursor-pointer text-xs md:text-sm font-light">Esta cotizacion de apartado no incluye los costos de seguro y envio</a>
                </div>
          
            <!-- ////////  Button  ////////// -->
            <div class="flex justify-center mt-5 ">
                <button class=" py-1 px-8 rounded-3xl text-2xl bg-[#62666f] dark:bg-[#252626] text-[rgb(187,187,187)] font-light">Guardar</button>
            </div>
        </div>

    </div>
</div>









</template>

<script setup lang="ts">
// export default {
//     name: "Model"
// }
</script>
