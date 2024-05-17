<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "@/components/DashboardC/Card.vue";
import Balance from "@/components/DashboardC/Balance.vue";
import Store from "@/components/DashboardC/Store.vue";
import Social from "@/components/DashboardC/Social.vue";
import Product from "@/components/DashboardC/Product.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ChartTwo from "@/components/Charts/ChartTwo.vue";
import Circle from "@/components/DashboardC/Circle.vue";

// Reactive property to handle loader visibility
const isLoading = ref(true);

// Lifecycle hook to hide loader after 2 seconds
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<template>
  <DefaultLayout>
    <div v-if="isLoading" role="status" class="w-fit mx-auto mt-[15%]">
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-darkGrey"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only"></span>
    </div>
    <div v-else>
      <div class="flex flex-wrap row-1 xl:flex-grow">
        <div
          class="w-[100%] md:w-[100%] xl:w-full grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"
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
