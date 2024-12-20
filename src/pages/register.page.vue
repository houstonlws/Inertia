<template>
  <article class="register">
    <div class="register-item">
      <h2>Create An Account</h2>
      <p>How would you like to sign up?</p>
    </div>
    <div class="register-item methods">
      <google-button :message="2" />
      <text-divider :text="'or'" />
      <form-molecule
        :fields="registerFormFields"
        :on-submit-handler="register"
      />
    </div>
  </article>
</template>

<script lang="ts">
import GoogleButton from '@atoms/google-button.atom.vue';
import TextDivider from '@atoms/text-divider.atom.vue';
import FormMolecule from '@molecules/form.molecule.vue';
import { registerFormFields } from '../data/register.fields';
import { AuthStore } from '../stores/auth';

export default {
  name: 'RegisterPage',
  components: {
    GoogleButton,
    TextDivider,
    FormMolecule,
  },
  setup() {
    const register = async (values: Record<string, any>) => {
      await AuthStore().registerWithEmail(values.email, values.password);
    };
    return { registerFormFields, register };
  },
};
</script>

<style lang="sass" scoped>
.register
  @include flex-start
  text-align: center
  gap: 1rem
  &-item
    @include flex-start
    width: 100%
    &.methods
      gap: .5rem
</style>
