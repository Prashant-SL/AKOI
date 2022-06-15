import React, { useState } from "react";
import "./ProductCard.css"
import axios from "axios"
const ProductCard = (props) => {
    const [prod, setProd] = useState([]);

    const handleClick = async (id) => {
        let productDetails = await axios.get(`http://localhost:4500/products/${id}`);
        let product = productDetails.data;
        console.log('product:', product);
        setProd(product)
        let response = await axios.post("http://localhost:4500/cart/", product)
        let resp = response.data;
        console.log('resp:', response);
    }
    return (
        <div style={{ flexWrap: "no-wrap", marginLeft: "0", width: "30%" }}>
            <div id="fullCard">
                <div id="cardTop">
                    <img height="25px" style={{ margin: "5% 0 0 7%" }} src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/greyHeart.png?raw=true" />
                    <p style={{ backgroundColor: "#81BB3F", padding: "1.3% 3%", fontSize: "90%", borderRadius: "30px", color: "white" }}>250 ML</p>
                </div>

                <div id="cardBottom" >

                    <img style={{ margin: "auto", padding: "0 5% 5% 0%", height: "150px" }} src={props.images} />
                    <p className="cardName">{props.name}</p>
                    <p className="cardPrice">{props.price}</p>
                </div>

            </div >
            <button onClick={() => handleClick(props.id)} id="addToCart">
                Add to cart
            </button>

        </div >
    )
}
export default ProductCard;