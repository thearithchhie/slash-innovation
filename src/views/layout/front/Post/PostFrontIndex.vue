



<template>
    <h3>List all post</h3>
    <PostFrontItem :datas="posts" @getPostId="getPostId" />
</template>

<script setup lang="ts">
import {usePostStore} from '@/stores/usePostStore';
import {  onMounted, ref, type Ref } from 'vue';
import PostFrontItem from '@/views/layout/front/Post/PostFrontItem.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const postStore = usePostStore();
const posts: Ref<{id: number; title: string}[]> = ref([]);

async function fetchAllPost() {
    await postStore.findPosts();
    posts.value = postStore.getPosts;
}
onMounted(async () => {
    console.log("onMounted");
    await fetchAllPost();
});


const getPostId = async (id: number) => {
    console.log(id);
  router.push({name: 'post', params: {id}});
};


</script>