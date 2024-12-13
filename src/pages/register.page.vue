<template>
  <div class="register">
    <h2>Create An Account</h2>
    <div class="register-menu">
      <div class="register-menu-title">
        <p>How would you like to sign up</p>
      </div>
      <div class="register-menu-item">
        <register-form />
        <google-button :message="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GoogleButton from '@/components/misc/google.button.vue';
import RegisterForm from '@/components/misc/register.form.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegisterForm,
    GoogleButton,
  },
};
</script>

<style lang="sass" scoped>
.register
  @include flex-start
  text-align: center
</style>
