<script setup lang="ts">
const arr2 = [
  {
    id: 1,
    title: "Efectivo",
    price: "153,456",
    subPrice: "+28%",
  },
  {
    id: 2,
    title: "BBVA",
    price: "839,123",
    subPrice: "+29%",
  },
];
</script>

<template>
  <div
    class="px-2 lg:w-[100%] xl:h-[100%] xl:w-[100%] md:w-[94%] w-[95%] mx-auto lg:mx-auto pb-10 pt-3 rounded-2xl shadow-lg dark:bg-extraGrey"
  >
    <div class="flex pt-2 justify-between">
      <p class="font-bold text-black dark:text-white">Balance de ventas</p>
      <p class="text-xs pt-1">
        <select name="" id="" class="bg-none dark:bg-extraGrey">
          <option value="">Semana actual</option>
          <option value="">Semana actual</option>
        </select>
      </p>
    </div>
    <div class="pt-5 pb-10" v-for="item in arr2" :key="item.id">
      <p class="text-sm font-semibold">{{ item.title }}</p>
      <div class="text-4xl font-bold text-black dark:text-white flex">
        <div><span class="text-2xl align-top">$</span>{{ item.price }}</div>
        <div class="flex pt-3">
          <img class="h-5 pt-1" src="@/assets/vueJs/arrow.png" alt="" />
          <p class="text-sm text-[#49B85C]">{{ item.subPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
