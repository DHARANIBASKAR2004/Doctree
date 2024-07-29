import React, { useState } from 'react';
import "./SectionSix.css";
import { assets1, content } from '../../assets/assets.jsx';
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    name: 'Cardiologist',
    doctors: [
      { name: 'Dr. John Doe',education:'MBBS,MD', image: assets1.doctor1 },
      { name: 'Dr. Jane Roe',education:'MBBS,MD', image: assets1.doctor2 },
      { name: 'Dr. Richard Miles',education:'MBBS,MD', image: assets1.doctor3 },
      { name: 'Dr. Anna Lee',education:'MBBS,MD', image: assets1.doctor4 },
      { name: 'Dr. David Smith',education:'MBBS,MD', image: assets1.doctor5 },
      { name: 'Dr. Lisa Brown',education:'MBBS,MD', image: assets1.doctor6 },
    ],
  },
  {
    name: 'Dentist',
    doctors: [
      { name: 'Dr. Jane Smith',education:'MBBS,MD', image: assets1.doctor7 },
      { name: 'Dr. Chris Evans',education:'MBBS,MD', image: assets1.doctor8 },
      { name: 'Dr. Patricia Green',education:'MBBS,MD', image: assets1.doctor9 },
      { name: 'Dr. Mary Johnson',education:'MBBS,MD', image: assets1.doctor10 },
      { name: 'Dr. Robert White',education:'MBBS,MD', image: assets1.doctor11 },
      { name: 'Dr. Linda Black',education:'MBBS,MD', image: assets1.doctor12 },
    ],
  },
  {
    name: 'Gyenacologist',
    doctors: [
      { name: 'Dr. Emily Johnson',education:'MBBS,MD', image: assets1.doctor13 },
      { name: 'Dr. Sandra Lee',education:'MBBS,MD', image: assets1.doctor14 },
      { name: 'Dr. Michael Brown',education:'MBBS,MD', image: assets1.doctor15 },
      { name: 'Dr. Sarah Davis',education:'MBBS,MD', image: assets1.doctor16 },
      { name: 'Dr. Laura Martinez',education:'MBBS,MD', image: assets1.doctor17 },
      { name: 'Dr. Sophia Garcia',education:'MBBS,MD', image: assets1.doctor18 },
    ],
  },
  {
    name: 'Nephrologist',
    doctors: [
      { name: 'Dr. Michael Brown',education:'MBBS,MD', image: assets1.doctor19 },
      { name: 'Dr. Sarah Wilson',education:'MBBS,MD', image: assets1.doctor20 },
      { name: 'Dr. William Thompson',education:'MBBS,MD', image: assets1.doctor21 },
      { name: 'Dr. Christopher Adams',education:'MBBS,MD', image: assets1.doctor22 },
      { name: 'Dr. Karen Moore',education:'MBBS,MD', image: assets1.doctor23 },
      { name: 'Dr. David Taylor',education:'MBBS,MD', image: assets1.doctor24 },
    ],
  },
  {
    name: 'Neurologist',
    doctors: [
      { name: 'Dr. Sarah Davis',education:'MBBS,MD', image: assets1.doctor25 },
      { name: 'Dr. Brian Clark',education:'MBBS,MD', image: assets1.doctor26 },
      { name: 'Dr. Jennifer Lewis',education:'MBBS,MD', image: assets1.doctor27 },
      { name: 'Dr. Jessica Hall',education:'MBBS,MD', image: assets1.doctor28 },
      { name: 'Dr. Elizabeth Allen',education:'MBBS,MD', image: assets1.doctor29 },
      { name: 'Dr. Daniel Young',education:'MBBS,MD', image: assets1.doctor30 },
    ],
  },
  {
    name: 'Orthopedic',
    doctors: [
      { name: 'Dr. William',education:'MBBS,MD', image: assets1.doctor31 },
      { name: 'Dr. Olivia ',education:'MBBS,MD', image: assets1.doctor32 },
      { name: 'Dr. Sanjai',education:'MBBS,MD', image: assets1.doctor33 },
      { name: 'Dr. Jacob King',education:'MBBS,MD', image: assets1.doctor34 },
      { name: 'Dr. Charlotte Hill',education:'MBBS,MD', image: assets1.doctor35 },
      { name: 'Dr. James Scott',education:'MBBS,MD', image: assets1.doctor36 },
    ],
  },
];


 



 // category functinality 



const Category = ({ name, doctors }) => {

const navigate=useNavigate();

  return(
  
  <div className='category'>
    <h3>{name}</h3>
    <div className='doctor-cards'>
      {doctors.map((doctor, idx) => (
        <div key={idx} className='doctor-card'>
          <img src={doctor.image} alt={doctor.name} />
          <div className='cardnameeducation'>
          <p><b>{doctor.name}</b> </p> 
          <p>{doctor.education}</p>
          </div>
          <button className="consult-button" onClick={()=>navigate('/signup')}>Get Consult</button>
        </div>
      ))} 
    </div>
  </div>
  
    )};


const SectionSix = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
    {/* card functinality  */}

      <div className='sec6cards'>
        <h1 className='cardsheading'>We have qualified doctors in</h1>
        <p className='sec6content'>Find highly qualified doctors from various specialties to meet your healthcare needs.</p>
      </div>
      <div className="imagesy">
        {categories.map((category, index) => (
          <div key={index} onClick={() => setSelectedCategory(category.name)}>
            <img src={content[category.name]} alt={category.name} />
            <p>{category.name}</p>
           
          </div>
        ))}
      </div>
      <h2 className='our'>Our Doctors</h2>
      <div className="doctors">
        {categories
          .filter(category => selectedCategory === "" || category.name === selectedCategory)
          .map((category, index) => (
            <Category key={index} name={category.name} doctors={category.doctors} />
          ))}
      </div>
    </>
  );
};

export default SectionSix;