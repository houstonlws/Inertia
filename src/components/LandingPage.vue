<script setup lang="ts"></script>

<template>
  <div class="landing-page">
    <div class="landing-page-header">
      <h1>Stay in Motion with Inertia</h1>
      <p>
        Your workout. Your routine. Your time. Inertia is here to help you craft
        a fitness plan that works with your life—not against it.
      </p>
    </div>
    <div class="landing-page-body">
      <h3>Set Goals. Build Habits. Adapt Easily</h3>
      <p>
        Because consistency isn’t just about showing up—it’s about making it
        work for you.
      </p>
      <h3>Ready to make your move?</h3>
      <p>
        Join Inertia today and start building a fitness routine that fits your
        lifestyle.
      </p>

      <button>Join Now</button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.landing-page
  @include flex-start
  width: 100%
  height: 100%

  &-header
    @include flex-center
    min-height: 50%
    width: 100%
    background: $primary-color
</style>
