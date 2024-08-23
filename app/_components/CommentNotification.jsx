import React from "react";

export default function CommentNotification() {
  return (
    <div className="bg-white w-full flex gap-8 p-4">
      <img
        className="h-16 w-16 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s"
        alt=""
      />

      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-1.5">
          <img
            className="h-6 w-6 rounded-full outline outline-stone-200 outline-offset-1"
            src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
            alt=""
          />
          <h1 className="text-xs font-bold">Mark Zuckerberg</h1>
        </div>
        <h1 className="text-sm">
          Commented:
          <strong> that&apos;s epic code! 🔥</strong>
        </h1>
      </div>
    </div>
  );
}
