<template>
  <label v-if="label" :for="name">{{ label }}</label>

  <input
    class="form-input"
    :id="name"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
  />

  <span v-if="hasErrors" class="error-message">
    <template v-for="(message, index) in errorMessagesArray" :key="index">
      {{ message }}
      <br v-if="index !== errorMessagesArray.length - 1" />
    </template>
  </span>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'FormInput',
  props: {
    label: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    type: { type: String, default: 'text' },
    modelValue: { type: String, default: '' },
    errorMessages: { type: [String, Array], default: undefined },
    name: { type: String, required: true },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value: string) => emit('update:modelValue', value),
    });

    const errorMessagesArray = computed(() =>
      Array.isArray(props.errorMessages)
        ? props.errorMessages
        : props.errorMessages
        ? [props.errorMessages]
        : []
    );

    const hasErrors = computed(() => errorMessagesArray.value.length > 0);

    return {
      inputValue,
      errorMessagesArray,
      hasErrors,
    };
  },
};
</script>

<style lang="sass" scoped>
.form-input
  display: block
  padding: 5px 10px
  font-size: 1rem
  color: #495057
  background-color: #fff
  background-clip: padding-box
  border: 1px solid #ced4da
  border-radius: 5px
  line-height: 1.5
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
  &:focus
    outline: 0
.error-message
  color: red
</style>
