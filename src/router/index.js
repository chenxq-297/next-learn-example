import { createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/home/home.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/about/about.vue')
    },
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}