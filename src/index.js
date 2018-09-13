import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import router from "./routes";

Vue.use(VueRouter);

new Vue({
    el:"#app",
    template: '<App />',
    components: {
      App
    },
    router 
})
