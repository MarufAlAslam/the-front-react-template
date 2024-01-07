import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import NotFound from "../pages/not-found";
import Branches from "../pages/branches";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/branches",
        element: <Branches />
    },
    {
        path: "*",
        element: <NotFound />
    }
])