<template>
  <div>
    <span>welcome vue3</span>
    <button @click="increment">加一</button>
    <div>{{ count }}</div>
  </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0
    });

    const increment = () => {
      state.count++;
    };

    return {
      count: state.count,
      increment
    };
  }
}
</script>
