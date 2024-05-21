<script setup lang="ts">
import { ref, onMounted } from "vue";

const items = ref([
    {
        fecha: '16-21-2023',
        folio: '099',
        Precediance: 'Real Center',
        Empersa: 'Family Sport',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Precediance: 'Real Center',
        Empersa: 'Family Sport',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Precediance: 'Real Center',
        Empersa: 'Family Sport',
    },
    {
        fecha: '16-21-2023',
        folio: '099',
        Precediance: 'Real Center',
        Empersa: 'Family Sport',
    }
]);
const isLoading = ref(false);

const refershTable = () => {
    isLoading.value = true;

    console.log('Loading started:', isLoading.value); // Should log true immediately

    // Simulate a loading process with setTimeout
    setTimeout(() => {
        // Simulate the end of loading after 1.5 seconds
        isLoading.value = false;
        console.log('Loading ended:', isLoading.value); // Should log false after 1.5 seconds
    }, 1000); // Adjust this timing as needed
};
</script>
<template>
    <div
        class="sm:my-6 mx-2 md:mx-6 mt-2 py-2 px-2 sm:px-3 w-auto bg-white dark:bg-extraGrey rounded-xl shadow-4 relative overflow-x-auto flex flex-col justify-between">
        <div class="flex justify-between items-center">
            <p class="font-extrabold text-lg 2xl:text-2xl">TrasPasos pendientes</p>
            <div class="flex items-center">
                <div @click="refershTable" class="w-4 h-4">
                    <svg class="w-full h-full" fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 489.645 489.645" xml:space="preserve" stroke="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3 c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5 c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8 c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2 C414.856,432.511,548.256,314.811,460.656,132.911z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="ps-2">
                    <img src="@/assets/images/bars.png" class="h-4 sm:h-6 color-red" />
                </div>
            </div>
        </div>

        <div class=" w-full relative overflow-x-auto  overflow-y-auto max-h-40 mx-auto dark:dark-mode table-white">
            <div v-if="isLoading" role="status" class="w-fit mx-auto mb-[17%] mt-[20%]">
                <svg aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-darkGrey"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only"></span>
            </div>
            <table v-if="!isLoading" class="text-sm text-left w-[100%]   text-black-2 dark:text-white dark:dark-mode">
                <thead class="text-xs uppercase">
                    <tr>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Fecha
                        </th>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Folio
                        </th>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Precediance
                        </th>
                        <th scope="col" class="px-4 py-3 font-extrabold">
                            Empersa
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index" class=" border-b-2 text-xs border-[#7d8298]  ">
                        <th scope="row" class="px-1 py-2 font-bold ">
                            {{ item.fecha }}
                        </th>
                        <td class="px-3 py-2 text-right font-bold">
                            {{ item.folio }}
                        </td>
                        <td class="px-3 py-2 font-bold text-center">
                            {{ item.Precediance }}
                        </td>
                        <td class="px-1 py-2 font-bold text-center">
                            {{ item.Empersa }}
                        </td>
                        <td class=" px-1 py-2 ">
                            <div class=" w-5">
                                <img class="w-100" src="@/assets/images/eye.png" alt="icon">
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
        <nav class="flex items-center flex-col flex-warp md:flex-row justify-between bg-white pt-4 dark:bg-extraGrey"
            aria-label="Table navigation">
            <span
                class="text-xs sm:text-[8px]   font-extrabold text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block  md:hidden xl:block  ">Se
                muestran 20 de 100 resultados</span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm text-black dark:text-white">
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-6 leading-tight text-gray-500 border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-[#E6E6E7] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/doubleLeft.png" /></a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/left.png" /></a>
                </li>
                <li class="">
                    <a href="#"
                        class="flex items-center justify-center h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-none mr-1 dark:bg-extradarkGrey bg-[#E6E6E7] border-none">1</a>
                </li>
                <li class="">
                    <a href="#" aria-current="page"
                        class="flex items-center justify-center h-6 w-4 mr-1 text-[10px] dark:bg-darkGrey border-none bg-extraGrey text-white">2</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:border-none mr-1 dark:bg-extradarkGrey bg-[#E6E6E7] border-none">3</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-4 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-1 dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="object-contain" src="@/assets/images/right.png" /></a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center p-1 h-6 w-6 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-none dark:bg-extradarkGrey bg-[#E6E6E7] border-none">
                        <img class="w-[80%] object-contain" src="@/assets/images/doubleRight.png" /></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
::-webkit-scrollbar {
    width: 10px;
    height: 8px;
}


::-webkit-scrollbar-track {
    background: #ece9e9;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: #c0bcbc;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #969292;
}

.dark-mode::-webkit-scrollbar-thumb {
    background-color: #a82a2a;
}
</style>