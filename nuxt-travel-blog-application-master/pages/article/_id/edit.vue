<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Edit Article Page - {{ $route.params.id }}</h1>
      </div>
    </header>
    <section class="py-5">
      <div class="container">
        <!-- 編輯文章表單 -->
        <form></form>
        <!-- 編輯文章表單 end -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "EditArticlePage",
};
</script>