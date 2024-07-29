import React from 'react'
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/Footer/Footer'
import SpSectionThree from '../../component/spsection3/SpSectionThree'
import SpSectionFour from '../../component/spsection4/SpSectionFour'
import SecpSectionOne from '../../component/SecondPage/SecpSectionOne'
import SpSectionTwo from '../../component/spSection2/SpSectionTwo'

const FindDoctor = () => {
  return (
    <>
    <Navbar />
    <SecpSectionOne />
    <SpSectionTwo />
    <SpSectionThree />
    <SpSectionFour />
    <Footer />
    </>
  )
}

export default FindDoctor