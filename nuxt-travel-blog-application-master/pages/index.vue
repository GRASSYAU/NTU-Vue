<template>
  <div>
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
        <div class="row">
          <div v-for="article in articleList" :key="article.id" class="col-mb-4">
            <ArticleCard :article="article"/>
          </div>
        </div>
        <!-- ArticleList end -->
      </div>
    </section>
    <!-- ArticleSection -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  //layout :"layout2",
  // layout: "版面名稱" 預設 "default""
  data() {
    return {
      articleList:[]
    }
  },
  mounted() {
    const vm = this;
    //取得所有articleList內的文件
    vm.$db
    .collection("articleList")
    .get()
    .then(docs =>{
      const articleList = [];
      // 取出所有文件
      docs.forEach(doc => {
        const article = doc.data();
        article.id=doc.id;
        articleList.push(article);
      });
      //更新vm的文章列表
      vm.articleList = articleList;
    })
    .catch(err =>{
      console.log("[取得資料失敗]",err)
    });
  },
};
</script>

<style>
</style>
