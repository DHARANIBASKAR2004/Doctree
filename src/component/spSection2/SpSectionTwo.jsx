import React, { useState } from "react";
import "./SpSectionTwo.css";
import { content, assets1 } from "../../assets/assets.jsx";
import { IoSearchSharp } from "react-icons/io5";

const categories = [
  {
    name: "Cardiologist",
    doctors: [
      {
        name: "Dr. John Doe",
        image: assets1.doctor1,
        specialist: "Cardiologist",
        experience: 19,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Apollo Hospital",
        location:"Chennai",
      },
      {
        name: "Dr. Jane Roe",
        image: assets1.doctor2,
        specialist: "Cardiologist",
        experience: 22,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Sagar Hospital",
        location:"Banglore",
      },
      {
        name: "Dr. Richard Miles",
        image: assets1.doctor3,
        specialist: "Cardiologist",
        experience: 15,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Virinchi Hospital",
        location:"Hydrabad",
      },
      {
        name: "Dr. Anna Lee",
        image: assets1.doctor4,
        specialist: "Cardiologist",
        experience: 21,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Aster Medcity",
        location:"Kerala",
      },
      {
        name: "Dr. David Smith",
        image: assets1.doctor5,
        specialist: "Cardiologist",
        experience: 18,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Noor Hospital",
        location:"Mumbai",
      },
      {
        name: "Dr. Lisa Brown",
        image: assets1.doctor6,
        specialist: "Cardiologist",
        experience: 11,
        degree: "Fellowship(Cardiologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Sterling Hospital",
        location:"Kolkata",
      },
    ],
  },
  {
    name: "Dentist",
    doctors: [
      {
        name: "Dr. Jane Smith",
        image: assets1.doctor7,
        specialist: "Dentist",
        experience: 7,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "SIMS Hospital",
        location:"Chennai",
      },
      {
        name: "Dr. Chris Evans",
        image: assets1.doctor8,
        specialist: "Dentist",
        experience: 5,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Fortis Hospital",
        location:"Banglore",
      },
      {
        name: "Dr. Patricia Green",
        image: assets1.doctor9,
        specialist: "Dentist",
        experience: 5,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Star Hospital",
        location:"Hydrabad",
      },
      {
        name: "Dr. Mary Johnson",
        image: assets1.doctor10,
        specialist: "Dentist",
        experience: 10,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Sunrise Hospital",
        location:"Kerala",
      },
      {
        name: "Dr. Robert White",
        image: assets1.doctor11,
        specialist: "Dentist",
        experience: 4,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Acme Hospital",
        location:"Mumbai",
      },
      {
        name: "Dr. Linda Black",
        image: assets1.doctor12,
        specialist: "Dentist",
        experience: 18,
        degree: "Fellowship(Dentist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Ruby General Hospital",
        location:"Kolkata",
      },
    ],
  },
  {
    name: "Gyenacologist",
    doctors: [
      {
        name: "Dr. Emily Johnson",
        image: assets1.doctor13,
        specialist: "Gynecologist",
        experience: 11,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Kauvery Hospital",
        location:"Chennai",
      },
      {
        name: "Dr. Sandra Lee",
        image: assets1.doctor14,
        specialist: "Gynecologist",
        experience: 14,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Manipal Hospital",
        location:"Banglore",
      },
      {
        name: "Dr. Michael Brown",
        image: assets1.doctor15,
        specialist: "Gynecologist",
        experience: 5,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Continental Hospital",
        location:"Hydrabad",
      },
      {
        name: "Dr. Sarah Davis",
        image: assets1.doctor16,
        specialist: "Gynecologist",
        experience: 18,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Aster MIMS Hospital",
        location:"Kerala",
      },
      {
        name: "Dr. Laura Martinez",
        image: assets1.doctor17,
        specialist: "Gynecologist",
        experience: 8,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Life Force Homeopathic",
        location:"Mumbai",
      },
      {
        name: "Dr. Sophia Garcia",
        image: assets1.doctor18,
        specialist: "Gynecologist",
        experience: 14,
        degree: "Fellowship(Gynecologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Eskag Sanjeevani Hospital",
        location:"Kolkata",
      },
    ],
  },
  {
    name: "Nephrologist",
    doctors: [
      {
        name: "Dr. Michael Brown",
        image: assets1.doctor19,
        specialist: "Nephrologist",
        experience: 12,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Global Hospital",
        location:"Chennai",
      },
      {
        name: "Dr. Sarah Wilson",
        image: assets1.doctor20,
        specialist: "Nephrologist",
        experience: 14,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Narayana Health",
        location:"Banglore",
      },
      {
        name: "Dr. William Thompson",
        image: assets1.doctor21,
        specialist: "Nephrologist",
        experience: 12,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: " Care Hospitals",
        location:"Hydrabad",
      },
      {
        name: "Dr. Christopher Adams",
        image: assets1.doctor22,
        specialist: "Nephrologist",
        experience: 15,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Rajagiri Hospital",
        location:"Kerala",
      },
      {
        name: "Dr. Karen Moore",
        image: assets1.doctor23,
        specialist: "Nephrologist",
        experience: 14,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Sushrut Hospital",
        location:"Mumbai",
      },
      {
        name: "Dr. David Taylor",
        image: assets1.doctor24,
        specialist: "Nephrologist",
        experience: 18,
        degree: "Fellowship(Nephrologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Belle Vue Clinic",
        location:"Kolkata",
      },
    ],
  },
  {
    name: "Neurologist",
    doctors: [
      {
        name: "Dr. Sarah Davis",
        image: assets1.doctor25,
        specialist: "Neurologist",
        experience: 12,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "MGM Healthcare",
        location:"Chennai",
      },
      {
        name: "Dr. Brian Clark",
        image: assets1.doctor26,
        specialist: "Neurologist",
        experience: 16,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Columbia Asia Hospital",
        location:"Banglore",
      },
      {
        name: "Dr. Jennifer Lewis",
        image: assets1.doctor27,
        specialist: "Neurologist",
        experience: 15,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "KIMS Hospital",
        location:"Hydrabad",
      },
      {
        name: "Dr. Jessica Hall",
        image: assets1.doctor28,
        specialist: "Neurologist",
        experience: 11,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "PRS Hospital",
        location:"Kerala",
      },
      {
        name: "Dr. Elizabeth Allen",
        image: assets1.doctor29,
        specialist: "Neurologist",
        experience: 12,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Oma Hospital",
        location:"Mumbai",
      },
      {
        name: "Dr. Daniel Young",
        image: assets1.doctor30,
        specialist: "Neurologist",
        experience: 13,
        degree: "Fellowship(Neurologist Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "AMRI Hospital",
        location:"Kolkata",
      },
    ],
  },
  {
    name: "Orthopedic",
    doctors: [
      {
        name: "Dr. William Wilson",
        image: assets1.doctor31,
        specialist: "Orthopedic",
        experience: 14,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Apollo Hospitals",
        location:"Chennai",
      },
      {
        name: "Dr. Olivia Martinez",
        image: assets1.doctor32,
        specialist: "Orthopedic",
        experience: 15,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "HOSMAT Hospital",
        location:"Banglore",
      },
      {
        name: "Dr. Emma Hernandez",
        image: assets1.doctor33,
        specialist: "Orthopedic",
        experience: 16,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Yashoda Hospital",
        location:"Hydrabad",
      },
      {
        name: "Dr. Jacob King",
        image: assets1.doctor34,
        specialist: "Orthopedic",
        experience: 17,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "VPS Lakeshore Hospital",
        location:"Kerala",
      },
      {
        name: "Dr. Charlotte Hill",
        image: assets1.doctor35,
        specialist: "Orthopedic",
        experience: 18,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Sai Hospital",
        location:"Mumbai",
      },
      {
        name: "Dr. James Scott",
        image: assets1.doctor36,
        specialist: "Orthopedic",
        experience: 19,
        degree: "Fellowship(Orthopedic Surgeon), MS(Medicine), FCPS, MBBS",
        hospital: "Peerless Hospital",
        location:"Kolkata",
      },
    ],
  },
];

