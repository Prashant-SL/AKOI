import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router';
import Home from "./Home";

const Routers = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home />}>
                    Home
                </Route>
                <Route path='/cart' element={<Cart />}>
                    Cart
                </Route>
            </Routes>
        </div>
    );
};
export default Routers;