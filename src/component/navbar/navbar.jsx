import React from 'react'
import "./navbar.css"
import {assets} from '../../assets/assets.jsx'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigate = useNavigate();
  return (
    <nav>
      <div className='Logo'>
        <img src={assets.Logo} alt="Logo" />
      </div>
      <div className='n_btn'>
      <ul className='navbar'>
        <li>
          <Link to="/" className='list'>Home</Link>
          </li>
        <li>
        <Link to='/findDoctor' className='list'>  Find Doctors</Link>
          </li>
        <li>
          <Link to='/about' className='list'>About Us </Link>
          </li>
        <button onClick={()=> navigate("/signup")}>Sign Up</button>

      </ul>
      </div>
    </nav>
  )
}

export default Navbar