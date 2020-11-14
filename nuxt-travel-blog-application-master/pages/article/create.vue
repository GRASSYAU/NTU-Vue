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
            @onChange="(val) => (title = val)"
          />
          <InputGroup
            label="城市"
            :defaultValue="city"
            @onChange="(val) => (city = val)"
          />
          <TagInputGroup
            :defaultValue="tagList"
            @onChange="(val) => (tagList = val)"
          />
          <div class="form-group">
            <p>縮圖</p>
            <input @change="fileChange" type="file" accept=".jpg,.png" />
            <img v-if="previewImage" :src="previewImage" alt="" class="w-100" />
          </div>
          <div class="form-group">
            <GoogleMapInput
              :value="location"
              @locationChanged="(val) => (location = val)"
            />
            <p>{{ location }}</p>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Create Article
            </button>
          </div>
        </form>
        <!-- 新增文章表單 end -->
        <!-- <p>標題: {{ title }}</p>
        <p>城市: {{ city }}</p>
        <p>標籤列表: {{ tagList }}</p> -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CreateArticlePage",
  data() {
    return {
      title: "預設標題",
      city: "台北",
      tagList: ["台灣", "台北"],
      previewImage: "https://picsum.photos/id/192/1600/800",
      authorInfo: "",
      location: {
        lat: 25,
        lng: 122,
      },
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
        previewImage: vm.previewImage,
        location: vm.location,
        createdAt: new Date().getTime(),
      };
      console.log("[article]", article);
      // 將article存到firestore(vm.$db)
      // vm.$db => firebase.firestore()
      vm.$db
        .collection("articleList")
        .add(article)
        .then((res) => {
          console.log("[新增成功]", res);
          // 引導回首頁('/')
          vm.$router.push("/");
        })
        .catch((err) => {
          console.log("[err]", err);
          alert("新增文章失敗，請再試一次。");
        });
    },
    updateTitle(text) {
      this.title = text;
    },
    fileChange(event) {
      // console.log("[收到縮圖了]", event);
      // 取得檔案資訊
      const file = event.target.files[0];
      // console.log("[檔案資訊]", file);
      const fullName = file.name;
      // console.log("[全名]", fullName);
      // a = file.name.split('.') => ['檔名', 'jpg']
      // fullName = a[0] + new Date.getTime() + '.' + a[1]
      // 產生firebase storage的路徑對應
      const baseRef = this.$storage.ref();
      // images/檔名
      const path = baseRef.child(`images/${fullName}`);
      // 將檔案傳至指定的path
      path
        .put(file)
        .then(async (snapshot) => {
          console.log("傳輸成功", snapshot);
          // 等待getDownloadURL回傳下載網址
          const imgURL = await snapshot.ref.getDownloadURL();
          console.log("圖片網址", imgURL);
          this.previewImage = imgURL;
        })
        .catch((err) => console.log("傳輸失敗", err));
    },
  },
  mounted() {
    console.log("[Vue元件]", this);
    // console.log("[作者資訊]", this.$author);
    this.authorInfo = this.$getAuthorInfo("Hello");
  },
};
</script>