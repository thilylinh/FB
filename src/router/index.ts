/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "@/router/public-routes"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        ...publicRoutes
    ],
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
