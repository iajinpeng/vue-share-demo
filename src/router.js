/**
 * Created by DELL on 2018/3/26.
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './pages/HelloWorld'
import ErrorPage from './pages/Error'
import TablePage from './pages/Table'
import AddPage from './pages/Add'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/error',
            component: ErrorPage
        },
        {
            path: '/table',
            component: TablePage
        },
        {
            path: '/add',
            component: AddPage
        }
    ]
})