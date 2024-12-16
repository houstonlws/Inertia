<template>
  <div class="layout">
    <response-component />
    <navbar-component />
    <main class="layout-body">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import ResponseComponent from '@/components/molecules/response.molecule.vue';
import NavbarComponent from '@/components/organisms/navbar.organism.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavbarComponent,
    ResponseComponent,
  },
};
</script>

<style lang="sass">
.layout
  width: 100%
  height: 100%
  &-body,
  &-body article
    width: 100%
    height: 100%
</style>
