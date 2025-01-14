import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" flex justify-center  ">
            <div className="flex rounded-3xl px-5 mt-5 border fixed z-50 text-white bg-black/30   ">
  <div className=" ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>HOME</a></li>
      <li><a>CONTACT US</a></li>
      <li><a>DASHBOARD</a></li>
      <li><a>OUR MENU</a></li>
      <li><a>OUR SHOP</a></li>
     
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <span className="font-bold text-">KABAB</span> EXPRESS</a>
  </div>
  <div className="items-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="/contact">CONTACT US</NavLink></li>
      <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
      <li><NavLink to={"/menu"}>OUR MENU</NavLink></li>
      <li><NavLink to="/shop">OUR SHOP</NavLink></li>
      
     
     
    </ul>
    <a className="btn btn-sm rounded-xl ">Button</a>
  </div>
 
</div>

            
        </div>
    );
};

export default Navbar;