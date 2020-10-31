<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Create Article Page</h1>
      </div>
    </header>
    <section class="py-5">
      <div class="container">
        <!-- 新增文章表單 -->
        <form>
          <InputGroup label="主標題" :defaultValue="title" @onChange="(value)=> (title = value)"/>
          <InputGroup label="城市"  @onChange="(value)=> (city=value)"/>
          <TagInputGroup />
        </form>
        <!-- 新增文章表單 end -->
        <p>標題: {{ title }}</p>
        <p>城市: {{ city }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CreateArticlePage",
  data(){
    return{
      title:"title 1",
      city:"",
    };
  },
  methods:{
    updateTitle(text){
      this.title = text;
    }
  }
};
</script>
