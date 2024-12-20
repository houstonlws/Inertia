<template>
  <form-molecule :fields="formData" :on-submit-handler="loginWithEmail" />
</template>

<script lang="ts">
import { loginFormFields } from '../../data/form.data';
import { AuthStore } from '../../stores/auth';
import FormMolecule from './form.molecule.vue';

export default {
  name: 'LoginForm',
  components: {
    FormMolecule,
  },
  setup() {
    const formData = loginFormFields;
    return { formData };
  },
  methods: {
    async loginWithEmail(values: Record<string, any>) {
      console.log('Logging in with email and password');
      await AuthStore().loginWithEmail(values.email, values.password);
    },
  },
};
</script>

<style lang="sass" scoped>
.button
  @include button
</style>
