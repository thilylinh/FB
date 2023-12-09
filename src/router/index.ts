/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import { getStateVueX, isStrEmpty } from "@/utils/utils";

import publicRoutes from "@/router/public-routes";
// import authenticateRoutes from "./authenticate-routes";
import authenticatedRoutes from "./authenticated-routes";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        ...publicRoutes,
        //...authenticateRoutes,
        ...authenticatedRoutes,
        {
            path: "/*",
            name: "NotFound",
            component: () =>
                import(
                    "@/views/404/error404.vue"
                ),
        },
    ],
});

router.beforeEach((to, from, next) => {
    const langSearchParams: any = to.query?.lang || null;
    const stateStore = getStateVueX();

    const token = stateStore.token;
    if (langSearchParams) {
        localStorage.setItem("locale", langSearchParams);
    }

    const hasMeta = (name: string): boolean =>
        to.matched.some((record) => record.meta[name]);

    if (hasMeta("authenticated") && isStrEmpty(token)) {
        next({ name: "Login", query: to.query });
    } else if (hasMeta("guest") && !isStrEmpty(token)) {
        next({ name: "Home Page", query: to.query });
    } else {
        next();
    }
});

export default router;
