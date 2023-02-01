import { lazy } from 'react'

const AuthRoutes = [
    {
        component: lazy(() => import('../modules/auth/SignUp')),
        path: '/signup'
    },
    {
        component: lazy(() => import('../modules/auth/Login')),
        path: '/login'
    }
]

export default AuthRoutes
