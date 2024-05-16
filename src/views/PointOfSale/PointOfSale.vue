<template>
  <DefaultLayout>
    <div class="bg-white dark:bg-[#252626] px-6">
      <Heading />
      <Card :dataItems="items" />
    </div>
    <!-- //////////////// Button for show Table ////////////// -->
<button @click="moduleToggle" class="border py-3 px-8 rounded-2xl font-bold">Table</button>
<!-- /////////////// Div/Table that is toggle //////////// -->
<div v-if="moduleShow">
    <div class="bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90 fixed py-10 w-full h-full overflow-y-auto overflow-x-auto z-99 left-0 top-0">
        
    <Table />
    <div @click="moduleToggle" class="absolute top-0 right-2 w-10">
          <img class="w-full" src="@/assets/images/delete.png" alt="">
        </div>
    </div>
  </div>
  </DefaultLayout>
</template>

<script setup lang="ts">

import Heading from '@/views/PointOfSale/Heading.vue';
import Card from '@/views/PointOfSale/Card.vue';
import Table from '@/views/PointOfSale/Table.vue';

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue';


const items = [
  { id: 1, name: 'Web Store', data: 'Nambre encargado', number: '00-0000-0000', email: 'webstore@alrid.com' },
  { id: 2, name: 'Tienda 1', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda1@alrid.com' },
  { id: 3, name: 'Tienda 2', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda2@alrid.com' },
  { id: 4, name: 'Tienda 3', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda3@alrid.com' },
  { id: 5, name: 'Tienda 4', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda4@alrid.com' },
  { id: 6, name: 'Tienda 5', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda5@alrid.com' },
  { id: 7, name: 'Tienda 6', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda6@alrid.com' },
  { id: 8, name: 'Tienda 7', data: 'Nambre encargado', number: '00-0000-0000', email: 'tienda7@alrid.com' }
];

const moduleShow = ref(false)
const moduleToggle =()=>{
  moduleShow.value = !moduleShow.value;
}

</script>
