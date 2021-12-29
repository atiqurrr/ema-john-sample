import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
const first10 = fakeData.slice(20, 30);
const [product, setProduct] = useState(first10);
const [cart, setCart] = useState([]);
const handleAddProduct = (pd) =>{
     setCart([...cart, pd])
}
      return (
            <div className='shop-container'>
                  <div className='product-container'>
                  <h1>Product Leanth : {product.length}</h1>
               
               
                     {
                           product.map(pd => <Product btn={handleAddProduct} pd={pd}></Product>)
                     }
                  
                  </div>
                  <div className='card-container'>
                     <Cart cart={cart}></Cart>
                  </div>

            </div>
      );
};

export default Shop;