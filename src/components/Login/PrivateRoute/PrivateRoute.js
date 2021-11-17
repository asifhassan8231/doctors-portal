import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;