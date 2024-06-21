import react from 'react';
import ReactDom  from 'react-dom/client'
import './index/css'
import App from './App';
import ShopContextProvider from './Contexts/ShopContext';


const root = ReactDom.createRoot(document.getElementById("root"));
root.render
(
    <ShopContextProvider>
    <App/>
    </ShopContextProvider>
);