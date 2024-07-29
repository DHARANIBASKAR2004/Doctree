import React from 'react';
import "./SectionFive.css";
import { assets } from '../../assets/assets';

const SectionFive = () => {
  return (
    <div className='framey'>
      <div className='image-containery'>
        <img className='framesy' src={assets.Frames} alt="Frames" />
        <h3 className='overlay-texty'>
        <h2 className='framesyheading'>YOUR HEALTH IS OUR PRIORITY</h2>
        <p className='framespara'>
        At Doctree, your health and well-being are at the heart of everything we do. We are committed to providing you with the best healthcare services, tailored to meet your individual needs. Our mission is to ensure that you receive high-quality, accessible, and compassionate care, making your health our top priority.
        </p>
        </h3>
      </div>
    </div>
  );
}

export default SectionFive;