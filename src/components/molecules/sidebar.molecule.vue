<template>
  <aside ref="sidebar" class="sidebar">
    <i @click="emit('clickOutside')" class="fas fa-times close-button"></i>
  </aside>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef, watch } from 'vue';

const props = defineProps<{
  visible?: boolean;
  hideCloseButton?: boolean;
  position?: 'left' | 'right';
  items?: any[];
}>();

const sidebar = useTemplateRef<HTMLDivElement | null>('sidebar');
watch(
  () => props.visible,
  (newValue) => {
    if (sidebar.value !== null) {
      if (newValue) {
        sidebar.value.classList.remove('sidebar-closed');
        sidebar.value.classList.add('sidebar-open');
      } else {
        sidebar.value.classList.remove('sidebar-open');
        sidebar.value.classList.add('sidebar-closed');
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
    background-color: #fff
    transition: ease-in-out 0.3s
    box-shadow: 0 8px 8px 0 #00000020
    &-closed
      width: 0
      &::before
        content: ''
        position: absolute
        pointer-events: none
        transition: ease-in-out 0.3s
        top: 0
        left: 0
        opacity: 0
        width: 100vw
        height: 100vh
        background-color: #00000050
    &-open
      width: 250px
      &::before
        content: ''
        pointer-events: none
        opacity: 100
        position: absolute
        transition: ease-in-out 0.3s
        top: 0
        left: 250px
        width: 100vw
        height: 100vh
        background-color: #00000050

.close-button
  position: absolute
  top: 1rem
  right: 1rem
  cursor: pointer
  font-size: 1.5rem
  color: #000
</style>
