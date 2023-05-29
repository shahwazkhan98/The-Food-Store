import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../context/product/ProductContext'

const ProductContainer = () => {

    const {products} = useContext(ProductContext)


  return (
    <>
        <h1 className='headline'>Your Vegetable Here </h1>
    <div className="product-container">
    {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
    </div>
      
    </>
  )
}

export default ProductContainer
