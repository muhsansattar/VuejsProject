<template>
  <div id="app">
    <apexchart
      type="line"
      height="150"
      width="150"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "App",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        colors: ["#39B54A"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        // title: {
        //   text: "Product Trends by Month",
        //   align: "left",
        // },
        grid: {
          row: {
            colors: ["transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          //   categories: [
          //     "Jan",
          //     "Feb",
          //     "Mar",
          //     "Apr",
          //     "May",
          //     "Jun",
          //     "Jul",
          //     "Aug",
          //     "Sep",
          //   ],
        },
      },
    };
  },
});
</script>

<style>
/* Add any custom styles here if needed */
</style>
