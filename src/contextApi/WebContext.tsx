"use client";
import { useState } from "react";
import { createContext } from "react";

interface IWebContext {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WebContext = createContext({
  isOpenMobileMenu: false,
  setIsOpenMobileMenu: () => {},
} as IWebContext);

interface IWebContextProvider {
  children: React.ReactNode;
}

export const WebContextProvider = ({ children }: IWebContextProvider) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <WebContext.Provider
      value={{
        isOpenMobileMenu,
        setIsOpenMobileMenu,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};
