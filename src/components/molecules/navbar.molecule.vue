<template>
  <nav class="navbar">
    <div class="navbar-item" @click="emit('click-logo')">
      <i v-if="props.showMenuIcon" class="navbar-icon fas fa-bars"></i>
      <site-logo-atom variant="text" v-if="!props.hideLogo" />
    </div>
    <menu-molecule v-if="props.menuItems" :items="props.menuItems" />
  </nav>
</template>

<script setup lang="ts">
import SiteLogoAtom from '@atoms/site-logo.atom.vue';
import MenuMolecule from '@molecules/menu.molecule.vue';
import { MenuItem } from '../../types';

const props = defineProps<{
  showMenuIcon?: boolean;
  hideLogo?: boolean;
  showSearch?: boolean;
  showProfile?: boolean;
  menuItems?: MenuItem[];
}>();

const emit = defineEmits<{ (e: 'click-logo'): void }>();
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 2rem
  background-color: #f8f9fa
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  &-item
    cursor: pointer
    color: #000
    display: flex
    align-items: center
    gap: 1rem
  &-button
    @include button(#fff, #000)
</style>
