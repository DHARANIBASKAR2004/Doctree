import React from 'react'
import Navbar from '../../component/navbar/navbar'
import SectionOne from '../../component/sectionOne/SectionOne'
import SectionTwo from '../../component/sectionTwo/sectionTwo'
import Review from '../../component/review/Review'
import { SectionThree } from '../../component/sectionThree/SectionThree'
import SectionFour from '../../component/sectionFour/SectionFour'
import SectionFive from '../../component/sectionFive/SectionFive'
import Footer from '../../component/Footer/Footer'
import SectionSix from '../../component/sectionSix/SectionSix'
import Form from '../../component/Form/Form'
import Cards from '../../component/Cards/Cards'


const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionThree />
        <SectionFour />
        <SectionSix />
        <SectionFive />
        <SectionTwo />
        <Review />
        <Footer />
        {/* <Form /> */}
        {/* <Cards /> */}
    </div>
  )
}

export default Home