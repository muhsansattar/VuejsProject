<script setup lang="ts">
import { ref} from 'vue';
import { computed ,watch } from 'vue';
import { useRouter } from 'vue-router'; 
import { useDataStore } from '@/stores/Index';
const dataStore = useDataStore();
const cartitems = dataStore.cart;

const items = computed(() => {
  return dataStore.cart.map(item => {
    const price = parseFloat(item.pprice.replace(/[^0-9.-]+/g, ""));
    const subtotal = price * item.quantity * (1 - item.discountpre / 100);
    const discountAmount =(price * item.quantity) - subtotal;
    // dataStore.calculateSubtotalAndDiscount();
    return { ...item, subtotal, discountAmount };
  });
});





const finalprice = computed(() => {
    const Totalamount = items?.value.reduce((acc: number, item: any) => acc + (item.quantity * parseFloat(item.pprice.replace(/[^0-9.-]+/g, ""))), 0);
const Totalsubtotal = items?.value.reduce((acc: number, item: any) => acc + item.subtotal, 0);
const Totaldiscount = items?.value.reduce((acc: number, item: any) => acc + item.discountAmount, 0);

// console.log("Total Amount:", Totalamount);
// console.log("Total Subtotal:", Totalsubtotal);
// console.log("Total Discount:", Totaldiscount);
dataStore.overallPrice(Totalamount,Totalsubtotal,Totaldiscount)
});

watch(items, () => {
  // Trigger the computation whenever items.value changes
  finalprice.value; // Accessing the value will trigger the computation
}, { deep: true });



const removeItem = (id :number) => {
    if (id) {
    dataStore.removeToCart(id);
  }
};



const incrementQuantity = (id :number) => {
    dataStore.increaseQuantity(id);
    };

    const decrementQuantity = (id :number) => {
        dataStore.decreaseQuantity(id);
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
                <div class="absolute left-4">
                    <img class="" src="@/assets/images/Asset7.png" alt="icon">
                </div>
                <input v-model="inputValue"
                    class=" mx-3 border-b-2 sm:w-[60%] border-[#b8b4b4] bg-transparent outline-none text-black-2 dark:text-white text-[12px] "
                    type="text" id="text" placeholder=""  />
                <button @click.prevent="modalShow = !modalShow"
                    class="dark:text-white bg-[#E6E6E7] dark:bg-textGrey rounded-xl px-3 hover:cursor-pointer">
                    + Agregar
                </button>
            </div>
        </div>
        <div class="relative overflow-x-auto h-[90%] overflow-y-auto">
            <table
                class=" table-auto w-full  overflow-x-scroll text-sm text-left rtl:text-right text-black-2 dark:text-white ">
                <thead class="text-xs  uppercase ">
                    <tr class="text-center ">
                        <th scope="cols" colspan="6" class="  py-3">
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
                        <tr v-if="items && items.length" v-for="(item, index) in items" :key="index" class=" group border-t-2 border-[#72747e] text-xs hover:bg-black hover:bg-opacity-10 ">
                            <td scope="row" colspan="6" class=" pr-5 py-4 font-medium whitespace-nowrap ">
                                {{ item.pname }}
                            </td>
                            <td colspan="2" class=" py-4 pe-7 text-center">
                                {{ item.psku }}
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.talla }}
                            </td>
                            <td class=" py-4 pe-7 text-center">
                                {{ item.pprice }}
                            </td>
                            <td class=" py-4 pe-7 text-center">
                                <button @click="incrementQuantity(item.id)" class="text-black bg-white dark:bg-textGrey rounded-xl text-base p-1 me-3 sm:hidden group-hover:inline hover:cursor-pointer" > + </button>
                                {{ item.quantity}}
                                <button @click="decrementQuantity(item.id)" class="dark:text-white bg-white dark:bg-textGrey rounded-xl text-base p-1 ms-3 sm:hidden group-hover:inline hover:cursor-pointer" >-</button>
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.discountAmount.toFixed(2)}}
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.discountpre}} %
                            </td>
                            <td class=" py-4 pe-7 text-right">
                                {{ item.subtotal.toFixed(2) }}
                            </td>
                            <td class=" py-4 pe-7 flex justify-end">
                                <div class=" w-4">
                                    <img @click.prevent="removeItem(item.id)" class="w-100" src="@/assets/images/Trash.png" alt="icon">
                                </div>
                            </td>

                        </tr>
                        <tr v-else >
                            <td scope="row" colspan="10"  class=" pr-5 py-4 font-medium whitespace-nowrap ">
                                Select Product From cart
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
