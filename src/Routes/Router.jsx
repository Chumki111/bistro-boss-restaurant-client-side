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
      path:'dashboardUser',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboardUser/myCart',
          element:<Cart></Cart>
        }
      ]

    }

  ]);
export default Router;