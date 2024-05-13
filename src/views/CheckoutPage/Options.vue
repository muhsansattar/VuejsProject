<script setup lang="ts">
import { ref } from 'vue';
const isDarkMode=ref(false)
const ToggleMode=() =>{
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark",isDarkMode.value)
}
</script>
<template>
    <div class="flex items-center text-black-2 dark:text-white gap-5 pt-6 px-10  ">
    <a href="#">Checador</a>
    <select class="bg-transparent  focus:outline-none">
      <option class="bg-white dark:bg-black">Cajas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Articulos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Clientes</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Ventas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Movimientos</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black">Utlierias</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <button @click="ToggleMode" class="bg-gray p-3 rounded-xl dark:bg-white dark:text-black">
      moodswitch
  </button>
  </div>
  
</template>