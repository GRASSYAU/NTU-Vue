<template>
  <div>
    <div class="container">
      <h1>TODO List</h1>
      <!-- TODO: 設計新增待辦事項UI -->
      <div class="create-todo-ui"></div>
      <!-- 當標單送出時(不會重整)執行createTodo這個methods -->
        <form @submit.prevent="createTodo">
          <input v-model="todotext" type="text" required placeholder="請輸入待辦內容">
          <select name="" id="" required v-model="todoCategory">
            <option value="" disabled>請選擇類別</option>
            <option value="財務">財務</option>
            <option value="健康">健康</option>
            <option value="學習">學習</option>
          </select>
          <button>新增</button>
        </form>
        <!-- <h3>準備新增待辦事項:{{ todotext }}</h3> -->
      <!-- TODO: 待辦事項列表 -->
      <!-- <p>{{ todoList }}</p> -->
      <div class="todo-list-ui">
        <!-- 每一個待辦事項的模板 -->
        <div v-for="todo in todoList" :key="todo.createdAt" class="todo-item">
          <div class="todo-category">{{ todo.category }}</div>
          <div class="todo-text">{{ todo.text }}</div>
        </div>
        <!-- 每一個待辦事項的模板 end -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todoListPage",
  data: ()=>{
    return{
      todotext:"",
      todoCategory:"",
      //待辦清單
      todoList:[]
    }
  },
  methods:{
    createTodo(){
      console.log("[新增待辦表單送出了]")
      //TODO:描述一份待辦事項的資料(內容，分類，建立時間)
      const todo = {
        text:this.todotext,
        category:this.todoCategory,
        createdAt: new Date().getTime() //時間
      };
      console.log("[新待辦]", todo)
      //把(todo)待辦事項新增(push())到待辦清單(todoList)裡面
      //[].push('資料1') => ['資料1']
      this.todoList.push(todo)
    }
  }
};
</script>