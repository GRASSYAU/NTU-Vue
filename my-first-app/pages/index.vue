<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{subtitle}}</h2>
    <input type="text" v-model="title"> <!--v-model =>vue的特有屬性 -->
    <br>
        <input type="text" v-model="subtitle">
    <div>
      <nuxt-link to="/about">關於本站</nuxt-link>
      <nuxt-link to="/contact">聯絡我們</nuxt-link>
    </div>
  </div>
</template>

<script>
//VUE的起手式一個data函式 //用資料改變頁面
export default {
  data() {
    return {
      title:'我的網站',
      subtitle:"我是老二",
    }
  },
};
</script>
