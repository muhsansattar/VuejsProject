<script setup lang="ts">

import { ref } from 'vue';

const items = ref([
  {
    name: 'Apple MacBook Pro 17',
    color: 'GW9252',
    type: '22.5',
    price: '$1399.00',
    quantity: 1,
    discount: '$139.00',
    discountpre: '10%',
    subtotal: '$1259.10',
  },
  {
    name: 'Apple MacBook Pro 17',
    color: 'GW9252',
    type: '22.5',
    price: '$1399.00',
    quantity: 1,
    discount: '$139.00',
    discountpre: '10%',
    subtotal: '$1259.10',
  },
  {
    name: 'Apple MacBook Pro 17 ',
    color: 'GW9252',
    type: '22.5',
    price: '$1399.00',
    quantity: 1,
    discount: '$139.00',
    discountpre: '10%',
    subtotal: '$1259.10',
  }
]);

const incrementQuantity = (index :number) => {
      items.value[index].quantity += 1;
    };

    const decrementQuantity = (index :number) => {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity -= 1;
      }
    };

</script>
<template>
    <div
        class=" mt-2 sm:mt-6 max-w-auto mx-3 md:mx-6 py-2 px-3 rounded-xl bg-white dark:bg-extraGrey shadow-4 h-80 ">
        <div class="flex items-center flex-col sm:flex-row  justify-between w-full ">
            <p class="font-extrabold text-xl sm:text-2xl dark:text-white">Detalle de Venta</p>
            <div class="flex items-center relative sm:w-1/2">
                <div class="absolute left-4">
                    <img class="" src="@/assets/images/Asset7.png" alt="icon">
                </div>
                <input
                    class=" mx-3 border-b-2 sm:w-[60%] border-[#b8b4b4] bg-transparent outline-none text-black-2 dark:text-white text-[12px] "
                    type="text" id="text" placeholder=""  />
                <div
                    class="dark:text-white bg-[#E6E6E7] dark:bg-textGrey rounded-xl px-3">
                    + Agregar
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto">
            <table
                class=" table-auto w-full overflow-x-scroll text-sm text-left rtl:text-right text-black-2 dark:text-white ">
                <thead class="text-xs  uppercase ">
                    <tr class="text-center ">
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
                            Cantidad(6)
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
                        <tr v-for="(item, index) in items" :key="index" class=" group border-t-2 border-[#72747e] text-xs hover:bg-black hover:bg-opacity-10 ">
                            <td scope="row" colspan="5" class=" pr-5 py-4 font-medium whitespace-nowrap ">
                                {{ item.name }}
                            </td>
                            <td colspan="2" class=" py-4 pe-7 text-center">
                                {{ item.color }}
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.type }}
                            </td>
                            <td class=" py-4 pe-7 text-center">
                                {{ item.price }}
                            </td>
                            <td class=" py-4 pe-7 text-center">
                                <span @click="incrementQuantity(index)" class="text-black bg-white dark:bg-textGrey rounded-xl text-base p-1 me-3 sm:hidden group-hover:inline hover:cursor-pointer">+</span>
                                {{ item.quantity }}
                                <span @click="decrementQuantity(index)" class="dark:text-white bg-white dark:bg-textGrey rounded-xl text-base p-1 ms-3 sm:hidden group-hover:inline hover:cursor-pointer" >-</span>
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.discount}}
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.discountpre}}
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.subtotal}}
                            </td>
                            <td class=" py-4 pe-7 flex justify-end">
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
