import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import useCart from "../../Hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      header.classList.add('scrolled')

    } else {
      header.classList.remove('scrolled')
    }
  })

  
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const navLinks = <>

    <NavLink
      to="/"
      className="nav"
    >
      Home
    </NavLink>

    <NavLink
      to="/ourMenu"
      className="nav"
    >
      Our Menu
    </NavLink>
    <NavLink
      to="/ourShop/salad"
      className="nav"
    >
      Our Shop
    </NavLink>

    <NavLink
      to="/secret"
      className="nav"
    >
      Secret
    </NavLink>

    <NavLink
      to="/"
      className="nav"
    >
      <button className="flex">
      <FaShoppingCart className="text-2xl" />
        <div className="badge border-none mb-2">{cart.length}</div>
      </button>
    </NavLink>




  </>
  return (
    <div>
      <div className="navbar  scrolled rounded-md max-w-screen-xl  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="navbar-end lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-3xl menu-md dropdown-content mt-3 z-[1] p-2  w-52">

              {navLinks}
            </ul>
          </div>
          <a className="font-bold text-2xl px-3">BISTRO BOSS <br />Restaurant</a>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-3">
            {navLinks}
          </ul>
        </div>
        <div className="">
          {
            user ? <>

              <button onClick={handleLogOut} className="cursor-pointer">LogOut</button>
              <div className="avatar mx-5">
                <div className="w-10 rounded-full cursor-pointer">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </> : <>


              <Link to='/login'>
                <button className="cursor-pointer">Login</button>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;