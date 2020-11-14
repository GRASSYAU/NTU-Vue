import firebase from 'firebase/app';
// 引用索引專案需要用到的Firebase服務
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// 設定專案的config
const config = {
    apiKey: "AIzaSyB0eP9IoXWw9KWkHOYcx1Qt9WgxfCc8yls",
    authDomain: "nuxt-app-8cacc.firebaseapp.com",
    databaseURL: "https://nuxt-app-8cacc.firebaseio.com",
    projectId: "nuxt-app-8cacc",
    storageBucket: "nuxt-app-8cacc.appspot.com",
    messagingSenderId: "493851882091",
    appId: "1:493851882091:web:51fd59728b3cf4195cf72e"

}
// 確認專案是否未初始化
if (firebase.apps.length < 1) {
    // 初始化firebase
    firebase.initializeApp(config);
}
// console.log('[firebase]', firebase);
export default (context, inject) => {
    // 讓每個Vue元件可透過
    // this.$storage 取得 firebase.storage()
    inject('storage', firebase.storage());
    // this.$db
    inject('db', firebase.firestore());
    // this.$auth
    inject('auth', firebase.auth());
    //this.$googleProvider
    inject('googleProvider', new firebase.auth.GoogleAuthProvider());
}
