
import React from 'react'
import './ApSectionOne.css'
import { assets } from '../../assets/assets'



export function ApSectionOne() {
  return (
    <>
      <div className="img-containerki">
        <img className="main-imgki" src={assets.abt_main} alt="" />
        <img className="first-imgki" src={assets.abt2} alt="" />
        <p className="img-paraki">
        Welcome to Doctree, an innovative healthcare management system designed to revolutionize the way doctors and patients interact. At Doctree, we believe that quality healthcare should be accessible, convenient, and efficient. Our platform is dedicated to bridging the gap between healthcare providers and patients, ensuring a seamless experience from registration to consultation.
        </p>
        <img className="sec-imgki" src={assets.abt3} alt="" />
      </div>
    </>
  );
}