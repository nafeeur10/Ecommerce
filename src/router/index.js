import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home'
import About from '../components/About'

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
    }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
const router = createRouter()

export default router