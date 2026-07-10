"use client";
import { BoatToursProps } from "@/@types/type";
import { useContext, useState } from "react";
import { createContext } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}

interface IWebContext {
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isXperiencePopUpOpen: boolean;
  setIsXperiencePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  popUpData: BoatToursProps["cards"][0];
  setPopUpData: React.Dispatch<
    React.SetStateAction<BoatToursProps["cards"][0]>
  >;
  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  openGallery: ({ images, index }: OpenGalleryProps) => void;

  closeGallery: () => void;

  selectRoom: string;
  setSelectRoom: React.Dispatch<React.SetStateAction<string>>;
}

export const WebContext = createContext<IWebContext>({
  selectedLocation: "",
  setSelectedLocation: () => {},

  isOpenMobileMenu: false,
  setIsOpenMobileMenu: () => {},
  isXperiencePopUpOpen: false,
  setIsXperiencePopUpOpen: () => {},
  popUpData: {} as BoatToursProps["cards"][0],
  setPopUpData: () => {},

  openImageModal: false,
  setOpenImageModal: () => {},

  passImagesArray: [],
  setPassImagesArray: () => {},

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => {},

  openGallery: () => {},
  closeGallery: () => {},

  selectRoom: "",
  setSelectRoom: () => {},
});

interface IWebContextProvider {
  children: React.ReactNode;
}

export const WebContextProvider = ({ children }: IWebContextProvider) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isXperiencePopUpOpen, setIsXperiencePopUpOpen] = useState(false);
  const [popUpData, setPopUpData] = useState<BoatToursProps["cards"][0]>(
    {} as BoatToursProps["cards"][0]
  );

  const [openImageModal, setOpenImageModal] = useState(false);

  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);

  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);

  const [selectRoom, setSelectRoom] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);

    setImageCurrentIndex(index);

    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);

    setPassImagesArray([]);

    setImageCurrentIndex(0);
  };

  return (
    <WebContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        selectRoom,
        setSelectRoom,
        openImageModal,
        setOpenImageModal,
        passImagesArray,
        setPassImagesArray,
        imageCurrentIndex,
        setImageCurrentIndex,
        openGallery,
        closeGallery,
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

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};
