<script setup lang="ts">
</script>
<template>
    <div class=" my-6 mx-5 py-2 px-3 rounded-xl bg-white dark:bg-extraGrey shadow-4 h-80 overflow-x-auto ">
        <div class="flex  justify-between ">
            <p class="font-extrabold text-2xl dark:text-white">Detalle de Venta</p>
            <div class="flex items-center">
                <div class="">
                    <img class="" src="@/assets/images/Asset7.png" alt="icon">
                 </div>
            <input class="mx-3 border-b-2  border-[#b8b4b4] bg-transparent outline-none text-black-2 dark:text-white text-[14px] "
          type="text"  id="text" placeholder="" />
          <div class="text-black dark:text-white bg-[#E6E6E7] dark:bg-textGrey rounded-xl w-6 text-center text-xl">
            +
          </div>
            </div>
        </div>
<div class="overflow-x-auto">
    <table class=" table-auto border border-red overflow-scroll text-sm text-left rtl:text-right text-black-2 dark:text-white ">
        <thead class="text-xs  uppercase ">
            <tr  class="text-center ">
                <th scope="cols" colspan="5" class="  py-3">
                    Product name
                </th>
                <th scope="col" colspan="2" class=" pe-7 py-3">
                    SKU
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Talla
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Price
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Quantity
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Discount$
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Dissount%
                </th>
                <th scope="col" class=" pe-7 py-3">
                    Subtotal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-t-2 border-[#72747e] text-xs ">
                <td scope="row" colspan="5"   class=" pr-5 py-4 font-medium whitespace-nowrap ">
                    Apple MacBook Pro 17 
                </td>
                <td colspan="2" class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                   <div class=" w-4">
                    <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                   </div>
                </td>
                
            </tr>
            <tr class=" border-t-2 border-[#72747e] text-xs ">
                <td scope="row" colspan="5"   class=" pr-5 py-4 font-medium whitespace-nowrap ">
                    Apple MacBook Pro 17 
                </td>
                <td colspan="2" class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                   <div class=" w-4">
                    <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                   </div>
                </td>
                
            </tr>
            <tr class=" border-t-2 border-[#72747e] text-xs ">
                <td scope="row" colspan="5"   class=" pr-5 py-4 font-medium whitespace-nowrap ">
                    Apple MacBook Pro 17 
                </td>
                <td colspan="2" class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    Silver
                </td>
                <td class=" py-4 pe-7">
                    Laptop
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                    $2999
                </td>
                <td class=" py-4 pe-7">
                   <div class=" w-4">
                    <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                   </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
</template>