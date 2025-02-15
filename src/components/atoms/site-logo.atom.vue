<template>
  <img :src="logoSrc" alt="logo" class="logo" :height="`${height}px`" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { variant, height } = defineProps<{
  variant?: 'icon' | 'text';
  height?: { type: number; default: 20 };
}>();

const logoSrc = computed(() => {
  switch (variant) {
    case 'icon':
      return 'src/assets/images/inertia-logo.png';
    case 'text':
      return 'src/assets/images/inertia-text.png';
    default:
      return 'src/assets/images/logo-and-text.png';
  }
});
</script>
<style lang="sass" scoped>
.logo
    max-height: 25px
</style>
