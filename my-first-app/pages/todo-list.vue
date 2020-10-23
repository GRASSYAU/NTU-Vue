<template>
  <div>
    <div class="container">
      <h1>TODO List</h1>
      <!-- 設計新增待辦事項UI -->
      <div class="create-todo-ui">
        <!-- 當表單送出時(不會重整)執行createTodo -->
        <form @submit.prevent="createTodo">
          <input
            v-model="todoText"
            type="text"
            placeholder="請輸入待辦內容"
            required>

          <select v-model="todoCategory" required>
            <option value="" disabled>請選擇類別</option>
            <option value="財務">財務</option>
            <option value="健康">健康</option>
            <option value="學習">學習</option>
          </select>
          <button >新增</button>
        </form>
        <!-- 表單錯誤提示文字 -->
          <!-- <div v-if="!Boolean(todoText)">* 內容必填</div> -->
          <!-- <div >{{ formErrorText }}</div> -->
          <ul v-html="formErrorText"></ul>
      </div>
      <!-- TODO: 待辦事項列表 -->
      <div class="todo-list-ui">
        <!-- 每一個待辦事項的模板 -->
        <!-- <div v-for="todo in todoList" :key="todo.createdAt" class="todo-item">
          <div class="todo-category">{{ todo.category }}</div>
          <div class="todo-text">{{ todo.text }}</div>
        </div> -->
        <TodoItem 
          v-for="todo in todoList"
          :key="todo.createdAt"
          :todo="todo"
        />
        <!-- <TodoItem :todo="{ category: '學習' , text: 'Todo1', }"/> -->
        <!-- <TodoItem category="學習" text="Todo2" /> -->
        <!-- 每一個待辦事項的模板 end -->
      </div>
    </div>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem"
export default {
  name: "todoListPage",
  components:{
    TodoItem,
  },
  computed: {
    formErrorText(){
      //預設錯誤訊息是空字串
      let errorText= "";
      //如果 todoText沒填，加入一段錯誤訊息
      if (!this.todoText){
        errorText += "<li>內容必填</li>"
      }
      if (!this.todoCategory){
        errorText += "<li>內容要寫</li>"
      }
      //函數的結尾回傳錯誤訊息 return一定要寫
      return errorText
    }
  },
  data() {
    return {
      todoText: "",
      todoCategory: "",
      // 待辦清單
      todoList: [],
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
      // 把todo新增到todoList內
      // [].push('資料1') => ['資料1']
      this.todoList.push(todo);
    },
  },
};
</script>