<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { AppStore } from './stores/app.store';

const appStore = AppStore();

const layout = computed(() => appStore.layout);

onMounted(async () => {
  await appStore.fetchLayout();
});
</script>

<style scoped></style>
