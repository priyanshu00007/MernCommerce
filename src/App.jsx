import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from "./Components/Footer/Footer";
import menbanner from "./Components/Assets/banner_mens.png";
import womenbanner from "./Components/Assets/banner_women.png";
import kidsbanner from "./Components/Assets/banner_kids.png";
import ShopContextProvider from './Contexts/ShopContext';

const App = () => {

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>  
          <Route path='/' element={<Shop />} />
          <Route path='/Mens' element={<ShopCategory banner={menbanner} category="Men" />} />
          <Route path='/Womens' element={<ShopCategory banner={womenbanner} category="Women" />} />
          <Route path='/Kids' element={<ShopCategory banner={kidsbanner} category="Kid" />} />
          <Route path='/Product/:ProductId' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default App;
