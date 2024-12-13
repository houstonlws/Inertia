<template>
        <div class="login">
        <h2>Welcome Back to Inertia</h2>
        <p>Ready to keep the momentum going? Log in and take the next step in your fitness journey.</p>
          <login-form></login-form>
          <google-button :message="3" />
          <hr></hr>
            <h3>Don’t have an account yet?</h3>
            <span>
                <router-link tag="a" to="/register">Sign Up for Free </router-link> and get started today!
            </span>
        </div>
</template>

<script lang="ts">
import GoogleButton from '@/components/misc/google.button.vue';
import LoginForm from '@/components/misc/login.form.vue';
import DefaultLayout from '@/layouts/default.layout.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    DefaultLayout,
    GoogleButton
  },
};
</script>

<style lang="sass" scoped>
.login
  @include flex-start
  text-align: center
</style>
