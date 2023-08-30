import React from 'react'
import "./footer.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail, MdPhoneAndroid} from "react-icons/md";
import { PiChatsCircle} from "react-icons/pi";
export default function Footer() {
  return (
    <div className="footer-title">
      <h3 >We are here for you...</h3>
      <div style={{display:"flex", flexDirection:"row", gap:"40px", alignItems:"center", justifyContent:"center", marginTop:"40px"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
       <div className="location">
      <div style={{marginTop:"0px"}}>
      <CiLocationOn size={52} style={{ color: "green", paddingLeft:"20px" }}/>
        </div>
        <div>
       <h3 style={{color:"grey", fontSize:"14px", marginBottom:"1px", paddingLeft:"20px"}}>Location</h3>  
       <p>Islamabad, Pakistan
        </p>
      </div>
      </div>
      <div className="email">
      <div style={{marginTop:"0px"}}>
      <MdOutlineMail size={48} style={{ color: "red", paddingLeft:"20px" }}/>
        </div>
        <div>
       <h3 style={{color:"grey", fontSize:"14px", marginBottom:"1px", paddingLeft:"20px"}}>Email</h3>  
       <p>support@innovotechnologies.com
        </p>
      </div>
      </div>
       </div>
      <div>
      <div className="phone" >
      <div style={{marginTop:"0px"}}>
      <MdPhoneAndroid size={42} style={{ color: "purple", paddingLeft:"20px" }}/>
        </div>
        <div>
       <h3 style={{color:"grey", fontSize:"14px", marginBottom:"1px", paddingLeft:"20px"}}>Phone</h3>  
       <p>+923356778922
        </p>
      </div>
      </div>
      <div className="liveChat">
      <div style={{marginTop:"0px"}}>
      <PiChatsCircle size={42} style={{ color: "blue", paddingLeft:"20px" }}/>
        </div>
        <div>
       <h3 style={{color:"grey", fontSize:"14px", marginBottom:"1px", paddingLeft:"20px"}}>Live Chat</h3>  
       <p>simple and easy form
        </p>
      </div>
      </div>
      </div>
      </div>
      
      

      
    </div>
  )
}
