import { Navigate } from 'react-router-dom';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';
import Profile from 'src/pages/Profile';

export const ProtectedRoute = () => {
    const user = useSelector((state: IRootState) => state.main.user)
    if (!user?.email) {
        return <Navigate to="/login" replace />;
    }
    return <Profile userProps={{...user}}/>;
};
