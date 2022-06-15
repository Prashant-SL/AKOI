import React from "react";

const Sidebar = () => {
    return (
        <div style={{
            width: "20%", borderRadius: "30px",
            position: "absolute", display: "grid",
            marginTop: "3%", marginLeft: "5%"
        }}>
            <span style={{
                marginLeft: "5%",
                fontWeight: "bold"
            }}>Sort</span>

            <div style={{
                background: "#F9F9F9",
                borderRadius: "30px",
                padding: "5% 7%",
                marginBottom: "5%",
                marginTop: "2%"
            }}>
                <p style={{
                    backgroundColor: "#81BB3F",
                    padding: "1.3% 3%", fontSize: "90%",
                    borderRadius: "30px", color: "white"
                }}>Featured</p>
                <p>New Arrivals</p>
                <p>Discount</p>
                <p>Price (Highest first)</p>
                <p>Price (Lowest first)</p>
            </div>

            <span style={{
                marginLeft: "5%",
                fontWeight: "bold"
            }}>Filter</span>
            <div style={{
                background: "#F9F9F9",
                borderRadius: "30px",
                padding: "5% 7",
                marginBottom: "5%",
                marginTop: "2%",
                padding: "5% 7%",
            }}>
                <p style={{
                    backgroundColor: "#81BB3F",
                    padding: "1.3% 3%", fontSize: "90%",
                    borderRadius: "30px", color: "white"
                }}>All Products</p>
                <p>Natural Insecticide</p>
                <p>Plant Growth <br />Promoters</p>
                <p>Fertilizers</p>
                <p>Plant Growth Mix</p>
                <p>Garden Tools & <br />Accessories</p>
            </div>

            <span style={{
                marginLeft: "5%",
                fontWeight: "bold"
            }}>Quantity</span>
            <div style={{
                background: "#F9F9F9",
                borderRadius: "30px",
                padding: "5% 7%",
                marginTop: "2%"
            }}>
                <p style={{
                    backgroundColor: "#81BB3F",
                    padding: "1.3% 3%", fontSize: "90%",
                    borderRadius: "30px", color: "white"
                }}>250 ml/g</p>
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