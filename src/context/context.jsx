import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const StateContext = createContext("");

const Provider = ({ children }) => {
  const [userName, setUserName] = useState("False name");
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [usd, setUsd] = useState(0.00);
  const [btc, setBtc] = useState(0.00);


  useEffect(() => {
    // console.log(userId)
    // console.log(userName)
    // console.log(email);
  }, [userName, userId, email])


  return (
    <StateContext.Provider
      value={{
        userName,
        setUserName,
        userId,
        setUserId,
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
