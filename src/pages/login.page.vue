<template>
  <article class="login">
    <div class="login-item">
      <h2>Welcome Back to Inertia</h2>
      <p>
        Ready to keep the momentum going? Log in and take the next step in your
        fitness journey.
      </p>
    </div>
    <div class="login-item methods">
      <google-button :message="3" />
      <text-divider :text="'or'" />
      <form-molecule
        :fields="loginFormFields"
        :on-submit-handler="loginWithEmail"
      />
    </div>
    <div class="login-item">
      <h3>Don’t have an account yet?</h3>
      <span>
        <router-link tag="a" to="/register">Sign Up for Free </router-link> and
        get started today!
      </span>
      <a @click="loginAsGuest" href="#">Continue as Guest </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import GoogleButton from '@atoms/google-button.atom.vue';
import TextDivider from '@atoms/text-divider.atom.vue';
import FormMolecule from '@molecules/form.molecule.vue';
import { loginFormFields } from '../data/login.fields';
import { AuthStore } from '../stores/auth.store';

const authStore = AuthStore();
const loginAsGuest = async () => await authStore.loginAsGuest();

const loginWithEmail = async (values: Record<string, any>) =>
  await authStore.loginWithEmail(values.email, values.password);
</script>

<style lang="sass" scoped>
.login
  @include flex-start
  text-align: center
  gap: 1rem
  &-item
    @include flex-start
    &.methods
      gap: .5rem
</style>
