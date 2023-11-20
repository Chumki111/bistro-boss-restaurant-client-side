import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Screct/Secret";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/DashboardPage/Cart/Cart";
import AllUsers from "../Pages/DashboardPage/AllUsers/AllUsers";
import AddItems from "../Pages/DashboardPage/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/DashboardPage/AdminHome/AdminHome";
import ManageItem from "../Pages/DashboardPage/ManageItem/ManageItem";
import UpdatedItem from "../Pages/DashboardPage/UpdatedItem/UpdatedItem";
import Payment from "../Pages/DashboardPage/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory/PaymentHistory";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourMenu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/ourShop/:category',
          element:<OurShop></OurShop>
        },
        {
          path:'/secret',
          element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path :'/signUp',
      element:<SignUp></SignUp>
    },
    {
      path:'/dashboard',
      element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
      children:[
        {
          path:'myCart',
          element:<Cart></Cart>
        },
        {
          path:'/dashboard/payment',
          element:<Payment/>
        },
        {
        path : '/dashboard/paymentHistory',
        element : <PaymentHistory/>
        },
        // Admin route
        {
         path:'/dashboard/allUsers',
         element:<AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItems/></AdminRoute>
        },
        {
          path:'/dashboard/adminHome',
          element:<AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path :'/dashboard/manageItems',
          element:<AdminRoute><ManageItem/></AdminRoute>
        },
        {
          path:'/dashboard/updatedItem/:id',
          element:<AdminRoute><UpdatedItem/></AdminRoute>,
          loader :({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]

    }

  ]);
export default Router;