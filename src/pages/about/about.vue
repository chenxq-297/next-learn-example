<template>
  <div class="about">
    <h1>Welcome to about</h1>
    <p>This is the about page of your Vue3 application.</p>
    <p>count: {{ state }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../../stores/counter';

const { state } = storeToRefs(useCounterStore());
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 40px;
}
</style>
