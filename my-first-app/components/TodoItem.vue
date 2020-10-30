<template>
  <div class="todo-item">
    <button @click="btnClick" class="remove-btn">&times;</button>
    <div :class="['todo-category', getCategoryColor]">
      <i :class="['fas', getCategoryIcon]"></i>
      {{ todo.category }}
    </div>
    <div class="todo-text">{{ todo.text }}</div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  computed: {
    getCategoryIcon() {
      // 預設icon是書
      let icon = "fa-book";
      const iconMap = {
        財務: "fa-piggy-bank",
        健康: "fa-heart",
        學習: "fa-book",
      };
      // 如果類別名稱存在於iconMap裡
      if (this.todo.category in iconMap) {
        // 把icon設為 物件[屬性] => 值
        // iconMap["財務"] => "fa-piggy-bank"
        icon = iconMap[this.todo.category];
      }
      return icon;
    },
    getCategoryColor() {
      // 如何在這裡取得props?
      // this.屬性名
      let color = "";
      if (this.todo.category == "財務") {
        color = "tag-gold";
      }
      if (this.todo.category == "健康") {
        color = "tag-tomato";
      }
      return color;
    },
  },
  methods: {
    btnClick() {
      // 通知上一層移除按鈕被點了
      this.$emit("onRemoveClick");
    },
  },
};
</script>