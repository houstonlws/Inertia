<template>
  <div :class="{ response: true, visible: message }">
    <div class="response-message">
      {{ message }}
    </div>
  </div>
</template>

<script setup laug="ts">
import responseStore from '@/stores/response.store';
import { computed } from 'vue';
const sotre = responseStore();
const message = computed(() => sotre.message.value);
</script>

<style lang="sass" scoped>
.response
    position: fixed
    top: -100px
    left: 50%
    transform: translateX(-50%)
    padding: 10px 20px
    border-radius: 5px
    background: red
    color: white
    z-index: 9999
    transition: top 0.5s ease-out
    &-message
        font-size: 1.2rem
    &.visible
        top: 100px
</style>
