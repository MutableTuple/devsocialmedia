import React from "react";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";
import IconContainer from "./IconContainer";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-4">
      <div>
        <h1 className="font-black">LOGO</h1>
      </div>
      <div className="flex gap-2">
        <Link href={"/user/notifications"}>
          <IconContainer>
            <RiNotificationBadgeLine size={20} />
          </IconContainer>
        </Link>
        <Link href={"/user/messages"}>
          <IconContainer>
            <RiMailOpenLine size={20} />
          </IconContainer>
        </Link>
      </div>
    </div>
  );
}
