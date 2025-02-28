<template>
  <div class="list-item" :class="{ 'list-item-selectable': selectable }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectable?: boolean;
}>();
</script>

<style lang="sass" scoped>
.list-item
    align-items: center
    display: grid
    flex: none
    grid-template-areas: "prepend content append"
    grid-template-columns: max-content 1fr auto
    outline: none
    max-width: 100%
    padding: 4px 16px
    padding-top: 4px
    padding-bottom: 4px
    position: relative
    text-decoration: none
    &-selectable
        cursor: pointer
        &:hover
          background-color: #f0f0f0
          transition: all 0.3s ease-in-out
</style>
