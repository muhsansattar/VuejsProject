<template>
  <div class="sm:flex justify-between items-center  p-3 sm:mx-6 sm:py-3">
    <div>
      <h1 class="text-sm md:text-2xl">Punto de venta</h1>
    </div>
    <button @click="toggleModule1" class="bg-white dark:bg-[#363B3D] border text-sm md:text-xl p-2 px-5 rounded-2xl dark:border-0">First</button>
    <button @click="toggleModule2" class="bg-white dark:bg-[#363B3D] border mx-1  text-sm md:text-xl p-2 rounded-2xl dark:border-0">Second</button>
    <button @click="toggleDarkMode" class="bg-white dark:bg-[#363B3D] border text-sm md:text-xl p-2 rounded-2xl dark:border-0">
      Mode Switch
    </button>
  </div>
  <!-- /////////// Module 1 /////////////// -->
  <div v-if="module1" class="absolute bg-black bg-opacity-10">
    <Module1/>
  </div>
  <!-- ///////////////// Module 2 /////////////////// -->
  <div v-if="module2" class="absolute bg-black bg-opacity-10 p-15 py-20">
    <module2/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Module1 from "@/views/PointOfSale/Module1.vue";
import Module2 from "@/views/PointOfSale/Module2.vue";
const module1 = ref(false)
const module2 = ref(false)
const isDarkMode = ref(false);

const toggleModule1 =()=>{
  module1.value = !module1.value;
}
const toggleModule2 =()=>{
  module2.value = !module2.value;
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};


</script>
<style>
.kk{
  background-color: rgba(0, 0, 0, 0.37);
}

</style>
