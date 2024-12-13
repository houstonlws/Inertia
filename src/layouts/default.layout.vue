<template>
  <div class="layout">
    <response-component />
    <navbar-component />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import NavbarComponent from '../components/shared/navbar.component.vue';
import ResponseComponent from '../components/shared/response.component.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavbarComponent,
    ResponseComponent,
  },
};
</script>

<style scoped lang="sass">
.layout
  width: 100%
  height: 100%
  & main
    width: 100%
    height: 100%
    @include flex-start
</style>
