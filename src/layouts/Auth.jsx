import { Outlet } from "react-router-dom";


const Auth = () => {
    return (
        <div className="sm:w-11/12 mx-auto">
           <Outlet></Outlet> 
        </div>
    );
};

export default Auth;