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
import PersonalIn4 from "../pages/User/PersonalIn4";
import HomeAd from "../pages/Admin/Home";
import Account from "../pages/Admin/Account";
import Login from "../pages/User/Login";
import Show_bookingTable from "../pages/User/show_bookingTable";
import Show_booking from "../pages/User/show_booking";
import OrderDetail from "../pages/User/OrderDetail";
import Customer from "../pages/Admin/Customer";
import Promotion from "../pages/Admin/Promotion";
import Table from "../pages/Admin/Table";

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Show_booking', component: Show_booking
    },
    {
        path: '/Show_bookingTable/:BookingID', component: Show_bookingTable
    },
    {
        path: '/Login', component: Login
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
        path: '/Order/:BookingID', component: Order
    },
    {
        path: '/PersonalIn4', component: PersonalIn4
    },
    {
        path: '/OrderDetail/:OrderID', component: OrderDetail
    },
    {
        path: '/Admin/Home', component: HomeAd, layout: Admin
    },
    {
        path: '/Admin/Account', component: Account, layout: Admin
    },
    {
        path: '/Admin/Customer', component: Customer, layout: Admin
    },
    {
        path: '/Admin/Promotion', component: Promotion, layout: Admin
    },
    {
        path: '/Admin/Table', component: Table, layout: Admin
    },
];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};