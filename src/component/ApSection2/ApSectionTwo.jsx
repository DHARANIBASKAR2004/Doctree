import React from 'react'
import './ApSectionTwo.css'
import { assets } from '../../assets/assets'

const ApSectionTwo = () => {
  return (
    
    <>
    <div className='apsec2'>
      <img src={assets.Sec2} alt="Docter" />
      <div className='apsec2p'>
      <h1>Our <span>Mission</span></h1>
      
      <p>At Doctree, our mission is to transform the healthcare experience by creating a seamless, efficient, and patient-centered platform that connects patients with healthcare providers. We are dedicated to leveraging technology to bridge the gap between doctors and patients, ensuring that everyone has access to high-quality medical care when they need it most.
We aim to empower patients by providing them with easy access to healthcare services. Our platform allows patients to book appointments, choose between online and offline consultations, and manage their healthcare needs from a single, intuitive interface. We believe that by simplifying the process, we can encourage more people to take an active role in their health and well-being.
</p>

</div>
    </div>
    
    </>
  )
}

export default ApSectionTwo