import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <div>page not found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <div>about</div>
            },
            {
                path: '/career',
                element: <div>career</div>
            }
        ]
    }
])

export default router;