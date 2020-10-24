<template>
  <div>
    <div class="container">
      <h1>Todo Page</h1>
      <nuxt-link to="/">回到首頁</nuxt-link>
      <TodoApp />
    </div>
  </div>
</template>
<script>
import TodoApp from "@/components/TodoApp"
export default {
  name:"todoPage",
  computed:{
    TodoApp,
  }
}
</script>