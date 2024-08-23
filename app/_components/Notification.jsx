import React from "react";
import VariableUserImage from "./VariableUserImage";

export default function Notification() {
  return (
    <div className=" px-2 py-2 border-b border border-b-stone-100">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <VariableUserImage src="https://images.pexels.com/photos/3375116/pexels-photo-3375116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div>
            <h1 className="text-sm">Elon NotMusk</h1>
            <p className="text-xs">Lorem ipsum dolor sit .</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
