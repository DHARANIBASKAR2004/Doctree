import React from 'react'
import './Cards.css'
import {assets} from "../../assets/assets.jsx"



const Details = {
  Name:"Dr.Michel Jordan",
  Category:"Surgeon , Cardiologist",
  Education:"Fellowship(Dental Surgeon),MS(Medicine) , FCPS , MBBS",
}

const Cards = () => {
  return (
   <>
   <div className='cardsparentdivbg'>
   <div class="cardsdivbg">
    <div className='cardsdivbgwhite'>
    <div className='cardsdivbgimg'>

    </div>
    </div>
   </div>
   <div className='cardheadingdiv'>
  <div className="categoryo">
    <h3 className="categoryoheading">{name}</h3>
    <div className="doctor-parentdiv">
      <div className="doctor-cardsyo">
        {doctors.map((doctor, idx) => (
          <div key={idx} className="doctor-cardyo">
            <img src={doctor.image} alt={doctor.name} />
            <p>{doctor.name}</p>
            <p>
              <b>Specialist: </b>
              {doctor.specialist}
            </p>
            <p>{doctor.experience} years experience</p>
            <p>
              <b>Hospital:</b>
              {doctor.hospital}
            </p>
            <p>
              <b>Location: </b>
              {doctor.location}
            </p>
            <button className="consult-buttonyo">Get Consult</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);


   </div>
   </div>
   </>
  )
}

export default Cards

