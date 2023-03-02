import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import sourceDate from "@/data.json"
const routes = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/destination/:id/:slug",
        name: "destination.show",
        component: () => import("@/views/DestinationShow.vue"),
        props: route => ({ id: parseInt(route.params.id) }),
        beforeEnter(to, from) {
            const exits = sourceDate.destinations.find(
                destination => destination.id === parseInt(to.params.id)
            )
            if (!exits) return {
                name: "NotFound",
                params: { pathMatch: to.path.split("/").slice(1) },
                query: to.query,
                hash: to.hash
            }
        },
        children: [
            {
                path: "/destination/:id/:slug/:experienceSlug",
                name: "experience.show",
                component: () => import("@/views/ExperienceShow.vue"),
                props: route => ({ ...route.params, id: parseInt(route.params.id) })
            }
        ]
    },
    {
        path: "/protected",
        name: "Protected",
        component: () => import("@/views/Protected.vue"),
        meta: {
            auth: true
        }
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@/views/NotFound.vue") },
    { path: "/login", name: "Login", component: () => import("@/views/Login.vue") },
    {
        path: "/invoices",
        name: "invoices",
        component: () => import("@/views/Invoices.vue"),
        meta: {
            auth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // linkActiveClass: "active-link",
    scrollBehavior(to, from, savedPosition) {
        // return savedPosition || { top: 0 }
        return { top: 0 }
    }
})

router.beforeEach((to, from) => {
    if (to.meta.auth && !window.user) {
        return { name: "Login", query: { redirect: to.fullPath } }
    }
})

export default router