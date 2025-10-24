"use client";
import { createContext, useState, useContext } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isActive, setIsActive] = useState("/");
  return (
    <NavContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </NavContext.Provider>
  );
};
