import Vue from 'vue';
import Index from './components/Index';
import router from './router';


require('./bootstrap');

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    components: {
        Index
    },
    router
})
