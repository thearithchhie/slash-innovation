<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import PostItem from "./PostItem/PostItem.vue"

let listPost: Ref<{id: number; title: string}[]> = ref([]);
let isLoading = ref(false);
const BASE_URL: string = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts () {
  try {
    isLoading.value = true;
    let posts = await fetch(BASE_URL);
    if(posts.status == 200) {
      listPost.value = await posts.json();
    }
  } catch(error) {
    console.log("Error api fetching" , error);
    isLoading.value = true;
  } finally {
    isLoading.value = false;
  } 
}

onMounted(async ()  => {
  await fetchPosts();
  console.log(listPost.value);
});

const getPostId = (id: number) => {
  console.log(id);
};


</script>

<template>
    <PostItem :datas="listPost"  @get-post-id="getPostId" />
</template>