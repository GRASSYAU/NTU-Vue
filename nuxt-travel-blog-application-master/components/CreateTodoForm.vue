<template>
  <div>
    <form @submit.prevent="createTodo">
      <input
        v-model="todoText"
        type="text"
        placeholder="請輸入待辦內容"
        required
      />

      <select v-model="todoCategory" required>
        <option value="" disabled>請選擇類別</option>
        <option value="財務">財務</option>
        <option value="健康">健康</option>
        <option value="學習">學習</option>
      </select>
      <button>新增</button>
    </form>
    <ul v-html="formErrorText"></ul>
  </div>
</template>
<script>
export default {
  name: "CreateTodoForm",
  computed: {
    formErrorText() {
      //預設錯誤訊息是空字串
      let errorText = "";
      //如果 todoText沒填，加入一段錯誤訊息
      if (!this.todoText) {
        errorText += "<li>內容必填</li>";
      }
      if (!this.todoCategory) {
        errorText += "<li>內容要寫</li>";
      }
      //函數的結尾回傳錯誤訊息 return一定要寫
      return errorText;
    },
  },
  data() {
    return {
      todoText: "",
      todoCategory: "",
    };
  },
  methods: {
    createTodo() {
      console.log("[新增待辦表單送出了]");
      // 描述一份待辦事項的資料(內容, 分類, 建立時間)
      const todo = {
        text: this.todoText,
        category: this.todoCategory,
        createdAt: new Date().getTime(),
      };
      console.log("[新待辦]", todo);
      //使用$emit通知上層元件一個客製化事件
      //this.$emit("事件名稱",要傳給上層的資料)
      this.$emit("onFormSubmit",todo)
    },
  },
};
</script>