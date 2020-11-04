<template>
  <div>
    <p>標籤</p>
    <label for="tagInput">
      <span v-for="(tag, index) in tagList" :key="tag">
        #{{ tag }} 
        <button @click="deleteTag(index)" type="button" class="delete-btn">
          &times;
        </button>
      </span>
      <input v-model="newTag" @change="addTag" id="tagInput" type="text" />
    </label>
    {{ tagList }}
  </div>
</template>
<script>
export default {
  neme: "TagInputGroup",
  props: ["defaultValue"],
  data() {
    return {
      newTag: "",
      tagList: [],
    };
  },
  methods: {
    addTag() {
      console.log("56565656565");
      const newTag = this.newTag; 
      //將newTag新增到tagList裡面
      if(this.tagList.indexOf(newTag) < 0){
        this.tagList.push(this.newTag); 
      }
      this.newTag = "";
      this.$emit("onChange",this.tagList);
    },
    deleteTag(index){
      //從 tagList 移除一筆索引為
      this.tagList.splice(index,1);
      this.$emit("onChange",this.tagList);
    }
  },
  mounted() {
    //如果 defaultValue 有被傳遞進來
    if(this.defaultValue){
      this.tagList = this.defaultValue;
    }
  },
};
</script>
<style scoped>
.delete-btn{
  background: transparent;
  border: none;
  color: #fff;
  max-width: 10px;
  font-size: 20px;
  position: relative;
  right: 6px;
}

label {
  border: 1px solid grey;
  background: #fff;
  display: flex;
  padding: 8px;
  border-radius: 5px;
  overflow: hidden;
}
input {
  /* background: red; */
  border: none;
  flex: 1;
}
input:focus {
  outline: none;
}
span {
  background: grey;
  color: #fff;
  display: inline-block;
  padding: 0px 5px;
  margin-right: 5px;
}
</style>