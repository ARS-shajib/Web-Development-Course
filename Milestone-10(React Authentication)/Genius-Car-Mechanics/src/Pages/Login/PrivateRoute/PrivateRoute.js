import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = (props) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation='border' variant='danger'></Spinner>
    }
    return (
        user.email ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoute;