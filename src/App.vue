
<template>
  <!-- <HomeComponent v-if="path == '/' " /> -->
  <!-- RouterView: for display component by current route -->
  <RouterView  />
</template>
<script setup lang="ts">
import {computed } from 'vue';
import {RouterView, useRoute} from 'vue-router';
import HomeComponent from '@/components/Home/HomeComponent.vue';
// const route = useRoute();
// console.log(route.path)
// const path = computed(() => route.path);
</script>