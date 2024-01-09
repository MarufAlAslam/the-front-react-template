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
]);
