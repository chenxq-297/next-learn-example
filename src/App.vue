<template>
  <div>
    <span>welcome vue3</span>
    <button @click="increment">加一</button>
    <div>{{ count }}</div>
    <h3>---route and pinia ---</h3>
    <router-link to="/about">about</router-link>
    <router-link to="/home">home</router-link>
    <router-view />
    
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value=count.value+1;
    };

    return {
      count,
      increment
    };
  }
}
</script>
