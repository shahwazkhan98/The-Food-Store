import React from 'react'
import Call from '../png/phone-call.png'
import Mail from '../png/email.png'
import Location from '../png/location-pin.png'
import YT from '../png/youtube.png'
import Insta from '../png/instagram.png'
import Whatsapp from '../png/whatsapp.png'
import FB from '../png/facebook.png'
import Twitter from '../png/twitter-sign.png'

const About = () => {
  return (
    <>
    <div className="about-section">
      <h1>About This Store</h1>
     <ol>
      <p> A vegetable store is a haven for all those who appreciate the vibrant colors, fresh aromas, and nutritional goodness that vegetables provide. When you step into a well-stocked vegetable store, you'll find yourself surrounded by an enticing array of produce that caters to a wide range of tastes, preferences, and culinary adventures. Let's explore the variety you can expect to find in a typical vegetable store.</p>
      <br />
      <li>Leafy Greens: A vegetable store is incomplete without an assortment of leafy greens. You'll find classics like spinach, lettuce, kale, and Swiss chard, along with more exotic varieties like bok choy, arugula, and watercress. These greens are packed with vitamins, minerals, and antioxidants, making them essential for maintaining a healthy diet.</li>
      <br />
      <li>Root Vegetables: From carrots and beets to radishes and turnips, root vegetables add depth and earthiness to your meals. They come in various shapes, sizes, and colors, offering an interesting visual appeal. Root vegetables are versatile ingredients that can be roasted, mashed, or used in soups and stews.</li>
      <br />
      <li>Cruciferous Vegetables: Broccoli, cauliflower, Brussels sprouts, and cabbage belong to the cruciferous family. These vegetables are known for their unique flavors and numerous health benefits. They are rich in vitamins, fiber, and phytochemicals that support the immune system and help fight inflammation.</li>
      <br />
      <li>Alliums: Onions, garlic, shallots, and leeks fall into the allium category. These aromatic vegetables add depth, complexity, and pungency to a wide variety of dishes. They are often used as a base for soups, sauces, and stir-fries and are known for their immune-boosting and antibacterial properties.</li>
      <br />
      <li>Nightshade Vegetables: Tomatoes, bell peppers, eggplants, and chili peppers are part of the nightshade family. These vibrant vegetables not only provide a burst of color but also offer a range of flavors, from sweet to spicy. They are excellent sources of vitamins, antioxidants, and dietary fiber.</li>
      <br />
      <li>Gourds and Squashes: Pumpkins, zucchinis, butternut squashes, and acorn squashes are popular choices from the gourd family. These vegetables are perfect for hearty stews, creamy soups, or roasted side dishes. They bring a touch of autumnal warmth to any meal and are rich in vitamins A and C.</li>
      <br />
      <li>Exotic Vegetables: Many vegetable stores also feature a section dedicated to exotic or specialty vegetables. These may include items like artichokes, asparagus, fennel, kohlrabi, and heirloom varieties of tomatoes. These unique vegetables add diversity and intrigue to your culinary endeavors, inspiring you to explore new flavors and cooking techniques.</li>
     </ol>
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

export default About
