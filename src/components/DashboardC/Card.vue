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
</script>

<template>
  <div class="w-full lg:w-fit">
    <div class="pt-5 xl:pt-2 lg:flex lg:flex-wrap card-holder">
      <div
        class="flex mb-3 xl:mb-0 justify-between w-fit mx-auto px-3 rounded-2xl shadow-lg dark:bg-extraGrey"
        v-for="item in arr"
        :key="item.id"
      >
        <div class="">
          <p class="py-3 text-sm sm:text-md text-zinc-300">
            {{ item.name }}
          </p>
          <p class="md:text-4xl text-xl font-bold text-black dark:text-white">
            <span class="text-2xl align-top dark:text-white">$</span
            >{{ item.price }}
          </p>
          <p class="flex text-xs pt-6 pb-5">
            <img class="h-5" src="@/assets/vueJs/arrow.png" alt="" />
            <span class="text-[#49B85C]">+15%</span>
            <span class="hidden sm:block">{{ item.subTitle }}</span>
          </p>
        </div>
        <div class="h-fit my-auto">
          <img class="p-6" src="@/assets/vueJs/chart.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1280px) {
  .card-holder {
    display: grid;
    grid-template-columns: 2fr 2fr;
    width: 600px;
    height: 355px;
    gap: 5px;
  }
}
</style>
