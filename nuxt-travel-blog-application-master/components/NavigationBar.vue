<template>
  <div>
    <nav class="navigation-bar">
      <nuxt-link class="brand" to="/">Travel Blog</nuxt-link>
      <button @click="toggleActive" class="menu-btn">
        <span class="menu-btn-bar"></span>
      </button>
      <div class="nav-list">
        <nuxt-link  to="/">Home</nuxt-link>
        <nuxt-link  to="/about">About</nuxt-link>
        <a>Sign In</a>
        <a>Register</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
  .nav-list  .nuxt-link-exact-active{
    color: red;
    cursor: pointer;
  }
</style>