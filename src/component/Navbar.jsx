import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Telephone from '../png/phone-call.png'
import Telegram from '../png/email.png'
import Cart from '../png/shopping-cart.png'
import Work from '../png/work.png'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'



const Navbar = () => {

  const {cart} = useContext(CartContext)

  return (
    <>
    <div className="top-nav">
      <ul className='top-nav-ul'>
        <li> <img className='png-img' src={Telephone} alt="" /> + 91 9165011223</li>
        <li> <img className='png-img' src={Telegram} alt="" /> info@service.com</li>
        <li> <img className='png-img' src={Work} alt="" /> 3-5 BUSSINESS DAYS DELEVERY & FREE RETURNS  </li>
       
      </ul>
    </div>
      <nav className="navbar navbar-expand-lg ">
      <div className="nav">
        <div className='logo-text'>
          <Link className="navbar-brand" to={"/"} > <h4>THE FOOD STORE</h4></Link>

        </div>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link className="nav-link nav-text " to={"/"} > <p>Home</p></Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text" to={"/about"} > <p>About</p></Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text" to={"/contact"} > <p>Contact</p></Link>

          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text" to={"/cart"}> <p><img className='png-img-icon' src={Cart} alt="" /> <sup>({cart.length})</sup> </p></Link>

          </li>
          
        </ul>
      </div>

    </nav>
    </>
  )
}

export default Navbar
