import React from 'react';
import './SectionFour.css';
import { assets } from '../../assets/assets';

const SectionFour = () => {
  return (
    <div>
        <div className="mainsections">
          <img className='aboutsecimg' src={assets.section1} alt="" />
          <div className='aboutparadiv'>
          <p className='abouttext'> 
            <h1 className='secfourheading'>About us</h1>
 <h3 className='secfourheading3'>WE PROVIDE BEST 
 HEALTHCARE</h3>
 Welcome to Doctree, your premier destination for top-quality healthcare services. Our mission is to bridge the gap between healthcare providers and patients by offering a seamless, efficient, and compassionate healthcare experience. We are committed to enhancing patient care through innovation, accessibility, and a patient-centered approach.
 At Doctree, we believe that everyone deserves access to the best healthcare. Our platform is designed to make healthcare services more accessible and convenient, ensuring that you receive the care you need, when you need it. We aim to
 Connect Patients with Qualified Doctors Our extensive network of highly qualified and experienced doctors spans various specialties, ensuring you find the right healthcare provider for your needs.</p>
</div>
        </div>
    </div>
  );
}

export default SectionFour;