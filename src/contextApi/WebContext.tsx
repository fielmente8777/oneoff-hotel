"use client";
import { BoatToursProps } from "@/@types/type";
import { useState } from "react";
import { createContext } from "react";



interface IWebContext {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isXperiencePopUpOpen: boolean;
  setIsXperiencePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  popUpData: BoatToursProps["cards"][0];
  setPopUpData: React.Dispatch<React.SetStateAction<BoatToursProps["cards"][0]>>;
}

export const WebContext = createContext({
  isOpenMobileMenu: false,
  setIsOpenMobileMenu: () => {},
  isXperiencePopUpOpen: false,
  setIsXperiencePopUpOpen: () => {},
  popUpData: {} as BoatToursProps["cards"][0],
  setPopUpData: () => {},
} as IWebContext);

interface IWebContextProvider {
  children: React.ReactNode;
}

export const WebContextProvider = ({ children }: IWebContextProvider) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isXperiencePopUpOpen, setIsXperiencePopUpOpen] = useState(false);
  const [popUpData, setPopUpData] = useState<BoatToursProps["cards"][0]>(
    {} as BoatToursProps["cards"][0]
  );
  return (
    <WebContext.Provider
      value={{
        isOpenMobileMenu,
        setIsOpenMobileMenu,
        isXperiencePopUpOpen,
        setIsXperiencePopUpOpen,
        popUpData,
        setPopUpData,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};
