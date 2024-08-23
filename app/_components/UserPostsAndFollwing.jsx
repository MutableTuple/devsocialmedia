import React from "react";
import Follwing from "./Follwing";
import UserPosts from "./UserPosts";

export default function UserPostsAndFollwing() {
  return (
    <div className="grid sm:grid-cols-8 grid-cols-1 grid-rows-2  my-4 sm:gap-8 gap-2 sm:px-0 px-4  ">
      <UserPosts />
      <Follwing />
      <UserPosts
        userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s"
        username={"Elon Musk"}
        followers={"3.2B"}
        caption={"Jeff was at my home today"}
        postImage="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <UserPosts
        userImage="https://api.time.com/wp-content/uploads/2023/11/MRBEAST.jpg"
        username={"Jimmy Donaldson"}
        followers={"1.2M"}
        caption={"Can't fix this code on my own!🤦"}
        postImage="https://www.hubspot.com/hubfs/Google%20Drive%20Integration/Untitled%20document-Aug-24-2023-08-02-14-0205-PM.jpeg"
      />
    </div>
  );
}
