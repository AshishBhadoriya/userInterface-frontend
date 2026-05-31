"use client";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { PiTagFill } from "react-icons/pi";
import styles from "./SubCategory.module.css";

export default function PriceCard({data,cartItem,setCartItem}) {
  const handleCart = (service, amount, offer) => {
    setCartItem((prev) => [
      ...prev,
      { service: service, amount: amount, offer: offer, qty: 1 },
    ]);
  };

  const exist = cartItem.find((item) => item.service === data.typeofservice);
  const increaseQty = () => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.service === data.typeofservice
          ? { ...item, qty: item.qty + 1 }
          : item,
      ),
    );
  };
  const decreaseQty = () => {
    setCartItem((prev) =>
      prev.map((item) =>
          item.service === data.typeofservice
            ? { ...item, qty: item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };
  const includes = () => {
    return data.include.map((include, index) => {
      return (
        <li
          key={index}
          style={{ fontSize: "12px", color: "#686868", marginLeft: "20px" }}
        >
          {include}
        </li>
      );
    });
  };
  return (
    <div className={styles.PriceBox}>
      <div className={styles.priceDetails}>
        <h4>{data.typeofservice}</h4>
        <div className={styles.ratingBox}>
          <img src="/rating.png" style={{ width: "13px", height: "13px" }} />
          <p>4.26(2.6M reviews)</p>
        </div>
        {data.offer == "" ? (
          <p className={styles.startPrice}>Starts at ₹{data.amount}</p>
        ) : (
          <div className={styles.offerPriceBox}>
            <h4 className={styles.offerPrice}>{`₹${data.offer}`}</h4>
            <s className={styles.offerPrice}>{`₹${data.amount}`}</s>
            <p className={styles.timeservice}>{data.timeservice}</p>
          </div>
        )}
        <div className={styles.tagBox}>
          <PiTagFill />
          <p>₹549 per AC</p>
        </div>
        <ul className={styles.includesList}>{includes()}</ul>
        <h6 className={styles.viewDetails}>View details</h6>
      </div>
      <div className={styles.imageWrapper}>
        <img src={data.picture} className={styles.serviceImage} />
        <div className={styles.cartButtonWrapper}>
          {exist?.qty > 0 ? (
            <div className={styles.qtyBox}>
              <LuMinus size="13" onClick={() => decreaseQty()} />
              <span>{exist?.qty}</span>
              <LuPlus size="13" onClick={() => increaseQty()} />
            </div>
          ) : (
            <button
              onClick={() =>
                handleCart(data.typeofservice, data.amount, data.offer)
              }
              className={styles.addButton}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
