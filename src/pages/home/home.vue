<template>
  <div class="home">
    <h1>Welcome to Home</h1>
    <p>This is the home page of your Vue3 application.</p>
    <p>state: {{ state }}</p>
    <button @click="someDateStore.someAction()">someAction</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import uesSomeDate from '../../store/SomeData.js';

const someDateStore = uesSomeDate();
const { state } = storeToRefs(someDateStore);


</script>

