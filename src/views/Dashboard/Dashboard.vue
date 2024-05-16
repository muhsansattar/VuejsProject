<script setup lang="ts">
import Card from "@/components/DashboardC/Card.vue";
import Balance from "@/components/DashboardC/Balance.vue";
import Store from "@/components/DashboardC/Store.vue";
import Social from "@/components/DashboardC/Social.vue";
import Product from "@/components/DashboardC/Product.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ChartTwo from "@/components/Charts/ChartTwo.vue";
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-wrap gap-5">
      <div
        class="mx-auto xl:mx-0 mt-4 sm:w-90 grid grid-cols-12 gap-4 md:mt-2 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
      >
        <ChartTwo />
      </div>
      <Card />
      <Balance />
    </div>
    <!-- <div class="grid-container">
      <div
        class="p-6 rounded-2xl shadow-xl w-fit mx-auto lg:w-fit hidden xl:block"
      >
        <img class="w-72 mx-auto" src="@/assets/vueJs/chart.jpg" alt="" />
      </div>
      <div class="lg:w-fit card"><Card /></div>
      <div class="lg:w-fit"><Balance /></div>
    </div> -->

    <div class="grid-container-2">
      <div class="flex gap-3"><Store /><Product /></div>
      <div class="hidden">
        <div class="p-2 rounded-2xl w-full h-full shadow-xl">
          <img
            class="pt-5 w-full h-full"
            src="@/assets/vueJs/circle.jpg"
            alt=""
          />
        </div>
      </div>
      <div><Social /></div>
    </div>
  </DefaultLayout>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.card {
  margin-left: 20px;
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-container-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
@media (min-width: 1280px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    margin-left: 0px;
  }
  .grid-container-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>
