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
  watch:{
    $route(){
      console.log("[切換頁面了]",this.$route)
    }
  }
};
</script>
<style>
</style>
