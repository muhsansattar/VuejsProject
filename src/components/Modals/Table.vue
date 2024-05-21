<script setup lang="ts">
const tableData = [
  {
    id: 1,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Credito",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  {
    id: 2,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Credito",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  {
    id: 3,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Credito",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  {
    id: 4,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Credito",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  {
    id: 5,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Credito",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  {
    id: 6,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Aplicacion",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$1,000.00",
    price14: "$0.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorPurple: "purple",
    bgColor: "rgba(128, 0, 128, 0.205)",
    textColor: "purple",
  },
  {
    id: 7,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Aplicacion",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$1,000.00",
    price14: "$0.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorPurple: "purple",
    bgColor: "rgba(128, 0, 128, 0.205)",
    textColor: "purple",
  },
  {
    id: 8,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Aplicacion",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$1,000.00",
    price14: "$0.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorPurple: "purple",
    bgColor: "rgba(128, 0, 128, 0.205)",
    textColor: "purple",
  },
  {
    id: 9,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Aplicacion",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$1,000.00",
    price14: "$0.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorPurple: "purple",
    bgColor: "rgba(128, 0, 128, 0.205)",
    textColor: "purple",
  },
  {
    id: 10,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Aplicacion",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$1,000.00",
    price14: "$0.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorPurple: "purple",
    bgColor: "rgba(128, 0, 128, 0.205)",
    textColor: "purple",
  },
  {
    id: 11,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Cancelado",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(255, 0, 0, 0.229)",
    textColor: "red",
  },
  {
    id: 12,
    price1: "$0.00",
    price2: "$1,000.00",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$0.00",
    price8: "$0.00",
    price9: "$1,000.00",
    name1: "Cancelado",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$1,000.00",
    price15: "$0.00",
    price16: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia",
    textColorBlue: "blue",
    bgColor: "rgba(255, 0, 0, 0.229)",
    textColor: "red",
  },
];

import { ref, onMounted } from "vue";

