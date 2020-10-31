<template>
  <div>
    <label for="tagInput">
        <span v-for="tag in tagList" :key="tag">#{{ tag }}</span>
      <input v-model="newTag" @change="addTag" id="tagInput" type="text" />
    </label>
    {{ tagList }}
  </div>
</template>
<script>
export default {
  neme: "TagInputGroup",
  data() {
    return {
      newTag: "",
      tagList: [],
    };
  },
  methods:{
      addTag(){
          console.log("56565656565")
          //將newTag新增到tagList裡面
          this.tagList.push(this.newTag);
          this.newTag="";
      }
  }
};
</script>
<style scoped>
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
  flex:1;
}
input:focus{
    outline: none;
}
span{
    background: grey;
    color: #fff;
    display: inline-block;
    padding: 0px 5px;
    margin-right: 5px;
}
</style>