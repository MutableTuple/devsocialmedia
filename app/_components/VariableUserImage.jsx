import React from "react";

export default function VariableUserImage({
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s",
}) {
  return (
    <img className="h-12 min-w-12 rounded-full object-cover" src={src} alt="" />
  );
}
