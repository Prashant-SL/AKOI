import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: "grid" }}>
            <div id="navbar">
                <div id="leftNavbar">
                    <img height="100px" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-07-52.png?raw=true" />
                </div>
                <div id="centerNavbar">
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Export</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                </div>

                <div id="rightNavbar">
                    <img height="18%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-08-44.png?raw=true" />
                    <img height="18%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-00.png?raw=true" />
                    <Link to='/cart'> <img width="55%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-10.png?raw=true" /> </Link>
                    <img height="40%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-19.png?raw=true" />
                </div>
            </div>
            <div id="headerImage">
                <img width="50%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-05-26.png?raw=true" />
                <img width="50%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-05-39.png?raw=true" />
            </div>
        </div >
    )
}
export default Navbar;