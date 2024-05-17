<script setup lang="ts">
import CardChart from "@/components/Charts/CardChart.vue";
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
    class="flex w-[95%] h-[100%] xl:w-[100%] mx-auto lg:w-[100%] md:w-[100%] 2xl:w-[100%]"
  >
    <div
      class="flex flex-wrap 2xl:w-[100%] 2xl:ml-0 lg:justify-end md:w-[100%] xl:w-[100%] sm:w-132.5 mx-auto gap-1.5 2xl:gap-2"
    >
      <div
        class="flex justify-between w-[100%] lg:w-[49%] xl:w-[49%] md:w-[45%] 2xl:w-[49%] mx-auto px-3 rounded-2xl shadow-lg dark:bg-extraGrey"
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
        <div
          class="h-fit my-auto md:block lg:hidden md:w-[90%] w-[30%] hidden chart"
        >
          <CardChart />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 2400px) {
  .chart {
    display: block;
    width: 95%;
  }
}
</style>
