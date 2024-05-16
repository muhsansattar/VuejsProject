<script setup lang="ts">
import Card from "@/components/DashboardC/Card.vue";
import Balance from "@/components/DashboardC/Balance.vue";
import Store from "@/components/DashboardC/Store.vue";
import Social from "@/components/DashboardC/Social.vue";
import Product from "@/components/DashboardC/Product.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="flex">
      <div class="p-2 rounded-2xl shadow-xl mr-6 w-fit">
        <img src="@/assets/vueJs/chart.jpg" alt="" />
      </div>
      <Card />
      <Balance />
    </div>

    <div class="flex gap-4">
      <Store />
      <Product />
      <div class="p-2 rounded-2xl shadow-xl mr-6">
        <img class="pt-5" src="@/assets/vueJs/circle.jpg" alt="" />
      </div>
      <Social />
    </div>
  </DefaultLayout>
</template>
