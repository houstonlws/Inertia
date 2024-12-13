<template>
  <div class="ragister">
    <h2>Create An Account</h2>
    <div class="register-menu">
      <div class="register-menu-title">
        <p>How would you like to sign up</p>
      </div>
      <div class="register-menu-item">
        <google-button :message="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GoogleButton from '../components/misc/google.button.vue';

export default {
  name: 'RegisterPage',
  components: {
    GoogleButton,
  },
};
</script>
