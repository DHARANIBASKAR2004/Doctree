
import React from 'react';
import "./SecpSectinOne.css";
import { assets } from '../../assets/assets';
import { IoSearchOutline } from "react-icons/io5";



 function SecpSectionOne() {
    return (
      <>
        <div className="find-container">
          <img className="findmain" src={assets.find1img} alt="" />
          <img className="findfirst" src={assets.find2img} alt="" />
          <p className="find-para">
          Welcome to Doctree's Find a Doctor page, your one-stop solution to easily search for and book appointments with healthcare professionals. Our user-friendly interface is designed to help you quickly find the right doctor for your needs and schedule a consultation at your convenience.
          </p>
  
        </div>
      </>
    );
  }
  export default SecpSectionOne;