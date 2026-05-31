"use client"
import React, { useEffect, useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import styles from "./Main.module.css"
import { serverURL } from '@/app/services/FetchServices';


const images=[
    {image:"/slide1.jpg"},
    {image:"/slide2.jpg"},
    {image:"/slide3.jpg"},
    {image:"/slide4.jpg"},
    {image:"/slide5.jpg"},
    {image:"/slide6.jpg"},
]

export default function Card() {

  const [slide,setSlide]=useState(0)
  const slideLength=450*(images.length-4)

    const next=()=>{
        setSlide((prev)=>prev-388)    
    }
    const prev=()=>{
        setSlide((prev)=>prev+388)
    }

    const fillImage=()=>{
        return images.map((item,i)=>{
            return(<div key={i} style={{width:'368px',height:'100%',borderRadius:'15px',overflow:'hidden'}} >
                <img src={`${serverURL}/images/${item.image}`} className={styles.slideImage} />
            </div>)
        })
    }
  return (
    <div style={{width:'100%',height:'300px',position:'relative'}} >
        <h1 style={{fontSize:'35px',fontWeight:'700',paddingBottom:'40px'}} >Offers & discount</h1>
        
    <div className={styles.scrollBox} >
        <div className={styles.slide} style={{transform:`translate(${slide}px)`}} >
           {fillImage()}
        </div>
        <div onClick={prev} className={styles.slideArrow} style={{display: slide >= 0 ? "none" : "",left:0}} >
            <GoArrowLeft size={22} />
        </div>
        <div onClick={next} className={styles.slideArrow} style={{display: slide <= -slideLength ? "none" : "",right:0}} >
            <GoArrowRight size={22}/>
        </div>
        
    </div>
    </div>
  )
}
