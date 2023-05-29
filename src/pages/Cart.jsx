import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../png/arrow.png'
import CartContext from '../context/cart/CartContext'
import CartItem from '../component/CartItem'

const Cart = () => {


  const {cart} = useContext(CartContext)

  const total = cart.reduce((p,c)=>{
      return p + c.price
  },0)


  return (
    <>
     <div className="cart-container">
      <ul>
        <li> <Link to={"/productContainer"}><button> <img className='arrow-icon' src={Arrow} alt="" /> Back To Shopping </button></Link> </li>
        {/* <li>&nbsp;</li> */}
        {/* <li>&nbsp;</li> */}
        <li>Vegetable</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Quantity</li>
    
      </ul>
     </div>
    {
      cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)  
    }
     

     <div className='total-footer'>
      <p> Total Amount =
        &nbsp;
         &#8377; {total}
        </p>
     </div>
    </>

  )
}

export default Cart
