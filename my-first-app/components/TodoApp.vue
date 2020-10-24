<template>
  <div>
      <!-- 設計新增待辦事項UI -->
      <div class="create-todo-ui">
        <!-- 當表單送出時(不會重整)執行createTodo -->
        <CreateTodoForm @onFormSubmit="createTodo" />
        <!-- 表單錯誤提示文字 -->
      </div>
      <!-- TODO: 待辦事項列表 -->
      <TodoList>
        <!-- 每一個待辦事項的模板 -->
        <TodoItem
          v-for="(todo, index) in todoList"
          :key="todo.createdAt"
          :todo="todo"
          @onRemoveClick="removeItem(index)"
        />
      </TodoList>
      <!-- <TodoItem :todo="{ category: '學習' , text: 'Todo1', }"/> -->
      <!-- <TodoItem category="學習" text="Todo2" /> -->
      <!-- 每一個待辦事項的模板 end -->
    </div>
</template>
<script>
import TodoList from "@/components/TodoList"; //註冊元件
import TodoItem from "@/components/TodoItem";
import CreateTodoForm from "@/components/CreateTodoForm";
export default {
  name: "TodoApp",
  components: {
    TodoItem,
  },
  computed: {},
  data() {
    return {
      // 待辦清單
      todoList: [],
    };
  },
  methods: {
    createTodo(todo) {
      // 把todo新增到todoList內
      // [].push('資料1') => ['資料1']
      this.todoList.push(todo);
    },
    removeItem(index){
      console.log(`[移除某一個代辦事項]`, index)
      this.todoList.splice(index,1);
    }
  },
};
</script>