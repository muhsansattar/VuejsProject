<script setup lang="ts">
import { ref } from "vue";
import sidebarLight from "@/assets/images/sidebarLight.png";
import criwaveLight from "@/assets/images/criwaveLight.png";
import criwaveDark from "@/assets/images/criwaveDark.png";
const isDarkMode = ref(false);
const showSidebar = ref(false);
const modeToggle = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>
<template>
  <div
    class="bg-black-2 dark:bg-extraGrey py-6 px-2 h-screen relative top-0 left-0 z-10"
  >
    <div class="w-13">
      <img
        @click="toggleSidebar"
        class="object-cover w-full"
        src="@/assets/images/sidebarLight.png"
        alt="sidebarIcon"
      />
    </div>
  </div>
  <!-- <img class="object-cover w-full" 
                :src="isDarkMode ? sidebarDark : sidebarLight" 
                :alt="isDarkMode ? 'Dark sidebar icon' : 'Light sidebar icon'"> -->

  <!-- sidebar show -->

  <div
    v-if="showSidebar"
    class="bg-black-2 dark:bg-extraGrey pt-10 px-4 w-60 h-full overflow-y-auto absolute left-0 z-10"
  >
    <div class="w-[60%] mb-6">
      <img
        @click="toggleSidebar"
        class="object-cover w-full"
        :src="isDarkMode ? criwaveDark : criwaveLight"
        :alt="isDarkMode ? 'Dark sidebar icon' : 'Light sidebar icon'"
      />
    </div>
    <div class="my-3">
      <a class="font-bold text-2xl dark:text-white" href="#">General</a>
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/images/dashboard.png"
          alt=""
        />
      </div>
      <router-link to="/dashboard">
        <a class="text-white font-thin text-lg">Dashboard</a>
      </router-link>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Tiendas</a>
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/vueJs/Punto.png"
          alt=""
        />
      </div>
      <router-link to="/pos">
        <a class="text-white font-thin text-lg">Punto de venta</a>
      </router-link>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Almacen</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">compras</a>
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/images/imagenes.png"
          alt=""
        />
      </div>
      <a class="text-white font-thin text-lg">Imagenes</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Ventas</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Consultar</a>
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/images/existencias.png"
          alt=""
        />
      </div>
      <a class="text-white font-thin text-lg">Existencias</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Facturacion</a>
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/images/ventas.png"
          alt=""
        />
      </div>
      <router-link to="checkout">
        <a class="text-white font-thin text-lg">Ventas</a>
      </router-link>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#"
        >Tiendas en linea</a
      >
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#"
        >Tiendas Foraneas</a
      >
    </div>
    <div class="flex items-center">
      <div class="w-10">
        <img
          class="w-full object-cover pe-3"
          src="@/assets/images/movimientos.png"
          alt=""
        />
      </div>
      <a class="text-white font-thin text-lg">Movimientos</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Cobranza</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Logistica</a>
    </div>
    <div class="my-3">
      <a class="font-bold dark:text-white text-2xl" href="#">Banco</a>
    </div>
  </div>
</template>
