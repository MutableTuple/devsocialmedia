import React from "react";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";
import IconContainer from "./IconContainer";
import Link from "next/link";
import UserLogged from "./UserLogged";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-4">
      <Link href={"/"}>
        <div className="relative border-b border-black ">
          <h1 className="font-bold text-black">
            Strontiu<span className="bg-black px-0.5 text-white">m</span>
          </h1>
          <span className="absolute left-0 bottom-4 scale-110">&#8227;</span>
        </div>
      </Link>
      <div className="flex gap-2">
        <UserLogged />
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
