

<script setup lang="ts">
import TableCustom from "@/components/admin/table/TableCustom.vue";
import { ref, type Ref } from 'vue';
const tableHeaders: Ref<string[]> = ref([
    "id",
    "name",
    "email",
    "phone",
    "address",
]);
const data: Ref<any[]> = ref([]);
let users = ref([
    {
        id: 1,
        name: "Mac",
        email: "mac@gmail.com",
        phone: "09633333",
        address: "Mac address"
    },
    {
        id: 2,
        name: "Dell",
        email: "dell@gmail.com",
        phone: "0973494",
        address: "Mac address"
    },
    {
        id: 3,
        name: "MSI",
        email: "dell@gmail.com",
        phone: "0973494",
        address: "Msi address"
    },
]);
data.value = users.value.map((user) => user);

</script>

<template>
    <TableCustom 
    :tableHeaders
    :datas=data
    :totalPages= users.length
    :itemsPerPage= 2
    :currentPage= 0
    />
</template>

