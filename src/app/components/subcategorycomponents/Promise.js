import { serverURL } from '@/app/services/FetchServices';
import React from 'react'
import { MdCheck } from "react-icons/md";

export default function Promise() {
  return (
    <div style={{width:'100%',height:'170px',border:'1px solid #c4c3c3',borderRadius:'10px',display:'flex',justifyContent:'space-between',padding:'30px 20px',marginTop:'25px'}} >
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}} >
        <h4>WC Promise</h4>  
        <p style={{display:'flex',alignItems:'center',fontSize:'14px',}} ><MdCheck size="20" />Verifies Professionals</p>
        <p style={{display:'flex',alignItems:'center',fontSize:'14px'}} ><MdCheck size="20" />Hassle Free Booking</p>
        <p style={{display:'flex',alignItems:'center',fontSize:'14px'}} ><MdCheck size="20"/>Transparent Pricing</p>
      </div>
      <img src={`${serverURL}/images/stamp.jpg`} style={{width:'60px',height:'60px'}}/> 
    </div>
  )
}
