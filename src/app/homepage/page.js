"use client"
import React, { useEffect,useState } from 'react'
import Header from '../components/headercomponents/Header'
import CategoryComponent from '../components/maincomponents/CategoryComponent'
import CategoryScroll from '../components/maincomponents/CategoryScroll'
import Footer from '../components/footercomponents/Footer'
import { getData, serverURL } from '../services/FetchServices'
import styles from './page.module.css'


export default function HomePage() {
  const [category,setCategory]=useState([])

  const fetchAllCategory=async()=>{
    var response=await  getData('userinterface/fetch_all_category')

    setCategory(response.data)
  }

  useEffect(()=>{
    fetchAllCategory()
  },[])

  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}} >
      <Header/>
      <div className={styles.main} >
      <CategoryComponent data={category} />
      <CategoryScroll/>
      <div style={{width:'100%',height:'100%',overflow:'hidden'}} >
      <img src={`${serverURL}/images/card1.jpg`} className={styles.banner} />
      </div>
      <div style={{width:'100%',height:'100%',overflow:'hidden'}} >
      <img src={`${serverURL}/images/card2.jpg`} className={styles.banner}/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}
