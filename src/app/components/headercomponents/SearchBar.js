import React from 'react'
import { GrLocation } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import styles from "./Header.module.css"

export default function SearchBar() {
  
  return (
    <div style={{width:'auto',display:'flex',alignItems:'center',gap:'8px'}} >
      <div className={styles.searchBox} >
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
        <GrLocation style={{color:'grey'}} size={21} />
        <p className={styles.searchText}>Adityapuram</p>
        <IoIosArrowDown style={{color:'grey'}} size={21}/>
      </div>
      </div>
      <div className={styles.searchBox} >
      <div style={{display:'flex',alignItems:'center',gap:'10px',width:'100%'}} >
        <FiSearch style={{color:'#5a5a5a'}} size={20} />
        <p className={styles.searchText}>Search</p>
      </div>
      </div>
    </div>
  )
}
