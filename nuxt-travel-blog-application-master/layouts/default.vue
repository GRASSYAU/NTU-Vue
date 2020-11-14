<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "DefaultLayout",
  watch: {
    $route() {},
  },
  methods: {
    ...mapMutations("authStore", ["finalizeLogin","setAdmin"]),
  },
  mounted() {
    const vm = this;
    vm.$auth.onAuthStateChanged((resUser) => {
      // console.log("[onAuthStateChanged]", resUser);
      //如果有登入
      if (resUser) {
        const email = resUser.email;
        const photoURL = resUser.photoURL
        const userInfo = {
          email,
          photoURL,
          uid: resUser.uid,
        };
        //讓vuex有登入紀錄
        vm.finalizeLogin(userInfo);
        vm.$db
          .doc(`adminList/${email}`)
          .get()
          .then((doc) => {
            //如果這個文件存在
            if (doc.exists) {
              vm.setAdmin();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  },
};
</script>
<style>
</style>
