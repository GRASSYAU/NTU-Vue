<template>
  <div>
    <div class="container">
      <!-- 將store/todos.js拉過來的第二種方法，非經典 -->
      <h1>Todo Page {{ $store.state.todos.numX }}</h1>
      <button @click="addXBtnClick">numX + 1</button>
      <nuxt-link to="/todo-list">回到list</nuxt-link>
      <TodoApp />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex"
import TodoApp from "@/components/TodoApp"
export default {
  name:"todoPage",
  components:{//資料夾名稱 元件夾
    TodoApp,
  },
  methods:{
    ...mapMutations('todos',["addX"]),
    addXBtnClick(){
      this.addX();
    },
  },
}
</script>