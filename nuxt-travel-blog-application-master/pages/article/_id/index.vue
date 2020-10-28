<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Show details for Article Page - {{ $route.params.id }}</h1>
        <nuxt-link
          class="btn btn-warning"
          :to="`/article/${$route.params.id}/edit`"
        >
          Edit Article
        </nuxt-link>
      </div>
    </header>
    <section class="py-5">
      <div class="container"></div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ShowDetailsArticlePage",
};
</script>