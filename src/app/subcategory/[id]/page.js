"use client"
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Header from "@/app/components/headercomponents/Header";
import SubCategories from "@/app/components/subcategorycomponents/SubCategories";
import Cart from "@/app/components/subcategorycomponents/Cart";
import Promise from "@/app/components/subcategorycomponents/Promise";
import Slider from "@/app/components/subcategorycomponents/Slider";
import Packages from "@/app/components/subcategorycomponents/Packages";
import Footer from "@/app/components/footercomponents/Footer";
import { postData } from "@/app/services/FetchServices";
import { useParams } from "next/navigation";

export default function subcategory() {
  const [cartItem, setCartItem] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categoryName,setCategoryName]=useState('')
  const halfScreen = useMediaQuery("(max-width:900px)");
  const params=useParams()
  const {id}= params

  useEffect(()=>{
      fetchAllSubCategory()
    },[])


  const fetchAllSubCategory=async()=>{
    var response=await postData('userinterface/fetch_all_subcategory_by_categoryid',{categoryid:id})
    setSubCategory(response.data)
      if (response.data.length > 0) {
    setCategoryName(response.data[0].categoryname);
  }

  }

  useEffect(()=>{
      fetchAllSubCategory()
    },[])


  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.leftFixedBox} >
          <SubCategories data={subCategory} categoryName={categoryName} />
          <div style={{ width: "100%", display: halfScreen ? "block" : "none" }}>
            <Cart cartItem={cartItem} setCartItem={setCartItem} />
            <Promise />
          </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Slider />
          <div className={styles.contentSection}>
            <div className={styles.packageSection}>
              <Packages
                cartItem={cartItem}
                setCartItem={setCartItem}
                data={subCategory} 
              />
            </div>
            <div
              style={{
                width: "60%",
                borderTop: "1px solid #c4c3c3",
                padding: "20px",
                position: "sticky",
                top: "80px",
                display: halfScreen ? "none" : "block",
              }}
            >
              <Promise />
              <Cart cartItem={cartItem} setCartItem={setCartItem} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
