import React from "react";
import Follwing from "./Follwing";
import UserPosts from "./UserPosts";
import {
  getAllPosts,
  getAllUsers,
  getUser,
  getUserById,
} from "../_lib/data-service";

export default async function UserPostsAndFollwing() {
  const posts = await getAllPosts();
  const users = await getAllUsers();
  const post_user = await getUserById();

  console.log("POSTS BY USERS", posts);
  console.log(" USERS", users);
  return (
    <div className="grid sm:grid-cols-8 grid-cols-1 grid-rows-2  my-4 sm:gap-8 gap-2 sm:px-0 px-4  ">
      <UserPosts />
      <Follwing />
      {posts.map((post) => (
        <UserPosts
          key={post.id}
          userImage={post.Users.image}
          username={post.Users.name}
          followers={post.Users.followers_count}
          caption={post.post_text}
          postImage={post.post_image}
        />
      ))}
    </div>
  );
}
