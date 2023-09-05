import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import TopRated from "../pages/TopRated";
import Cart from "../pages/Cart";
import About from "../pages/About";
import WishList from "../pages/WishList";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/top-rated',
                element: <TopRated />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/wishList',
                element: <WishList />
            }
        ]
    }
]);

export default routes;