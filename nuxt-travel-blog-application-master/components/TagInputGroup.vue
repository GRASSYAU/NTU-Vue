<template>
  <div>
    <p>標籤</p>
    <label for="tagInput">
      <span v-for="(tag, idx) in tagList" :key="tag">
        #{{ tag }}
        <button @click="deleteTag(idx)" type="button" class="delete-btn">
          &times;
        </button>
      </span>
      <input @change="addTag" v-model="newTag" id="tagInput" type="text" />
    </label>
    <!-- {{ tagList }} -->
  </div>
</template>
<script>
export default {
  name: "TagInputGroup",
  props: ["defaultValue"],
  data() {
    return {
      newTag: "",
      tagList: [],
    };
  },
  methods: {
    addTag() {
      console.log("[addTag]");
      const newTag = this.newTag;
      // 將newTag新增到tagList內
      if (this.tagList.indexOf(newTag) < 0) {
        this.tagList.push(newTag);
      }
      this.newTag = "";
      this.$emit("onChange", this.tagList);
    },
    deleteTag(idx) {
      // 從 tagList 移除1筆索引為 idx 的資料
      this.tagList.splice(idx, 1);
      this.$emit("onChange", this.tagList);
    },
  },
  mounted() {
    // 如果 defaultValue 有被傳遞進來
    if (this.defaultValue) {
      this.tagList = this.defaultValue;
    }
  },
};
</script>
<style scoped>
.delete-btn {
  background: transparent;
  border: none;
  color: white;
  width: 10px;
  font-size: 20px;
  position: relative;
  right: 6px;
}

label {
  border: 1px solid black;
  background: white;
  display: flex;
  padding: 8px;
  border-radius: 5px;
  overflow: hidden;
}
input {
  border: none;
  flex: 1;
}
input:focus {
  outline: none;
}
span {
  background: rgb(148, 148, 148);
  color: white;
  display: inline-block;
  padding: 0px 5px;
  margin-right: 5px;
  border-radius: 3px;
}
</style>