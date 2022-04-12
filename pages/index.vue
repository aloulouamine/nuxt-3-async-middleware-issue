<template>
  <div>Home</div>
</template>
<script setup lang="ts">
const { $hello } = useNuxtApp();

console.log('Hello from index,', $hello());
</script>
