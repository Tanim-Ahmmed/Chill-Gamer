import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div className="sm:w-11/12 mx-auto min-h-screen ">
           <h1>Home page</h1>
           <h2>Card</h2>
           <h3>Deploy done</h3>

          

        </div>
    );
};

export default Home;