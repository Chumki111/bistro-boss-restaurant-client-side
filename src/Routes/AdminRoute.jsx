import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import {PropTypes } from "prop-types";

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();
   
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg text-red-800"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return  <Navigate to='/' state={{from:location}} replace></Navigate>
};
AdminRoute.propTypes={
    children:PropTypes.node
}
export default AdminRoute;