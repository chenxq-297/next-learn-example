<template>
  <div>
    <span>welcome vue3</span>
    <button @click="increment">加一</button>
    <div>{{ count }}</div>
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
