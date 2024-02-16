import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams to access URL parameters
import axios from 'axios'; // Axios for making HTTP requests

const ProductDetail = () => {
  const { productId } = useParams(); // Accessing productId from URL
  const [product, setProduct] = useState(null);
  console.log(productId)  
  useEffect(() => {
    // Fetch product details from backend
    axios.get(`http://localhost:3000/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]); // Fetch details whenever productId changes

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.Name}</h2>
          <p>ID: {product.ID}</p>
          <p>Category: {product.Category}</p>
          <p>Description: {product.Description}</p>
          {/* Add other product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
