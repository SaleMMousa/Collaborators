import React from 'react';
import HomePage from "./pages/home page/HomePage";
import {useRoutes} from "react-router-dom";
import Products from "./pages/products";
import Product from './pages/product';

function Router(props) {
    const routes = useRoutes([
        {path:"/", element: <HomePage/>},
        {path:"/products", element: <Products />},
        {path:"/category", element: <Product/> },
    ])
    return (
        routes
    );
}

export default Router;

export const RouterProduct = ()=>{
    return useRoutes([
        // {path:"/products/description", element: <HomePage/>},
        // {path:"/products/:id", element: <Products />},
    ])
}