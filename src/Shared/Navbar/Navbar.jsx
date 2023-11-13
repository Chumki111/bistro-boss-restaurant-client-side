import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
    
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink></li>
    
    <li><NavLink
  to="/ourMenu"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Our Menu
</NavLink></li>
    <li><NavLink
  to="/ourShop/salad"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Our Shop
</NavLink></li>
    
    
    
    </>
    return (
        <div>
            <div className="navbar fixed rounded-md max-w-screen-xl z-10 bg-opacity-30 bg-[#15151580] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="navbar-end lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            
                           {navLinks}
                        </ul>
                    </div>
                    <a className="font-bold text-2xl px-3">BISTRO BOSS <br />Restaurant</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        {navLinks}
                    </ul>
                </div>
               <Link to='/login'> <div className="">
                    <a className="cursor-pointer">Login</a>
                </div></Link>
            </div>
        </div>
    );
};

export default Navbar;