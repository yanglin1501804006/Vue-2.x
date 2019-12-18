// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好，Spring的思念</h2>')

//5.使用vue进行开发
import Vue from 'vue'
//import App from './vue/app'
import App from './vue/App.vue'

//抽离到app.js中
// const App = {
//   template: `
//   <div>
//     <h2>{{message}}</h2>
//     <button @click="buttonClick">按钮</button>
//     <h2>{{name}}</h2>
//   </div>
//   `
//   ,
//   data() {
//     return{
//       message : 'hello webpack !',
//       name: 'spring cloud alibaba'
//     }
   
//   },
//   methods: {
//     buttonClick(){

//     }
//   }
// }

new Vue({
  el: '#app',
  template: '<App/>'
  //抽离到App中了
  //  `
  // <div>
  //   <h2>{{message}}</h2>
  //   <button @click="buttonClick">按钮</button>
  //   <h2>{{name}}</h2>
  // </div>
  // `,
  // data: {
  //   message : 'hello webpack !',
  //   name: 'spring cloud alibaba'
  // },
  // methods: {
  //   buttonClick(){

  //   }
  // }
  ,
  components: {
    App
  }
})