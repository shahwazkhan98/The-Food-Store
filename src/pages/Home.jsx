import {Link} from 'react-router-dom'

import Search from '../png/search.png'
import Shipped from '../png/shipped.png'
import Customer from '../png/customer-service.png'
import Medal from '../png/medal.png'
import Diet from '../png/diet.png'
import Cat1 from '../images/category-1.jpg'
import Cat2 from '../images/category-2.jpg'
import Cat3 from '../images/category-3.jpg'
import Cat4 from '../images/category-4.jpg'
import Cat from '../images/category.jpg'
import YT from '../png/youtube.png'
import Insta from '../png/instagram.png'
import Whatsapp from '../png/whatsapp.png'
import FB from '../png/facebook.png'
import Twitter from '../png/twitter-sign.png'
import Video from '../png/video.mp4'
import Back4 from '../images/background.jpg'
import Call from '../png/phone-call.png'
import Mail from '../png/email.png'
import Location from '../png/location-pin.png'
import Bags from '../png/bags.png'
const Home = () => {
  return (
    <>
    <div className='bg-1'>
     <div className="bg-1-text">
     <h1>HEATHY FRESH</h1>
    <div className="headline3">  <h3>BIG DEAL</h3></div>
     <p>Introducing the vibrant and nutritious vegetable, kale! Packed with an impressive array of vitamins, minerals, and antioxidants, kale is a powerhouse of health benefits. This leafy green is renowned for its rich vitamin C content, which strengthens the immune system and promotes healthy skin. Its high fiber content aids digestion and supports weight management, while its abundant vitamin K contributes to bone health. Additionally, kale's antioxidants help fight inflammation and protect against chronic diseases. With its versatile nature, kale can be enjoyed in salads, sautés, smoothies, and more, making it an excellent choice for those seeking a delicious and wholesome addition to their diet.</p>
      <div className="input-section">
        <input type="text" placeholder='search your menu' />
        <button> 
          <img className='png-img-icon' src={Search} alt="" />
          </button>
      </div>
        <div className="social-section">
          <img src={Insta} alt="" />
          <img src={FB} alt="" />
          <img src={Whatsapp} alt="" />
          <img src={Twitter} alt="" />
          <img src={YT} alt="" />
        </div>
     </div>
     
    </div>

    {/* Second Section */}


    <div className="second-section">
      <div className="icon-section">
      <div className="img-sec sec-1" > 
        <img className='icon-section-icons' src={Shipped} alt="" />
        </div>
        <h6>FREE SHIPPING</h6>
        <p>ON ORDER OVER &#8377;100</p>
      </div>

      <div className="icon-section">
      <div className="img-sec sec-2"> 
        <img className='icon-section-icons' src={Diet} alt="" />
        </div>
        <h6>LWYS FRESH</h6>
        <p>PRODUCT WELL PACKAGE</p>
      </div>

      <div className="icon-section">
        <div className="img-sec sec-3"> 
        <img className='icon-section-icons' src={Medal} alt="" />
        </div>
        <h6>SUPERIOR QULITY</h6>
        <p>QUALITY PRODUCTS</p>
      </div>

      <div className="icon-section">
      <div className="img-sec sec-4"> 
        <img className='icon-section-icons' src={Customer} alt="" />
        </div>
        <h6>Support</h6>
        <p>24/7 SUPPORT</p>
      </div>
    </div>


    {/* Third Section */}

    <div className="third-section">
      <span className="cat-1">
      <div className="cat">
      <img  src={Cat1} alt="" />
      <h4>Fruits</h4>
      </div>
      <div className="cat">
        
      <img src={Cat2} alt="" />
      <h4>Vegetable</h4>
        
      </div>
      </span>

      <span className="cat-2">
        <div>
          <h3>Vegetable</h3>
          <p>Protect the health of every home</p>
          <Link to={"/productContainer"}> <button>Shop now </button></Link>
        </div>
        <img src={Cat} alt="" />
      </span>

      <span className="cat-1">
      <div className="cat">
      <img src={Cat3} alt="" />
      <h4>Juices</h4>
        
        </div>
        <div className="cat">
      <img src={Cat4} alt="" />
      <h4>Dried</h4>  
      </div>
        
      </span>
    </div>


    {/* Fourth Section */}

    <div className="fourth-section">
    <div className="food-section">
    <h1>SAVE UP TO 20%</h1>
    <h2>Organic Foods</h2>
    <p>Start your aily shopping with some Organic Foods</p>
    <button>Order Now</button>
    </div>

    </div>

    {/* Five Section */}

    <div className="five-section">

    <span className="vid-sec1">
      <video src={Video} height="256" loop autoPlay muted ></video>
     </span>

     <span className='mail-sec1'>
      <h2>Subcribe to our Newsletter</h2>
      <p>Get e-mail updates about our latest shops and special offers</p>
      <div>
      <input type="email" placeholder='enter your email'/>
      <button>Subscribe</button>
      </div>
     </span>

    </div>

    {/* Footer */}
    <footer>
      <ul className='ul-sec1'>
        <h6>Quicks Links</h6>
        <li>Home</li>
        <li>Shop</li>
        <li>Orders</li>
        <li>Shopping Cart</li>
        <li>Wishlist</li>
      </ul>

      <ul className='ul-sec2'>
      <h6>Information</h6>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Terms and Services</li>
        <li>Contact Us</li>
      </ul>

      <ul className='ul-sec3'>
      <h6>Categories</h6>
      <li>Fruits</li>
      <li>Vegetables</li>
      <li>Oganic Foods</li>
      <li>Diet Food</li>

      </ul>

      <ul className='ul-sec4'>
      <h6>About Store</h6>
      <li> <img className='png-img' src={Call} alt="" /> +91 9123456789</li>
      <li> <img className='png-img' src={Mail} alt="" /> info@xyzgmail.com</li>
      <li> <img className='png-img' src={Location} alt="" /> 37/6 Landyord Town City , India</li>
      <li className='footer-icons-section'> 
        <img className='footer-icons' src={FB} alt="" />
        <img className='footer-icons' src={YT} alt="" />
        <img className='footer-icons' src={Whatsapp} alt="" />
        <img className='footer-icons' src={Twitter} alt="" /> 
        <img className='footer-icons' src={Insta} alt="" /></li>
      </ul>
    </footer>

    </>
  )
}

export default Home