const Category = ({ name, doctors }) => (
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



const SpSectionTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cardiologist");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredCategories(categories);
      setSelectedCategory("Cardiologist");
    }
  };

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase();
    const categoryMatch = categories.find(
      (category) => category.name.toLowerCase() === query
    );

    if (categoryMatch) {
      setFilteredCategories([categoryMatch]);
      setSelectedCategory(categoryMatch.name);
    } else {
      const filtered = categories
        .map((category) => ({
          ...category,
          doctors: category.doctors.filter(
            (doctor) =>
              doctor.name.toLowerCase().includes(query) ||
              doctor.hospital.toLowerCase().includes(query) ||
              doctor.location.toLowerCase().includes(query)
          ),
        }))
        .filter((category) => category.doctors.length > 0);

      setFilteredCategories(filtered);
      setSelectedCategory(""); // Clear the selected category to show all filtered results
    }
  };
  
  return (
    <>
      <div className="search-fun">
      <div id="search-wrapper" className="searchdiv">
      <IoSearchSharp className="search-icon" />
        <input
          type="text"
          id="search"
          placeholder="Search Doctors, Hospital, Location....."
          value={searchQuery}
          onChange={handleSearchChange}
        ></input>
         <button className="searchbutton" id="search-button" onClick={handleSearchClick}>
            Search
          </button>
      </div>

      <div className="cardsyo">
        <h1 className="headingyo">We have qualified doctors in</h1>
        <p className="contentyo">
          Find highly qualified doctors from various specialties to meet your
          healthcare needs.
        </p>
      </div>
      </div>
      <div className="category-selectionyo">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-itemyo ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              className="qqyo"
              src={content[category.name]}
              alt={category.name}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className="doctorsyo">
        {filteredCategories
          .filter(
            (category) =>
              !selectedCategory || category.name === selectedCategory
          )
          .map((category, index) => (
            <Category
              key={index}
              name={category.name}
              doctors={category.doctors}
            />
          ))}
      </div>
    </>
  );
};

export default SpSectionTwo;
