import React from "react";
import "./ProductCard.css"
import axios from "axios"
const ProductCard = (props) => {

    const handleClick = async (id) => {
        let response = await axios.post(`http://localhost:4500/cart/`)
        let resp = response.data;
        console.log('response:', resp)

    }
    return (
        <div style={{ flexWrap: "no-wrap", marginLeft: "0", width: "30%" }}>
            <div style={{
                background: "#FFFFFF",
                display: "grid",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                borderRadius: " 49px",
                width: "100%",
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto", paddingTop: "4%", alignContent: "center" }}>
                    <img height="25px" style={{ margin: "5% 0 0 7%" }} src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/greyHeart.png?raw=true" />
                    <p style={{ backgroundColor: "#81BB3F", padding: "1.3% 3%", fontSize: "90%", borderRadius: "30px" }}>250 ML</p>
                </div>

                <div style={{ margin: "auto", display: "grid", marginBottom: "10%" }}>

                    <img style={{ margin: "auto", padding: "0 5% 5% 0%" }} src="https://via.placeholder.com/200" />
                    <p style={{
                        margin: "4% 0 1.5% 0",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "90%",
                        textAlign: "center",
                        color: "#81BB3F",
                    }}>{props.name}</p>

                    <p style={{
                        margin: " 2% auto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "150%",
                        textAlign: "center",
                        color: "#333333",
                        marginBottom: "10%"
                    }}>{props.price}</p>
                    {/* <p>{props.id}</p> */}
                </div>

            </div >
            <button onClick={() => handleClick(props.id)} id="addToCart">
                Add to cart
            </button>

        </div>
    )
}
export default ProductCard;