"use client";
import SubCategories from "../components/subcategorycomponents/SubCategories";
import Slider from "../components/subcategorycomponents/Slider";
import Packages from "../components/subcategorycomponents/Packages";
import Promise from "../components/subcategorycomponents/Promise";
import Cart from "../components/subcategorycomponents/Cart";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Footer from "../components/footercomponents/Footer";
import Header from "../components/headercomponents/Header";
import styles from "./page.module.css";

export default function subcategory() {
  const [cartItem, setCartItem] = useState([]);
  const [position, setPosition] = useState("");
  const halfScreen = useMediaQuery("(max-width:900px)");
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.leftFixedBox} >
          <SubCategories position={position} setPosition={setPosition} />
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
                position={position}
                setPosition={setPosition}
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
