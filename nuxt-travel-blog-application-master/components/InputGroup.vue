<template>
  <div class="form-group">
    <label for="">{{ label }}</label>
    <input
      @input="onInputChanged"
      v-model="inputText"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  // props: ["label", "defaultValue"],
  props: {
    label: {},
    defaultValue: {},
    type: {
      default: "text",
    },
    placeholder: {
      default: "預設提示",
    },
    required: {
      default: false,
    },
  },
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    onInputChanged(event) {
      // 來自 @input
      // console.log("[輸入事件]", event.target.value);
      // 取得輸入內的值
      // const text = event.target.value;
      const text = this.inputText;
      // 通知母元件輸入框的值改變了
      this.$emit("onChange", text);
    },
  },
  mounted() {
    // console.log(this.defaultValue);
    this.inputText = this.defaultValue;
  },
};
</script>