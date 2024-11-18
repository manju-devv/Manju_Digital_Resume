import React, { useContext, useState } from 'react';
import './Home.css';
import exp_png from './exp.png';
import js_png from './js.png';
import mern_png from './mern.png'
import StoreProvider, { Store } from '../Store/Store';

const Home = () => {

  
  const {menu} = useContext(Store);

  return (
    <div className='my-details'>
      <h1 className={menu==='About'?'active':''}>About me</h1>
      <div className='myself'>
        <p>👋Hi there! I'm Manjunath Purum,A passionate Web Developer with a fresh perspective and a drive to make an impact in Development. 🚀</p>
        <p>🧰 My toolkit includes MERN Stack Programming,and I'm skilled in HTML, CSS, JavaScript, React, MongoDB, Express.js, and Node.js.</p>
        <p>🎓 I recently completed my Master of Computer Application (MCA) from Sri Venkateshwara University and hold a Bachelor of Science (BSc) degree from Shri Gnanambica Degree College. 📚</p>
        <p>💡 My approach is focused on writing clean, maintainable code and leveraging best practices to deliver user-centric web solutions. Eager to expand my expertise and take on new challenges, I am committed to continuously improving my skills to drive success in web development projects.</p>
        <h3>I'am good at</h3>
      </div>
        <div className='cards'>
          <div className='card1'>
            <div><img src={js_png}/></div>
            <div>              
              <h5>JavaScript</h5>
              <p className='pa'>I have a strong command of JavaScript, enabling me to build dynamic and interactive web applications. From frontend development to backend logic using Node.js, I excel at leveraging JavaScript to create efficient and scalable solutions.</p>
            </div>
          </div>
          <div className='card2'>
            <div><img src={exp_png}/></div>
            <div>              
              <h5>EXPRESS JS</h5>
              <p className='pa'>I have expertise in Express.js, allowing me to efficiently build robust and scalable backend APIs. With my skills, I can design RESTful services and seamlessly integrate them with databases and frontend applications.</p>
            </div>
          </div>
          <div className='card3'>
            <div><img src={mern_png}/></div>
            <div>              
              <h5>MERN-STACK</h5>
              <p className='pa'>I am proficient in the MERN stack, enabling me to develop full-stack web applications with seamless integration between MongoDB, Express.js, React, and Node.js. My expertise allows me to create scalable, responsive, and user-centric solutions from frontend to backend.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;
