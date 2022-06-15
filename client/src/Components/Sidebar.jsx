import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div id="sidebarContainer">
            <span>Sort</span>
            <div id="listDiv1">
                <p>Featured</p>
                <p>New Arrivals</p>
                <p>Discount</p>
                <p>Price (Highest first)</p>
                <p>Price (Lowest first)</p>
            </div>

            <span>Filter</span>
            <div id="listDiv2">
                <p>All Products</p>
                <p>Natural Insecticide</p>
                <p>Plant Growth <br />Promoters</p>
                <p>Fertilizers</p>
                <p>Plant Growth Mix</p>
                <p>Garden Tools & <br />Accessories</p>
            </div>

            <span>Quantity</span>
            <div id="listDiv3">
                <p>250 ml/g</p>
                <p>500 ml/g</p>
                <p>1 Litre/Kg</p>
                <p>10 Kg</p>
                <p>15 Kg</p>
                <p>20 Kg</p>
            </div>
        </div>
    )
}
export default Sidebar;