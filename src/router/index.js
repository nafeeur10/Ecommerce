import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home'
import About from '../components/About'
import Checkout from '../components/Checkout'
import Admin from '../Admin/Index'
import Products from '../Admin/View/Products'
import Overview from '../Admin/View/Overview'
import Orders from '../Admin/View/Orders'
import Profile from '../Admin/View/Profile'
import ProfileIndex from '../Admin/View/ProfileComponents/index'
import { fb } from '../firebase'
import AddProduct from '../Admin/View/ProductComponents/AddProduct'
import ProductList from '../Admin/View/ProductComponents/ProductList'

export const constantRoutes = [
    {
        path: '*',
        component: Home,
        name: 'Home',
    },
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'Checkout',
    },
    {
        path: '/admin',
        component: Admin,
        name: 'Admin',
        meta: {    
            requiresAuth: true   
        },
        children: [
            {
                path: '/',
                component: Overview,
                name: 'Overview',
            },
            {
                path: 'products',
                component: Products,
                name: 'Products',
                children: [
                    {
                        path: '/',
                        component: ProductList,
                        name: 'ProductList',
                    },
                    {
                        path: 'add',
                        component: AddProduct,
                        name: 'AddProduct',
                    }
                ]
            },
            {
                path: 'orders',
                component: Orders,
                name: 'Orders',
            },
            {
                path: 'profile',
                component: Profile,
                name: 'Profile',
                children: [
                    {
                        path: '/',
                        component: ProfileIndex,
                        name: 'ProfileIndex',
                    }
                ]
            }
        ]
    }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
});

  
const router = createRouter();

router.beforeEach((to, from, next) => {

    const currentUser = fb.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if( requiresAuth && !currentUser ) next('/');
    else if(!requiresAuth && currentUser) next();
    else next();

});

export default router