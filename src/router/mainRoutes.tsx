import { lazy } from 'react'

const MainRoutes = [
    {
        component: lazy(() => import('../modules/home/Home')),
        path: '/'
    },
    {
        component: lazy(() => import('../modules/auth/Profile')),
        path: '/profile'
    },
    {
        component: lazy(() => import('../modules/cards/Card')),
        path: '/cart/'
    },
    {
        component: lazy(() => import('../modules/products/ProductDetail')),
        path: '/productDetail/:id'
    },
    {
        component: lazy(() => import('../modules/home/PageNotFound')),
        path: '*'
    },
]

export default MainRoutes