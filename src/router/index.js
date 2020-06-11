import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home'
import About from '../components/About'
import Admin from '../Admin/Index'
import Products from '../Admin/View/Products'
import Overview from '../Admin/View/Overview'
import Orders from '../Admin/View/Orders'

export const constantRoutes = [
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
        path: '/admin',
        component: Admin,
        name: 'Admin',
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
            },
            {
                path: 'orders',
                component: Orders,
                name: 'Orders',
            }
        ]
    }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
const router = createRouter()

export default router