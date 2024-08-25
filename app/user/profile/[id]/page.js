"use client";

import React from "react";
import UserProfileStatsCard from "@/app/_components/UserProfileStatsCard";
import UserProfilePost from "@/app/_components/UserProfilePost";
import { useParams, usePathname } from "next/navigation";

export default function Page() {
  const { id } = useParams(); // This will retrieve the
  // const pathname = usePathname();
  // console.log("PATH NAME", pathname);
  console.log("PARAMS", id);

  return (
    <div className="bg-white">
      <UserProfileStatsCard userId={id} />
      <UserProfilePost />
    </div>
  );
}
