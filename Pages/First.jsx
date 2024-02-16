import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function First() {
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([{}]);
    const productElements = [];
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                
                const response = await axios.get('http://localhost:3000/first', {
                    headers: {
                        Authorization: token,
                    },
                });
                setUserDetails(response.data.user);
                setProducts(response.data.prod);

                setLoading(false);
            } catch (error) {
                console.error(error.response.data);
                setLoading(true);
            }
        };
        fetchUserDetails();

    }, [token]);
    useEffect(() => {
        // Listen for changes to the token in local storage
        const handleTokenChange = () => {
            const newToken = localStorage.getItem('token');
            if (newToken !== token) {
                setToken(newToken);
            }
        };

        window.addEventListener('storage', handleTokenChange);

        return () => {
            window.removeEventListener('storage', handleTokenChange);
        };
    }, [token]);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>Welcome, {userDetails.Username}!</h1>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                        {
                            (() => {

                                for (var i = 0; i < products.length; i++) {
                                    console.log(products[i]._id);
                                    const a = products[i]._id;
                                    const b = userDetails._id;
                                    console.log(a);

                                    productElements.push(

                                        <div key={products[i]._id} className='flex flex-col bg-slate-400 my-3 items-center hover:cursor-pointer' >
                                            <div className='' onClick={() => {
                                                window.open(`/products/${a}`, 'blank')
                                            }}>
                                                <img className="py-3 pr-4 pl-4" src={products[i].Image}></img>
                                            </div>
                                            <div>{products[i].Name}</div>
                                            <div>{products[i].ID}</div>
                                            <div>{products[i].Category}</div>
                                            {
                                                <button className='bg-blue-500 text-white' onClick={async () => {
                                                    const response = await axios.post(`http://localhost:3000/addToCart/${a}`, { b })
                                                    if (response.data == "True") {
                                                        alert("Added to cart");
                                                    }
                                                    else {
                                                        alert("Failed");
                                                    }
                                                }}>Add to Cart</button>}
                                        </div>
                                    )

                                }
                                return productElements
                            })()}
                    </div></center>

                </div>
            )}
        </div>
    )
}
export default First;