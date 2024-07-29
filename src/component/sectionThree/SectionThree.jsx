import React from 'react'
import {assets} from '../../assets/assets.jsx'
import "./SectionThree.css"

export function SectionThree() {
    return (
      <>
        <div class="containerk">
          <div class="cardk">
            <img src={assets.card_1} alt="" width="130px" />
            <h1>24 Hours Service</h1>
            <p>
            At Doctree, we understand that health concerns can arise at any time, which is why we offer 24-hour service to ensure you have access to the care you need, whenever you need it. 
            </p>
          </div>
 
          <div class="cardk">
            <img src={assets.card_2} alt="" width="130px" />
            <h1>Qualified Doctor</h1>
            <p>
            At Doctree, we pride ourselves on connecting you with highly qualified and experienced doctors who are dedicated to providing the best possible care.
            </p>
          </div>
  
          <div class="cardk">
            <img src={assets.card_3} alt="" width="170px" />
            <h1>Good Care</h1>
            <p>
            At Doctree, we understand that finding the right doctor is crucial to your health and well-being. That's why we are dedicated to connecting you.
            </p>
          </div>
  
          <div class="cardk">
            <img src={assets.card_4} alt="" width="190px" />
            <h1>Trustable</h1>
            <p>
            At Doctree, trust is the foundation of our healthcare services. We are dedicated to building and maintaining your trust by providing reliable, transparent, and high-quality medical care.
            </p>
          </div>
        </div>
      </>
    );
  }