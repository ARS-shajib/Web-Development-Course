import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    // const { children, ...rest } = props;
    const { Shipping } = props;
    // console.log(props);
    const { user } = useAuth();
    return (
        user.email ? <Outlet /> : <Navigate to="/login" />
        // <Route>
        //     {/* {...rest} */}
        //     render={({ location }) => user.email ? <Shipping /> : (
        //         <Navigate
        //             to={{
        //                 pathname: '/login',
        //                 state: { from: location }
        //             }}
        //         >
        //         </Navigate>
        //     )
        //     }
        // </Route>
    );
};

export default PrivateRoute;