"use client"
import React, { useState } from 'react'
import CategoryComponent from './CategoryComponent'
import CategoryScroll from './CategoryScroll'
import styles from "./Main.module.css"
import { serverURL } from '@/app/services/FetchServices'

export default function Main() {

  return (
    <div className={styles.main} >
      <CategoryComponent/>
      <CategoryScroll/>
      <div style={{width:'100%',height:'100%',overflow:'hidden'}} >
      <img src={`${serverURL}/images/card1.jpg`} className={styles.banner} />
      </div>
      <div style={{width:'100%',height:'100%',overflow:'hidden'}} >
      <img src={`${serverURL}/images/card2.jpg`} className={styles.banner}/>
      </div>
    </div>
  )
}
