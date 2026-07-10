"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import {
  FillCalenderIcon,
  FillLocation,
  FillUserIcon,
} from "./BookingFormIcons";

const locations = [
  {
    name: "One Off The South Delhi Edition",
    slug: "oneoffthesouthdelhiedition",
  },
];

export default function BookingForm() {
  const [location, setLocation] = useState(locations[0]);
  const [locationOpen, setLocationOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const locationRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target as Node)
      )
        setLocationOpen(false);
      if (guestRef.current && !guestRef.current.contains(e.target as Node))
        setGuestOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filteredLocations = useMemo(
    () =>
      locations.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );
  const formatDate = (date: Date | null) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const formatDisplay = (d: Date | null) =>
    d
      ? d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";

  const dateLabel =
    startDate || endDate
      ? `${formatDisplay(startDate)} – ${formatDisplay(endDate)}`
      : "Select Dates";

  const guestLabel = `${adults} Adult${adults !== 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""}`;

  const handleSearch = () => {
    window.open(
      `https://letsbook.me/booking/${location.slug}?checkin=${formatDate(startDate)}&checkout=${formatDate(endDate)}&adults=${adults}&children=${children}`,
      "_blank"
    );
  };

  // Shared field styles
  const fieldCls =
    "relative flex items-center gap-2.5 px-5 h-14 border-r-0 border-y-[0.5px] not-first:border-l-0 border-l  not-last:border-r  border-white/20 cursor-pointer hover:bg-white/5 transition-colors";
  const labelCls = " text-white tracking-wide whitespace-nowrap";

  return (
    <div className="w-full">
      {/* Bar */}
      <div className="grid w-full lg:grid-cols-[1fr_1fr_1fr_auto] md:grid-cols-2 grid-cols-1 items-center bg-white/20 backdrop-blur-sm ">
        {/* Location */}
        <div
          ref={locationRef}
          className={fieldCls}
          onClick={() => setLocationOpen((o) => !o)}
        >
          <FillLocation />
          <span className={labelCls}>
            {location.name !== locations[0].name
              ? location.name
              : "Find Location"}
          </span>

          {locationOpen && (
            <div className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background shadow-xl overflow-hidden">
              <input
                className="w-full bg-transparent px-4 py-2.5 text-sm  outline-none border-b "
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              {filteredLocations.map((item) => (
                <button
                  key={item.slug}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation(item);
                    setLocationOpen(false);
                  }}
                  className="block w-full px-4 py-2.5 text-left text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Guests */}
        <div
          ref={guestRef}
          className={fieldCls}
          onClick={() => setGuestOpen((o) => !o)}
        >
          <FillUserIcon />
          <span className={labelCls}>
            {adults || children ? guestLabel : "Select Guests"}
          </span>

          {guestOpen && (
            <div
              className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GuestRow
                label="Adults"
                value={adults}
                min={1}
                onChange={setAdults}
              />
              <GuestRow
                label="Children"
                value={children}
                min={0}
                onChange={setChildren}
              />
            </div>
          )}
        </div>

        {/* Dates */}
        <div
          className={fieldCls}
          style={{ borderRight: "0.5px solid rgba(255,255,255,0.15)" }}
        >
          <FillCalenderIcon />
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              setStartDate(dates[0]);
              setEndDate(dates[1]);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={today}
            placeholderText="Select Dates"
            dateFormat="MMM d, yyyy"
            className="w-full bg-transparent placeholder:text-white text-white outline-none cursor-pointer"
            wrapperClassName="w-full"
          />
        </div>

        {/* CTA */}
        <button
          onClick={handleSearch}
          className="h-14 px-7 bg-[#8b5a43] text-white text-[13px] font-medium tracking-widest uppercase hover:bg-[#734937] transition-colors whitespace-nowrap"
        >
          Find a Room
        </button>
      </div>
    </div>
  );
}

function GuestRow({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-3 last:mb-0">
      <span className="text-sm ">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && onChange(value - 1)}
          className="w-7 h-7 rounded-full border  hover:bg-white/10  transition flex items-center justify-center text-base leading-none"
        >
          −
        </button>
        <span className="w-4 text-center  text-sm">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-full border   hover:bg-white/10  transition flex items-center justify-center text-base leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}
