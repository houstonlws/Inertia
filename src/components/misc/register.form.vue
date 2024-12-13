<template>
      <form class="inertia-form" @submit.prevent="onSubmit">
        <input
          class="inertia-form-input"
          name="displayName"
          type="text"
          v-model="displayName"
          label="Name"
          :error-messages="errors.displayName"
          placeholder="Name"
        ></input>
        <input
        class="inertia-form-input"
          name="email"
          type="email"
          v-model="email"
          label="Email Address"
          placeholder="Email Address"
          :error-messages="errors.email"
        ></input>
        <input
        class="inertia-form-input"

          name="password"
          type="password"
          v-model="password"
          label="Password"
          placeholder="Password"
          :error-messages="errors.password"
        >
        </input>
        <input
        class="inertia-form-input"
            placeholder="Confirm Password"
          name="password2"
          label="Confirm Password"
          type="password"
          v-model="password2"
          :error-messages="errors.password2"
        ></input>
        <button class="submit-button" type="submit">Submit</button>
      </form>
</template>

<script lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object().shape({
  displayName: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Must enter valid email'
    )
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  password2: yup
    .string()
    .required('Must confirm password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default {
  name: 'RegisterForm',
  data() {
    return {
      displayName: useField('displayName').value,
      email: useField('email').value,
      password: useField('password').value,
      password2: useField('password2').value,
      handleSubmit: useForm({ validationSchema: schema }).handleSubmit,
      errors: useForm({ validationSchema: schema }).errors,
    };
  },
  methods: {
    onSubmit() {
      this.handleSubmit(async (values) => {});
    },
  },
};
</script>

<style lang="sass" scoped>
.submit-button
    @include button
</style>
