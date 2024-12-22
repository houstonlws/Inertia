<template>
  <div
    :class="{
      response: true,
      visible: message.value,
      [message.type]: message.type,
    }"
  >
    <div class="response-message">
      {{ message.value }}
    </div>
  </div>
</template>

<script setup laug="ts">
import { AppStore } from '@/stores/app.store';
import { computed } from 'vue';
const appStore = AppStore();
const message = computed(() => appStore.message);
</script>

<style lang="sass" scoped>
.response
    position: fixed
    top: -100px
    left: 50%
    transform: translateX(-50%)
    border-radius: 5px
    background: $info
    color: white
    z-index: 9999
    transition: top 0.5s ease-in
    opacity: 0
    &-message
        font-size: 1.2rem
    &.visible
        top: 100px
        padding: 10px 20px
        opacity: 1
    &.error
       background: $error
    &.success
        background: $success
    &.warning
        background: $warning
</style>
