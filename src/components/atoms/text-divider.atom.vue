<template>
  <span class="divider"
    ><hr />
    {{ text }}
    <hr
  /></span>
</template>

<script lang="ts">
export default {
  name: 'TextDivider',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.divider
  display: inline-flex
  gap: 5px
  hr
    width: 100px
</style>
