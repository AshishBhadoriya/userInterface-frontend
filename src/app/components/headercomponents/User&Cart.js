import React from 'react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";

export default function UserCart() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'80px'}} >
      <div style={{border:'2px solid #e0e0e0',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',padding:'8px'}} >
        <PiShoppingCartSimpleBold size={20}/>
      </div>
      <LuCircleUserRound size={17}/>
    </div>
  )
}
