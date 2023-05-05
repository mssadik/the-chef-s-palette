import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivetaRout = ({ children }) => {

    const location = useLocation();
    console.log(location);

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div style={{margin: '0 auto'}} className="spinner-border text-info container" role="status"><span className="visually-hidden">Loading...</span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivetaRout;