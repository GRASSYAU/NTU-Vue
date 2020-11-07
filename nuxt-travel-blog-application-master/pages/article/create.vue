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
        <form @submit.prevent="onSubmit">
          <InputGroup
            label="主標題"
            :defaultValue="title"
            @onChange="(value) => (title = value)"
          />
          <InputGroup
            label="城市"
            :defaultValue="city"
            @onChange="(value) => (city = value)"
          />
          <TagInputGroup
            :defaultValue="tagList"
            @onChange="(val) => (tagList = val)"
          />
          <div class="form-group">
            <p>縮圖</p>
            <input @change="fileChange" type="file" accept=".jpg,.png,.svg" />
            <img v-if="previewImage" :src="previewImage" alt="" class="w-100" />
          </div>
          <div class="form-group">
            <GoogleMapInput />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              creata Article
            </button>
          </div>
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
  data() {
    return {
      title: "title 1",
      city: "",
      tagList: ["日本"],
      authorInfo: "",
      previewImage: "",
    };
  },
  methods: {
    onSubmit() {
      const vm = this;
      // 取得一篇文章所需資料
      const article = {
        title: vm.title,
        city: vm.city,
        tagList: vm.tagList,
        authorInfo: vm.authorInfo,
        previewImage: vm.previewImage,
        creaedAt: new Date().getTime(),
      };
      console.log("[article]",article)
      // 將article存到firestore(vm.$db)
      vm.$db
        .collection("articleList")
        .add(article)
        .then((res) => {
          console.log("[新增成功]",res);
          //引導回首頁('/')
          vm.$router.push("/");
        })
        .catch((err) =>{
          console.log("[err]",err);
          alert("新增文章失敗");
        })
    },
    updateTitle(text) {
      this.title = text;
    },
    fileChange(event) {
      // console.log("[收到縮圖了]")
      //取得檔案資訊
      const file = event.target.files[0];
      // console.log("檔案資訊",file)
      const fullName = file.name;
      // console.log("[全名]",fullName);
      //
      //產生firebase sotrage的路徑對應
      const baseRef = this.$storage.ref();
      // images/檔名
      const path = baseRef.child(`images/${fullName}`);
      //將檔案傳至指定的path
      path
        .put(file)
        .then(async (snapshot) => {
          console.log("傳輸成功", snapshot);
          ///等待getDownloadURL回傳下載網址
          const imgURL = await snapshot.ref.getDownloadURL();
          console.log("圖片網址", imgURL);
          this.previewImage = imgURL;
        })
        .catch((err) => console.log("傳輸失敗", err));
    },
  },
  mounted() {
    console.log("vue元件", this);
    // console.log("個人資料",this.$author);
    this.authorInfo = this.$getAuthorInfo("哈囉");
  },
};
</script>
