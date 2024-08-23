import React from "react";
import PeopleYouFollowCard from "./PeopleYouFollowCard";
export default function Follwing() {
  return (
    <div className="sm:col-start-6 sm:col-end-10 bg-white p-4 max-h-fit max-h-72 overflow-y-scroll no-scrollbar hidden sm:block">
      <h1 className="mb-2">Following</h1>
      <hr />

      <div className="my-2">
        <PeopleYouFollowCard />
        <PeopleYouFollowCard />
        <PeopleYouFollowCard />
        <PeopleYouFollowCard />
        <PeopleYouFollowCard />
      </div>
    </div>
  );
}
