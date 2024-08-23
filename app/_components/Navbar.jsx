import React from "react";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";
import IconContainer from "./IconContainer";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-4">
      <div>
        <h1 className="font-black">LOGO</h1>
      </div>
      <div className="flex gap-2">
        <IconContainer>
          <RiNotificationBadgeLine size={20} />
        </IconContainer>
        <IconContainer>
          <RiMailOpenLine size={20} />
        </IconContainer>
      </div>
    </div>
  );
}
