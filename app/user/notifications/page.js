import React from "react";
import UserNotifications from "@/app/_components/UserNotifications";
import NotificationNotifier from "@/app/_components/NotificationNotifier";
import FollowingNotification from "@/app/_components/FollowingNotification";
import CommentNotification from "@/app/_components/CommentNotification";
export default function page() {
  return (
    <div>
      <UserNotifications />
      <div className=" flex flex-col gap-4 ">
        <h1 className="uppercase px-4 text-stone-500">Today</h1>
        <NotificationNotifier />
        <NotificationNotifier />
        <NotificationNotifier />
        <FollowingNotification />
        <CommentNotification />
        <h1 className="uppercase px-4 text-stone-500">Last 7 days</h1>
        <NotificationNotifier />
        <NotificationNotifier />
        <NotificationNotifier />
        <FollowingNotification />
        <CommentNotification />
      </div>
    </div>
  );
}
