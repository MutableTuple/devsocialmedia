import React from "react";
import Notification from "@/app/_components/Notification";
export default function layout() {
  return (
    <div className="grid grid-cols-6 h-dvh">
      <div className="col-start-1 col-end-3 bg-stone-200 max-h-full flex flex-col gap-4 p-4 overflow-y-scroll no-scrollbar">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
      <div className="col-start-3 col-end-7 bg-white p-4">US</div>
    </div>
  );
}
