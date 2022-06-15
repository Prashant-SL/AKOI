import axios from "axios";
import React, { useEffect, useState } from "react";
import { setCart } from '../Redux/actions/cartActions';
import Navbar from './Navbar';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    var [state, setState] = useState([]);
    const dispatch = useDispatch();
    const fetchCart = async () => {
        let response = await axios.get('http://localhost:4500/cart');
        let resp = response.data;
        setState([...resp]);
        dispatch(setCart(resp));
    };
    useEffect(() => {
        fetchCart();
    }, []);
    var result = useSelector((state) => state.cartReducer.cart);
    return (
        <div>
            <Navbar />
            <h2 style={{ color: "#81BB3F", textAlign: "center", marginTop: "5%" }}>Cart Summary</h2>
            {
                result.map((e) => {
                    return (
                        <div style={{
                            display: "flex", height: "250px", width: "50%",
                            alignItems: "center", margin: "2% auto",
                            justifyContent: "space-around",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        }}>
                            <div style={{ width: "25%" }}>
                                <img width="90%" src={e.images} />
                            </div>
                            <div style={{ display: "grid" }}>
                                <h3> Product: {e.name}</h3>
                                <h3>Price: {e.price}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <button class="button-25" onClick={() => {
                alert("Purchase Successful")
            }}>Buy Now</button>
        </div >
    )
}
export default Cart;