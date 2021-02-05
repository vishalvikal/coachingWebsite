import React from 'react';
import { authuser } from '../store/actions/auth'
const Footer = ()=>{
authuser('singin', {});
  return(<section className="footer-section">
    <footer className="footer-section__main">
      <div className="footer-section__description"><p>
        Lorem Ipsum is simply 
        dummy text of the printing. 
        </p></div>
      <div className="footer-section__about">  
      <p>
          Lorem Ipsum is simply 
          dummy text of the printing.
        </p></div>
        <div className="footer-section__links">
        <a className="footer-section__link"><i className="fab fa-facebook"></i></a>
        <a className="footer-section__link"><i className="fab fa-twitter-square"></i></a>
        <a className="footer-section__link"><i className="fab fa-youtube"></i></a>
          </div>
    </footer>
  </section>)
}

export default Footer;