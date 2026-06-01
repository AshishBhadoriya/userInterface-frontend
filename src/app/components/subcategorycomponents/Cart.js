"use Client";
import React, { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import styles from "./SubCategory.module.css"
import { Delete } from "@mui/icons-material";
import { serverURL } from "@/app/services/FetchServices";

export default function Cart({ cartItem, setCartItem }) {
  const totalOfferAmount = cartItem.reduce(
    (total, item) => total + item.offer * item.qty,
    0,
  );
  const totalAmount = cartItem.reduce(
    (total, item) => total + item.amount * item.qty,
    0,
  );
  const increaseQty = (service) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.service === service ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (service) => {
    setCartItem((prev) =>
      prev.map((item) =>
          item.service === service ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };
  const deleteItem=(service)=>{
    setCartItem((prev)=>
      prev.map((item)=>
        item.service === service ? { ...item,qty: 0 } : item,
      )
      .filter((item) => item.qty > 0),
    
    )
  }

  const fillCart = () => {
    return cartItem.map((item, index) => {
      return (
        <div
          key={index}
          className={styles.cartItem}
        >
          <p style={{ fontSize: "14px", width: "110px" }}>{item.service}</p>
          <div className={styles.qtyBox} >
            <span style={{ cursor: "pointer" }}>
              <LuMinus size="13" onClick={() => decreaseQty(item.service)} />
            </span>
            <span>{item.qty}</span>
            <span style={{ cursor: "pointer" }}>
              <LuPlus size="13" onClick={() => increaseQty(item.service)} />
            </span>
          </div>
          <div className={styles.itemPrice}>
            <p>₹{item.offer * item.qty}</p>
            <s style={{ color: "grey" }}>₹{item.amount * item.qty}</s>
          </div>
          <span className={styles.delete} onClick={()=>deleteItem(item.service)} ><Delete size="10" /></span>
        </div>
      );
    });
  };

  return (
    <div className={styles.cartContainer}>
      {cartItem.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3>Cart</h3>
          <div className={styles.cartItems} >
          {fillCart()}
          </div>
          <div className={styles.viewCartBtn}>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <h5>₹{totalOfferAmount}</h5>
              <h6>
                <s style={{}}>₹{totalAmount}</s>
              </h6>
            </div>
            <h5>View Cart</h5>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart} >
          <img src={`${serverURL}/images/shopping-cart.png`} style={{ width: "50px" }} />
          <p>No items in your cart</p>
        </div>
      )}
    </div>
  );
}
