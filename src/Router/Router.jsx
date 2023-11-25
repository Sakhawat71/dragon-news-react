import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Career from "../components/Career/Career";
import About from "../components/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;