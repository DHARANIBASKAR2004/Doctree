import React from 'react'
import "./sectionTwo.css"
import {assets} from '../../assets/assets.jsx'

const SectionTwo = () => {
  return (
    <>
    <div className='content'>
      <h2 className='contentheading'>Our Care four You</h2>
      <p className='sectionTwopara' >At Doctree, we are committed to providing exceptional care tailored to meet your individual health needs.Our holistic approach ensures that you receive comprehensive, compassionate, and personalized healthcare services.We prioritize your well-being and are dedicated to supporting you on your journey to optimal health.</p>
      </div>
      <div>
    <div className='content2'>
        <img src={assets.section2} alt="" className='img2'/>

        <div className='para'>

        <h1 className='content2heading'>We create opportunity to reach <br />
        potential</h1>
       
        <p>At Doctree, we believe that everyone deserves the opportunity to achieve their full potential when it comes to health and well-being. Our mission is to provide you with the tools, resources, and support needed to reach your health goals and lead a fulfilling life. We are dedicated to creating a healthcare environment that fosters growth, healing, and continuous improvement. </p>
<div className='sec2box'>
    <div className='boxcontent'>
      <ul>
        <li><p>personal care Assistants</p></li>
      </ul>
      
    </div>
    <div className='boxcontent'>
      <ul>
        <li><p>Financial Aid & Assistance </p></li>
      </ul>
      
    </div>
    <div className='boxcontent'>
      <ul>
        <li><p>Featured Checkups </p></li>
      </ul>
      
    </div>
    <div className='boxcontent'>
      <ul>
        <li><p>Patients Comfortable</p></li>
      </ul>
    </div>
</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default SectionTwo