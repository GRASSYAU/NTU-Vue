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
          <TagInputGroup 
            :defaultValue="tagList"
            @onChange="(val) => (tagList = val)"
          />
          <div>
            <p>縮圖</p>
            <input @change="fileChange" type="file" accept=".jpg,.png,.svg"/>
          </div>
          <img v-if="previewImage" :src="previewImage" alt="" class="w-100">
        </form>
        <!-- 新增文章表單 end -->
        <!-- <p>標題: {{ title }}</p>
        <p>城市: {{ city }}</p>
        <p>標籤列表: {{ tagList }}</p> -->
        <p>{{ authorInfo }}</p>
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
      tagList: ["日本"],
      authorInfo:"",
      previewImage:"",
    };
  },
  methods:{
    updateTitle(text){
      this.title = text;
    },
    fileChange(event){
      // console.log("[收到縮圖了]")
      //取得檔案資訊
      const file = event.target.files[0];
      console.log("[收到縮圖了]",file)
      const fullName = file.name;
      console.log("[全名]",fullName);
      //產生firebase sotrage的路徑對應
      const baseRef = this.$storage.ref();
      // images/檔名
      const path = baseRef.child(`images/${fullName}`);
      //將檔案傳至指定的path
      path
        .put(file)
        .then(async (snapshot)=> {
          console.log("傳輸成功",snapshot);
          ///等待getDownloadURL回傳下載網址
          const imgURL =await snapshot.ref.getDownloadURL();
          console.log("圖片網址",imgURL)
          this.previewImage = imgURL;
        })
        .catch((err)=> console.log("傳輸失敗",err))
    }
  },
  mounted() {
    console.log("vue元件",this)
    console.log("個人資料",this.$author);
    // this.authorInfo = this.$getAuthorInfo("哈囉")
  },
};
</script>
