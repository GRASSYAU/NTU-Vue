<template>
  <div>
    <!-- 設計新增待辦事項UI -->
    <div class="create-todo-ui">
      <!-- 當表單送出時(不會重整)執行createTodo -->
      <CreateTodoForm @onFormSubmit="createTodo" />
      <!-- 表單錯誤提示文字 -->
      <!-- <div v-if="!Boolean(todoText)">* 內容必填</div> -->
    </div>
    <!-- 待辦事項列表 -->
    <transition name="bounce">
      <TodoList v-if="showList">
        <!-- 每一個待辦事項的模板 -->
        <TodoItem
          v-for="(todo, idx) in getTodoList"
          :key="todo.createdAt"
          :todo="todo"
          @onRemoveClick="removeItem(idx)"
        />
      </TodoList>
    </transition>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
// import TodoItem from "@/components/TodoItem";
// import TodoList from "@/components/TodoList";
// import CreateTodoForm from "@/components/CreateTodoForm";
export default {
  name: "TodoApp",
  // components: {
  //   TodoItem,
  //   TodoList,
  //   CreateTodoForm,
  // },
  computed: {
    ...mapGetters("todos", ["getTodoList", "getX"]),
  },
  data() {
    return {
      // 待辦清單
      // todoList: [],
      showList: false,
    };
  },
  methods: {
    ...mapMutations("todos", [
      "addItemToList",
      "removeItemFromList",
      "initTodoList",
    ]),
    createTodo(todo) {
      // 把todo新增到todoList內
      // [].push('資料1') => ['資料1']
      // this.todoList.push(todo);
      this.addItemToList(todo);
      this.updateTodoListToStorage();
    },
    removeItem(idx) {
      console.log("[準備移除某個待辦]", idx);
      // 移除1筆位於idx的資料
      // this.todoList.splice(idx, 1);
      this.removeItemFromList(idx);
      this.updateTodoListToStorage();
    },
    updateTodoListToStorage() {
      // 取得 todoList
      const todoList = this.getTodoList;
      console.log("[todoList]", todoList);
      // localStorage名稱
      const key = "nuxt-todo-list";
      // 將todoList轉為字串存入localstorage內
      window.localStorage.setItem(key, JSON.stringify(todoList));
    },
  },
  created() {
    // Vue元件創建後
    // console.log("[created]");
  },
  mounted() {
    // console.log("[mounted]", window);
    // 當元件被放到畫面上後
    const storageData = window.localStorage.getItem("nuxt-todo-list");
    console.log("[storageData]", storageData);
    // 將字串化以後的資料轉換回物件
    // let todoList = [];
    // if (storageData) {
    //   todoList = JSON.parse(storageData);
    // }
    const todoList = storageData ? JSON.parse(storageData) : [];
    console.log("[todoList]", todoList);
    // 初始化待辦
    this.initTodoList(todoList);
    // 等一秒
    setTimeout(() => {
      // 顯示清單
      this.showList = true;
    }, 1000);
  },
  updated() {
    // 資料更新到畫面上後
    // console.log("[updated]");
  },
};
</script>
<style>
/* 同時選到進場前與進場後的狀態 */
.bounce-enter-active {
  transition: all 1s ease;
}
/* 進場前 */
.bounce-enter {
  opacity: 0;
  transform: scale(0.7) translate(0, 50px);
}
/* 進場後 */
.bounce-enter-to {
  opacity: 1;
  transform: scale(1) translate(0, 0px);
}
</style>