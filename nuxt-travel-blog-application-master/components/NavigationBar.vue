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
    <!-- 登入視窗 -->
    <Modal v-if="showLogin">
      <h3 class="text-center">Sign in</h3>
      <form>
        <InputGroup
          label="Email"
          type="email"
          :required="true"
          placeholder="輸入Email"
          @onChange="(val) => (loginEmail = val)"
        />
        <InputGroup
          label="Password"
          type="password"
          :required="true"
          @onChange="(val) => (loginPassword = val)"
        />
        <button class="btn btn-primary btn-block">Login</button>
        <p>{{ loginEmail }}</p>
        <p>{{ loginPassword }}</p>
      </form>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isActive: false,
      loginEmail: "",
      loginPassword: "",
      showLogin: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  watch: {
    $route() {
      // 切換頁面時
      this.isActive = false;
    },
  },
  mounted() {
    // 當視窗縮放時
    window.addEventListener("resize", () => {
      this.isActive = false;
    });
  },
};
</script>
<style>
.nav-list .nuxt-link-exact-active {
  color: tomato;
  pointer-events: none;
}
</style>