import { useContext } from "react";
import {Navigate,Outlet} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


function ProtectedRoutes(){
    const {isLoggedIn} = useContext(AuthContext);
    return(
        isLoggedIn?<Outlet/>:<Navigate to="/login"/>
    );
}

export default ProtectedRoutes;