<template>
  <article class="register">
    <div class="register-item">
      <h2>Create An Account</h2>
      <p>How would you like to sign up?</p>
    </div>
    <div class="register-item methods">
      <google-button :message="2" />
      <text-divider :text="'or'" />
      <register-form />
    </div>
  </article>
</template>

<script lang="ts">
import GoogleButton from '@/components/atoms/google.button.vue';
import TextDivider from '@/components/atoms/text.divider.vue';
import RegisterForm from '@/components/molecules/register.form.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegisterForm,
    GoogleButton,
    TextDivider,
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
