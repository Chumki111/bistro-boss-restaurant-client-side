import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAlipay } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";
import { MdMenu } from "react-icons/md";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [showMenu, setShowMenu] = useState(false);
    

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">

            <div className="w-full lg:w-64 min-h-screen bg-[#B58130]">

            <button className="lg:hidden" onClick={toggleMenu}>
                    {/* Hamburger Icon or any icon to signify menu */}
                    <MdMenu className=""/>
                    Menu
                </button>
                <Link to='/'> <button className="font-bold lg:block md:hidden text-2xl px-3">BISTRO BOSS <br />Restaurant</button></Link>
                <div className={`lg:block ${showMenu ? 'block' : 'hidden'}`}>
                    <ul className="menu">
                        {
                            isAdmin ? <>

                                <li><NavLink  className='uppercase' to='/dashboard/adminHome'>
                                    <FaHome className="text-2xl" />
                                    Admin Home</NavLink></li>
                                <li><NavLink className='uppercase' to='/dashboard/addItems'>
                                    <FaUtensils className="text-2xl" />
                                    Add Items</NavLink></li>
                                <li><NavLink className='uppercase' to='/dashboard/manageItems'><FaList />manage items</NavLink></li>
                                <li><NavLink className='uppercase' to='/dashboard/manageBookings'>
                                    <FaBook className="text-2xl" />
                                    Manage bookings</NavLink></li>
                                <li><NavLink className='uppercase' to='/dashboard/allUsers'>
                                    <FaUsers className="text-2xl" />
                                    all users</NavLink></li>

                            </> :
                                <> <li><NavLink to='/dashboard/UserHome'>
                                    <FaHome className="text-2xl" />
                                    User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservation'>
                                        <FaCalendar className="text-2xl" />
                                        Reservation</NavLink></li>
                                    <li><NavLink to='/dashboard/paymentHistory'>
                                    <FaAlipay className="text-2xl" />
                                        
                                        Payment History</NavLink></li>
                                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart className="text-2xl" /> My Cart</NavLink></li>
                                    <li><NavLink to='/dashboard/addReview'>
                                        <FaAd className="text-2xl"></FaAd>
                                        Add review</NavLink></li>
                                    <li><NavLink to='/dashboard/myBooking'>
                                        <FaList></FaList>
                                        my booking</NavLink></li></>
                        }

                        <hr className="my-4" />

                        {/* shared Components */}

                        <li><NavLink className='uppercase' to='/'>
                            <FaHome className="text-2xl" />
                            Home</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex-1 bg-[#F6F6F6]">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;