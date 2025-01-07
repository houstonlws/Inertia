<template>
  <div class="layout">
    <response-component />
    <navbar-molecule :menu-items="menuItems" @click-logo="router.push('/')" />
    <main class="layout-body">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import ResponseComponent from '@molecules/response.molecule.vue';
import { useRouter } from 'vue-router';
import navbarMolecule from '../components/molecules/navbar.molecule.vue';

const router = useRouter();

const menuItems = [
  { name: 'Login', to: '/login' },
  { name: 'Register', to: '/register' },
];
</script>

<style lang="sass" scoped></style>
