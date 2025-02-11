//public routes
import Admin from "../components/layout/Admin";
import Home from "../pages/User/Home";
import ProductDetails from "../pages/User/ProductDetails";
import Cart from "../pages/User/Cart";
import Pay from "../pages/User/Pay";
import Thanks from "../pages/User/Thanks";
import Bookings from "../pages/User/Bookings";
import Bill from "../pages/User/Bill";
import Order from "../pages/User/Order";
import OrderDetails from "../pages/User/OrderDetails";
import PersonalIn4 from "../pages/User/PersonalIn4";
import HomeAd from "../pages/Admin/Home";
import Account from "../pages/Admin/Account";
import Table from "../pages/User/table";



const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/table', component: Table
    },
    {
        path: '/ProductDetails', component: ProductDetails
    },
    {
        path: '/Cart', component: Cart
    },
    {
        path: '/Pay', component: Pay
    },
    {
        path: '/Thanks', component: Thanks
    },
    {
        path: '/Bookings', component: Bookings
    },
    {
        path: '/Bill', component: Bill
    },
    {
        path: '/Order', component: Order
    },
    {
        path: '/PersonalIn4', component: PersonalIn4
    },
    {
        path: '/OrderDetails', component: OrderDetails
    },
    {
        path: '/Admin/Home', component: HomeAd, layout: Admin
    },
    {
        path: '/Admin/Account', component: Account, layout: Admin
    },
];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};