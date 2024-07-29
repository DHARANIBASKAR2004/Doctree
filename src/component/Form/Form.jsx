import React from 'react'
import { assets } from '../../assets/assets';
import './Form.css'


const Form = () => {
  return (
    <>
    <div className='formparentdivsection'>
    <div className='Formparentdiv'>
        <h1>DOCTOR</h1>
        <h3>Online & offline Consulting</h3>
        <p>A paragraph is defined as “a group of sentences or a
single sentence that forms a unit” (Lunsford and
Connors 116). Length and appearance do not
determine whether a section in a paper is a
paragraph. For instance, in some styles of writing,
particularly journalistic styles, a paragraph can be just
one sentence long A paragraph is defined as “a group
of sentences or a single sentence that forms a unit”
(Lunsford and Connors 116). Length and appearance
do not determine whether a section in a paper is a
paragraph. For instance, in some styles of writing,
particularly journalistic styles, a paragraph can be just
one sentence long</p>
    </div>
    <div>
        <img src={assets.Formimg} alt="" className='Formimg' />
    </div>

    <div className='Form'>
        <form action="">
            <label htmlFor="">First Name</label>
            <input type="text" />
            <label htmlFor="">Last Name</label>
            <input type="text" />
            <label htmlFor="">Birth Date</label>
            <input type="text" />
            <label htmlFor="" className='label'>Consulting Date</label>
            <select name="date" id="date" className='select'>
  <option value="date1">01/07/2024</option>
  <option value="date2">02/07/2024</option>
  <option value="date3">03/07/2024</option>
  <option value="date4">04/07/2024</option>
</select>
        </form>

    </div>
    </div>

    </>
  )
}

export default Form