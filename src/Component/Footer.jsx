import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <div className='w-100 bg-light text-center text-bg-light'>
      <p>© 2024 ShubhamTech . All Rights Reserved | Terms and Condition <span className='icon fs-3'><a href=""><FaInstagram className='iconi' /></a><a href="https://www.facebook.com/profile.php?id=100026431508910&mibextid=ZbWKwL" target='_blank'><FaFacebookF className='iconi' /></a><a href="https://wa.me/qr/F22XWB3ZXGMZP1" target='_blank'><FaWhatsapp className='iconi' /></a><a href="https://www.linkedin.com/in/shubham-rawat-b58216281" target='_blank'><CiLinkedin className='iconi'/></a><a href="https://github.com/Shubham-1975" target='_blank'><FaGithub className='iconi' /></a></span></p>
      
    </div>
  )
}

export default Footer
