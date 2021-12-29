import React from 'react';

const Cart = (props) => {
      const cart = props.cart;
      const total = cart.reduce((total, prd) => total + prd.price,  0);
      let shiping = 0;
       if (total < 50){
            shiping = 0;  
       }

       else if (total >= 1000){
            shiping = 4.99;
       }
      else if (total > 1000){
            shiping = 10;
      }
      else if (total > 1001){
            shiping = 20
      }
      else if (total > 2000){
            shiping = 30;
      }

      
      else if (total > 2001){
            shiping = 40;
      }
      
      else if (total > 3000){
            shiping = 50;
      }

      
      else if (total > 3001){
            shiping = 60;
      }

      
      else if (total > 4000){
            shiping = 70;
      }

     const text = Math.floor(total/10);

      return (
            <div>
                 <h2>Order Summary</h2> 
                 <h3>Items Order : {cart.length}</h3>
                 <h3>Total Price : {Math.round(total)}</h3>
                 <h3>Shiping Cost : {Math.floor(shiping)}</h3>
                 <h3>Text + Vat : {text}</h3>
                 <h3>price + v + s : {Math.round(total + shiping + text)}</h3>
                
            </div>
      );
};

export default Cart;