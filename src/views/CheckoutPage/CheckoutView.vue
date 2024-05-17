<script setup lang="ts">
import Details from '@/views/CheckoutPage/Details.vue';
import Options from '@/views/CheckoutPage/Options.vue';
import PriceSection from '@/views/CheckoutPage/PriceSection.vue';
import TableSection from '@/views/CheckoutPage/TableSection.vue';
import Table2 from '@/views/CheckoutPage/Table2.vue'
import StockCard from '@/views/CheckoutPage/StockCard.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

</script>

<template>
  <DefaultLayout>
    <div class="bg-white dark:bg-extradarkGrey">
      <Options />
      <div class="lg:flex block">
        <div class="w-full lg:w-[70%]">
          <div class="w-full">
            <Details />
          </div>
          <div class="w-full">
            <TableSection />
          </div>
          <div class=" w-full flex flex-col md:flex-row justify-between  flex-wrap-1230">
            <div class="w-[50%]  width-1280">
              <Table2 />
            </div>
            <div class=" w-[50%] mt-2 sm:my-6 px-2 sm:px-3 md:px-6 lg:px-6 width-1280">
              <StockCard />
            </div>
          </div>
        </div>
        <div class="w-full px-2 sm:px-3 md:px-6 lg:px-0 lg:w-[28%]">
          <PriceSection />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style>

@media (max-width: 1230px) {
  .flex-wrap-1230{
        flex-wrap: wrap;
    }

    .width-1280{
      width: 100%;
    }
}
@media (max-width: 1023px) {
    .width-1280{
      width: auto;
    }
}
@media (max-width: 980px) {
    .width-1280{
      width: 100%;
    }
}
</style>