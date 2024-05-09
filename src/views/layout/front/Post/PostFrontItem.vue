
<template>
  <div>
    <!-- <p>{{ isLoading ? "<p>Loading..</p>" : "" }}</p> -->
       <div>
        <ul v-for="(post, index) in datas" :key="index">
        <li  @click="getPostId(post.id)">{{ post.title }}</li>
        </ul>
       </div>
  </div>
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

