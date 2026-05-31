"use client"
import { Grid } from '@mui/material'
import React from 'react'
import { TbBrandTwitter } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import styles from "./Footer.module.css"
import { serverURL } from '@/app/services/FetchServices'; 


export default function Footer() {
    
  return (
    <div className={styles.box} >
        <div style={{width:'100%',maxWidth:'1200px',margin:'auto'}} >
      <Grid container spacing={6} >
        <Grid size={12} >
            <img src={`${serverURL}/images/logo.png`} style={{width:'130px'}} />
        </Grid>
        
            <Grid size={3} >
                  <p className={styles.heading} >Company</p>
                  <ul className={styles.listStyle} >
                    <li>About us</li>
                    <li>Investor Relations</li>
                    <li>Terms & conditions</li>
                    <li>Privacy Policy</li>
                    <li>Anti-discrimination policy</li>
                    <li>Careers</li>
                  </ul>
            </Grid>
            <Grid size={3} >
                <p className={styles.heading} >For customers</p>
                <ul className={styles.listStyle}>
                    <li>UC reviews</li>
                    <li>Categories near you</li>
                    <li>Contact us</li>
                </ul>
            </Grid>
            <Grid size={3} >
                <p className={styles.heading} >For professional</p>
                <ul className={styles.listStyle}>
                    <li>Register as a professional</li>
                </ul>
            </Grid>
            <Grid size={3} >
                <p className={styles.heading} >Social Links</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'20px'}} >
                    <div className={styles.socialIcon} >
                    <TbBrandTwitter/>
                    </div>
                    <div className={styles.socialIcon}>
                    <TiSocialFacebookCircular />
                    </div>
                    <div className={styles.socialIcon}>
                    <FaInstagram/>
                    </div>
                    <div className={styles.socialIcon}>
                    <TiSocialLinkedinCircular/>
                    </div>
                </div>

                <div><img src={`${serverURL}/images/appstore.png`} style={{marginTop:'10px'}} /></div>
                <div><img src={`${serverURL}/images/googleplay.jpg`} style={{marginTop:'10px'}} /></div>
                
            </Grid>

        <Grid size={12}>
            <div style={{fontSize:'13px',color:'#535353'}} >
            <p>*As on December 31,2024</p>
            <p>Copyright 2026 Urban Company Limited (formaly Known as UrbanClap Technologies India Limited and UrbanClap Technologies India)</p>
            </div>
        </Grid>

      </Grid>
      </div>
    </div>
  )
}
