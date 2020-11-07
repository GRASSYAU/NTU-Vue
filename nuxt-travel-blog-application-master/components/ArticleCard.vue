<template>
  <div class="card">
    <!-- <img class="card-img-top" :src="article.previewImage" alt=""> -->
    <div
      class="card-img-top"
      :style="{ backgroundImage: `url(${article.previewImage})` }"
    ></div>
    <div class="card-body">
      <h4 class="card-title">{{ article.title }}</h4>
      <p class="card-text">{{ article.city }}</p>
      <div>
          <nuxt-link class="btn btn-primary" :to="`/article/${article.id}`">
          Details
          </nuxt-link>
          <nuxt-link :to="`/arrticle/${article.id}/edit`">
          Edit
          </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleCard",
  props: ["article"],
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 100px;
}
</style>>

</style>