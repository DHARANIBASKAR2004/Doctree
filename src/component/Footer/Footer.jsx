import React from 'react'
import "./Footer.css" 
import {assets} from '../../assets/assets.jsx'

import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

 function Footer() {
  return (
    <>
      <div className="container_foot">
        <div className="logo">
          <img src={assets.FooterLogo} alt=""  className="foot_h1"/>
          <h1 className="foot_h3">Follow Us</h1>
        </div>
        <div className="inside_con">
          <div className="left_con">
            <div className="card1_foot">
              <p>About Us</p>
              <p>Annual Checkup</p>
              <p>Blog</p>
            </div>

            <div className="card1_foot">
              <p>Get A Digonisis</p>
              <p>How it works</p>
              <p>Privacy Policy</p>
            </div>

            <div className="card1_foot">
              <p>Contact Us</p>
              <p>FAQ's</p>
            </div>
          </div>

          <div className="left_con">
            <div className="card1_foot">
              <p>Aentna</p>
              <p>Health Plan</p>
              <p>Blue Shield</p>
            </div>

            <div className="card1_foot">
              <p>Health Net</p>
              <p>Health Smarth</p>
              <p>ICICI</p>
            </div>
          </div>
          <div className="social">
            <FaFacebook className="facebook"/>
            <FaSquareInstagram className="instagram"/>
            <FaSquareXTwitter className="twitter"/>           
            <IoLogoLinkedin className="linkedin"/>
          </div>

        </div>

      <div className="copy">
        <div className="rights">
            <p>All rights reserved by Alpha 2024</p>
          </div>
          <div className="rights1">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
      </div>
      </div>
      
    </>
  );
}
export default Footer;