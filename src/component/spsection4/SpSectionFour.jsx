import React from 'react'
import './SpSectionFour.css'
import { slide1,slide2 } from '../../assets/assets.jsx'


const row1 = [
  slide1.cmp1,
  slide1.cmp2,
  slide1.cmp3,
  slide1.cmp4,
  slide1.cmp5,
  slide1.cmp6,
  slide1.cmp7,
  slide1.cmp8,
  slide1.cmp9,
  slide1.cmp10,
  

]

const row2 =[
slide2.cmp11,
slide2.cmp12,
slide2.cmp13,
slide2.cmp14,
slide2.cmp15,
slide2.cmp16,
slide2.cmp17,
slide2.cmp18,
slide2.cmp19,

]



const SpSectionFour = () => {
  return (
    <>
    <h1 className='sphead'>Our Sponsers</h1>
    <p className='sppara'>We are immensely grateful for the generous support of our sponsors. Their commitment and contributions have played a vital role in making our event a grand success. <br /> Each sponsor has brought unique value, ensuring that we can deliver an exceptional experience to our audience.</p>


    
    <div className='sponsors'>
      <div className='marquee marquee-left'>
        <div className='marquee-group'>
          {row1.map((el, index) => (
            <div className='image-group' key={index}>
              <img src={el} alt={`Slide 1 - ${index + 1}`} />
            </div>
          ))}
          {row1.map((el, index) => (
            <div className='image-group' key={index + row1.length}>
              <img src={el} alt={`Slide 1 - ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className='marquee marquee-right'>
        <div className='marquee-group'>
          {row2.map((el, index) => (
            <div className='image-group' key={index}>
              <img src={el} alt={`Slide 2 - ${index + 1}`} />
            </div>
          ))}
          {row2.map((el, index) => (
            <div className='image-group' key={index + row2.length}>
              <img src={el} alt={`Slide 2 - ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SpSectionFour