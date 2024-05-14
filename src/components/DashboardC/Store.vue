<!-- <script setup lang="ts">
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
    name: "Tienda Parque",
    price: "45,678",
    subPrice: "+7%",
  },
  {
    id: 3,
    number: "3°",
    name: "Tienda Avenida",
    price: "34,567",
    subPrice: "+22%",
  },
  {
    id: 4,
    number: "4°",
    name: "Tienda Centro",
    price: "23,456",
    subPrice: "-18%",
  },
  {
    id: 5,
    number: "5°",
    name: "Tienda Periferico",
    price: "12,345",
    subPrice: "+9%",
  },
];
</script>

<template>
  <div class="mt-6">
    <div class="dark:bg-extraGrey p-3 w-64 rounded-2xl shadow-xl">
      <p class="text-black font-extrabold text-lg dark:text-white">
        Top Tiendas
      </p>
      <div class="p-2 rounded-xl" v-for="item in arr" :key="item.id">
        <p class="text-xl font-extrabold dark:text-white">
          <span class="font-extrabold text-xl">{{ item.number }}</span
          ><span class="pl-4 dark:text-white text-black">{{ item.name }}</span>
        </p>
        <p class="flex text-xs pl-20">
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
</template> -->

<script setup lang="ts">
import { ref } from "vue"; // Import ref from Vue to create reactive data

// Define the array of items
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
    name: "Tienda Parque",
    price: "45,678",
    subPrice: "+7%",
  },
  {
    id: 3,
    number: "3°",
    name: "Tienda Avenida",
    price: "34,567",
    subPrice: "+22%",
  },
  {
    id: 4,
    number: "4°",
    name: "Tienda Centro",
    price: "23,456",
    subPrice: "-18%",
  },
  {
    id: 5,
    number: "5°",
    name: "Tienda Periferico",
    price: "12,345",
    subPrice: "+9%",
  },
];

// Define a reactive property to store the ID of the selected item
const selectedItemId = ref(null);

// Function to set the selected item
const selectItem = (id: number) => {
  selectedItemId.value = id;
};
</script>

<template>
  <div class="mt-6">
    <div class="dark:bg-extraGrey p-3 w-64 rounded-2xl shadow-xl">
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
            :class="{ 'text-[27px]': selectedItemId === item.id }"
            >{{ item.number }}</span
          ><span class="pl-4 dark:text-white text-black">{{ item.name }}</span>
        </p>
        <p
          class="flex text-xs pl-20"
          :class="{ 'text-[17px] pl-30': selectedItemId === item.id }"
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
