import React from "react";
import Follwing from "./Follwing";
import UserPosts from "./UserPosts";
import { getAllPosts, getAllUsers } from "../_lib/data-service";

export default async function UserPostsAndFollwing() {
  const posts = await getAllPosts();
  const users = await getAllUsers();
  console.log("POSTS BY USERS", posts);
  console.log(" USERS", users);
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
      <UserPosts
        userImage={users[0].image}
        username={users[0].name}
        followers={"3.2B"}
        caption={posts[0].post_text}
        postImage={posts[0].post_image}
      />
      <UserPosts
        userImage={users[1].image}
        username={users[1].name}
        followers={"3.2B"}
        caption={posts[1].post_text}
        postImage={posts[1].post_image}
      />
      <UserPosts
        userImage={users[2].image}
        username={users[2].name}
        followers={"3.2B"}
        caption={posts[2].post_text}
        postImage={posts[2].post_image}
      />
      <UserPosts
        userImage={users[2].image}
        username={users[2].name}
        followers={"3.3B"}
        caption={posts[3].post_text}
        postImage={posts[3].post_image}
      />
    </div>
  );
}
