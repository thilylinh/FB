import { RouteRecordRaw } from "vue-router";
import HomePage from '@/views/home/index.vue'
import NewDetails from '@/views/home/details.vue'
import AboutUs from '@/views/contact-us/index.vue'
import Terms from "@/views/terms/index.vue"
import Privacy from "@/views/privacy/index.vue"

const publicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home Page',
        meta: {
            isHomePage: true
        },
        component: HomePage,
    },
    {
        path: '/:id',
        name: 'Details',
        meta: {
            isHomePage: true
        },
        component: NewDetails,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/terms',
        name: 'Terms',
        component: Terms,
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy,
    },
];

export default publicRoutes;
