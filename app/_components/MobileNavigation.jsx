import React from "react";
import {
  RiHome3Line,
  RiHome3Fill,
  RiSearchLine,
  RiSearchFill,
} from "react-icons/ri";
import { PiFilmStripLight, PiFilmStripFill } from "react-icons/pi";
import VariableUserImage from "./VariableUserImage";
export default function MobileNavigation() {
  return (
    <div className="block sm:hidden fixed bottom-0 left-0 right-0 mb-0 backdrop-blur-lg border-t py-1  bg-stone-900/20 ">
      <div className="flex items-center justify-between px-4 gap-3">
        <div className=" w-10 h-10 flex items-center justify-center text-white rounded-full hover:text-red-500 hover:cursor-pointer hover:bg-stone-50 duration-300 transition-all">
          <RiHome3Line size={20} />
        </div>
        <div className=" w-10 h-10 flex items-center justify-center text-white  rounded-full hover:text-blue-500 hover:cursor-pointer hover:bg-blue-50 duration-300 transition-all">
          <PiFilmStripLight size={20} />
        </div>{" "}
        <div className=" w-10 h-10 flex items-center justify-center text-white  rounded-full hover:text-blue-500 hover:cursor-pointer hover:bg-blue-50 duration-300 transition-all">
          <RiSearchLine size={20} />
        </div>{" "}
        <div className=" w-10 h-10 flex items-center justify-center text-white  rounded-full hover:text-stone-500 hover:cursor-pointer hover:bg-blue-50 duration-300 transition-all">
          <img
            src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-8 w-8 rounded-full outline outline-offset-1"
          />
        </div>
      </div>
    </div>
  );
}
