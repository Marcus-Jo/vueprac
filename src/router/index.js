import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Todo from '@/pages/Todo'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: Todo }
]


export const router = new VueRouter( {
    routes
});

