import React from 'react'
import {assets} from '../../assets/assets.jsx'
import "./SectionOne.css" 


const SectionOne = () => {
  return (
        <>
            <div className='firstsec1div1'>
            <h1 className='firstsec1div1heading'>WE PROVIDE BEST <br />
            HEALTHCARE</h1>
            <p>Welcome to Doctree, where your health and well-being are our top priorities. We are dedicated to providing you with the highest quality healthcare services, tailored to meet your unique needs. Our platform is designed to make healthcare accessible, convenient, and efficient for everyone.
            Connect with a diverse network of highly qualified and experienced doctors across various specialties.
            Our doctors are committed to delivering personalized care and expert medical advice.
            </p>
<button>BOOK NOW</button>
            </div>
        <div>
        <img className="image1"src={assets.section1img} alt="" />
        </div>
        </>
    
  )
}

export default SectionOne