
import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
      const { name, img, seller, price, stock } = props.pd;
      const pd = props.pd;
      const btn = props.btn;
      return (
            <div className='product'>
                  <div>
                        <img src={img} alt="" />
                  </div>


                  <div>
                        <h2 className='name'>{name}</h2>
                        <h3>By : {seller}</h3>
                        <h2>Price : {price}</h2>
                        <p>Only {stock} left in stock-Order soon</p>
                        <button onClick={()=>btn(pd)} className='main-button'> <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                  </div>

            </div>
      );
};

export default Product;



