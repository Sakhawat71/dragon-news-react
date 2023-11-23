import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <div></div>,
        errorElement: <div>page not found</div>,
        children: [
            {
                path: '/',
                element: <div></div>
            }
        ]
    }
])

export default Router;