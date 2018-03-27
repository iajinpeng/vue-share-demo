/**
 * Created by jinpeng on 2018/3/26.
 */

import HelloWorld from './pages/HelloWorld'
import ErrorPage from './pages/Error'
import TablePage from './pages/Table'
import AddPage from './pages/Add'


export default {
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
}