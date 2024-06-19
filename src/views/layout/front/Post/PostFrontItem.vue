
<template>

    <!-- <p>{{ isLoading ? "<p>Loading..</p>" : "" }}</p> -->
        <di>
          <ul v-for="(post, index) in datas" :key="index">
        <li class="" @click="getPostId(post.id)">{{ post.title }}</li>
        </ul>
        </di>
 
 
</template>

<script setup lang="ts">

 defineProps<{datas: {id: number; title: string;}[]}>();
const emit = defineEmits({
    getPostId: (id: number) => id,
});
const getPostId = (id: number) => {
  emit('getPostId', id);
};
</script>

