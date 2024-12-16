<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <router-link to="/"
        ><img
          src="@/assets/images/text-logo.svg"
          alt="logo"
          class="navbar-logo"
      /></router-link>
    </div>

    <div class="navbar-menu">
      <router-link to="/login" class="navbar-button">Login</router-link>
      <router-link to="/register" class="navbar-button">Register</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 2rem
  background-color: #f8f9fa
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  &-menu
    display: flex
  &-logo
    height: 30px
  &-button
    @include button(#fff, #000)
</style>
