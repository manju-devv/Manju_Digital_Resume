import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import img from './manjuu.jpg';
import { FaEnvelope,FaPhone, FaCalendar, FaMapMarkerAlt,FaLinkedin, FaGithub} from 'react-icons/fa';
// import { Store } from '../Store/Store';


const Sidebar = () => {

  const [active,setisActive] = useState(false);
  const [content,setContent] = useState('Show Details');

  const toggleBar = () => {
    setisActive(!active)
  }
  useEffect(()=>{
    const handleResize = () =>{
      console.log(window.innerWidth)
      if(window.innerWidth <= 900){
        setContent('V');
      } else{
        setContent('Show Details')
      }
    }
    handleResize()
    window.addEventListener('resize',handleResize);
    return ()=>{window.removeEventListener('resize',handleResize)}
  },[]);

  // useEffect(()=>{

  //   const handlescroll = () =>{
  //     if(skillsEndRef.current){
  //       const skillbottom = skillsEndRef.current.getBoundingClientRect().bottom;
  //       if(skillbottom <= window.innerHeight){
  //         setIsSticky(false)
  //       } else{
  //         setIsSticky(true)
  //       }
  //     }
  //   }

  //   window.addEventListener('scroll',handlescroll);
  //   return ()=>window.removeEventListener('scroll',handlescroll)
  // },[skillsEndRef]);

  return (
    <div className={`sidebar ${active?'active':''}`}>
      <button class="sidebar-toggle" onClick={()=>{toggleBar()}}>{content}</button>
      <div className='sidebar-details'>
        <div className='sidebar-photo'>
          <img src={img} alt='my-profile'/>
        </div>
        <div className='sidebar-name'>
          <h2>Manjunath Purum</h2>
          <p>Web Developer</p>
        </div>
      </div>
      <div className='sidebar-elements'>
      <hr />
        <ul>
          <div className='lol'>
            <div className='email'>
              <div className='email-icon'>
                <FaEnvelope />
              </div>
              <div className='data'>
                <li>Email</li>
                <p><a href='mailto:manjunathpurum@gmail.com' target='_blank'>manjunathpurum@gmail.com</a></p>
              </div>
            </div>
            <div className='phone'>
              <div className='phone-icon'>
                <FaPhone />
              </div>
              <div className='data'>
                <li>Phone</li>
                <p>+91 9666702088</p>
              </div>
            </div>
          </div>
          <div className='lol1'>
            <div className='birthday'>
              <div className='birthday-icon'>
                <FaCalendar />
              </div>
              <div className='data'>
                <li>Birthday</li>
                <p>January 13,2001</p>
              </div>
            </div>
            <div className='location'>
              <div className='location-icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='data'>
                <li>Location</li>
                <p><a href='https://www.google.co.in/maps/@13.5676461,78.5095075,15.7z?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target='_blank'>Madanapalli,Andhra Pradesh, India</a></p>
              </div>
            </div>
          </div>
        </ul>
        <div className='sidebar-icons'>
          <a href='https://www.linkedin.com/in/manjunath-purum-8b3484306/' target='_blank'><FaLinkedin /></a>
          <a href='https://github.com/manju-devv' target='_blank'><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
