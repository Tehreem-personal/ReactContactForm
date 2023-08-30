import React from 'react'
import "./form.css"
import { useState } from 'react'
import Footer from '../Footer/Footer';
import logo from "../../images/contact-us.jpg"
import email from "../../images/email.jpg"
import NavbarElements from '../Navbar/Navbar';
export default function Form() {
    const[user, setUSer]=useState({
name:"",
email:"",
phone:"",
address:"",
message:"",
 });
 let name,value;
 const getUserData= (e)=>{
    name=e.target.name;
    value=e.target.value;
    setUSer({...user,[name]:value});
 }

const postData=async(e)=>{
e.preventDefault();
const{name,email,phone,address,message}=user;

const res=await fetch
('https://contact-form-3e829-default-rtdb.firebaseio.com/youtubeform.json',
{
  method:"POST",
headers:{
  "CONTENT-TYPE":"application/json",
},
body: JSON.stringify({
name,
email,
phone,
address,
message,
}),
}
);
if (res){
  setUSer ({
name:"",
email:"",
phone:"",
address:"",
message:"",
  });
  alert("Data Submitted");
}
};
  return (
    <>
   
    <div className='container'>
    
      <div className='title'>
        <div style={{marginTop:"150px"}}>
        <h1>Contact Us</h1>
      <p>We are an industry leading company that values  <br/>honesty,
      integrity and effeciency.Building quality <br/>products and caring.</p>
      <img src={email} style={{width:"100%", height:"230px"}}/>
        </div>
     <div>
      <img src={logo} style={{width:"450px", height: "460px", marginTop:"50px"}}/>
     </div>
      </div>
      <div>
       
      </div>
    
    <div className='container-contact'>
    <h3>Need help regarding our services?</h3>
    <form method='POST'>
      <div style={{display:"flex", flexDirection:"row", gap:"8px"}}>
      <input
         
         name="name"
          placeholder='Name'
          value={user.name}
          onChange={getUserData}
          required>
             
         </input>
         <input
          type= "text"
          name="email"
          placeholder='Email'
          value={user.email}
          onChange={getUserData}
          required>
         </input>
      </div>
      <div style={{display:"flex", flexDirection:"row", gap:"8px"}}>
      <input
          type= "text"
          name="phone"
          placeholder='Phone Number'
          value={user.phone}
          onChange={getUserData}
          required>
         </input>
         <input
          type= "text"
          name="address"
          placeholder='Address'
          value={user.address}
          onChange={getUserData}
          required>
         </input>
      </div>
    
        
         <input
          type= "text"
          name="message"
          placeholder='Leave Your Feedback/Query'
          value={user.message}
          onChange={getUserData}>
         </input>
         <button onClick={postData}>Submit</button>
    </form>
       
  
     </div>
     <div style={{marginTop:"40px"}}>
     <Footer/>
      </div>
     
    </div>
    
    </>
    
  )
}
