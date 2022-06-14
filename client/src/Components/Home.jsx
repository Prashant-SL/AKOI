import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../Redux/actions/cartActions';
import axios from 'axios';
import Sidebar from './Sidebar';

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

    // const filterProducts = (el) => {
    //     let criteriaToFilter = el.target.value;
    //     let updated = filteredData.filter((el) => {
    //         if (criteriaToFilter === 'electronics') {
    //             return el.category === 'electronics';
    //         } else if (criteriaToFilter === 'fashion') {
    //             return el.category === 'fashion';
    //         } else if (criteriaToFilter === 'books') {
    //             return el.category === 'books';
    //         } else if (criteriaToFilter === 'furniture') {
    //             return el.category === 'furniture';
    //         } else if (criteriaToFilter === '') {
    //             return el;
    //         }
    //     });
    // setFilteredData(updated);
    // };

    // const sorting = (e) => {
    //     let sortCriteria = e.target.value;
    //     let updated = filteredData.sort((a, b) => {
    //         if (sortCriteria === 'asc') {
    //             return a.price - b.price;
    //         } else if (sortCriteria === 'desc') {
    //             return b.price - a.price;
    //         } else if (sortCriteria === '') {
    //             return;
    //         }
    //     });
    // setFilteredData([...updated]);
    // };

    // dispatch(setProducts(filteredData));

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
        <>
            {/* <Sidebar /> */}
            <>
                {data.map((e) => {
                    return (
                        <>
                            <img src={e.images} />
                            <h1>{e.name}</h1>
                        </>
                    )
                })}
            </>

        </>
    );
};

export default Home;
