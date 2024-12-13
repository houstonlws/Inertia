<template>
  <div class="landing-header">
    <h1 class="">Stay in Motion with Inertia</h1>
    <p class="">
      Your workout. Your routine. Your time. Inertia is here to help you craft a
      fitness plan that works with your life—not against it.
    </p>
  </div>
  <div class="landing-body">
    <div class="">
      <h2 class="">Set Goals. Build Habits. Adapt Easily</h2>
      <p class="">
        Because consistency isn’t just about showing up—it’s about making it
        work for you.
      </p>
    </div>
    <div class="">
      <h3 class="">Ready to make your move?</h3>
      <p class="">
        Join Inertia today and start building a fitness routine that fits your
        lifestyle.
      </p>
      <router-link to="/register" class="landing-button">
        Join Now
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import DefaultLayout from '@/layouts/default.layout.vue';

export default {
  name: 'LandingPage',
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="sass" scoped>
.landing
  &-header
    @include flex-center
    min-height: 50%
    width: 100%
    background: $primary-color
  &-body
    @include flex-start
    text-align: center
  &-button
    @include button
    background: $primary-color
    font-weight: bold
    text-decoration: none
    color: white
</style>
