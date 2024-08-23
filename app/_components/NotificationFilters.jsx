import React from "react";
import NotificationFilterButton from "./NotificationFilterButton";
export default function NotificationFilters() {
  return (
    <div className="flex gap-4 px-4 sm:px-0 justify-center sm:justify-start flex-wrap ">
      <NotificationFilterButton selected={true}>All</NotificationFilterButton>
      <NotificationFilterButton selected={false}>
        Hearts
      </NotificationFilterButton>
      <NotificationFilterButton selected={false}>
        Comments
      </NotificationFilterButton>
      <NotificationFilterButton selected={false}>
        Mutual Requests
      </NotificationFilterButton>
    </div>
  );
}
