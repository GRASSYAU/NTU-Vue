<template>
  <div class="card mb-3">
    <div
      class="card-img-top"
      :style="{ backgroundImage: `url(${article.previewImage})` }"
    ></div>
    <div class="card-body">
      <h4 class="card-title">{{ article.title }}</h4>
      <p class="card-text">{{ article.city }}</p>
      <div>
        <nuxt-link :to="`/article/${article.id}`" class="btn btn-primary">
          Details
        </nuxt-link>
        <nuxt-link v-if="isAdmin" :to="`/article/${article.id}/edit`" class="btn btn-warning">
          Edit
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ArticleCard",
  props: ["article"],
  computed: {
    ...mapGetters("authStore", ["isAdmin"]),
  },
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 100px;
  background-size: cover;
}
</style>