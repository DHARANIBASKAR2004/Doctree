import React from 'react';
import './SpSectionThree.css';
import { assets } from '../../assets/assets';

const SpSectionThree = () => {
  return (
    <div>
        <div className="spsectionThreemain">
          <img className='spsectionThreeimage' src={assets.FDDoct} alt=""  />
          <p className='spsectionpThreepara'>
 <h1 className='spsection3heading'>WE PROVIDE BEST 
 HEALTHCARE</h1>
 At Doctree, we are committed to delivering the highest standard of healthcare services. Our platform is designed to ensure that you receive the best possible care, whether you are booking an online consultation or visiting a doctor in person. Here's what makes our healthcare services stand out.
 Connect with a vast network of experienced and qualified doctors across various specialties.
Find doctors who are leaders in their fields, ensuring you receive expert care.
Get personalized treatment plans tailored to your specific health needs.
Benefit from detailed consultations where doctors take the time to understand your health concerns.
Access healthcare from the comfort of your home with our secure and reliable online consultation services.
Use video calls, chat, or phone consultations to connect with your doctor.</p>
        </div>
    </div>
  );
}

export default SpSectionThree;