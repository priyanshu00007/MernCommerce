import React, { useContext } from 'react';
import { ShopContext } from '../Contexts/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from "../Components/productDisplay/productdisplay"

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
