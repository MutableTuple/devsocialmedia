import React from "react";

export default function NotificationFilterButton({ children, selected }) {
  return (
    <button
      className={`w-fit text-sm sm:text-md font-medium px-4 py-2 hover:bg-black hover:text-white ${
        selected ? "bg-black" : "bg-stone-200"
      } ${selected ? "text-white" : "text-stone-900"}`}
    >
      {children}
    </button>
  );
}
