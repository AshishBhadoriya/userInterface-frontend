"use client";
import React, { useEffect, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { PiTagFill } from "react-icons/pi";
import styles from "./SubCategory.module.css";
import { postData, serverURL } from "@/app/services/FetchServices";

export default function PriceCard({id,cartItem,setCartItem}) {
  const [service,setService]=useState([])
  const fetchAllService=async()=>{
    var response=await postData('userinterface/fetch_all_service_by_subcategoryid',{subcategoryid:id})
    setService(response.data)
  }

  useEffect(()=>{
      fetchAllService()
  },[])

  const handleCart = (service, amount, offer) => {
    setCartItem((prev) => [
      ...prev,
      { service: service, amount: amount, offer: offer, qty: 1 },
    ]);
  };

  
  const increaseQty = (service) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.service === service
          ? { ...item, qty: item.qty + 1 }
          : item,
      ),
    );
  };
  const decreaseQty = (service) => {
    setCartItem((prev) =>
      prev.map((item) =>
          item.service === service
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };
  
  const fillService=()=>{
    
    return service.map((item,i)=>{
      const exist = cartItem.find((cart) => cart.service === item.typeofservice);
      return(<div key={i} className={styles.PriceBox}>
      <div className={styles.priceDetails}>
        <h4>{item.typeofservice}</h4>
        <div className={styles.ratingBox}>
          <img src="/rating.png" style={{ width: "13px", height: "13px" }} />
          <p>4.26(2.6M reviews)</p>
        </div>
        {item.offer == "" && item.timeservice == "" ? (
            <p className={styles.startPrice}>Starts at ₹{item.amount}</p>
        ) : (
          <div className={styles.offerPriceBox}>
            <h4 className={styles.offerPrice}>{`₹${item.offer}`}</h4>
            <s className={styles.offerPrice}>{`₹${item.amount}`}</s>
            <p className={styles.timeservice}>{item.time_service}</p>
          </div>
        )}
        <div className={styles.tagBox}>
          <PiTagFill />
          <p>₹549 per AC</p>
        </div>
        <h6 className={styles.viewDetails}>View details</h6>
      </div>
      <div className={styles.imageWrapper}>
        <img src={`${serverURL}/images/${item.picture}`} className={styles.serviceImage} />
        <div className={styles.cartButtonWrapper}>
          {exist?.qty > 0 ? (
            <div className={styles.qtyBox}>
              <LuMinus size="13" onClick={() => decreaseQty(item.typeofservice)} />
              <span>{exist?.qty}</span>
              <LuPlus size="13" onClick={() => increaseQty(item.typeofservice)} />
            </div>
          ) : (
            <button
              onClick={() =>
                handleCart(item.typeofservice, item.amount, item.offer)
              }
              className={styles.addButton}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>)
    })
  }

  return (
    <div>
      {fillService()}
    </div>
  );
}
