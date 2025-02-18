<template>
  <div class="list-group">
    <div class="list-group-header" @click="open">
      {{ title }}
    </div>
    <list-item-atom
      class="list-group-items"
      :class="{ 'list-group-open': isOpen }"
    >
      <slot></slot>
    </list-item-atom>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
  dropdown?: boolean;
}>();

const isOpen = ref<boolean>(false);

const open = () => (isOpen.value = !isOpen.value);
</script>

<style lang="sass" scoped>
.list-group
    &-header
        @include button(#fff, #000)
        cursor: pointer
        font-weight: bold
        padding: 0.5rem 1rem
        border-bottom: 1px solid #ccc
    &-items
        display: none
    &-open
        display: block
</style>
