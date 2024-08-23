import React from "react";
import VariableUserImage from "./VariableUserImage";
export default function PeopleYouFollowCard({ name = "user" }) {
  return (
    <div className="flex items-center gap-4 border-b py-2 hover:bg-stone-50 ">
      <VariableUserImage />
      <div className="flex flex-col ">
        <h1>{name}</h1>
        <p className="text-xs">2.71K followers</p>
      </div>
    </div>
  );
}
