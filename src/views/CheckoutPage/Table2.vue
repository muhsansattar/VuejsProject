<script setup lang="ts">
</script>
<template>
    <div
        class="sm:my-6 mx-2 md:ms-6 mt-2 py-2 px-2 sm:px-3 w-auto bg-white dark:bg-extraGrey rounded-xl shadow-4 relative overflow-x-auto flex flex-col items-center justify-between">
        <p class="font-extrabold text-lg xsm:text-2xl">TrasPasos pendientes</p>

        <div class="relative overflow-x-auto  overflow-y-auto max-h-40 w-auto mx-auto dark:dark-mode table-white">
            <table class="text-sm text-left  text-black-2 dark:text-white dark:dark-mode">
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
                    <tr class=" border-b-2 text-xs border-[#7d8298]  ">
                        <th scope="row" class="px-1 py-2 font-bold ">
                            16-21-2023
                        </th>
                        <td class="px-3 py-2 text-right font-bold">
                            099
                        </td>
                        <td class="px-3 py-2 font-bold">
                            Real Center
                        </td>
                        <td class="px-1 py-2 font-bold">
                            Family sport
                        </td>
                        <td class=" px-1 py-2 ">
                            <div class=" w-4">
                                <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                            </div>
                        </td>
                    </tr>
                    <tr class=" border-b-2 text-xs border-[#7d8298]  ">
                        <th scope="row" class="px-1 py-2 font-bold ">
                            16-21-2023
                        </th>
                        <td class="px-3 py-2 text-right font-bold">
                            099
                        </td>
                        <td class="px-3 py-2 font-bold">
                            Real Center
                        </td>
                        <td class="px-1 py-2 font-bold">
                            Family sport
                        </td>
                        <td class=" px-1 py-2 ">
                            <div class=" w-4">
                                <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                            </div>
                        </td>
                    </tr>
                    <tr class=" border-b-2 text-xs border-[#7d8298]  ">
                        <th scope="row" class="px-1 py-2 font-bold ">
                            16-21-2023
                        </th>
                        <td class="px-3 py-2 text-right font-bold">
                            099
                        </td>
                        <td class="px-3 py-2 font-bold">
                            Real Center
                        </td>
                        <td class="px-1 py-2 font-bold">
                            Family sport
                        </td>
                        <td class=" px-1 py-2 ">
                            <div class=" w-4">
                                <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                            </div>
                        </td>
                    </tr>
                    <tr class=" border-b-2 text-xs border-[#7d8298]  ">
                        <th scope="row" class="px-1 py-2 font-bold ">
                            16-21-2023
                        </th>
                        <td class="px-3 py-2 text-right font-bold">
                            099
                        </td>
                        <td class="px-3 py-2 font-bold">
                            Real Center
                        </td>
                        <td class="px-1 py-2 font-bold">
                            Family sport
                        </td>
                        <td class=" px-1 py-2 ">
                            <div class=" w-4">
                                <img class="w-100" src="@/assets/images/Trash.png" alt="icon">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

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