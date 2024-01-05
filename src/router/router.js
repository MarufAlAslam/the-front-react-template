import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "*",
        element: <NotFound />
    }
])