<script setup lang="ts">
import ModalOne from '@/views/CheckoutPage/ModalOne.vue'
import Module2 from '@/views/CheckoutPage/Module2.vue';
import { ref } from 'vue';
const moduleShow = ref(false)

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
      <div v-if="moduleShow">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <ModalOne />
      <div @click.prevent="moduleShow = !moduleShow" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
  <div v-if="moduleShow2">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <Module2 />
      <div @click.prevent="moduleShow2 = !moduleShow2" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
    <div class="sm:my-6 mx-2 md:me-6 mt-2 py-2 px-2 sm:px-3 w-auto bg-white dark:bg-extraGrey rounded-xl shadow-4 relative flex flex-col justify-between">
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
                                class="flex items-center gap-3.5 text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                                Editar
                            </div>
                        </li>
                        <li>
                            <div @click.prevent="moduleShow = !moduleShow"
                                class="flex items-center gap-3.5 text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                                Cerrar
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-full relative overflow-x-auto overflow-y-auto max-h-40 mx-auto">
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
    </div>
</template>
