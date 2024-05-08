
<script setup lang="ts">
import {onMounted, onUnmounted, Ref, ref} from 'vue';
import {SearchUserType} from './SearchType'; 

// When user search on input
let textInput = ref("");

onMounted(() => {
    // if(textInput.value) {
    //     textInput.value.focus();
    // }
});

onUnmounted(() => {
    console.log("Search onUnmounted");
});

    let users: Ref<SearchUserType[]> = ref([
        {
            id: 1,
            username: "mac",
            age: 12,
        },
        {
            id: 1,
            username: "xox",
            age: 200
        }
    ]);


let filteredUsers: Ref<SearchUserType[]> = ref([...users.value]);
function search() {
  return textInput.value
    ? users.value.filter((user) => {
            return textInput.value.toString().toLocaleLowerCase()
            .split(" ")
            .every((e) => user.username.toLocaleLowerCase().includes(e));
    })
    : users;
}

function updateFilteredUsers() {
    filteredUsers.value = search() as SearchUserType[];
}
</script>

<template>
    <form @submit.prevent>
        <input 
            type="text"
            v-model="textInput"
            placeholder="search all user"
            @keyup="updateFilteredUsers"
            />
        <div v-if="filteredUsers.length">
            <ul v-for="user in filteredUsers">
            <li :key="user.id">{{ user.username }}</li>
        </ul>
    </div>
    <p v-else>Data not found 😢</p>
    </form>
</template>
<style scoped>
</style>