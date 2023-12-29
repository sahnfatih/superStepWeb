import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/pages/LoginPage"
import HomePage from "@/pages/HomePage"

Vue.use(VueRouter)

export const router = new VueRouter({

    routes : [
        {path : "/",
        name :home,
        component:HomePage},
        {path : "/login",
        name:login,
        component:LoginPage},
        {path : "*",
        component:HomePage},
    ]

})