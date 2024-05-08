

<script setup lang="ts">
import { ref, watch } from 'vue';
let inputValue = ref("");
let result = ref("");

function checkScore () {
    if(Number(inputValue.value) < 50) {
        return result.value = "F";
    }else {
        result.value = "A";
    }
}

function checkScoreWithWatch()  {
    watch(inputValue, (newSearch, _) => {
        console.log({newSearch});
        if(Number(newSearch) < 50) {
        return result.value = "F";
    }else {
        result.value = "A";
    }
    });
}
</script>

<template>
    <form @submit.prevent>
        <input type="text" name="" id="" v-model="inputValue" @keyup.enter="checkScoreWithWatch">
        <p> Result = {{ result }}</p>
    </form>
</template>