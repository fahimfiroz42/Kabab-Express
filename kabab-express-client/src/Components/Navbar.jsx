import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { cart } = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/contact">CONTACT US</NavLink></li>
        <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
        <li><NavLink to={"/menu"}>OUR MENU</NavLink></li>
        <li><NavLink to="/shop">OUR SHOP</NavLink></li>
        <li>
            <NavLink to="/dashboard/cart">
                <button className="btn btn-ghost btn-sm">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </NavLink>
        </li>
    </>

    return (
        <div className=" flex justify-center  ">
            <div className="flex rounded-3xl px-5 mt-5 border fixed z-50 text-white bg-black/30 w-11/12 justify-between items-center h-16 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Kabab Express</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <li><NavLink to="/login" className="btn btn-ghost">Login</NavLink></li>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

            
        </div>
    );
};

export default Navbar;