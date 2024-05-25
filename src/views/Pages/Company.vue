<script setup lang="ts">
import { ref } from "vue";

const dropdownOpen = ref(false);
const selectedOption = ref("Empresa");

function selectOption(option: string) {
  selectedOption.value = option;
  dropdownOpen.value = false;
}
</script>

<template>
  <div class="bg-cover h-screen bg-no-repeat text-white">
    <div
      class="absolute inset-0 bg-[#323232] bg-opacity-75 pt-[200px] bottom-0"
    >
      <div
        class="border-2 border-[black] bg-[#E6E6E7] text-black mt-12 w-[90%] sm:w-[435px] lg:w-[650px] 2xl:w-[35%] mx-auto rounded-[50px] lg:rounded-[80px]"
      >
        <div>
          <p
            class="font-light text-[#62666F] text-3xl lg:text-4xl text-center lg:text-start py-7 lg:py-10 lg:pl-20"
          >
            Seleccionar Empresa
          </p>
          <div class="w-[60%] mx-auto relative pb-[120px]">
            <div class="flex justify-between border-b border-black">
              <div class="text-2xl font-normal">
                {{ selectedOption }}
              </div>
              <div
                @click.prevent="dropdownOpen = !dropdownOpen"
                class="pb-[10px]"
              >
                <img
                  class="w-[16px] pt-[10px]"
                  src="@/assets/vueJs/arrowdown.png"
                  alt=""
                />
              </div>
              <div
                v-show="dropdownOpen"
                class="mt-[37px] absolute flex w-[100%] flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-darkGrey z-9"
              >
                <ul class="flex flex-col dark:border-strokedark">
                  <li>
                    <div
                      class="flex items-center font-normal text-2xl cursor-pointer dark:bg-gray hover:bg-[#E6E6E7]"
                      @click="selectOption('Empressa 1')"
                    >
                      Empressa 1
                    </div>
                  </li>

                  <li>
                    <div
                      class="flex items-center gap-3.5 font-normal cursor-pointer dark:bg-gray text-2xl hover:bg-[#E6E6E7]"
                      @click="selectOption('Empressa 2')"
                    >
                      Empressa 2
                    </div>
                  </li>

                  <li>
                    <div
                      class="flex items-center gap-3.5 font-normal cursor-pointer dark:bg-gray text-2xl hover:bg-[#E6E6E7]"
                      @click="selectOption('Empressa 3')"
                    >
                      empressa 3
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-fit mx-auto lg:ml-[350px] md:ml-[270px] sm:mb-[-20px] mb-[-7%]"
        >
          <router-link to="/dashboard">
            <button
              class="text-[#62666F] font-extralight bg-[#E6E6E7] border border-black py-2 px-15 lg:px-16 sm:px-6 rounded-full text-2xl"
            >
              Entrar
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
