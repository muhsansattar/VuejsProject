<script setup lang="ts">
const arr = [
  {
    id: 1,
    name: "Ventas Del dite",
    price: "45,678",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
  {
    id: 2,
    name: "Ventas Del dite",
    price: "456,789",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
  {
    id: 3,
    name: "Ventas Del dite",
    price: "5,567",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
  {
    id: 4,
    name: "Ventas Del dite",
    price: "117",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
];

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
  <div class="flex">
    <div class="flex flex-wrap w-132.5 gap-1">
      <div
        class="flex justify-between w-[250px] px-3 rounded-2xl shadow-lg dark:bg-extraGrey"
        v-for="item in arr"
        :key="item.id"
      >
        <div class="">
          <p class="py-3 text-zinc-300">{{ item.name }}</p>
          <p class="text-4xl font-bold text-black dark:text-white">
            <span class="text-2xl align-top dark:text-white">$</span
            >{{ item.price }}
          </p>
          <p class="flex text-xs pt-6 pb-5">
            <img src="@/assets/vueJs/arrow.png" alt="" />
            <span class="text-[#49B85C]">+15%</span>
            {{ item.subTitle }}
          </p>
        </div>
        <div class="h-fit my-auto">
          <img class="" src="@/assets/vueJs/bar-chart.png" alt="" />
        </div>
      </div>
    </div>
    <div class="pl-3 rounded-2xl shadow-lg w-65 dark:bg-extraGrey">
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
        <div class="text-4xl font-bold text-black dark:text-white flex gap-5">
          <div><span class="text-2xl align-top">$</span>{{ item.price }}</div>
          <div class="flex pt-3">
            <img class="h-5 pt-1" src="@/assets/vueJs/arrow.png" alt="" />
            <p class="text-sm text-[#49B85C]">{{ item.subPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
