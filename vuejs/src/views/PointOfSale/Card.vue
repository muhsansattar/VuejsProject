<template>
    <div class="sm:flex sm:flex-wrap">
      <div
        v-for="item in dataItems"
        :key="item.id"
        class=" lg:w-[270px] w-[230px] mb-10 mx-auto text-center py-10 rounded-[20px] dark:bg-[#363B3D]"
        style="box-shadow: 0 3px 7px rgba(0,0,0,0.36), 0 4px 8px rgba(0,0,0,0.53);"
      >
        <h1 class="pb-8 text-4xl font-light">{{ item.name }}</h1>
        <p>{{ item.data }}</p>
        <p>{{ item.number }}</p>
        <p>{{ item.email }}</p>
        <div class="mb-[-60px] pt-16">
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
  