<template>
  <!-- is string or number -->
  <template v-if="typeof obj === 'string' || typeof obj === 'number'">
    <list-item-atom @click="selectObject(obj)" selectable>
      {{ obj }}
    </list-item-atom>
  </template>

  <!-- is array -->
  <template v-else-if="Array.isArray(obj)" v-for="item of obj">
    <list-item-atom
      v-if="typeof item === 'string' || typeof obj === 'number'"
      @click="selectObject(item)"
      selectable
    >
      {{ item }}
    </list-item-atom>
    <selection-list-molecule v-else :obj="item" @select-object="selectObject" />
  </template>

  <!-- is object -->
  <template v-else v-for="item of Object.entries(obj)">
    <list-group-atom :title="item[0]" :dropdown="true">
      <selection-list-molecule :obj="item[1]" @select-object="selectObject" />
    </list-group-atom>
  </template>
</template>

<script setup lang="ts">
import ListGroupAtom from '@atoms/list-group.atom.vue';
import ListItemAtom from '@atoms/list-item.atom.vue';
import SelectionListMolecule from '@molecules/selection-list.molecule.vue';
const { obj } = defineProps<{
  obj: Record<string, any> | any[] | string | number;
}>();
const emit = defineEmits(['selectObject']);
const selectObject = (item: any) => {
  emit('selectObject', item);
};
</script>
