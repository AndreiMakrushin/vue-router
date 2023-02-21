import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView

        },
        {
            path: "/car/:id",
            name: "car",
            component: CarView
        },{
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFound
        }
    ]
})

export default router