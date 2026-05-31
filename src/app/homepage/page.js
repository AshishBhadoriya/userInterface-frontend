import React from 'react'
import Header from '../components/headercomponents/Header'
import CategoryComponent from '../components/maincomponents/CategoryComponent'
import Main from '../components/maincomponents/Main'
import Footer from '../components/footercomponents/Footer'

export default function HomePage() {
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}} >
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
