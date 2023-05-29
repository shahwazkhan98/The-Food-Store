import React, { useContext, useState } from 'react'
import CartContext from '../context/cart/CartContext'
import Cross from '../png/close.png'
import Plus from '../png/plus.png'
import Minus from '../png/minus.png'

const CartItem = ({ cartItem }) => {
  const { id, title, image, price} = cartItem;
  const { dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  const [quantity, setQuantity] = useState(0);
  const [mprice, setMprice] = useState(price);

  const increaseQua = () => {
    setQuantity(quantity + 1);
    setMprice((quantity + 1) * price);
  };
  const decreaseQua = () => {
    setQuantity(quantity - 1);
    setMprice((quantity - 1) * price);
  }

  return (
    <div>
      <div className="product-nav">

      <ul>
        <li>&nbsp;</li>
        <li><button onClick={() => handleRemove(id)}> <img className='cross-icon' src={Cross} alt="" /></button></li>
        <li><img className='product-image' src={image} alt="" /></li>
        <li><h6>{title}</h6></li>
        <li >
        

          <p> &#8377; {parseFloat(mprice).toFixed(2)} </p>
          </li>

        <li className='qty-sec'>
        <button onClick={() => decreaseQua(id)}><img className='qty-icons' src={Minus} alt="" /></button>
          {quantity}
        <button onClick={() => increaseQua(id)}><img className='qty-icons' src={Plus} alt="" /></button>
        </li>

        {/* <li></li> */}
      </ul>
     </div>   

    </div>
  )
}

export default CartItem
