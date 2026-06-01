"use client"
import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./SubCategory.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { serverURL } from "@/app/services/FetchServices";


export default function SubCategories({data,categoryName}) {
  const [active, setActive] = useState("");
  const [hover, setHover] = useState("");

  const fillSubcategory = () => {

    return data.map((item, i) => {
      return (
        <Grid size={4} key={i}>
          
          <div
            onClick={() => setActive(item.subcategoryid)}
            onMouseOver={() => setHover(item.subcategoryid)}
            onMouseLeave={() => setHover("")}
            className={styles.subCategoryIcon}
          >
            <img
              src={`${serverURL}/images/${item.subcategoryicon}`}
              style={{
                width: "70px",
                height: "70px",
                border: active === item.subcategoryid ? "2px solid black" : "none",
                borderRadius: "10px",
                padding: "2px",
              }}
            />
            <p style={{ fontSize: "12px", color: "#4d4c4c" }}>{item.subcategoryname}</p>
            <div
              style={{
                width: hover === item.name ? "90%" : "0%",
                transitionOrigin:'left',
                transition: "width 0.2s linear",
                color: "green",
                background: "black",
                height: "1px",
              }}
            ></div>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div className={styles.subCategoryContainer}>
      <p className={styles.subCategoryHeading}>{categoryName}</p>
      <div className={styles.subCategoryRating}>
        <img src={`${serverURL}/images/rating.png`} style={{ width: "15px", height: "15px" }} />
        <p
          style={{
            borderBottom: "0.5px dashed #727272",
            paddingBottom: "3px",
            boxSizing: "border-box",
          }}
        >
          4.76(13.3 M bookings)
        </p>
      </div>

      <div className={styles.subCategoryCoverBox}>
        <div>
          <p className={styles.subCategoryCoverTitle}>
            <img
              src="/checked.png"
              style={{ width: "12px", marginRight: "5px" }}
            />
            UC COVER
          </p>
          <p style={{ fontSize: "13px", marginTop: "10px" }}>
            Upto 30 days warranty on repairs
          </p>
        </div>
        <IoIosArrowForward />
      </div>
      <div className={styles.subCategorybox}>
        <Grid container spacing={3}>
          <Grid size={12} style={{ width: "100%" }}>
            <div className={styles.subCategorySelectRow}>
              <span className={styles.subCategorySelectText}>
                Select a service
              </span>
              <div className={styles.subCategoryLine}></div>
            </div>
          </Grid>
          {fillSubcategory()}
        </Grid>
      </div>
    </div>
  );
}
