<template>
  <div>
    <div class="container">
      <h1>Todo Page {{ $store.state.todos.numX }}</h1>
      <nuxt-link to="/">Go Index</nuxt-link>
      <TodoApp />
    </div>
  </div>
</template>
<script>
import TodoApp from "@/components/TodoApp";
export default {
  name: "todoPage",
  components: {
    TodoApp,
  },
};
</script>