<template>
    <div class="todo-item">
        <!-- <div class="todo-category" :style="{backgroundColor:getCategoryColor}">{{ todo.category }}</div> -->
        <button @click="btnClick" class="remove-btn">
            &times;
        </button>
        <div
            :class="['todo-category',getCategoryColor]"
        >   
            <i :class="['fas',getCategoryIcon ]"></i>
            {{ todo.category }}
        </div>
        <div class="todo-text">{{ todo.text }}</div>
    </div>
</template>
<script>
export default {
    neme:'TodoItem',
    props:["todo"],
    computed:{
        getCategoryColor(){
            //如何在這裡取得props?
            //this.屬性名稱
            let color=""
            if (this.todo.category == "財務"){
                color = "tag-gold"
            }
            if (this.todo.category == "健康"){
                color= 'tag-tomato';
            }
            return color;
        },
        getCategoryIcon(){
            let icon="fa-book";
            //預設icon是書
            const iconMap={
                "財務":"fa-piggy-bank",
                "健康":"fa-ice-cream"
            };
            //如果類別名稱存在於iconMap
            if(this.todo.category in iconMap){
                //把icon設為 物件[屬性] =>值
                // iconMap["財務"]=>"fa-piggy-bank"
                icon= iconMap[this.todo.category]
            }
             return icon;
        },
       
    },
    methods: {
        btnClick(){
            //通知上一層移除按鈕被點了
            this.$emit("onRemoveClick")
        }
    },
}

</script>