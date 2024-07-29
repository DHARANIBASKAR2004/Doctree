import React from 'react'
import {assets} from '../../assets/assets.jsx'
import './SignUp.css'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const Navigate =useNavigate();
  return (
    <>
    <div className='parentdiv'>
      <div className='spdiv1'>
        <h1>Welcome to <br />
        Doctree</h1>
        <p>we hardly get time to spend with our loved ones.
Gifts, especially cakes and flowers are the best
way to express your love. Even if you can't be
with them, you can at least send cake online and
show your love we hardly get time to spend with
our loved ones. Gifts, especially cakes and
flowers are the best way to express your love.
Even if you can't be with them, you can at
least send cake online and show your lovewe
hardly get time to spend with our loved ones.
Gifts, especially cakes and flowers are the best
way to express your love. Even if you can't be
with them, you can at least send cake online and
show your love we hardly get time to spend with
our loved ones.</p>
      </div>
 <img src={assets.signUpimg} alt="img" className='spimage1' />
 <div className=''>
  <div className='logodivparant'>
  <div className='logodiv'>
 <img src={assets.Logo} alt="Logo" className='Logo' />
 </div>
 <div>
 <RxCross1 className='cancelicon' onClick={()=>Navigate('/')}/>
 </div>
 </div>
 <div className='FormSingup'>
  <p className='FormSinguppara'>Hello there,</p>
  <p >Welcome to doctree</p>
    <form action="" >
        <input type="text" placeholder='Enter Your Name' className='input'/>
        <input type="email" placeholder='Enter Your Email' className='input' />
        <input type="number" placeholder='Enter Your Mobile Number' className='input' />
        <input type="password" placeholder='Enter Your Password' className='input' />
        <button className='btn'>Sign up</button>
        <p className='para1'>Already have account? <span> Sign In</span></p>
      </form>
      </div>
      
      </div>
  </div>

    </>
  )
}

export default SignUp