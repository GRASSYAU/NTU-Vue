<template>
  <div>
    <header
      class="jumbotron text-white"
      :style="{
        backgroundImage: `url(${previewImage})`,
        backgroundSize: 'cover',
      }"
    >
      <div class="container">
        <h1>{{ title }}</h1>
        <nuxt-link
          class="btn btn-warning"
          :to="`/article/${$route.params.id}/edit`"
        >
          Edit Article
        </nuxt-link>
      </div>
    </header>
    <section class="py-5">
      <div class="container">
        <h3>{{ city }}</h3>
        <h3>{{ location }}</h3>
        <GoogleMapInput :editable="false" v-if="location" :value="location" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ShowDetailsArticlePage",
  data() {
    return {
      title: "",
      city: "",
      previewImage: "",
      location: null,
    };
  },
  mounted() {
    const vm = this;
    const docId = vm.$route.params.id;
    console.log("[文件ID]", docId);
    // doc('集合/文件ID')
    vm.$db
      .doc(`articleList/${docId}`)
      .get()
      .then((doc) => {
        console.log("[doc]", doc.data());
        const article = doc.data();
        vm.city = article.city;
        vm.location = article.location;
        vm.title = article.title;
        vm.previewImage = article.previewImage;
      })
      .catch((err) => {
        console.log("[err]", err);
        alert("發生錯誤，請重試");
      });
  },
};
</script>