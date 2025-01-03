<template>
  <div :class="{ 'menu-dropdown': dropdown, 'menu-align': align, menu: true }">
    <div v-for="item of props.items" :key="item.name" class="menu-item">
      <router-link v-if="item.to" :to="item.to" class="menu-link">
        {{ item.name }}
      </router-link>
      <a v-else-if="dropdown" class="menu-link" @click="item.action">
        {{ item.name }}
      </a>
      <a v-else class="menu-link" @click="item.action">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '../../types';

const props = defineProps<{
  items: MenuItem[];
  dropdown?: boolean;
  align?: 'left' | 'right';
  title?: string;
}>();
</script>
<style lang="sass" scoped>
.menu
  display: flex
  &-link
    @include button(#fff, #000)
</style>
