import React from "react";
import UserProfilePostCard from "./UserProfilePostCard";

export default function UserProfilePost() {
  return (
    <div className="md:p-8 p-2">
      <h1 className="uppercase mb-4">Posts by Strontium</h1>
      <div
        className="lg:columns-4 sm:columns-3 columns-2 gap-4"
        style={{
          columnGap: "1rem",
        }}
      >
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&w=600"
            }
            caption={"finding the bug by solvin the stupid equation 🥲🔥"}
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3375116/pexels-photo-3375116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3375116/pexels-photo-3375116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3222255/pexels-photo-3222255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="mb-4">
          <UserProfilePostCard
            src={
              "https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
      </div>
    </div>
  );
}
