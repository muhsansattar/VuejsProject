
<script setup lang="ts">
const tableData = [
  {
    id: 1,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Credito",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 2,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Credito",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 3,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Credito",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 4,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Credito",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 5,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Credito",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 6,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Aplicacion",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$1,000.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 7,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Aplicacion",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$1,000.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 8,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Aplicacion",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$1,000.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 9,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Aplicacion",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$1,000.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 10,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Aplicacion",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$1,000.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 11,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Cancelado",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
},
{
    id: 12,
    price1: "$0.00",
    price2: "$1,000.00",
    name1: "Cancelado",
    price3: "$0.00",
    price4: "$0.00",
    price5: "$0.00",
    price6: "$0.00",
    price7: "$1,000.00",
    price8: "$0.00",
    price9: "$0.00",
    price10: "$0.00",
    price11: "$0.00",
    price12: "$0.00",
    price13: "$0.00",
    price14: "$0.00",
    price15: "$0.00",
    name2: "Juana Olivia",
    name3: "Juana Olivia"
}
]
</script>
<template>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white text-black">
    <table class="w-full text-sm text-left rtl:text-right">
    
<!-- //////// Table Heading ////////// -->

        <thead class="text-sm ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Guia
                </th>
                <th scope="col" class="px-6 py-3">
                    Monoto
                </th>
                <th scope="col" class="px-6 py-3">
                    Estatus
                </th>
                <th scope="col" class="px-6 py-3">
                    Efectivo
                </th>
                <th scope="col" class="px-6 py-3">
                    Targeta
                </th>
                <th scope="col" class="px-6 py-3">
                    Transferencia
                </th>
                <th scope="col" class="px-6 py-3">
                    Aplicacion
                </th>
                <th scope="col" class="px-6 py-3">
                    Credito
                </th>
                <th scope="col" class="px-6 py-3">
                    Vales
                </th>
                <th scope="col" class="px-6 py-3">
                    Cupon
                </th>
                <th scope="col" class="px-6 py-3">
                    Vendedor
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero2
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero3
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero4
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero5
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero6
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero7
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero8
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero9
                </th>
                <th scope="col" class="px-6 py-3">
                    Cajero10
                </th>

            </tr>
        </thead>
        <!-- ////////////// Table Body ///////////// -->
        <tbody>
            <tr
             v-for="item in tableData"
              :key="item.id" 
              class=" border-b border-black border-opacity-10 ">
                <td scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                {{ item.price1 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price2 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.name1 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price3 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price4 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price5 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price6 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price7 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price8 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price9 }}
                </td>
                <td class="px-2 py-4">
                    {{ item.name2 }}
                </td>
                <td class="px-1 py-4">
                    {{ item.name3 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price10 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price11 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price12 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price13 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price14 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.price15 }}
                </td>
                <td class="px-6 py-4 bg-gray">
                    <img src="@/assets/images/ventas.png">
                </td>
                <td class="px-6 py-4 bg-gray">
                    <img src="@/assets/images/ventas.png">
                </td>
                <td class="px-6 py-4 ">
                    <img src="@/assets/images/bars.png" >
                </td>
            </tr>

        </tbody>
    </table>
</div>
<!-- ///////////// Nav Buttons ////////// -->
<nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 bg-white px-4" aria-label="Table navigation">
    <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Se muestran <span class=" text-gray-900 dark:text-white font-extrabold">20</span> de <span class="font-extrabold text-gray-900 dark:text-white">100</span> resultados</span>
    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Pre</a>
        </li>
        <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="@/assets/images/left.png" ></a>
        </li>
        <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
        </li>
        <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
        </li>
        <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="@/assets/images/right.png" ></a>
        </li>
        <li>
    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Nex</a>
        </li>
    </ul>
</nav>





<!-- ///////////////////////////////////////// -->


<!-- <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Watches
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple AirPods
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $399
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad Pro
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Keyboard
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Smart Folio iPad Air
                </th>
                <td class="px-6 py-4">
                    Blue
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $79
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $29
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</div> -->




</template>

