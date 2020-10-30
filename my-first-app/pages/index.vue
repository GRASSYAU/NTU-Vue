<template>
  <div>
    <div class="container">
      <h1>Index Page {{ getX }}</h1>
      <button @click="addXBtnClick">numX + 1</button>
      <nuxt-link to="/todo-list">Go Todo List</nuxt-link>
      <TodoApp />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import TodoApp from "@/components/TodoApp";

export default {
  name: "indexPage",
  components: {
    TodoApp,
  },
  computed: {
    ...mapGetters("todos", ["getX"]),
  },
  methods: {
    // 取得store/todos裡addX函數
    ...mapMutations("todos", ["addX"]),
    addXBtnClick() {
      this.addX();
    },
  },
};
</script>