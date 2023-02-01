// import React from 'react';
// import { Route, redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

import React from 'react'

const protectedRoutes = () => {
    return (
        <div>protectedRoutes</div>
    )
}

export default protectedRoutes