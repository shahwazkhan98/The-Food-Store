import {Link} from 'react-router-dom'
import ContactVideo from '../png/contact-video.mp4'
import Call from '../png/phone-call.png'
import Mail from '../png/email.png'
import Location from '../png/location-pin.png'
import YT from '../png/youtube.png'
import Insta from '../png/instagram.png'
import Whatsapp from '../png/whatsapp.png'
import FB from '../png/facebook.png'
import Twitter from '../png/twitter-sign.png'

const Contact = () => {
  return (
    <>
    <div className="form-container">
        <div className="contact-us">
          <h1>Contact Us </h1>
          <p>Please fill this form in a decent manner</p>
          <video src={ContactVideo} height="450" loop autoPlay muted></video>
        </div>
        <form className="contact-form">
          <div className="mb-2 ">

            <label htmlFor="exampleInputEmail1" className="form-label">Full Name </label>
            <input type="text" className="form-control rounded-0 full-name"  />
           
          </div>

          <div className="mb-1 ">

            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control rounded-0 email"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

          </div>
          <div className="mb-2 ">
          <label htmlFor="" className="form-label">Message</label>
            <textarea name="text" id="" cols="43" rows="4"></textarea>

          </div>

          <button className="btn form-submit ">Submit</button>

        </form>
      </div>

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

export default Contact
