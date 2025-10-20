import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>;
    }

    if(user) {
        return children;
    }

    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRoute;