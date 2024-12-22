<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { AppStore } from './stores/app.store';

const appStore = AppStore();

const layout = computed(() => appStore.layout);
</script>

<style scoped></style>
