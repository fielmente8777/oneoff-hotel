"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { countries } from "@/utils/constant";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface formProps {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  tours?: boolean;
}
const ContactForm: React.FC<formProps> = ({ setShowModal, tours = false }) => {
  const hotels = React.useMemo(() => {
    return ["Select State", ...states];
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const hotelRef = useRef<HTMLDivElement | null>(null);

  const [hotel, setHotel] = useState(hotels[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [formRes, setFormRes] = useState(false);
  const [optionErrorMessage, setOptionErrorMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormRes(true);

    // Reset previous errors
    setErrorMessage("");
    setEmailErrorMessage("");
    setOptionErrorMessage("");

    let isValid = true;

    // Phone validation
    if (phone.length !== 10) {
      setErrorMessage("Please enter a valid phone number");
      isValid = false;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Please enter a valid email address");
      isValid = false;
    }

    // Dropdown validation
    const invalidOptions = [
      "select hotel",
      "select EXPERIENCE",
      "Select State",
    ];
    if (
      invalidOptions
        .map((opt) => opt.toLowerCase())
        .includes(hotel.toLowerCase())
    ) {
      setOptionErrorMessage("Please select an option");
      isValid = false;
    }

    if (!isValid) {
      setFormRes(false); // Stop loading animation if validation fails
      return; // Stop form submission
    }

    // Check if checkboxes are checked
    const subscribeChecked = (
      document.getElementById("subscribe") as HTMLInputElement
    )?.checked;
    const consentChecked = (
      document.getElementById("consent") as HTMLInputElement
    )?.checked;

    const subscribeMessage = subscribeChecked
      ? "Subscribed to latest events and offers. "
      : "";
    const consentMessage = consentChecked
      ? "Consent to the collection of data in accordance with the privacy policy. "
      : "";

    const fullMessage = `${subscribeMessage}${consentMessage}Selected Option: ${hotel}, Message: ${message}`;

    // Submit the form
    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          // Domain: "sumit", // Replace with your actual domain value
          Domain: "minimalist", // Replace with your actual domain value
          email: email,
          Name: `${firstName} ${lastName}`,
          Contact: `${countryCode}${phone}`, // Combine country code and phone number
          Description: fullMessage, // Include the modified message
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        // Reset form fields on success
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountryCode("+91");
        setPhone("");
        setMessage("");
        setHotel("");
        alert("Message sent successfully");
        if (setShowModal) {
          setShowModal(false);
        }
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormRes(false); // Stop loading animation
    }
  };

  useClickOutside(hotelRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (!hotels.includes(hotel)) {
      setHotel(hotels[0]);
    }
  }, [hotels, hotel]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:gap-12 gap-8 justify-center items-center w-full h-full"
    >
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
        <div className="col-span-2 w-full">
          <div
            ref={hotelRef}
            className="relative border border-clr2 bg-transparent  w-full h-auto"
          >
            <button
              type="button"
              aria-label="Select hotel"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full py-4 px-4 h-full text-left flex items-center  justify-between gap-3"
            >
              <span className="uppercase text-black text-sm font-medium">
                {hotel || hotels[0]}
              </span>

              <span
                className={`w-5 h-5 text-clr2 transition-transform ${
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
              {hotels.map((hotelOption, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={hotelOption}
                  onClick={() => {
                    setHotel(hotelOption);
                    setIsOpen(false); // Close after selection
                  }}
                  className={`w-full px-4 bg-white text-wrap py-2 border-b border-clr6 text-left uppercase text-sm font-medium hover:text-clr2 hover:border-clr2 transition-colors duration-300 ease-in-out ${
                    hotel === hotelOption ? "text-clr2 border-clr2" : ""
                  }`}
                >
                  {hotelOption}
                </button>
              ))}
            </div>
          </div>
          {optionErrorMessage && (
            <p className="text-red-500 text-sm mt-1">{optionErrorMessage}</p>
          )}
        </div>
        <input
          type="text"
          name="name"
          id="name"
          aria-label="First Name"
          placeholder="First Name*"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-1 py-3 max-lg:col-span-2 border-b border-clr2 placeholder:text-clr2 text-clr2 bg-transparent outline-none focus:outline-none"
        />
        <input
          aria-label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name*"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-1 py-3 max-lg:col-span-2 border-b border-clr2 placeholder:text-clr2 text-clr2 bg-transparent outline-none focus:outline-none"
        />
        <input
          aria-label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address*"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
          className="col-span-2  w-full px-1 py-3 border-b border-clr2 placeholder:text-clr2 text-clr2 bg-transparent outline-none focus:outline-none"
        />
        {emailErrorMessage && (
          <span className="text-red-500 col-span-2">{emailErrorMessage}</span>
        )}
        <div className="col-span-2 flex gap-4 items-center px-1 py-3 border-b border-clr2 placeholder:text-clr2 text-clr2 bg-transparent">
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
            className="w-full bg-transparent no-spinner outline-none focus:outline-none placeholder:text-clr2 text-clr2"
          />
        </div>
        {errorMessage && (
          <span className="text-red-500 col-span-2">{errorMessage}</span>
        )}
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
          className="col-span-2 resize-none w-full px-1 py-3 border-b border-clr2 placeholder:text-clr2 text-clr2 bg-transparent outline-none focus:outline-none"
        ></textarea>
      </div>
      <div className="flex-col flex gap-6">
        {/* <div className="flex w-full">
          <span className="">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              className="mr-2 md:w-6 w-4 rounded-none aspect-[1/1] border border-clr2 focus:outline-none outline-none bg-transparent placeholder:bg-transparent checked:bg-transparent"
            />
          </span>
          <label htmlFor="subscribe " className="text-clr2 description1">
            Sign up for latest events and offers
          </label>
        </div> */}
        <div className="flex items-start w-full">
          <span>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="mr-2 md:w-6 w-4 rounded-none aspect-[1/1] border border-clr2 focus:outline-none outline-none bg-transparent placeholder:bg-transparent checked:bg-transparent"
            />
          </span>
          <label htmlFor="consent " className="text-clr2 description1">
            By clicking submit, I consent to the collection of my data in
            accordance to One Off Hotel’s privacy policy. *
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn w-full bg-clr2 hover:bg-transparent text-secondary py-3 px-6 border border-clr2 transition-all duration-300 ease-in-out hover:text-clr2 uppercase active:scale-95 hover:scale-105"
      >
        {formRes ? "loading..." : "Submit"}
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
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99994 7.05369L0.346191 1.39994L1.39994 0.346191L5.99994 4.94619L10.5999 0.346191L11.6537 1.39994L5.99994 7.05369Z"
        fill="#184B56"
      />
    </svg>
  );
};
