<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0);
const person = reactive({
  name: "I`m Mac",
  age: 0,
  isAge: true
});

// change isAge value
person.isAge = false;

// Dynamically Binding Multiple Attributes
const addIdAndClassAttributes = {
  id: "id-my-button",
  class: "btn-button"
};

// 
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

//computed 
/**
 * computed : automatic update value when  reactive change value 
 * get: By default  'computed' is get(), if you want update value in computed using 'set()'  
 */
const publishedBooksMessage = computed(() => {
  return author.books.length ? "Yes": "No";
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++" v-bind="addIdAndClassAttributes">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>My person: {{ person.name }}, and my is boolean {{ person.isAge }} </p>
    <p>publishedBooksMessage = {{ publishedBooksMessage }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.btn-button {
  background-color: green;
  color: #ffff;
}
</style>
