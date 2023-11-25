import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    
    console.log('from privetRouter',location.pathname)
    
    if (loading) {
        return <span className="loading loading-infinity mx-auto mt-20 flex justify-center  loading-lg"></span>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>


};

PrivetRouter.propTypes = {
    children: PropTypes.node
};

export default PrivetRouter;