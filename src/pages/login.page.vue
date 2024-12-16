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
      <login-form></login-form>
    </div>
    <div class="login-item">
      <h3>Don’t have an account yet?</h3>
      <span>
        <router-link tag="a" to="/register">Sign Up for Free </router-link> and
        get started today!
      </span>
      <a href="#">Continue as Guest </a>
    </div>
  </article>
</template>

<script lang="ts">
import GoogleButton from '@/components/atoms/google.button.vue';
import TextDivider from '@/components/atoms/text.divider.vue';
import LoginForm from '@/components/molecules/login.form.vue';
import DefaultLayout from '@/layouts/default.layout.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    DefaultLayout,
    GoogleButton,
    TextDivider,
  },
};
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
