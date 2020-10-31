<template>
  <div class="form-group">
    <label for="">{{ label ? label : "忘了寫" }}</label>
    <input
      @input="onInputChange"
      :value="defaultValue"
      type="text"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: ["label","defaultValue"],
  data() {
    return {
      // inputText: "",
    };
  },
  methods: {
    onInputChange(event) {
      //來自 @input
      console.log("[輸入事件]", event.target.value)
      //取得輸入內的值
      const text = event.target.value;
      //通知母元件輸入框值改變了
      this.$emit("onChange", text);
    },
  },
  mounted(){
    
  }
};
</script>