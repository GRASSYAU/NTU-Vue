<template>
  <div>
    <div class="container">
      <h1>
        Counter
        <!-- 如果num > 5這個span才會擁有 text-red 這個 class -->
        <span :class="[{ 'text-red': num % 2 === 0 }]">{{ num }}</span>
      </h1>
      <h4 v-if="num > 5">現在num已經超過5了!</h4>
      <!-- 設計計數器UI -->
      <button @click="minus">-</button>
      <button @click="add">+</button>
      <button v-if="num !== 0" @click="resetNum">Reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "counterPage",
  data() {
    return {
      // 這個vue元件有哪些資料
      num: 0,
    };
  },
  methods: {
    // 這個vue元件可用的方法(函數,功能)
    add() {
      console.log("[按下了+1按鈕]");
      // 把num加1
      // 在Vue元件(this)內要取得元件的資料
      // this.資料名稱
      // Vue元件
      // console.log(this);
      // this.num = this.num + 1;
      // 如果 num >= 10
      if (this.num >= 10) {
        // 讓函數停止
        return;
      }
      this.num += 1;
    },
    minus() {
      // num 如果大於0
      if (this.num > 0) {
        // 把num - 1
        this.num -= 1;
      }
    },
    resetNum() {
      this.num = 0;
    },
  },
};
</script>