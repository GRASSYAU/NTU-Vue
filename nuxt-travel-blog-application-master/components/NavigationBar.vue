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
        <nuxt-link v-if="isAdmin" to="/article/create"
          >Create Article</nuxt-link
        >
        <!-- 登入後 -->
        <a v-if="isLogin">
          <img :v-if="user.photoURL" :src="user.photoURL" alt="" />
          <img :v-if="user.photoURL" src="假圖.png" alt="" />
          {{ user.email }}
        </a>
        <a v-if="isLogin" @click="logout">Sign Out</a>
        <!-- 登出時 -->
        <a v-if="!isLogin" @click="showLogin = true">Sign In</a>
        <a v-if="!isLogin">Register</a>
      </div>
    </nav>
    <!-- 登入視窗 -->
    <Modal v-if="showLogin" @close="showLogin = false">
      <h3 class="text-center">Sign in</h3>
      <form @submit.prevent="login">
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
        <button
          @click="googleLogin"
          type="button"
          class="btn btn-primary btn-block nt-3"
        >
          Sign in with Google
        </button>
        <p>{{ loginEmail }}</p>
        <p>{{ loginPassword }}</p>
      </form>
    </Modal>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "NavigationBar",
  computed: {
    ...mapGetters("authStore", ["isLogin", "isAdmin", "user"]),
  },
  data() {
    return {
      isActive: false,
      loginEmail: "",
      loginPassword: "",
      showLogin: false,
    };
  },
  methods: {
    ...mapMutations("authStore", ["finalizeLogin", "finalizeLogout"]),
    googleLogin() {
      const vm = this;
      console.log(vm.$googleProvider);
      const provider = vm.$googleProvider;
      vm.$auth
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          console.log("[user]", user);
          vm.showLogin = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      const vm = this;
      //清除Firebase的登入紀錄
      vm.$auth.signOut();
      //清除store的登入狀態
      vm.finalizeLogout();
    },
    login() {
      const vm = this;
      //取得email,password
      const email = vm.loginEmail;
      const password = vm.loginPassword;
      vm.$auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          // console.log("[res]",res);
          const userInfo = {
            email: res.user.email,
            uid: res.user.uid,
          };
          console.log("[userInfo]", userInfo);
          vm.finalizeLogin(userInfo);
          vm.showLogin = false;
        })
        .catch((err) => alert(err.message));
    },
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
.photo{
  height: 20px;
  border-radius: 50%;
}
</style>