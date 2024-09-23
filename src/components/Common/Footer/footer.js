import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-logo" onClick={() => window.scrollTo(0, 0)}>
        CryptoScreener<span></span>
      </h2>

      <div className="footer-contact">
        <p>Contact: <a href="mailto:dabraharshit@gmail.com">dabraharshit@gmail.com</a></p>
      </div>

      
    </div>
  );
}

export default Footer;
