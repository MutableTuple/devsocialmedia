import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500 bg-white"></div>
    </div>
  );
}
