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
    <Options/>
    <div class="">
        <div class="">
          <Details/>
      <TableSection/>
      <div class="flex flex-col-reverse md:flex-row mx-auto">
        <Table2/>
      <StockCard/>
      </div>
        </div>
      <div class="">
         <PriceSection/>
      </div>

    </div>
  </div>
 </DefaultLayout>
</template>

