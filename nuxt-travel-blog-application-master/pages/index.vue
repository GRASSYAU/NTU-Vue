<template>
  <div>
    <NavigationBar />
    <!-- Header -->
    <header class="jumbotron">
      <div class="container">
        <h1>Welcome to Travel Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          placeat accusantium? Suscipit in at ducimus tenetur eveniet! Modi
          saepe, vel voluptates totam ullam tempore esse architecto, ab et error
          facilis!
        </p>
        <nuxt-link class="btn btn-primary" to="/about">More Info</nuxt-link>
      </div>
    </header>
    <!-- Header end -->
    <!-- ArticleSection -->
    <section class="py-5">
      <div class="container">
        <div class="section-title-group">
          <h2 class="section-title text-center">Article List</h2>
          <div class="section-title-bar bg-warning"></div>
        </div>
        <!-- ArticleList -->

        <!-- ArticleList end -->
      </div>
    </section>
    <!-- ArticleSection -->
    <!-- Footer -->
    <footer class="py-3">
      <div class="container text-center">
        <h5>
          <nuxt-link to="/">Nuxt Travel Blog</nuxt-link>
        </h5>
        <p class="mb-0">2020 &copy; All Rights Reserved</p>
      </div>
    </footer>
    <!-- Footer end -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
</style>
