<template>
  <div class="layout">
    <response-component />
    <sidebar-molecule @clickOutside="clickedOutside" :visible="sidebarVisible">
      <list-atom>
        <selection-list-molecule :obj="exercisesList" />
      </list-atom>
    </sidebar-molecule>
    <navbar-molecule
      @clickLogo="toggleSidebar"
      :showMenuIcon="authStore.authorized"
      :menuItems="[{ name: 'Logout', action: authStore.logout }]"
    />
    <main class="layout-body">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import ListAtom from '@atoms/list.atom.vue';
import NavbarMolecule from '@molecules/navbar.molecule.vue';
import ResponseComponent from '@molecules/response.molecule.vue';
import SelectionListMolecule from '@molecules/selection-list.molecule.vue';
import SidebarMolecule from '@molecules/sidebar.molecule.vue';
import { ref } from 'vue';
import exercisesList from '../data/exercises.list';
import { AuthStore } from '../stores/auth.store';

const authStore = AuthStore();

const sidebarVisible = ref<boolean>(false);

const toggleSidebar = () => (sidebarVisible.value = !sidebarVisible.value);

const clickedOutside = () => (sidebarVisible.value = false);
</script>

<style lang="sass" scoped></style>
