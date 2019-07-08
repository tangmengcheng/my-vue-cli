import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log(process.env)


// console.log('hello webpack');
// () => {
//     console.log(111111)
// }
// require('./a.scss')