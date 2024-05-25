<template>
    <div class="sm:flex sm:flex-wrap">
      <div
        v-for="item in dataItems"
        :key="item.id"
        class=" xl:w-[24%] lg:w-[270px] xsm:w-[230px] w-[90%] mb-10 mx-auto text-center pb-10 pt-6 rounded-[20px] dark:bg-extraGrey shadow-6"
        >
        <h1 class="pb-8 text-4xl xl:text-5xl font-light">{{ item.name }}</h1>
        <p>{{ item.data }}</p>
        <p>{{ item.number }}</p>
        <p>{{ item.email }}</p>
        <div class="mb-[-60px] pt-22">
          <Button />
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Button from '@/views/PointOfSale/Button.vue';
 
  
  export default defineComponent({
    name: "Card",
    components: {
      Button
    },
    props: {
      dataItems: {
        type: Array,
        required: true
      }
    }
  });
  </script>
  