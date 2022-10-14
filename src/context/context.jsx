import { collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";

export const StateContext = createContext("");

const Provider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [usd, setUsd] = useState(0.00);
  const [btc, setBtc] = useState(0.00);


  return (
    <StateContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        usd,
        setUsd,
        btc,
        setBtc,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default Provider;
