import React, { useContext, useState } from 'react';
import './Contact.css';
import { FaTelegram} from 'react-icons/fa6';
import { Store } from '../Store/Store';
import axios from 'axios';
import {toast} from 'react-toastify';


const Contact = () => {
  const {menu} = useContext(Store);
  const url = "http://localhost:5000";
  const [data,setData] = useState({
    name:'',
    email:'',
    message:""
  })

  const [isValid,setIsValid] = useState({
    name:false,
    email:false,
    message:false,
  })


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev)=>({...prev,[name]:value}));
    setIsValid((prev) => ({...prev, [name]: value.trim() !== ""}));
    console.log(data)
    console.log(isValid)
  }
  const isValidd =  isValid.name === true && isValid.email === true && isValid.message === true;
  console.log(isValidd)
  const handlesubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.post(url+"/feedback",data);
      console.log(response)
      console.log(response.data.success);
      console.log(data)
      if (response.data.success) {
        setData({name:'',email:'',message:''});
        setIsValid({name:false,email:false,message:false})
        toast.success("Your Feedback submitted Successfully!")
      } else {
        setData({name:'',email:'',message:''});
        setIsValid({name:false,email:false,message:false})
        toast.warn(response.data.message)
      }
    }catch(e){
      console.log(e)
    }
  }

  
  return (
    <div className='contact-details'>
      <div className='contact-heading'>
        <h1 className={menu === 'Contact'?'alive':''}>Contact</h1>
      </div>
        <div className='frame'>
          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=78.48852%2C13.55632%2C78.50852%2C13.57632&layer=mapnik" className='map' loading='lazy' allowfullscreen></iframe>
          <a href='https://www.openstreetmap.org/#map=14/13.56632/78.50928' target='_blank'>View Larger map</a>
        </div>
        <div className='footer-details'>
          <h2>Contact Form</h2>
          <div className='form'>
            <form onSubmit={handlesubmit}>
              <div className='user-details'>
                <input name='name' id={isValid.name?'typing':''} onChange={handleChange}  value={data.name} type="name" placeholder='Full name' required/>
                <input name='email' id={isValid.email?'typing1':''} onChange={handleChange} value={data.email} type='email' placeholder='Email address' required/>
              </div>
              <div className='user-message'>
                <textarea name='message' onChange={handleChange} id={isValid.message ?'typing3':''} value={data.message} placeholder='Your Message' required></textarea>
              </div>
              <button type='submit' disabled={!isValidd} style={{cursor: isValidd?'pointer':'not-allowed'}}><FaTelegram className='send-icon'/>Send Message</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