const isLoading = ref(true);
const showVentas = ref(true);
const showDetalles = ref(false);
const Ventas = () => {
  showDetalles.value = !showDetalles.value;
  showVentas.value = !showVentas.value;
};
const Detalles = () => {
  showVentas.value = !showVentas.value;
  showDetalles.value = !showDetalles.value;
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
<template>
  <div v-if="isLoading" role="status" class="w-fit mx-auto mt-[15%]">
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-darkGrey"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only"></span>
  </div>
  <div
    v-else
    class="bg-white dark:bg-extraGrey border border-gray border-opacity-10 rounded-2xl mx-6 sm:mx-10"
  >
    <!-- ///////// Header //////// -->
    <div>
      <h1 class="text-xl font-bold text-black p-4 dark:text-white">
        Lista de vanta
      </h1>
      <div
        class="border-b-2 border-gray dark:border-black dark:text-white flex justify-center w-40 sm:w-60 mb-8 mx-2 sm:mx-12 text-xs sm:text-xl font-bold text-black"
      >
        <button
          @click="Ventas"
          :class="{
            'bg-[rgba(249,249,249)] dark:bg-[#333a3d] border-2 border-gray dark:border-black border-b-0 rounded-tl-xl rounded-tr-xl mb-[-1px]':
              showVentas,
          }"
          class="p-1 px-4 sm:px-6"
        >
          Ventas
        </button>
        <button
          @click="Detalles"
          :class="{
            'bg-[rgba(249,249,249)] dark:bg-[#333a3d] border-2 border-gray dark:border-black border-b-0 rounded-tl-xl rounded-tr-xl mb-[-1px]':
              !showVentas,
          }"
          class="px-1 sm:px-3"
        >
          Detalles
        </button>
      </div>
      <!-- ///////////////////// Search section start ///////////////////////// -->
      <div v-if="showVentas">
        <div class="flex justify-end pr-4 sm:pr-10 my-8">
          <div
            class="flex w-30 sm:w-70 bg-[#e6e6e7] py-1 rounded-lg dark:bg-[#252626]"
          >
            <input
              placeholder="Buscar"
              class="focus:outline-none text-xl font-bold bg-[#e6e6e7] dark:bg-[#252626] w-22 sm:w-full px-2 rounded-lg"
            />
            <img src="@/assets/images/search.svg" class="w-8 pr-2" />
          </div>
          <div class="flex items-center">
            <img
              src="@/assets/images/file.svg"
              class="w-4 sm:w-6 color-red mx-2 sm:mx-6"
            />
            <img src="@/assets/images/bars.png" class="h-4 sm:h-6 color-red" />
          </div>
        </div>

        <!-- ////////////////////// search section End ////////////////////////////////////// -->

        <div
          class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white text-black"
        >
          <table
            class="w-full text-xs sm:text-xs text-right rtl:text-right dark:bg-extraGrey text-black dark:text-white"
          >
            <!-- //////// Table Heading ////////// -->

            <thead class="text-base font-normal">
              <tr class="border-b-4 border-black border-opacity-10">
                <th scope="col" class="px-6 py-0">Guia</th>
                <th scope="col" class="px-6 py-0">Monoto</th>
                <th scope="col" class="px-6 py-0">Estatus</th>
                <th scope="col" class="px-4 py-0">Efectivo</th>
                <th scope="col" class="px-6 py-0">Targeta</th>
                <th scope="col" class="px-6 py-0">Transferencia</th>
                <th scope="col" class="px-6 py-0">Ferica</th>
                <th scope="col" class="px-4 py-0">Guia</th>
                <th scope="col" class="px-4 py-0">Monoto</th>
                <th scope="col" class="px-4 py-0 text-center">
                  <select
                    class="focus:outline-none dark:bg-extraGrey text-black dark:text-white text-base"
                  >
                    <option class="">Estatus</option>
                    <option>Monoto</option>
                    <option>Guia</option>
                  </select>
                </th>
                <th scope="col" class="px-1 py-0 text-center">Efectivo</th>
                <th scope="col" class="px-4 py-0">Tarjeta</th>
                <th scope="col" class="px-3 py-0">Transferencia</th>
                <th scope="col" class="px-2 py-0">Aplicacion</th>
                <th scope="col" class="px-4 py-0">Credito</th>
                <th scope="col" class="px-4 py-0">Vales</th>
                <th scope="col" class="px-0 py-0">Cupon</th>
                <th scope="col" class="px-8 py-0">Vendedor</th>
                <th scope="col" class="px-8 py-0">Cajero</th>
                <th
                  scope="col"
                  class="px-0 py-0 text-white dark:text-extraGrey"
                >
                  Cccccc
                </th>
                <th
                  scope="col"
                  class="px-0 py-0 text-white dark:text-extraGrey"
                >
                  Cccccc
                </th>
                <th
                  scope="col"
                  class="px-0 py-0 text-white dark:text-extraGrey"
                >
                  Caj
                </th>
              </tr>
            </thead>
            <!-- ////////////// Table Body ///////////// -->
            <tbody>
              <tr
                v-for="item in tableData"
                :key="item.id"
                class="border-b border-black border-opacity-10 font-semibold dark:font-normal"
              >
                <td scope="row" class="px-6 py-1 whitespace-nowrap">
                  {{ item.price1 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price2 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price3 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price4 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price5 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price6 }}
                </td>
                <td class="px-6 py-1">
                  {{ item.price7 }}
                </td>
                <td class="px-4 py-1">
                  {{ item.price8 }}
                </td>
                <td class="px-4 py-1">
                  {{ item.price9 }}
                </td>
                <td class="px-4 py-1 text-center">
                  <p
                    class="py-1 px-4 rounded-full dark:font-bold"
                    :style="{
                      backgroundColor: item.bgColor,
                      color: item.textColor,
                    }"
                  >
                    {{ item.name1 }}
                  </p>
                </td>
                <td class="px-1 py-1 text-center">
                  {{ item.price16 }}
                </td>
                <td class="px-4 py-1">
                  {{ item.price10 }}
                </td>
                <td class="px-3 py-1">
                  {{ item.price11 }}
                </td>
                <td class="px-2 py-1" :style="{ color: item.textColorPurple }">
                  {{ item.price12 }}
                </td>
                <td class="px-4 py-1" :style="{ color: item.textColorBlue }">
                  {{ item.price13 }}
                </td>

                <td class="px-4 py-1">
                  {{ item.price14 }}
                </td>
                <td class="px-0 py-1">
                  {{ item.price15 }}
                </td>
                <td class="px-4 py-1">
                  {{ item.name2 }}
                </td>
                <td class="px-4 py-1">
                  {{ item.name3 }}
                </td>
                <td class="px-1 py-1">
                  <img src="@/assets/images/file.svg" class="w-7" />
                </td>
                <td class="px-1 py-1">
                  <img src="@/assets/images/cart.svg" class="w-7" />
                </td>
                <td class="px-0 py-1">
                  <img src="@/assets/images/bars.png" class="h-6 m-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- ///////////// Nav Buttons ////////// -->
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 bg-white px-4 mb-4 dark:bg-extraGrey"
          aria-label="Table navigation"
        >
          <span
            class="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
            >Se muestran
            <span class="text-gray-900 dark:text-white font-extrabold">20</span>
            de
            <span class="font-extrabold text-gray-900 dark:text-white"
              >100</span
            >
            resultados</span
          >
          <ul
            class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-6 sm:h-8 text-black dark:text-white"
          >
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 ms-0 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/doubleLeft.png" class="h-3"
              /></a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/left.png"
              /></a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-none mr-1 dark:bg-extradarkGrey bg-lightGrey border-none"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 mr-1 dark:bg-darkGrey border-none bg-extraGrey text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:border-none mr-1 dark:bg-extradarkGrey bg-lightGrey border-none"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/right.png"
              /></a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/doubleRight.png" class="h-3"
              /></a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- ////////////// second section ///////////////// -->
      <div v-if="showDetalles" class="">
        <h1 class="text-center text-xl py-40">Next Data will show Here</h1>
      </div>
    </div>
  </div>
</template>
