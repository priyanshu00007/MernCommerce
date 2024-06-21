import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './itemm.css'; // Make sure the CSS file path is correct

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-new-price">
          ${new_price.toFixed(2)}
        </div>
        <div className="item-old-price">
          ${old_price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Item;
