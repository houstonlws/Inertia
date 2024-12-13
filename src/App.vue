<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/default.layout.vue';
import { computed } from 'vue';
import { RouterView } from 'vue-router';

const layout = computed(() => {
  return DefaultLayout;
});
</script>

<style scoped></style>
