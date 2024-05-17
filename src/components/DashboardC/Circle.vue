<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Define a type for category objects
interface Category {
  name: string;
  percentage: number;
  products: number;
  color: string;
}

const chart = ref(null);

// Define the categories with the type annotation
const categories: Category[] = reactive([
  { name: "Tenis", percentage: 43, products: 834, color: "#aaaeb6" },
  { name: "Gorras", percentage: 25, products: 650, color: "#aaaeb6" },
  { name: "Ropa", percentage: 17, products: 230, color: "#808080" },
  { name: "Mochilas", percentage: 9, products: 60, color: "#808080" },
  { name: "Accesorios", percentage: 6, products: 245, color: "#808080" },
]);

const currentCategory = ref<Category>(categories[0]);

const chartData = ref({
  series: categories.map((category) => category.percentage),
  labels: categories.map((category) => category.name),
});

const apexOptions = ref({
  chart: {
    type: "donut",
    width: 240,
  },
  colors: categories.map((category) => category.color),
  labels: chartData.value.labels,
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
});

// Annotate the parameter type
function updateChart(category: Category) {
  currentCategory.value = category;
}

// Watch for changes in currentCategory and update chart options accordingly
watch(currentCategory, (newCategory) => {
  const categoryIndex = categories.findIndex(
    (category) => category.name === newCategory.name
  );
  const updatedColors = categories.map((category, index) =>
    index === categoryIndex ? category.color : "#E0E0E0"
  );

  apexOptions.value = {
    ...apexOptions.value,
    colors: updatedColors,
  };
});
</script>

<template>
  <div
    class="bg-white px-4 py-2 shadow-4 rounded-xl lg:w-[100%] xl:w-[100%] w-[95%] dark:bg-extraGrey mx-auto"
  >
    <div class="flex justify-between mt-2">
      <p class="text-black-2 text-lg font-extrabold dark:text-white">
        Venta por Categoria
      </p>
      <p class="text-xs pt-1">
        <select name="" id="" class="bg-none dark:bg-darkGrey">
          <option value="">Semana actual</option>
          <option value="">Semana anterior</option>
        </select>
      </p>
    </div>
    <div class="flex">
      <div>
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex mb-[2.5px] md:mb-[7px] xl:mb-0 cursor-pointer margin"
          @click="updateChart(category)"
        >
          <div class="me-3">
            <span
              :style="{ color: category.color }"
              class="font-extrabold text-4xl"
              >.</span
            >
          </div>
          <div>
            <p class="text-black-2 font-semibold text-lg dark:text-white">
              {{ category.name }} ({{ category.percentage }}%)
            </p>
            <span class="font-semibold text-xs"
              >{{ category.products }} Products</span
            >
          </div>
        </div>
      </div>
      <div>
        <div
          class="mb-2 mt-13 md:ml-[100%] xl:ml-[20%] hidden xl:w-fit xl:h-fit md:block lg:hidden xl:block"
        >
          <div id="chartThree" class="mx-auto flex justify-center">
            <VueApexCharts
              type="donut"
              width="240"
              height="250"
              :options="apexOptions"
              :series="chartData.series"
              ref="chart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1324px) {
  .margin {
    margin-bottom: 8px;
  }
}
</style>
