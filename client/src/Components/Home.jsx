import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Home.css";
import axios from 'axios';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

{/* <ProductCard /> */ }

const Home = () => {
    const dispatch = useDispatch();
    // const [filteredData, setFilteredData] = useState([]);
    const [data, setdata] = useState([]);

    const productDetails = async () => {
        const response = await axios
            .get('http://localhost:4500/products')
            .catch((err) => {
                console.log('Err: ', err);
            });
        let resp = response.data;
        setdata(resp)
        // setFilteredData([...resp]);
    };
    console.log('data:', data)

    useEffect(() => {
        productDetails();
    }, []);

    const products = useSelector((state) => state.cartReducer.cart);
    const { id, title, image, price, category } = products;
    return (
        // <div style={{ display: 'grid' }}>
        //     <div className='sortBtns'>
        //         <select onChange={filterProducts} placeholder='Sort By'>
        //             <option value=''>Sort By Category</option>
        //             <option value='electronics'>Electronics</option>
        //             <option value='books'>Books</option>
        //             <option value='furniture'>Furniture</option>
        //             <option value='fashion'>Fashion</option>
        //         </select>
        //         <select onChange={sorting} placeholder='Sort By'>
        //             <option value=''>Sort By Price</option>
        //             <option value='asc'>Low to High</option>
        //             <option value='desc'>High to Low</option>
        //         </select>
        //     </div>

        //     <div className='bigB'>
        //         {products.map((e) => {
        //             return (
        //                 <div className='bigBox' key={e.id} style={{ width: '30%' }}>
        //                     <Link to={`/products/${e._id}`}>
        //                         <div className='card'>
        //                             <div className='imageBoxxx'>
        //                                 <img
        //                                     style={{ padding: '9%' }}
        //                                     src={e.images}
        //                                     alt={e.name}
        //                                     height='300px'
        //                                     width='300px'
        //                                 />
        //                             </div>
        //                             <div className='content'>
        //                                 <h3
        //                                     style={{
        //                                         height: '60px',
        //                                         overflow: 'hidden',
        //                                     }}
        //                                 >
        //                                     {e.summary}
        //                                 </h3>
        //                                 <div
        //                                     style={{
        //                                         display: 'flex',
        //                                         justifyContent: 'space-between',
        //                                         padding: ' 0% 2%',
        //                                     }}
        //                                 >
        //                                     <p className='desc'>
        //                                         <span>Price: ₹{e.price}</span>
        //                                     </p>
        //                                     <p className='desc'>
        //                                         <span>Category: {e.category}</span>
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </div>
        <div>
            <Navbar />

            <div style={{ display: "flex" }}>
                <div style={{ width: "28%" }}>
                    <Sidebar />
                </div>
                <div style={{ marginTop: "2%", display: "flex", width: "65%", flexWrap: "wrap", gap: "2.5%", justifyContent: "space-evenly" }}>
                    {data.map((e) => {
                        return (
                            <ProductCard name={e.name} price={e.price} images={e.images} id={e._id} />
                        )
                    })}
                </div>
            </div>
            <div style={{ margin: "auto", justifyContent: "center", display: "flex", gap: "35px", }}>
                <p style={{ backgroundColor: "#81BB3F", padding: ".4% .8%", fontSize: "90%", borderRadius: "30px", color: "white" }}>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </div>
            <div style={{
                margin: "auto", width: "88%", display: "flex", height: "250px",
                alignContent: "center", alignItems: "center", marginTop: "5%",
                borderRadius: "37px", backgroundRepeat: "no-repeat", backgroundSize: "cover",
                background: "url(https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-09-55.png)"
            }}>
                <div style={{ margin: "0% 4% 0 15%", borderRight: "2px solid white", height: "90px", paddingRight: "4%" }}>
                    <img style={{ margin: "auto", alignContent: "center" }} height="90px" src="https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/whiteLogo.png" />
                    <div>
                        <p style={{ color: "white", fontWeight: "600", letterSpacing: "12px", margin: "auto", textAlign: "center", marginLeft: "-15%" }}> ARSH </p>
                    </div>
                </div>
                <div style={{ width: "58%", color: "white", fontWeight: "600", fontSize: "140%", lineHeight: "1.2", letterSpacing: "1.1px" }}>
                    <p>At ARSH, we provide all-natural products that your plant needs to grow, be it your home plant, backyard garden, or farm.</p>
                </div>
            </div>

            <div id='footer'>
                <div id='footerLeft'>
                    <div id='row1'>
                        <div id='greenLogo'>
                            <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-07-52.png' />
                        </div>
                        <div className='list'>
                            <h5>ABOUT</h5>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Rentals</p>
                            <p>Customer Products</p>
                        </div>
                        <div className='list'>
                            <h5>HELP</h5>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Warranty</p>
                            <p>FAQ's</p>
                        </div>
                        <div className='list'>
                            <h5>POLICY</h5>
                            <p>Return Policy</p>
                            <p>Terms of Use</p>
                            <p>Privacy & Security</p>
                            <p>Shipping Policy</p>
                        </div>
                    </div>

                    <div id='row2'>
                        <div className='contact'>
                            <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-10-28.png' />
                            <p>No. 55, Anitya Apartment, Ground-B, Thindlu Main Rd, Maruthi Layout, Kodigehalli, Bengaluru, Karnataka 560097</p>
                        </div>
                        <div className='contact'>
                            <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-10-42.png' />
                            <p>info@archpvtltd.com</p>
                        </div>
                        <div className='contact'>
                            <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-10-52.png' />
                            <p>+91 93105 34680</p>
                        </div>
                    </div>
                    <br />

                    <div id='row3'>
                        <p>Copyright © 2021 ARSH theme by AKOI. All Rights Reserved.</p>
                        <p>Terms of Use | Privacy Policy</p>
                    </div>
                </div>
                <div id='footerRight'>
                    <div id='row4'>
                        <p>Be informed!</p>
                        <p>Sign up for newsletter</p>
                        <p>Donec placerat, metus sed consectetur viverra, dolor nisl egestas ligula, ac gravida turpis</p>
                        <input type="text" placeholder='Email' />
                        <button>Submit Now</button>
                    </div>

                    <div id='row5'>
                        <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-11-09.png' />
                        <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-11-19.png' />
                        <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-11-25.png' />
                        <img src='https://raw.githubusercontent.com/Prashant-SL/AKOI/main/client/public/assets/image_2022-06-14_15-11-32.png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
