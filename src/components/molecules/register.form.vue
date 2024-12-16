<template>
  <form class="inertia-form" @submit.prevent="onSubmit">
    <FormInput
      label="Name"
      placeholder="Enter your name"
      v-model="displayName"
      :error-messages="errors.displayName"
    />
    <FormInput
      label="Email"
      type="email"
      placeholder="Enter your email"
      v-model="email"
      :error-messages="errors.email"
    />
    <FormInput
      label="Password"
      type="password"
      placeholder="Enter your password"
      v-model="password"
      :error-messages="errors.password"
    />
    <FormInput
      label="Confirm Password"
      type="password"
      placeholder="Confirm your password"
      v-model="password2"
      :error-messages="errors.password2"
    />
    <button class="submit-button" type="submit">Register</button>
  </form>
</template>

<script lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import FormInput from '../atoms/form.input.vue';

export default {
  name: 'RegisterForm',
  components: {
    FormInput,
  },
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object().shape({
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
      }),
    });

    const { value: displayName } = useField<string>('displayName');
    const { value: email } = useField<string>('email');
    const { value: password } = useField<string>('password');
    const { value: password2 } = useField<string>('password2');

    const onSubmit = handleSubmit(async (values) => {});

    return { displayName, email, password, password2, onSubmit, errors };
  },
};
</script>

<style lang="sass" scoped>
.submit-button
    @include button
</style>
