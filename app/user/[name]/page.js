import React from "react";
import UserProfileStatsCard from "@/app/_components/UserProfileStatsCard";
import UserProfilePost from "@/app/_components/UserProfilePost";

export default function page() {
  return (
    <div className="bg-white">
      <UserProfileStatsCard />
      <UserProfilePost />
    </div>
  );
}
