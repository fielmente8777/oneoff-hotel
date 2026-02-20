"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { contacts, countries } from "@/utils/constant";
import axios, { AxiosError } from "axios";
import React, { useEffect, useRef, useState } from "react";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const hotels = React.useMemo(() => {
    return ["Select State", ...states];
  }, []);

  const hotelRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hotel, setHotel] = useState<string>(hotels[0]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);

  const [optionError, setOptionError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [consentError, setConsentError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  useClickOutside(hotelRef, () => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    if (!hotels.includes(hotel)) {
      setHotel(hotels[0]);
    }
  }, [hotels, hotel]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
      setPhoneError(
        value.length < 10 ? "Please enter a valid 10 digit number" : ""
      );
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const validateForm = (): boolean => {
    let valid = true;

    setOptionError("");
    setEmailError("");
    setPhoneError("");
    setConsentError("");

    if (hotel === "Select State") {
      setOptionError("Please select a state");
      valid = false;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (phone.length !== 10) {
      setPhoneError("Please enter a valid phone number");
      valid = false;
    }

    if (!consent) {
      setConsentError("Please accept the privacy policy");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contacts.formDomain,
          email: email,
          Name: `${firstName} ${lastName}`,
          Contact: `${countryCode}${phone}`,
          Description: `Selected Option: ${hotel}\nMessage: ${message}\naccepted : ${consent ? "yes  I consent to the collection of my data in accordance to One Off Hotel’s privacy policy. " : "no  I consent to the collection of my data in accordance to One Off Hotel’s privacy policy. "}`,
          created_from: "Webform",
          source_url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data?.Status) {
        alert("Message sent successfully!");

        // Reset form
        setHotel(hotels[0]);
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountryCode("+91");
        setPhone("");
        setMessage("");
        setConsent(false);
      } else {
        alert(data?.message || "Something went wrong");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message?: string }>;
        console.log("Axios Error:", axiosError.response?.data);
        alert(
          axiosError.response?.data?.message ||
            "Server error. Please try again."
        );
      } else {
        console.log("Unexpected Error:", error);
        alert("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  gap-6 justify-center items-center w-full h-full"
    >
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
        {/* STATE DROPDOWN */}
        <div className="col-span-2 w-full">
          <div
            ref={hotelRef}
            className="relative border border-secondary bg-transparent  w-full h-auto"
          >
            <button
              type="button"
              aria-label="Select hotel"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full py-4 px-4 h-full text-left flex items-center  justify-between gap-3"
            >
              <span className="uppercase  text-sm font-medium">{hotel}</span>
              <span
                className={` transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <DropDownIcon />
              </span>
            </button>

            <div
              className={`absolute top-full left-0 right-0 shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out overflow-y-scroll hidescrollbar ${
                isOpen
                  ? "max-h-60 opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              {hotels.map((option, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={option}
                  onClick={() => {
                    setHotel(option);
                    setIsOpen(false); // Close after selection
                  }}
                  className={`w-full px-4 bg-white text-wrap py-2 border-b border-clr6 text-left uppercase text-sm font-medium hover: hover:border-secondary transition-colors duration-300 ease-in-out ${
                    hotel === option ? " border-secondary" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {optionError && (
            <p className="text-red-500 text-sm mt-1">{optionError}</p>
          )}
        </div>

        {/* FIRST NAME */}
        <input
          type="text"
          name="name"
          id="name"
          aria-label="First Name"
          placeholder="First Name*"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-1 py-3 max-lg:col-span-2 border-b border-secondary  bg-transparent outline-none focus:outline-none"
        />

        {/* LAST NAME */}
        <input
          aria-label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name*"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-1 py-3 max-lg:col-span-2 border-b border-secondary  bg-transparent outline-none focus:outline-none"
        />

        {/* EMAIL */}
        <input
          aria-label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address*"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
          className="col-span-2  w-full px-1 py-3 border-b border-secondary  bg-transparent outline-none focus:outline-none"
        />
        {emailError && (
          <span className="text-red-500 col-span-2">{emailError}</span>
        )}

        {/* PHONE */}
        <div className="col-span-2 flex gap-4 items-center px-1 py-3 border-b border-secondary  bg-transparent">
          <select
            name="countryCode"
            id="countryCode"
            value={countryCode}
            aria-label="countryCode"
            onChange={(e) => setCountryCode(e.target.value)}
            className={`w-[${countryCode.length + 1}ch] bg-transparent outline-none focus:outline-none`}
          >
            {countries?.map((country, index) => (
              <option key={index} value={country.code} aria-label="country">
                {country.code}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            id="phone"
            aria-label="Phone Number"
            placeholder="Phone Number"
            value={phone}
            autoComplete="off"
            max={9999999999}
            onChange={handlePhoneChange}
            className="w-full bg-transparent no-spinner outline-none focus:outline-none"
          />
        </div>
        {phoneError && (
          <span className="text-red-500 col-span-2">{phoneError}</span>
        )}

        {/* MESSAGE */}
        <textarea
          aria-label="Message"
          name="message"
          id="message"
          cols={30}
          rows={1}
          autoComplete="off"
          placeholder="Message*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="col-span-2 resize-none w-full px-1 py-3 border-b border-secondary  bg-transparent outline-none focus:outline-none overflow-hidden"
        />
      </div>

      {/* CONSENT */}
      <div className="flex items-start w-full ">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mr-2 mt-1 md:w-6 w-4 rounded-none aspect-[1/1] border border-secondary focus:outline-none outline-none bg-transparent placeholder:bg-transparent checked:bg-transparent"
        />
        <label className="description1">
          By clicking submit, I consent to the collection of my data in
          accordance to One Off Hotel’s privacy policy. *
        </label>
      </div>
      {consentError && <span className="text-red-500">{consentError}</span>}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="btn mt-12 w-full bg-secondary text-white py-3 px-6 border border-secondary transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {loading ? "loading..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;

export const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const DropDownIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_77_758"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <rect width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_77_758)">
        <path
          d="M11.9999 15.0537L6.34619 9.39994L7.39994 8.34619L11.9999 12.9462L16.5999 8.34619L17.6537 9.39994L11.9999 15.0537Z"
          fill="#184B56"
        />
      </g>
    </svg>
  );
};
