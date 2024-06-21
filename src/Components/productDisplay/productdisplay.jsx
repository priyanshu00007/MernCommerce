import React from 'react';
import "../productDisplay/Productdisplay.css";

const ProductDisplay = ({ product }) => {
  return (
    <div className='product-display'>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-prices">
          <div className="product-new-price">
            ${product.new_price.toFixed(2)}
          </div>
          <div className="product-old-price">
            ${product.old_price.toFixed(2)}
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
