import React, { useState } from 'react'
import "./Contact.css";
const Contact = () => {

  const [userData , setUserData] = useState(
    {
      Name : 'Enter Your Full Name' , Email : 'Your Email Id' , Subject : 'Subject Of Message' , Message : 'Your Message'
    }
  )
  let name,value
  const data = (e) =>
  {
    name = e.target.name
    value = e.target.value
    setUserData({...userData,[name]:value})
  }

  const send = async(e) =>
  {
    const {Name,Email,Subject,Message} = userData
    e.preventDefault();
    const option ={
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({
        Name,Email,Subject,Message
      })    }
      const res = await fetch('https://contactcrypto-cc883-default-rtdb.firebaseio.com/Messages.json',option);
      setUserData( {Name : 'Enter Your Full Name' , Email : 'Your Email Id' , Subject : 'Subject Of Message' , Message : 'Your Message'});
      alert("Message Sent Sucessfully");
    }

  return (
    <>
      <div className='container'>
        <div className='container_box'>
          <form method='POST'>
            <input type="text" name="Name" l autoComplete='off' value={userData.Name} onChange={data}></input>
            <input type="email" name="Email" autoComplete='off' value={userData.Email} onChange={data}></input>
            <input type="text" name="Subject" autoComplete='off' value={userData.Subject} onChange={data}></input>
            <textarea name="Message" autoComplete='off' value={userData.Message} onChange={data}></textarea>
            <button onClick={send}>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact