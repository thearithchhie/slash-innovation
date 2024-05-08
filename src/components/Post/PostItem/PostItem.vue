<script setup lang="ts">
import {} from 'vue';
import { PostItemType } from './PostItemType';

// defineProps and defineEmits it`s automatic call no need to export
defineProps<PostItemType>();
const emit = defineEmits({
    getPostId: (id: number) => id,
});


const getPostId = (id: number) => {
  emit('getPostId', id);
};

</script>
<template>
   <p>{{ isLoading ? "<p>Loading..</p>" : "" }}</p>
        <ul v-for="(post, index) in datas">
        <li :key="index" @click="getPostId(post.id)">{{ post.title }}</li>
        </ul>
    

</template>