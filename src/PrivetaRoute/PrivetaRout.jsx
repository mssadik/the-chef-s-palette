import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivetaRout = ({children}) => {
    const location = useLocation();
    console.log(location);
    
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivetaRout;