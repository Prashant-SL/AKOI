import React from "react";

const Navbar = () => {
    return (
        <div style={{ display: "grid" }}>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "40px" }}>
                <div id="left" style={{
                    paddingLeft: "6%",
                    width: "15%",
                }}>
                    <img height="100px" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-07-52.png?raw=true" />
                </div>
                <div id="center" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "auto",
                    width: "50%",
                    fontSize: "90%",
                    alignItems: "center"
                }}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Export</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                </div>
                <div id="right" style={{
                    display: "flex",
                    fontSize: "90%",
                    justifyContent: "space-around",
                    width: "20%",
                    paddingRight: "12%",
                    alignItems: "center",

                }}>
                    <img height="18%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-08-44.png?raw=true" />
                    <img height="18%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-00.png?raw=true" />
                    <img height="18%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-10.png?raw=true" />
                    <img height="40%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-09-19.png?raw=true" />
                </div>
            </div>
            <div style={{
                margin: "auto", width: "90%", display: "grid",
                height: "445px", borderRadius: "37px", backgroundRepeat: "no-repeat",
                backgroundSize: "contain", background: "url(https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-04-45.png?raw=true)"
            }}>
                <img style={{ margin: "auto", width: "50%", marginTop: "4%" }} width="50%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-05-26.png?raw=true" />
                <img style={{ margin: "auto", width: "30%", marginTop: "-14%" }} width="50%" src="https://github.com/Prashant-SL/AKOI/blob/main/client/public/assets/image_2022-06-14_15-05-39.png?raw=true" />
            </div>
        </div >
    )
}
export default Navbar;