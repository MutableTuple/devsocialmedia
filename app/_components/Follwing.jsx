import React from "react";
import PeopleYouFollowCard from "./PeopleYouFollowCard";
import { getAllUsers } from "../_lib/data-service";

export default async function Follwing() {
  const users = await getAllUsers();
  return (
    <div className="sm:col-start-6 sm:col-end-10 bg-white p-4  max-h-72 overflow-y-scroll no-scrollbar hidden sm:block">
      <h1 className="mb-2">Following</h1>
      <hr />

      <div className="my-2">
        {users.map((user) => (
          <PeopleYouFollowCard
            key={user.image}
            src={user.image}
            name={user.name}
            followers={user.followers_count}
          />
        ))}
      </div>
    </div>
  );
}
