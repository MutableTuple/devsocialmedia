import React from "react";

export default function NotificationNotifier() {
  return (
    <div className="bg-white w-full flex justify-between items-center gap-8 p-4">
      <div className="flex gap-8">
        <img
          className="h-16 w-16"
          src="https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex">
            <img
              className="h-8 w-8 rounded-full object-cover outline outline-offset-1 outline-white"
              src="https://images.pexels.com/photos/15306427/pexels-photo-15306427/free-photo-of-arches-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />{" "}
            <img
              className="h-8 w-8 rounded-full object-cover outline outline-offset-1 outline-white -translate-x-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s"
              alt=""
            />{" "}
            <img
              className="h-8 w-8 rounded-full object-cover outline outline-offset-1 outline-white -translate-x-6"
              src="https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds"
              alt=""
            />{" "}
            <img
              className="h-8 w-8 rounded-full object-cover outline outline-offset-1 outline-white -translate-x-9"
              src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
              alt=""
            />{" "}
          </div>
          <h1 className="text-xs">
            Elon Musk, Mark Z, Bill G. & 920+ liked your post
          </h1>
        </div>
      </div>
      <div className="text-xs text-stone-600">27 mins ago</div>
    </div>
  );
}
