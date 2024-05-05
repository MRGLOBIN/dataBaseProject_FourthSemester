import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
  return (
    <body>
      <div class="footerContainer">
        
          <div class="footerNav">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">HelpDesk</a></li>
              <li><a href="">Advisory Services</a></li>
            </ul>      
            </div>
          <div class="footerBottom">
          <p>Copyrights © 2024 Air University Islamabad</p>
          </div>  
      </div>
    
    </body>
   );
}

export default Footer;
