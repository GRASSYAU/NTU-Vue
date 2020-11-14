<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  watch: {
    $route() {},
  },
};
</script>
<style>
</style>
