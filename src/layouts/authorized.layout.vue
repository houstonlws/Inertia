<template>
  <div class="layout">
    <response-component />
    <navbar-component />
    <main class="layout-body">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import ResponseComponent from '@molecules/response.molecule.vue';
import NavbarComponent from '@organisms/navbar.organism.vue';
</script>

<style lang="sass">
.layout
    @include full-screen
    &-body,
    &-body article
        @include full-screen
</style>
