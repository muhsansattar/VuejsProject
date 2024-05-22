<script setup lang="ts">
import { ref, computed } from "vue";
const isFullWidth = ref(false);
const tableData = [
  {
    id: 1,
    price1: "Family Sport1",
    price2: "Tienda 1",
    price3: "",
    price4: "0D3HY29",
    price5: "TANIS VANS UNI OLD SKOOL",
    price6: "700053803855",
    price7: "Calzado",
    price8: "Vans",
    price9: "Tenis",
    name1: "S/C",
    price10: "Unisex",
    price11: "Nagro-Blanco",
    price12: 21.0,
    price13: "5",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "green",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 2,
    price1: "Family Sport2",
    price2: "Tienda 2",
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
    price12: 22.0,
    price13: "0",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "red",
    textColor: "blue",
  },
  {
    id: 3,
    price1: "Family Sport3",
    price2: "Tienda 3",
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
    price12: 23.0,
    price13: "8",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 4,
    price1: "Family Sport4",
    price2: "Tienda 4",
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
    price12: 24.0,
    price13: "1",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 5,
    price1: "Family Sport5",
    price2: "Web Store",
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
    price12: 25.0,
    price13: "4",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 6,
    price1: "Family Sport6",
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
    price12: 26.0,
    price13: "5",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 7,
    price1: "Family Sport7",
    price2: "Tienda 2",
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
    price12: 29.0,
    price13: "11",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "red",
    textColor: "green",
  },
  {
    id: 8,
    price1: "Family Sport8",
    price2: "Tienda 3",
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
    price12: 34.0,
    price13: "9",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
  {
    id: 9,
    price1: "Family Sport9",
    price2: "Tienda 4",
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
    price12: 38.0,
    price13: "18",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "green",
    textColor: "blue",
  },
  {
    id: 10,
    price1: "Family Sport10",
    price2: "Web Store",
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
    price12: 18.0,
    price13: "10",
    price14: "$1,299.00",
    price15: "001R1G16-22",
    price16: "42158",
    textColorBlue: "#39B54A",
    bgColor: "yellow",
    textColor: "blue",
  },
];

const selectedItemId = ref<number | null>(null);

const tooltipVisible = ref(false);
let tooltipPosition = { x: 0, y: 0 };

const selectItem = (id: number | null) => {
  selectedItemId.value = id;
};

const showTooltip = (event: MouseEvent) => {
  tooltipPosition = { x: event.clientX, y: event.clientY };
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};
const isLoading = ref(true);
const dropdownOpen = ref(false);
const SerchBar = ref(false);
const searchQuery = ref("");
const searchQuery2 = ref("");

const filteredTableData = computed(() => {
  if (!searchQuery.value) {
    return tableData;
  }
  return tableData.filter((item) =>
    item.price4.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// const filteredTableData2 = computed(() => {
//   if (!searchQuery2.value) {
//     return tableData;
//   }
//   return tableData.filter((item) =>
//     item.price1.toLowerCase().includes(searchQuery2.value.toLowerCase())
//   );
// });

const filteredTableData2 = computed(() => {
  let data = tableData;
  if (searchQuery2.value) {
    data = data.filter((item) =>
      item.price1.toLowerCase().includes(searchQuery2.value.toLowerCase())
    );
  }

  if (sortOrder.value === "asc") {
    return data.sort((a, b) => a.price12 - b.price12);
  } else if (sortOrder.value === "desc") {
    return data.sort((a, b) => b.price12 - a.price12);
  }

  return data;
});

const sortOrder = ref("");

const sortTable = (event: any) => {
  sortOrder.value = event.target.value;
};

const sortedTableData = computed(() => {
  if (sortOrder.value === "asc") {
    return [...filteredTableData2.value].sort((a, b) => a.price12 - b.price12);
  } else if (sortOrder.value === "desc") {
    return [...filteredTableData2.value].sort((a, b) => b.price12 - a.price12);
  }
  return filteredTableData2.value;
});
</script>
<template>
  <h1 class="text-4xl font-medium text-black pb-3 dark:text-white">
    Existencias
  </h1>
  <div
    class="bg-white dark:bg-extraGrey border border-gray border-opacity-10 rounded-2xl mx-6 sm:mx-10 lg:mx-0"
  >
    <div>
      <div
        class="dark:text-white flex justify-center w-40 sm:w-60 mb-8 mx-2 sm:mx-12 text-xs sm:text-xl font-bold text-black"
      ></div>
      <div>
        <div class="flex justify-end pr-4 sm:pr-10 my-8">
          <div
            class="flex bg-[#e6e6e7] py-1 rounded-lg dark:bg-[#252626]"
            :class="{ 'sm:w-[50%]': isFullWidth }"
          >
            <div class="w-full">
              <input
                @click.prevent="isFullWidth = !isFullWidth"
                v-model="searchQuery2"
                placeholder="Buscar"
                class="focus:outline-none text-xl font-bold bg-[#e6e6e7] dark:bg-[#252626] w-22 sm:w-full px-2 rounded-lg"
              />
            </div>
            <img src="@/assets/images/search.svg" class="w-8 pr-2 self-end" />
          </div>
          <div class="flex items-center">
            <img
              src="@/assets/images/file.svg"
              class="w-4 sm:w-6 color-red mx-2 sm:mx-6"
            />
            <div class="px-4" @click.prevent="dropdownOpen = !dropdownOpen">
              <img
                src="@/assets/images/bars.png"
                class="h-4 sm:h-6 color-red"
              />
            </div>
          </div>
        </div>
        <div
          v-show="dropdownOpen"
          class="absolute rounded-b-3xl right-6 -mt-18 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-darkGrey z-9"
        >
          <ul
            class="flex flex-col border-b border-stroke dark:border-strokedark"
          >
            <li class="border-b border-black">
              <div
                class="text-sm pl-6 py-3 font-medium lg:text-base dark:text-white flex justify-between"
              >
                <div>Opciones</div>
                <div
                  class="px-4 pr-14"
                  @click.prevent="dropdownOpen = !dropdownOpen"
                >
                  <img
                    src="@/assets/images/bars.png"
                    class="h-4 sm:h-6 color-red"
                  />
                </div>
              </div>
            </li>
            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey"
              >
                Mostrar Columnas
              </div>
            </li>

            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey"
              >
                Limpiar filtros
              </div>
            </li>

            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium lg:text-base hover:border-l-6 border-black hover:bg-[#E6E6E7] dark:hover:bg-textGrey"
              >
                Limpiar daltos
              </div>
            </li>
            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium lg:text-base hover:border-l-6 rounded-b-3xl border-black hover:bg-[#E6E6E7] dark:hover:bg-textGrey"
              >
                Ordenar
              </div>
            </li>
          </ul>
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
                <th scope="col" class="px-3">Tieanda</th>
                <th scope="col" class="">Imagen</th>
                <th scope="col" class="">
                  <div
                    class="px-4 flex gap-2"
                    @click.prevent="SerchBar = !SerchBar"
                  >
                    <p>SKU</p>
                    <img src="@/assets/images/bars.png" class="h-2 sm:h-4" />
                  </div>

                  <div
                    v-show="SerchBar"
                    class="absolute rounded-b-xl left-45 flex lg:w-[15%] w-[60%] sm:w-[25%] flex-col border shadow-9 shadow-black border-stroke bg-white dark:border-strokedark dark:bg-extraGrey z-9 h-50 overflow-y-scroll overflow-x-hidden -mt-7 scroll-bar-hide"
                  >
                    <ul
                      class="flex flex-col border-b border-stroke dark:border-strokedark"
                    >
                      <div class="flex gap-1 pl-2 pt-3">
                        <div>
                          <img src="@/assets/vueJs/unfold.png" alt="" />
                        </div>
                        <div class="dark:hidden block pt-1">
                          <img src="@/assets/vueJs/view.png" alt="" />
                        </div>
                        <div class="hidden dark:block pt-1">
                          <img src="@/assets/vueJs/viewWhite.png" alt="" />
                        </div>
                        <p @click.prevent="SerchBar = !SerchBar" class="pt-1">
                          SKU
                        </p>
                      </div>

                      <li>
                        <div
                          class="mt-2 flex shadow-2xl rounded-md w-[90%] mx-auto dark:bg-extradarkGrey"
                        >
                          <input
                            v-model="searchQuery"
                            class="w-[90%] pl-3 outline-none rounded-md bg-[D6D3D0] dark:bg-extradarkGrey"
                            type="search"
                            placeholder="Buscar"
                          />
                          <img
                            src="@/assets/images/search.svg"
                            class="w-6 pr-2 self-end"
                          />
                        </div>
                      </li>
                      <span class="flex justify-end pb-2 pt-1">
                        <p
                          class="text-xs text-white font-normal px-2 w-fit py-1 rounded-xl bg-extradarkGrey"
                        >
                          Limpiar
                        </p>
                      </span>
                      <li>
                        <div class="flex ml-4 gap-3">
                          <input type="checkbox" name="" id="" />
                          <p class="text-xs">Seleccionar todo</p>
                        </div>
                      </li>
                      <li v-for="item in filteredTableData" :key="item.id">
                        <div class="flex ml-6 gap-3">
                          <input type="checkbox" name="" id="" />
                          <p class="text-xs">{{ item.price4 }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </th>

                <th scope="col" colspan="8" class="">Descripcion</th>
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
                <th scope="col" class="whitespace-nowrap">Color(es)</th>
                <th scope="col" class="text-[#39B54A]">
                  <select
                    class="bg-white dark:bg-extraGrey"
                    @change="sortTable($event)"
                  >
                    <option value="">Talla</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </th>
                <th scope="col" class="">Stock</th>
                <th scope="col" class="">Precio</th>
                <th scope="col" class="whitespace-nowrap">Clave interna</th>
                <th scope="col" class="whitespace-nowrap">ID Sistema</th>
              </tr>
            </thead>
            <!-- ////////////// Table Body ///////////// -->
            <tbody>
              <tr
                v-for="item in sortedTableData"
                :key="item.id"
                class="border-b py-3 leading-8 text-sm border-black text-center border-opacity-10 font-semibold dark:font-normal"
              >
                <td scope="row" class="whitespace-nowrap text-center">
                  {{ item.price1 }}
                </td>
                <td class="">
                  {{ item.price2 }}
                </td>
                <td class="" @mouseover="showTooltip" @mouseleave="hideTooltip">
                  <img
                    class="rounded-full w-7 h-7 mx-auto"
                    src="@/assets/vueJs/shoes.jpg"
                    alt=""
                  />
                </td>
                <td class="">
                  {{ item.price4 }}
                </td>
                <td colspan="8" class="whitespace-nowrap">
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
                  <p class="">
                    {{ item.name1 }}
                  </p>
                </td>
                <td class="">
                  {{ item.price10 }}
                </td>
                <td class="whitespace-nowrap">
                  {{ item.price11 }}
                </td>
                <td class="whitespace-nowrap">
                  {{ item.price12 }}
                </td>
                <td class="" :style="{ color: item.bgColor }">
                  {{ item.price13 }}
                </td>
                <td class="" :style="{ color: item.textColorBlue }">
                  {{ item.price14 }}
                </td>

                <td class="whitespace-nowrap">
                  {{ item.price15 }}
                </td>
                <td class="whitespace-nowrap">
                  {{ item.price16 }}
                </td>
              </tr>
              <tr
                class="border-b py-3 leading-8 text-sm border-black text-center bg-[#E6E6E7] dark:bg-darkGrey border-opacity-10 font-semibold dark:font-normal"
              >
                <td scope="row" class="whitespace-nowrap text-center"></td>
                <td class=""></td>
                <td class=""></td>
                <td class=""></td>
                <td class="" colspan="8"></td>
                <td class=""></td>
                <td class=""></td>
                <td class=""></td>
                <td class=""></td>
                <td class="">
                  <p class=""></p>
                </td>
                <td class=""></td>
                <td class=""></td>
                <td class=""></td>
                <td
                  class="text-yellow-700 bg-yellow-300 font-extrabold px-2 py-2"
                >
                  12,345
                </td>
                <td
                  class="text-green-700 bg-green-300 font-extrabold px-2 py-2"
                >
                  23,456,789
                </td>

                <td class=""></td>
                <td class=""></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          v-if="tooltipVisible"
          class="absolute bg-body dark:bg-white p-2 shadow-lg flex gap-2 h-[55%] rounded-2xl w-[45%]"
          :style="{
            top: tooltipPosition.y + 'px',
            left: tooltipPosition.x + 'px',
          }"
        >
          <!-- Triangle -->
          <div
            class="absolute -left-2 top-5 bg-body dark:bg-white w-2 h-2 border-solid border-b-4 border-r-4 border-body dark:border-white transform -rotate-45 translate-x-2/4"
          ></div>

          <!-- Tooltip content -->
          <div class="flex gap-2">
            <div class="w-fit my-auto">
              <img
                class="my-auto h-[90%] rounded-xl"
                src="@/assets/vueJs/shoes.jpg"
                alt=""
              />
            </div>
            <div class="">
              <p
                class="text-white dark:text-black font-bold text-[12px] lg:text-[20px] leading-tight"
              >
                TENIS ADVANTAGE BASE ADIDAS COURT LIFESTYLE<br /><span
                  class="text-[10px] lg:text-[16px] text-black dark:text-body"
                  >Ingresa: 07/09/23 <br />Ventas Totales: 113 <br />Stock: 218
                  <br />
                  Varientes: 9</span
                >
              </p>
            </div>
          </div>
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

<style>
.scroll-bar-hide::-webkit-scrollbar {
  display: none;
}
</style>
