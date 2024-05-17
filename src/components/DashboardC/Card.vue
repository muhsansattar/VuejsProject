<script setup lang="ts">
const arr = [
  {
    id: 1,
    name: "Ventas Del dite",
    price: "4,678",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
  {
    id: 2,
    name: "Ventas Del dite",
    price: "4,789",
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
    price: "1,017",
    subTitle: "vs sabdod interior",
    img: "@/assets/vueJs/arrow.png",
  },
];
</script>

<template>
  <div
    class="flex w-[90%] mx-auto lg:w-fit xl:ml-[3%] md:w-[100%] 2xl:w-[100%] 2xl:ml-[6%]"
  >
    <div
      class="flex flex-wrap 2xl:w-[100%] xl:ml-[4%] 2xl:ml-0 lg:justify-end md:w-[99%] sm:w-132.5 mx-auto md:gap-1 gap-3"
    >
      <div
        class="flex justify-between w-[100%] lg:w-[45%] xl:w-[49%] md:w-[45%] 2xl:w-[49%] mx-auto px-3 rounded-2xl shadow-lg dark:bg-extraGrey"
        v-for="item in arr"
        :key="item.id"
      >
        <div class="w-[70%]">
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
            {{ item.subTitle }}
          </p>
        </div>
        <div class="h-fit my-auto w-[30%]">
          <img class="" src="@/assets/vueJs/chart.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
