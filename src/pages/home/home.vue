<template>
  <div class="home">
    <h1>Welcome to Home</h1>
    <p>This is the home page of your Vue3 application.</p>
    <p>state: {{ state }}</p>
    <button @click="counterStore.someAction()">someAction</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../../stores/counter';

const counterStore = useCounterStore();
const { state } = storeToRefs();


</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 40px;
}
</style>
