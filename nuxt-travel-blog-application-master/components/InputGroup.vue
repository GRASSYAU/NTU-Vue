<template>
  <div class="form-group">
    <label for="">輸入提示</label>
    <input type="text" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  data() {
    return {
      inputText: "",
    };
  },
};
</script>