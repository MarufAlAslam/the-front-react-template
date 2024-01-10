import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import NotFound from "../pages/not-found";
import Branches from "../pages/branches";
import Functions from "../pages/functions";
// import EmptyCart from "../demos/ecommerce/views/EmptyCart/EmptyCart";
import EmptyCartPage from "../pages/empty-cart";
import CartPage from "../pages/cart";
import CheckoutPage from "../pages/checkout";
import OrderCompletePage from "../pages/order-completed";
import ShoppingListing from "../pages/shopping-listing";
import Pricing from "../pages/pricing";
import Account from "../pages/account";
import ForgetPassword from "../pages/forget-password";
import Terms from "../pages/terms";
import News from "../pages/news";
import Help from "../pages/help";
import PrivacyPolicy from "../pages/privacy-policy";
import DataPolicy from "../pages/data-policy";
import CookiePolicy from "../pages/cookie-policy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/branches",
    element: <Branches />,
  },
  {
    path: "/functions",
    element: <Functions />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/empty-cart",
    element: <EmptyCartPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/order-completed",
    element: <OrderCompletePage />,
  },
  {
    path: "/listings",
    element: <ShoppingListing />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/data-policy",
    element: <DataPolicy />,
  },
  {
    path: "/cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);
