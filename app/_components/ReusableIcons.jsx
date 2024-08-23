import React from "react";

export default function ReusableIcons({ children }) {
  return (
    <div className="h-9 w-9 rounded-full border flex items-center justify-center">
      {children}
    </div>
  );
}
