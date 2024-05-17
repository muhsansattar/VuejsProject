<script setup lang="ts">
import { ref } from "vue";
const arr = [
  {
    id: 1,
    number: "1°",
    name: "Tienda Plaza",
    price: "56,789",
    subPrice: "+18%",
  },
  {
    id: 2,
    number: "2°",
    name: "Tienda Par",
    price: "45,678",
    subPrice: "+7%",
  },
  {
    id: 3,
    number: "3°",
    name: "Tienda Aven",
    price: "34,567",
    subPrice: "+22%",
  },
  {
    id: 4,
    number: "4°",
    name: "Tienda Cero",
    price: "23,456",
    subPrice: "-18%",
  },
  {
    id: 5,
    number: "5°",
    name: "Tienda Perico",
    price: "12,345",
    subPrice: "+9%",
  },
];

const selectedItemId = ref<number | null>(null);

const selectItem = (id: number | null) => {
  selectedItemId.value = id;
};
</script>

<template>
  <div class="">
    <div
      class="dark:bg-extraGrey w-[95%] lg:w-[100%] xl:w-[100%] mx-auto p-3 lg:mx-0 rounded-2xl shadow-xl"
    >
      <p class="text-black font-extrabold text-lg dark:text-white">
        Top Tiendas
      </p>
      <div
        class="p-2 rounded-xl"
        v-for="item in arr"
        :key="item.id"
        :class="{ 'border-body border-2': selectedItemId === item.id }"
        @click="selectItem(item.id)"
      >
        <p class="text-xl font-extrabold dark:text-white">
          <span
            class="font-extrabold text-xl"
            :class="{ 'text-[25px]': selectedItemId === item.id }"
            >{{ item.number }}</span
          ><span class="pl-4 dark:text-white text-black">{{ item.name }}</span>
        </p>
        <p
          class="flex text-xs pl-20"
          :class="{ 'text-[20px] pl-24': selectedItemId === item.id }"
        >
          <span>$</span>{{ item.price }}
          <img
            class="w-2 h-2 my-auto"
            src="@/assets/vueJs/arrow.png"
            alt=""
          /><span class="text-[#49B85C] text-[9px]">{{ item.subPrice }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
