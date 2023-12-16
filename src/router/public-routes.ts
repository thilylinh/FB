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
        component: HomePage,
    },
    {
        path: '/:id',
        name: 'Details',
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
