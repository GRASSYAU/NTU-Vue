<template>
  <div>
    <div class="container">
      <h1>
        Counter
        <!-- 用冒號來綁定class來條件判斷 :class="[{ }]"  -->
        <!-- 如果num > 5這個span才會擁有 text-red 這個class -->
        <span :class="[ { 'text-red': num >5 } ]">{{ num }}</span>
        <!-- <span :class="[ { 'text-red': num %2 ===0 } ]">{{ num }}</span> 求偶數 除2=0 -->
      </h1>
      <!-- v-if是條件判斷達成才會出現此標籤 -->
      <h4 v-if="num > 5">現在這個num已經超過5了!</h4>
      <!-- TODO: 設計計數器UI -->
      <button @click="minus">-</button>
      <button @click="add">+</button>
      <button v-if="num!==0" @click="resetNum">歸零</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "counterPage",
  data(){
    return{
      //這個vue元件有哪些資料
      num:0,
    }
  },
  methods:{
    //這個vue元件可用的方法(函數,功能)
    add(){
      console.log(`按下了標籤屬性`)
      //把num+1
      //把vue元件(this)內要取得元件的資料
      //this,資料名稱
      //tihs這裡指vue元件
      console.log(this.num);
      //使用this指定物件名寫入要呈現的功能，在塞回原本的物件來改變內容 類似js寫變數
      //this.num = this.num+1;的縮寫
      //如果num >=10
      if(this.num >=10){
        //讓函數停止
        return;
      }
      this.num += 1;
    },
    minus(){
      //num如果大於0才會-1
      if(this.num > 0){
        this.num -= 1;
      }
    },
    resetNum(){
      if (this.num >0) {
        this.num = 0;
      }
    }
  }
};
</script>
