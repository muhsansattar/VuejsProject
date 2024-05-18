<script setup lang="ts">
import { ref, onMounted } from "vue";
import Module2 from "@/views/CheckoutPage/Module2.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
<template>

  <div v-if="isLoading" role="status" class="w-fit mx-auto mt-[15%]">
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-darkGrey"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only"></span>
  </div>
  <div
    v-else
    class="rounded-2xl bg-white dark:bg-extraGrey text-black mx-2 sm:mx-10 md:mx-30 lg:mx-60 xl:mx-90 dark:text-white py-3 px-3 sm:px-10 shadow-6 w-auto"
  >
    <h1 class="text-xl font-bold my-3 dark:text-white">Corte inicial</h1>

    <div class="px-4 xsm:px-20">
      <div
        class="border-b-2 border-gray dark:border-black flex justify-center w-40 sm:w-70 mb-14"
      >
        <button
          class="border-2 border-gray dark:border-black border-b-0 text-xs p-1 px-4 rounded-tl-xl rounded-tr-xl font-bold -mb-1 bg-[rgba(249,249,249)] dark:bg-[#333a3d]"
        >
          Corte inicial
        </button>
      </div>

      <div class="change flex flex-col sm:flex-row justify-between w-full ">
        <div>
          <h2 class="font-bold">No.Corte</h2>
          <input
            type="text"
            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] dark:bg-extraGrey text-right sm:w-17  font-light"
            placeholder="59"
          />
        </div>

        <div class="my-4 sm:my-0 mx-0">
          <h2 class="font-bold">Fecha</h2>
          <input
            type="date"
            class="focus:outline-none border-b border-[#d6d3d0]  md:w-35 dark:border-[#ffffff25] dark:bg-extraGrey font-light"
          />
        </div>

        <div class="w-full">
          <h2 class="font-bold">Hora</h2>
          <input
            type="time"
            class="focus:outline-none border-b border-[#d6d3d0]   md:w-25 dark:border-[#ffffff25] dark:bg-extraGrey font-light"
          />
        </div>
      </div>

      <div class="flex flex-col items-center sm:items-start">
        <div class="my-5 w-full">
        <h2 class="font-bold">No. Caja</h2>
        <select
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] dark:bg-extraGrey font-light w-full"
        >
          <option>Caja 1 -/- Web Store</option>
          <option>Caja 2 -/- Web Store</option>
          <option>Caja 3 -/- Web Store</option>
          <option>Caja 4 -/- Web Store</option>
        </select>
      </div>

      <div class="w-full">
        <h2 class="font-bold">Terminal</h2>
        <select
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] text-base xsm:text-lg dark:bg-extraGrey font-light w-full"
        >
          <option>TPV-000005 -/- Bancomer</option>
          <option>ABC-11111111111 -/- webstore</option>
          <option>DEF-222222 -/- Bancomer</option>
          <option>GHI-333333 -/- webstore</option>
        </select>
      </div>

      <div class=" w-full flex flex-col sm:flex-row justify-between my-5">
        <div class=" w-full sm:w-[50%] ">
          <h2 class="font-bold">Saldo</h2>
          <input
            type="text"
            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full sm:w-[90%]  dark:bg-extraGrey font-light"
            placeholder="0"
          />
        </div>

        <div class="w-full sm:w-[50%]">
          <h2 class="font-bold">Hora</h2>
          <input
            type="text"
            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full sm:w-[90%]  dark:bg-extraGrey font-light"
            placeholder="0.00"
          />
        </div>
      </div>

      <div class="w-full">
        <h2 class="font-bold">Fondos</h2>
        <input
          type="text"
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25]  w-full dark:bg-extraGrey font-light"
          placeholder="0.00"
        />
      </div>

      <div class="my-5 w-full">
        <h2 class="font-bold">Correo Electronico</h2>
        <input
          type="email"
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light xl:text-xl"
          placeholder="Alridshop2@familysport.com.mx"
        />
      </div>

      <div class="w-full">
        <h2 class="font-bold">Contrasena</h2>
        <input
          type="password"
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-full dark:bg-extraGrey font-light "
          placeholder=""
        />
      </div>
      </div>

      <div class="flex justify-center mt-5">
        <button
          class="py-1 px-8 rounded-3xl text-2xl bg-[#62666f] text-[rgb(187,187,187)] dark:border-[#ffffff25] dark:bg-extraDarkGrey font-light"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
