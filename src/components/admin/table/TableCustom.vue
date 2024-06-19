
<template>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="(header, index) in props.tableHeaders" :key="index" scope="col" class="px-6 py-3">
                    {{ header }}
                </th>
            </tr>
        </thead>
       <tbody>
        <template v-for="(data, index) in paginate()" :key="index">
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <template v-for="(header, headerIndex) in tableHeaders" :key="headerIndex">
            <td class="px-6 py-4">{{ data[header] }}</td>
          </template>
        </tr>
      </template>
       </tbody>
    </table>
     <!-- pagination -->
    <nav aria-label="Page navigation example">
        <hr class="bg-gray-200" />
  <ul class="inline-flex -space-x-px text-sm mt-4 pb-4 float-right mr-3">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <!-- flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white -->
    <li v-for="(pageNumber, index) in checkTotalPage()" :key="index">
      <a href="#" @click="onPageChange(index)" 
      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
      >{{ pageNumber }}</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>

  </ul>
</nav>
    <!-- End pagination -->
</div>

</template>

<script setup lang="ts">
import {ref, watch, computed } from 'vue';
let props = defineProps<{
  tableHeaders: string[],
  datas:  any[],
  totalPages: number;
  itemsPerPage: number,
  currentPage: number
}>();

let currentPage = ref(props.currentPage);
console.log(currentPage);

watch(
() => props.currentPage,
() => {
    currentPage.value = props.currentPage;
}
);

let {itemsPerPage, datas, totalPages} = props;
function paginate() {
    totalPages = datas.length;
    if (currentPage.value >= totalPages) {
          currentPage.value = totalPages - 1;
    }
    const index = currentPage.value * itemsPerPage;
    return datas.slice(index, index + itemsPerPage);
}

function checkTotalPage() {
  
    if(itemsPerPage >= totalPages) {
        return totalPages = 1;
    } else {
      const publishedBooksMessage = computed(() => {
          return Math.ceil(totalPages / itemsPerPage);
      });
    return publishedBooksMessage.value;
    //  return  Math.ceil(totalPages / itemsPerPage);
    }
}

function onPageChange(page: number) {
    currentPage.value = page;
}

</script>

<style scoped>
.current-page {
  color: red;
}
</style>