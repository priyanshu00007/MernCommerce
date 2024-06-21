import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Contexts/ShopContext';
import Item from '../Components/Items/Item';
import Dropdown_icon  from "../Components/Assets/dropdown_icon.png"

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  // Debugging console logs
  console.log("all_product:", all_product);
  console.log("Props Category:", category);

  // Ensure all_product is an array and category is valid
  if (!Array.isArray(all_product) || !category) {
    console.error("Invalid data or category");
    return null;
  }

  const filteredProducts = all_product.filter(item => item.category === category.toLowerCase());

  return (
    <div className="shopcategory">
      <img className='ShopCategoryBanner' src={banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={Dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className='ShopCategory-Loadmore'>
            Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
