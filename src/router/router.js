import MainPage from "@/views/MainPage";
import SinglePostPage from "@/views/SinglePostPage"
import {createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: SinglePostPage
    },
    {
        path: '/post/:id',
        component: SinglePostPage
    }

]

const  router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;