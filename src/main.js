//引入vue
import Vue from "vue"
// 导入vue文件
import app from "./App.vue"
// 创建vue实例
var vm=new Vue({
    el:"#app",
    render:c=>c(app)
})
