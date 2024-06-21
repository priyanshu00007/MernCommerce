import React from 'react';
import "./Breadcrums.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className='breadcrumbs'>
      Home <img src={arrowIcon} alt="arrow" /> Shop <img src={arrowIcon} alt="arrow" /> {product.category} <img src={arrowIcon} alt="arrow" /> {product.name}
    </div>
  );
};

export default Breadcrumbs;
