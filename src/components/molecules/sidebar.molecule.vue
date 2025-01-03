<template>
  <aside ref="sidebar" class="sidebar"></aside>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef, watch } from 'vue';

const props = defineProps<{
  visible?: boolean;
  position?: 'left' | 'right';
  items?: any[];
}>();

const sidebar = useTemplateRef<HTMLDivElement | null>('sidebar');
watch(
  () => props.visible,
  (newValue) => {
    if (sidebar.value !== null) {
      if (newValue) {
        sidebar.value.style.width = '250px';
      } else {
        sidebar.value.style.width = '0';
      }
    }
  }
);

const emit = defineEmits<{ (e: 'clickOutside'): void }>();
onClickOutside(sidebar, () => emit('clickOutside'));
</script>

<style lang="sass" scoped>
.sidebar
    position: fixed
    top: 0
    height: 100%
    width: 0
    background-color: #fff
    transition: ease-in-out 0.3s
    box-shadow: 0 8px 8px 0 #00000020
</style>
