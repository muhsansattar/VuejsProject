<script setup lang="ts">
</script>
<template>
     <!-- //////////////////////////////////////////////////////////////////////////
                                Module 2
    //////////////////////////////////////////////////////////////////////////-->

    <div class="rounded-2xl bg-white dark:bg-[#363B3D] text-black  mx-2 sm:mx-10 md:mx-40 lg:mx-60 xl:mx-80 dark:text-white p-4 px-10" style="box-shadow: 0 3px 7px rgba(0,0,0,0.36), 0 4px 8px rgba(0,0,0,0.53);">

        <h1 class="text-sm sm:text-xl font-bold my-5 dark:text-white mb-20">Cotizacion de apartado</h1>
        <!-- //////// Form Div   /////////// -->
        <div class=" sm:px-10 ">
            <!-- /////////// 1st Row //////////// -->
            <div class="flex flex-col sm:flex-row justify-between my-5">
                <div class="mb-4 sm:mb-0">
                    <h2 class="font-bold">Fecha inicio</h2>
                    <input type="date" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-[80%]  sm:w-40 md:w-30 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light">
                </div>

                <div>
                    <h2 class="font-bold">Fecha final</h2>
                    <input type="date" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-[80%] sm:w-40 md:w-30 lg:w-40 xl:w-50 dark:bg-[#363B3D] font-light">
                </div>
                
            </div>
            <!-- ///////// 2nd Row /////////// -->
            <div>
                <h2 class="font-bold">Observaciones</h2>
                <input type="text" class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-[80%] sm:w-full dark:bg-[#363B3D] font-light">
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

</template>