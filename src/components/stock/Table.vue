<script setup lang="ts">
const tableData = [
  {
    id: 1,
    price1: "Family Sport",
    price2: "Tienda 1",
    price3: "",
    price4: "0D3HY28",
    price5: "TANIS VANS UNI OLD SKOOL",
    price6: "700053803855",
    price7: "Calzado",
    price8: "Vans",
    price9: "Tenis",
    name1: "S/C",
    price10: "Unisex",
    price11: "Nagro-Blanco",
    price12: "22.0",
    price13: "5",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "blue",
    bgColor: "rgba(0, 217, 255, 0.555)",
    textColor: "blue",
  },
  // {
  //   id: 2,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Credito",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(0, 217, 255, 0.555)",
  //   textColor: "blue",
  // },
  // {
  //   id: 3,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Credito",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(0, 217, 255, 0.555)",
  //   textColor: "blue",
  // },
  // {
  //   id: 4,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Credito",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(0, 217, 255, 0.555)",
  //   textColor: "blue",
  // },
  // {
  //   id: 5,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Credito",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(0, 217, 255, 0.555)",
  //   textColor: "blue",
  // },
  // {
  //   id: 6,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Aplicacion",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$1,000.00",
  //   price14: "$0.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorPurple: "purple",
  //   bgColor: "rgba(128, 0, 128, 0.205)",
  //   textColor: "purple",
  // },
  // {
  //   id: 7,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Aplicacion",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$1,000.00",
  //   price14: "$0.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorPurple: "purple",
  //   bgColor: "rgba(128, 0, 128, 0.205)",
  //   textColor: "purple",
  // },
  // {
  //   id: 8,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Aplicacion",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$1,000.00",
  //   price14: "$0.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorPurple: "purple",
  //   bgColor: "rgba(128, 0, 128, 0.205)",
  //   textColor: "purple",
  // },
  // {
  //   id: 9,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Aplicacion",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$1,000.00",
  //   price14: "$0.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorPurple: "purple",
  //   bgColor: "rgba(128, 0, 128, 0.205)",
  //   textColor: "purple",
  // },
  // {
  //   id: 10,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Aplicacion",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$1,000.00",
  //   price14: "$0.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorPurple: "purple",
  //   bgColor: "rgba(128, 0, 128, 0.205)",
  //   textColor: "purple",
  // },
  // {
  //   id: 11,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Cancelado",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(255, 0, 0, 0.229)",
  //   textColor: "red",
  // },
  // {
  //   id: 12,
  //   price1: "$0.00",
  //   price2: "$1,000.00",
  //   price3: "$0.00",
  //   price4: "$0.00",
  //   price5: "$0.00",
  //   price6: "$0.00",
  //   price7: "$0.00",
  //   price8: "$0.00",
  //   price9: "$1,000.00",
  //   name1: "Cancelado",
  //   price10: "$0.00",
  //   price11: "$0.00",
  //   price12: "$0.00",
  //   price13: "$0.00",
  //   price14: "$1,000.00",
  //   price15: "$0.00",
  //   price16: "$0.00",
  //   name2: "Juana Olivia",
  //   name3: "Juana Olivia",
  //   textColorBlue: "blue",
  //   bgColor: "rgba(255, 0, 0, 0.229)",
  //   textColor: "red",
  // },
];

import { ref, onMounted } from "vue";

const isLoading = ref(true);
</script>
<template>
  <h1 class="text-4xl font-medium text-black pb-3 dark:text-white">
    Existencias
  </h1>
  <div
    class="bg-white pt-5 dark:bg-extraGrey border border-gray border-opacity-10 rounded-2xl mx-6 sm:mx-10 lg:mx-0"
  >
    <div>
      <div
        class="dark:text-white flex justify-center w-40 sm:w-60 mb-8 mx-2 sm:mx-12 text-xs sm:text-xl font-bold text-black"
      ></div>
      <div>
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

            <thead class="text-sm font-normal">
              <tr class="border-b-4 border-black border-opacity-10 text-center">
                <th scope="col" class="py-1">Empresa</th>
                <th scope="col" class="">Tieanda</th>
                <th scope="col" class="">Imagen</th>
                <th scope="col" class="">SKU</th>
                <th scope="col" class="">Descripcion</th>
                <th scope="col" class="">UPC</th>
                <th scope="col" class="">Division</th>
                <th scope="col" class="">Marca</th>
                <th scope="col" class="">silute</th>
                <!-- <th scope="col" class="px-4 py-0 text-center">
                  <select
                    class="focus:outline-none dark:bg-extraGrey text-black dark:text-white text-base"
                  >
                    <option class="">Estatus</option>
                    <option>Monoto</option>
                    <option>Guia</option>
                  </select>
                </th> -->
                <th scope="col" class="">Categorio</th>
                <th scope="col" class="">Genero</th>
                <th scope="col" class="">Color(es)</th>
                <th scope="col" class="">Talla</th>
                <th scope="col" class="">Stock</th>
                <th scope="col" class="">Precio</th>
                <th scope="col" class="">Clave interna</th>
                <th scope="col" class="">ID Sistema</th>
              </tr>
            </thead>
            <!-- ////////////// Table Body ///////////// -->
            <tbody>
              <tr
                v-for="item in tableData"
                :key="item.id"
                class="border-b py-3 text-sm border-black text-center border-opacity-10 font-semibold dark:font-normal"
              >
                <td scope="row" class="whitespace-nowrap text-center">
                  {{ item.price1 }}
                </td>
                <td class="">
                  {{ item.price2 }}
                </td>
                <td class="">
                  {{ item.price3 }}
                </td>
                <td class="">
                  {{ item.price4 }}
                </td>
                <td class="">
                  {{ item.price5 }}
                </td>
                <td class="">
                  {{ item.price6 }}
                </td>
                <td class="">
                  {{ item.price7 }}
                </td>
                <td class="">
                  {{ item.price8 }}
                </td>
                <td class="">
                  {{ item.price9 }}
                </td>
                <td class="">
                  <p
                    class="rounded-full dark:font-bold"
                    :style="{
                      backgroundColor: item.bgColor,
                      color: item.textColor,
                    }"
                  >
                    {{ item.name1 }}
                  </p>
                </td>
                <td class="">
                  {{ item.price10 }}
                </td>
                <td class="">
                  {{ item.price11 }}
                </td>
                <td class="">
                  {{ item.price12 }}
                </td>
                <td class="" :style="{ color: item.textColorPurple }">
                  {{ item.price13 }}
                </td>
                <td class="" :style="{ color: item.textColorBlue }">
                  {{ item.price14 }}
                </td>

                <td class="">
                  {{ item.price15 }}
                </td>
                <td class="">
                  {{ item.price16 }}
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
    </div>
  </div>
</template>
