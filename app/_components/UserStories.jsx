import React from "react";
import UserStoryCircle from "./UserStoryCircle";
import { getAllUsers } from "../_lib/data-service";
export default async function UserStories() {
  const users = await getAllUsers();
  return (
    <div className="bg-white p-4 flex overflow-x-scroll gap-6 no-scrollbar">
      {users.map((user) => (
        <UserStoryCircle
          key={user.id}
          src={user.image}
          name={user.name.split(" ")[0]}
        />
      ))}
    </div>
  );
}
