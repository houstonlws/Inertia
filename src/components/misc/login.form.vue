<template>
      <form class="inertia-form" @submit.prevent="onSubmit">
        <input
          class="inertia-form-input"
          name="email"
          type="email"
          v-model="email"
          label="Email Address"
          :error-messages="errors.email"
        ></input>
        <input
          class="inertia-form-input"
          name="password"
          type="password"
          v-model="password"
          label="Password"
          :error-messages="errors.password"
        >
        </input>
        <button class="button" type="submit" block>Submit</button>
      </form>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import responseStore from '../../stores/response.store';

const router = useRouter();
const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Must enter valid email'
    )
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const { handleSubmit, errors } = useForm({ validationSchema: schema });

const { value: email } = useField('email');
const { value: password } = useField('password');

const store = responseStore()

const onSubmit = handleSubmit(async (values) => {
});
</script>
