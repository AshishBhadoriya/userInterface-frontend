"use client"
import React from 'react'
import { Grid } from '@mui/material'
import HomePageImages from './HomePageImages'
import styles from "./Main.module.css"
import { serverURL } from '@/app/services/FetchServices'
import { useRouter } from 'next/navigation'

export default function CategoryComponent({data}) {

    const router=useRouter()

    const nextpage=(id)=>{
        router.push(`/subcategory/${id}`)
    }

    const fillCategory=()=>{
        return data.map((item,i)=>{
            return(
                <Grid size={{ xs: 3, sm: 2, md: 3, lg: 3 }} key={i} >
                    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',cursor:'pointer'}} >
                    <div onClick={()=>nextpage(item.categoryid)} className={styles.categoryBg} >
                    <img src={`${serverURL}/images/${item.categoryicon}`} style={{width:'40px'}} />
                    </div>
                    <p style={{color:'#444444',fontSize:'15px',textAlign:'center',width:'50px'}} >{item.categoryname}</p>
                    </div>
                </Grid>
            )
        })
    }
  return (
    <div style={{width:"100%",maxWidth:'1250px',display:'flex',alignItems:'center',marginTop:'35px',padding:'10px',gap:'100px'}} >
      <div className={styles.imageBox} >
        <h1 style={{fontSize:'40px',fontWeight:'600'}} >Home Services at your doorstep</h1>
        <div className={styles.categoryBox}>
            <Grid container spacing={3} >
                {fillCategory()}
            </Grid>
        </div>
      </div>
      <div className={styles.images} >
        <HomePageImages/>
        </div>
      </div>
  )
}
