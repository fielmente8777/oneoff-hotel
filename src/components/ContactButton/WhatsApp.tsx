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

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <div className={`fixed bottom-24 lg:left-3 left-4 z-20 cursor-pointer`}>
      <Link
        href={`${whatsAppNumber ? `https://wa.me/${whatsAppNumber.replace(/\s+/g, "")}?text=Hello` : src} `}
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
