import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import axios from "axios"
import { createRouter , createWebHistory } from 'vue-router';
import User from './components/composition/UserComp.vue';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddPost from './components/Users/addUser.vue';
import  UsersComponent from './components/Users/UsersComponent.vue';
import UsersDetailsCompnent from './components/Users/ProfileDetails.vue';
import UpdateUser from './components/Users/EditUser.vue';

const app = createApp(App);

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/users",
});

app.config.globalProperties.$axios = axiosInstance;


const routes=[
    { 
        
     path: '/', 
     component: User
     },
    {
     path:'/addUser',
     component:AddPost
    },
    {
     path:'/UpdateUser/:id',
     component:UpdateUser
    },
    {
        path:'/Users',
        component:UsersComponent
    },
    {
        path:'/Users/:id',
        component:UsersDetailsCompnent
    }
   
]

let router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(store).use(router).mount('#app')
