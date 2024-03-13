import React from 'react'
import './style.scss'
import logo from '../../assets/images/logo.svg'

export const Footer = () => {
  return (
    <footer>
     <div className="footer-wrapper__container">
     <div className="footer-logo">
     <img src={logo} alt="logo" />
     </div>
     <div className="footer-links">
      <h5>Product</h5>
      <ul>
        <li><a href="/">Overview</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Marketplace</a></li>
        <li><a href="/">Features</a></li>
        <li><a href="/">Integrations</a></li>
      </ul>
     </div>
     <div className="footer-links">
      <h5>Company</h5>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/">Team</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Careers</a></li>
      </ul>
     </div>
     <div className="footer-links">
      <h5>Connect</h5>
      <ul>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Newsletter</a></li>
        <li><a href="/">Linkedin</a></li>
      </ul>
     </div>
     </div>
    </footer>
  )
}
