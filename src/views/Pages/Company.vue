<script setup lang="ts">
import { useRouter } from "vue-router";</script>

<template>
  <div
    class="bg-[url('@/assets/vueJs/Background.png')] bg-cover h-screen bg-no-repeat text-white"
  >
    <div class="absolute inset-0 bg-[#323232] bg-opacity-75">
      <div class="w-fit mx-auto pt-32">
        <img class="w-70 sm:w-90" src="@/assets/vueJs/logoDark.png" alt="" />
      </div>
      <div
        class="border-2 border-[black] bg-[#E6E6E7] text-black mt-12 w-[90%] sm:w-[435px] lg:w-[650px] mx-auto rounded-[50px] lg:rounded-[80px]"
      >
        <div>
          <p
            class="font-light text-[#62666F] text-3xl lg:text-4xl text-center lg:text-start py-7 lg:py-13 lg:pl-20"
          >
            Seleccionar Empresa
          </p>
          <div class="lg:pb-0 pb-5">
            <select
              class="bg-[#E6E6E7] lg:text-[20px] border-b border-[#aaaeb6] w-[80%] lg:w-[440px] ml-[10%] lg:ml-32 text-black-2 focus:outline-none pt-3 mb-17"
            >
              <option class="text-sm lg:text-[20px] leading-9">
                Empresa 1
              </option>
              <option class="text-sm lg:text-[20px] leading-9">
                Empresa 2
              </option>
              <option class="text-sm lg:text-[20px] leading-9">
                Empresa 3
              </option>
            </select>
          </div>
        </div>
        <div
          class="w-fit mx-auto lg:ml-[400px] md:ml-[270px] sm:mb-[-20px] mb-[-7%]"
        >
        <router-link to="/dashboard" >
          <button class="text-[#62666F] font-extralight bg-[#E6E6E7] border border-black py-2 px-15 lg:px-16 sm:px-6 rounded-full text-2xl">
            Entrar
          </button>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
