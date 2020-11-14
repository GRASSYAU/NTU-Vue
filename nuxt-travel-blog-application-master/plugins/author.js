// import Vue from 'vue';
console.log('[現在開始執行anthor套件初始化]');

const author = {
    name: "Andy",
    email: "andy@kyosei.ai",
    phone: "0912-345-678"
};

// 回傳一個函數
export default ( context, inject ) => {
    // 讓每個Vue元件都可以使用 this.$author 取得作者資訊
    inject("author", author);
    // 讓每個Vue元件都可以使用 this.$getAuthorInfo()
    inject("getAuthorInfo", (greeting) => {
        return `${greeting},我是${author.name}`
    });
}

// const authorVue = {
//     install(Vue, options){
//         console.log('[VUE開始安裝authorVue]', options)
//         Vue.prototype.author = author;
//         Vue.prototype.getAuthorInfo = function(greeting){
//             return `${greeting},我是這個網站的作者${author.name}。`
//         }
//     }
// }

// Vue.use(authorVue, {})