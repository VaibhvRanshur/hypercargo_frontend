

import { FaWhatsapp, FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import React from 'react';
export default function Footer({ setActivePage }) {
  return (
    <>
    <footer className="footer">
    <div className="footer-links">
      <a href="https://wa.me/+917447886846"target="_blank">
      <img src="/images/whatsapp-icon.png" alt="WhatsApp" className='footer-img'/></a>
      <a href="mailto:hypercargooverseas@gmail.com" target="_blank">
      <img src="/images/mail-icon.png" alt="Email" className='footer-img'/></a>
      <a href="https://www.facebook.com/profile.php?id=61578708361404"target="_blank">
      <img src="/images/facebook-icon.png" alt="Facebook" className='footer-img'/></a>
      <a href="https://x.com/HyperC_overseas?t=knmy-4K4vUZhezhfDlUfrw&s=08"target="_blank">
      <img src="/images/x.png" alt="X" className='footer-img'/></a> 
      <a href="https://www.instagram.com/hypercargooverseas?igsh=MXVraWFtYXQ0Zm01MQ=="target="_blank">
      <img src="/images/instagram-icon.png" alt="instagram" className='footer-img'/></a>
      <a href="https://www.linkedin.com/in/hypercargo-overseas-032171376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank">
      <img src="/images/linkedin-icon.png" alt="linkedin" className='footer-img'/></a>
    </div>
    {/* <div className='foot-nav'>
      <button onClick={() => setActivePage('home')}className='footer-contact-btn'>Home</button>
       <button onClick={() => setActivePage('about')}className='footer-contact-btn'>About</button>
       <button onClick={() => setActivePage('products')}className='footer-contact-btn'>Products</button>
       <button onClick={() => setActivePage('contact')}className='footer-contact-btn'>Contact</button>
     </div> */}
    <div className='foot-content'>
     <div className='foot-logo' >
       <img src="/images/company-logo.png" alt="HyperCargo Overseas Logo" className="footer-logo" />
       <div className='foot-address'>
        <p> <span>𖡡</span> Building No.-1, Flat No.–1505,</p>
        <p>Joyville Hadapsar Annexe, </p>
        <p>Shewalewadi, Tal-Haveli, </p>
        <p>Pune-412307</p>
       </div>   
     </div> 
     
     <div className='footer-contact'>
       <h2>Contacts Info</h2>
       <p className='footer-para'><span className=' '>📞</span>+91 7447886846</p>
       <p className='footer-para' ><span className='footer-sym'>📞</span>+91 7887445772</p>
        <div className='footer-mail'>
       <p><span className='footer-sym'>✉︎</span> hypercargooverseas@gmail.com</p>
     </div>
     </div>
    
    </div>
     <p class="footer-copyright">© 2025 HyperCargo Overseas. All rights reserved</p>

  </footer></>

);
}

// import { FaWhatsapp, FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-icons">
//         <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
//         <img src="/images/whatsapp-icon.png" alt="WhatsApp" className='footer-img'/>
//           <FaWhatsapp />
//         </a>
//         <a href="mailto:info@hypercargo.com">
//           <FaEnvelope />
//         </a>
//         <a href="https://facebook.com/hypercargo" target="_blank" rel="noopener noreferrer">
//           <FaFacebook />
//         </a>
//         <Link to="/contact">
//           <FaPhone />
//         </Link>
//       </div>
//       <p className="address">© 2025 HyperCargo Overseas. All rights reserved.</p>
//     </footer>
//   );
// }
