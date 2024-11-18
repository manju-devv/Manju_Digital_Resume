import React, { useContext, useState } from 'react';
import './Resume.css';
import { FaSackDollar,FaBook ,FaCircle} from 'react-icons/fa6';
import { Store } from '../Store/Store';

const Resume = () => {

  const {menu} = useContext(Store)
  console.log(`is it working ${menu}`);
  return (
    <div className='resume-details'>
      <div className='resume-heading'>
        <h1 className={menu === 'Resume'?"active":''}>Internships & Education</h1>
      </div>
      <div className='internship-details'>
        <div className='internship'>
          <div className='line1'></div>
          <FaBook className='circle1'/>
          <h2 className='h2'>Internship & job</h2>
        </div>
        <div className='internship1'>
          <div className='first'>
            <FaCircle className='circle'/>
            <p>Looking for an Internship</p>
          </div>
          <div>
            <div className='para1'>
              <p>As a Junior Web Developer, I am skilled in HTML, CSS, JavaScript, React, MongoDB, Express.js, and NodeJS. With experience in building responsive websites and dynamic applications.</p>
            </div>
          </div>
        </div>
        <div className='internship2'>
          <div className='second'>
            <FaCircle className='circle'/>
            <p>Project - MERN Stack Food Application</p>
          </div>
          <div className='para2'>
            <p>Developed a full-stack food ordering application using the MERN stack (MongoDB, Express, React, Node.js), enabling users to browse menu items, place orders, and track order status.</p>
          </div>
        </div>
      </div>
      <div className='education-details'>
        <div className='edu-heading'>
          <div className='line2'></div>
          <FaBook className='book-icon'/>
          <h2>Education</h2>
        </div>
        <div className='mca'>
          <div className='mca-details'>
            <FaCircle className='mca-icon'/>
            <p>SV University</p>
          </div>
          <div className='mca-duration'>
            <p>2022-2024</p>
            <p>Master of computer Applications</p>
          </div>
        </div>
        <div className='Bsc'>
          <div className='bsc-details'>
            <FaCircle className='bsc-icon'/>
            <p className='p'>SV University</p>
          </div>
          <div className='bsc-duration'>
            <p>2019-2022</p>
            <p>Bachelor of computer science</p>
          </div>
        </div>
        <div className='inter'>
          <div className='inter-details'>
            <FaCircle className='inter-icon'/>
            <p>Sai siddartha junior college</p>
          </div>
          <div className='inter-duration'>
            <p>2017-2019</p>
            <p>Maths Physics Chemistry</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
