<template>
  <div class="layout">
    <response-component />
    <sidebar-molecule
      @clickOutside="clickedOutside"
      :visible="sidebarVisible"
    />
    <navbar-molecule
      @clickLogo="clickedLogo"
      :showMenuIcon="authStore.authorized"
      :showLogo="true"
      :menuItems="[{ name: 'Logout', action: authStore.logout }]"
    />
    <main class="layout-body">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavbarMolecule from '@molecules/navbar.molecule.vue';
import ResponseComponent from '@molecules/response.molecule.vue';
import SidebarMolecule from '@molecules/sidebar.molecule.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthStore } from '../stores/auth';

const authStore = AuthStore();
const router = useRouter();
const sidebarVisible = ref<boolean>(false);
const clickedLogo = () => {
  if (!authStore.authorized) router.push('/');
  else sidebarVisible.value = !sidebarVisible.value;
};
const clickedOutside = () => (sidebarVisible.value = false);
</script>

<style lang="sass">
.layout
    @include full-screen
    &-body,
    &-body article
        @include full-screen
</style>
