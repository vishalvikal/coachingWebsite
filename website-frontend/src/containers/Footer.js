import React from 'react';

const Footer = ()=>{

  return(<section class="footer-section">
    <footer class="footer-section__main">
      <div class="footer-section__description"><p>
        Lorem Ipsum is simply 
        dummy text of the printing. 
        </p></div>
      <div className="footer-section__about">  
      <p>
          Lorem Ipsum is simply 
          dummy text of the printing.
        </p></div>
        <div className="footer-section__links">
        <a className="footer-section__link"><i class="fab fa-facebook"></i></a>
        <a className="footer-section__link"><i class="fab fa-twitter-square"></i></a>
        <a className="footer-section__link"><i class="fab fa-youtube"></i></a>
          </div>
    </footer>
  </section>)
}

export default Footer;