<template>
  <aside
    ref="sidebar"
    class="sidebar"
    :class="{ 'sidebar-open': visible, 'sidebar-closed': !visible }"
  >
    <i @click="emit('clickOutside')" class="fas fa-times close-button"></i>
    <div class="sidebar-content">
      <slot></slot>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';

defineProps<{
  visible?: boolean;
  hideCloseButton?: boolean;
  position?: 'left' | 'right';
  items?: any[];
}>();

const sidebar = useTemplateRef<HTMLDivElement | null>('sidebar');

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
      display: none
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
    &-content
      padding: 1rem
      overflow-y: auto
      overflow-x: hidden
      height: 100%
      color: #000
      &::-webkit-scrollbar
        width: 0.5rem
        background-color: #f5f5f5
      &::-webkit-scrollbar-thumb
        background-color: #888
        border-radius: 10px
      &::-webkit-scrollbar-thumb:hover
        background-color: #555

.close-button
  position: absolute
  top: 1rem
  right: 1rem
  cursor: pointer
  font-size: 1.5rem
  color: #000
</style>
