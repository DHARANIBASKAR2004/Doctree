import React from 'react'
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/Footer/Footer'
import ApSectionTwo from '../../component/ApSection2/ApSectionTwo'
import ApSectionThree from '../../component/ApSection3/ApSectionThree'
import ApSectionFour from '../../component/ApSection4/ApSectionFour'
import ApSectionFive from '../../component/ApSection5/ApSectionFive'
import { ApSectionOne } from '../../component/ApSection1/ApSectionOne'
import ApSectionSix from '../../component/ApSection6/ApSectionSix'

const About = () => {
  return (
    <>
    <Navbar />
    <ApSectionOne />
    <ApSectionTwo />
    <ApSectionThree />
    <ApSectionFour />
    <ApSectionFive />
    <ApSectionSix />
    <Footer />
    </>
  )
}

export default About