import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex max-w-screen-2xl mx-auto"> 

        <div className="w-64 min-h-screen bg-[#D1A054]">
       <Link to='/'> <button className="font-bold text-2xl px-3">BISTRO BOSS <br />Restaurant</button></Link>
          <ul className="menu">
            <li><NavLink to='/dashboardUser/UserHome'> 
            <FaHome className="text-2xl"/>
            User Home</NavLink></li>
            <li><NavLink to='/dashboardUser/reservation'> 
            <FaCalendar className="text-2xl"/>
            Reservation</NavLink></li>
            <li><NavLink  to='/dashboardUser/myCart'><FaShoppingCart className="text-2xl" /> My Cart</NavLink></li>
            <li><NavLink to='/dashboardUser/addReview'>
             <FaAd className="text-2xl"></FaAd>
                Add review</NavLink></li>
            <li><NavLink to='/dashboardUser/myBooking'>
             <FaList></FaList>
             my booking</NavLink></li>
          </ul> 
        </div> 

        <div className="flex-1 bg-[#F6F6F6]">
            <Outlet></Outlet>

        </div>
            
        </div>
    );
};

export default Dashboard;