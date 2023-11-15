import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg text-red-800"></span>
    }
    if(user){
        return children;
    }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>
};
PrivetRoutes.propTypes={
    children:PropTypes.node
}
export default PrivetRoutes;