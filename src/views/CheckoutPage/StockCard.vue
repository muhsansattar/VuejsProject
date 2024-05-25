<script setup lang="ts">
import { useDataStore } from '@/stores/Index';
import { computed, ref, watch } from 'vue';
import shoes from "../../assets/images/shoes.png"

const dataStore = useDataStore();
const latestSelect = computed(() => dataStore.lastselect);
const imgSrc = ref('');

// Watch for changes in latestSelect and update imgSrc accordingly
// watch(latestSelect, (newValue) => {
//     console.log("latestSelect.value inside watch:", newValue); // Log the value of newValue

//     if (Array.isArray(newValue) && newValue.length > 0 && newValue[0].img) {
//         imgSrc.value = newValue[0].img;
//         console.log("imgSrc updated:", imgSrc.value);
//     } else {
//         console.error("latestSelect.value is empty or does not contain a valid image");
//     }
// });

// console.log("latestSelect.value", latestSelect.value); // Check the value of latestSelect

// sole.log(latestSelect.value[0].img);

</script>

<template>
    <div class="py-4 px-4 sm:px-2 w-full h-full bg-white dark:bg-extraGrey rounded-xl flex items-center flex-row shadow-4 relative">
        <div class="w-44 overflow-hidden rounded-xl">
            <!-- Use imgSrc to dynamically bind the image src -->
            <img class="w-full rounded-xl object-cover" src="@/assets/images/shoes.png" alt="icon">
        </div>
        <div class="ms-1 sm:ms-3">
            <p class="text-xs xsm:text-base sm-text-xl font-bold text-black-2 dark:text-white">Tenis Adidas Grand</p>
            <p class="text-xs xsm:text-base sm-text-xl font-bold text-black-2 dark:text-white">Court TD Blanco</p>
            <p class="text-lg font-bold" >Tall: {{ latestSelect[0].talla }}</p>
            <p class="text-lg font-bold" >Stock: {{ latestSelect[0].stock }}</p>
        </div>
        <div class="px-4 absolute top-4 right-0">
            <img src="@/assets/images/bars.png" class="h-4 sm:h-6 color-red" />
        </div>
    </div>
</template>
