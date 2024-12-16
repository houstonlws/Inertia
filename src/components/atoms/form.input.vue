<template>
  <label v-if="label">{{ label }}</label>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    class="inertia-form-input"
  />
  <span v-if="errorMessages" class="error-message">{{ errorMessages }}</span>
</template>

<script lang="ts">
export default {
  name: 'FormInput',
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    modelValue: { type: String, required: true },
    errorMessages: { type: String, default: '' },
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value: any) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.error-message
  color: red
</style>
