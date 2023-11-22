import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
    return (
        <div className="container font-Opensans mx-auto">
             <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;