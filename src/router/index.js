import { createRouter, createMemoryHistory, createWebHistory } from "vue-router"

import NotFound from "../page/NotFound.vue"
import Test1 from "../page/Test1.vue"
import Test2 from "../page/Test2.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Test1
    },
    {
        path: "/dynamic",
        name: "Dynamic",
        component: () => {
            //let co = eval(`require('/dist/w2.umd.min.js')`);
            //return import('../dist/w2.umd.min.js');
            //Vue.component('MyComponent', MyComponent);
            return null;
        }
    },
    {
        path: "/test1",
        name: "Test1",
        component: Test1
    },
    {
        path: "/test2",
        name: "Test2",
        component: () => import("../page/Test2.vue")
    },
    {
        path: "/test2/:name",
        name: "Test2_name",
        component: Test2,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const router = createRouter({ history, routes });
export default router;