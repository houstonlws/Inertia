<template>
  <form class="form" @submit.prevent="onSubmit">
    <FormField
      v-for="field of fields"
      :key="field.name"
      :name="field.name"
      :label="field.label"
      :type="field.type"
      :placeholder="field.placeholder"
      v-model="values[field.name]"
      :error-messages="errors[field.name]"
    />
    <button class="submit-button" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import FormField from '@atoms/form-field.atom.vue';
import { useField, useForm } from 'vee-validate';
import { reactive } from 'vue';
import * as yup from 'yup';
import { Schema } from 'yup';

const props = defineProps<{
  fields: {
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    rules?: Schema<any>;
  }[];
  onSubmitHandler: (values: Record<string, any>) => Promise<void>;
}>();

const { errors, handleSubmit } = useForm({
  validationSchema: yup.object().shape(
    props.fields.reduce((acc, field) => {
      acc[field.name] = field.rules || yup.mixed();
      return acc;
    }, {} as Record<string, Schema<any>>)
  ),
});

const values = reactive(
  props.fields.reduce((acc, field) => {
    const { value } = useField(field.name);
    acc[field.name] = value;
    return acc;
  }, {} as Record<string, any>)
);

const onSubmit = handleSubmit(async (values) => {
  await props.onSubmitHandler(values);
});
</script>

<style scoped lang="sass">
.form
    display: flex
    flex-direction: column
    align-content: center
    gap: 5px
.submit-button
    @include button
</style>
