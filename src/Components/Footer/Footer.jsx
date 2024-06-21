import React from "react";
import "../Footer/Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_logo from "../Assets/instagram_icon.png";
import Pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlogo">
        <img src="" alt="" />
        <p>Shopper</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="FooterSocial">
        <div className="FooterIconsContainer">
          <img src={instagram_logo} alt="" />
        </div>
        <div className="FooterIconsContainer">
          <img src={Pinterest} alt="" />
        </div>
        <div className="FooterIconsContainer">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="FooterCopywrite">
        <hr />
        <p>Copywrite@2023 - ALl Rights are Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
