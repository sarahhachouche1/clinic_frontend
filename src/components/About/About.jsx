import React from 'react'
import "../../styles/About.css"
import Vector204 from "../../images/Vector204.png"
import Group_1 from "../../images/Group_1.png"


const About = () => {
  return (
    <>
    <div>
      <h1 className='H1Y'>Passion for <span className='DentistryY'>Dentistry</span> <br/>since 2015 </h1>
      <p className='PY'>DENTI Clinic was established in 1977, when Professor Hani Khoury returned to Lebanon from France, after finishing his specialty in gum and bone disease, also known as “Periodontics”.</p>
    
    </div>

    <div> 
      <img className='imgY'src={Vector204} alt="Vector204"/>
    </div>
    <div>
      <img className='imgRy' src={Group_1} alt="imgRy"/>
      <h1 className='pBY'>MEET OUR DOCTORS</h1>
    </div>
  </>
  )
}

export default About