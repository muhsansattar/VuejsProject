<script setup lang="ts">
const dropdownOpen = ref(false);


import { ref ,computed} from 'vue';
const moduleShow2 = ref(false)
const isFullWidth = ref(false);
const dropdownOpen1 = ref(false);

const tableData = [
  {
    id: 1,
    number: "TDA-00828",
    name: "Solis Cristien",
    email: "Solis Cristien@gmail.com",
    phoneNumber: "5568254876",
    price: "54981",
   
  },
  {
    id: 2,
    number: "TDA-00787",
    name: "Solis Emmini",
    email: "Solis Emmini@gmail.com",
    phoneNumber: "5568786768",
    price: "549878",
   
  },
  {
    id: 3,
    number: "TDA-00897",
    name: "Solis Junia",
    email: "Solis Junia@gmail.com",
    phoneNumber: "5568299889",
    price: "54556",
   
  },
  {
    id: 4,
    number: "TDA-00987",
    name: "Solis Olivia",
    email: "Solis Olivia@gmail.com",
    phoneNumber: "55680098",
    price: "544365",
   
  },
  
 
];

const searchQuery = ref("");
const filteredTableData = computed(() => {
  const formattedSearchQuery = searchQuery.value.replace(/\s/g, '').toLowerCase();

  if (!formattedSearchQuery) {
    return tableData;
  }

  return tableData.filter((item) =>
    item.name.replace(/\s/g, '').toLowerCase().includes(formattedSearchQuery)
  );
});
</script>
<template>
  <div
    class="flex items-center text-black-2 dark:text-white gap-5 pt-6 md:mx-6 lg:mx-0 mx-2 px-0 lg:px-6 relative overflow-x-auto"
  >
    <a href="#">Checador</a>
    <select class="bg-transparent focus:outline-none hello">
      <option class="bg-white dark:bg-black">Cajas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Articulos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <div class="flex items-center cursor-pointer"  @click.prevent="moduleShow2 = !moduleShow2" >
      <button>Clientes</button>
      <img class="ml-4 w-[9px] dark:hidden" src="../../assets/images//right-arrow.png">
      <img class="ml-4 w-[9px] hidden dark:block" src="../../assets/images//right-arrow-white.png">
    </div>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Ventas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Movimientos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Utleries</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
  </div>


  <div v-if="moduleShow2">
    <div
      class="bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <!-- ////////////// -->

      <div class="mx-10 mt-[-20px] bg-white dark:bg-extraGrey dark:text-white border-2 border-black border-opacity-10 rounded-2xl">
       <h1 class="text-md sm:text-2xl  font-extrabold mx-4 my-2">Busqueda de cliente</h1>
      
    <!-- ////////// Search Area start////////// -->
    <div class="flex justify-end  pr-0 sm:pr-10 my-8">
          <div class="flex items-center bg-[#e6e6e7] py-1 rounded-lg dark:bg-[#252626] "
            :class="{ 'sm:w-[50%]': isFullWidth }">
            <div class="w-full">
              <input v-model="searchQuery" @click.prevent="isFullWidth = !isFullWidth" placeholder="Buscar"
                class="focus:outline-none text-xs sm:text-xl font-bold bg-[#e6e6e7] dark:bg-[#252626] w-14 sm:w-full px-2 rounded-lg" />
            </div>
            <img src="@/assets/images/search.svg" class="mb-1 sm:mb-0 w-6 sm:w-8 pr-2 self-end" />
          </div>

          <div class="flex items-center w-12 sm:w-30">
            <img src="@/assets/images/filter.png" class="w-4 sm:w-6 color-red mx-2 sm:mx-6" />
            <div class="sm:px-4" @click.prevent="dropdownOpen1 = !dropdownOpen1">
              <img src="@/assets/images/bars.png" class="relative h-4 sm:h-6 color-red" />
            </div>
          </div>
        </div>

        <div v-show="dropdownOpen1"
          class="absolute rounded-b-3xl right-20 -mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-darkGrey z-9">
          <ul class="flex flex-col border-b border-stroke dark:border-strokedark">
            <li class="border-b border-black">
              <div class="text-sm pl-6 py-3 font-medium lg:text-base dark:text-white flex justify-between">
                <div>Opciones</div>
                <div class="px-4 pr-14" @click.prevent="dropdownOpen1 = !dropdownOpen1">
                  <img src="@/assets/images/bars.png" class="h-4 sm:h-6 color-red" />
                </div>
              </div>
            </li>
            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                Mostrar Columnas
              </div>
            </li>

            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium hover:border-l-6 border-black lg:text-base hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                Limpiar filtros
              </div>
            </li>

            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium lg:text-base hover:border-l-6 border-black hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                Limpiar daltos
              </div>
            </li>
            <li>
              <div
                class="flex items-center gap-3.5 dark:text-white text-sm pl-6 py-3 font-medium lg:text-base hover:border-l-6 rounded-b-3xl border-black hover:bg-[#E6E6E7] dark:hover:bg-textGrey">
                Ordenar
              </div>
            </li>
          </ul>
        </div>
        <!-- ////////// Search Area end////////// -->
        <!-- ////////// Table start //////// -->

        <div class="mx-12 overflow-x-auto">
            <table
            class="w-full text-xs sm:text-xs rtl:text-right  text-black dark:text-white"
          >
            <!-- //////// Table Heading ////////// -->

            <thead class="text-base font-extrabold">
              <tr class="border-b border-black text-center  border-opacity-10">
                <th scope="col" class="px-6 py-4">Codigo</th>
                <th scope="col" class="px-6 py-0">Nombro</th>
                <th scope="col" class="px-16 py-0">Email</th>
                <th scope="col" class="px-4 py-0">Telefono</th>
                <th scope="col" class="px-6 py-0">CP</th>
                <th scope="col" class="px-6 py-0 text-white dark:text-extraGrey">Transferencia</th>
           
                </tr>
            </thead>
            <!-- ////////////// Table Body ///////////// -->
            <tbody>
              <tr v-if="filteredTableData.length>0"
                v-for="item in filteredTableData"
                :key="item.id"
                class="border-b border-black text-center  border-opacity-10 font-bold dark:font-bold"
              >
                <td scope="row" class="px-6 py-3 whitespace-nowrap">
                  {{ item.number }}
                </td>
                <td class="px-4">
                  {{ item.name }}
                </td>
                <td class="px-2">
                  {{ item.email }}
                </td>
                <td class="px-6">
                  {{ item.phoneNumber }}
                </td>
                <td class="px-6">
                  {{ item.price }}
                </td>
                <td class="px-6  ">
                  <img src="@/assets/images/user.png" class="h-6 mx-auto">
                </td>
               
              </tr>
              <tr v-else
                class="border-b py-3 leading-8 text-sm border-black text-center border-opacity-10 font-semibold dark:font-normal">


                <td colspan="12" class="">
                  data not found
                </td>

              </tr>
              
            </tbody>
          </table>
        </div>
        <!-- ////////// Table end ////////// -->
           <!-- ///////////// Nav Buttons start ////////// -->
           <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between  bg-white mx-10 pt-6 pb-4 dark:bg-extraGrey"
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
                class="flex items-center justify-center px-1 sm:px-3 w-4 sm:w-9 h-6 sm:h-8 ms-0 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/doubleLeft.png" class="h-3"
              /></a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 w-3 sm:w-8 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
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
                class="flex items-center justify-center px-1 sm:px-3 h-6 w-3 sm:w-8 sm:h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/right.png"
              /></a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-1 sm:px-3 w-4 sm:w-9 h-6 sm:h-8 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-none dark:bg-extradarkGrey bg-lightGrey border-none"
                ><img src="@/assets/images/doubleRight.png" class="h-3"
              /></a>
            </li>
          </ul>
        </nav>
         <!-- ///////////// Nav Buttons end ////////// -->
      </div>
      <!-- ///////////// -->
      <div @click.prevent="moduleShow2 = !moduleShow2" class="absolute top-2 right-4 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
</template>
