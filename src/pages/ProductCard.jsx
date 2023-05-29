import React, { useContext } from 'react'
import Cart from '../png/cart.png'
import CartContext from '../context/cart/CartContext'

const ProductCard = ({product}) => {

  const {id , title , price , image } = product

  const {dispatch} = useContext(CartContext)

  const handleAdd = (product) =>{
    dispatch({
      type : "ADD_CART",
      payload : product
    })
  }

  return (
    <>
      <div className="product-card">
            <img src={image} alt="" />
            <h6>{title}</h6>
            <p className='price'>&#8377; {price}</p>
            <button onClick={()=>handleAdd(product)}>Add to Cart <img className='cart-icons' src={Cart} alt=""/></button >
        </div>       
    </>
  )
}

export default ProductCard
