"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({
  whatsAppNumber,
  src,
}: {
  whatsAppNumber?: string;
  src?: string;
}) {
  const pathName = usePathname();

  const delhi = "https://wa.me/message/G2JQBLWQB52KC1";
  const dashashwamedh = "https://wa.me/message/OGSNGP4SG3LDE1";
  let whatsAppLink = "";

  if (pathName === "/the-south-delhi-edition/") {
    whatsAppLink = delhi;
  } else {
    whatsAppLink = dashashwamedh;
  }

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <div className={`fixed bottom-24 lg:left-3 left-4 z-20 cursor-pointer`}>
      <Link
        href={whatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
