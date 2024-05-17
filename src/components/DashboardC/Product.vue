<script setup lang="ts">
import { ref } from "vue";

const arr = [
  {
    id: 1,
    number: "1°",
    name: "Adidas As",
    price: "569",
    subPrice: "+18%",
  },
  {
    id: 2,
    number: "2°",
    name: "NewEra fi",
    price: "45",
    subPrice: "+7%",
  },
  {
    id: 3,
    number: "3°",
    name: "NewEra ty",
    price: "34",
    subPrice: "+22%",
  },
  {
    id: 4,
    number: "4°",
    name: "Converse",
    price: "23",
    subPrice: "-18%",
  },
  {
    id: 5,
    number: "5°",
    name: "Adidas cyt",
    price: "12",
    subPrice: "+9%",
  },
];

const selectedItemId = ref<number | null>(null);

const tooltipVisible = ref(false);
let tooltipPosition = { x: 0, y: 0 };

const selectItem = (id: number | null) => {
  selectedItemId.value = id;
};

const showTooltip = (event: MouseEvent) => {
  tooltipPosition = { x: event.clientX, y: event.clientY };
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};
</script>

<template>
  <div class="mt-6">
    <div
      class="dark:bg-extraGrey p-3 w-[90%] mx-auto lg:mr-[8%] rounded-2xl shadow-xl"
    >
      <p class="text-black font-extrabold text-lg dark:text-white">
        Top Producto
      </p>
      <div
        class="p-2 rounded-xl cursor-pointer"
        v-for="item in arr"
        :key="item.id"
        :class="{
          'border-body border-2': selectedItemId === item.id,
        }"
        @click="selectItem(item.id)"
        @mouseover="showTooltip"
        @mouseleave="hideTooltip"
      >
        <p class="text-xl font-extrabold dark:text-white">
          <span
            class="font-extrabold text-xl"
            :class="{ 'text-[25px]': selectedItemId === item.id }"
            >{{ item.number }}</span
          ><span class="pl-4 dark:text-white text-black">{{ item.name }}</span>
        </p>
        <p
          class="flex text-xs pl-15"
          :class="{ 'text-[18px] ': selectedItemId === item.id }"
        >
          <span></span>{{ item.price }}
        </p>
      </div>
      <!-- Tooltip -->
      <!-- <div
        v-if="tooltipVisible"
        class="absolute mt-9 -ml-30 bg-body dark:bg-white p-2 shadow-lg flex gap-2"
        :style="{
          top: tooltipPosition.y + 'px',
          left: tooltipPosition.x + 'px',
        }"
      >
        <div class="w-fit my-auto">
          <img class="w-30 my-auto" src="@/assets/vueJs/shoes.jpg" alt="" />
        </div>
        <div class="w-35">
          <p class="text-white dark:text-body text-[11px] leading-tight">
            TENIS ADVANTAGE BASE ADIDAS COURT LIFESTYLE<br /><span
              class="text-[9px] text-black"
              >Ingresa: 07/09/23 <br />Ventas Totales: 113 <br />Stock: 218
              <br />
              Varientes: 9</span
            >
          </p>
        </div>
      </div> -->

      <div
        v-if="tooltipVisible"
        class="absolute mt-9 -ml-30 bg-body dark:bg-white p-2 shadow-lg flex gap-2"
        :style="{
          top: tooltipPosition.y + 'px',
          left: tooltipPosition.x + 'px',
        }"
      >
        <!-- Triangle -->
        <div
          class="absolute -bottom-1 left-5 bg-body dark:bg-white w-2 h-2 border-solid border-b-4 border-r-4 border-body dark:border-white transform -rotate-45 translate-x-2/4"
        ></div>

        <!-- Tooltip content -->
        <div class="flex gap-2">
          <div class="w-fit my-auto">
            <img class="w-30 my-auto" src="@/assets/vueJs/shoes.jpg" alt="" />
          </div>
          <div class="w-35">
            <p class="text-white dark:text-body text-[11px] leading-tight">
              TENIS ADVANTAGE BASE ADIDAS COURT LIFESTYLE<br /><span
                class="text-[9px] text-black"
                >Ingresa: 07/09/23 <br />Ventas Totales: 113 <br />Stock: 218
                <br />
                Varientes: 9</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
