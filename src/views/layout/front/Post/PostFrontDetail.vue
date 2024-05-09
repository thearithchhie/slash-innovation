<template>
<div>
    <h2>Post details</h2>
    <ul>
        <ol>Id= {{ postRef.id }}</ol>
        <ol>Title= {{ postRef.title }}</ol>
        <ol>Body= {{ postRef.body }}</ol>
        <ol>UserId= {{ postRef.userId }}</ol>
    </ul>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {useRoute} from 'vue-router';
import { usePostStore } from '@/stores/usePostStore';
const route = useRoute();
const postStore = usePostStore();
let postRef = ref({
    id: 0,
    title: '',
    body: '',
    userId: 0
});

onMounted(async () => {
    if(route.params.id) {
        await postStore.findPost(Number(route.params.id));
        const post = postStore.getPost;
        postRef.value.id = post.id;
        postRef.value.title = post.title;
        postRef.value.body = post.body;
        postRef.value.userId = post.userId;
    }
})
</script>