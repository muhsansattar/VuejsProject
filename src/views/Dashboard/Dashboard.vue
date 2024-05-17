<script setup lang="ts">
import Card from "@/components/DashboardC/Card.vue";
import Balance from "@/components/DashboardC/Balance.vue";
import Store from "@/components/DashboardC/Store.vue";
import Social from "@/components/DashboardC/Social.vue";
import Product from "@/components/DashboardC/Product.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ChartTwo from "@/components/Charts/ChartTwo.vue";
import Circle from "@/components/DashboardC/Circle.vue";
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-wrap row-1 xl:flex-grow">
      <div
        class="w-full xl:w-full grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"
      >
        <ChartTwo />
      </div>
      <Card />
      <Balance />
    </div>

    <div class="row-2">
      <Store />
      <Product />
      <div class="w-[100%]">
        <Circle />
      </div>
      <Social />
    </div>
  </DefaultLayout>
</template>

<style>
.row-1 {
  row-gap: 10px;
}

@media (min-width: 640px) {
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1280px) {
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
  }
}

@media (min-width: 1024px) {
  .row-1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1280px) {
  .row-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
