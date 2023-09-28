import React from 'react';
import HomePage from "./pages/home page/HomePage";
import { useRoutes } from "react-router-dom";
import Products from "./pages/products";
import { Product } from './pages';
import Register from './pages/auth/rigester/Register';
import SignIn from './pages/auth/sign in/SignIn';

function Router(props) {
    const routes = useRoutes([
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <Products /> },
        { path: "/category", element: <Product /> },
        {path:"/login", element: <SignIn/>},
        {path:"/register", element: <Register/>},
    ])
    return (
        routes
    );
}

export default Router;

export const RouterProduct = () => {
    return useRoutes([
        // {path:"/products/description", element: <HomePage/>},
        // {path:"/products/:id", element: <Products />},
    ])
}