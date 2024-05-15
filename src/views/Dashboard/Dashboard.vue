<script setup lang="ts">
import Card from "@/components/DashboardC/Card.vue";
import Store from "@/components/DashboardC/Store.vue";
import Product from "@/components/DashboardC/Product.vue";
</script>

<template>
  <Card />
  <div class="flex gap-4">
    <Store />
    <Product />
  </div>
</template>
