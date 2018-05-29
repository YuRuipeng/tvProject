import Vue from "vue"
import Router from "vue-router"
import "../assets/public.css"


Vue.use(Router)
const Index = () => import('../view/index/index.vue')
export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: Index,
            meta: { title:"首页"}
        },
        {
            path: "/subpage",
            name: "subpage",
            // component: Collect,
            component: ()=>import('../view/subpage/subpage.vue'),
            meta: { keepAlive: true ,title:"子页"}
        }      
    ],
})