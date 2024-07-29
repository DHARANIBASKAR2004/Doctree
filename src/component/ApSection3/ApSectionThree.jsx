import React from 'react'
import './ApSectionThree.css'
import { assets } from '../../assets/assets'


const ApSectionThree = () => {
  return (
    <>
    <div className='aboutSec3'>
        <div className='aboutSec3content'>
        <h1>Join Us</h1>
        <p>Experience the future of healthcare management with Doctree. Whether you are a patient seeking quality medical care or a healthcare provider looking to optimize your practice, Doctree is here to support you. Join us in our mission to make healthcare more efficient, accessible, and patient-centered.
        We invite you to be a part of the Doctree community, where innovation meets healthcare to create a seamless and efficient experience for all users. Whether you are a patient seeking high-quality medical care or a healthcare provider looking to optimize your practice, Doctree offers a comprehensive solution tailored to your needs.
        </p>
</div>
        <img src={assets.Apsec3} alt="content" />

    </div>
    </>
  )
}

export default ApSectionThree