<script setup lang="ts">
import { ref} from 'vue';
import { useRouter } from 'vue-router'; 
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

const removeItem = (index :number) => {
      if (confirm('Are you sure you want to delete this item?')) {
        items.value.splice(index, 1); // Efficiently remove item at index
      }
    };

const incrementQuantity = (index :number) => {
      items.value[index].quantity += 1;
    };

    const decrementQuantity = (index :number) => {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity -= 1;
      }
    };

    const calculateTotalQuantity = (items: { quantity: number }[]) => {
  return items.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
};
import StockModal from '@/components/Modals/StockModal.vue';
const modalShow = ref(false)
const inputValue = ref('');


</script>
<template>
    <div v-if="modalShow">
    <div
      class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-20 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">

      <StockModal :inputValue="inputValue" />
      <div @click.prevent="modalShow = !modalShow" class="absolute top-4 right-20 w-10">
        <img class="w-full" src="@/assets/images/delete.png" alt="">
      </div>
    </div>
  </div>
    <div
        class=" mt-2 sm:mt-6 max-w-auto mx-3 md:mx-6 py-2 px-3 rounded-xl bg-white dark:bg-extraGrey shadow-4 h-80 ">
        <div class="flex items-center flex-col sm:flex-row  justify-between w-full ">
            <p class="font-extrabold text-xl sm:text-2xl dark:text-white">Detalle de Venta</p>
            <div class="flex items-center relative sm:w-1/2">
                <div class="absolute z-0 left-4">
                    <img class="" src="@/assets/images/Asset7.png" alt="icon">
                </div>
                <input v-model="inputValue"
                    class=" z-1 mx-3 border-b-2 sm:w-[60%] border-[#b8b4b4] bg-transparent outline-none text-black-2 dark:text-white text-[12px] "
                    type="text" id="text" placeholder=""  />
                <button @click.prevent="modalShow = !modalShow"
                    class="dark:text-white bg-[#E6E6E7] dark:bg-textGrey rounded-xl px-3 hover:cursor-pointer">
                    + Agregar
                </button>
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
                            Cantidad({{ calculateTotalQuantity(items) }})
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
                                <button @click="incrementQuantity(index)" class="text-black bg-white dark:bg-textGrey rounded-xl text-base p-1 me-3 sm:hidden group-hover:inline hover:cursor-pointer" > + </button>
                                {{ item.quantity }}
                                <button @click="decrementQuantity(index)" class="dark:text-white bg-white dark:bg-textGrey rounded-xl text-base p-1 ms-3 sm:hidden group-hover:inline hover:cursor-pointer" >-</button>
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
                                    <img @click.prevent="removeItem(index)" class="w-100" src="@/assets/images/Trash.png" alt="icon">
                                </div>
                            </td>

                        </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
