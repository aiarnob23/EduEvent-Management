import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../ServiceCardDetails/CardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Errorpage from "../ErrorPage/Errorpage";
import Membership from "../Pages/Memebership/Membership";
import PromoCode from "../Pages/PromoCodes/PromoCode";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/membership',
                element: <PrivateRoute><Membership></Membership></PrivateRoute>,
            },
            {
                path: '/promo',
                element: <PrivateRoute><PromoCode></PromoCode></PrivateRoute>,
            },
            {
                path: 'detail/:detailId',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
            },

        ],

    },
    {
        path: '*',
        element: <Errorpage></Errorpage>,
    },
]);

export default router;