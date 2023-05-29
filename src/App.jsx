import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { ProductProvider } from './context/product/ProductContext'
import ProductContainer from './pages/ProductContainer'
import { CartProvider } from './context/cart/CartContext'

const App = () => {
  return (
    <>
    <Router>
     <ProductProvider>
     <CartProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/productContainer' element ={<ProductContainer/>}/>
     </Routes>
     </CartProvider>
     </ProductProvider>
    </Router>
    </>
  )
}

export default App
