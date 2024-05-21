<script setup lang="ts">
import { ref, onMounted } from "vue";
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
    class="rounded-2xl bg-white dark:bg-[#363B3D] text-black mx-2 sm:mx-10 md:mx-40 lg:mx-60 xl:mx-80 dark:text-white p-4 px-10"
    style="
      box-shadow:
        0 3px 7px rgba(0, 0, 0, 0.36),
        0 4px 8px rgba(0, 0, 0, 0.53);
    "
  >
    <h1 class="text-sm sm:text-xl font-bold my-5 dark:text-white mb-20">
      Cotizacion de apartado
    </h1>
    <div class=" sm:px-10">
      <div class="flex flex-col sm:flex-row justify-between my-5 w-full">
        <div class="mb-4 sm:mb-0 w-full sm:w-[50%]">
          <h2 class="font-bold">Fecha inicio</h2>
          <input
            type="date"
            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-11/12  dark:bg-[#363B3D] font-light"
          />
        </div>

        <div class="w-full sm:w-[50%]">
          <h2 class="font-bold">Fecha final</h2>
          <input
            type="date"
            class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-11/12 dark:bg-[#363B3D] font-light"
          />
        </div>
      </div>
      <div class="w-full">
        <h2 class="font-bold">Observaciones</h2>
        <input
          type="text"
          class="focus:outline-none border-b border-[#d6d3d0] dark:border-[#ffffff25] w-11/12  dark:bg-[#363B3D] font-light"
        />
      </div>
      <!-- ///////// 3rd Row /////////// -->
      <div class="mt-5">
        <a
          class="text-blue-500 border-b cursor-pointer text-xs md:text-sm font-light"
          >Esta cotizacion de apartado no incluye los costos de seguro y
          envio</a
        >
      </div>

      <!-- ////////  Button  ////////// -->
      <div class="flex justify-center mt-5">
        <button
          class="py-1 px-8 rounded-3xl text-2xl bg-[#62666f] dark:bg-[#252626] text-[rgb(187,187,187)] font-light"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>
