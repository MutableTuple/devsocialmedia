import React from "react";
import VariableUserImage from "./VariableUserImage";
import { formatNumber } from "../_utils/utils";

export default function PeopleYouFollowCard({ name = "user", src, followers }) {
  return (
    <div className="flex items-center gap-4 border-b py-2 hover:bg-stone-50 ">
      <VariableUserImage src={src} />
      <div className="flex flex-col ">
        <h1>{name}</h1>
        <p className="text-xs">{formatNumber(followers)} followers</p>
      </div>
    </div>
  );
}
