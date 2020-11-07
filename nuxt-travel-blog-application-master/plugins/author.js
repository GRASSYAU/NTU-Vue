// import vue from "vue";

console.log("[現在開始執行author套件初始化]")

const author = {
    name: "Alex",
    email: "alex@gmail.con",
    phone: "0922-555-666"
};

//回傳一個函數
export default ( context, inject )=>{
    //讓每個vue元件都可以使用 this.$athor 取得作者資訊
    inject("author", author)
    inject("getAuthorInfo",(greeting)=>{
        return `${greeting},我是${author.name}`
    });
};

//傳統vue作法
// const authorVue = {
//     install: function(Vue, options){
//         console.log("[開始安裝authorNue]", options)
//         vue.prototype.author = author;
//         vue.prototype.getAuthorInfo = function(greeting){
//             return `${greeting},我是${author.name}`
//         }
//     }
// }

// vue.use(authorVue, {})