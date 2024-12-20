<template>
  <form-molecule :fields="registerFormFields" :on-submit-handler="register" />
</template>

<script lang="ts">
import { registerFormFields } from '../../data/register.fields';
import { AuthStore } from '../../stores/auth';
import FormInput from '../atoms/form-field.atom.vue';
import FormMolecule from './form.molecule.vue';

export default {
  name: 'RegisterForm',
  components: {
    FormInput,
    FormMolecule,
  },
  setup() {
    const register = async (values: Record<string, any>) => {
      await AuthStore().registerWithEmail(values.email, values.password);
    };
    return { registerFormFields, register };
  },
  methods: {
    async register(values: Record<string, any>) {
      await AuthStore().registerWithEmail(values.email, values.password);
    },
  },
};
</script>

<style lang="sass" scoped>
.submit-button
    @include button
</style>
