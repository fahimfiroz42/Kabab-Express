import { Outlet } from "react-router-dom";
import Navbar from "../Components/NAvbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
            
        </div>
    );
};

export default MainLayout;