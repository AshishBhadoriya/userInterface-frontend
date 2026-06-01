"use client";
import React from "react";
import PriceCard from "./PriceCard";

const dataa = [
  {
    name: "Super saver packages",
    subcategory: [
      {
        typeofservice: "Foam-jet service (2ACs)",
        amount: "1290",
        offer: "1198",
        timeservice: "1 hr 30 mins",
        picture: "foam-jet-service.jpg",
        include: [
          "Applicable for both window & split ACs",
          "Indoor unit deep cleaning with foam & jet spray",
        ],
      },
      {
        typeofservice: "Foam-jet service (3ACs)",
        amount: "1647",
        offer: "1290",
        timeservice: "2 hr 15 mins",
        picture: "foam-jet-service.jpg",
        include: [],
      },
      {
        typeofservice: "Foam-jet service (4ACs)",
        amount: "2596",
        offer: "1974",
        timeservice: "3 hr",
        picture: "foam-jet-service.jpg",
        include: [],
      },
      {
        typeofservice: "Foam-jet service (5ACs)",
        amount: "3245",
        offer: "2495",
        timeservice: "3 hr 45 mins",
        picture: "foam-jet-service.jpg",
        include: [],
      },
    ],
  },
  {
    name: "Service",
    subcategory: [
      {
        typeofservice: "Foam-jet AC service",
        amount: "649",
        offer: "",
        timeservice: "",
        picture: "foam-jet-service.jpg",
        include: [
          "Applicable for both window & split ACs",
          "Indoor unit deep cleaning with foam & jet spray",
        ],
      },
    ],
  },
  {
    name: "Repair & gas refill",
    subcategory: [
      {
        typeofservice: "AC repair",
        amount: "299",
        offer: "",
        timeservice: "",
        picture: "repair.jpg",
        include: ["Complete check-up to identify issues before repair"],
      },
      {
        typeofservice: "Gas refill & check-up",
        amount: "1980",
        offer: "",
        timeservice: "2 hr 30 mins",
        picture: "gasrefill.jpg",
        include: [],
      },
    ],
  },
  {
    name: "Installation/uninstallation",
    subcategory: [
      {
        typeofservice: "AC installation",
        amount: "799",
        offer: "",
        timeservice: "",
        picture: "installationcard.jpg",
        include: ["Installation of indoor & outdoor units with free gas check"],
      },
      {
        typeofservice: "AC uninstallation",
        amount: "599",
        offer: "",
        timeservice: "",
        picture: "uninstallation.jpg",
        include: ["Uninstallation of both indoor & outdoor units"],
      },
    ],
  },
];

export default function Packages({ cartItem, setCartItem,data }) {
  const fillData = () => {
    return data.map((item, i) => {
      return (
        <div key={i} style={{ height: "auto" }}>
          <p style={{ fontSize: "27px", fontWeight: "700" }}>{item.subcategoryname}</p>
              <PriceCard
                data={item}
                key={i}
                cartItem={cartItem}
                setCartItem={setCartItem}
                id={item.subcategoryid}
              />
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "#eee",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
      }}
    >
      {fillData()}
    </div>
  );
}
