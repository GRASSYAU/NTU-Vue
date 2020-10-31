<template>
  <div>
    <nav :class="['navigation-bar', { active: isActive }]">
      <nuxt-link class="brand" to="/">Travel Blog</nuxt-link>
      <button @click="toggleActive" class="menu-btn">
        <span class="menu-btn-bar"></span>
      </button>
      <div class="nav-list">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/article/create">Create Article</nuxt-link>
        <a>Sign In</a>
        <a>Register</a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  watch: {
    $route() {
      //切換頁面時
      this.isActive = false;
    },
  },
  mounted(){
    window
  }
};
</script>

<style>
.nav-list .nuxt-link-exact-active {
  color: red;
  pointer-events: none;
  /* cursor: pointer; */
}
</style>