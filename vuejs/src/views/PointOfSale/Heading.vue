<template>
  <div class="flex justify-between sm:mx-6 sm:py-3">
    <h1 class="text-2xl">Punto de venta</h1>
    <button @click="toggleDarkMode" class="bg-white dark:bg-[#363B3D] border text-xl p-2 rounded-2xl dark:border-0">
      Mode Switch
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};
</script>
