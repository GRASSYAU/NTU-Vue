<template>
  <div>
      <!-- 設計新增待辦事項UI -->
      <div class="create-todo-ui">
        <!-- <h4>X: {{ getX }}</h4>
        <h4>todoList: {{ getTodoList }}</h4> -->
        <!-- 當表單送出時(不會重整)執行createTodo -->
        <CreateTodoForm @onFormSubmit="createTodo" />
        <!-- 表單錯誤提示文字 -->
      </div>
      <!-- TODO: 待辦事項列表 -->
      <transition name="bounce">
        <TodoList v-if="showList">
          <!-- 每一個待辦事項的模板 -->
          <TodoItem
            v-for="(todo, index) in getTodoList"
            :key="todo.createdAt"
            :todo="todo"
            @onRemoveClick="removeItem(index)"
          />
        </TodoList>
      </transition>
      <!-- <TodoItem :todo="{ category: '學習' , text: 'Todo1', }"/> -->
      <!-- <TodoItem category="學習" text="Todo2" /> -->
      <!-- 每一個待辦事項的模板 end -->
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";  
// import TodoList from "@/components/TodoList"; //註冊元件
// import TodoItem from "@/components/TodoItem";
// import CreateTodoForm from "@/components/CreateTodoForm";
export default {
  name: "TodoApp",
  // components: {
  //   TodoItem,
  // },
  computed: {
    ...mapGetters("todos",["getTodoList", "getX"])
  },
  data() {
    return {
      // 待辦清單
      // todoList: [],
      // showList: true
    };
  },
  methods: {
    ...mapMutations("todos", ["addItemToList","removeItemFromToList","initTodoList"]),
    createTodo(todo) {
      // 把todo新增到todoList內
      // [].push('資料1') => ['資料1']
      // this.todoList.push(todo);
      this.addItemToList(todo);
      this.updataTodoListToStorage();
    },
    removeItem(index){
      console.log(`[移除某一個代辦事項]`, index)
      // this.todoList.splice(index,1);
      this.removeItemFromToList(index);
    },
    updataTodoListToStorage(){
      //取得todoList
      const todoList = this.getTodoList;
      console.log("[todoList]",todoList);
      //localStorage名稱
      const key = 'nuxt-todo-list';
      //將todoList存入localstorage內
      //陣列轉乘字串
      window.localStorage.setItem(key, JSON.stringify(todoList));
    },
    
  },
  created(){
    console.log("[created]")
  },
  mounted(){
    console.log("[mounted]",window)
    //當元件被放到畫面上後
    const storageData = window.localStorage.getItem("nuxt-todo-list");
    //將字串化以後的資料轉換回物件
    // console.log("[storageData]",storageData);
    // let todoList = [] 
    // if (storageData){
    //    todoList = JSON.parse(storageData);
    // }
    const todoList = storageData ? JSON.parse(storageData):[]; 
    console.log("[todoList]", todoList);
    //初始化待辦
    this.initTodoList(todoList);
    //等一秒
    setTimeout(() => {
      //顯示清單
      this.showList = true;
    }, 1000);
  }
};
</script>

<style>
/* 同時選到進場前進場後的狀態 */
  .bounce-enter-active{
    transition: all 1s ease;
  }
  /* 進場前 */
  .bounce-enter{
    opacity: 0;
  }
  /* 進場後 */
  .bounce-enter-to{
    opacity: 1;
  }
</style>