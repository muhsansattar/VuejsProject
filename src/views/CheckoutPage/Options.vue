<script setup lang="ts">
import { ref } from 'vue';
const isDarkMode=ref(false)
const ToggleMode=() =>{
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark",isDarkMode.value)
}

</script>
<template>
    <div class="flex items-center text-black-2 dark:text-white gap-5 pt-6 mx-2 px-0 sm:px-6 relative overflow-x-auto  ">
    <a href="#">Checador</a>
    <select class="bg-transparent  focus:outline-none  ">
      <option class="bg-white dark:bg-black">Cajas</option>
      <option class="bg-white dark:bg-black">Option 1</option>
      <option class="bg-white dark:bg-black">Option 2</option>
      <option class="bg-white dark:bg-black">Option 3</option>
      <option class="bg-white dark:bg-black">Option 4</option>
    </select>
    <select class="bg-transparent focus:outline-none">
      <option class="bg-white dark:bg-black ">Articulos</option>
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
  </div>
  
</template>