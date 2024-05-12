<template>
  <div class="about">
    <h1>Welcome to about</h1>
    <p>This is the about page of your Vue3 application.</p>
    <p>count: {{ state }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import uesSomeDate from '../../store/SomeData.js';
const someDateStore = uesSomeDate();
const { state } = storeToRefs(someDateStore);
</script>