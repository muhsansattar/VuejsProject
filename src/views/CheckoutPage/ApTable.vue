<script setup lang="ts">
import Table from "@/components/Modals/Table.vue";
import { ref } from 'vue';
const moduleShow2 = ref(false)

const dropdownOpen = ref(false)
const items = ref([
    {
        fecha: '16-21-2023',
        folio: '099',
        Cliente: 'Juana Bolanos',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Cliente: 'Juana Bolanos',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Cliente: 'Juana Bolanos',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Cliente: 'Juana Bolanos',
    }
]);
</script>
<template>
  <div v-if="moduleShow2">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <Table />
      <div @click.prevent="moduleShow2 = !moduleShow2" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
    <div class="sm:my-6 mx-2 md:me-6 mt-2 py-2 px-2 sm:px-3 w-auto  bg-white dark:bg-extraGrey rounded-xl shadow-4 relative flex flex-col justify-between">
        <div class=" flex justify-between">
            <p class="font-extrabold text-lg xsm:text-2xl">Apartados</p>
            <div class="">
                <div class="z-20 px-4" @click.prevent="dropdownOpen = !dropdownOpen">
                    <img src="@/assets/images/bars.png" class="h-4 sm:h-6 color-red" />
                </div>
                <div v-show="dropdownOpen"
                    class="absolute rounded-b-xl right-0 top-0 w-30 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-darkGrey z-10 overflow-hidden">
                    <ul class="flex flex-col top-0 border-b border-stroke dark:border-strokedark">
                        <li class="border-b border-black flex justify-end py-2 px-6">
                            <img @click.prevent="dropdownOpen = !dropdownOpen" src="@/assets/images/bars.png"
                                class="h-4 sm:h-6 color-red" />
                        </li>
                        <li>
                            <div @click.prevent="moduleShow2 = !moduleShow2"
                                class="flex items-center gap-3.5 text-sm pl-4 py-3 font-medium hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                                Editar
                            </div>
                        </li>
                        <li>
                            <div 
                                class="flex items-center gap-3.5 text-sm pl-4 py-3 font-medium hover:pl-2 hover:border-l-8 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                                Cerrar
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-full relative overflow-x-auto overflow-y-auto max-h-40 h-full mx-auto">
            <table class="text-sm text-left w-[90%] text-black-2 dark:text-white dark:bg-dark-mode">
                <thead class="text-xs uppercase">
                    <tr>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Fecha
                        </th>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Folio
                        </th>
                        <th scope="col" colspan="4" class="px-4 py-3 font-extrabold">
                            Cliente
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index" class="border-b-2 text-xs border-[#7d8298]">
                        <td class="px-1 py-2 font-bold">
                            {{ item.fecha }}
                        </td>
                        <td class="px-3 py-2 text-right font-bold">
                            {{ item.folio }}
                        </td>
                        <td colspan="4"
                            class="px-3 py-2 font-bold text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                            {{ item.Cliente }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav class="flex items-center flex-col flex-warp md:flex-row justify-between bg-white pt-4 dark:bg-extraGrey"
            aria-label="Table navigation">
            <span class="block  md:hidden xl:block text-xs sm:text-[8px] font-bold text-gray-500 dark:text-gray-400 mb-4 md:mb-0 ">Se
                muestran 20 de 100 resultados</span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm text-black dark:text-white">
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-6 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-[#E6E6E7] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/doubleLeft.png"/></a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/left.png" /></a>
                </li>
                <li class="">
                    <a href="#"
                        class="flex items-center justify-center h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-none mr-1 dark:bg-extradarkGrey bg-[#E6E6E7] border-none">1</a>
                </li>
                <li class="">
                    <a href="#" aria-current="page"
                        class="flex items-center justify-center h-6 w-4 mr-1 text-[10px] dark:bg-darkGrey border-none bg-extraGrey text-white">2</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:border-none mr-1 dark:bg-extradarkGrey bg-[#E6E6E7] border-none">3</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="object-contain"   src="@/assets/images/right.png" /></a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-6 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/doubleRight.png" /></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

  
