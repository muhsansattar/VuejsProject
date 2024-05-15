<script setup lang="ts">
import DataStatsOne from "@/components/DataStats/DataStatsOne.vue";
import ChartOne from "@/components/Charts/ChartOne.vue";
import ChartThree from "@/components/Charts/ChartThree.vue";
import ChartTwo from "@/components/Charts/ChartTwo.vue";
import ChatCard from "@/components/ChatCard.vue";
import MapOne from "@/components/Maps/MapOne.vue";
import TableOne from "@/components/Tables/TableOne.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const fetchData = async () => {
  try {
    console.log("response.data");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
</script>

<template>
  <DefaultLayout>
    <div
      class="mt-4 grid grid-cols-12 gap-4 md:mt-2 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
    >
      <ChartTwo />
      <!-- <ChartThree /> -->
      <!-- <MapOne /> -->
      <!-- <div class="col-span-12 xl:col-span-8">
        <TableOne />
      </div> -->
      <!-- <ChatCard /> -->
    </div>
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"
    >
      <DataStatsOne />
    </div>
  </DefaultLayout>
</template>
